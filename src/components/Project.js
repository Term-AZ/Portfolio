import React from "react";
import "./Project.css";

const Project = ({ projectImage, projectDesc, whatamI, projectLink }) => {
  const isPrivate =
    !projectLink ||
    projectLink.trim() === "" ||
    projectLink.toUpperCase() === "CURRENTLY PRIVATE";

  const isLogoProject = projectDesc === "Forged Alliance Forever";

  return (
    <div className="ProjectCard">
      <div className="ProjectImageWrap">
        <img
          className={`ProjectImage ${isLogoProject ? "ProjectImageContain" : ""}`}
          src={projectImage}
          alt={projectDesc}
        />
      </div>

      <div className="ProjectContent">
        <h3 className="ProjectTitle">{projectDesc}</h3>
        <p className="ProjectType">{whatamI}</p>

        {isPrivate ? (
          <p className="ProjectPrivate">CURRENTLY PRIVATE</p>
        ) : (
          <a
            className="ProjectGithub"
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;