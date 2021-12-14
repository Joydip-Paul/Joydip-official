import React from 'react';
// import ProjectCard from './ProjectCard';
import Footer from './../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import projectBanner from '../../img/projectBanner.png';

const project = [
    { title: "Flurix", description: "Flurix is a Multipurpose  Website. You can use this website for your company or any kind of business. ", Language: "HTML, CSS, BOOTSTRAP,JAVASCRIPT,JQUERY", Github: "https://github.com/Joydip-Paul/Flurix", preview: "https://joydip-paul.github.io/Flurix/index.html", id: 1 },
    
    { title: "AlgoBind",  description: "Algobind is a Portfolio Website. You can use this website for your personal use and display your work. ", Language: "REACT-JS, CSS, BOOTSTRAP", Github: "https://github.com/Joydip-Paul/AlgoBind", preview: "https://frosty-jennings-758447.netlify.app/", id: 2 },

    {title: "ExpoHut", description: "ExpoHut is a Multipurpose  Website. You can use this website for your company or any kind of business. ", Language: "HTML, CSS, BOOTSTRAP,JAVASCRIPT", Github: "https://github.com/Joydip-Paul/expohut", preview: "https://joydip-paul.github.io/expohut/ExpoHut-project/Project/Index.html", id: 3 },

    {title: "Tutor Media", description: "Flurix is a Multipurpose  Website. You can use this website for your company or any kind of business. ", Language: "HTML, CSS, BOOTSTRAP,JAVASCRIPT", Github: "https://github.com/Joydip-Paul/Tutor-Media", preview: "https://joydip-paul.github.io/Tutor-Media/", id: 4 },

    {title: "Gift Point", description: "Gift Point is a MERNSTACK E-commerce Website. You can use this website for your company. ", Language: "REACT-JS, CSS, BOOTSTRAP,MONGODB,EXPRESS-JS", Github: "https://github.com/Joydip-Paul/Gift-Point", preview: "https://gift-point.netlify.app/", id: 5 },

    {title: "Asish.Co", description: "Asish.co is a Portfolio Website. You can use this website for your personal use and display your work.", Language: "HTML, CSS, BOOTSTRAP, JAVASCRIPT, JQUERY", Github: "https://github.com/Joydip-Paul/mohon-official", preview: "https://joydip-paul.github.io/mohon-official/index.html", id: 6 },

    {title: "Sketch", description: "Sketch is a Landing Page Website. You can use this website for your company or any kind of business. ", Language: "HTML, CSS, BOOTSTRAP,JAVASCRIPT", Github: "https://github.com/Joydip-Paul/sketch-company", preview: "https://joydip-paul.github.io/sketch-company/", id: 7 },
]

const Projects = () => {
    return (
        <section>
            <div className="Projects-area pt-5 pb-5">
                <div className="container">
                    <Flash>
                        <h2 className="text-white text-center fw-bold"> PROJECTS </h2>
                    </Flash>
                    <div className="row">

                        {
                            project.map((item) => (
                                <div className="col-xl-4 col-md-6">
                                    <div className="card-container d-flex justify-content-center">
                                        <Fade bottom>
                                            <div className="single-card">
                                                <div className="projectName">
                                                    <h4>{item.title}</h4>
                                                    <img src={projectBanner} className="" />
                                                </div>
                                                <br/>
                                                <div className="project-details text-white">
                                                    {/* <h2>{item.title}</h2> */}
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

            <Footer />
        </section>
    );
};

export default Projects;