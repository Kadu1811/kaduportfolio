import { FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiReactjsLine } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
// import { TbBrandNextjs } from "react-icons/tb"
import { TiHtml5 } from "react-icons/ti"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>

            {/* <div className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </div> */}

            <div className="p-4">
                <SiTypescript className="text-6xl text-cyan-900" />
            </div>

            <div className="p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400" />
            </div>

            <div className="p-4">
                <TiHtml5 className="text-7xl text-orange-700" />
            </div>

            <div className="p-4">
                <FaCss3Alt className="text-6xl text-blue-500" />
            </div>

            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
        </div>
    </div>
  )
}

export default Technologies