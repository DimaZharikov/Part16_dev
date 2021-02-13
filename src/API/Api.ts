import axios from "axios";


//first deploy at 10.02.21
const configOMB = {
    // localBack
    // baseURL: "http://localhost:7542/2.0/",
    // heroku
     baseURL:'https://neko-back.herokuapp.com/2.0',
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
    token: string
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


export interface ResponseTypeCardsPacksData  {
    _id: string,
    userId: string,
    name: string,
    path: '/def',
    cardsCount: number,
    grade: number,
    shots: number,
    rating: number,
    type : 'pack' | 'folder',
    created: Date;
    updated: Date;

}

export interface ResponseTypeCardsPacks {
    cardPacks: Array<ResponseTypeCardsPacksData>,
    page:number
    pageCount:number
    cardPacksTotalCount:number
    minCardsCount:number
    maxCardsCount:number
    token:string
    tokenDeathTime:number
}



export const ApiAuth = {
        login(email: string, password: string, rememberMe: boolean) {
            return axiosInstance.post<ResponseTypeProfile>('/auth/login', {email, password, rememberMe})
        },
        logOut() {
            return axiosInstance.delete<ResponseTypeLogOut>('/auth/me')
        },
        recovery(email: string) {
            return axiosInstance.post('/auth/forgot', {
                email, message: `<div style="background-color: lime; padding: 15px">	
	password recovery link: 
	<a href='https://dimazharikov.github.io/Part16_dev/#/set-new-password/$token$'>
	link</a></div>`
            })
        },
    authMe() {
        return axiosInstance.post<ResponseTypeProfile>('/auth/me')
    },
    changeName(name:string) {
        return axiosInstance.put<{ updatedUser: ResponseTypeProfile }>('/auth/me', {name: name})
    },
    changePas(password:string, token:string){
        return axiosInstance.post('/auth/set-new-password', {password:password,
            resetPasswordToken:token})
    }


    }


export const ApiRegistration = {
    register(email: string, password: string) {
        return axiosInstance.post <ResponseTypeRegistration>('auth/register', {email, password})
    }
}


export const ApiPack = {
    getCardPacks(page: number,pageCount:number) {
        return axiosInstance.get<ResponseTypeCardsPacks>(`cards/pack`, {params: {page, pageCount}})
    },
    addCardPacks(body: {}) {
        return axiosInstance.post<ResponseTypeCardsPacksData>(`cards/pack`, {cardsPack: body})
    },
    deleteCardPack(id: string) {
        return axiosInstance.delete<ResponseTypeCardsPacksData>(`cards/pack`, {params: {id}})
    },
    putCardPack (body: {_id: string, name: string}) {
        return axiosInstance.post<ResponseTypeCardsPacksData>(`cards/pack`, {body})
    }

}