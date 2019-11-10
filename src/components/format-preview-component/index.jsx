import React from "react";
import ReactJson from "react-json-view";
import "bootstrap/dist/css/bootstrap.css";

export default function FormatPreviewComponent() {
  return (
    <div className="format-preview-component border m-1">
      <div className="m-2 mb-4">
        <h6>Formatted String Preview</h6>
        <input
          className="form-control"
          type="text"
          placeholder="Formatted date-time string…"
          readOnly={true}
        ></input>
      </div>
      <div className="m-2">
        <h6>INTL JSON Preview</h6>
        <ReactJson
          src={{ locale: {}, options: {} }}
          collapsed={false}
          name={"arguments"}
        />
      </div>
    </div>
  );
}
