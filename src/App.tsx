import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApplyVisa from "./pages/ApplyVisa";
import Review from "./pages/Review";
import Success from "./pages/Success";
import PassportFormPage from "./pages/PassportFormPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyVisa />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<Success />} />
        <Route path="/apply_passport" element={<PassportFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
