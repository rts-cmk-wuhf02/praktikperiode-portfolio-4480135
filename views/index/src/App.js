import React from "react";
import ReactDOM from "react-dom";
import { Router, Location } from "@reach/router";
import Home from "./js/Home";
import Creations from "./js/Creations";
import CreationDetails from "./js/CreationDetails";
import Contact from "./js/Contact";
import Footer from "./js/Footer";
import Header from "./js/Header";

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
            <Header />

            <main>
                <Router>
                    <Home path="/" />
                    <Creations path="/creations" />
                    <CreationDetails path="/creation/:url_slug" />
                    <Contact path="/contact" />
                </Router>

                <OnRouteChange
                    action={() => {
                        window.scrollTo(0, 0);
                    }}
                />
            </main>

            <Footer />
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
