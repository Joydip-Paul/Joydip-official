import React from 'react';
import './Contact.css';
import Footer from './../Footer/Footer';
import { AiFillMessage } from 'react-icons/ai';
import { FaAddressCard } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { MdCall } from 'react-icons/md';


const Contact = () => {
    const [state, handleSubmit] = useForm("mqknkyza");
    if (state.succeeded) {
        alert("success");
        return <div className="text-center success-card mt-5 px-4 text-white pb-5 pt-5">Thanks for your inquiry. Wish you all the best. </div>;
    }
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
                            <a href="tel:+8801882563044">+88018-82563044</a>
                        </div>
                        <div className="single-contact">
                            <span><AiFillMessage /></span>
                            <a href="mailto: joydippaul72@gmail.com">provakor.konik@gmail.com
                            </a>
                        </div>
                        <div className="single-contact">
                            <span><FaAddressCard /></span>
                            <a href="#!">Sylhet,Bangladesh</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div class="input-field">
                                <input type="text" placeholder="Enter Name" name="username" className="form-control shadow-none" required="required" />
                                <ValidationError
                                    prefix="Username"
                                    field="username"
                                    errors={state.errors}
                                />
                            </div>

                            <div class="input-field">
                                <input type="email" name="email" placeholder="Enter Email" className="form-control shadow-none" required="required" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div class="input-field">
                                <textarea type="text" placeholder="Enter Message" className="form-control text-white shadow-none" name="message" rows="3" cols="5" required="required" />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
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