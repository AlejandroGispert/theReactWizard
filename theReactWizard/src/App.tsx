import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import Home from "./pages/Home/Home";

import { Toaster } from "sonner";
//import AnimeAttackBackground from "./components/AnimeAttackBackground";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
