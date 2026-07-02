import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RealEstateIndia from "./pages/RealEstateIndia.jsx";
import RealEstateUSA from "./pages/RealEstateUSA.jsx";
import ThankYou from "./pages/ThankYou.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realestate-india" element={<RealEstateIndia />} />
        <Route path="/realestate-usa" element={<RealEstateUSA />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <h1>404 — Page not found</h1>
      <p>Try one of these:</p>
      <ul>
        <li><Link to="/">Home (AI Agents)</Link></li>
        <li><Link to="/realestate-india">Real Estate — India</Link></li>
        <li><Link to="/realestate-usa">Real Estate — USA</Link></li>
        <li><Link to="/thank-you">Thank You</Link></li>
      </ul>
    </div>
  );
}
