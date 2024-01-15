import * as React from "react";

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
        <span className="inline-flex m-4 font-semibold text-xl text-gray-300">
          404{" "}
          <div className="mx-2 border-l-2 border-gray-300/25 border-opacity-70" />{" "}
          Page Not Found
        </span>
        <button
          className="inline-flex items-center pt-[6px] pb-[6px] pl-4 pr-4 rounded-md bg-zdaBlue-600 text-[15px] text-gray-200 font-medium transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-zdaBlue-800"
          onClick={() => window.location.replace("/")}
        >
          <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>{" "}
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
