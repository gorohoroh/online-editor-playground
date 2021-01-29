import React from 'react';
import ReactDOM from 'react-dom';
import Ace from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import Monaco from "@monaco-editor/react";

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import codemirror_javascript from "codemirror/mode/javascript/javascript";
import codemirror_css from "codemirror/mode/css/css";

function onChange(newValue) {
  console.log("change", newValue);
}

const width = "90%";
const javascript_sample = "function rot13(str) {\n" +
    "    const alphabet = Array.from(\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".split(\"\"));\n" +
    "\n" +
    "    function getNewIndex(character) {\n" +
    "        const characterIndex = alphabet.indexOf(character);\n" +
    "\n" +
    "        if (characterIndex < 0) return character;\n" +
    "        else {\n" +
    "            let newIndex = characterIndex + 13;\n" +
    "            if (newIndex >= alphabet.length) newIndex = newIndex - alphabet.length;\n" +
    "            return alphabet[newIndex];\n" +
    "        }\n" +
    "    }\n" +
    "\n" +
    "    return Array.from(str.split(\"\"))\n" +
    "                .map(character => getNewIndex(character))\n" +
    "                .join(\"\");\n" +
    "}\n" +
    "\n" +
    "console.log(rot13(\"SERR PBQR PNZC\"));\n"

const css_sample = ".link-button {\n" +
    "    background-color: transparent;\n" +
    "    font-family: serif;\n" +
    "    border: none;\n" +
    "    cursor: pointer;\n" +
    "    text-decoration: underline;\n" +
    "    display: inline;\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "}\n" +
    "\n" +
    ".link-button:hover,\n" +
    ".link-button:focus {\n" +
    "    text-decoration: none;\n" +
    "}"

ReactDOM.render(<>
  {/*Ace integration sample: https://github.com/securingsincity/react-ace/blob/main/example/index.js*/}
  <h2>Ace</h2>
  <Ace
      placeholder="Placeholder Text"
      mode="css"
      theme="solarized_dark"
      name="blah2"
      onChange={onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      width={width}
      highlightActiveLine={true}
      value={css_sample}
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
         width={width}
         defaultLanguage="css"
         defaultValue={css_sample}
       />

   <h2>CodeMirror</h2>
    <CodeMirror
      value={css_sample}
      options={{
        mode: {codemirror_css},
        theme: 'material',
        lineNumbers: true,
      }}
    />


</>, document.getElementById('root'));
