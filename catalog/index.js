import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from "./Theme";
import logo from "./logo.svg";

ReactDOM.render(
  <Catalog
    title="Ondrej Sika"
    theme={theme}
    logoSrc={logo}
    pages={[
      {
        path: "/",
        title: "Introduction",
        content: pageLoader(() => import("./intro.md"))
      },
      {
        path: "/colors",
        title: "Colors",
        content: pageLoader(() => import("./colors.md"))
      },
      {
        path: "/business-cards",
        title: "Business cards",
        content: pageLoader(() => import("./business-cards.md"))
      },
      {
        path: "/fonts",
        title: "Fonts",
        content: pageLoader(() => import("./fonts.md"))
      },
      {
        path: "/rollup",
        title: "Rollup",
        content: pageLoader(() => import("./rollup.md"))
      },
      {
        path: "/presentation",
        title: "Presentation",
        content: pageLoader(() => import("./presentation.md"))
      },
      {
        path: "/meetups",
        title: "Meetups",
        content: pageLoader(() => import("./meetups.md"))
      },
      {
        path: "/trainera",
        title: "Trainera",
        content: pageLoader(() => import("./trainera.md"))
      }
    ]}
  />,
  document.getElementById("catalog")
);
