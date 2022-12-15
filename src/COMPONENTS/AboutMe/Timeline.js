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
                    <h4 className="text-uppercase">University - <span className="text-14 text-capitalize">Shahjalal University of Science and Technology (Night-Shift) (2022 - Present)</span></h4>
                    <h4 className="text-uppercase">University - <span className="text-14 text-capitalize">Leading University (2017 - 2020)</span></h4>
                    <h4 className="text-uppercase">College - <span className="text-14 text-capitalize">Sylhet Govt. College (2014-2016)</span></h4>
                    {/* <h4 className="text-uppercase">School - <span className="text-14 text-capitalize">DCP High School (2010-2014)</span></h4> */}
                </section>
            </div>
            <div class="row row-2">
                <section>
                    <div className="icon">
                        <SiSkillshare />
                    </div>
                    <div>
                        <h2 class="title fw-bold pb-4">MY SKILLS</h2>
                        <h4>Android Development</h4>
                        <ul>
                            <li>Java, Android Fundamental</li>
                            <li>MVVM Architecture, Clean Code</li>
                            <li>Object Oriented Programming</li>
                            <li>Sequence, Class, Case, ER Diagram</li>
                            <li>Room Database, Firestore DB, SQLite, File Storage</li>
                            <li>DataBinding, ViewBinding, XML Layout Design</li>
                            <li>Dependency Injection (Dagger, Hilt)</li>
                            <li>Firebase (Auth, Notification, Cloud, Analytics)</li>
                            <li>Threads, Git and Github, Google Maps Ap</li>
                            <li>Memory leak detection</li>
                            <li>Well structure and Readable code</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Graphics Design</h4>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Figma</li>
                        </ul>
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
                        <div className='mb-3'>
                            <h4 className="text-uppercase">Vexcave - <span className="text-14 text-capitalize">Software Engineer</span></h4>
                            <p>Duration: February 2022 - Present</p>
                        </div>
                        <div className='mb-3'>
                            <h4 className="text-uppercase">Biggorilla Apps - <span className="text-14 text-capitalize">Junior Software Engineer</span></h4>
                            <p>Duration: September 2021 - January 2022</p>
                        </div>
                        <div className='mb-3'>
                            <h4 className="text-uppercase">Appstic It - <span className="text-14 text-capitalize">Software Engineer</span></h4>
                            <p>Duration: January 2018 - November 2018</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="row row-2">
                <section>
                    <div className="icon">
                        <FaUniversity />
                    </div>
                    <h2 class="title fw-bold pb-4">Awards</h2>
                    <div className='mb-3'>
                        <h4 className="text-uppercase">LU TECH FEST 2021</h4>
                        <p>Runner’s up on Hackathon</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className="text-uppercase">LU CSE Carnival 2019</h4>
                        <p>Runner’s up on Hackathon</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className="text-uppercase">LU Intra University Tech Fest 2018</h4>
                        <p>Champion on Competitive Programming</p>
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