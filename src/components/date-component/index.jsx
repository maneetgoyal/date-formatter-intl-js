import React from "react";
import Slider from "@material-ui/core/Slider";
import {
  dayLabels,
  monthLabels,
  yearLabels,
  weekdayLabels,
  eraLabels
} from "../../assets";

export default function DateComponent({ value, onChange }) {
  return (
    <div className="date-component border m-1">
      <div className="d-xs-block d-md-flex">
        <div className="flex-fill p-1">
          <h6>Pick date format</h6>
        </div>
      </div>
      <div className="d-xs-block d-md-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Day
            <Slider
              min={0}
              max={2}
              step={null}
              marks={dayLabels}
              value={value.day}
              onChange={(event, selectedValue) => {
                onChange({ ...value, day: selectedValue });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Month
            <Slider
              min={0}
              max={5}
              step={null}
              marks={monthLabels}
              value={value.month}
              onChange={(event, selectedValue) => {
                onChange({ ...value, month: selectedValue });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Year
            <Slider
              min={0}
              max={2}
              step={null}
              marks={yearLabels}
              value={value.year}
              onChange={(event, selectedValue) => {
                onChange({ ...value, year: selectedValue });
              }}
            />
          </label>
        </div>
      </div>
      <div className="d-xs-block d-md-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Weekday
            <Slider
              min={0}
              max={3}
              step={null}
              marks={weekdayLabels}
              value={value.weekday}
              onChange={(event, selectedValue) => {
                onChange({ ...value, weekday: selectedValue });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Era
            <Slider
              min={0}
              max={3}
              step={null}
              marks={eraLabels}
              value={value.era}
              onChange={(event, selectedValue) => {
                onChange({ ...value, era: selectedValue });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
