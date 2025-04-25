import React, { useState } from 'react'
import '../App.css'
import { AnimatePresence } from 'framer-motion';
import { CompareArrows as CompareIcon, FavoriteBorder as FavoriteIcon, KeyboardArrowDown, KeyboardArrowUp, ShoppingCart as ShoppingCartIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import Modal from './Modal';
// import iphoneData from '../constants/iphoneData'
import products from '../assets/products.json'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';


const IPhoneHome = () => {
  const { cartItems } = useCart();
  console.log(cartItems.length)
  console.log(cartItems)
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

  const handleAddToCartHover = () =>{
    console.log('hi')
  }

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
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>iPhone @ Best Deal + Cashback</h2>
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
                <button className='home-addToCart-btn' onClick={() => handleAddToCart(item)} onMouseOver={handleAddToCartHover}><ShoppingCartIcon /> Add To Cart </button>
                <div className='effect-div'></div>
                <button><FavoriteIcon /></button>
                <button><CompareIcon /></button>
              </div>
              <div className='itemComponent-details-small-btn' >
                <button className='home-addToCart-btn' onClick={() => handleAddToCart(item)} onMouseOver={handleAddToCartHover}><ShoppingCartIcon /> </button>
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
          fontSize:'0.85rem', 
          color:'darkorange',
          alignItems: cartItems.length>0? 'unset':'center' 
        }}>
          {
            cartItems.length>0?
            cartItems.map((item) => <img src={item.img} />) :
            'You have no items in your shopping cart.'

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

export default IPhoneHome;
