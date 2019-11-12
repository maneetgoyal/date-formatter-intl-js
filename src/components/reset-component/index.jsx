import React from "react";

export default function ResetComponent() {
  return (
    <button
      type={"button"}
      className={"btn btn-light p-0 m-0 position-fixed reset-component"}
      title={"Reset form"}
    >
      <span role={"img"} aria-label={"Reset form icon"}>
        🔄
      </span>
    </button>
  );
}
