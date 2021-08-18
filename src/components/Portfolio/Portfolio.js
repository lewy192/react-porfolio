import react from "react";
import Project from "../Project/Project";
import MiniProject from "../MiniProject/MiniProject";

import "./Portfolio.css";
const projects = [
    {
        name: "TimeBank",
        imgUrl: "TimeBank.png",
        description: `TimeBank is your accountability buddy. If you’re ever trailing behind in the tasks you have set yourself today, TimeBank will show you by how much. It is the place to go and seamlessly track your google tasks, how many you have set for the day, how many you have completed for the day and a handy graph to see your overall progress.`,
        technologies: ["MERN", "GraphQL", "Google OAuth2.0"],
        deployedLink: "https://time-bank-1.herokuapp.com/",
    },
    {
        name: "TechREADY",
        imgUrl: "TECHREADY.png",
        description: `This project is a personal favourite of
        mine. Here we created a space for Developers
        and aspiring Developers to come and discuss
        interview questions, find tutors and mentors
        and expand their footprint in the community.
        It was a project close to my heart as I love
        to be involved in the wonderful Development
        Community both to give and receive`,
        technologies: ["JWT", "Node", "REST Api", "Full Stack"],
        repoLink: "https://github.com/vvnnzar/Project-2-TechREADY",
        deployedLink: "https://gentle-headland-96957.herokuapp.com/",
    },

    {
        name: "FlowerPot",
        imgUrl: "FLOWERPOT.png",
        description: `FlowerPot provides a user friendly entry
        into the realm of gardening or a great place
        to expand your knowledge. The site includes
        a widget displaying the current weather and
        rainfall over the past 24hours, Team
        favourites and a garden page to track what
        you've planted and when`,
        technologies: ["Dynamic Weather", "Front-End", "Responsive"],
        repoLink: "#",
        deployedLink: "https://flowerpotpeople.github.io/FlowerPot/",
    },
];

const miniProjects = [
    {
        name: "Day Planner",
        description: ` When used with the note taker you have no
        excuse to be unorganised. The day planner,
        helps you plan your days down to the
        hour,Helping you keep your days planned out
        to fit in more programming.`,
        technologies: ["Localstorage", "Bootstrap", "jQuery"],
        deployedLink: "https://lewy192.github.io/Day-Planner/",
    },
    {
        name: "Weather Planner",
        description: `Going somewhere and need to check the
        weather? This project is for you. enter a
        location, todays weather will be presented
        and the coming 5 days Perfect for planning a
        get away or checking the weather near you.
        Utilises the openweather API and
        Geoencoding.`,
        technologies: ["fetch", "Responsive", "Localstorage"],
        deployedLink: "https://lewy192.github.io/weather-planner/",
    },
    {
        name: "README Generator",
        description: `AHhhhh READme's... The one thing we all use
        but so dislike to write. You get to the end
        of your project, all excited to publish and
        then... you remember... YOU'VE LEFT THE
        README. Well to significantly reduce the
        time it takes to produce a professional
        README I built this awesome project. It's A
        CLI prompt based app, so head to the repo,
        download the code, answer the prompts and
        save yourself sometime. Thank me later.`,
        technologies: ["CLI Prompts", "Automation", "Node Js"],
        deployedLink: "#",
    },
];

function Portfolio() {
    return (
        <section className="portfolio-section">
            <div className="projects-container">
                {projects.map((project) => (
                    <Project project={project} key={project.name} />
                ))}
            </div>
            <div className="mini-projects-container">
                {miniProjects.map((miniProject) => (
                    <MiniProject
                        miniProject={miniProject}
                        key={miniProject.name}
                    />
                ))}
            </div>
        </section>
    );
}
export default Portfolio;
