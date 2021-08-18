import React from "react";

import "./Main.css";

import About from "../../About/About";

import melbourne from "./Melbourne.jpg";
import portrait from "./portrait.png";

import { Link } from "react-router-dom";

function Main() {
    return (
        <section className="main-page">
            <section className="main-intro">
                <div className="intro-container">
                    <h2 className="intro">Hi, My Name Is</h2>
                </div>

                <div className="name-container">
                    <h1 className="name">Lewis Hill</h1>
                </div>
                <div className="statement-container">
                    <h1 className="statement">I build the web.</h1>
                </div>
                <div className="brand-statement-container">
                    <p className="brand-statement">
                        My passion is Full Stack Web Development and problem
                        solving.
                        <br />
                        Building has always been my specialty from Lego&reg; to
                        motorbikes and everything in between.
                    </p>
                </div>
                <Link className="projects-button button" to="/portfolio">
                    See My Stuff
                </Link>
                <a
                    className="chat-button button"
                    href="mailto:lewis.james.hill@outlook.com"
                >
                    Chat With Me
                </a>
            </section>
            <section className="about-section-container">
                <About />
            </section>
        </section>
    );
}

export default Main;
