import React from "react";
import ReactJson from "react-json-view";

export default function FormatPreviewComponent({ intlJSON }) {
  return (
    <div className="format-preview-component border m-1">
      <div className="m-2 mb-4">
        <h6>Formatted String Preview</h6>
        <input
          className="form-control"
          type="text"
          value={
            intlJSON === undefined
              ? new Intl.DateTimeFormat().format(new Date())
              : new Intl.DateTimeFormat(
                  intlJSON.locale,
                  intlJSON.options
                ).format(new Date())
          }
          readOnly={true}
        ></input>
      </div>
      <div className="m-2">
        <h6>INTL JSON Preview</h6>
        <ReactJson
          src={
            intlJSON === undefined
              ? { locale: undefined, options: undefined }
              : intlJSON
          }
          collapsed={false}
          name={"arguments"}
        />
      </div>
    </div>
  );
}
