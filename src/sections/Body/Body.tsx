import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import zdaWorks_dark from "/zdaworks_dark.svg";
import zdaWorks_light from "/zdaworks_light.svg";
import { rightArrowBigIcon } from "../../icons";
import {
  altAReflectionOfSelf,
  altASystemOfStructure,
  altAVisualViolation,
  altHelicalFrenzy,
  altMarkOfManifestation,
  altTheChromaPassage,
  altTheCruxOfCrisis,
  altZDAWorksLogoMain,
} from "../../AltText";

const Body = () => {
  const theme = useRecoilValue(themeAtom);

  /**
   * On image load, show the base img and hide the blur img.
   * @param imgId unique className id of img
   */
  const loadImgHandler = (imgId: string) => {
    const baseImg = document.querySelector("img." + imgId) as any;
    if (baseImg) {
      baseImg.classList.remove("hidden");
    }
    const blurImg = document.querySelector("img." + imgId + "b") as any;
    if (blurImg) {
      blurImg.classList.add("hidden");
    }
  };

  return (
    <div className="grid content-center items-center justify-center justify-items-center gap-5 sm:gap-[56px] lg:gap-[64px] pt-12 pb-24 sm:py-16 md:py-20">
      {/* Container for Card and Grid */}
      <div className="mt-12 sm:mt-0 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-sky-50 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-zdaBlue-200 after:via-zdaBlue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-zdaBlue-700 before:dark:opacity-5 after:dark:from-zdaBlue-900 after:dark:via-zdaBlue-950 after:dark:opacity-40 before:lg:h-[360px] min-w-[90vw] max-w-[90vw] xs:max-w-[95vw] z-30">
        {/* Card Box */}
        <div className="flex flex-col items-center relative overflow-hidden bg-zdaBG-lightCard dark:bg-zdaBG-darkCard w-full rounded-lg md:block 4k:gap-8">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 3xl:py-10 4xl:py-12 4k:py-20">
              <div className="flex flex-col sm:max-w-lg text-left text-balance lg:gap-1 2xl:gap-2 3xl:gap-3 4xl:gap-4 4k:gap-6">
                <img
                  className="relative -ml-2 drop-shadow-logo-light dark:drop-shadow-logo-dark select-none 3xl:w-[368px] 3xl:h-[84px] 4xl:w-[441px] 4xl:h-[101px] 4k:w-[564px] 4k:h-[129px]"
                  src={theme === "dark" ? zdaWorks_dark : zdaWorks_light}
                  alt={altZDAWorksLogoMain}
                  width={294}
                  height={67}
                />
                <p className="mt-4 font-outfit text-xl 3xl:text-2xl 4xl:text-3xl 4k:text-4xl tracking-tight font-light text-neutral-800 dark:text-neutral-300 pointer-events-none select-none">
                  Welcome to the Hub of <br className="block sm:hidden" />
                  <span className="font-medium tracking-wide ml-[1px]">
                    Abstract Media Creation
                  </span>
                </p>
                <p className="mt-4 font-light text-md 3xl:text-lg 4xl:text-xl 4k:text-2xl tracking-wide text-neutral-700 dark:text-neutral-400 max-w-[24ch] align-center italic pointer-events-none select-none">
                  Explore the world of abstract arts, logos, wallpapers, and
                  more
                </p>
                <a
                  className="block w-min"
                  href="https://www.zerodayanubis.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-4 font-outfit font-light text-sm 3xl:text-lg 4xl:text-xl 4k:text-2xl text-neutral-600 dark:text-neutral-500 pointer-events-none select-none">
                    By&nbsp;&nbsp;
                    <span className="text-lg 3xl:text-xl 4xl:text-2xl 4k:text-3xl ml-[1px] drop-shadow-name-sm-light dark:drop-shadow-name-sm-dark">
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
                    className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/A_Visual_Violation-600px-c7-blur3x.jpg"
                              alt={altAVisualViolation}
                              className="img01b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img01")}
                              src="/assets/A_Visual_Violation-600px-c7.jpg"
                              alt={altAVisualViolation}
                              className="hidden img01 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/The_Chroma_Passage-600px-c7-blur3x.jpg"
                              alt={altTheChromaPassage}
                              className="img02b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img02")}
                              src="/assets/The_Chroma_Passage-600px-c7.jpg"
                              alt={altTheChromaPassage}
                              className="hidden img02 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/Mark_of_Manifestation-nozda-600px-c7-blur3x.jpg"
                              alt={altMarkOfManifestation}
                              className="img03b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img03")}
                              src="/assets/Mark_of_Manifestation-nozda-600px-c7.jpg"
                              alt={altMarkOfManifestation}
                              className="hidden img03 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/A_Reflection_of_Self-600px-c7-blur3x.jpg"
                              alt={altAReflectionOfSelf}
                              className="img04b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img04")}
                              src="/assets/A_Reflection_of_Self-600px-c7.jpg"
                              alt={altAReflectionOfSelf}
                              className="hidden img04 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/A_System_of_Structure-600px-c7-blur3x.jpg"
                              alt={altASystemOfStructure}
                              className="img05b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img05")}
                              src="/assets/A_System_of_Structure-600px-c7.jpg"
                              alt={altASystemOfStructure}
                              className="hidden img05 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/The_Crux_of_Crisis-600px-c7-blur3x.jpg"
                              alt={altTheCruxOfCrisis}
                              className="img06b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img06")}
                              src="/assets/The_Crux_of_Crisis-600px-c7.jpg"
                              alt={altTheCruxOfCrisis}
                              className="hidden img06 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg transition-all ease-out duration-[600ms] hover:transition-all hover:ease-out hover:duration-[600ms] hover:drop-shadow-[0_0_12px_#99999990] dark:hover:drop-shadow-[0_0_18px_#bbbbbb3b]">
                            <img
                              src="/assets/Helical_Frenzy-600px-c7-blur3x.jpg"
                              alt={altHelicalFrenzy}
                              className="img07b z-20 h-full w-full object-cover object-center rounded-lg pointer-events-none select-none"
                            />
                            <img
                              onLoad={() => loadImgHandler("img07")}
                              src="/assets/Helical_Frenzy-600px-c7.jpg"
                              alt={altHelicalFrenzy}
                              className="hidden img07 z-10 h-full w-full object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
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
      <div className="grid relative text-center rounded-lg max-w-[75vw] lg:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl lg:w-full lg:grid-cols-3 lg:text-center lg:gap-12 3xl:gap-20 4xl:gap-24 4k:gap-28 lg:rounded-lg dark:border-neutral-950 z-30">
        <a
          href="https://ko-fi.com/zerodayanubis"
          className="group rounded-lg border border-transparent drop-shadow-link-light dark:drop-shadow-link-dark px-5 py-4 transition-all duration-300 dark:duration-200 ease-out hover:border-gray-200/30 hover:dark:border-neutral-800/25 hover:bg-gray-200/75 hover:dark:bg-neutral-800/30 motion-reduce:transition-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-4 pl-4 lg:pl-0 text-2xl 3xl:text-3xl 4k:text-4xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            Downloads{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 text-sm 3xl:text-base 4xl:text-lg 4k:text-xl text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Download high-quality versions of <br />
            media for free and support ZDA
          </p>
        </a>
        <a
          href="https://www.zerodayanubis.com"
          className="group rounded-lg border border-transparent drop-shadow-link-light dark:drop-shadow-link-dark px-5 py-4 transition-all duration-300 dark:duration-200 ease-out hover:border-gray-200/30 hover:dark:border-neutral-800/25 hover:bg-gray-200/75 hover:dark:bg-neutral-800/30 motion-reduce:transition-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-4 text-2xl 3xl:text-3xl 4k:text-4xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            Art{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm 3xl:text-base 4xl:text-lg 4k:text-xl text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            ZDA&apos;s art portfolio <br />
            and commission info
          </p>
        </a>
        <a
          href="https://tinyurl.com/ZDAPrints"
          className="group rounded-lg border border-transparent drop-shadow-link-light dark:drop-shadow-link-dark px-5 py-4 transition-all duration-300 dark:duration-200 ease-out hover:border-gray-200/30 hover:dark:border-neutral-800/25 hover:bg-gray-200/75 hover:dark:bg-neutral-800/30 motion-reduce:transition-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-4 text-2xl 3xl:text-3xl 4k:text-4xl font-semibold inline-flex items-center text-zdaText-dark dark:text-zdaText-light select-none`}
          >
            Shop{" "}
            <span className="inline-block mx-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {rightArrowBigIcon}
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm 3xl:text-base 4xl:text-lg 4k:text-xl text-balance tracking-wide opacity-75 dark:opacity-60 text-zdaText-darker dark:text-zdaText-lighter select-none`}
          >
            Art prints, posters, cards, stickers and more
          </p>
        </a>
      </div>
      {/* Privacy Policy */}
      <a
        href="http://tinyurl.com/ZDAWorksPrivacy"
        className="mx-0 mt-4 mb-4 sm:mt-0 sm:mb-8 lg:mt-0 lg:mb-2 font-semibold text-xs text-zdaBlue-950 dark:text-zdaBlue-400 hover:text-zdaBlue-500 dark:hover:text-zdaBlue-500 active:text-zdaBlue-600 dark:active:text-zdaBlue-600 transition-colors duration-200 ease-out"
        target="_blank"
        rel="noopener noreferrer"
        title="Privacy Policy"
      >
        PRIVACY POLICY
      </a>
    </div>
  );
};

export default Body;
