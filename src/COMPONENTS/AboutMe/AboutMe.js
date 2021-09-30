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
                            <p>This is Joydip Paul.A passionate Frontend Developer.
                                I believe that the main reason is that front-end development satisfies my need for creativity.
                            </p>
                            <p>
                                I am from Sylhet, Bangladesh.A place of beauty and nature.Since my childhood, i love art and painting.I always try to design stuff with my unique point of view.I also love to create things that can be usefull to others.
                            </p>
                            <p>
                                I started coding from university life.Coding is also an art for me.I love it and now I have the opportunity to design along with the coding.I find it really interesting and I enjoyed the process a lot.
                            </p>
                            <p>
                                My vision is to make the world a better place.Now almost everything is becoming better than ever.It is time for us to create more good stuff that helps the world to become a better place.
                            </p>
                            <button className="my-btn mx-2">Download CV</button>
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