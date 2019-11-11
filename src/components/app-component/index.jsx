import React from "react";
import FormatPickerComponent from "../format-picker-component";
import FormatPreviewComponent from "../format-preview-component";

export default function AppComponent() {
  return (
    <React.Fragment>
      <FormatPreviewComponent />
      <FormatPickerComponent />
    </React.Fragment>
  );
}
