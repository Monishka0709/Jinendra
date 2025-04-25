import React, { useState } from 'react'
import '../App.css'
import { AnimatePresence } from 'framer-motion';
import { CompareArrows as CompareIcon, FavoriteBorder as FavoriteIcon, KeyboardArrowDown, KeyboardArrowUp, ShoppingCart as ShoppingCartIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import Modal from './Modal';
import products from '../assets/products.json'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';


const SmartWatch = () => {
  const { cartItems } = useCart();
  // console.log(cartItems.length)
  // console.log(cartItems)
  const ITEMS_PER_LOAD = 15;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [selectedItem, setSelectedItem] = useState(null); // store selected item
  const [showCartItems, setShowCartItems] = useState(false);
  const iphoneData = products[2].data;

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
      return total + parseFloat(item.new_price.replace(/[₹,]/g, ""));
    }, 0);
  

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f2e8', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Smart Watches</h2>
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
              height: '21rem',
              textAlign: 'center',
              borderRadius: '5px',
              boxSizing: 'border-box',
              position:'relative'
              // overflow: 'hidden',
            }}
          >
            <div className='itemComponent-img-container'>
              <img
                src={item.img1}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <button onClick={() => setSelectedItem(item)}>
                <VisibilityIcon />
              </button>
            </div>
            <div className='itemComponent-details'>
              <p className='itemComponent-details-name' style={{ fontSize: '14px', marginBottom: '10px' }}>{item.name}</p>
              <p className='itemComponent-details-price'>
                <span>₹{item.new_price}</span>
                <span style={{ textDecoration: 'line-through', color: '#888', marginLeft: '8px', fontWeight: 'normal' }}>
                ₹{item.old_price}
                </span>
              </p>
              <div className='itemComponent-details-btn' >
                <button className='home-addToCart-btn' onClick={() => handleAddToCart(item)} ><ShoppingCartIcon /> Add To Cart </button>
                <div className='effect-div'></div>
                <button><FavoriteIcon /></button>
                <button><CompareIcon /></button>
              </div>
              <div className='itemComponent-details-small-btn' >
                <button className='home-addToCart-btn' onClick={() => handleAddToCart(item)} ><ShoppingCartIcon /> </button>
                <div className='effect-div'></div>
                <button><FavoriteIcon  /></button>
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


      <div 
      className='cartShow'
      style={{
        position: 'fixed',
        bottom: showCartItems ? '7rem' : '0',
        left: '0',
        padding: '7px 10px',
        background: 'orange',
        cursor: 'pointer',
        zIndex: '500'

      }}

        onClick={handleCartDisplay}
      >
        {
          cartItems.length == 0 ? 'Your Cart is Empty' : `${cartItems.length} items in your cart `
        }
        {
          showCartItems == false?  <KeyboardArrowUp />:<KeyboardArrowDown />
        }
        



      </div>


      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        padding: '7px 10px',
        height: '7rem',
        width: '100vw',
        display: showCartItems ? 'flex' : 'none',
        background: '#eee',
        cursor: 'pointer',
        zIndex:'600',
        justifyContent: 'space-between'

      }}>
        <div style={{
  height: '6rem',
  display: showCartItems ? 'flex' : 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  color: 'darkorange',
  alignItems: cartItems.length > 0 ? 'unset' : 'center',
  gap: '1rem',
  padding: '0.5rem'
}}>
  {
    cartItems.length > 0 ? (
      Object.entries(
        cartItems.reduce((acc, item) => {
          if (acc[item.id]) {
            acc[item.id].quantity += 1;
          } else {
            acc[item.id] = { ...item, quantity: 1 };
          }
          return acc;
        }, {})
      ).map(([id, item]) => (
        <div key={id} style={{ position: 'relative' }}>
          <img src={item.img1} style={{ width: '4rem', height: '4rem' }} />
          <span style={{
            position: 'absolute',
            top: '-0.5rem',
            right: '-0.5rem',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '1.2rem',
            height: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem'
          }}>
            {item.quantity}
          </span>
        </div>
      ))
    ) : (
      'You have no items in your shopping cart.'
    )
  }
</div>
        <div style={{display:'flex'}}>
          <div style={{ width: '15rem', borderRight: '1px solid #ccc', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', fontWeight:'600' }}>Cart Summary</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><div>Total Quantity</div><div>{cartItems.length}</div></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><div>Cart Subtotal</div><div>₹{cartItems.length> 0?             totalPrice.toLocaleString("en-IN") : 0 }</div></div>
          </div>
          <div style={{ width: '12rem', borderRight: '1px solid #ccc', padding: '20px' }}>
            <button style={{ width: '10rem', fontWeight:'600', fontSize:'0.8rem', background: 'orange', padding: ' 10px 25px', borderRadius:'50px', color:'white' }}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal
            id={selectedItem.id}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartWatch;
