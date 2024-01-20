import * as React from "react";
import { leftArrowIcon } from "./icons";

const ErrorPage = () => {
  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center">
        <span className="inline-flex m-4 font-semibold text-xl text-gray-300 pointer-events-none select-none">
          404{" "}
          <div className="mx-2 border-l-2 border-gray-300/25 border-opacity-70" />{" "}
          Page Not Found
        </span>
        <button
          className="inline-flex items-center pt-[6px] pb-[6px] pl-4 pr-4 rounded-md bg-zdaBlue-600 text-[15px] text-gray-200 font-medium transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-zdaBlue-800 select-none"
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

export default ErrorPage;
