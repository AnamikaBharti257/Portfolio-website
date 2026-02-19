import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a passionate Full Stack Web Developer with a strong foundation in both frontend and backend technologies. I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and React, along with backend development using Node.js, Express.js, and MongoDB. I enjoy creating complete web applications that are efficient, scalable, and visually appealing.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I focus on designing clean, simple, and responsive user interfaces that are easy to use and visually appealing.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I design and develop responsive, user-friendly websites using HTML, CSS, JavaScript, and React, focusing on clean layouts, good performance, and a smooth user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I design basic mobile and web applications with a focus on clean interfaces, smooth user experience, and responsive layouts, using tools and technologies I am familiar with.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;