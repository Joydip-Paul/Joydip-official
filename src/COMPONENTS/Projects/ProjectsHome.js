import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const ProjectsHome = () => {
    return (
        <section>
            <div className="project-area pt-5 pb-5">
                <div className="text-center text-white">
                    <span>some of my recent works</span>
                    <h1 className="fw-bold text-uppercase">Projects</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ProjectCard />
                        </div>
                        <div className="col-md-6">
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHome;