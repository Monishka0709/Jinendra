import React from 'react'
import { motion } from 'framer-motion';
import '../App.css';
import { Tooltip } from '@mui/material';
import iphoneData from '../constants/iphoneData'

const Modal = ({name,img, price, originaPrice, onClose}) => {

    const data = iphoneData
    // const modalItem = data.find((item)=> item.name == name)
    // console.log(modalItem)

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
        cursor:'pointer',
        top: 0,
        left: 0,
        
      }
      const modalStyle = {
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "16px",
        // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // height: "fit-content",
        height: "70%",
        overflow: "hidden",

      }
      const inputStyle = {
        flexGrow: 1,
        padding: "8px",
        border: "none",
        outline: "none",
        color: "black",
      };

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
              onClick={(e) => e.stopPropagation()} 
              style={modalStyle}// Prevent modal close on inside click
            >
                <div style={{width:"100%", display:'flex', justifyContent:'flex-end'}}>
                    <button style={{ position:'static', backgroundColor:"transparent", border:"none", fontSize:"1.5rem", color:"black"}} onClick={onClose}>x</button> 
                    </div>
            <div style={{width:"100%", display:'flex', justifyContent:'center'}}>
                <div>
              <img src={img} alt="Product" className="w-full h-1/2" />
              </div>
              <div>

                <div className="p-4 text-center">
                <h2 className="text-xl ">{name}</h2>
                <p className="text-green-600 font-semibold mt-2">₹{price}</p>
                <div style={{width:"100%", display:'flex', justifyContent:'center'}}>
                    <Tooltip title="Add to Cart">
                    <button
                  onClick={() => alert('Added to cart!')}
                  style={{background:'orange', color:'white', position:'static', width:'100%', borderRadius:'5px', opacity:'1'}}
                >
                  ADD TO CART
                </button> 
                    </Tooltip>
                </div>
              </div>
              </div>
              
              </div>
            </div>
          </motion.div>
    
  )
}

export default Modal
