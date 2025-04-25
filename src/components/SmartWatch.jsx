import React, { useState } from 'react'
import '../App.css'
import { AnimatePresence } from 'framer-motion';
import { CompareArrows as CompareIcon, FavoriteBorder as FavoriteIcon, KeyboardArrowDown, KeyboardArrowUp, Visibility as VisibilityIcon } from '@mui/icons-material';
import Modal from './Modal';
import iphoneData from '../constants/iphoneData'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';


const SmartWatch = () => {
  const { cartItems } = useCart();
  console.log(cartItems.length)
  console.log(cartItems)
  const ITEMS_PER_LOAD = 15;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [selectedItem, setSelectedItem] = useState(null); // store selected item
  const [showCartItems, setShowCartItems] = useState(false);

  const handleCartDisplay = () => {
    setShowCartItems(!showCartItems)
  }
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_LOAD, iphoneData.length));
  };

  const { user } = useAuth();
  const { addToCart } = useCart();
  const [showLogin, setShowLogin] = useState(false);

  const handleAddToCart = (item) => {
    if (!user) {
      setShowLogin(true);
      addToCart(item)
    }
    else {
      addToCart(item);
    }
  };
  
    const totalPrice = cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace(/[₹,]/g, ""));
    }, 0);
  

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f2e8', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>SmartWatches</h2>
      <div className='itemComponent-container'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'flex-start'
        }}
      >
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        {iphoneData.slice(0, visibleCount).map((item, index) => (
          <div
            className='itemComponent'
            key={index}
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              padding: '15px',
              width: 'calc(20% - 20px)',
              minWidth: '180px',
              display: 'flex',
              flexDirection: 'column',
              height: '23rem',
              textAlign: 'center',
              borderRadius: '5px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <div className='itemComponent-img-container'>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <button onClick={() => setSelectedItem(item)}>
                <VisibilityIcon />
              </button>
            </div>
            <div className='itemComponent-details'>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}>{item.name}</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', wordBreak: 'break-word' }}>
                <span>{item.price}</span>
                <span style={{ textDecoration: 'line-through', color: '#888', marginLeft: '8px', fontWeight: 'normal' }}>
                  {item.originalPrice}
                </span>
              </p>
              <div className='itemComponent-details-btn' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px' }}>
                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
                <button><FavoriteIcon /></button>
                <button><CompareIcon /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < iphoneData.length && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            onClick={handleLoadMore}
            style={{
              border: '1px solid orange',
              padding: '10px 20px',
              margin: '20px',
              backgroundColor: 'white',
              color: 'orange',
              cursor: 'pointer',
              borderRadius: '20px'
            }}
          >
            Load More
          </button>
        </div>
      )}



      
      <AnimatePresence>
        {selectedItem && (
          <Modal
            name={selectedItem.name}
            img={selectedItem.img}
            price={selectedItem.price}
            originalPrice={selectedItem.originalPrice}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartWatch;
