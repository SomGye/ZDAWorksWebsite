import * as React from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Body from "./sections/Body/Body";
import Footer from "./sections/Footer/Footer";
import { useRecoilState } from "recoil";
import { logoAtom } from "./states/LogoAtom";
import LogoPage from "./LogoPage";

type Props = {
  route: string;
};
const App = ({ route }: Props) => {
  const [logoPage, setLogoPage] = useRecoilState(logoAtom);
  React.useEffect(() => {
    if (route === "portfolio") {
      window.location.replace("https://www.zerodayanubis.com/portfolio");
    } else if (route === "commissions") {
      window.location.replace("https://www.zerodayanubis.com/commissions");
    } else if (route === "logo") {
      setLogoPage(true);
    } else {
      setLogoPage(false);
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
        {!logoPage && (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        )}
        {logoPage && (
          <LogoPage />
        )}
      </main>
    </>
  );
};

export default App;
