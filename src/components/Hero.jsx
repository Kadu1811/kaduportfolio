import profilePic from "../assets/kadu-profile-cut.webp";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:pb-40">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Karlos Plentis"
              className="rounded-3xl border border-stone-900"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="flex w-full items-center lg:w-1/2">
          <motion.div
            className="mt-10 flex w-full flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={childVariants}
            >
              Karlos Plentis
            </motion.h2>

            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text pb-6 text-3xl tracking-tight text-transparent"
              variants={childVariants}
            >
              Front-End Developer
            </motion.span>

            <motion.a
              href="/kaducurriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={childVariants}
              download
              className="mb-10 rounded-full bg-white p-4 text-sm text-stone-800"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
