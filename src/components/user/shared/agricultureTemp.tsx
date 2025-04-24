import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';


const AgricultureTemp = ({text, label, img_url}:{text?:string, label?:string, img_url:string}) => {


    return (
        <section className="relative">

            <motion.div
                className="w-full h-[700px] max-lg:h-[500px] relative bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${img_url})`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            <div className='flex w-full items-center text-white absolute bottom-5 flex-col mb-5'>
                <p className='tracking-wide'>{text}</p>
                <Separator className='flex justify-center max-w-32 h-[2px] bg-white my-2' />
                <h2 className='text-6xl font-bold'>
                    {label}
                </h2>
            </div>
        </section>
    );
};
export default AgricultureTemp;