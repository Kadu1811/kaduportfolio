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
        About me
      </motion.h2>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          className="w-full max-w-4xl text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-2 text-2xl font-extrabold text-stone-100">
            Who am i?
          </p>

          <div className="mb-10 text-lg leading-relaxed tracking-tighter ">
            <p className="mb-2">
              I&apos;m a 23-year-old software engineer based in Manaus, Brazil,
              with a strong focus on front-end development.
            </p>

            <p className="mb-2">
              I am currently pursuing a bachelor&apos;s degree in Computer
              Science at FMU University.
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
          className="w-full max-w-4xl text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-2 text-2xl font-extrabold text-stone-100">
            What do i like?
          </p>

          <div className="text-lg leading-relaxed tracking-tighter">
            <p className="mb-2">
              Hello there! 👋 You can call me <strong>Kadu</strong> 😊.
            </p>

            <p className="mb-2">
              I started my career on the technologie area because I always loved
              to play games on the computer, so i thought that working with the
              object I like the most would be very pleasing, and it is as they
              say, when you love what you do doesn&apos;t seem like you&apos;re
              working at all. 😁
            </p>

            <p className="mb-2">
              When it comes to working, I belive my philosophy is that team work
              is essential. Sometimes we have short terms to delivery a feature
              and asking for help when you feel block or direction is what, in
              my opinion, makes a team more efficient. Plus is very nice to work
              in an environment you feel confortable with the co-workers. 👨‍💻
            </p>

            <p className="mb-2">
              While you&apos;re here you should know I&apos;m a nerd who likes
              fantasy books, terror movies and indie music. My currently
              obsessions are Dune universe by Frank Herbert 📚, The Substance by
              Coralie Fargeat 📽️ and Lana Del Rey 🎵❤️.
            </p>

            <p className="mb-2">
              I love exercizing my body too, now days I exercise by having
              swimming classes 🏊‍♂️ and trying to be a gymrat 💪 but the sport i
              have most interest in tryout is tennis ball 🎾, I have to be
              honest my interest came after I watched Chanllengers haha.
            </p>

            <p className="mb-2">
              One more thing about me, I have a soft spot for games so when I
              think of projects I would like to get in, I think I&apos;d love
              the opportunity to work on the development of a baddass game like
              God of War or Cyberpunk (without the bugs lol). 🎮
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { AboutMe };
