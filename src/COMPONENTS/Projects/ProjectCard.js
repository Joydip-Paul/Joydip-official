import React from 'react';
import p0 from '../../img/p0.png';



const ProjectCard = () => {
    return (
        <div className="card-container">
            <div className="single-card">
                <img src={p0} />
                <div className="project-details text-white">
                    <h2>New Projects</h2>
                    <p>In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign.</p>
                    <button className="my-btn">Github Link</button>
                    <button className="my-btn mx-2" id="second-btn">Preview</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;