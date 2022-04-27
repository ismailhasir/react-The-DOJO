import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/projects:id" element={<Project />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
