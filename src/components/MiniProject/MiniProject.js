import React from "react";

import "./MiniProject.css";

const MiniProject = ({ miniProject }) => {
    const { name, description, technologies, repoLink, deployedLink } =
        miniProject;
    return (
        <article className="miniproject-card">
            <header className="icon-container">
                <img
                    src={`/img/icons/project.svg`}
                    alt=""
                    className="project-icon icon"
                />
                <a href={deployedLink}>
                    <img
                        src={`/img/icons/external.svg`}
                        alt=""
                        className="icon external-icon"
                    />
                </a>
            </header>
            <h3 className="mini-project-header">{name}</h3>
            <p className="mini-project-descriptions">{description}</p>
            <ul className="tech-list">
                {technologies.map((element) => (
                    <li key={element}>{element}</li>
                ))}
            </ul>
        </article>
        // 00e1ea
    );
};

export default MiniProject;
