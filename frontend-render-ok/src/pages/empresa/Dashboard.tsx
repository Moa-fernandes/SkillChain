import React from "react";
import { useNavigate } from "react-router-dom";


export default function EmpresaDashboard() {
        const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
            <header className="flex items-center justify-between mb-10 border-b pb-4">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-12" />
                    <h1 className="text-3xl font-bold text-green-700">SkillChain • Empresa</h1>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Sair
                </button>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bloco 1: Cadastrar vaga */}
                <section className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">Nova Vaga</h2>
                    <p className="text-gray-600 mb-4">Crie uma vaga e adicione testes personalizados.</p>
                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        + Criar Vaga
                    </button>
                </section>

                {/* Bloco 2: Gerenciar testes */}
                <section className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">Testes Criados</h2>
                    <p className="text-gray-600 mb-4">Veja os testes e edite perguntas e respostas.</p>
                    <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                        Ver Testes
                    </button>
                </section>

                {/* Bloco 3: Ver candidatos */}
                <section className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-blue-600 mb-2">Candidatos</h2>
                    <p className="text-gray-600 mb-4">Acompanhe os candidatos que responderam seus testes.</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Ver Candidatos
                    </button>
                </section>
            </main>

            <footer className="mt-12 text-center text-sm text-gray-500">
                SkillChain © 2025 — Conectando talentos invisíveis com oportunidades reais.
            </footer>
        </div>
    );
}
