import React from 'react';
import './AboutMe.css';
import Timeline from './Timeline';
import Footer from './../Footer/Footer';
import ContactNow from '../Contact/ContactNow';
import Fade from 'react-reveal/Fade';


const AboutMe = () => {
    return (
        <section>
            <div className="aboutMeArea">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-white about-content">
                            <Fade top>
                                <h2 className="py-2 text-50">ABOUT ME</h2>
                            </Fade>
                            <p className='pb-4'>I want to contribute more with creative
                                ideas to solve the potential issues.
                                Dealing with any complex problem and
                                solving it afterward makes me feel
                                relaxed, confident and motivates me to
                                accept new challenging tasks. I am very
                                passionate about learning new things,
                                develop ideas to become an expert in my
                                field of interest.
                            </p>
                            <a className="my-btn mx-2" href="https://drive.google.com/file/d/1eqFD0RLECFrVxktMWla_Qab6d_PhVx-K/view?fbclid=IwAR1BJzWnEvqUz4IJAxqGTPEgo2qd7p9EXJ2mbLF0wG3EWB9ciK5bAjk-yOE" target="_blank">Download CV</a>
                            {/* <button className="my-btn mx-2">Download CV</button> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>

            <ContactNow />

            <Footer />
        </section >
    );
};

export default AboutMe;