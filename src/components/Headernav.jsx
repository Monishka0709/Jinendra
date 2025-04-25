import React from "react";
import Icon from "../assets/icons/mobile.png";

const categories = [
  { label: "MOBILE & TABLET", icon: Icon },
  { label: "ACCESSORIES", icon: Icon },
  { label: "SMART WEARABLES", icon: Icon },
  { label: "SMART TV & AUDIO", icon: Icon },
  { label: "LAPTOPS", icon: Icon },
  { label: "POOJARA PRIME", icon: Icon },
  { label: "BRANDS", icon: Icon },
  { label: "MORE", icon: Icon },
];

const Headernav = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "12px",
    backgroundColor: "white",
    borderTop: "2px solid #f97316",
    overflowX: "auto",
  };

  const categoryStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    color: "black",
    textAlign: "center",
    minWidth: "80px",
  };

  const iconStyle = {
    width: "4rem",
    height: "4rem",
    marginBottom: "4px",
    objectFit: "contain",
  };

  return (
    <div
      style={containerStyle}
      className="top-category-icons"
    >
      {categories.map((cat, idx) => (
        <div key={idx} style={categoryStyle}>
          <img src={cat.icon} alt={cat.label} style={iconStyle} />
          {cat.label}
        </div>
      ))}
    </div>
  );
};

export default Headernav;
