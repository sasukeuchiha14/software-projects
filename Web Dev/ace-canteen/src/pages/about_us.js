import React from "react";
import "./about_us.css";
import hardik from "../assets/hardik.jpg";
import vikhyath from "../assets/vik.jpg";
import gagan from "../assets/gagan.jpg";

function Profile({ imgSrc, altText, name, position, description }) {
    return (
        <div className="profile">
            <img src={imgSrc} alt={altText} />
            <h2>{name}</h2>
            <p>{position}</p>
            <p>{description}</p>
        </div>
    );
}

function AboutUs() {
    return (
        <div className="App">
            <div id="aboutHero" className="about-hero">
                <h1>Vision</h1>
                <p>
                    To create a seamless and engaging online platform that empowers students
                    to explore, customize, and order delicious meals conveniently, fostering
                    a sense of community and innovation in everyday dining.
                </p>
                <h1>About Us</h1>
                <p>
                    At Ace Canteen, we believe in transforming the way you enjoy meals by
                    blending convenience, quality, and innovation. Whether you're craving a
                    quick snack, a hearty meal, or a refreshing beverage, we've got you
                    covered with a curated menu designed to satisfy your cravings.
                </p>
            </div>
            <div id="aboutSection" className="about-section">
                <h2>Meet Our Team</h2>
                <div className="profiles">
                    <Profile
                        imgSrc={hardik}
                        altText="Hardik"
                        name="Hardik Garg"
                        position="CEO & Founder"
                        description=""
                    />
                    <Profile
                        imgSrc={vikhyath}
                        altText="Vikhayth"
                        name="Vikhyath"
                        position="Creative Director"
                        description=""
                    />
                    <Profile
                        imgSrc={gagan}
                        altText="Gagan"
                        name="Gagan Reddy"
                        position="Operations Manager"
                        description=""
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;