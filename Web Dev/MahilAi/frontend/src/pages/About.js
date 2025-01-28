import React from 'react';
import img from "../assets/face.png";

function Profile({ imgSrc, altText, name, position, description }) {
    return (
        <div className="bg-white bg-opacity-10 text-gray-800 rounded-lg p-5 w-52 text-center">
            <img src={imgSrc} alt={altText} className="w-30 h-30 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl text-blue-500 mb-2">{name}</h2>
            <p className="text-lg text-gray-400 mb-2">{position}</p>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
    );
}

const About = () => {
    return (
        <div className='p-5 flex flex-col justify-center' style={{minHeight:"80vh"}}>
            <h1 className='mx-auto text-3xl font-bold mb-10'>About Us</h1>
            <p className='mx-auto text-lg mb-5'>
                Welcome to our AI-driven platform! We are dedicated to leveraging the power of artificial intelligence to provide innovative solutions and enhance user experiences. Our team of experts is passionate about pushing the boundaries of technology to create intelligent systems that can learn, adapt, and grow.
            </p>
            <p className='mx-auto text-lg mb-5'>
                Our mission is to make AI accessible and beneficial for everyone. Whether you're a developer looking to integrate AI into your projects, a business seeking to optimize operations, or simply curious about the potential of AI, we are here to help. Join us on this exciting journey as we explore the limitless possibilities of artificial intelligence.
            </p>
            <p className='mx-auto text-lg mb-5'>
                We believe in the transformative power of AI and its ability to drive positive change across various industries. Our platform offers a range of tools and resources designed to empower users to harness the full potential of AI.
            </p>
            <p className='mx-auto text-lg mb-5'>
                From machine learning models to natural language processing, our solutions are built to address real-world challenges and deliver measurable results. We are committed to continuous innovation and strive to stay at the forefront of AI advancements.
            </p>
            <p className='mx-auto text-lg mb-10'>
                Thank you for visiting our About Us page. We look forward to connecting with you and exploring how AI can transform the future together.
            </p>
            <h2 className='mx-auto text-2xl font-bold mb-5'>Meet Our Team</h2>
            <div className='mx-auto max-w-screen-lg text-lg flex justify-center gap-8 flex-wrap'>
                <Profile
                    imgSrc={img}
                    altText="Hardik"
                    name="Hardik Garg"
                    position="CEO & Founder"
                    description=""
                />
                <Profile
                    imgSrc={img}
                    altText="Hardik"
                    name="Hardik Garg"
                    position="Creative Director"
                    description=""
                />
                <Profile
                    imgSrc={img}
                    altText="Hardik"
                    name="Hardik Garg"
                    position="Manager"
                    description=""
                />
            </div>
        </div>
    );
};

export default About;