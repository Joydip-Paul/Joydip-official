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
                        {/* <h1 data-text="Joydip_Paul" className="hero-heading">
                            Joydip_Paul
                        </h1> */}
                        <h1 className="hero-heading">
                            Joydip Paul
                        </h1>
                        <small>Web Developer</small>
                        <div className="p-3 skill-icon">
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