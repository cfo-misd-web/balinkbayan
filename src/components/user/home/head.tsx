import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from '@tanstack/react-router';


const HeadSection = () => {
    const images = [
        '/img-assets/homepage/slider-images/Antipolo-City-Data-Gathering-16x9.jpg',
        '/img-assets/homepage/slider-images/Pasig-City-Data-Gathering-4x3.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative">
            {/* Hero Image */}
            <motion.div
                className="w-full h-96 max-lg:h-[1400px] md:h-screen lg:h-screen relative bg-cover bg-center"
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

            <div className='max-lg:hidden font-[1000] absolute text-start top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[75%] text-white text-[45px] drop-shadow-lg max-lg:w-[90%] max-lg:mx-auto'>
                <h2 className='text-center text-wrap'>
                    We aim to reconnect
                    overseas Filipinos
                    with the Philippines.
                </h2>
                <div className='flex flex-col items-center justify-center mt-4 gap-y-5'>
                    <Separator className='max-lg:hidden w-full data-[orientation=horizontal]:h-[5px] rounded-full bg-green-700' />
                    <Separator className='max-lg:hidden data-[orientation=horizontal]:w-3/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-[#F4A03A]' />
                    <Separator className='max-lg:hidden data-[orientation=horizontal]:w-2/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-white' />
                </div>

            </div>


            <div className='hidden max-lg:block absolute text-start bottom-2/3 translate-y-28 left-1/12 font-extrabold  text-[45px] text-white gap-y-1.5'>
                We aim to reconnect <br />
                overseas Filipinos<br />
                with the Philippines.
            </div>


            <div className="flex mx-auto px-4 relative max-lg:max-w-screen max-lg:mt-[-640px] rounded-lg">
                <div className="lg:absolute lg:w-[1100px] lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-row bg-transparent rounded-t-lg shadow-lg z-2 overflow-hidden max-lg:mt-[-640  px] max-lg:w-full">
                    <div className="bg-transparent w-full justify-center max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 flex flex-row">
                        <div className="relative lg:w-1/2 bg-gray-700 h-80 lg:h-auto max-lg:col-span-2 row-span-2 max-lg:order-2">
                            <img
                                src="/img-assets/img-1.jpg"
                                alt="Background image of an event"
                                className="object-cover w-full h-full lg:rounded-l-lg brightness-[50%]"                          
                            />
                            <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col">
                                <h3 className="text-white font-medium text-sm md:text-base">Welcome!</h3>
                                <div className="w-8 md:w-10 lg:w-12 h-0.5 bg-white mb-3 md:mb-4 lg:mb-6"></div>
                                <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                                    The BaLinkBayan Portal offers several features aimed to mainstream migration and development around the
                                    world.
                                </h2>
                            </div>
                        </div>

                        <div className="relative flex flex-row md:flex-row max-lg:col-span-2 w-1/2 max-lg:w-full max-lg:rounded-lg">
                            <div className="bg-teal-700 text-white p-4 md:p-6 lg:p-8 flex-1 shadow-xl">
                                <h3 className="font-medium text-sm md:text-base">Contact</h3>
                                <div className="w-8 md:w-10 lg:w-12 h-0.5 bg-white mb-3 md:mb-4 lg:mb-6"></div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">(+632) 8552-4700 <br className='max-lg:hidden' />loc. 728, 729 and 731</h2>
                                <p className="text-sm md:text-base mb-4 lg:mb-6">pmd@cfo.gov.ph</p>
                                <Link to="/contact" className=" absolute bottom-2.5 border border-white rounded-full p-2 text-sm hover:bg-[#F4A03A] transition-colors">
                                    <ChevronRight size={16} />
                                </Link>
                            </div>

                            <div className="bg-[#F4A03A] p-4 md:p-6 lg:p-8 flex-1">
                                <h3 className="font-medium text-sm md:text-base">Location</h3>
                                <div className="w-8 md:w-10 lg:w-12 h-0.5 bg-white mb-3 md:mb-4 lg:mb-6"></div>
                                <h2 className="font-bold text-sm md:text-base mb-1">20th and 21st Floors</h2>
                                <p className="text-sm md:text-base mb-4 lg:mb-6">
                                    The Upper Class Tower
                                    <br />
                                    Quezon Ave. cor. Scout
                                    <br />
                                    Reyes St., Brgy.
                                    <br />
                                    Paligsahan, Diliman,
                                    <br />
                                    Quezon City 1103
                                    <br />
                                    Metro Manila,
                                    <br />
                                    Philippines
                                </p>
                                <Link to="/contact" className="border absolute bottom-2.5 border-black rounded-full p-2 text-sm hover:bg-teal-700 transition-colors">
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeadSection;