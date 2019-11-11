import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./components/app-component";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <div className="intl-date-time-format-app">
    <section className="header">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            INTL Date-Time Format Picker{" "}
            <span role="img" aria-label="Yo hand sign">
              🤟🏼
            </span>
          </h1>
          <p className="lead">
            Utilizes JavaScript's{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intl.DateTimeFormat
            </a>{" "}
            module to format date-time strings
          </p>
        </div>
      </div>
    </section>
    <section className="body">
      <AppComponent />
    </section>
    <section className="footer">
      <div className="container-fluid p-3 text-center">
        © 2019 Copyright:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/maneet-goyal-a5467b90/"
        >
          Maneet Goyal
        </a>
      </div>
    </section>
  </div>,
  document.getElementById("root")
);
