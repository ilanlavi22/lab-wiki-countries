import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="countries/:id" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}