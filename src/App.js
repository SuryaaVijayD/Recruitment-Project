import "./App.css";
import Mainpage from "./Component/Mainpage";
import "./App.css";
//import Login from "./Component/Login";
import Mcqsection from "./Component/Mcqsection";
import SecondPage from "./Component/SecondPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compiler from "./Component/Compiler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/get-started" element={<SecondPage />} />
        <Route path="/mcq-section" element={<Mcqsection />} />
        <Route path="/ide-section" element={<Compiler />} />
      </Routes>
    </Router>
  );
}

export default App;
