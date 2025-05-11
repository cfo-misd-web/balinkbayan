import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';


const ContactHead = () => {


    return (
        <section className="relative">

            <motion.div
                className="w-full h-[700px] max-lg:h-[500px] relative bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/img-assets/img-1.jpg')`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="font-extrabold text-center text-[80px] max-lg:text-4xl text-white drop-shadow-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Downloads
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

export default ContactHead;