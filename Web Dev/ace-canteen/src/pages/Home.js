import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import canteen1 from '../assets/canteen1.jpg';
import canteen2 from '../assets//canteen2.jpg';
import canteen3 from '../assets//canteen3.jpg';

const images = [
  { src: canteen1, alt: 'Canteen 1' },
  { src: canteen2, alt: 'Canteen 2' },
  { src: canteen3, alt: 'Canteen 3' }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const updateCarousel = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <marquee behavior="alternate" loop="infinite">
        New menu is available and updated in the
        <span onClick={() => navigate('/menu')}> Menu Tab</span>.
        For any enquiry or recommendation, please
        <span onClick={() => navigate('/contact')}> Contact Us.</span>
      </marquee>
      <div className="carousel">
        <div className='header'>
          <h1>ACE CANTEEN</h1>
          <h4>Welcome to the best canteen services</h4>
        </div>
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
        <button className="carousel-button prev" onClick={() => updateCarousel('prev')}>&lt;</button>
        <button className="carousel-button next" onClick={() => updateCarousel('next')}>&gt;</button>
        <div className='para'>
          <p>The canteen services provided by Ace Canteen are designed to offer a delightful experience with a variety of food options that cater to every taste. From freshly prepared meals to quick snacks and beverages, we prioritize quality and hygiene in every dish. There is a lot of variety in the menu satisfying everyone's tastes. If you do want any changes in the menu, you can contact the admin and request for a change in the menu. If the menu gets updated, you will be notified of the same</p><br/>
          <p>Join us to explore a menu that blends traditional flavors with modern favorites, perfect for satisfying your hunger at any time of the day.</p><br/>
          <p> Have a wonderful experience.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
