import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import PostLost from "./pages/PostLost";
import PostFound from "./pages/PostFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<LostItems />} />
          <Route path="/found" element={<FoundItems />} />
          <Route path="/post-lost" element={<PostLost />} />
          <Route path="/post-found" element={<PostFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
