export interface stateProps {


}


const initialState: stateProps = {



}


//Type
export enum ActionType {
}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}







const ProfileReducer = (state: stateProps = initialState, action: Action<any>): stateProps => {
    switch (action.type) {

    }
    return state
}

export default ProfileReducer