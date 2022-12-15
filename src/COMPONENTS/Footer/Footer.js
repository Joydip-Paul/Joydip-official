import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-area text-white">

            <div className="footer-content">
                <h2 className="text-uppercase">Provakor Das</h2>
                <div className="d-flex footer-contact">
                    <p><a href="#" className="text-decoration-none text-white">provakor.konik@gmail.com
                    </a></p>
                    <p className="px-2" ><a href="#" className="text-decoration-none text-white">+88018-82563044 </a></p>
                </div>
                <p>copyright &#169; {new Date().getFullYear()} Provakor Das</p>
            </div>

        </section>
    );
};

export default Footer;