"use client";
import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";

const InstallCLI = () => {
  return (
    <div className="text-[24px] xl:text-[1.5vw] md:py-[10rem] py-[20rem]">
      <div className="relative py-[8em] overflow-hidden">
        <div className="absolute h-full aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(187,23,23,0.3)_0%,rgba(31,9,9,0)_100%)] blur-md scale-x-[300%]"></div>
        <div className="flex flex-col justify-center relative z-[1] w-[80rem] mx-auto">
          <p className="text-center text-[3em] font-bold mb-1 max-md:text-[2em]">
            Install the CLI
          </p>
          <p className="text-center tracking-[0.4em] max-md:tracking-[0.2em] mb-[1.5em] max-md:text-[0.8em]">
            Exclusively built on SEI
          </p>
          <StarBorder as="div" className="w-fit mx-auto" speed="3s">
            <div
              onClick={() => {
                console.log(123);
              }}
              className="flex items-center gap-1 group cursor-pointer"
            >
              <p className="font-bold text-[0.6em]">Coming soon</p>
            </div>
          </StarBorder>
        </div>
      </div>
    </div>
  );
};

export default InstallCLI;
