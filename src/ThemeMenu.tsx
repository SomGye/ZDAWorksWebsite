import * as React from "react";
import { themeAtom } from "./states/ThemeAtom";
import { useRecoilState } from "recoil";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  darkIcon,
  darkMenuIcon,
  lightIcon,
  lightMenuIcon,
  sysMenuIcon,
} from "./icons";

const ThemeMenu = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState("dark"); // dark/light/system

  const changeTheme = (newTheme: string) => {
    if (newTheme === "dark") {
      // Set prefs
      localStorage.setItem("theme", "dark");
      // Set body style
      document.documentElement.classList.add("dark");
      console.log("Theme set to dark from menu");
      // Set vars
      setTheme("dark");
      setOption("dark");
    } else if (newTheme === "light") {
      // Set prefs
      localStorage.setItem("theme", "light");
      // Set body style
      document.documentElement.classList.remove("dark");
      console.log("Theme set to light from menu");
      // Set vars
      setTheme("light");
      setOption("light");
    } else {
      // Set prefs
      localStorage.setItem("theme", "system");
      // Set body style and vars
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      console.log("Theme set to system from menu");
      setOption("system");
    }
    setOpen(false);
  };

  const detectColorScheme = () => {
    // Get theme preference from user (default: system)
    const storedTheme = localStorage.getItem("theme") || "system";
    // Set theme and option from detected Theme
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else {
      // Set system theme for next time
      localStorage.setItem("theme", "system");
      // Use matchMedia to get system theme
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        setOption("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setOption("light");
        setTheme("light");
      }
    }
  };

  React.useEffect(() => {
    // Detect preferred Color Scheme from user or system
    detectColorScheme();
  }, []);

  React.useEffect(() => {
    // TODO: figure out how to dynamically switch themes when system changes color
    // // INIT
    // if (window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .matches) {
    //     console.log("Dark detected on init");
    //   } else {
    //     console.log("Light detected on init");
    //   }
    //   // ON CHANGE
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener("change", ({ matches }) => {
    //     if (matches) {
    //       console.log("change to dark mode!");
    //     } else {
    //       console.log("change to light mode!");
    //     }
    //   });
    // Check for system option
    if (option === "system") {
      // TODO: Switch to auto mode
      console.log("setting auto mode");
    } else {
      // TODO: Switch off auto mode
      console.log("turning off auto mode");
    }
  }, [option]);

  return (
    <>
      <div className="inline-flex items-center">
        <DropdownMenu.Root open={open}>
          {/* Button Section */}
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-full w-[26px] h-[26px] mr-2 inline-flex items-center justify-center text-zdaBlue-600 dark:text-zdaBlue-500 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard shadow-[0_1px_8px] shadow-slate-400 hover:shadow-slate-400/25 dark:shadow-zdaBlue-500/60 dark:hover:shadow-zdaBlue-500/25 outline outline-1 outline-zdaBlue-500/25 dark:outline-zdaBlue-500/15 hover:bg-zdaBlue-500/25 dark:hover:bg-zdaBlue-400/25 transition ease-out duration-300"
              aria-label="Theme Menu"
              title="Theme Menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {theme === "dark" ? darkIcon : lightIcon}
            </button>
          </DropdownMenu.Trigger>
          {/* Menu Section */}
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="z-40 min-w-[160px] bg-zdaBG-lighterCard dark:bg-zdaBlue-1000 rounded-lg p-[5px] shadow-[0px_2px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:shadow-[1px_1px_38px_-4px_rgba(34,_132,_255,_0.45),_0px_3px_20px_-15px_rgba(34,_132,_255,_0.3)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
              align="start"
              onInteractOutside={() => setOpen(false)}
            >
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-md md:text-sm leading-none text-zdaBlue-600/90 dark:text-zdaBlue-450 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaBlue-600/80 data-[highlighted]:text-zdaBlue-50 dark:data-[highlighted]:bg-zdaBlue-500/80 dark:data-[highlighted]:text-zinc-950"
                onClick={() => changeTheme("dark")}
              >
                <span className="mr-2 mt-[1px]">{darkMenuIcon}</span>
                Dark
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-md md:text-sm leading-none text-zdaBlue-600/90 dark:text-zdaBlue-450 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaBlue-600/80 data-[highlighted]:text-zdaBlue-50 dark:data-[highlighted]:bg-zdaBlue-500/80 dark:data-[highlighted]:text-zinc-950"
                onClick={() => changeTheme("light")}
              >
                <span className="mr-2 mt-[1px]">{lightMenuIcon}</span>
                Light
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-[1px] m-1 bg-zdaBlue-600/20 dark:bg-zdaBlue-400/20" />
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-md md:text-sm leading-none text-zdaBlue-600/90 dark:text-zdaBlue-450 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaBlue-600/80 data-[highlighted]:text-zdaBlue-50 dark:data-[highlighted]:bg-zdaBlue-500/80 dark:data-[highlighted]:text-zinc-950"
                onClick={() => changeTheme("system")}
              >
                <span className="mr-2 mt-[1px]">{sysMenuIcon}</span>
                System
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-zdaBG-lighterCard dark:fill-zdaBlue-1000" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
};

export default ThemeMenu;
