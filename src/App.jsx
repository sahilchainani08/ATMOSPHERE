import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import Car from "./pages/Car";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;