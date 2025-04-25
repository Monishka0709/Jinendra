// components/LoginModal.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import CartDisplay from './CartDisplay';
import {Google as GoogleIcon} from '@mui/icons-material'

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  return (
    <div style={{
        position: "fixed",
        inset: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "50"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: 'center',
          flexDirection: "column",
          gap: "16px",
          height:'25rem',
          width:'25rem'
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Login</h2>
          <input
            type="text"
            placeholder="Phone Number"
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              borderRadius: "4px",
              width: "100%"
            }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="otp"
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              borderRadius: "4px",
              width: "100%"
            }}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}> <div>Don't have an account? </div><a href='#' style={{color:'purple'}}>Sign Up</a></div>
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              login(phoneNumber,otp);
              onClose();
            }}
          >
            Login
          </button>
          <button style={{
              border: "1px solid orange",
              color: "darkorange",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
            <GoogleIcon/> Sign up with google
          </button>
          
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><a href='#' style={{color:'purple'}}>Forgot your password?</a></div>
        </div>
      </div>
  );
}
