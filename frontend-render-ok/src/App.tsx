import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmpresaDashboard from "./pages/empresa/Dashboard";
import CandidatoTestes from "./pages/candidato/Testes";
import TestarVaga from "./pages/candidato/TestarVaga";


export default function App() {
  console.log("App carregado");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<EmpresaDashboard />} />
        <Route path="/candidato" element={<CandidatoTestes />} />
        <Route path="/candidato/:vagaId" element={<TestarVaga />} />

      </Routes>
    </BrowserRouter>
  );
}
