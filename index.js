const locales = ["hi", "en", "de", "th", "ru"];
locales.forEach((value) => {
  $("#locale1").append(
    $("<option>", {
      value,
      text: value
    })
  );
});

const numberingSystems = [
  "arab",
  "arabext",
  "bali",
  "beng",
  "deva",
  "fullwide",
  "gujr",
  "guru",
  "hanidec",
  "khmr",
  "knda",
  "laoo",
  "latn",
  "limb",
  "mlym",
  "mong",
  "mymr",
  "orya",
  "tamldec",
  "telu",
  "thai",
  "tibt"
];
numberingSystems.forEach((value) => {
  $("#numberingSystem1").append(
    $("<option>", {
      value,
      text: value
    })
  );
});

const calendars = [
  "buddhist",
  "chinese",
  "coptic",
  "ethiopia",
  "ethiopic",
  "gregory",
  "hebrew",
  "indian",
  "islamic",
  "iso8601",
  "japanese",
  "persian",
  "roc"
];
calendars.forEach((value) => {
  $("#calendar1").append(
    $("<option>", {
      value,
      text: value
    })
  );
});

const hourCycles = ["h11", "h12", "h23", "h24"];
hourCycles.forEach((value) => {
  $("#hourCycle1").append(
    $("<option>", {
      value,
      text: value
    })
  );
});

function updatePreview1() {
  let locale = $("#locale1").val();

  // Locale accessories
  const numberingSystem = $("#numberingSystem1").val();
  const calendar = $("#calendar1").val();
  const hourCycle = $("#hourCycle1").val();

  // Final locale
  locale = `${locale}-u-nu-${numberingSystem}-ca-${calendar}-hc-${hourCycle}`;

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat(locale).format(date);
  $("#dateTimeStampPreview1").val(formattedDate);
}
