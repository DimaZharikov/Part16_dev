export interface stateProps {
    email: string,
    password: string,
    error?: string | undefined

}


const initialState: stateProps = {
    email: '',
    password: '',
    error: undefined


}


//Type
export enum ActionType {
    SET_EMAIL = 'REGISTRATION_COMPONENT/SET_EMAIL',
    SET_PASSWORD = 'REGISTRATION_COMPONENT/SET_PASSWORD'
}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}


// ActionCreate
export const setEmail = (valueEmail: string): Action<string> => ({
    type: ActionType.SET_EMAIL,
    payload: valueEmail
})


export const SetPassword = (valuePassword : string): Action<string> => ({
    type: ActionType.SET_PASSWORD,
    payload: valuePassword
})

//Thunk





const RegistrationReducer = (state: stateProps = initialState, action: Action<string>): stateProps => {
    switch (action.type) {
        //values from UI for push Email
        case ActionType.SET_EMAIL:
            return {
                ...state, email: action.payload
            };
            //values from UI for push Password
        case ActionType.SET_PASSWORD:
            return {
                ...state, password: action.payload
            };
    }
    return state
}

export default RegistrationReducer