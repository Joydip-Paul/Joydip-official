import React from 'react';
import './Hero.css';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillSkype, AiFillBehanceSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <section className="about-area pt-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="hero-content text-center">
                        <h1 className="hero-heading" contentEditable="true">
                            Provakor Das
                        </h1>
                        <Fade bottom>
                            <small>Software Engineer</small>
                        </Fade>
                        <div className="py-3 skill-icon">
                            <div className="single-skill-icon">
                                <a href="https://github.com/fakibuzzkonik" target="_blank" className="text-white">
                                    <AiFillGithub />
                                </a>
                            </div>
                            {/* <div className="single-skill-icon">
                                <a href="https://www.facebook.com/joydippaul72" target="_blank" className="text-white">
                                    <AiFillFacebook />
                                </a>
                                
                            </div> */}
                            {/* <div className="single-skill-icon">
                                <a href="https://www.instagram.com/joydip_jishu/" target="_blank" className="text-white">
                                    <AiFillInstagram />
                                </a>
                                
                            </div> */}
                            <div className="single-skill-icon">
                                <a href="https://www.linkedin.com/in/provakorkonik/" target="_blank" className="text-white">
                                    <AiFillLinkedin />
                                </a>

                            </div>
                            {/* <div className="single-skill-icon">
                                <a href="https://twitter.com/Joydippaul9" target="_blank" className="text-white">
                                    <AiFillTwitterSquare />
                                </a>
                                
                            </div> */}
                            {/* <div className="single-skill-icon">
                                <a href="https://www.behance.net/Joydippaul018e" target="_blank" className="text-white">
                                    <AiFillBehanceSquare />
                                </a>
                                
                            </div> */}
                        </div>
                        {/* <button className="theme-btn">Download CV</button> */}
                        {/* <Link to="/projects">
                            <button className="my-btn">see my works</button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;