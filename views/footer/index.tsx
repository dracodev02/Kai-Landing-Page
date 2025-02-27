import Image from "next/image";
import Link from "next/link";
import kaiLogo from "@/assets/kai-logo.svg";
import { FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-[24px] xl:text-[1.5vw] max-md:mt-[10rem]">
      <div className="mx-auto w-[80rem] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-[1em] md:mb-0">
            <Image src={kaiLogo} alt="kai-logo" className="w-[5em]" />
          </div>
          <div className="grid grid-cols-2 gap-[3em] max-md:gap-[1em] sm:grid-cols-3">
            <div>
              <h2 className="font-bold uppercase text-[1em]">KAI</h2>
              <ul>
                <li>
                  <Link
                    href="https://kai-engine.gitbook.io/kai-engine"
                    className="hover:underline text-[0.8em] text-white/75"
                    target="_blank"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold uppercase text-[1em]">Ecosystem</h2>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Tsuchi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Mizu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Kaze
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    Sora
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold uppercase text-[1em]">Partners</h2>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    SEI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-[0.8em] text-white/75"
                  >
                    SunnySide_Acres
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between pb-[0.5em]">
          <span className="text-sm text-white/75 sm:text-center max-md:text-[0.5em]">
            © 2025{" "}
            <Link href="#" className="hover:underline">
              KAI
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-white/75 ms-5">
              <FaXTwitter className="text-[1em]" />

              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="text-white/75 ms-5">
              <FaGithub className="text-[1em]" />

              <span className="sr-only">GitHub account</span>
            </Link>
            <Link href="#" className="text-white/75 ms-5">
              <FaTelegram className="text-[1em] " />
              <span className="sr-only">Telegram account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
