import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

const weekDayLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Narrow" },
  { value: 2, label: "Short" },
  { value: 3, label: "Long" }
];

const dayLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" }
];

const monthLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" },
  { value: 3, label: "Narrow" },
  { value: 4, label: "Short" },
  { value: 5, label: "Long" }
];

const yearLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Two-Digit" },
  { value: 2, label: "Numeric" }
];

const eraLabels = [
  { value: 0, label: "Hide" },
  { value: 1, label: "Narrow" },
  { value: 2, label: "Short" },
  { value: 3, label: "Long" }
];

export default function DateComponent() {
  const [weekday, setWeekday] = useState(0);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [era, setEra] = useState(0);

  return (
    <div className="date-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick date format</h6>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select day format</label>
          <Slider
            min={0}
            max={2}
            step={null}
            marks={dayLabels}
            defaultValue={0}
            onChange={value => {
              setDay(value);
            }}
          ></Slider>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select month format</label>
          <Slider
            min={0}
            max={5}
            step={null}
            marks={monthLabels}
            defaultValue={0}
            onChange={value => {
              setMonth(value);
            }}
          ></Slider>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select year format</label>
          <Slider
            min={0}
            max={2}
            step={null}
            marks={yearLabels}
            defaultValue={0}
            onChange={value => {
              setYear(value);
            }}
          ></Slider>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select week day format</label>
          <Slider
            min={0}
            max={3}
            step={null}
            marks={weekDayLabels}
            defaultValue={0}
            onChange={value => {
              setWeekday(value);
            }}
          ></Slider>
        </div>
        <div className="flex-fill p-1 pl-4 pr-5">
          <label className="d-block">Select era format</label>
          <Slider
            min={0}
            max={3}
            step={null}
            marks={eraLabels}
            defaultValue={0}
            onChange={value => {
              setEra(value);
            }}
          ></Slider>
        </div>
      </div>
    </div>
  );
}
