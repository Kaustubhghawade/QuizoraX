import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import AttemptQuiz from "./pages/AttemptQuiz";
import Scores from "./pages/Scores";
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/attempt-quiz" element={<AttemptQuiz />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </Router>
  );
}

export default App;
