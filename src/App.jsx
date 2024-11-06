import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./Pages/Restaurant";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";


function App() {
    return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App