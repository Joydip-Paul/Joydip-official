import React from 'react';
import './Home.css';
// import Hero from '../../img/dp.jpg';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript, DiReact } from 'react-icons/di';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';

const Home = () => {
    return (
        <section className="about-area pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="hero-content text-center">
                        <h1 className="hero-heading">
                            This is Joydip Paul
                        </h1>
                        <small>Web Developer</small>
                        {/* <p className="content">Hello, This is Joydip Paul from Bangladesh. I have pursued a BSc in computer science. At this moment in time, I am in an internship at Semiclone as a Front-end developer. In my leisure period usually, I do painting and sketching. I never give up until I get something right and, I am a lifetime learner.</p> */}
                        <div className="d-flex justify-content-center p-3 skill-icon">
                            <div className="single-skill-icon">
                                <AiFillHtml5 />
                            </div>
                            <div className="single-skill-icon">
                                <DiCss3 />
                            </div>
                            <div className="single-skill-icon">
                                <DiJavascript />
                            </div>
                            <div className="single-skill-icon">
                                <DiReact />
                            </div>
                            <div className="single-skill-icon">
                                <BsBootstrapFill />
                            </div>
                            <div className="single-skill-icon">
                                <SiTailwindcss />
                            </div>
                        </div>
                        <button className="theme-btn">Download CV</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Home;