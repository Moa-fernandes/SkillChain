import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const sponsors = [
    "/firebase.png",
    "/github.png",
    "/netflix.png",
    "/google.png",
    "/logo.png",
    "/skills.png",
    "/petro.png",

  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center relative overflow-hidden text-white">
      {/* Patrocinadores - Lado esquerdo */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-around animate-slide z-0 px-2">
        {sponsors.map((src, idx) => (
          <img
            key={`left-${idx}`}
            src={src}
            alt={`Sponsor ${idx}`}
            className="w-16 sm:w-20 md:w-24 rounded-lg border border-gray-700 shadow-md opacity-70 hover:opacity-100 transition duration-300 hover:scale-105 bg-white p-1"
          />
        ))}
      </div>

      {/* Patrocinadores - Lado direito */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-around animate-slide-reverse z-0 px-2">
        {sponsors.map((src, idx) => (
          <img
            key={`right-${idx}`}
            src={src}
            alt={`Sponsor ${idx}`}
            className="w-16 sm:w-20 md:w-24 rounded-lg border border-gray-700 shadow-md opacity-70 hover:opacity-100 transition duration-300 hover:scale-105 bg-white p-1"
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="z-10 animate-fade-in px-4">
        <img
          src="/skills.png"
          alt="SkillChain Logo"
          className="ml-16 mr-10 w-[200px] sm:w-[300px] md:w-[220px] lg:w-[320px] h-auto mb-4 drop-shadow-2xl rounded-xl"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400">
          SkillChain
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-sans">
        "Uma rede descentralizada de talentos autodidatas e invisíveis, <br></br>
          Conectando habilidades reais com oportunidades reais"
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/empresa")}
            className="bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl hover:bg-green-600 shadow-lg transition text-base sm:text-lg font-semibold"
          >
            Sou Empresa
          </button>
          <button
            onClick={() => navigate("/candidato")}
            className="bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-2xl hover:bg-yellow-500 shadow-lg transition text-base sm:text-lg font-semibold"
          >
            Sou Candidato
          </button>
        </div>
      </div>
    </div>
  );
}
