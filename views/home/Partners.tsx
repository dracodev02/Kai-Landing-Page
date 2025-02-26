import seiLogo from "@/assets/sei-logo.svg";
import sunnySideLogo from "@/assets/sunnyside-logo.svg";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="py-[10rem] w-[80rem] mx-auto text-[24px] xl:text-[1.5vw]">
      <p className="text-center text-[1.5em] font-bold mb-[2em] max-md:mb-[1em]">
        Our Partners
      </p>
      <div className="flex items-center justify-center gap-[5em] max-md:gap-[2em]">
        <Image
          src={seiLogo}
          alt="sei-logo"
          className="w-[10em] max-md:w-[5em]"
        />
        <Image
          src={sunnySideLogo}
          alt="sunnyside-logo"
          className="w-[7em] max-md:w-[3.5em]"
        />
      </div>
    </div>
  );
};

export default Partners;
