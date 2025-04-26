import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner1 from '../assets/banner/Banner1.png';
import Banner2 from '../assets/banner/Banner2.png';
import Banner3 from '../assets/banner/Banner3.png';
import Banner4 from '../assets/banner/Banner4.png';

const images = [Banner1, Banner3, Banner2, Banner4];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function SliderCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-inner">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="carousel-image"
          />
        </AnimatePresence>
      </div>

      <div
        className="overlay"
        onMouseEnter={(e) => {
          const controls = e.currentTarget.querySelector('.controls');
          if (controls) controls.style.opacity = 1;
        }}
        onMouseLeave={(e) => {
          const controls = e.currentTarget.querySelector('.controls');
          if (controls) controls.style.opacity = 0;
        }}
      >
        <div className="controls">
          <button onClick={() => paginate(-1)} className="carousel-btn">◀</button>
          <button onClick={() => paginate(1)} className="carousel-btn">▶</button>
        </div>
      </div>

      <style jsx>{`
        .carousel-wrapper {
          position: relative;
          width: 100%;
          height: 90vh;
          aspect-ratio: 16 / 9;
          background: #f5f2e8;
          overflow: hidden;
        }

        .carousel-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .carousel-btn {
          background-color: black;
          color: #fff;
          border-radius: 5px;
          height: 3.5rem;
          width: 3rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .carousel-btn:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
          @media (max-width: 1025px) {
          

          .carousel-wrapper {
            aspect-ratio: 16/9; /* Taller aspect for small screens */
            height: 69vh;
          }
        }

        @media (max-width: 768px) {
          .carousel-btn {
            display: none;
          }

          .carousel-wrapper {
            aspect-ratio: 3 / 2; /* Taller aspect for small screens */
            height: 52vh;
          }
        }
           @media (max-width: 426px) {
          

          .carousel-wrapper {
            aspect-ratio: 16/9; /* Taller aspect for small screens */
            height: 28vh;
          }
        }
      `}</style>
    </div>
  );
}
