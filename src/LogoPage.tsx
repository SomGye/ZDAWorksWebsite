import * as React from "react";
import { leftArrowIcon } from "./icons";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./states/ThemeAtom";

const LogoPage = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center">
        <span className="inline-flex m-4 font-semibold text-xl text-gray-300">
          TODO{" "}
          <div className="mx-2 border-l-2 border-gray-300/25 border-opacity-70" />{" "}
          ZDAWorks Logo Page
        </span>
        {/* TODO - do 4 vers of ZDAWorks logo, each with shadows going topleft to btmright */}
        {/* -- Colors: current theme color (b/w), ZDA Blue, ZDA Redpink, ZDA Red */}
        {/* -- Need to see if I can take an existing svg and just tweak the fill color from here */}
        <button
          className="inline-flex items-center pt-[6px] pb-[6px] pl-4 pr-4 rounded-md bg-zdaRed-600 text-[15px] text-gray-200 font-medium transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-zdaRedpink-800"
          onClick={() => window.location.replace("/")}
        >
          <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            {leftArrowIcon}
          </span>{" "}
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LogoPage;
