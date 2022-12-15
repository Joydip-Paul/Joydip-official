import React from 'react';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';
import me from '../../img/konik2.png';
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
                            <p className="text-justify">I want to contribute more with creative
                                ideas to solve the potential issues.
                                Dealing with any complex problem and
                                solving it afterward makes me feel
                                relaxed, confident and motivates me to
                                accept new challenging tasks. I am very
                                passionate about learning new things,
                                develop ideas to become an expert in my
                                field of interest.
                            </p>
                            {/* <Link to="/projects"><button className="my-btn">Works</button></Link> */}
                            <Link to="/about"><button className="my-btn" id="second-btn">Read More</button></Link>
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