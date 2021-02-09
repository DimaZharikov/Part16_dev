import {FC, useState} from "react";
import ProfileComponent from "./ProfileComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";
import {Link, Redirect} from "react-router-dom";
import {RoutingType} from "../../../Routes/Routes";
import {setChangeName, setLogOut} from "../../../Redux/AuthReducer/AuthReducer";
import Spinner from "../../../Common/preloader/Spinner";
import style from './ProfileContainer.module.scss'
import Modal from "../../../Components/Modal/Modal";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";

interface Props {

}

const ProfileContainer: FC<Props> = () => {
    const isLogin = useSelector((state: AppRootStateType) => state.auth.isLogin)
    const profile = useSelector((state: AppRootStateType) => state.profile.profile)
    const status = useSelector((state: AppRootStateType) => state.auth.status)
    const errorMes = useSelector((state: AppRootStateType) => state.auth.errorMes)
    const [name, setName] = useState<string>()
    const dispatch = useDispatch();
    console.log(errorMes)
    const [modal, setModal] = useState<boolean>(false)

    const changeNameHandler = () => {
        if (name) {
            dispatch(setChangeName(name))
            setModal(false)
        }
    }


    if (!isLogin || !profile) {
        return <Redirect to={'/auth'}/>
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
        return (
            <div className={style.profile_main_wrapper}>
                <ProfileComponent title={'Profile Page'}/>
                <div className={style.profile_item_wrapper}>
                    <div className={style.profile_item}><span className={style.item_title}>E-mail:</span> <span>{profile.email}</span></div>
                    <div className={style.profile_item}><span className={style.item_title}>name:</span> <span>{profile.name}</span> <span className={style.change_name} onClick={() => setModal(true)}>Change name</span></div>
                    <div className={style.profile_item}><span className={style.item_title}>id:</span><span>{profile._id}</span></div>
                </div>
                <Link to={RoutingType.auth} onClick={logOutHandler}>
                    <span>Log Out</span>
                </Link>
                <Modal
                    modal={modal}
                    setModal={setModal}
                >
                    <SuperInputText
                    value={name}
                    onChangeText={setName}
                    placeholder={'New-Name'}

                    />
                    <SuperButton onClick={changeNameHandler}>Change Name</SuperButton>
                    {!!errorMes? <span>errorMes</span> : null}
                </Modal>
            </div>)
    } else {
        return <div/>
    }

}


export default ProfileContainer