"use client";

import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import kaiImage from "@/assets/kai-image.svg";
import Image from "next/image";
import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText";
import { useState } from "react";
import Link from "next/link";

const features = [
  {
    tag: "Automatic Indexer",
    title: "Tsuchi",
    description:
      "Tsuchi automatically indexes your game state and exposes GraphQL and gRPC APIs for your world to consume. No longer do you need to write boilerplate code to manage your game state.",
    href: "/",
  },
  {
    tag: "High-Performance Gaming Sequencer",
    title: "Mizu",
    description:
      "Mizu is a high-performance sequencer for onchain game development. Spin up a local sequencer with one command and deploy your world with another.",
    href: "/",
  },
  {
    tag: "Rust Libraries",
    title: "Kaze",
    description:
      "Kaze exposes a range of pre-built components and libraries to help you build your game faster. Kaze is built on top of KAI core.",
    href: "/",
  },
  {
    tag: "CLI Tool",
    title: "Sora",
    description:
      "A command line interface tool to help you manage your games. Sora helps you create new games, manage your game state, and deploy your games to networks",
    href: "/",
  },
];

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-[80rem] mx-auto md:h-screen max-md:py-[20rem] flex items-center text-[24px] xl:text-[1.5vw]">
      <div className="relative bg-dark-primary w-full border border-primary/20 rounded-xl flex max-md:flex-col-reverse gap-[2em] justify-between p-8 overflow-hidden">
        <div className="absolute aspect-square left-1/2 top-1/2 -translate-x-1/2 h-full rounded-full bg-[radial-gradient(circle,rgba(187,23,23,0.7)_0%,rgba(31,9,9,1)_50%)] scale-x-[600%] blur-sm"></div>
        <div className="flex flex-col relative z-[1]">
          <div className="flex flex-col pb-14">
            <div className="bg-secondary py-[4px] px-4 rounded-full flex items-center gap-3 w-fit mb-8">
              <div className="bg-primary rounded-sm flex items-center h-[1em] w-[1em] max-md:h-[0.6em] max-md:w-[0.6em]">
                <IoIosArrowBack className="-mr-2 text-[24px] max-md:text-[0.6em]" />
                <IoIosArrowForward className="text-[24px] max-md:text-[0.6em]" />
              </div>
              <DecryptedText
                key={active}
                parentClassName="max-md:hidden"
                className="text-primary font-bold"
                encryptedClassName="text-primary font-bold"
                text={features[active].tag}
                animateOn="view"
                revealDirection="start"
                sequential={true}
              />
              <p className="text-[0.6em] md:hidden text-primary font-bold">
                {features[active].tag}
              </p>
            </div>

            <p className="font-novaCut text-[3em] max-md:text-[2em] font-bold mb-5">
              {features[active].title}
            </p>

            <p className="md:w-2/3 text-[0.8em]">
              {features[active].description}
            </p>
          </div>

          <StarBorder as="button" classContainer="w-fit" speed="5s">
            <Link
              href={features[active].href}
              className="flex items-center gap-1 group"
            >
              <p className="font-bold text-[0.6em]">Document</p>
              <IoIosArrowForward className="group-hover:translate-x-1 transition-all" />
            </Link>
          </StarBorder>
        </div>
        <div className="flex justify-around md:flex-col gap-6 relative z-[1]">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`h-[2em] aspect-square rounded-lg grid place-items-center p-1 cursor-pointer ${
                  index == active && "bg-primary"
                }`}
              >
                <Image src={kaiImage} alt="kai image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
