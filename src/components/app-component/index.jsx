import React, { useState } from "react";
import FormatPickerComponent from "../format-picker-component";
import FormatPreviewComponent from "../format-preview-component";
import RightFixedButtonComponent from "../right-fixed-button-component";
import LeftFixedButtonComponent from "../left-fixed-button-component";
import { defaultValue } from "../../assets";

export default function AppComponent() {
  const [value, setValue] = useState(defaultValue);

  function setLocale(locale) {
    const newValue = { ...value, locale };
    setValue(newValue);
  }

  function setDate(date) {
    const newValue = { ...value, date };
    setValue(newValue);
  }

  function setTime(time) {
    const newValue = { ...value, time };
    setValue(newValue);
  }

  function reset() {
    setValue(defaultValue);
  }

  const onChange = {
    locale: setLocale,
    date: setDate,
    time: setTime
  };

  return (
    <React.Fragment>
      <FormatPreviewComponent value={value} />
      <FormatPickerComponent onChange={onChange} value={value} />
      <LeftFixedButtonComponent onClick={reset} />
      <RightFixedButtonComponent />
    </React.Fragment>
  );
}
