import React, { useState } from "react";
import FormatPickerComponent from "../format-picker-component";
import FormatPreviewComponent from "../format-preview-component";

export default function AppComponent() {
  const [intlJSON, setIntlJSON] = useState();
  return (
    <React.Fragment>
      <FormatPreviewComponent intlJSON={intlJSON} />
      <FormatPickerComponent onChange={setIntlJSON} />
    </React.Fragment>
  );
}
