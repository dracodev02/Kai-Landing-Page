import kaiText from "@/assets/kai-text.svg";
import Magnet from "@/blocks/Animations/Magnet/Magnet";
import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Intro = () => {
  return (
    <div className="w-[80rem] mx-auto md:h-screen max-md:py-[10rem] flex items-center justify-center text-[24px] xl:text-[1.5vw] flex-col gap-8">
      <Image src={kaiText} alt="kai text" className="w-[10em] max-md:w-[7em]" />
      <p className="text-center text-[1em] font-novaCut max-w-[50em]">
        an open-source framework that provides a comprehensive toolkit to
        simplified building onchain games and autonomous worlds.
      </p>
      <div className="flex items-center gap-3">
        <Magnet
          padding={50}
          disabled={false}
          magnetStrength={20}
          innerClassName="flex"
        >
          <StarBorder as="button" className="" speed="5s">
            <p className="font-bold text-[0.6em]">Toolchain</p>
          </StarBorder>
        </Magnet>
        <Magnet
          padding={50}
          disabled={false}
          magnetStrength={20}
          innerClassName="flex"
        >
          <StarBorder
            as="a"
            href="https://kai-engine.gitbook.io/kai-engine"
            target="_blank"
            className="px-[24px]"
            speed="5s"
            variant="outline"
          >
            <div className="flex items-center gap-1 group">
              <p className="font-bold text-[0.6em]">Document</p>
              <IoIosArrowForward className="group-hover:translate-x-1 transition-all text-[0.6em]" />
            </div>
          </StarBorder>
        </Magnet>
      </div>
    </div>
  );
};

export default Intro;
