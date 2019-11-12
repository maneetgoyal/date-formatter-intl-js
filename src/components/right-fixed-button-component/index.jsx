import React from "react";

export default function RightFixedButtonComponent() {
  return (
    <div
      className={
        "right-fixed-button-component fixed-button-component position-fixed"
      }
    >
      <button
        type={"button"}
        className={"btn btn-light p-0 m-0"}
        title={"Go to top"}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <span role={"img"} aria-label={"Go-to-top icon"}>
          ⬆️
        </span>
      </button>
    </div>
  );
}
