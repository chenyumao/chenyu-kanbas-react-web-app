import React from 'react';
import Labs from "./Labs";
import './App.css';
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;