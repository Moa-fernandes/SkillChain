import React from "react";
import { useNavigate } from "react-router-dom";

export default function CandidatoTestes() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-gray-800 p-6 font-sans">
            <header className="flex justify-between items-center mb-10 border-b pb-4">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-12" />
                    <h1 className="text-3xl font-bold text-green-700">SkillChain • Candidato</h1>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Sair
                </button>
            </header>

            <main className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">Testes Disponíveis</h2>
                <p className="text-gray-600 mb-6">
                    Você foi convidado para responder aos testes das vagas que se candidatou.
                </p>

                <ul className="space-y-4">
                    <li className="bg-white p-4 rounded shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold">Frontend React Pleno</h3>
                        <p className="text-sm text-gray-500 mb-2">Empresa: DevCompany</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                            Iniciar Teste
                        </button>
                    </li>

                    <li className="bg-white p-4 rounded shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold">Node.js Backend Junior</h3>
                        <p className="text-sm text-gray-500 mb-2">Empresa: BackWorks</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                            Iniciar Teste
                        </button>
                    </li>

                    {/* Adicione + testes dinamicamente depois */}
                </ul>
            </main>

            <footer className="mt-12 text-center text-sm text-gray-500">
                SkillChain © 2025 — Oportunidades reais para talentos reais.
            </footer>
        </div>
    );
}
