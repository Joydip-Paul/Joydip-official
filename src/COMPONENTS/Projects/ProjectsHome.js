import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import projectBanner from '../../img/projectBanner.png';
import Fade from 'react-reveal/Fade';

const project = [
    {title: "Flurix", description: "Flurix is a Multipurpose  Website. You can use this website for your company or any kind of business. ", Language: "HTML, CSS, BOOTSTRAP,JAVASCRIPT,JQUERY", Github: "https://github.com/Joydip-Paul/Flurix", preview: "https://joydip-paul.github.io/Flurix/index.html", id: 1},

    {title: "Gift Point", description: "Gift Point is a MERNSTACK E-commerce Website. You can use this website for your company. ", Language: "REACT-JS, CSS, BOOTSTRAP,MONGODB,EXPRESS-JS", Github: "https://github.com/Joydip-Paul/Gift-Point", preview: "https://gift-point.netlify.app/", id: 2},
]


const ProjectsHome = () => {
    return (
        <section>
            <div className="project-area pt-5 pb-5">
                <div className="text-center text-white">
                    <span>some of my recent works</span>
                    <h1 className="fw-bold text-uppercase">Projects</h1>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            project.map((item) => (
                                <div className="col-xl-5 col-md-6">
                                    <div className="card-container d-flex justify-content-center">
                                        <Fade bottom>
                                            <div className="single-card">
                                                <div className="projectName">
                                                    <h4>{item.title}</h4>
                                                    <img src={projectBanner} className="" />
                                                </div>
                                                <div className="project-details text-white">
                                                    <h2>{item.title}</h2>
                                                    <small className="theme-color"><span className="fw-bold text-white">Language Used :</span> {item.Language}</small>
                                                    <p className="text-color">{item.description}</p>

                                                    <a href={item.Github} className="my-btn text-decoration-none" target="_blank">Github Link</a>
                                                    <a href={item.preview} className="my-btn mx-2 text-decoration-none" id="second-btn" target="_blank">Preview</a>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHome;