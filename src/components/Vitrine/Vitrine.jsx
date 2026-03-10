import React from 'react'
import Navbar from './navbar';
import Home from './home';
import Footerr from './footer';
import Projects from './projects';
import TeamZoomy from './team_zoomy';
import Internship from './internship';
import Footer from './footer';
import Services from './services';
import "./vitrine.css";
import Contact from './contact';

export const Vitrine = () => {
  return (
    <div className='vitrine_container'>
        <Navbar></Navbar>
        <div>
       <section id="home"><Home></Home></section> 

        <section  id="projects"><Projects></Projects></section>
        <section id='team'><TeamZoomy></TeamZoomy></section>
                      <section id="services"><Services></Services></section> 

        <section id='internship'><Internship></Internship></section>
                <section id='contact'><Contact></Contact></section>

        </div>
        <Footer></Footer>   
 </div>    
)
}

