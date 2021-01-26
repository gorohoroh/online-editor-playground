import React from 'react';
import ReactDOM from 'react-dom';
import Ace from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import Monaco from "@monaco-editor/react";

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import codemirror_javascript from "codemirror/mode/javascript/javascript";

function onChange(newValue) {
  console.log("change", newValue);
}

ReactDOM.render(<>
  <h2>Ace</h2>
  <Ace
      placeholder="Placeholder Text"
      mode="javascript"
      theme="solarized_dark"
      name="blah2"
      onChange={onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      width="90%"
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
      }}/>

  <h2>Monaco</h2>

    <Monaco
         height="50vh"
         width="90%"
         defaultLanguage="javascript"
         defaultValue="// some comment"
       />

   <h2>CodeMirror</h2>
    <CodeMirror
      value='// some comment'
      options={{
        mode: codemirror_javascript,
        theme: 'material',
        lineNumbers: true,
      }}
    />


</>, document.getElementById('root'));
