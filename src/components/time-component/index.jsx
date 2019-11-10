import React from "react";
import Slider from "react-rangeslider";

const hourLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit"
};

const minuteLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit"
};

const secondLabels = {
  0: "Hide",
  1: "Numeric",
  2: "Two-Digit"
};

const timeZoneNameLabels = {
  0: "Hide",
  1: "Long",
  2: "Short"
};

export default function TimeComponent() {
  return (
    <div className="time-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick time format</h6>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select hour format</label>
          <Slider min={0} max={2} step={1} labels={hourLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select minute format</label>
          <Slider min={0} max={2} step={1} labels={minuteLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select second format</label>
          <Slider min={0} max={2} step={1} labels={secondLabels}></Slider>
        </div>
        <div className="flex-fill p-1 pb-5 pr-3">
          <label className="d-block">Select time zone name format</label>
          <Slider min={0} max={2} step={1} labels={timeZoneNameLabels}></Slider>
        </div>
      </div>
    </div>
  );
}
