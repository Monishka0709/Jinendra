import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fefefe', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        
        {/* Subscription Section */}
        <div style={{ flex: '1 1 100%', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>Be the first to save!</h2>
          <div style={{ display: 'flex', maxWidth: '500px' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px 0 0 4px',
              }}
            />
            <button
              style={{
                backgroundColor: '#ff5a00',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact and Logo */}
        <div style={{ flex: '1 1 200px', margin: '10px 0' }}>
          <img src="https://poojaratele.com/images/footer-logo.png" alt="PoojaRa Logo" style={{ width: '180px' }} />
          <p style={{ marginTop: '10px', color: '#666' }}>Got questions? Call us!</p>
          <p style={{ margin: '4px 0', fontWeight: 'bold' }}>+91 93434 93434</p>
          <p style={{ margin: '4px 0' }}>Mail us at</p>
          <p style={{ color: '#666' }}>customer@poojaratele.com</p>
        </div>

        {/* Support Links */}
        <div style={{ flex: '1 1 200px', margin: '10px 0' }}>
          <h3>Support</h3>
          {['About Us', 'Blog', 'Contact Us', 'Affiliate Program', 'Humsafar Reward Program', 'Our Stores', 'Poojara Humsafar Program', 'Poojara Device Protection'].map((item, i) => (
            <p key={i} style={{ margin: '4px 0', color: '#666' }}>{item}</p>
          ))}
        </div>

        {/* Policies Links */}
        <div style={{ flex: '1 1 200px', margin: '10px 0' }}>
          <h3>Policies</h3>
          {['Privacy Policy', 'Return & Refund Policy', 'Shipping Policy', 'Terms & Conditions'].map((item, i) => (
            <p key={i} style={{ margin: '4px 0', color: '#666' }}>{item}</p>
          ))}
        </div>

        {/* Work with us */}
        <div style={{ flex: '1 1 150px', margin: '10px 0' }}>
          <h3>Work with us</h3>
          {['Career', 'Franchisee'].map((item, i) => (
            <p key={i} style={{ margin: '4px 0', color: '#666' }}>{item}</p>
          ))}
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 150px', margin: '10px 0' }}>
          <h3>Connect with us</h3>
          <div style={{ fontSize: '24px' }}>
            <span style={{ marginRight: '10px' }}>📘</span>
            <span style={{ marginRight: '10px' }}>🐦</span>
            <span style={{ marginRight: '10px' }}>📸</span>
            <span>🔗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
