import React from "react";

export default function HeaderComponent() {
  return (
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
          module to format date-time strings |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/maneetgoyal/date-formatter-intl-js"
          >
            GitHub Source
          </a>
        </p>
      </div>
    </div>
  );
}
