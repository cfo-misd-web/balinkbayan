import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';


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
                <div className="font-extrabold min-w-[400px] text-center text-[80px] max-lg:text-4xl text-white drop-shadow-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    About Us
                    <div className='flex flex-col items-center justify-center mt-4 gap-y-5'>
                        <Separator className='w-full data-[orientation=horizontal]:h-[5px] rounded-full bg-green-700' />
                        <Separator className='data-[orientation=horizontal]:w-3/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-[#F4A03A]' />
                        <Separator className='data-[orientation=horizontal]:w-2/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-white' />
                    </div>

                </div>
            </motion.div>



        </section>
    );
};

export default AboutHead;