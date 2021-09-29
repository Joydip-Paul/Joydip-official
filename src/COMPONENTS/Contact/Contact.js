import React from 'react';
import './Contact.css';
import Footer from './../Footer/Footer';
import { AiFillMessage } from 'react-icons/ai';
import { FaAddressCard } from 'react-icons/fa';

import { MdCall} from 'react-icons/md';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="text-white text-center pt-5">
                <small>get in touch</small>
                <h1 className="fw-bold">CONTACT</h1>
            </div>

            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <div className="single-contact">
                            <span><MdCall /></span>
                            <a href="#!">+88 01759696957</a>
                        </div>
                        <div className="single-contact">
                            <span><AiFillMessage /></span>
                            <a href="#!">joydippaul72@gmail.com</a>
                        </div>
                        <div className="single-contact">
                            <span><FaAddressCard /></span>
                            <a href="#!">Sylhet,Bangladesh</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="input-field">
                                {/* <label class="form-label text-white">Your Name</label> */}
                                <input type="text" placeholder = "Enter Name" className = "form-control" />
                            </div>

                            <div class="input-field">
                                {/* <label class="form-label text-white">Your Email</label> */}
                                <input type="email" placeholder="Enter Email" className="form-control" />
                            </div>

                            <div class="input-field">
                                {/* <label class="form-label text-white">Your Message</label> */}
                                <textarea type="text" placeholder="Enter Message" className="form-control" rows = "3" cols = "5" />
                            </div>
                           
                            <button type="submit" class="formBtn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;