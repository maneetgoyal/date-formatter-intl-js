import React from "react";
import ReactJson from "react-json-view";

function appendStringWithHypen(input1, input2) {
  var output = undefined;
  if (input1 === undefined || input1 === "") {
    output = input2;
  } else if (input2 === undefined || input2 === "") {
    output = input1;
  } else {
    output = `${input1}-${input2}`;
  }
  return output;
}

function convertLocaleInfotoLocalString(localeInfo) {
  let localeString = undefined;
  if (localeInfo.language !== undefined) {
    localeString = localeInfo.language;
    let otherLocaleSettings = undefined;
    if (localeInfo.numberingSystem !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `nu-${localeInfo.numberingSystem}`
      );
    }
    if (localeInfo.calendarType !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `ca-${localeInfo.calendarType}`
      );
    }
    if (localeInfo.hourCycle !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `hc-${localeInfo.hourCycle}`
      );
    }
    if (otherLocaleSettings !== undefined) {
      localeString = `${localeString}-u-${otherLocaleSettings}`;
    }
  }
  return localeString;
}

export default function FormatPreviewComponent({ intlJSON }) {
  const localeString = convertLocaleInfotoLocalString(intlJSON.localeInfo);
  return (
    <div className="format-preview-component border m-1">
      <div className="m-2 mb-4">
        <h6>Formatted DateTime Stamp Preview</h6>
        <input
          className="form-control"
          type="text"
          value={
            intlJSON === undefined
              ? new Intl.DateTimeFormat().format(new Date())
              : new Intl.DateTimeFormat(localeString, intlJSON.options).format(
                  new Date()
                )
          }
          readOnly={true}
        ></input>
      </div>
      <div className="m-2">
        <h6>INTL JSON Preview</h6>
        <ReactJson
          src={{ locale: localeString, options: intlJSON.options }}
          collapsed={false}
          name={"arguments"}
        />
      </div>
    </div>
  );
}
