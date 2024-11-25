'use client';
import { useState } from 'react';
import Navbar from '../navbar';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [userDetailsPopupOpen, setUserDetailsPopupOpen] = useState(false);
  const [selectedMerchandise, setSelectedMerchandise] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const merchandiseList = [
    { id: 1, name: 'T-Shirt', price: 35, image: 'baju.png' },
    { id: 2, name: 'Tote Bag', price: 25, image: 'tote.png' },
    { id: 3, name: 'Cap', price: 15, image: 'cap.png' },
  ];

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1, total: (cartItem.quantity + 1) * cartItem.price }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1, total: item.price }];
    });

    setMessage(`${item.name} has been added to the cart!`);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleQuantityChange = (itemId, action) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
            return newQuantity > 0
              ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
              : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.total, 0);
  };

  const handleSubmitOrder = () => {
    setIsCartOpen(false); // Close cart popup
    setTotalAmount(calculateTotalAmount());
    setUserDetailsPopupOpen(true); // Open user details form
  };

  const handleUserDetailsSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed with user details and total:', {
      totalAmount,
    });
    setUserDetailsPopupOpen(false);
    setCart([]); // Clear the cart after submitting
  };

  return (
    <div className="bg-black h-screen">
      <Navbar />
      
      <div
        className="w-screen h-screen bg-gray-400 overflow-hidden"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
              <div className="flex justify-center">
          <picture className="w-96 h-48 bg-cover">            
            <img src="tittle1.png" className="w-96 h-full object-cover" />
          </picture>
        </div>
        <div className="grid grid-cols-3 gap-10 p-10">
          {merchandiseList.map((item) => (
            <div key={item.id} className="bg-black p-4 rounded shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-96 object-cover rounded mb-4" />
              <h3 className="text-xl text-white font-bold">{item.name}</h3>
              <p className="text-lg text-white">RM{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

                {message && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-gray-500 bg-opacity-80 text-white py-10 px-10 rounded-lg text-3xl shadow-lg">
              <img src="right.png" alt="Cart Icon" className="w- 48 h-48 mx-auto" />
              {message}
            </div>
          </div>
        )}

<button
  onClick={() => setIsCartOpen(!isCartOpen)}
  className="absolute top-56 right-10 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center"
>
  <img src="cart.png" alt="Cart Icon" className="w-6 h-6 mr-2" />
  Cart {cart.reduce((total, item) => total + item.quantity, 0) > 0 && `(${cart.reduce((total, item) => total + item.quantity, 0)})`}
</button>

        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-2/3 relative">
              <button onClick={() => setIsCartOpen(false)} className="absolute top-2 right-2 text-black text-2xl">
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p>Price: RM{item.price}</p>
                        <p>Total: RM{item.total}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleQuantityChange(item.id, 'decrease')}
                          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        >
                          -
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 'increase')}
                          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <p className="text-xl font-bold mt-4">Total Amount: RM{calculateTotalAmount()}</p>
                  <button
                    onClick={handleSubmitOrder}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Submit Order
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {userDetailsPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black p-6 rounded-lg w-1/3 relative">
              <button
                onClick={() => setUserDetailsPopupOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl text-white font-bold mb-4">Enter Your Details</h2>
              <form onSubmit={handleUserDetailsSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white text-lg">Name</label>
                  <input type="text" id="name" required className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-white text-lg">Phone</label>
                  <input type="text" id="phone" required className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white text-lg">Email</label>
                  <input type="email" id="email" required className="w-full p-2 border rounded" />
                </div>              
                <div className="mb-4">
                    <label htmlFor="delivery" className="block text-white text-lg">Delivery Option</label>
                    <select 
                      id="delivery" 
                      name="delivery" 
                      className="w-full p-2 border rounded" 
                      required
                    >
                      <option value="self-pickup">Self Pickup</option>
                      <option value="aman">Aman</option>
                      <option value="tekun">Tekun</option>
                      <option value="harapan">Harapan</option>
                    </select>
                  </div><br></br>
                  <p className="text-white text-lg">Total Amount: RM{totalAmount}</p><br></br>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
