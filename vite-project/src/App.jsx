import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/homePage";
import AboutPage from "./Component/AboutPage";
import SkillsPage from "./Component/SkillsPage";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/skills" element={ <SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
