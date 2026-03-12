import React from 'react';
import Navbar from './navbar';
import Home from './home';
import Footer from './footer';
import Projects from './projects';
import TeamZoomy from './team_zoomy';
import Internship from './internship';
import Services from './services';
import Contact from './contact';
import "./vitrine.css";

export const Vitrine = () => {
  return (
    <div className='vitrine_container'>
      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="team"><TeamZoomy /></section>
        <section id="internship"><Internship /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default Vitrine;