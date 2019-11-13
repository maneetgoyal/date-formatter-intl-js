import React from "react";
import ReactJson from "react-json-view";
import {
  dayLabels,
  monthLabels,
  yearLabels,
  weekdayLabels,
  eraLabels,
  hourLabels,
  minuteLabels,
  secondLabels,
  timeZoneNameLabels
} from "../../assets";

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

function transformLocaleObject({
  language,
  numberingSystem,
  calendarType,
  hourCycle
}) {
  return {
    language: language.value,
    numberingSystem: numberingSystem.value,
    calendarType: calendarType.value,
    hourCycle: hourCycle.value
  };
}

function convertLocaleObjectToString(transformedLocale) {
  let localeString = undefined;
  if (transformedLocale.language !== undefined) {
    localeString = transformedLocale.language;
    let otherLocaleSettings = undefined;
    if (transformedLocale.numberingSystem !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `nu-${transformedLocale.numberingSystem}`
      );
    }
    if (transformedLocale.calendarType !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `ca-${transformedLocale.calendarType}`
      );
    }
    if (transformedLocale.hourCycle !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `hc-${transformedLocale.hourCycle}`
      );
    }
    if (otherLocaleSettings !== undefined) {
      localeString = `${localeString}-u-${otherLocaleSettings}`;
    }
  }
  return localeString;
}

function transformDateObject({ day, month, year, weekday, era }) {
  return {
    day: day === 0 ? undefined : dayLabels[day].label.toLowerCase(),
    month: month === 0 ? undefined : monthLabels[month].label.toLowerCase(),
    year: year === 0 ? undefined : yearLabels[year].label.toLowerCase(),
    weekday:
      weekday === 0 ? undefined : weekdayLabels[weekday].label.toLowerCase(),
    era: era === 0 ? undefined : eraLabels[era].label.toLowerCase()
  };
}

function transformTimeObject({ hour, minute, second, timeZoneName }) {
  return {
    hour: hour === 0 ? undefined : hourLabels[hour].label.toLowerCase(),
    minute: minute === 0 ? undefined : minuteLabels[minute].label.toLowerCase(),
    second: second === 0 ? undefined : secondLabels[second].label.toLowerCase(),
    timeZoneName:
      timeZoneName === 0
        ? undefined
        : timeZoneNameLabels[timeZoneName].label.toLowerCase()
  };
}

function formatValue({ locale, date, time }) {
  const transformedLocale = transformLocaleObject(locale);
  const transformedDate = transformDateObject(date);
  const transformedTime = transformTimeObject(time);
  return {
    locale: convertLocaleObjectToString(transformedLocale),
    options: { ...transformedDate, ...transformedTime }
  };
}

export default function FormatPreviewComponent({ value }) {
  const { locale, options } = formatValue(value);
  return (
    <div className="format-preview-component border m-1">
      <div className="d-block p-1">
        <h6>Preview Window</h6>
      </div>
      <div className="p-1">
        <label className="w-100">
          Formatted DateTime Stamp
          <input
            className="form-control"
            type="text"
            value={new Intl.DateTimeFormat(locale, options).format(new Date())}
            readOnly={true}
          />
        </label>
      </div>
      <div className="m-2">
        <label>
          INTL JSON
          <ReactJson
            src={{ locale, options }}
            collapsed={false}
            name={"arguments"}
          />
        </label>
      </div>
    </div>
  );
}
