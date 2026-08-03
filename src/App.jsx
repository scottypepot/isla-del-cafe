import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Menu from "./components/pages/Menu.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      {/* /about and /contact routes go here once those pages exist */}
    </Routes>
  );
}

export default App;
