import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        Hello World!
      </motion.h2>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          className="w-full max-w-4xl text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-2 text-lg leading-relaxed tracking-tighter text-stone-400">
            TEXTO DE CIMA escrevendoais asdkasndjasnd alksdjasda lkaskljasdlk
            jla sdjaldjalksjdlkasjdakls akjdlaksjdlaksdjlaks
            alksdjalskdjalksdaslkdj aldlaksjdlaksjd akdjasldjaskldja
            alkjsdlkasjdklasdj
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl leading-relaxed tracking-tighter">
            TEXTO DEBAIXO escrevendoais asdkasndjasnd alksdjasda lkaskljasdlk
            jla sdjaldjalksjdlkasjdakls akjdlaksjdlaksdjlaks
            alksdjalskdjalksdaslkdj aldlaksjdlaksjd akdjasldjaskldja
            alkjsdlkasjdklasdj
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export { AboutMe };
