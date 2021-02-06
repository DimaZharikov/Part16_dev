import {ResponseTypeProfile} from '../../API/Api'


export interface stateProps {
    profile?: ResponseTypeProfile

}


const initialState = {
    profile: undefined
}


//Type
export enum ActionType {
    SET_PROFILE = 'PROFILE/SET_PROFILE'
}


//actions

// interface Action<T> {
//     type: ActionType,
//     payload: T
//
// }







const ProfileReducer = (state: stateProps  = initialState, action: ActionProfileType): stateProps  => {
    switch (action.type) {

        case ActionType.SET_PROFILE:
            return {...state, profile: {...action.payload}}
        default: return  state
    }

}

export const setProfileAc = (profile: ResponseTypeProfile) => {
    return {type: ActionType.SET_PROFILE, payload: profile}
}

export type ActionProfileType = ReturnType<typeof setProfileAc>


export default ProfileReducer