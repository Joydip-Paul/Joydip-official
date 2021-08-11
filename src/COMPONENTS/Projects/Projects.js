import React from 'react';
import ProjectCard from './ProjectCard';
import Footer from './../Footer/Footer';

const Projects = () => {
    return (
        <section>
            <div className="Projects-area pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProjectCard />
                        </div>
                        <div className="col-md-4">
                            <ProjectCard />
                        </div>
                        <div className="col-md-4">
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Projects;