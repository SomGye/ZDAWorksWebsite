import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zdaWorks_dark from "/zdaworks_dark.svg";
import zdaWorks_light from "/zdaworks_light.svg";

const Body = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className="contents">
      {/* Container for Card and Grid */}
      <div className="mt-12 sm:mt-0 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] min-w-[90vw] max-w-[95vw] z-30">
        {/* Card Box */}
        <div className="flex flex-col items-center relative overflow-hidden bg-zdaBG-lightCard dark:bg-zdaBG-darkCard w-full rounded-lg md:block">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg text-left">
                <img
                  className="relative -ml-2 drop-shadow-logo-light dark:drop-shadow-logo-dark select-none"
                  src={theme === "dark" ? zdaWorks_dark : zdaWorks_light}
                  alt="ZDAWorks Logo"
                  width={294}
                  height={67}
                />
                <p className="mt-4 text-lg tracking-tight font-light text-neutral-800 dark:text-neutral-300 pointer-events-none select-none">
                  Welcome to the Hub of &nbsp;{" "}
                  <span className="font-semibold tracking-wide">
                    Abstract Media Creation
                  </span>
                </p>
                <p className="mt-4 text-lg tracking-wide text-neutral-700 dark:text-neutral-400 max-w-[24ch] align-center italic pointer-events-none select-none">
                  Explore the world of abstract arts, logos, wallpapers, and
                  more
                </p>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-500 font-light pointer-events-none select-none">
                  By&nbsp;&nbsp; ⌞ZERODAYANUBIS⌝
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Image Grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="/assets/A_Visual_Violation-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/The_Chroma_Passage-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/Mark_of_Manifestation-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/A_Reflection_of_Self-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/A_System_of_Structure-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/The_Crux_of_Crisis-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/assets/Helical_Frenzy-800px.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center pointer-events-none select-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container for Links */}
      <div className="mb-0 grid text-center rounded-lg lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center lg:rounded-lg dark:border-neutral-950 mt-[-5vh] z-30">
        <a
          href="https://ko-fi.com/zerodayanubis"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            Ko-fi{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </h2>
          <p
            className={`m-0 text-sm tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Download high-quality versions of <br />
            ZDA Media for free
          </p>
        </a>
        <a
          href="https://www.zerodayanubis.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            ZDA Website{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Home of ZDA&apos;s art portfolio <br />
            and commission info
          </p>
        </a>
        <a
          href="https://tinyurl.com/ZDAPrints"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            Print Shop{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Get art prints, posters, phone cases, stickers and more
          </p>
        </a>
      </div>
    </div>
  );
};

export default Body;
