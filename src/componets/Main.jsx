import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles for the Carousel
import { Carousel } from 'react-responsive-carousel';
import chiken1 from '../assets/chiken1.jpeg';
import chiken2 from '../assets/chiken2.jpeg';
import chiken3 from '../assets/chiken3.jpeg';
import pizza1 from '../assets/pizza1.jpeg';
import pizza2 from '../assets/pizza2.jpeg';
import pizza3 from '../assets/pizza3.jpeg';
import burger1 from '../assets/burger1.jpeg';
import burger2 from '../assets/burger2.jpeg';
import burger3 from '../assets/burger3.jpeg';
import salad1 from '../assets/salad1.jpeg';
import salad2 from '../assets/salad2.jpeg';
import salad3 from '../assets/salad3.jpeg';

const Main = () => {
    const images = [
        chiken1,
        chiken2,
        chiken3,
        pizza1,
        pizza2,
        pizza3,
        burger1,
        burger2,
        burger3,
        salad1,
        salad2,
        salad3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Adjust interval time as needed

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='max-w-[1600px] mx-auto p-4'>
            <div className='max-h-[1200px] relative'>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000} // Adjust interval time as needed
                    transitionTime={1500} // Adjust transition time for smooth effect
                    selectedItem={currentIndex}
                    onChange={index => setCurrentIndex(index)}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img className='w-full h-full object-fit' src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
                <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white'>The <span className='text-orange-500'>Quality</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white'> <span className='text-orange-500'>Tastey||Foods</span> are Delivered</h1>
                </div>
            </div>
        </div>
    );
}

export default Main;