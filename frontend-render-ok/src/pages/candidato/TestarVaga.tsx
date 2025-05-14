import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TestarVaga() {
    const { vagaId } = useParams();
    const navigate = useNavigate();

    const [testes, setTestes] = useState([]);
    const [respostas, setRespostas] = useState<string[]>([]);
    const [enviado, setEnviado] = useState(false);
    const [resultado, setResultado] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/empresa/teste?vaga_id=${vagaId}`)
            .then((res) => {
                setTestes(res.data);
                setRespostas(new Array(res.data.length).fill(""));
            });
    }, [vagaId]);

    const handleResposta = (index: number, value: string) => {
        const novas = [...respostas];
        novas[index] = value;
        setRespostas(novas);
    };

    const enviar = async () => {
        const payload = {
            user_id: 1, // fixo por enquanto
            respostas: testes.map((teste: any, i: number) => ({
                teste_id: teste.id,
                resposta: respostas[i],
            })),
        };

        const r = await axios.post("http://localhost:8000/respostas/", payload);
        setResultado(r.data);
        setEnviado(true);
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-2xl font-bold mb-6 text-green-700">Testes da Vaga #{vagaId}</h1>

            {testes.length > 0 ? (
                <form className="space-y-6">
                    {testes.map((teste: any, index) => (
                        <div key={teste.id} className="bg-gray-100 p-4 rounded shadow">
                            <label className="block font-semibold mb-2">Pergunta {index + 1}:</label>
                            <p className="mb-2 text-gray-700">{teste.pergunta}</p>
                            <input
                                type="text"
                                value={respostas[index]}
                                onChange={(e) => handleResposta(index, e.target.value)}
                                className="w-full border px-3 py-2 rounded"
                                disabled={enviado}
                            />
                        </div>
                    ))}

                    {!enviado ? (
                        <button
                            type="button"
                            onClick={enviar}
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                        >
                            Enviar Respostas
                        </button>
                    ) : (
                        <div className="text-xl font-bold text-blue-600 mt-4">
                            Pontuação: {resultado?.pontuacao}
                        </div>
                    )}
                </form>
            ) : (
                <p>Carregando perguntas...</p>
            )}

            <button
                className="mt-8 text-sm text-red-500 underline"
                onClick={() => navigate("/")}
            >
                Voltar para Home
            </button>
        </div>
    );
}
