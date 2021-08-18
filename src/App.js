import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Main from "./components/Pages/Main/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="content">
            <Router>
                <Header />
                <Switch>
                    <main>
                        <Route exact path="/" component={Main} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                    </main>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
