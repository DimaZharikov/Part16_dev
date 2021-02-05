export interface stateProps {
    isLogin: boolean

}


const initialState: stateProps = {
    isLogin: false
}


//Type
export enum ActionType {
    SET_LOGIN = 'AUTH/SET_LOGIN'
}
//actions

interface Action<T> {
    type: ActionType,
    payload: T
}


const AuthReducer = (state: stateProps = initialState, action: AuthType): stateProps => {
    switch (action.type) {
        case ActionType.SET_LOGIN:
            return {...state,  ...action.payload}
    }
    return state
}

const setLoginAC = (isLogin:boolean) => ({type: ActionType.SET_LOGIN, payload: {isLogin}})

type SetLoginType = ReturnType<typeof setLoginAC>
type AuthType = SetLoginType

export default AuthReducer