import * as React from "react";
import { leftArrowMdIcon } from "./icons";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./states/ThemeAtom";
import zdaWorks_dark from "/zdaworks_dark.svg";
import zdaWorks_light from "/zdaworks_light.svg";
import zdaWorks_blue from "/zdaworks_fractalblue.svg";
import zdaWorks_redpink from "/zdaworks_redpink.svg";
import zdaWorks_zdared from "/zdaworks_zdared.svg";
import zda_dark from "/zerodayanubis_dark.svg";
import zda_light from "/zerodayanubis_light.svg";

const LogoPage = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center flex-col md:flex-row">
        <div className="flex flex-col items-center text-md sm:text-lg 3xl:text-2xl 4xl:text-3xl 4k:text-4xl font-light font-outfit text-zdaText-dark dark:text-zdaText-light pointer-events-none select-none">
          Logos designed in InkScape
        </div>
        <div className="flex flex-col items-center justify-evenly gap-5 lg:gap-8 m-10 lg:m-14">
          <img
            className="relative md:scale-[1.1] lg:scale-[1.2] 3xl:w-[368px] 3xl:h-[84px] drop-shadow-logo-light dark:drop-shadow-logo-dark select-none"
            src={theme === "dark" ? zdaWorks_dark : zdaWorks_light}
            alt="ZDAWorks Logo"
            width={294}
            height={67}
          />
          <div className="w-full border-t-2 border-zdaBlue-450/25 md:scale-[1.1] lg:scale-[1.2]" />
          <img
            className="relative md:scale-[1.1] lg:scale-[1.2] 3xl:w-[368px] 3xl:h-[84px] drop-shadow-logo-blue dark:drop-shadow-logo-blue select-none"
            src={zdaWorks_blue}
            alt="ZDAWorks Logo in Blue"
            width={294}
            height={67}
          />
          <div className="w-full border-t-2 border-zdaBlue-450/25 md:scale-[1.1] lg:scale-[1.2]" />
          <button
            className="inline-flex items-center justify-between w-full pt-[6px] pb-[6px] pl-4 pr-4  md:scale-[1.1] lg:scale-[1.2] rounded-md bg-gradient-to-l from-zdaRed-600 to-zdaBlue-500/95 text-[15px] 3xl:text-lg 4xl:text-xl 4k:text-2xl text-gray-200 font-medium tracking-wider transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-gradient-to-l hover:from-zdaRed-600/80 hover:to-zdaBlue-500/80 active:from-zdaRed-700/90 active:to-zdaBlue-600/90 select-none"
            onClick={() => window.location.replace("/")}
          >
            <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              {leftArrowMdIcon}
            </span>{" "}
            Go &nbsp;Back
          </button>
          <div className="w-full border-t-2 border-zdaBlue-450/25 md:scale-[1.1] lg:scale-[1.2]" />
          <img
            className="relative md:scale-[1.1] lg:scale-[1.2] 3xl:w-[368px] 3xl:h-[84px] drop-shadow-logo-redpink dark:drop-shadow-logo-redpink select-none"
            src={zdaWorks_redpink}
            alt="ZDAWorks Logo in Redpink"
            width={294}
            height={67}
          />
          <div className="w-full border-t-2 border-zdaBlue-450/25 md:scale-[1.1] lg:scale-[1.2]" />
          <img
            className="relative md:scale-[1.1] lg:scale-[1.2] 3xl:w-[368px] 3xl:h-[84px] drop-shadow-logo-red dark:drop-shadow-logo-red select-none"
            src={zdaWorks_zdared}
            alt="ZDAWorks Logo in Red"
            width={294}
            height={67}
          />
        </div>
        <div className="flex items-center text-sm sm:text-base 3xl:text-xl 4xl:text-2xl 4k:text-3xl font-light font-outfit text-zdaText-dark dark:text-zdaText-light pointer-events-none select-none">
          By{" "}
          <img
            src={theme === "dark" ? zda_dark : zda_light}
            alt="ZeroDayAnubis Logo"
            className="ml-[2px] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
            width={219}
            height={36}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
