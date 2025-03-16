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
    email: '',
    userId: '',
    roleId: '',
    isPremium: false, // Thêm state để theo dõi trạng thái premium
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
        updateRoleId: (state, action) => {
            state.roleId = action.payload;
        },
        setPremium: (state, action) => {
            state.isPremium = action.payload;
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

                const { firstName, lastName, picture, email, userId, role } = action?.payload?.DT ?? {};
                console.log('Login Response:', action?.payload?.DT);
                console.log('Role from response:', role);
                
                state.fullname = firstName && lastName ? `${firstName} ${lastName}` : "Gym Bro";
                state.picture = picture || 'https://imgcdn.stablediffusionweb.com/2024/5/17/f5fb790b-36d9-4504-9ad0-d1142269fe98.jpg';
                state.email = email;
                state.userId = userId;
                state.roleId = role;
                // Set isPremium là true nếu roleId là 1 hoặc 3
                state.isPremium = role === 1 || role === 3;
                console.log('isPremium after set:', state.isPremium);
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

                const { firstName, lastName, picture, email, userId, role } = action?.payload?.DT ?? {};
                state.fullname = (firstName && lastName) ? `${firstName} ${lastName}` : 'Gym Bro';
                state.picture = picture || 'https://imgcdn.stablediffusionweb.com/2024/5/17/f5fb790b-36d9-4504-9ad0-d1142269fe98.jpg';
                state.email = email;
                state.userId = userId;
                state.roleId = role;
                // Set isPremium là true nếu roleId là 1 hoặc 3
                state.isPremium = role === 1 || role === 3;
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
                state.fullname = '';
                state.picture = '';
                state.email = '';
                state.userId = '';
                state.roleId = null; // Reset roleId khi logout
                state.isPremium = false; // Reset isPremium khi logout
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFailed = true;
            });
    },
});

export const { toggleLanguage, updateRoleId, setPremium } = systemSlice.actions;

export default systemSlice.reducer;
