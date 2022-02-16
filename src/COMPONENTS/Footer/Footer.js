import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-area text-white">

            <div className="footer-content">
                <h2 className="text-uppercase">Joydip Paul</h2>
                <div className="d-flex footer-contact">
                    <p><a href="#" className="text-decoration-none text-white">joydippaul72@gmail.com</a></p>
                    <p className="px-2" ><a href="#" className="text-decoration-none text-white">+880 1759696957</a></p>
                </div>
                <p>copyright &#169; {new Date().getFullYear()} Joydip Paul</p>
            </div>

        </section>
    );
};

export default Footer;