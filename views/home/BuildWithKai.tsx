import kaiLogoLine from "@/assets/kai-logo-line.svg";
import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const BuildWithKai = () => {
  return (
    <div className="relative w-[80rem] mx-auto justify-between flex text-[24px] xl:text-[1.5vw] md:h-screen max-md:py-[20rem]">
      <Image
        src={kaiLogoLine}
        alt="kai logo line"
        className="w-[30%] h-fit sticky top-1/3 max-md:hidden"
      />
      <div className="flex flex-col md:w-[50%] justify-around max-md:gap-[4em]">
        <div className="flex flex-col">
          <p className="text-[1.5em] font-bold mb-[0.8em]">
            Build with <span className="text-primary">KAI</span>
          </p>
          <p className="text-[0.8em] mb-[4em] max-md:mb-[2em]">
            Ship onchain games faster by focusing on what matters: novel new
            game mechanics and distribution models enabled by blockchains. KAI
            provides a comprehensive toolchain for developing provable games,
            applications and worlds.
          </p>
          <StarBorder
            as="a"
            classContainer="w-fit"
            className="flex items-center gap-1 group"
            speed="5s"
            target="_blank"
            href="https://kai-engine.gitbook.io/kai-engine"
          >
            <p className="font-bold text-[0.6em]">Document</p>
            <IoIosArrowForward className="group-hover:translate-x-1 transition-all text-[0.6em]" />
          </StarBorder>
        </div>
        <div className="flex flex-col">
          <p className="text-[1.5em] font-bold mb-[0.8em]">
            Play with <span className="text-primary">KALLET</span>
          </p>
          <p className="text-[0.8em] mb-[4em] max-md:mb-[2em]">
            Providing seamless player onboarding with self-custodial embedded
            wallets with Passkeys, Session Tokens, Paymaster and more.
            <br /> <br />
            Start playing games in seconds!
          </p>
          <StarBorder
            as="a"
            classContainer="w-fit"
            className="flex items-center gap-1 group"
            speed="5s"
            href="https://kai-engine.gitbook.io/kai-engine"
            target="_blank"
          >
            <p className="font-bold text-[0.6em]">Document</p>
            <IoIosArrowForward className="group-hover:translate-x-1 transition-all text-[0.6em]" />
          </StarBorder>
        </div>
      </div>
    </div>
  );
};

export default BuildWithKai;
