import {FC} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthContainer from "../PagesApp/WrappedPages/AuthPage/AuthContainer";
import RegistrationContainer from "../PagesApp/WrappedPages/RegistartionPage/RegistrationContainer";
import ProfileContainer from "../PagesApp/WrappedPages/ProfilePage/ProfileContainer";
import ResPasswordContainer from "../PagesApp/WrappedPages/ResPasswordPage/ResPasswordContainer";
import NewPasswordContainer from "../PagesApp/WrappedPages/NewPasswordPage/NewPasswordContainer";
import ErrorContainer from "../PagesApp/WrappedPages/ErrorPage/ErrorContainer";
import PacksContainer from "../PagesApp/WrappedPages/PacksPage/PacksContainer";


export enum RoutingType {
    auth="/auth",
    registration = "/registration",
    profile = "/profile",
    error="/404",
    resPass = "/resPassword",
    newPass ="/set-new-password",
    packs = "/packs",
    cards = "/cards"
}




const Routes : FC = () => {
    return (<>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={RoutingType.profile}/>}/>
                <Route exact path={RoutingType.auth} render={()=> <AuthContainer/>}/>
                <Route exact path = {RoutingType.registration} render ={()=> <RegistrationContainer/>}/>
                <Route exact path = {RoutingType.profile} render = {()=><ProfileContainer/>}/>
                <Route exact path = {RoutingType.resPass} render = {()=> <ResPasswordContainer/>}/>
                <Route path = {RoutingType.newPass} render = {()=> <NewPasswordContainer/>}/>
                <Route  exact path = {RoutingType.packs} render = {()=> <PacksContainer/>}/>
                <Route path = {`${RoutingType.cards}/:cardId`} render = {()=> <PacksContainer/>}/>
                <Route path={RoutingType.error} render={()=> <ErrorContainer/>}/>
                <Redirect from={'*'} to={RoutingType.error}/>
            </Switch>
    </>)
}


export default Routes;