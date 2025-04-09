import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const AboutHead = () => {
    const images = [
        '/img-assets/img-1.jpg',
        '/img-assets/img-2.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative">

            <motion.div
                className="w-full h-[700px] max-lg:h-[5d00px] relative bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('${images[currentImageIndex]}')`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            <h2 className='max-lg:hidden font-[1000] absolute text-start top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-[50%] text-white text-[80px] drop-shadow-lg max-lg:w-[90%] max-lg:mx-auto'>
                About Us
            </h2>

            <div className='hidden max-lg:block absolute text-start bottom-2/3 translate-y-28 left-1/12 font-extrabold  text-[45px] text-white gap-y-1.5'>
                About Us
            </div>

        </section>
    );
};

export default AboutHead;