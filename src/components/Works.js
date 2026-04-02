import React from "react";
import "./Works.css";
import Project from "./Project";
import { Link } from "react-router-dom";
import data from "./JsonFiles/projects.json";

const Works = () => {
  const programs = data.Programs || [];

  return (
    <section className="WorksBackground">
      <div className="WorksContainer">
        <div className="WorksTitleContainer">
          <h1 className="WorksTitle">My Projects and Contributions</h1>
        </div>

        <div className="ProjectContainer">
          {programs.map((project, index) => {
            const imagePath =
              project.images?.[0] || "./images/default_project_image.png";

            return (
              <div className="MainLink" key={`${project.name}-${index}`}>
                <Link
                  to={`/projects/${project.name}/${index}`}
                  className="ProjectCardLink"
                >
                  <div className="ProjectCardShell">
                    <Project
                      whatamI={project.what_am_i}
                      projectImage={require(`${imagePath}`)}
                      projectDesc={project.name}
                      projectLink={project.githublink}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;