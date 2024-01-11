"use client";
import { RedirectType, redirect } from "next/navigation";
import * as React from "react";

type Props = {
  page?: string;
};

const Redirector = ({ page }: Props) => {
  React.useEffect(() => {
    console.log("hit redirect check");
    // Detect potential redirect
    if (page === "portfolio") {
      redirect("https://www.zerodayanubis.com/portfolio");
    } else if (page === "commissions") {
      redirect("https://www.zerodayanubis.com/commissions");
    } else if (page === "contact") {
      redirect("mailto:zerodayanubis@gmail.com", "push" as RedirectType);
    }
  }, []);
  return <div className="redirect-div hidden"></div>;
};
export default Redirector;
