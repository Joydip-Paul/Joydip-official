import React from 'react';
import AboutHome from '../AboutMe/AboutHome.js';
import ContactNow from '../Contact/ContactNow.js';
import Footer from '../Footer/Footer.js';
import Hero from '../Hero/Hero.js';
import ProjectsHome from '../Projects/ProjectsHome.js';
import { BsChevronUp } from 'react-icons/bs';

const Home = () => {
    return (
        <div>
            <button className='goTop' title="Go to top"> <BsChevronUp /></button>
            <Hero />
            <AboutHome />
            <ProjectsHome />
            <ContactNow />
            <Footer />
        </div>
    );
};

export default Home;