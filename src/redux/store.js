import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import exerciseReducer from './slices/exerciseSlice'
import systemSlice from './slices/systemSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

const customMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
    return result;
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['system', 'exercise'],
    debug: true, // Enable debug
    transforms: [], // Add this if you need transforms
    throttle: 1000, // Add throttling to prevent too frequent saves
    version: 1
}

const rootReducer = combineReducers({
    user: userReducer,
    exercise: exerciseReducer,
    system: systemSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            immutableCheck: false, // Add this if you're having immutability issues
        }).concat(customMiddleware)
})

// Load state from localStorage on app start
const savedState = localStorage.getItem('reduxState');
if (savedState) {
    store.dispatch({ type: 'HYDRATE', payload: JSON.parse(savedState) });
}

// Add subscribers to debug state changes
store.subscribe(() => {
    console.log('State updated:', store.getState())
})

export const persistor = persistStore(store, null, () => {
    console.log('Rehydration completed')
})