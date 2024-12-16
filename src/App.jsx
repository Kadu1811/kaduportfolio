import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { FloatButton } from "antd";
import { AboutMe } from "./components/AboutMe";
import { AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  return (
    <div className="antialised overflow-x-hidden text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <FloatButton.BackTop
          className="bg-black-300"
          icon={<AiOutlineArrowUp />}
        />
      </div>
    </div>
  );
};

export default App;
