import "./App.css";
import { Title } from "./pages/Title/index";
import { Answer } from "./pages/Answer/index";
import { Delete } from "./pages/Delete/index";
import { Fix } from "./pages/Fix/index";
import { Read } from "./pages/Read/index";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/fix" element={<Fix />} />
          <Route path="/fead" element={<Read />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
