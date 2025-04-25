import React, {useState} from 'react'
import { motion } from 'framer-motion';
import '../App.css';
import { Button, IconButton, Tooltip } from '@mui/material';
import products from '../assets/products.json'
import { useCart } from '../context/CartContext';
import {useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

import iphoneData from '../constants/iphoneData'
import { Add, Close, Compare, Face, Facebook, Favorite, Google, LinkedIn, Pinterest, Remove, RemoveShoppingCartSharp, WhatsApp } from '@mui/icons-material';

const Modal = ({ id, onClose }) => {
  const dataItem = products[2].data.find((item) => id == item.id)
  console.log(dataItem.name)

    const [quantity, setQuantity] = useState(1);
    const [primaryImage, setPrimaryImage] = useState(dataItem.img1);
  
    const handleImageClick = (clickedImage) => {
      // Swap the primary image with the clicked one
      if (clickedImage !== primaryImage) {
        setPrimaryImage(clickedImage);
      }
    };
  
    const secondaryImages = [
      dataItem.img1,
      dataItem.img2,
      dataItem.img3,
      dataItem.img4,
      dataItem.img5,
      dataItem.img6,
    ];

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
  const modalVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: '0vh', opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 120 } },
    exit: { y: '-100vh', opacity: 0, transition: { duration: 0.3 } },
  };

  const modalContainer = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    inset: "0px",
    zIndex: "50",
    position: "fixed",
    cursor: 'pointer',
    top: 0,
    left: 0,

  }
  const modalStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    height: "fit-content",
    height: "80%",
    overflowY: "scroll",

  }


  return (
    <motion.div
      style={modalContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      onClick={onClose} // Dismiss on outside click
    >
      <div
      className='modal-container'
        onClick={(e) => e.stopPropagation()}
        style={modalStyle}// Prevent modal close on inside click
      >
         <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        <div style={{ width: "100%", display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ position: 'static', backgroundColor: "transparent", border: "none", fontSize: "1.5rem", color: "black" }} onClick={onClose}><Close /></button>
        </div>
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
        <div className='modal-image-container'>
      <div className='modal-primary-image'>
        <img src={primaryImage} alt="Primary Product" />
      </div>
      <div className='modal-secondary-image'>
        {secondaryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index + 1}`}
            onClick={() => handleImageClick(img)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>


            <div className="modal-content" >
              <div className="modal-title">{dataItem.name}</div>
              <div style={{margin:'10px 0px'}}>
                <p className="text-green-700 font-semibold " style={{fontFamily:'system-ui', fontSize:'13px'}}>{dataItem.stock.toUpperCase()}</p>
                <p className="text-grey-500 font-semibold " style={{fontFamily:'system-ui', fontSize:'13px'}}>Only 2 left</p>
                <p className="text-grey-500 font-semibold " style={{fontFamily:'system-ui', fontSize:'14px', float:'right'}}>SKU: {dataItem.sku}</p>
                <p className="text-blue-700 font-semibold " style={{fontFamily:'system-ui', fontSize:'13px', display:'inline-block', width:'100%', textAlign:'left'}}><a href='#' style={{borderBottom:'1px solid blue'}}>BE THE FIRST TO REVIEW THIS PRODUCT</a></p>
                </div>
                <div style={{ display:'flex', justifyContent:'flex-start', alignItems:'flex-end', gap:'1.52rem'}}>
                  <p style={{color:'orange', fontFamily:'system-ui', fontSize:'2.2rem', fontWeight:'bold'}}>₹{dataItem.new_price}</p>
                  <del style={{color:'#c0c0c0', fontFamily:'system-ui', fontSize:'1.5rem', fontWeight:'bold'}}>₹{dataItem.old_price}</del>
                </div>

                <div style={{margin:'10px 0px 20px'}}>
                  <p>QTY</p>
                  <div style={{display:'flex', borderBottom:'1px solid #c0c0c0', width:'fit-content'}}>
                    <IconButton onClick={() => setQuantity(quantity - 1)}><Remove/></IconButton>
                    <div style={{padding:'10px 20px'}} >{quantity}</div>
                    <IconButton onClick={() => setQuantity(quantity + 1)}><Add/></IconButton>
                  </div>
                </div>
              
              <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
              
                <Tooltip title="Add to Cart">
                  <button
                    onClick={() => handleAddToCart(dataItem)}
                    style={{ background: 'orange', color: 'white', position: 'static', width: '100%', borderRadius: '2rem', opacity: '1', padding:'15px', fontSize:'20px', fontWeight:'bold' }}
                  >
                    ADD TO CART
                  </button>
                </Tooltip>

              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <Favorite sx={{ fontSize: '16px' }}/> ADD TO WISHLIST </Button>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <Compare sx={{ fontSize: '16px' }}/> ADD TO COMPARE </Button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <Facebook sx={{ fontSize: '20px' }}/></Button>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <Google sx={{ fontSize: '20px' }}/></Button>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <LinkedIn sx={{ fontSize: '20px' }}/></Button>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <Pinterest sx={{ fontSize: '20px' }}/></Button>
                <Button sx={
                  {
                    color:'grey',
                    textAlign:'center',
                    fontSize:'12px',
                    fontFamily:'system-ui',
                  }
                }> <WhatsApp sx={{ fontSize: '20px' }}/></Button>
              </div>

              <div>
                <p style={{fontSize:'12px', fontFamily:'system-ui', margin:'10px 0px 7px'}}>CHECK FOR CASH ON DELIVERY</p>
                <div>
                  <input type='text' placeholder='Enter Pincode' style={{border:'1px solid #ff5a00', padding:'5px 10px', borderRadius:'5px 0 0 5px'}}/>
                  <button style={{ border:'1px solid #ff5a00', padding:'5px 10px', background:'white', color:'#ff5a00', borderRadius:'0 15px 15px 0' }}>Check</button>
                </div>
              </div>

              <div style={{ display: 'flex',  marginTop: '12px', fontSize: '0.9rem', fontFamily: 'system-ui' }}>
              <ul>
                <li>Brand: {dataItem.brand_name}</li>
                <li>Colour: {dataItem.color}</li>
              </ul>
              </div>
              
            </div>
          </div>

        </div>
      
    </motion.div>

  )
}

export default Modal
