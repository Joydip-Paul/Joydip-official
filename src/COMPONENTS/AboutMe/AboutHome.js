import React from 'react';
import './AboutMe.css';
import AboutRight from './AboutRight';


const AboutHome = () => {
    return (
        <section className="home-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-white">
                        <small>Let's introduce myself</small>
                        <h2 className="py-2">ABOUT ME</h2>
                        <p className="text-justify">Hello, This is Joydip Paul from Bangladesh. I have pursued a B.Sc. in computer science. At this moment in time, I am in an internship at Semiclone as a Front-end developer. In my leisure period usually, I do painting and sketching. I never give up until I get something right and, I am a lifetime learner.</p>
                        <button className="my-btn">Works</button>
                        <button className="my-btn mx-2" id="second-btn">Read More</button>
                    </div>
                    <div className='col-md-6 me'>
                        <AboutRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;