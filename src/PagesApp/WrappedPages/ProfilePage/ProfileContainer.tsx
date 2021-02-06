import {FC} from "react";
import ProfileComponent from "./ProfileComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";
import {Link, Redirect} from "react-router-dom";
import {RoutingType} from "../../../Routes/Routes";
import {setLogOut} from "../../../Redux/AuthReducer/AuthReducer";
import Spinner from "../../../Common/preloader/Spinner";


interface Props {

}

const ProfileContainer: FC<Props> = () => {
    const isLogin = useSelector((state: AppRootStateType) => state.auth.isLogin)
    const profile = useSelector((state: AppRootStateType) => state.profile.profile)
    const status = useSelector((state: AppRootStateType) => state.auth.status)
    const dispatch = useDispatch();
    if (!isLogin) {
        return <Redirect to={'/'}/>
    }
    const logOutHandler = () => {
        dispatch(setLogOut())
    }
    if (status === "loading") {
        return <Spinner/>
    } else if (status === "failed") {
        return (
            <div>
                <h1>something wrong</h1>
            </div>
        )
    }
    if (profile) {
        return (<div>
            <ProfileComponent title={'Profile Page'}/>
            <ul>
                <li><span>{profile.email}</span></li>
                <li><span>{profile.name}</span></li>
                <li><span>{profile._id}</span></li>
            </ul>
            <Link to={RoutingType.auth} onClick={logOutHandler}>
                <h3>Log Out</h3>
            </Link>
        </div>)
    } else {
        return <div/>
    }

}


export default ProfileContainer