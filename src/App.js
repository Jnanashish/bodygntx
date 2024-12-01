import React from "react";
import "./App.css";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo}/>
      <header className="header">
        <h1>BODYGNTX™️ - Fitness For Everyone</h1>
        <p>
          In Home Personal Training Service for Busy Lives | Customized, time-efficient
          fitness solutions for professionals who want results without the fuss. Let’s
          make your goals happen! 💼💪
        </p>
      </header>



      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>Certified Trainers</li>
          <li>Dietitian</li>
          <li>Cupping</li>
          <li>Mat Pilates</li>
          <li>Tabata</li>
          <li>Yoga</li>
          <li>HIIT</li>
          <li>SMR</li>
          <li>Boxing</li>
          <li>CrossFit</li>
          <li>Fitness Assessment</li>
        </ul>
      </section>

      <section className="specialities">
        <h2>Specialities</h2>
        <ol>
          <li>Fat Loss and Weight Gain Management</li>
          <li>Senior Citizens Fitness</li>
          <li>Kids Fitness</li>
          <li>Special Population Training</li>
          <li>BMX</li>
        </ol>
      </section>

      <footer className="contact">
        <h2>Contact</h2>
        <p><a href="tel:+918295031333"></a>☎️ +91 82950 31333</p>
      </footer>
    </div>
  );
}

export default App;
