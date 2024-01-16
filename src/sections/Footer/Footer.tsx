import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zda_dark from "/zerodayanubis_dark.svg";
import zda_light from "/zerodayanubis_light.svg";

const Footer = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      <span className="z-40 text-sm font-light font-outfit fixed left-0 bottom-0 flex w-full items-center justify-center border-b border-gray-200 rounded-md bg-gradient-to-b from-zdaBlue-500/[0.02] p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaBlue-600/[0.02] lg:flex  text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        <a
          className="inline-flex items-center cursor-pointer"
          href="https://www.zerodayanubis.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <img
            src={theme === "dark" ? zda_dark : zda_light}
            alt="ZDAWorks Z"
            className="ml-[2px] pointer-events-none select-none"
            width={243}
            height={40}
          />
        </a>
      </span>
    </>
  );
};

export default Footer;
