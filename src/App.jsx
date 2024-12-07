import "./App.css";
import { Title } from "./pages/Title/index";
import { Answer } from "./pages/Answer/index";
import { Delete } from "./pages/Delete/index";
import { Fix } from "./pages/Fix/index";
import { Read } from "./pages/Read/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemoProvider } from "./contexts/MemoContext";

function App() {
  return (
    <div className="screen">
      <BrowserRouter>
        <MemoProvider>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="answer" element={<Answer />} />
            <Route path="delete" element={<Delete />} />
            <Route path="fix" element={<Fix />} />
            <Route path="read" element={<Read />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Routes>
        </MemoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
