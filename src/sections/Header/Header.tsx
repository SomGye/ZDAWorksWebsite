import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zdaWorks_letterDark from "/zdaworks_letter_dark.svg";
import zdaWorks_letterLight from "/zdaworks_letter_light.svg";
import ThemeToggle from "../../ThemeToggle";

const Header = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      <span className="z-10 fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-200 rounded-md bg-gradient-to-t from-zdaBlue-500/5 p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaBlue-600/5 lg:flex  text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        <img
          src={theme === "dark" ? zdaWorks_letterDark : zdaWorks_letterLight}
          alt="ZDAWorks Z"
          className="pointer-events-none select-none"
          width={36}
          height={36}
        />
        <div className="hidden xxs:block">ZDA Works</div>
        <div className="cursor-pointer lg:flex lg:static lg:w-auto">
          <ThemeToggle />
        </div>
      </span>
    </>
  );
};

export default Header;
