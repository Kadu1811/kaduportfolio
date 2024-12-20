import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div>
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        About me
      </motion.h2>

      <div className="flex flex-col justify-center gap-6 lg:flex-row">
        <motion.div
          className="w-full p-2 text-left lg:text-right"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-2 text-2xl font-extrabold text-stone-100">
            Who am i?
          </p>

          <div className="text-lg leading-relaxed tracking-tighter">
            <p className="mb-2">
              I&apos;m a 23-year-old software engineer based in Manaus, Brazil,
              with a strong focus on front-end development, currently pursuing a
              bachelor&apos;s degree in Computer Science at FMU University.
            </p>

            <p className="mb-2">
              I have +3 years experience in software development, working with
              technologies such as React, JavaScript, TypeScript, Styled
              Components, Tailwind CSS, NextJs, Vite.
            </p>

            <p className="mb-2">
              Althought most of my experience lies on web software development i
              have interest and studying experience in mobile development tools
              as well, such as React Native, Expo, Android Emulators and Kotlin.
            </p>

            <p className="mb-2">
              I am looking for an opportunity to use my skills to build inovate
              projects, grow my skills and learn from others with more
              experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full  p-2 text-right lg:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-2 text-2xl font-extrabold text-stone-100">
            What do i like?
          </p>

          <div className="text-lg leading-relaxed tracking-tighter">
            <p className="mb-2">
              I started my journey in tech because I&apos;ve always loved
              creating things. The idea of building something from scratch that
              others can use and enjoy fascinated me, and technology gave me the
              perfect tools to bring those ideas to life.
            </p>

            <p className="mb-2">
              While you&apos;re here you should know I&apos;m a nerd who likes
              fantasy books, terror movies and indie music. My currently
              obsessions are Dune universe by Frank Herbert, The Substance by
              Coralie Fargeat and Lana Del Rey.
            </p>

            <p className="mb-2">
              Now days I exercise by having swimming classes and trying to be a
              gymrat but the sport I have most interest in tryout is tennis
              ball, I got to be honest my interest came after I watched
              Challengers.
            </p>

            <p className="mb-2">
              One more thing about me, I love gaming too! Let&apos;s build
              amazing projects together and after the realease play some
              videogames!!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { AboutMe };
