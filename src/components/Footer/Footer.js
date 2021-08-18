import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="social-medias">
            <a
                href="https://github.com/lewy192"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={`/img/icons/github-sign.svg`}
                    alt="github icon"
                    className="github-link social-icon"
                />
            </a>
            <a
                href="https://open.spotify.com/user/lewy-192?si=8d55dce20f4a4a4f"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={`/img/icons/spotify-logo.svg`}
                    alt="spotify icon"
                    className="spotify-link social-icon"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/lewis-hill-2222a51a3/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={`/img/icons/linkedin-logo.svg`}
                    alt="linkedin icon"
                    className="linkedin-link social-icon"
                />
            </a>
            <a
                href="mailto:lewis.james.hill@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={`/img/icons/message.svg`}
                    alt="icon of an envelope"
                    className="mail-link social-icon"
                />
            </a>
        </footer>
    );
};

export default Footer;
