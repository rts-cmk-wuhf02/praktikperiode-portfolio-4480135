import React from "react";
import ReactDOM from "react-dom";
import { Router, Location } from "@reach/router";

import Home from "./js/Home";
import Creations from "./js/Creations";
import CreationDetails from "./js/CreationDetails";
import Contact from "./js/Contact";

import Admin from "./js/Admin";
import AdminCreations from "./js/AdminCreations";
import AdminLogin from "./js/AdminLogin";

import { HelmetProvider } from "react-helmet-async";

import "./css/app.scss";

class OnRouteChangeWorker extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.action();
        }
    }

    render() {
        return null;
    }
}

const OnRouteChange = ({ action }) => (
    <Location>
        {({ location }) => (
            <OnRouteChangeWorker location={location} action={action} />
        )}
    </Location>
);

const App = () => {
    return (
        <React.StrictMode>
            <HelmetProvider>
                <Router>
                    <Home path="/" />
                    <Creations path="/creations" />
                    <CreationDetails path="/creation/:url_slug" />
                    <Contact path="/contact" />

                    <Admin path="/admin" />
                    <AdminCreations path="/admin/creations" />
                    <AdminLogin path="/admin/login" />
                </Router>

                <OnRouteChange
                    action={() => {
                        window.scrollTo(0, 0);
                    }}
                />
            </HelmetProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
