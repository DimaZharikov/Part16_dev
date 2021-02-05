import {FC} from "react";
import ProfileComponent from "./ProfileComponent";


interface Props {

}

const ProfileContainer : FC<Props> = ({
                                           ...props
}) => {return(<div>
    <ProfileComponent title = {'Profile Page'}/>
</div>)}


export default ProfileContainer