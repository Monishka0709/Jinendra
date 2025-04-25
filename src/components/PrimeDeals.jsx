import React from 'react';
import '../App.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const products = [

    {
        name: 'Poojara Prime USB To Type C',
        price: '₹399.00',
        originalPrice: '₹999.00',
        img: 'https://img.freepik.com/free-vector/composition-with-realistic-power-charge-cable-mobile-devices_1284-54732.jpg?t=st=1745321215~exp=1745324815~hmac=2b998df745c199ecd3c3dd47281dc8c1b3d16d9dd9cef38292605e32856729d7&w=826',
    },
    {
        name: 'Poojara Prime Type C To C 60W',
        price: '₹399.00',
        originalPrice: '₹1,499.00',
        img: 'https://img.freepik.com/free-photo/black-usb-flash-drive-mockup-technology-data-storage-device_53876-97317.jpg?t=st=1745321443~exp=1745325043~hmac=87a4cf97de22ef7b0b7dd151793da770fc2fd9982c70d8b90a4a74be1e204cfa&w=826',
    },
    {
        name: 'Poojara Prime Type C To C 45W',
        price: '₹299.00',
        originalPrice: '₹1,499.00',
        img: 'https://img.freepik.com/premium-photo/white-usb-type-c-charger-cable-smartphone-white-background-3d-rendering_476612-19172.jpg?w=826',
    }
];

const handleAddToCart = (item) => {
    if (!user) {
      setShowLogin(true);
      addToCart(item)
    }
    else {
      addToCart(item);
    }
  };

const PrimeDeals = () => {
    return (
        <div style={{ padding: '30px 20px', backgroundColor: '#f5f2e8', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '25px', fontSize: '24px', fontWeight: 'bold' }}>POOJARA Prime | Elevate your Experience</h2>
            <div style={{ width: '100%', display: 'flex', justifyContent:'space-between'}}>
                <div style={{ width: '43%' }} >

                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        display: 'flex',
                        height:'20rem',
                        boxSizing: 'border-box',
                        border: '1px solid #eee',
                        borderRadius: '6px',
                        textAlign: 'left',
                        alignItems:'center'
                    }}>
                        <div style={{ width: '50rem' }}>
                            <img src={'https://img.freepik.com/free-vector/composition-with-realistic-usb-3-0-charging-cable-mobile-devices_1284-54742.jpg?t=st=1745319943~exp=1745323543~hmac=923da8d00da6f39658c27ee64cd425f0330aac8583f65701e40a8bdbdff9a56f&w=826'} alt={'Poojara Prime USB Type C To C 60W Data Cable'} style={{ width: '100%', height: 'auto', marginBottom: '15px' }} /></div>
                        <div>
                            <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Poojara Prime USB Type C To C 60W Data Cable</h4>
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>C to C Type Cable 60W Fast Charging 5A Fast Charging Premium Build Quality Versatile Usage Universal Compatibility Supports all Type C Devices like Smartphone, Macbook, Laptop and etc.</p>
                            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                                {'₹349.00'}{' '}
                                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '14px', marginLeft: '10px', fontWeight: 'normal' }}>
                                    {'₹1299.00'}
                                </span>
                            </p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button style={{
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                                    onClick={() => handleAddToCart({ 
                                        name: 'Poojara Prime USB Type C To C 60W Data Cable', 
                                        price: '₹399.00',
                                        originalPrice: '₹1299.00',
                                        img: 'https://img.freepik.com/free-vector/composition-with-realistic-power-charge-cable-mobile-devices_1284-54732.jpg?t=st=1745321215~exp=1745324815~hmac=2b998df745c199ecd3c3dd47281dc8c1b3d16d9dd9cef38292605e32856729d7&w=826',})}>
                                    <ShoppingCartIcon style={{ fontSize: '18px', marginRight: '5px' }} />
                                    ADD TO CART
                                </button>
                                <button style={{
                                    border: '1px solid orange',
                                    background: 'white',
                                    color: 'orange',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    <FavoriteBorderIcon style={{ fontSize: '18px' }} />
                                </button>
                                <button style={{
                                    border: '1px solid orange',
                                    background: 'white',
                                    color: 'orange',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    <CompareArrowsIcon style={{ fontSize: '18px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent:'space-around', flexWrap: 'wrap', width: '57%' }}>
                    {products.map((product, index) => (
                        <div key={index} 
                        className='primeProductItem'
                        style={{
                            backgroundColor: 'white',
                            padding: '10px',
                            width: 'calc(32% - 20px)',
                            height:'20rem',
                            boxSizing: 'border-box',
                            border: '1px solid #eee',
                            borderRadius: '6px',
                            textAlign: 'left',
                            overflow:'hidden'
                        }}>
                            <div className='primeProductItem-img-container'>
                                <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '15px' }} />
                                <div></div>
                            </div>
                            <div className="primeProductItem-details">
                            <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>{product.name}</h4>
                            {product.description && <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{product.description}</p>}
                            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                                {product.price}{' '}
                                <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '14px', marginLeft: '10px', fontWeight: 'normal' }}>
                                    {product.originalPrice}
                                </span>
                            </p>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button style={{
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    padding: '5px',
                                    border: 'none',
                                    fontSize:'11px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    flex: 1
                                }}>
                                    <ShoppingCartIcon style={{ fontSize: '18px', marginRight: '5px' }} />
                                    ADD TO CART
                                </button>
                                <button style={{
                                    border: '1px solid orange',
                                    background: 'white',
                                    color: 'orange',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    <FavoriteBorderIcon style={{ fontSize: '18px' }} />
                                </button>
                                <button style={{
                                    border: '1px solid orange',
                                    background: 'white',
                                    color: 'orange',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    <CompareArrowsIcon style={{ fontSize: '18px' }} />
                                </button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PrimeDeals;
