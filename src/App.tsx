import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Landing</p>} />
      </Routes>
    </>
  );
}

export default App;
