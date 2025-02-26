import Intro from "@/views/home/Intro";
import Features from "@/views/home/Features";
import BuildWithKai from "@/views/home/BuildWithKai";
import InstallCLI from "@/views/home/InstallCLI";
import KaiRegist from "@/views/home/KaiRegist";
import Partners from "@/views/home/Partners";

export default function Home() {
  return (
    <div className="flex flex-col max-md:mt-[150px]">
      <Intro />
      <Features />
      <BuildWithKai />
      <InstallCLI />
      <KaiRegist />
      <Partners />
    </div>
  );
}
