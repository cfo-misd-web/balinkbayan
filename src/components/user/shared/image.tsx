import { motion } from 'framer-motion';


const Image = ({img_url}:{img_url:string}) => {
    return (
        <section>
            <motion.img
                className=''
                src={img_url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
            </motion.img>
        </section>
    );
};
export default Image;