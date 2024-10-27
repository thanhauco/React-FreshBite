import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Delicious Food</span>
              <span className="block text-orange-600">Delivered Fresh</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl">
              Experience the finest selection of gourmet meals delivered right to your doorstep. Fresh ingredients, amazing taste, and convenient ordering.
            </p>
            <div className="mt-5 sm:mt-8">
              <a href="#menu" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
                View Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <img className="w-full rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured dish" />
          </div>
        </div>
      </div>
    </div>
  );
}