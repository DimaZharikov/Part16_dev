import {FC} from "react";

import {NavLink} from "react-router-dom";
import {RoutingType} from "../../../Routes/Routes";
import style from './NavigationContainer.module.scss'

const NavigationContainer: FC = () => {

    return (
    <nav>
        <div className={style.wrapper}>
            <NavLink
                to={RoutingType.auth}
                activeClassName={style.active}
            >Auth</NavLink>
            <NavLink
                to={RoutingType.registration}
                activeClassName={style.active}
            >Registration</NavLink>
            <NavLink
                to={RoutingType.profile}
                activeClassName={style.active}
            >Profile</NavLink>
            <NavLink
                to={RoutingType.resPass}
                activeClassName={style.active}
            >Password Recovery</NavLink>
            <NavLink
                to={RoutingType.error}
                activeClassName={style.active}
            >ERROR</NavLink>
        </div>
        <div>
            <NavLink to={RoutingType.packs}>
                <h3>Page of Packs</h3>
            </NavLink>
        </div>
        <div>
            <NavLink to={RoutingType.cards}>
                <h3>cards</h3>
            </NavLink>
        </div>

    </nav>
    )
}


export default NavigationContainer