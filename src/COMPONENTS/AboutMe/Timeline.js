import React from 'react';
import './AboutMe.css';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import { GrLinkTop } from 'react-icons/gr';
import { SiSkillshare } from 'react-icons/si';
import { AiOutlineBorderlessTable } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';

const Timeline = () => {
    return (

        <div class="wrapper">
            <div class="center-line">
                <a href="#" class="scroll-icon"><GrLinkTop /></a>
            </div>
            <div class="row row-1">
                <section>
                    <div className="icon">
                        <FaUniversity />
                    </div>
                    <h2 class="title fw-bold pb-4">EDUCATION</h2>

                    <h4 className="text-uppercase">University - <span className="text-14 text-capitalize">Leading University (2017 - 2020)</span></h4>
                    <h4 className="text-uppercase">College - <span className="text-14 text-capitalize">Sylhet Govt. College (2014-2016)</span></h4>
                    <h4 className="text-uppercase">School - <span className="text-14 text-capitalize">DCP High School (2010-2014)</span></h4>
                </section>
            </div>
            <div class="row row-2">
                <section>
                    <div className="icon">
                        <SiSkillshare />
                    </div>
                    <div>
                        <h2 class="title fw-bold pb-4">MY SKILLS</h2>
                        <h4 className="text-uppercase">Frontend - <span className="text-14 text-capitalize">Html, css, javascript, react</span></h4>
                        <h4 className="text-uppercase">Backend - <span className="text-14 text-capitalize">Node, Mongodb, Express</span></h4>
                        <h4 className="text-uppercase">Design - <span className="text-14 text-capitalize">Photoshop, Figma</span></h4>
                    </div>
                </section>
            </div>
            <div class="row row-1">
                <section>
                    <div className="icon">
                        <AiOutlineBorderlessTable />
                    </div>
                    <div>
                        <h2 class="title fw-bold pb-4">EXPERIENCE</h2>
                        <h4 className="text-uppercase">Semiclone - <span className="text-14 text-capitalize">Frontend Developer (Internship)</span></h4>
                    </div>
                </section>
            </div>
            <div class="row row-2">
                <section>
                    <div className="icon">
                        <FaUniversity />
                    </div>
                    <div>
                        <h2 class="title fw-bold pb-4">COMMING SOON</h2>
                        <h4 className="text-uppercase">Wating - <span className="text-14 text-capitalize">Please Wait For a While</span></h4>
                    </div>
                </section>
            </div>
            {/* <div class="row row-1">
                <section>
                    <div className="icon">
                        <FaUniversity />
                    </div>
                    <div class="details">
                        <span class="title">Title of Section 5</span>
                        <span>5th Jan 2021</span>
                    </div>
                    <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                    <div class="bottom">
                        <a href="#">Read more</a>
                        <i>- Someone famous</i>
                    </div>
                </section>
            </div> */}

            {/* <div class="row row-2">
                <section>
                    <div className="icon">
                        <FaUniversity />
                    </div>
                    <div class="details">
                        <span class="title">Title of Section 6</span>
                        <span>6th Jan 2021</span>
                    </div>
                    <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                    <div class="bottom">
                        <a href="#">hi</a>
                        <i>- Someone famous</i>
                    </div>
                </section>
            </div> */}

        </div>
    );
};

export default Timeline;