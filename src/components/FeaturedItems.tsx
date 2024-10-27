import React from 'react';

const items = [
  {
    id: 1,
    name: 'Signature Burger',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Fresh Pasta',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Healthy Bowl',
    price: '$11.99',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function FeaturedItems() {
  return (
    <div id="menu" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Menu Items
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our most popular dishes, made with love
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={item.image} alt={item.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-2xl font-bold text-orange-600">{item.price}</p>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}