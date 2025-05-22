import React,{useState} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
function Editor(props) {
  const { language, displayName, value, onChange } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-header">
        {displayName}
      </div>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: false,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
export default Editor;
