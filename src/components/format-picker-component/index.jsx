import React, { useState } from "react";
import LocaleComponent from "../locale-component";
import DateComponent from "../date-component";
import TimeComponent from "../time-component";

export default function FormatPickerComponent() {
  const [formatInfo, setFormatInfo] = useState({
    locale: undefined,
    options: {
      day: undefined,
      month: undefined,
      year: undefined,
      weekday: undefined,
      era: undefined,
      hour: undefined,
      minute: undefined,
      second: undefined,
      timeZoneName: undefined
    }
  });

  function setLocale(locale) {
    setFormatInfo({ ...formatInfo, locale });
  }

  function setDate(date) {
    const options = { ...formatInfo.options, ...date };
    setFormatInfo({ ...formatInfo, options });
  }

  function setTime(time) {
    const options = { ...formatInfo.options, ...time };
    setFormatInfo({ ...formatInfo, options });
  }

  return (
    <div className="format-picker-component">
      <LocaleComponent onChange={setLocale} />
      <DateComponent onChange={setDate} />
      <TimeComponent onChange={setTime} />
    </div>
  );
}
