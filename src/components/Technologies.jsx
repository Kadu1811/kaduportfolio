import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        Technologies
      </motion.h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiTypescript className="text-6xl text-cyan-900" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <TiHtml5 className="text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaCss3Alt className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <RiTailwindCssFill className="text-7xl text-cyan-700" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiVite odeJs className="text-6xl text-yellow-500" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(1)}
        >
          <SiNextdotjs odeJs className="text-6xl text-gray-200" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
