import React from "react";
import Slider from "@material-ui/core/Slider";

const weekdayLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Narrow" },
  { value: 2, label: "Short" },
  { value: 3, label: "Long" }
];

const dayLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "2-Digit" },
  { value: 2, label: "Numeric" }
];

const monthLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "2-Digit" },
  { value: 2, label: "Numeric" },
  { value: 3, label: "Narrow" },
  { value: 4, label: "Short" },
  { value: 5, label: "Long" }
];

const yearLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "2-Digit" },
  { value: 2, label: "Numeric" }
];

const eraLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Narrow" },
  { value: 2, label: "Short" },
  { value: 3, label: "Long" }
];

export default function DateComponent(props) {
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
              defaultValue={0}
              onChange={(event, value) => {
                let day = undefined;
                if (value !== 0) {
                  const selectedLabel = dayLabels.find(label => {
                    return label.value === value;
                  });
                  day = selectedLabel.label.toLowerCase();
                }
                props.onChange({
                  day
                });
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
              defaultValue={0}
              onChange={(event, value) => {
                let month = undefined;
                if (value !== 0) {
                  const selectedLabel = monthLabels.find(label => {
                    return label.value === value;
                  });
                  month = selectedLabel.label.toLowerCase();
                }
                props.onChange({
                  month
                });
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
              defaultValue={0}
              onChange={(event, value) => {
                let year = undefined;
                if (value !== 0) {
                  const selectedLabel = yearLabels.find(label => {
                    return label.value === value;
                  });
                  year = selectedLabel.label.toLowerCase();
                }
                props.onChange({
                  year
                });
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
              defaultValue={0}
              onChange={(event, value) => {
                let weekday = undefined;
                if (value !== 0) {
                  const selectedLabel = weekdayLabels.find(label => {
                    return label.value === value;
                  });
                  weekday = selectedLabel.label.toLowerCase();
                }
                props.onChange({
                  weekday
                });
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
              defaultValue={0}
              onChange={(event, value) => {
                let era = undefined;
                if (value !== 0) {
                  const selectedLabel = eraLabels.find(label => {
                    return label.value === value;
                  });
                  era = selectedLabel.label.toLowerCase();
                }
                props.onChange({
                  era
                });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
