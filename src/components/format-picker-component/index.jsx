import React from "react";
import LocaleComponent from "../locale-component";
import DateComponent from "../date-component";
import TimeComponent from "../time-component";

export default function FormatPickerComponent({ onChange, value }) {
  return (
    <div className="format-picker-component">
      <LocaleComponent onChange={onChange.locale} value={value.locale} />
      <DateComponent onChange={onChange.date} value={value.date} />
      <TimeComponent onChange={onChange.time} value={value.time} />
    </div>
  );
}
