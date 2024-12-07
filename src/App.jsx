import "./App.css";
import { Title } from "./pages/Title/index";
import { Answer } from "./pages/Answer/index";
import { Delete } from "./pages/Delete/index";
import { Fix } from "./pages/Fix/index";
import { Read } from "./pages/Read/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemoProvider } from "./contexts/MemoContext";
import { CodeProvider } from "./contexts/CodeContext";
import { Matching } from "./pages/Matching/index";
import { RoomIdProvider } from "./contexts/RoomId";
import { PlayerProvider } from "./contexts/Player";

function App() {
  return (
    <div className="screen">
      <BrowserRouter>
        <RoomIdProvider>
          <PlayerProvider>
            <CodeProvider>
              <MemoProvider>
                <Routes>
                  <Route path="/" element={<Title />} />
                  <Route path="match" element={<Matching />} />
                  <Route path="read" element={<Read />} />
                  <Route path="delete" element={<Delete />} />
                  <Route path="fix" element={<Fix />} />
                  <Route path="answer" element={<Answer />} />
                  <Route path="*" element={<h1>Not Found Page</h1>} />
                </Routes>
              </MemoProvider>
            </CodeProvider>
          </PlayerProvider>
        </RoomIdProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
