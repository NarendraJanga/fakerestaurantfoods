import React from 'react';
import { categories } from '../backend-data/backend-data';

const Category = () => {
  console.log(categories);
  return (
    <div className=' max-w[1600px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-8'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex flex-col justify-center items-center'
          >
            <img src={item.image} alt={item.name} className='w-20 h-20 mb-4' />
            <h2 className='font-bold text-xl'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
