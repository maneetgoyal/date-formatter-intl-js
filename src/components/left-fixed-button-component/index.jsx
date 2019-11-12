import React from "react";

export default function LeftFixedButtonComponent({ onReset }) {
  return (
    <div
      className={
        "left-fixed-button-component fixed-button-component position-fixed"
      }
    >
      <button
        type={"reset"}
        className={"btn btn-light p-0 m-0 mr-4"}
        title={"Reset form"}
        onClick={() => {
          onReset();
        }}
      >
        <span role={"img"} aria-label={"Reset form icon"}>
          🔄
        </span>
      </button>
    </div>
  );
}
