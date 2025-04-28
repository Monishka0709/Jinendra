import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Headernav from '../components/Headernav'
import '../checkout.css'
import { useCart } from '../context/CartContext'
import { toast } from 'react-hot-toast';


const Checkout = () => {
  const notifySuccess = () => toast.success('Your order placed successfully !');
  const handleCheckout = () => {
    if(cartItems.length === 0){
      toast.error('Your cart is empty !');
      return
    }
    notifySuccess();
  }
  const { cartItems } = useCart();
  return (
    <div>
        <Header/>
        <Headernav/>
        <div className="checkout-container">
      <div className="form-section">
        <h2>Shipping Address</h2>
        <form className="shipping-form">
          <label>Email Address *</label>
          <input type="email" required />

          <label>First Name *</label>
          <input type="text" required />

          <label>Last Name *</label>
          <input type="text" required />

          <label>Company</label>
          <input type="text" />

          <label>Street Address *</label>
          <input type="text" required />

          <label>Country *</label>
          <select required>
            <option>India</option>
          </select>

          <label>State/Province *</label>
          <select required>
            <option>Select State</option>
          </select>

          <label>City *</label>
          <input type="text" required />

          <label>Zip/Postal Code *</label>
          <input type="text" required />

          <label>Mobile Number (Without Country Code) *</label>
          <input type="text" required />
        </form>
      </div>

      <div className="methods-section">
        <div className="shipping-methods">
          <h2>Shipping Methods</h2>
          <p>Sorry, no quotes are available for this order at this time</p>
        </div>

        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" /> Pinelabs Payment (EMI/CreditCard/DebitCard)
            </label>
            <label>
              <input type="radio" name="payment" /> Pay Online (Credit-Debit Card / UPI / EMI / Banking ) CC Avenue
            </label>
          </div>
          <div className="discount-code">
            <label>Apply Discount Code</label>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2>Order Summary</h2>
        <p className="reward">🎉 You can earn <span>50 Reward Points</span> for registration!</p>

        <div className="order-details">
          <div className="order-row">
            <span>Cart Subtotal</span>
            <span>₹{cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0)}</span>
          </div>
          <div className="order-row">
            <span>Shipping</span>
            <span>Not yet calculated</span>
          </div>
          <div className="order-row total">
            <span>Order Total</span>
            <span>₹{cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0)}</span>
          </div>
        </div>

        <div className="cart-items">
        {cartItems.length>0 && <b>{ cartItems.reduce((total, item) => total + item.quantity, 0)} Item in Cart</b>}
          {cartItems.length > 0 ?
            cartItems.map((item, index) => (
              <div className="cart-item" key={index} style={{display: 'flex', alignItems: 'center', height: '6.5rem'}}>
                <img src={item.img1} alt={item.name}  style={{width: '3rem', height: '3rem', marginRight: '10px'}}/>
                <div className="item-details" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <span className="item-name" style={{ fontSize:'0.8rem'}}>{item.name}</span>
                  <span className="item-name" style={{ fontSize:'0.8rem'}}>QTY: {item.quantity}</span>
                  <span className="item-price" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}><span>₹{item.new_price}</span><del>₹{item.old_price}</del></span>
                </div>
              </div>
            )):
            'You have no items in your cart'
          }
        </div>

        <textarea placeholder="Your note" rows="3"></textarea>

        <button className="place-order" onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Checkout
