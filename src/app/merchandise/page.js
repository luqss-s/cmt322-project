'use client';
import { useState } from 'react';
import Navbar from '../navbar';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMerchandise, setSelectedMerchandise] = useState(null);
  
  const merchandiseList = [
    { id: 1, name: 'T-Shirt', price: 'RM35', image: 'baju.png' },
    { id: 2, name: 'Tote Bag', price: 'RM25', image: 'tote.png' },
    { id: 3, name: 'Cap', price: 'RM15', image: 'cap.png' },
    // Add more items here
  ];

  const handlePurchaseClick = (item) => {
    setSelectedMerchandise(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', e.target);
  };

  return (
    <div className="bg-black h-screen">
      <Navbar />
      
      <div className="w-screen h-screen bg-gray-400 overflow-hidden" style={{ backgroundImage: 'url(.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="opacity-100 w-full max-h-full">
          <div className="flex justify-center ">
          <picture className="w-96 h-48 bg-cover">            
              <img src="tittle1.png" className="w-96 h-full object-cover" />
            </picture>
          </div>

          <div className="grid grid-cols-3 gap-10 p-10">
            {merchandiseList.map(item => (
              <div key={item.id} className="bg-black p-4 rounded shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-96 object-cover rounded mb-4" />
                <h3 className="text-xl text-white font-bold">{item.name}</h3>
                <p className="text-lg text-white " >{item.price}</p>
                <button 
                  onClick={() => handlePurchaseClick(item)} 
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>

          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-black p-6 rounded-lg w-1/3 relative">
                    <button 
                onClick={handleClosePopup} 
                className="absolute top-2 right-2 text-white text-2xl" // Adjusted the top and right values
            >
                &times;
            </button>
            <h2 className="text-2xl text-white font-bold mb-4">Purchase Form</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white text-lg">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-white text-lg">Phone Number</label>
                    <input 
                      type="text" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-lg">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full p-2 border rounded" 
                    />
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
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Submit Order
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
