import React from 'react';
import './Contact.css';

const ContactNow = () => {
    return (
        <section className="text-center contact-now pt-5 pb-5 text-white">
            <div className="col-md-8 mx-auto contact-now-inner">
                <h6>have a project in mind</h6>
                <h2 className="text-40 fw-bold py-2">Let me help you</h2>
                <button className="my-btn">Contact Now</button>
            </div>
        </section>
    );
};

export default ContactNow;