import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRouter() {

    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>

                <Switch>
                    <PublicRoutes exact path="/login" component={LoginScreen} isAuthenticated={user.logged}></PublicRoutes>
                    <PrivateRoutes path="/" component={DashboardRoutes} isAuthenticated={user.logged}></PrivateRoutes>

                </Switch>
            </div>
        </Router >
    );
}