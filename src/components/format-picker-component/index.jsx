import React from "react";
import LocaleComponent from "../locale-component";
import DateComponent from "../date-component";
import TimeComponent from "../time-component";

export default function FormatPickerComponent({
  localeInfoOnChange,
  dateOnChange,
  timeOnChange
}) {
  return (
    <div className="format-picker-component">
      <LocaleComponent onChange={localeInfoOnChange} />
      <DateComponent onChange={dateOnChange} />
      <TimeComponent onChange={timeOnChange} />
    </div>
  );
}
