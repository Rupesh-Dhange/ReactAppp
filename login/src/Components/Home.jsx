// pages/Home.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to MyShop</h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/900x300?text=Welcome+to+MyShop"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Big Sale</h3>
            <p>Grab your favorite items at the best price!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/900x300?text=New+Arrivals"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check out our latest collections.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/900x300?text=Quality+Products"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Quality Guaranteed</h3>
            <p>Only the best products for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
