import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zdaWorks_dark from "/zdaworks_dark.svg";
import zdaWorks_light from "/zdaworks_light.svg";
import { rightArrowBigIcon } from "../../icons";

const Body = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className="grid content-center items-center justify-center justify-items-center gap-5 sm:gap-[56px] lg:gap-[64px] pt-12 pb-24 sm:py-16 md:py-20">
      {/* Container for Card and Grid */}
      <div className="mt-12 sm:mt-0 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] min-w-[90vw] max-w-[90vw] xs:max-w-[95vw] z-30">
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
                <p className="mt-4 font-outfit text-xl tracking-tight font-light text-neutral-800 dark:text-neutral-300 pointer-events-none select-none">
                  Welcome to the Hub of{" "}
                  <span className="font-medium tracking-wide ml-[1px]">
                    Abstract Media Creation
                  </span>
                </p>
                <p className="mt-4 font-light text-md tracking-wide text-neutral-700 dark:text-neutral-400 max-w-[24ch] align-center italic pointer-events-none select-none">
                  Explore the world of abstract arts, logos, wallpapers, and
                  more
                </p>
                <a
                  className="block w-min"
                  href="https://www.zerodayanubis.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-4 font-outfit font-light text-sm text-neutral-600 dark:text-neutral-500 pointer-events-none select-none">
                    By&nbsp;&nbsp;
                    <span className="text-lg ml-[1px] drop-shadow-name-sm-light dark:drop-shadow-name-sm-dark">
                      ⌞ZERODAYANUBIS⌝
                    </span>
                  </p>
                </a>
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
      <div className="grid relative text-center rounded-lg max-w-[75vw] lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-center lg:gap-12 lg:rounded-lg dark:border-neutral-950 z-30">
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
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 text-sm text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
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
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
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
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Get art prints, posters, phone cases, stickers and more
          </p>
        </a>
      </div>
    </div>
  );
};

export default Body;
