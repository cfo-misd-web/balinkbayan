import { motion } from "framer-motion";

const HeaderTemp = ({
  label,
  img_url,
}: {
  label?: string;
  img_url: string;
}) => {
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
        transition={{ duration: 1, ease: "easeInOut" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <h2 className="max-lg:hidden font-[1000] absolute text-start top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-[50%] text-white text-[80px] drop-shadow-lg max-lg:w-[90%] max-lg:mx-auto">
        {label}
      </h2>

      <div className="hidden max-lg:block absolute text-start bottom-2/3 translate-y-28 left-1/12 font-extrabold  text-[45px] text-white gap-y-1.5">
        {label}
      </div>
    </section>
  );
};
export default HeaderTemp;
