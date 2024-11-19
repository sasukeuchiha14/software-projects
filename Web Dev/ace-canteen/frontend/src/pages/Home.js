import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import canteen1 from '../assets/canteen1.jpg';
import canteen2 from '../assets/canteen2.jpg';
import canteen3 from '../assets/canteen3.jpg';

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
    }, 4000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <marquee behavior="alternate" loop="infinite">
        Check out our new and improved menu in the
        <span onClick={() => navigate('/menu')}> Menu Tab</span>.
        For any inquiries, feedback, or recommendations, please
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
          <p>The canteen services provided by Ace Canteen are designed to offer a delightful experience with a variety of food options that cater to every taste. From freshly prepared meals to quick snacks and beverages, we prioritize quality and hygiene in every dish. There is a lot of variety in the menu satisfying everyone's tastes. If you do want any changes in the menu, you can contact the admin and request for a change in the menu. If the menu gets updated, you will be notified of the same. Join us to explore a menu that blends traditional flavors with modern favorites, perfect for satisfying your hunger at any time of the day. Our dedicated team ensures that every meal is prepared with the utmost care and attention to detail, making your dining experience truly exceptional.</p><br/>
          <p>We also offer a range of healthy options for those who are conscious about their diet. Our menu includes vegetarian, vegan, and gluten-free options to cater to all dietary preferences. Whether you're looking for a hearty meal or a light snack, Ace Canteen has something for everyone. Have a wonderful experience and enjoy the best canteen services at Ace Canteen. We are committed to providing excellent service and delicious food to make your dining experience memorable.</p>
          <p>Thank you for choosing Ace Canteen, and we look forward to serving you.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
