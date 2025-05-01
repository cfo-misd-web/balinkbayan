import { motion } from 'framer-motion';


const Image = ({ img_url }: { img_url: string }) => {
    return (
        // Use <figure> for semantic image container instead of <section>
        <figure>
            <motion.img
                className=''
                src={img_url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                alt="Image"
            />
        </figure>
    );
};
export default Image;