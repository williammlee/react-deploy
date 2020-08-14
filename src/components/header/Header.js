import React from "react";
import './Header.css';


export default function Header(){
    function NavigationBar(){
        return(
            <div>
                <div class="navBar">
                    <a href="#william" class="logo">William</a>
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <HobbiesSection />
                <ContactSection />
            </div>
        )
    }

    function HomeSection(){
        return(
            <div class="home-area" id="home">
                <div className="headerContainer">
                    <h1 className="headerText">Hi, I'm William</h1>
                </div>
            </div>
        )
    }

    function AboutSection(){
        return(
            <div class="about-area" id="about">
                <div className="text-part">
                    <h1>About</h1>
                </div>
            </div>
        )
    }

    function ExperienceSection(){
        return(
            <div class="experience-area" id="experience">
                <div className="text-part">
                    <h1>Experience</h1>
                </div>
            </div>
        )
    }

    function HobbiesSection(){
        return(
            <div class="hobbies-area" id="hobbies">
                <div className="text-part">
                    <h1>Hobbies</h1>
                </div>
            </div>
        )
    }

    function ContactSection(){
        return(
            <div class="contact-area" id="contact">
                <div className="text-part">
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
    return(
        <NavigationBar />
        
        
    )
}
