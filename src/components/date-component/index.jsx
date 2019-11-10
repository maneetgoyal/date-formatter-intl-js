import React from "react";
import Slider from "react-rangeslider";

const weekDayLabels = {
  0: "Hide",
  1: "Long",
  2: "Short",
  3: "Narrow"
};

const dayLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit"
};

const monthLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit",
  3: "Long",
  4: "Short",
  5: "Narrow"
};

const yearLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit"
};

const eraLabels = {
  0: "Hide",
  1: "Long",
  2: "Short",
  3: "Narrow"
};

export default function DateComponent() {
  return (
    <div className="date-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick date format</h6>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select day format</label>
          <Slider min={0} max={2} step={1} labels={dayLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select month format</label>
          <Slider min={0} max={5} step={1} labels={monthLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select year format</label>
          <Slider min={0} max={2} step={1} labels={yearLabels}></Slider>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select week day format</label>
          <Slider min={0} max={3} step={1} labels={weekDayLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select era format</label>
          <Slider min={0} max={3} step={1} labels={eraLabels}></Slider>
        </div>
      </div>
    </div>
  );
}
