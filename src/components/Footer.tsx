import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FreshBite</h3>
            <p className="text-gray-400">
              Delivering fresh and delicious meals to your doorstep since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
              <li><a href="#special" className="text-gray-400 hover:text-white">Special</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street</li>
              <li>Cuisine City, CC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@freshbite.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 FreshBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}