import React from 'react';
import './intro.css';
import bg from '../../assets/image1.png'
import hiremebtn from '../../assets/hireme.png'
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello , </span>
        <span className="introtext">I'm <span className="introname">Anamika</span> <br /> Website Designer</span>
        <p className="intropara">I am a Skilled Web Designer with experience in creating <br /> visual appealing and user friendly website.</p>
        <Link><button className="btn"><img src={hiremebtn} alt="hireme" className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro ;