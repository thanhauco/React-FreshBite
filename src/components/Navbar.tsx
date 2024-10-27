import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">FreshBite</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 px-3 py-2">Menu</a>
              <a href="#special" className="text-gray-700 hover:text-orange-600 px-3 py-2">Special</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 px-3 py-2">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}