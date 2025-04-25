import { useState } from "react";
import {ArrowForwardIos as ArrowForwardIosIcon,Menu as MenuIcon, Search as SearchIcon, Settings as SettingsIcon, Favorite as FavoriteIcon, ShoppingBag as ShoppingBagIcon, ShoppingCart} from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useCart } from "../context/CartContext";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { cartItems } = useCart();

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
    return total + parseFloat(item.price.replace(/[₹,]/g, ""));
  }, 0);
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerItems = [
    "Mobile Phones",
    "Brands",
    "Accessories",
    "Smart Wearables",
    "Smart TV & Audio",
    "Laptops",
    "Landline Phones",
    "About Us",
    "Contact Us",
    "Our Stores",
    "Term & Conditions",
    "Returns & Refunds",
    "Track Your Orders"
  ];

  const headerStyle = {
    backgroundColor: "#f97316",
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
          <button className="cart-button"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}> <ShoppingCart style={{ fontSize: "24px" }} /> </button>
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
          <div style={{ display: "flex",padding:"1rem", borderRight:"1px solid #ddd", alignItems: "center", gap: "4px" }}>
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
