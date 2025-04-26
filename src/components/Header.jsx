import { useState } from "react";
import {ArrowForwardIos as ArrowForwardIosIcon,Menu as MenuIcon, Search as SearchIcon, Settings as SettingsIcon, Favorite as FavoriteIcon, ShoppingBag as ShoppingBagIcon, ShoppingCart, Close} from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import {  HomeFilled, LocationOn,  MoreVert, ShoppingCartOutlined, ThreeDRotation, WhatsApp } from '@mui/icons-material'
import '../App.css';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useCart } from "../context/CartContext";
import { IconButton } from "@mui/material";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { cartItems } = useCart();
   const [open, setOpen] = useState(false);
  
    const toggleNavDrawer = (state) => () => {
      setOpen(state);
    };

  const [expandState, setExpandState] = useState({
    mobile: false,
    accessories: false,
    wearables: false,
    tvAudio: false
  });
  
  const toggleExpand = (key) => {
    setExpandState((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(item.new_price.replace(/[₹,]/g, "")*item.quantity);
  }, 0);
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  
  const headerStyle = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 16px",
  };

  const logoSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const searchContainerStyle = {
    display: "flex",
    flexGrow: 1,
    margin: "0 24px",
  };

  const searchBoxStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "4px",
    overflow: "hidden",
    width: "100%",
  };

  const selectStyle = {
    color: "black",
    padding: "8px",
    border: "none",
    outline: "none",
    backgroundColor: "white",
  };

  const inputStyle = {
    flexGrow: 1,
    padding: "8px",
    border: "none",
    outline: "none",
    color: "black",
  };

  const searchButtonStyle = {
    padding: "0 12px",
    color: "black",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
  };

  const cogButtonStyle = {
    marginLeft: "8px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    // gap: "24px",
  };

  const signInStyle = {
    textAlign: "right",
    padding: "1rem",
  };

  return (
    <>
      <header style={headerStyle}>
      <nav>
        <div className='navbar-icon-container'>
        <IconButton style={{color:'white'}}><HomeFilled/></IconButton>
        <IconButton style={{color:'white'}}><WhatsApp/></IconButton>
        <div style={{ position: 'relative', display: 'inline-block' }}>
  <IconButton onClick={toggleNavDrawer(true)} style={{ color: 'white' }}>
    <ShoppingCartOutlined />
  </IconButton>
  {
  cartItems.length > 0 && (
    <span style={{
      position: 'absolute',
      top: '2px',
      right: 0,
      background: 'red',
      color: 'white',
      borderRadius: '50%',
      width: '0.95rem',
      height: '0.95rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem'
    }}>
      { cartItems.reduce((total, item) => total + item.quantity, 0) }
      
    </span>
  )
  }
</div>
        <IconButton style={{color:'white'}}><LocationOn/></IconButton>
        <IconButton style={{color:'white'}}><MoreVert style={{color:'white',transform:"rotate(90deg)"}}/></IconButton>
        </div>
      </nav>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleNavDrawer(false)}
      >
        <div style={{ width: 300, padding: '1rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Top Section */}
          <div>
            <div style={{float:'right',cursor:'pointer'}}><Close onClick={toggleNavDrawer(false)}/></div>
            <h2 style={{ color: 'darkblack' }}>YOUR CART</h2>
            <p>{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</p>
            
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src={item.img1} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', marginRight: '1rem' }} />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.name}</div>
                  <div style={{ color: 'black', fontWeight: 'bold' }}>₹{item.new_price}</div>
                  <div style={{ fontSize: '0.8rem' }}>QTY: {item.quantity}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div style={{ marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '1rem' }}>
              <span>CART SUBTOTAL:</span>
              <span style={{ color: 'black' }}>
                ₹{cartItems.reduce((acc, item) => acc + (item.new_price), 0).toLocaleString()}
              </span>
            </div>

            <button style={{
              width: '100%',
              padding: '0.7rem',
              border: '1px solid black',
              color: 'black',
              borderRadius: '20px',
              background: 'transparent',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              cursor: 'pointer'
            }}>
              VIEW AND EDIT CART
            </button>

            <button style={{
              width: '100%',
              padding: '0.7rem',
              background: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </Drawer>
      
        <div className="logo-section" style={logoSectionStyle}>
          <button
            className="side-drawer-button"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon style={{ fontSize: "24px" }} />
          </button>
          <img src="/logo.png" alt="Poojara Logo" style={{ height: "40px" }} />
          <div style={{display:'flex', gap:'1rem'}}>
          <button className="cart-button"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}> <SearchIcon style={{ fontSize: "24px" }} /> </button>
          <button className="cart-button" onClick={toggleNavDrawer(true)}
            style={{ background: "transparent", border: "none", cursor: "pointer",position:'relative' }}> <ShoppingCartOutlined style={{ fontSize: "24px" }} />{
              cartItems.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-7px',
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  width: '0.95rem',
                  height: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem'
                }}>
                  { cartItems.reduce((acc, item) => acc + item.quantity, 0) }
                  
                </span>
              )
              } </button>
            </div>
        </div>

        <div className="home-search-container" style={searchContainerStyle}>
          <div style={searchBoxStyle}>
            <select style={selectStyle}>
              <option>All Categories</option>
              <option>Mobile Phones</option>
              <option>Brand</option>
              
            </select>
            <input
              type="text"
              placeholder="SEARCH ENTIRE STORE HERE..."
              style={inputStyle}
            />
            <button style={searchButtonStyle}>
              <SearchIcon />
            </button>
          </div>
          <button style={cogButtonStyle}>
            <SettingsIcon />
          </button>
        </div>

        <div className="header-right-section" style={rightSectionStyle}>
          <div style={{ fontSize: "14px", padding:"1rem", borderRight:"1px solid #ddd" }}>NEED HELP?</div>
          <div onClick={toggleNavDrawer(true)} style={{ display: "flex",padding:"1rem", borderRight:"1px solid #ddd", alignItems: "center", gap: "4px" }}>
            <ShoppingBagIcon />
            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ fontSize: "14px", padding:"1rem", borderRight:"1px solid #ddd" }}>
          <FavoriteIcon style={{ fontSize: "20px" }} />
          </div>
          <div style={signInStyle}>
            <div style={{ fontSize: "12px" }}>HELLO, SIGN IN</div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>YOUR ACCOUNT</div>
          </div>
        </div>
      </header>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 300 }}
        >
          <List>
  {/* MOBILE PHONES */}
  <ListItem button onClick={() => toggleExpand('mobile')}>
    <ListItemText primary="Mobile Phones" />
    {expandState.mobile ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={expandState.mobile} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {["Smartphones", "5G Smartphones", "Keypad Phones", "iPad & Tablets", "Apple iPhone", "New Arrivals"].map((text, i) => (
        <ListItem button key={i} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Collapse>

  {/* ACCESSORIES */}
  <ListItem button onClick={() => toggleExpand('accessories')}>
    <ListItemText primary="Accessories" />
    {expandState.accessories ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={expandState.accessories} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {[
        "Airpods & Buds", "Bluetooth Neckband", "Wired Headphones & Handsfree", "Bluetooth Headphone", "PowerBank",
        "Chargers & Cables", "Memory Card & Pendrive", "Computer Accessories", "Wi-Fi Routers", "Other Accessories", "Poojara Prime"
      ].map((text, i) => (
        <ListItem button key={i} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Collapse>

  {/* SMART WEARABLES */}
  <ListItem button onClick={() => toggleExpand('wearables')}>
    <ListItemText primary="Smart Wearables" />
    {expandState.wearables ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={expandState.wearables} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {["Smart Watch", "Fitness Band", "Smart Home", "Health & Personal Care", "Other Gadgets"].map((text, i) => (
        <ListItem button key={i} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Collapse>

  {/* SMART TV & AUDIO */}
  <ListItem button onClick={() => toggleExpand('tvAudio')}>
    <ListItemText primary="Smart TV & Audio" />
    {expandState.tvAudio ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={expandState.tvAudio} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {[
        "Smart TV", "Streaming Devices", "Smart Speakers", "Bluetooth Speaker", "Home Theater Systems",
        "TV Speakers", "Musical Keyboard", "Party Speaker", "Saregama Carvaan"
      ].map((text, i) => (
        <ListItem button key={i} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Collapse>
  <ListItem onClick={toggleDrawer(false)}>
    <ListItemText primary="Laptops" />
  </ListItem>
  <ListItem onClick={toggleDrawer(false)}>
    <ListItemText primary="Brands" />
  </ListItem>
  <ListItem onClick={toggleDrawer(false)}>
    <ListItemText primary="Our Stores" />
  </ListItem>
  <ListItem onClick={toggleDrawer(false)}>
    <ListItemText primary="More" />
  </ListItem>
</List>

        </div>
      </Drawer>
    </>
  );
};

export default Header;
