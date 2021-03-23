//import { useGetPermissions } from "ra-core";
import decodeJwt from 'jwt-decode';

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ accessToken }) => {
                const decodedToken = decodeJwt(accessToken);
                localStorage.setItem('token', accessToken);
                localStorage.setItem('permissions', decodedToken.permissions);
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject({ redirectTo: '/' });
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, username } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, username });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    // ...
};

export default authProvider;