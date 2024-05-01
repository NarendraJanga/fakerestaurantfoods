import React, { useState } from 'react';
import { data } from '../backend-data/backend-data';

const Fooditems = () => {
  const [foods, setFoods] = useState(data);
  const [filterApplied, setFilterApplied] = useState(false);

  // Filter Type
  const filterType = (category) => {
    const filteredData = data.filter((item) => item.category === category);
    setFoods(filteredData);
    setFilterApplied(true);
  };

  // Filter Price
  const filterPrice = (price) => {
    const [min, max] = price.split('-').map(parseFloat);
    const filteredData = data.filter((item) => item.priceInRupees >= min && item.priceInRupees <= max);
    setFoods(filteredData);
    setFilterApplied(true);
  };

  // Reset Filters
  const resetFilters = () => {
    setFoods(data);
    setFilterApplied(false);
  };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-8'>
        Top Rated Menu Items
      </h1>
      <p className='text-center text-blue-600 font-bold mb-4'>
        {filterApplied ? 'Filtered Results' : 'All Items'}
      </p>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mb-8'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
          <div className='flex flex-wrap'>
            <button onClick={() => resetFilters()} className='filter-btn bg-blue-500 hover:bg-blue-600'>All</button>
            <button onClick={() => filterType('burger')} className='filter-btn bg-red-500 hover:bg-red-600'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='filter-btn bg-green-500 hover:bg-green-600'>Pizza</button>
            <button onClick={() => filterType('salad')} className='filter-btn bg-yellow-500 hover:bg-yellow-600'>Salads</button>
            <button onClick={() => filterType('chicken')} className='filter-btn bg-purple-500 hover:bg-purple-600'>Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex'>
            {['10-100', '100-350', '350-700', '700-1200'].map((price, index) => (
              <button key={index} onClick={() => filterPrice(price)} className='filter-btn'>{price}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {foods.length === 0 ? (
          <p className='text-center font-bold text-red-600'>No items match the selected filters.</p>
        ) : (
          foods.map((item, index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-48 object-cover rounded-t-lg' />
              <div className='flex justify-between px-4 py-2'>
                <p className='font-bold'>{item.name}</p>
                <div>
                  <p className='font-bold'>{item.starRating}</p>
                  <span className='bg-orange-500 text-white px-2 py-1 rounded-full'>
                    {item.priceInRupees} ₹
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fooditems;
