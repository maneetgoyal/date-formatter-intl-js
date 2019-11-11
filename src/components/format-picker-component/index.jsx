import React, { useState, useEffect } from "react";
import LocaleComponent from "../locale-component";
import DateComponent from "../date-component";
import TimeComponent from "../time-component";

export default function FormatPickerComponent({ onChange }) {
  const [intlJSON, setIntlJSON] = useState({
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
    setIntlJSON({ ...intlJSON, locale });
  }

  function setDate(date) {
    const options = { ...intlJSON.options, ...date };
    setIntlJSON({ ...intlJSON, options });
  }

  function setTime(time) {
    const options = { ...intlJSON.options, ...time };
    setIntlJSON({ ...intlJSON, options });
  }

  useEffect(() => {
    onChange(intlJSON);
  });

  return (
    <div className="format-picker-component">
      <LocaleComponent onChange={setLocale} />
      <DateComponent onChange={setDate} />
      <TimeComponent onChange={setTime} />
    </div>
  );
}
