import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zda_dark from "/zerodayanubis_dark.svg";
import zda_light from "/zerodayanubis_light.svg";
import { altLongTextLogo } from "../../AltText";

const Footer = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      <span className="z-40 max-h-[18vh] text-sm 3xl:text-lg 4xl:text-xl 4k:text-2xl font-light font-outfit fixed left-0 bottom-0 flex w-full items-center justify-center border-b border-gray-200 rounded-md bg-gradient-to-b from-zdaBlue-500/[0.02] p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaBlue-600/[0.02] lg:flex text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        <a
          className="inline-flex items-center cursor-pointer"
          href="https://www.zerodayanubis.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <img
            src={theme === "dark" ? zda_dark : zda_light}
            alt={altLongTextLogo}
            className="ml-[2px] max-w-[50vw] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
            width={219}
            height={36}
          />
        </a>
      </span>
    </>
  );
};

export default Footer;
