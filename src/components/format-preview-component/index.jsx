import React from "react";
import ReactJson from "react-json-view";

export default function FormatPreviewComponent() {
  const defaultINTLJSON = { locale: undefined, options: undefined };
  const defaultDateString = new Intl.DateTimeFormat(new Date()).format();
  return (
    <div className="format-preview-component border m-1">
      <div className="m-2 mb-4">
        <h6>Formatted String Preview</h6>
        <input
          className="form-control"
          type="text"
          value={defaultDateString}
          readOnly={true}
        ></input>
      </div>
      <div className="m-2">
        <h6>INTL JSON Preview</h6>
        <ReactJson src={defaultINTLJSON} collapsed={false} name={"arguments"} />
      </div>
    </div>
  );
}
