import { useCart } from '../context/CartContext';

export default function CartDisplay() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Cart</h2>
      <ul className="space-y-2 mt-2">
        {/* {cartItems.map((item, index) => (
          <li key={index} className="border p-2 rounded">
            {item.name} - ${item.price}
          </li>
        ))} */}
      </ul>
    </div>
  );
}
