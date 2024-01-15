import * as React from "react";
import { themeAtom } from "./states/ThemeAtom";
import { useRecoilState } from "recoil";
import * as Switch from "@radix-ui/react-switch";

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [checked, setChecked] = React.useState(true);
  const [init, setInit] = React.useState(false);
  const toggleRef = React.useRef(null);

  const toggleTheme = (initToggle: boolean = false) => {
    if (theme === "dark" && initToggle) {
      // Set prefs
      localStorage.setItem("theme", "dark");
      // Set body style
      document.documentElement.classList.add("dark");
      console.log("Theme toggled to dark, on init toggle");
    } else if (theme === "light" && initToggle) {
      // Set prefs
      localStorage.setItem("theme", "light");
      // Set body style
      document.documentElement.classList.remove("dark");
      console.log("Theme toggled to light, on init toggle");
    } else if (theme === "dark" && !initToggle) {
      // Set global variables
      setTheme("light");
      // Set prefs for next visit
      localStorage.setItem("theme", "light");
      // Set body style
      document.documentElement.classList.remove("dark");
      console.log("Theme toggled to light from switch");
    } else if (theme === "light" && !initToggle) {
      // Set global variables
      setTheme("dark");
      // Set prefs for next visit
      localStorage.setItem("theme", "dark");
      // Set body style
      document.documentElement.classList.add("dark");
      console.log("Theme toggled to dark from switch");
    }
  };

  const detectColorScheme = () => {
    let theme = "dark"; // default

    // Local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        theme = "light";
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      // OS theme setting detected as light
      theme = "light";
    }

    // Set initial scheme and prop state from detected Color Scheme
    if (theme === "light") {
      setChecked(false);
    } else {
      setChecked(true);
    }
    console.log("Color scheme detected: " + theme);
    setTheme(theme);
    setInit(true);
  };

  // TODO: fix toggle getting messed up on refresh (also need to ensure only visibly checked when Dark active)
  React.useEffect(() => {
    // Detect preferred Color Scheme from OS
    detectColorScheme();

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
  }, []);

  React.useEffect(() => {
    toggleTheme(!init);
  }, [checked]);

  return (
    <>
      <div className="inline-flex items-center">
        <label
          className="cursor-pointer text-sm leading-none pr-[15px] text-zdaText-darker dark:text-zdaText-lighter select-none"
          htmlFor="theme-toggle"
        >
          {theme === "dark" ? "Dark" : "Light"}
        </label>
        <Switch.Root
          className="w-[36px] h-[18px] bg-slate-500 rounded-full relative shadow-[0_2px_8px] shadow-slate-500 data-[state=checked]:bg-zdaBlue-500 outline-none cursor-pointer"
          id="theme-toggle"
          checked={checked}
          ref={toggleRef}
          onCheckedChange={(chked) => setChecked(chked)}
        >
          <Switch.Thumb className="block w-[16px] h-[16px] bg-slate-200 rounded-full shadow-[0_2px_2px] shadow-slate-800 dark:shadow-slate-700 transition-transform duration-300 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </>
  );
};

export default ThemeToggle;
