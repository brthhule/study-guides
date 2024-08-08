import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import SubjectPageScreen from "./screens/SubjectPageScreen";

function NoPage () {
  return (
    <>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path="/Welcome" element={<WelcomeScreen/>} />
        <Route path="/SubjectPage" element={<SubjectPageScreen/>}/>
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);