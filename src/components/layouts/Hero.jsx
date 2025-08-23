import React from 'react'
import mainImage from "../../assets/main image.jpg";
import secondImage from '../../assets/imgae second.jpg'
import { Link } from 'react-router-dom';

function Hero() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = [
        { src: mainImage, alt: "Group" },
        { src: secondImage, alt: "Second" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = React.useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className='md:w-screen md:px-2 px-2 md:h-[350px] relative flex items-center'>
            <button
                onClick={handlePrev}
                className="absolute left-2 z-10  p-2 shadow hover:bg-white"
                aria-label="Previous"
            >
                
            </button>
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className='h-[160px] w-[400px] md:w-[100%] md:h-full object-cover z-0 rounded-2xl transition-all duration-500'
            />
            <button
                onClick={handleNext}
                className="absolute right-2 z-10  p-2 shadow hover:bg-white"
                aria-label="Next"
            >
                
            </button>
        </section>
    )
}

export default Hero
