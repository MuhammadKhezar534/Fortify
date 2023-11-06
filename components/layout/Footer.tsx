import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithubAlt, FaDiscord, FaBook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" pt-8  flex-wrap  gap-4 py-6 container flex items-center justify-center md:justify-between">
      <Link href={"/"}>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Image className=" max-w-[80%]" src={logo} alt="logo" />
          <div style={{ color: "white" }}>2023 | FortiFi LLC</div>
        </div>
      </Link>
      <div className=" flex-wrap justify-center md:justify-normal flex items-center gap-4">
        <p className=" font-light text-t-17">© Copyright 2023</p>
        <ul className=" flex items-center gap-2">
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href="https://x.com/fortifi_"
              target="_blank"
            >
              <FaTwitter className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href="https://fortifi.substack.com"
              target="_blank"
            >
              <SiSubstack className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href="https://github.com/0xFortiFi/"
              target="_blank"
            >
              <FaGithubAlt className="text-xl text-white" />
            </Link>
          </li>

          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href="https://discord.gg/dYVvDfQ3yM"
              target="_blank"
            >
              <FaDiscord className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href="https://fortifi.gitbook.io"
              target="_blank"
            >
              <FaBook className="text-xl text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
