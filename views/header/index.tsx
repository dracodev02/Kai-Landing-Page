import kaiLogo from "@/assets/kai-logo.svg";
import Image from "next/image";
import { FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";
import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";

const Header = () => {
  return (
    <div className="fixed z-10 w-[80rem] bg-dark-primary left-1/2 -translate-x-1/2 top-[1.5rem] rounded-full text-[24px] xl:text-[1.5vw] border border-primary/20">
      <div className="flex justify-between items-center py-[16px] max-md:py-[8px] px-[36px] max-md:px-[16px]">
        <Image src={kaiLogo} alt="kai logo" />
        <div className="flex items-center gap-6 max-md:hidden">
          <FaXTwitter className="text-[1em]" />

          <FaGithub className="text-[1em]" />

          <FaTelegram className="text-[1em] " />
        </div>
        <StarBorder as="button" className="custom-class" speed="5s">
          <p className="font-bold text-[0.6em]">Docs</p>
        </StarBorder>
      </div>
    </div>
  );
};

export default Header;
