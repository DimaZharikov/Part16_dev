import {FC, Fragment} from "react";

import {NavLink} from "react-router-dom";
import {RoutingType} from "../../../Routes/Routes";


const NavigationContainer : FC = ({

}) => {

    return (<Fragment>
        <div>
            <NavLink to={RoutingType.auth}>
                <h3>Auth</h3>
            </NavLink>
        </div>

        <div>
            <NavLink to={RoutingType.registration}>
                <h3>Registration</h3>
            </NavLink>
        </div>

        <div>
            <NavLink to={RoutingType.error}>
                <h3>ERROR</h3>
            </NavLink>
        </div>

        <div>
            <NavLink to={RoutingType.newPass}>
                <h3>New Password</h3>
            </NavLink>
        </div>

        <div>
            <NavLink to={RoutingType.profile}>
                <h3>Profile</h3>
            </NavLink>
        </div>

        <div>
            <NavLink to={RoutingType.resPass}>
                <h3>Reset Password</h3>
            </NavLink>
        </div>
    </Fragment>)
}


export default NavigationContainer