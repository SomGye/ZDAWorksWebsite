import * as React from "react";
import { leftArrowIcon } from "./icons";
import ThemeMenu from "./ThemeMenu";

const ErrorPage = () => {
  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  return (
    <div className="flex justify-center w-full h-full bg-zdaBG-light dark:bg-zdaBG-dark">
      {/* NOTE: ThemeMenu needed here to detect theme separately, since this page bypasses App */}
      <div className="cursor-pointer focus-visible:outline-none absolute top-0 left-1/2 -translate-x-2/4 mr-0 mt-3 lg:left-auto lg:translate-x-0 lg:right-0 lg:mr-6">
        <ThemeMenu />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <span className="inline-flex m-6 3xl:m-10 4xl:m-12 4k:m-16 font-semibold text-xl 3xl:text-2xl text-gray-600 dark:text-gray-300 pointer-events-none select-none">
          404{" "}
          <div className="mx-2 border-l-2 border-gray-600/25 dark:border-gray-300/25 border-opacity-70" />{" "}
          Page Not Found
        </span>
        <button
          className="inline-flex items-center px-4 py-[0.375rem] 3xl:px-5 3xl:py-2 3xl:scale-[1.1] rounded-md bg-zdaBlue-600 text-[15px] 3xl:text-base text-gray-200 font-medium transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-zdaBlue-800 active:bg-zdaBlue-900/90 select-none"
          onClick={() => window.location.replace("/")}
        >
          <span className="inline-block align-middle mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            {leftArrowIcon}
          </span>{" "}
          <span className="inline-block align-middle -mt-[0.0677rem]">
            Go Back
          </span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
