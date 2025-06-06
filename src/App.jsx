import { Routes, Route } from "react-router-dom";
import ServiceApp from "./components/ServiceApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ServiceApp />} />
      <Route path="/:product" element={<ServiceApp />} />
      <Route path="/:product/:problem" element={<ServiceApp />} />
    </Routes>
  );
}

export default App;
