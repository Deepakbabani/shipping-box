import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import { BoxProvider, useBoxes } from "./context/BoxContext";

function AppContent() {
  const { boxes, addBox } = useBoxes();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form onAddBox={addBox} />} />
        <Route path="/list" element={<Table boxes={boxes} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BoxProvider>
      <Router>
        <AppContent />
      </Router>
    </BoxProvider>
  );
}

export default App;

