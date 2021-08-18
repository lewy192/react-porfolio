import React, { useState, useEffect, useLayoutEffect } from "react";

import "./About.css";
import hotham from "./Hotham.jpg";

function About() {
    const [screenWidthValue, setScreenWidthValue] = useState();

    function useWindowSize() {
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
            function updateSize() {
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        return size;
    }

    return (
        <div className="about-page">
            <div
                className="about-container"
                style={{
                    backgroundImage: `${
                        useWindowSize() > 1024 ? `none` : `url(${hotham})`
                    }`,
                }}
            >
                <p className="about-desc">
                    Ever since a young age, building has come natural. It
                    started with lego which quickly progressed to meccano and
                    eventually computers. <br />
                    <br />
                    January 2020 a new door opened for me, A reintroduction to
                    programming, I started learning python and MySQL. Quick came
                    a realisation... That anything could now be built.
                    <br />
                    <br />I was no longer restricted by the number of bricks I
                    had in my box or the sets of instructions I owned. It was
                    this that lead me to where I am currently, the realisation I
                    can build anything.
                </p>
                <div
                    className="about-image"
                    style={{
                        backgroundImage: `${
                            useWindowSize() > 1024 ? `url(${hotham})` : `none`
                        }`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default About;
