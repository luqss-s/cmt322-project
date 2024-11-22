'use client';
import { useState } from 'react';
import Navbaradmin from '../navadminbar';

export default function MerchandiseOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'John',
      item: 'T-shirt',
      phone: '0123456789',
      email: 'john@example.com',
      deliveryOption: 'Self-Pickup',
      delivered: false,
    },
    {
      id: 2,
      name: 'Jane',
      item: 'Cap',
      phone: '0987654321',
      email: 'jane@example.com',
      deliveryOption: 'Tekun',
      delivered: false,
    },
  ]);

  // Toggle delivered status
  const toggleDelivered = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, delivered: !order.delivered } : order
      )
    );
  };



return (
    <div className="bg-gray-400 h-screen text-black">
      <Navbaradmin />

      <div className="container mx-auto px-8">
        <div className="flex justify-center ">
          <picture className="w-96 h-48 bg-cover">            
            <img src="title3.png" className="w-96 h-full object-cover" />
          </picture>
        </div>
        
        <table className="w-full table-auto border-collapse bg-black text-white">
        <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email Address</th>
              <th className="border px-4 py-2">Delivery Option</th>
              <th className="border px-4 py-2">Delivered</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-gray-100 border-b">
                <td className="text-black border px-4 py-2 font-bold">{order.name}</td>
                <td className="text-black border px-4 py-2 font-bold">{order.item}</td>
                <td className="text-black border px-4 py-2 font-bold">{order.phone}</td>
                <td className="text-black border px-4 py-2 font-bold">{order.email}</td>
                <td className="text-black border px-4 py-2 font-bold">{order.deliveryOption}</td>
                <td className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={order.delivered}
                    onChange={() => toggleDelivered(order.id)}
                    className="w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
