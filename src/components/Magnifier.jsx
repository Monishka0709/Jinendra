import React, { useState, useRef } from 'react';

const Magnifier = ({ src, zoom = 2 }) => {
  const [showLens, setShowLens] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x < 0 || y < 0 || x > width || y > height) {
      setShowLens(false);
      return;
    }

    setLensPosition({ x, y });
    setShowLens(true);
  };

  const handleMouseLeave = () => {
    setShowLens(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Zoomed"
        style={{ width: '100%', height: 'auto' }}
      />
      {showLens && (
        <div
          style={{
            position: 'absolute',
            top: lensPosition.y - 50,
            left: lensPosition.x - 50,
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundImage: `url(${src})`,
            backgroundSize: `${imgRef.current.width * zoom}px ${imgRef.current.height * zoom}px`,
            backgroundPosition: `-${lensPosition.x * zoom - 50}px -${lensPosition.y * zoom - 50}px`,
            border: '2px solid #fff',
            boxShadow: '0 0 8px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

export default Magnifier;
