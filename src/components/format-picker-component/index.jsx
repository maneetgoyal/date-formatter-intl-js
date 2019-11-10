import React from "react";
import LocaleComponent from "../locale-component";
import DateComponent from "../date-component";
import TimeComponent from "../time-component";

export default function FormatPickerComponent() {
  return (
    <div className="format-picker-component">
      <LocaleComponent />
      <DateComponent />
      <TimeComponent />
    </div>
  );
}
