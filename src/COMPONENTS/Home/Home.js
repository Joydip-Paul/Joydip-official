import React from 'react';
import AboutHome from '../AboutMe/AboutHome.js';
import ContactNow from '../Contact/ContactNow.js';
import Footer from '../Footer/Footer.js';
import Hero from '../Hero/Hero.js';
import ProjectsHome from '../Projects/ProjectsHome.js';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutHome />
            <ProjectsHome />
            <ContactNow />
            <Footer />
        </div>
    );
};

export default Home;