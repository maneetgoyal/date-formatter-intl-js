import React from "react";
import Select from "react-select";
import {
  languageOptions,
  numberingSystemOptions,
  calendarTypeOptions,
  hourCycleOptions
} from "../../assets";

export default function LocaleComponent({ onChange, value }) {
  return (
    <div className="locale-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick locale settings</h6>
        </div>
      </div>
      <div className="d-flex">
        <div className="flex-fill p-1">
          <label className="d-block">
            Language
            <Select
              value={value.language}
              options={languageOptions}
              onChange={option => {
                onChange({ ...value, language: option });
              }}
            />
          </label>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1">
          <label className="d-block">
            Numbering System
            <Select
              value={value.numberingSystem}
              options={numberingSystemOptions}
              onChange={option => {
                onChange({ ...value, numberingSystem: option });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1">
          <label className="d-block">
            Calendar Type
            <Select
              value={value.calendarType}
              options={calendarTypeOptions}
              onChange={option => {
                onChange({ ...value, calendarType: option });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1">
          <label className="d-block">
            Hour Cycle
            <Select
              value={value.hourCycle}
              options={hourCycleOptions}
              onChange={option => {
                onChange({ ...value, hourCycle: option });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
