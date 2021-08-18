import react from "react";
import "./Project.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import Background from "TECHREADY.png ";

// const trial = `  <div className="project-card">
// <div
//     className="project-img"
//     style={{ backgroundImage: `url(${project.imgUrl})` }}
// ></div>
// <div className="project-details">
//     <h2 className="project-header">{project.name}</h2>
//     <p className="project-description">{project.description}</p>
//     <p className="project-technologies">{project.technologies}</p>
// </div>
// </div>`
function Project({ project }) {
    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.5,
    });
    const { name, imgUrl, description, technologies, repoLink, deployedLink } =
        project;

    return (
        <div className="project" ref={ref}>
            <img
                className="photo"
                src={`/img/${imgUrl}`}
                alt={`photo of ${name} project home page`}
            />
            <div className="description-container">
                <h3 className="project-header">{name}</h3>
                <motion.div className={`front-box ${inView ? "animate" : ""}`}>
                    <p className="project-description">{description}</p>
                </motion.div>
                <ul className="tech-list">
                    {technologies.map((element) => (
                        <li key={element}>{element}</li>
                    ))}
                </ul>
                <div className="links-container">
                    <a href={repoLink} className="repo-link">
                        <img
                            src={`/img/icons/github-sign.svg`}
                            alt=""
                            className="repo-img"
                        />
                    </a>
                    <a href={deployedLink} className="live-link">
                        <img
                            src={`/img/icons/external.svg`}
                            alt=""
                            className="live-img"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Project;
