import React from 'react';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';
import me from '../../img/JoydipPaul.jpg';
import { Link } from 'react-router-dom';


const AboutHome = () => {
    return (
        <section className="home-about">
            <div className="container">
                <div className="row">
                    <Fade left>
                        <div className="col-md-6 text-white">
                            <small>Let's introduce myself</small>
                            <h2 className="py-2">ABOUT ME</h2>
                            <p className="text-justify">Hello, This is Joydip Paul from Bangladesh. I have pursued a B.Sc. in computer science. At this moment in time, I am in an internship at Semiclone as a Front-end developer. In my leisure period usually, I do painting and sketching. I never give up until I get something right and, I am a lifetime learner.</p>
                            <Link to = "/projects"><button className="my-btn">Works</button></Link>
                            <Link to = "/about"><button className="my-btn mx-2" id="second-btn">Read More</button></Link>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='col-md-6 me'>
                            <img src={me} />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;