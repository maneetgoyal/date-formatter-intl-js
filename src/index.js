import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/header-component";
import AppComponent from "./components/app-component";
import FooterComponent from "./components/footer-component";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <div className="intl-date-time-format-app">
    <section className="header">
      <HeaderComponent />
    </section>
    <section className="body">
      <AppComponent />
    </section>
    <section className="footer">
      <FooterComponent />
    </section>
  </div>,
  document.getElementById("root")
);
