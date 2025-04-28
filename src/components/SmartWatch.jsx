import React, { useState, useEffect } from 'react';
import '../App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { CompareArrows as CompareIcon, FavoriteBorder as FavoriteIcon, KeyboardArrowDown, KeyboardArrowUp, ShoppingCart as ShoppingCartIcon, ShoppingCartOutlined, Visibility as VisibilityIcon } from '@mui/icons-material';
import Modal from './Modal';
import products from '../assets/products.json';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';

const SmartWatch = () => {
  const { cartItems, addToCart } = useCart();
  const { user } = useAuth();
  const [flyImage, setFlyImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCartItems, setShowCartItems] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const iphoneData = products[2].data;

  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(item.new_price.replace(/[₹,]/g, "")) * item.quantity;
  }, 0);

  useEffect(() => {
    setTotalQuantity(cartItems.reduce((sum, item) => sum + item.quantity, 0));
  }, [cartItems]);

  const handleAddToCart = (item, e) => {
    // if (!user) {
    //   setShowLogin(true);
    // }
    addToCart(item);
    startFlyToCart(e, item.img1);
  };

  const startFlyToCart = (e, imgSrc) => {
    const cartIcon = document.querySelector('.cartShow');
    const cartRect = cartIcon.getBoundingClientRect();

    setFlyImage({
      src: imgSrc,
      startX: e.clientX - 100,
      startY: e.clientY - 200,
      endX: cartRect.left + cartRect.width / 2,
      endY: cartRect.top + cartRect.height / 2,
    });
  };
  const startFlyToCartSmall = (e, imgSrc) => {
    const windowWidth = window.innerWidth;
    let endX, endY;
  
    if (windowWidth < 769) {
      // Bottom center for mobile
      endX = window.innerWidth / 2;
      endY = window.innerHeight - 40; // a bit above the bottom
    } else {
      // Bottom left for larger screens
      const cartIcon = document.querySelector('.cartShow');
      const cartRect = cartIcon.getBoundingClientRect();
      endX = cartRect.left + cartRect.width / 2;
      endY = cartRect.top + cartRect.height / 2;
    }
  
    setFlyImage({
      src: imgSrc,
      startX: e.clientX-50,
      startY: e.clientY-200,
      endX,
      endY,
    });
  };
  

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 15, iphoneData.length));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f2e8', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Smart Watches</h2>
         <div className="itemComponent-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        {iphoneData.slice(0, visibleCount).map((item, index) => (
          <div 
            key={index} 
            className="itemComponent" 
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              padding: '15px',
              width: 'calc(20% - 20px)',
              minWidth: '180px',
              display: 'flex',
              flexDirection: 'column',
              height: '21rem',
              textAlign: 'center',
              borderRadius: '5px',
              boxSizing: 'border-box',
              position: 'relative',
              animationDelay: `${index * 0.2}s`  // Stagger delay based on index
            }}
          >
            <div className="itemComponent-img-container">
              <img src={item.img1} alt={item.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <button onClick={() => setSelectedItem(item)}><VisibilityIcon /></button>
            </div>
            <div className="itemComponent-details">
              <p style={{ fontSize: '14px', marginBottom: '10px' }}>{item.name}</p>
              <p>
                <span>₹{item.new_price}</span>
                <span style={{ textDecoration: 'line-through', color: '#888', marginLeft: '8px', fontWeight: 'normal' }}>₹{item.old_price}</span>
              </p>
              <div className="itemComponent-details-btn">
                <button className="home-addToCart-btn" onClick={(e) => handleAddToCart(item, e)}><ShoppingCartIcon /> Add To Cart</button>
                <button><FavoriteIcon /></button>
                <button><CompareIcon /></button>
              </div>
              <div className='itemComponent-details-small-btn'>
                <button
                  className='home-addToCart-btn'
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                    startFlyToCartSmall(e, item.img1);
                  }}
                >
                  <ShoppingCartOutlined />
                </button>
                <div className='effect-div'></div>
                <button><FavoriteIcon /></button>
                <button><CompareIcon /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      {visibleCount < iphoneData.length && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={handleLoadMore} style={{ border: '1px solid black', padding: '10px 20px', margin: '20px', backgroundColor: 'white', color: 'black', cursor: 'pointer', borderRadius: '20px' }}>
            Load More
          </button>
        </div>
      )}

     

      <AnimatePresence>
        {selectedItem && (
          <Modal id={selectedItem.id} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {flyImage && (
          <motion.img
            src={flyImage.src}
            initial={{ position: 'fixed', top: flyImage.startY, left: flyImage.startX, width: '15rem', height: '17rem', zIndex: 1000, backgroundColor: 'white' }}
            animate={{ top: flyImage.endY, left: flyImage.endX, width: 30, height: 30, opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => setFlyImage(null)}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartWatch;
