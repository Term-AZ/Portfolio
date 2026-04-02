import React from "react";
import "./AboutMe.css";
import pi from "./images/profile_image2.jpg";
import ln from "./images/linkedin.png";
import githublogo from "./images/githublogo.png";

const skillGroups = [
  {
    title: "Core Languages",
    description:
      "Used for backend development, scripting, application logic, and database work.",
    skills: [
      { icon: "devicon-javascript-plain", label: "JavaScript" },
      { icon: "devicon-java-plain", label: "Java" },
      { icon: "devicon-csharp-plain", label: "C#" },
      { icon: "devicon-kotlin-plain", label: "Kotlin" },
      { icon: "devicon-python-plain", label: "Python" },
      { icon: "devicon-mysql-plain", label: "MySQL" },
      { icon: "devicon-sqlite-plain", label: "SQLite" },
      { icon: "devicon-html5-plain", label: "HTML5" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description:
      "Used to build scalable APIs, full-stack applications, and modern frontend experiences.",
    skills: [
      { icon: "devicon-react-original", label: "React" },
      { icon: "devicon-nodejs-plain", label: "Node.js" },
      { icon: "devicon-dot-net-plain", label: ".NET" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description:
      "Used for development workflow, containerization, and efficient software delivery.",
    skills: [
      { icon: "devicon-vscode-plain", label: "VS Code" },
      { icon: "devicon-docker-plain", label: "Docker" },
    ],
  },
];

const AboutMe = () => {
  return (
    <div> 
    <section className="AboutMeContainer" id="about">
      <div className="AboutMeMainContainer">
        <div className="profile_image_container">
          <img src={pi} className="profile_image" alt="Augusts Zilakovs" />
        </div>

        <div className="WhoAmI">
          <div className="WhoAmIContent">
            <h2>Who Am I?</h2>
            <p className="AboutMeDescription">
              I’m Augusts Zilakovs, a fourth-year Software Engineering student
              at Western University focused on backend and full-stack
              development. I specialize in designing scalable systems, building
              reliable APIs, and developing efficient data-driven applications.
              I’m driven by solving complex problems and delivering clean,
              maintainable solutions that perform at scale.
            </p>
          </div>

          <div className="OverGridContainer">
            <div className="HelloSiteGrid">
                <a
                    className="social_card"
                    href="https://github.com/Term-AZ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <img className="social_card_image github_image" src={githublogo} alt="GitHub" />
                    <span>GitHub</span>
                </a>

                <a
                    className="social_card"
                    href="https://www.linkedin.com/in/augusts-zilakovs-118083187/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <img className="social_card_image" src={ln} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="skills_section">
        <p className="skills_eyebrow">TECH STACK</p>
        {/* <h2 className="skills_title">Technologies I Work With</h2> */}
        <p className="skills_subtitle">
          Focused on backend systems, APIs, databases, and full-stack
          application development.
        </p>

        <div className="skills_grid">
          {skillGroups.map((group) => (
            <div className="skills_card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill_items">
                {group.skills.map((skill) => (
                  <div className="skill_item" key={skill.label}>
                    <i className={skill.icon} aria-hidden="true"></i>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>

              {/* <p className="card_description">{group.description}</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;