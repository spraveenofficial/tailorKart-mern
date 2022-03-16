import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import MiniNav from "./Components/MiniNavbar";
function App() {
  return (
    <Router>
      <MiniNav />
      <Navbar />
    </Router>
  );
}

export default App;
