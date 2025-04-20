import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from '../pages/Calculator'; // ✅ Yeh line change karo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />        {/* ✅ Root route */}
        <Route path="/Calculator" element={<Calculator />} /> {/* Optional route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
