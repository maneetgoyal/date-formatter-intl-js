import React from "react";
import Slider from "@material-ui/core/Slider";

const hourLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" }
];

const minuteLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" }
];

const secondLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" }
];

const timeZoneNameLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Short" },
  { value: 2, label: "Long" }
];

export default function TimeComponent(props) {
  return (
    <div className="time-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick time format</h6>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select hour format</label>

          <Slider
            min={0}
            max={2}
            step={null}
            marks={hourLabels}
            defaultValue={0}
            onChange={(event, value) => {
              let hour = undefined;
              if (value !== 0) {
                const selectedLabel = hourLabels.find(label => {
                  return label.value === value;
                });
                hour = selectedLabel.label.toLowerCase();
              }
              props.onChange({
                hour
              });
            }}
          />
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select minute format</label>
          <Slider
            min={0}
            max={2}
            step={null}
            marks={minuteLabels}
            defaultValue={0}
            onChange={(event, value) => {
              let minute = undefined;
              if (value !== 0) {
                const selectedLabel = minuteLabels.find(label => {
                  return label.value === value;
                });
                minute = selectedLabel.label.toLowerCase();
              }
              props.onChange({
                minute
              });
            }}
          />
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select second format</label>
          <Slider
            min={0}
            max={2}
            step={null}
            marks={secondLabels}
            defaultValue={0}
            onChange={(event, value) => {
              let second = undefined;
              if (value !== 0) {
                const selectedLabel = secondLabels.find(label => {
                  return label.value === value;
                });
                second = selectedLabel.label.toLowerCase();
              }
              props.onChange({
                second
              });
            }}
          />
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select time zone name format</label>
          <Slider
            min={0}
            max={2}
            step={null}
            marks={timeZoneNameLabels}
            defaultValue={0}
            onChange={(event, value) => {
              let timeZoneName = undefined;
              if (value !== 0) {
                const selectedLabel = timeZoneNameLabels.find(label => {
                  return label.value === value;
                });
                timeZoneName = selectedLabel.label.toLowerCase();
              }
              props.onChange({
                timeZoneName
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
