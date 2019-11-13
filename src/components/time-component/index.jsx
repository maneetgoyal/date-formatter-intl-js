import React from "react";
import Slider from "@material-ui/core/Slider";
import {
  hourLabels,
  minuteLabels,
  secondLabels,
  timeZoneNameLabels
} from "../../assets";

export default function TimeComponent({ onChange, value }) {
  return (
    <div className="time-component border m-1">
      <div className="d-xs-block d-md-flex">
        <div className="flex-fill p-1">
          <h6>Pick time format</h6>
        </div>
      </div>
      <div className="d-xs-block d-md-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Hour
            <Slider
              min={0}
              max={2}
              step={null}
              marks={hourLabels}
              value={value.hour}
              onChange={(event, selectedValue) => {
                onChange({
                  ...value,
                  hour: selectedValue
                });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Minute
            <Slider
              min={0}
              max={2}
              step={null}
              marks={minuteLabels}
              value={value.minute}
              onChange={(event, selectedValue) => {
                onChange({
                  ...value,
                  minute: selectedValue
                });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Second
            <Slider
              min={0}
              max={2}
              step={null}
              marks={secondLabels}
              value={value.second}
              onChange={(event, selectedValue) => {
                onChange({
                  ...value,
                  second: selectedValue
                });
              }}
            />
          </label>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">
            Time Zone Name
            <Slider
              min={0}
              max={2}
              step={null}
              marks={timeZoneNameLabels}
              value={value.timeZoneName}
              onChange={(event, selectedValue) => {
                onChange({
                  ...value,
                  timeZoneName: selectedValue
                });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
