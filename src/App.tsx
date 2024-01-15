import * as React from "react";
import "./App.css";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./states/ThemeAtom";
import ThemeToggle from "./ThemeToggle";
import zdaWorks_letterDark from "/zdaworks_letter_dark.svg";
import zdaWorks_letterLight from "/zdaworks_letter_light.svg";
// import zdaWorks_dark from "/zdaworks_redpink.svg";
import zdaWorks_dark from "/zdaworks_dark.svg";
import zdaWorks_blue from "/zdaworks_fractalblue.svg";
import zdaWorks_light from "/zdaworks_light.svg";
import zda_dark from "/zerodayanubis_dark.svg";
import zda_light from "/zerodayanubis_light.svg";

type Props = {
  route: string;
};
const App = ({ route }: Props) => {
  const theme = useRecoilValue(themeAtom); // TODO: change Tailwind text colors based on current Theme

  React.useEffect(() => {
    if (route === "portfolio") {
      window.location.replace("https://www.zerodayanubis.com/portfolio");
    } else if (route === "commissions") {
      window.location.replace("https://www.zerodayanubis.com/commissions");
    }
  }, [route]);

  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  return (
    <>
      <main className="bg-zdaBG-light dark:bg-zdaBG-dark flex min-h-screen flex-col items-center justify-evenly p-0 xs:px-12 sm:px-24 transition ease-out duration-500">
        {/* TODO: redo Header using Tailblocks example, and make sure to use ONE instance of ThemeToggle */}
        <div className="z-10 fixed top-0 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard px-3 py-1 w-full items-center justify-between text-sm lg:flex">
          <span className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-200/50 bg-gradient-to-b from-zdaBG-lightCard pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-inherit lg:static lg:w-auto  lg:rounded-lg lg:border lg:bg-zdaBG-lightCard lg:p-4 lg:dark:bg-zdaBG-darkCard text-zdaText-dark dark:text-zdaText-light pointer-events-none select-none">
            Welcome to the Hub of
            <span className="font-bold ml-1 tracking-wide">Abstract Media Creation</span>
          </span>
          <div className="fixed bottom-0 left-0 hidden h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:flex lg:static lg:h-auto lg:w-auto lg:bg-none">
            <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
              <img
                src={
                  theme === "dark" ? zdaWorks_letterDark : zdaWorks_letterLight
                }
                alt="ZDAWorks Z"
                className="pointer-events-none select-none"
                width={36}
                height={36}
              />
            </p>
          </div>
          <div className="fixed bottom-0 left-0 flex h-auto w-full items-end justify-center bg-gradient-to-b from-zdaBG-lightCard backdrop-blur-2xl dark:md:border-t dark:border-neutral-900 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:bg-none dark:lg:bg-transparent dark:lg:border-t-0 text-zdaText-dark dark:text-zdaText-light">
            <a
              className="select-none flex place-items-center gap-2 p-4 pointer-events-auto lg:p-0"
              href="https://www.zerodayanubis.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <img
                src={theme === "dark" ? zda_dark : zda_light}
                alt="ZeroDayAnubis"
                className="dark"
                width={243}
                height={40}
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:static lg:w-auto lg:p-4">
            <ThemeToggle />
          </div>
        </div>
        <div className="mt-12 sm:mt-0 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] min-w-[90vw] max-w-[95vw]">
          {/* Card Box */}
          <div className="flex flex-col items-center relative overflow-hidden bg-zdaBG-lightCard dark:bg-zdaBG-darkCard w-full rounded-lg md:block">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg text-left">
                  <img
                    className="relative -ml-2 drop-shadow-logo-light dark:drop-shadow-logo-dark"
                    src={theme === "dark" ? zdaWorks_dark : zdaWorks_light}
                    alt="ZDAWorks Logo"
                    width={294}
                    height={67}
                  />
                  <p className="mt-4 text-lg tracking-tight font-light text-neutral-800 dark:text-neutral-300 pointer-events-none select-none">
                    Welcome to the Hub of &nbsp; <span className="font-semibold tracking-wide">Abstract Media Creation</span>
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
        <div className="mb-0 grid text-center rounded-lg lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center lg:rounded-lg dark:border-neutral-950 mt-[-5vh]">
          <a
            href="https://ko-fi.com/zerodayanubis"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 z-40"
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
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 z-40"
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
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 z-40"
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
      </main>
      {/* TODO: redo Header, split into new component, move 'By ZDA' into permanent bottom fixture */}
      {/* TODO: fix layout for mobile phones */}
      {/* TODO: change from Dark Mode Switch to Icon Button with Dropdown menu */}
      {/* TODO: detect when prefers-color-scheme changes in OS and dynamically update */}
    </>
  );
};

export default App;
