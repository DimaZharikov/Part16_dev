
import {setError, setStatus} from "../../Redux/PacksPageReducer/PacksPageReducer";

import {Dispatch} from "react";

const HelperErrorCatch = (e:any, dispatch: Dispatch<any>) => {

    const error =  e.response
        ? e.response.data.error
        : (e.message + ', more details in the console');
    console.log(error)
    console.log('errors:', {...e})
    dispatch(setError(error))
    dispatch(setStatus('failed'))


};

export default HelperErrorCatch;