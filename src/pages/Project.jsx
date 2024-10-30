import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/css/Project.css';
import projectsData from '../data/proyectos.json';

function Project() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={`${process.env.PUBLIC_URL}/img_projects/${project.image}`} alt={project.title} />
                        </div>
                        <div className="project-overlay">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="button-container">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                                        <FaGithub />
                                    </a>
                                )}
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
