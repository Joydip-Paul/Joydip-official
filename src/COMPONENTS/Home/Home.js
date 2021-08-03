import React from 'react';
import './Home.css';
import Hero from '../../img/dp.jpg';

const Home = () => {
    return (
        <section className="about-area pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="hero-content text-center">
                        <div>
                            <h1 className="hero-heading">
                                This is Joydip Paul
                            </h1>
                            <p>Web Developer</p>
                            <img src={Hero} className="w-50" />
                        </div>

                        <div>
                            <button className="theme-btn">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;