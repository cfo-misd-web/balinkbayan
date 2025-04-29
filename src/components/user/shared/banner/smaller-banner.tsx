import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
type SmallerBannerProps = {
    label?:string,
    img_url?:string,
    className?:string,
    textClass?:string,
    divClass?:string
}

const SmallerBanner = ({label, img_url, className, textClass, divClass}: SmallerBannerProps) => {
    return (
        <section className="relative overflow-hidden">
            <motion.div
                className={cn("w-full h-[150px] relative bg-cover bg-center", className)}
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${img_url})`,
                    filter: 'blur(2px) brightness(0.8)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
            </motion.div>

            <div className={cn('flex w-full justify-center text-center items-center text-white absolute bottom-0', divClass)}>
                <h2 className={cn('text-9xl font-black', textClass)}>
                    {label}
                </h2>
            </div>
        </section>
    );
};
export default SmallerBanner;