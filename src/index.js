import React from 'react';
import ReactDOM from 'react-dom';
import Ace from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

ReactDOM.render(<Ace
  placeholder="Placeholder Text"
  mode="javascript"
  theme="solarized_dark"
  name="blah2"
  onChange={onChange}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>, document.getElementById('root'));
