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
        path: "/links-buttons",
        title: "Links & buttons",
        content: pageLoader(() => import("./links-buttons.md"))
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
        path: "/social",
        title: "Social sites",
        content: pageLoader(() => import("./social.md"))
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
      },
      {
        path: "/icons",
        title: "Icons",
        content: pageLoader(() => import("./icons.md"))
      },
      {
        path: "/header-margins",
        title: "Header margins",
        content: pageLoader(() => import("./header-margins.md"))
      },
      {
        path: "/sikalabs",
        title: "SikaLabs",
        content: pageLoader(() => import("./sikalabs.md"))
      },
      {
        path: "/skoleni-io",
        title: "Skoleni.io",
        content: pageLoader(() => import("./skoleniio.md"))
      },
      {
        path: "/Hashicorp-digitalocean",
        title: "Hashicorp & digital ocean",
        content: pageLoader(() => import("./hashicorp-digitalocean.md"))
      },
      {
        path: "/devopsaci",
        title: "Devopsáci",
        content: pageLoader(() => import("./devopsaci.md"))
      },
      {
        path: "/kniha",
        title: "Kniha",
        content: pageLoader(() => import("./kniha.md"))
      },
    ]}
  />,
  document.getElementById("catalog")
);
