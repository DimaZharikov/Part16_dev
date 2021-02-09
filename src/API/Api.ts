import axios from "axios";

const configOMB = {
    // localBack
    baseURL: "http://localhost:7542/2.0/",
    // heroku
    // baseURL:'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
};

const axiosInstance = axios.create(configOMB);
export type ResponseTypeProfile = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
}

export type ResponseTypeLogOut = {
    info: string
    error: string;
}

export type ResponseTypeRegistration = {
    email: string,
    password: string,
    error?: string | undefined
}

export const ApiAuth = {
    login(email: string, password: string, rememberMe: boolean) {
        return axiosInstance.post<ResponseTypeProfile>('/auth/login', {email, password, rememberMe})
    },
    logOut() {
        return axiosInstance.delete<ResponseTypeLogOut>('/auth/me')
    },
    authMe() {
        return axiosInstance.post<ResponseTypeProfile>('/auth/me')
    },
    changeName(name:string) {
        return axiosInstance.put<{ updatedUser: ResponseTypeProfile }>('/auth/me', {name: name})
    }
}


export const ApiRegistration = {
    register(email: string, password: string) {
        return axiosInstance.post <ResponseTypeRegistration>('auth/register', {email, password})
    }
}