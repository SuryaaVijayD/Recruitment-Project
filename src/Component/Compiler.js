import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "./Component.css";
import Header from "./Header";
import Backbutton from "./Backbutton";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const Compiler = () => {
  const [questions, setQuestionData] = useState([]);

  useEffect(() => {
    fetch("./CodingQn.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch questions. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          let CodingThreeQn = data.slice(0, 3);
          setQuestionData(CodingThreeQn);
        } else {
          throw new Error("Invalid JSON format");
        }
      });
    setQuestionData([]); // Set an empty array on error
  }, []);

  const handleChange = (value) => {
    console.log("Editor content changed:", value);
  };

  const type = "Coding Test";
  const [mode, setMode] = useState("python");
  const [value, setValue] = useState('print("hello world!")');

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    const modeMapping = {
      python: "python",
      c: "c_cpp",
      java: "java",
    };

    const selectedMode = modeMapping[selectedLanguage];
    let selectedValue = "";
    if (selectedLanguage === "python") {
      selectedValue = 'print("Hello, world!")';
    } else if (selectedLanguage === "java") {
      selectedValue =
        'public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, world!");\n\t}\n}';
    } else if (selectedLanguage === "c" || selectedLanguage === "c++") {
      selectedValue =
        '#include <stdio.h>\n\nint main() {\n\tprintf("Hello, world!\\n");\n\treturn 0;\n}';
    }

    if (selectedMode) {
      setMode(selectedMode);
      setValue(selectedValue);
    }
  };

  function handleSubmit() {}

  return (
    <>
      <div className="header-mcq">
        <Header />
      </div>
      <Backbutton score={0} type={type} />
      <div className="container-fluid">
        <div className="lang">
          Select Language:
          <select
            id="languages"
            onChange={changeLanguage}
            className="languages"
          >
            <option>python</option>
            <option>c</option>
            <option>java</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="question" style={{ width: "50%" }}>
          {questions.map((question, index) => (
            <div key={index}>
              <h3>{question.question}</h3>
              <p>{question.complexity}</p>
            </div>
          ))}
        </div>
        <div className="playground" style={{ width: "50%" }}>
          <div className="editor" style={{ height: "500px" }}>
            <AceEditor
              mode={mode}
              theme="monokai"
              onChange={handleChange}
              value={value}
              editorProps={{ $blockScrolling: true }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-12 outputTerminal">output terminal</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-info">
          submit
        </button>
      </form>
    </>
  );
};

export default Compiler;
