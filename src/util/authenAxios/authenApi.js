import axios from './axiosCustomize';

const postRegister = (email, password, otp) => {
    const URL_API = "/register";
    const data = {
        email,
        password,
        otp
    }
    return axios.post(URL_API, data)
}

const postLogin = (email, password) => {
    const URL_API = "/login";
    const data = {
        email, password
    }

    return axios.post(URL_API, data)
}

const postLoginGoogle = (accessToken) => {
    const URL_API = "/loginGoogle";
    const data = {
        accessToken
    }

    return axios.post(URL_API, data)
}

const postLogout = () => {
    const URL_API = "/logout";
    return axios.post(URL_API)
}

const sendOTP = (email) => {
    const URL_API = "/sendOTP";
    return axios.post(URL_API, { email });
}

const resetPassword = (email, otp, newPassword) => {
    const URL_API = "/resetPassword";
    return axios.post(URL_API, { email, otp, newPassword });
}

// User CRUD operations
export const getAllUsers = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`/user/read?page=${page}&limit=${limit}`);
        return response;
    } catch (error) {
        console.error('getAllUsers API error:', error);
        throw error;
    }
}

export const createUser = async (userData) => {
    try {
        if (!userData.email || !userData.password) {
            throw new Error('Email and password are required');
        }
        const response = await axios.post('/user/create', userData);
        return response;
    } catch (error) {
        console.error('createUser API error:', error);
        throw error;
    }
}

export const updateUser = async (userData) => {
    try {
        console.log('Updating user with data:', userData);
        if (!userData.id) {
            throw new Error('User ID is required');
        }
        const response = await axios.put('/user/update', {
            id: userData.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            gender: userData.gender,
            dateOfBirth: userData.dateOfBirth,
            roleId: Number(userData.roleId)
        });
        console.log('Update API Response:', response);
        return response;
    } catch (error) {
        console.error('updateUser API error:', error);
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        console.log('Deleting user with ID:', userId);
        if (!userId) {
            throw new Error('User ID is required');
        }
        const response = await axios.delete('/user/delete', { data: { id: userId } });
        return response;
    } catch (error) {
        console.error('deleteUser API error:', error);
        throw error;
    }
}

export const getUserByEmail = async (email) => {
    try {
        console.log('Calling API with email:', email);
        const response = await axios.post('/user/get-by-email', { email });
        console.log('API Response:', response);
        return response;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
}

// Role CRUD operations
export const getAllRoles = async () => {
    try {
        const response = await axios.get('/role/read');
        return response;
    } catch (error) {
        console.error('getAllRoles API error:', error);
        throw error;
    }
}

export const createRole = async (roleData) => {
    try {
        if (!roleData.name) {
            throw new Error('Role name is required');
        }
        const response = await axios.post('/role/create', {
            name: roleData.name,
            description: roleData.description,
            permissions: roleData.permissions || []
        });
        return response;
    } catch (error) {
        console.error('createRole API error:', error);
        throw error;
    }
}

export const updateRole = async (roleData) => {
    try {
        if (!roleData.id || !roleData.name) {
            throw new Error('Role ID and name are required');
        }
        const response = await axios.put('/role/update', {
            id: roleData.id,
            name: roleData.name,
            description: roleData.description,
            permissions: roleData.permissions
        });
        return response;
    } catch (error) {
        console.error('updateRole API error:', error);
        throw error;
    }
}

export const deleteRole = async (roleId) => {
    try {
        if (!roleId) {
            throw new Error('Role ID is required');
        }
        const response = await axios.delete('/role/delete', {
            data: { id: roleId }
        });
        return response;
    } catch (error) {
        console.error('deleteRole API error:', error);
        throw error;
    }
}

// Permission CRUD operations
export const getAllPermissions = async () => {
    try {
        const response = await axios.get('/permission/read');
        return response;
    } catch (error) {
        console.error('getAllPermissions API error:', error);
        throw error;
    }
}

export const createPermission = async (permissionData) => {
    try {
        if (!permissionData.url) {
            throw new Error('Permission URL is required');
        }
        const response = await axios.post('/permission/create', {
            url: permissionData.url,
            description: permissionData.description
        });
        return response;
    } catch (error) {
        console.error('createPermission API error:', error);
        throw error;
    }
}

export const updatePermission = async (permissionData) => {
    try {
        if (!permissionData.id || !permissionData.url) {
            throw new Error('Permission ID and URL are required');
        }
        const response = await axios.put('/permission/update', {
            id: permissionData.id,
            url: permissionData.url,
            description: permissionData.description
        });
        return response;
    } catch (error) {
        console.error('updatePermission API error:', error);
        throw error;
    }
}

export const deletePermission = async (permissionId) => {
    try {
        if (!permissionId) {
            throw new Error('Permission ID is required');
        }
        const response = await axios.delete('/permission/delete', {
            data: { id: permissionId }
        });
        return response;
    } catch (error) {
        console.error('deletePermission API error:', error);
        throw error;
    }
}

// Permission-Role CRUD operations
export const getAllPermissionRoles = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`/permission-role/read?page=${page}&limit=${limit}`);
        return response;
    } catch (error) {
        console.error('getAllPermissionRoles API error:', error);
        throw error;
    }
}

export const createPermissionRole = async (data) => {
    try {
        if (!data.permissionId || !data.roleId) {
            throw new Error('Permission ID and Role ID are required');
        }
        const response = await axios.post('/permission-role/create', data);
        return response;
    } catch (error) {
        console.error('createPermissionRole API error:', error);
        throw error;
    }
}

export const updatePermissionRole = async (data) => {
    try {
        const response = await axios.put('/permission-role/update', data);
        return response;
    } catch (error) {
        console.error('updatePermissionRole API error:', error);
        throw error;
    }
}

export const deletePermissionRole = async (permissionId, roleId) => {
    try {
        const response = await axios.delete('/permission-role/delete', {
            data: { permissionId, roleId }
        });
        return response;
    } catch (error) {
        console.error('deletePermissionRole API error:', error);
        throw error;
    }
}

export {
    postRegister,
    postLogin,
    postLoginGoogle,
    postLogout,
    sendOTP,
    resetPassword
}