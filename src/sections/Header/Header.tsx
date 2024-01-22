import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zdaWorks_letterDark from "/zdaworks_letter_dark.svg";
import zdaWorks_letterLight from "/zdaworks_letter_light.svg";
import ThemeMenu from "../../ThemeMenu";
import { logoAtom } from "../../states/LogoAtom";

const Header = () => {
  const theme = useRecoilValue(themeAtom);
  const [, setLogoPage] = useRecoilState(logoAtom);
  return (
    <>
      <span className="z-40 max-h-[18vh] fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-200 rounded-md bg-gradient-to-t from-zdaBlue-500/5 p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaBlue-600/5 lg:flex text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        <img
          src={theme === "dark" ? zdaWorks_letterDark : zdaWorks_letterLight}
          alt="ZDAWorks Z Logo"
          title="Click me to see ZDAWorks logos"
          className="cursor-pointer pointer-events-auto select-none transition ease-out duration-300 hover:drop-shadow-z-logo-hover-light dark:hover:drop-shadow-z-logo-hover-dark 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] 4k:w-[64px] 4k:h-[64px]"
          width={36}
          height={36}
          onClick={() => window.location.replace("/logo")}
        />
        <div className="hidden xxs:block 3xl:text-xl 4xl:text-2xl 4k:text-3xl">
          ZDA Works
        </div>
        <div className="cursor-pointer lg:flex lg:static lg:w-auto">
          <ThemeMenu />
        </div>
      </span>
    </>
  );
};

export default Header;
