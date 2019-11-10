import React, { useState, useRef } from "react";
import Select from "react-select";

const localeOptions = [
  { value: undefined, label: "Default" },
  { value: "ar-SA", label: "Arabic (Saudi Arabia)" },
  { value: "bn-BD", label: "Bangla (Bangladesh)" },
  { value: "bn-IN", label: "Bangla (India)" },
  { value: "cs-CZ", label: "Czech (Czech Republic)" },
  { value: "da-DK", label: "Danish (Denmark)" },
  { value: "de-AT", label: "Austrian German" },
  { value: "de-CH", label: "'Swiss' German" },
  { value: "de-DE", label: "Standard German" },
  { value: "el-GR", label: "Modern Greek" },
  { value: "en-AU", label: "Australian English" },
  { value: "en-CA", label: "Canadian English" },
  { value: "en-GB", label: "British English" },
  { value: "en-IE", label: "Irish English" },
  { value: "en-IN", label: "Indian English" },
  { value: "en-NZ", label: "New Zealand English" },
  { value: "en-US", label: "US English" },
  { value: "en-ZA", label: "English (South Africa)" },
  { value: "es-AR", label: "Argentine Spanish" },
  { value: "es-CL", label: "Chilean Spanish" },
  { value: "es-CO", label: "Colombian Spanish" },
  { value: "es-ES", label: "Castilian Spanish" },
  { value: "es-MX", label: "Mexican Spanish" },
  { value: "es-US", label: "American Spanish" },
  { value: "fi-FI", label: "Finnish (Finland)" },
  { value: "fr-BE", label: "Belgian French" },
  { value: "fr-CA", label: "Canadian French" },
  { value: "fr-CH", label: "'Swiss' French" },
  { value: "fr-FR", label: "Standard French" },
  { value: "he-IL", label: "Hebrew (Israel)" },
  { value: "hi-IN", label: "Hindi (India)" },
  { value: "hu-HU", label: "Hungarian (Hungary)" },
  { value: "id-ID", label: "Indonesian (Indonesia)" },
  { value: "it-CH", label: "'Swiss' Italian" },
  { value: "it-IT", label: "Standard Italian" },
  { value: "jp-JP", label: "Japanese (Japan)" },
  { value: "ko-KR", label: "Korean (Republic of Korea)" },
  { value: "nl-BE", label: "Belgian Dutch" },
  { value: "nl-NL", label: "Standard Dutch" },
  { value: "no-NO", label: "Norwegian (Norway)" },
  { value: "pl-PL", label: "Polish (Poland)" },
  { value: "pt-BR", label: "Brazilian Portuguese" },
  { value: "pt-PT", label: "European Portugues" },
  { value: "ro-RO", label: "Romanian (Romania)" },
  { value: "ru-RU", label: "Russian (Russian Federation)" },
  { value: "sk-SK", label: "Slovak (Slovakia)" },
  { value: "sv-SE", label: "Swedish (Sweden)" },
  { value: "ta-IN", label: "Indian Tamil" },
  { value: "ta-LK", label: "Sri Lankan Tamil" },
  { value: "th-TH", label: "Thai (Thailand)" },
  { value: "tr-TR", label: "Turkish (Turkey)" },
  { value: "zh-CN", label: "Chinese (Mainland China), simplified characters" },
  { value: "zh-HK", label: "Chinese (Hong Kong), traditional characters" },
  { value: "zh-TW", label: "Chinese (Taiwan), traditional characters" }
];

const numberingSystemOptions = [
  { value: undefined, label: "Default" },
  { value: "arab", label: "العربية-الهندية Arabic-Indic" },
  { value: "arabext", label: "العربية-الهندية Extended Arabic-Indic" },
  { value: "bali", label: "Balinese" },
  { value: "beng", label: "বাংলা Bangla" },
  { value: "deva", label: "देवनागरी Devanagari" },
  { value: "fullwide", label: "Latin Full Width" },
  { value: "gujr", label: "ગુજરાતી Gujarati" },
  { value: "guru", label: "ਗੁਰਮੁਖੀ Gurmukhi" },
  { value: "hanidec", label: "Han" },
  { value: "khmr", label: "Khmer" },
  { value: "knda", label: "ಕನ್ನಡ Kannada" },
  { value: "laoo", label: "Laoo" },
  { value: "latn", label: "Latin" },
  { value: "limb", label: "Limbu" },
  { value: "mlym", label: "മലയാളം Malayalam" },
  { value: "mong", label: "Mongolian" },
  { value: "mymr", label: "Myanmar" },
  { value: "orya", label: "ଓଡ଼ିଆ Odia" },
  { value: "tamldec", label: "தமிழ் Tamil" },
  { value: "telu", label: "తెలుగు Telugu" },
  { value: "thai", label: "คนไทย Thai" },
  { value: "tibt", label: "བོད་སྐད་ Tibetan" }
];

