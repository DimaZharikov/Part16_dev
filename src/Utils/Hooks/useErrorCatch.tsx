
import {setError, setStatus} from "../../Redux/PacksPageReducer/PacksPageReducer";

import {Dispatch} from "react";

const UseErrorCatch = (e:any, dispatch: Dispatch<any>) => {

    const error = !e.response
        ? e.message
        : (e.response.error + 'checkError')
    console.log(error)
    console.log('errors:', {...e})
    dispatch(setError(error))
    dispatch(setStatus('failed'))


};

export default UseErrorCatch;