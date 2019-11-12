import React, { useState } from "react";
import FormatPickerComponent from "../format-picker-component";
import FormatPreviewComponent from "../format-preview-component";
import RightFixedButtonComponent from "../right-fixed-button-component";
import LeftFixedButtonComponent from "../left-fixed-button-component";

export default function AppComponent() {
  const [intlJSON, setIntlJSON] = useState({
    localeInfo: {
      language: undefined,
      numberingSystem: undefined,
      calendarType: undefined,
      hourCycle: undefined
    },
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

  function setLocaleInfo(localeInfo) {
    const locale = { ...intlJSON.localeInfo, ...localeInfo };
    setIntlJSON({ localeInfo: locale, options: intlJSON.options });
  }

  function setDate(date) {
    const options = { ...intlJSON.options, ...date };
    setIntlJSON({ localeInfo: intlJSON.localeInfo, options });
  }

  function setTime(time) {
    const options = { ...intlJSON.options, ...time };
    setIntlJSON({ localeInfo: intlJSON.localeInfo, options });
  }

  return (
    <React.Fragment>
      <FormatPreviewComponent intlJSON={intlJSON} />
      <FormatPickerComponent
        localeInfoOnChange={setLocaleInfo}
        dateOnChange={setDate}
        timeOnChange={setTime}
      />
      <LeftFixedButtonComponent />
      <RightFixedButtonComponent />
    </React.Fragment>
  );
}