const calendarTypeOptions = [
  { value: undefined, label: "Default" },
  { value: "buddhist", label: "☸️ Buddhist" },
  { value: "chinese", label: "🐲 Chinese" },
  { value: "coptic", label: "🌍 Coptic" },
  { value: "ethiopia", label: "🌍 Ethiopia" },
  { value: "ethiopic", label: "🌍 Ethiopic" },
  { value: "gregory", label: "🌐 Gregory" },
  { value: "hebrew", label: "🕍 Hebrew" },
  { value: "indian", label: "🕉 Indian" },
  { value: "islamic", label: "☪ Islamic" },
  { value: "iso8601", label: "🌐 ISO-8601" },
  { value: "japanese", label: "🎎 Japanese" },
  { value: "persian", label: "🐫 Persian" },
  { value: "roc", label: "🐲 Republic of China" }
];

const hourCycleOptions = [
  { value: undefined, label: "Default" },
  { value: "h11", label: "11-Hours Cycle" },
  { value: "h12", label: "12-Hours Cycle" },
  { value: "h23", label: "23-Hours Cycle" },
  { value: "h24", label: "24-Hours Cycle" }
];

function appendStringWithHypen(input1, input2) {
  var output = undefined;
  if (input1 === undefined || input1 === "") {
    output = input2;
  } else if (input2 === undefined || input2 === "") {
    output = input1;
  } else {
    output = `${input1}-${input2}`;
  }
  return output;
}

function convertLocalePropertiestoLocalString(localeState) {
  let localeString = undefined;
  if (localeState.language !== undefined) {
    localeString = localeState.language;
    let otherLocaleSettings = undefined;
    if (localeState.numberingSystem !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `nu-${localeState.numberingSystem}`
      );
    }
    if (localeState.calendarType !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `ca-${localeState.calendarType}`
      );
    }
    if (localeState.hourCycle !== undefined) {
      otherLocaleSettings = appendStringWithHypen(
        otherLocaleSettings,
        `hc-${localeState.hourCycle}`
      );
    }
    if (otherLocaleSettings !== undefined) {
      localeString = `${localeString}-u-${otherLocaleSettings}`;
    }
  }
  return localeString;
}

export default function LocaleComponent() {
  // Declaring states
  const [localeState, setLocaleState] = useState(undefined);
  const refToLanguage = useRef();
  const refToNumberingSystem = useRef();
  const refToCalendarType = useRef();
  const refToHourCycle = useRef();

  return (
    <div className="locale-component border m-1">
      <div className="d-flex">
        <div className="flex-fill p-1">
          <h6>Pick locale settings</h6>
        </div>
      </div>
      <div className="d-flex">
        <div className="flex-fill p-1">
          <label className="d-block">Select Locale</label>
          <Select
            defaultValue={localeOptions[0]}
            options={localeOptions}
            onChange={option => {
              const localeString = convertLocalePropertiestoLocalString({
                language: option.value,
                numberingSystem: refToNumberingSystem.current.state.value.value,
                calendarType: refToCalendarType.current.state.value.value,
                hourCycle: refToHourCycle.current.state.value.value
              });
              setLocaleState(localeString);
            }}
            ref={refToLanguage}
          />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div className="flex-fill p-1">
          <label className="d-block">Select Numbering System</label>
          <Select
            defaultValue={numberingSystemOptions[0]}
            options={numberingSystemOptions}
            onChange={option => {
              const localeString = convertLocalePropertiestoLocalString({
                language: refToLanguage.current.state.value.value,
                numberingSystem: option.value,
                calendarType: refToCalendarType.current.state.value.value,
                hourCycle: refToHourCycle.current.state.value.value
              });
              setLocaleState(localeString);
            }}
            ref={refToNumberingSystem}
          />
        </div>
        <div className="flex-fill p-1">
          <label className="d-block">Select Calendar Type</label>
          <Select
            defaultValue={calendarTypeOptions[0]}
            options={calendarTypeOptions}
            onChange={option => {
              const localeString = convertLocalePropertiestoLocalString({
                language: refToLanguage.current.state.value.value,
                numberingSystem: refToNumberingSystem.current.state.value.value,
                calendarType: option.value,
                hourCycle: refToHourCycle.current.state.value.value
              });
              setLocaleState(localeString);
            }}
            ref={refToCalendarType}
          />
        </div>
        <div className="flex-fill p-1">
          <label className="d-block">Select Hour Cycle</label>
          <Select
            defaultValue={hourCycleOptions[0]}
            options={hourCycleOptions}
            onChange={option => {
              const localeString = convertLocalePropertiestoLocalString({
                language: refToLanguage.current.state.value.value,
                numberingSystem: refToNumberingSystem.current.state.value.value,
                calendarType: refToCalendarType.current.state.value.value,
                hourCycle: option.value
              });
              setLocaleState(localeString);
            }}
            ref={refToHourCycle}
          />
        </div>
      </div>
    </div>
  );
}
