import React from 'react';
import './Hero.css';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillSkype } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <section className="about-area pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="hero-content text-center">
                        {/* <Fade bottom> */}
                            <h1 className="hero-heading" contentEditable="true">
                                Joydip Paul
                            </h1>
                        {/* </Fade> */}
                        <small>Web Developer</small>
                        <div className="py-3 skill-icon">
                            <div className="single-skill-icon">
                                <a href="https://github.com/Joydip-Paul" target="_blank" className="text-white">
                                    <AiFillGithub />
                                </a>
                            </div>
                            <div className="single-skill-icon">
                                <AiFillFacebook />
                            </div>
                            <div className="single-skill-icon">
                                <AiFillInstagram />
                            </div>
                            <div className="single-skill-icon">
                                <AiFillLinkedin />
                            </div>
                            <div className="single-skill-icon">
                                <AiFillTwitterSquare />
                            </div>
                            <div className="single-skill-icon">
                                <AiFillSkype />
                            </div>
                        </div>
                        {/* <button className="theme-btn">Download CV</button> */}
                        <button className="my-btn">see my works</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;