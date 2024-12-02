import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postLogin, postLogout, postRegister, postLoginGoogle } from '../../util/authenAxios/authenApi';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    isLogin: false,
    fullname: '',
    picture: '',
    language: 'EN',
};

export const loginUser = createAsyncThunk('system/loginUser', async ({ email, password }) => {
    const response = await postLogin(email, password);
    return response;
});

export const loginGoogleUser = createAsyncThunk('system/loginGoogleUser', async (accessToken) => {
    const response = await postLoginGoogle(accessToken);
    return response;
});

export const registerUser = createAsyncThunk('system/registerUser', async ({ email, password }) => {
    const response = await postRegister(email, password);
    return response;
});

export const logoutUser = createAsyncThunk('system/logoutUser', async () => {
    const response = await postLogout();
    return response;
});

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === 'EN' ? 'VI' : 'EN';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isFailed = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFailed = false;
                state.isLogin = true;

                const { firstName, lastName, picture } = action?.payload?.DT ?? {};
                state.fullname = firstName && lastName ? `${firstName} ${lastName}` : "Gym Bro";
                state.picture = picture || 'https://imgcdn.stablediffusionweb.com/2024/5/17/f5fb790b-36d9-4504-9ad0-d1142269fe98.jpg';
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFailed = true;
                state.isLogin = false;
            })
            .addCase(loginGoogleUser.pending, (state) => {
                state.isFailed = false;
            })
            .addCase(loginGoogleUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFailed = false;
                state.isLogin = true;

                const { given_name, family_name, picture } = action?.payload?.DT ?? {};
                console.log('check >>> ', given_name, family_name, picture, action?.payload?.DT)
                state.fullname = (given_name && family_name) ? `${given_name} ${family_name}` : 'Gym Bro';
                state.picture = picture || 'https://imgcdn.stablediffusionweb.com/2024/5/17/f5fb790b-36d9-4504-9ad0-d1142269fe98.jpg';
            })
            .addCase(loginGoogleUser.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFailed = true;
                state.isLogin = false;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isFailed = false;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFailed = false;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFailed = true;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isFailed = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFailed = false;
                state.isLogin = false;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFailed = true;
            });
    },
});

export const { toggleLanguage } = systemSlice.actions;

export default systemSlice.reducer;
