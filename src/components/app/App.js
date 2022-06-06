import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
