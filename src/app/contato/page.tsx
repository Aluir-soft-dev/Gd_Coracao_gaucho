"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Contato() {

    // Estados do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cidade, setCidade] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [erro, setErro] = useState("");

    // Monta a mensagem final
    const mensagemFinal = `
Olá! Quero fazer contato pelo site do Coração Gaúcho.

👤 Nome: ${nome}
📧 E-mail: ${email}
📱 Telefone: ${telefone}
📍 Cidade/Estado: ${cidade}

💬 Mensagem:
${mensagem}

Aguardo retorno 🙂
`;

    // Função de envio
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Validando campos
        if (!nome || !email || !telefone || !cidade || !mensagem) {
            setErro("Preencha todos os campos antes de enviar.");
            setTimeout(() => setErro(""), 3000);
            return;
        }

        // WhatsApp
        const url = `https://wa.me/5548992210952?text=${encodeURIComponent(mensagemFinal)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="w-full min-h-screen flex flex-col mt-22 bg-gray-100">

           

            {/* CONTEÚDO */}
            <div
                id="Contato"
                className="flex-1 w-full flex flex-col justify-center items-center px-6 md:px-20 py-16 gap-16"
            >

                {/* TÍTULO */}
                <h1 className="text-3xl md:text-5xl font-bold text-red-900 text-center">
                    Fale Conosco
                </h1>

                {/* DUAS COLUNAS */}
                <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20">

                    {/* COLUNA ESQUERDA */}
                    <div
                        className="
                        bg-white 
                        shadow-xl 
                        rounded-2xl 
                        p-6 md:p-8 
                        max-w-xl 
                        flex flex-col 
                        items-center 
                        text-center 
                        gap-4
                    "
                    >
                        <Image
                            src="/images/LOGO2.png"
                            alt="Logo Grupo Coração Gaúcho"
                            width={200}
                            height={200}
                            className="rounded-full w-[150px] md:w-[200px] h-auto"
                        />

                        <p className="text-gray-800 text-sm md:text-lg leading-relaxed font-medium">
                            Quer fazer parte dessa história que pulsa tradição e emoção? <br /><br />
                            Entre em contato com o <strong>Gd Coração Gaúcho</strong> e venha viver a
                            experiência de dançar com alma, aprender com carinho e celebrar a cultura
                            gaúcha com muito coração! <br /><br />
                            <span className="text-red-900 font-semibold">
                                Fale conosco agora mesmo — tire suas dúvidas, garanta sua vaga ou agende
                                uma apresentação.
                            </span>
                        </p>

                        <p className="text-gray-900 text-base md:text-lg font-semibold leading-relaxed">
                            📞 Telefone / WhatsApp:{" "}
                            <span className="font-bold">(48) 99221-0952</span> <br />
                            📧 E-mail:{" "}
                            <span className="font-bold">contato@coracaogaucho.com.br</span>
                        </p>

                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/gdcoracaogaucho"
                                target="_blank"
                                className="p-2 rounded-full hover:bg-yellow-300 transition-all duration-200"
                            >
                                <Image src="/logos_pretas/instagram_preta.svg" width={32} height={32} alt="Instagram" />
                            </a>

                            <a
                                href="https://www.facebook.com/gdcoracaogaucho"
                                target="_blank"
                                className="p-2 rounded-full hover:bg-yellow-300 transition-all duration-200"
                            >
                                <Image src="/logos_pretas/facebook_preta.svg" width={32} height={32} alt="Facebook" />
                            </a>

                            <a
                                href="https://www.youtube.com/@nossoscaminhos_gdcoracaogaucho"
                                target="_blank"
                                className="p-2 rounded-full hover:bg-yellow-300 transition-all duration-200"
                            >
                                <Image src="/logos_pretas/youtube_preto.svg" width={32} height={32} alt="Youtube" />
                            </a>
                        </div>

                    </div>

                    {/* COLUNA DIREITA — FORMULÁRIO */}
                    <div
                        className="
                        bg-white 
                        rounded-2xl 
                        shadow-xl 
                        p-6 md:p-10 
                        w-full 
                        max-w-xl 
                        flex flex-col 
                        items-center 
                        text-center
                    "
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">

                            {/* ERRO */}
                            {erro && (
                                <div className="text-red-600 text-sm font-semibold bg-red-100 border border-red-300 px-4 py-2 rounded-lg">
                                    {erro}
                                </div>
                            )}

                            <div className="flex flex-col gap-1 w-full">
                                <label className="font-semibold">Nome</label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Seu nome completo"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label className="font-semibold">E-mail</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="seuemail@exemplo.com"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label className="font-semibold">Telefone</label>
                                <input
                                    type="tel"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    placeholder="(48) 99999-9999"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label className="font-semibold">Cidade / Estado</label>
                                <input
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    placeholder="Porto Alegre / RS"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label className="font-semibold">Mensagem</label>
                                <textarea
                                    rows={4}
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                    placeholder="Escreva sua mensagem"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none resize-none"
                                />
                            </div>

                            {/* BOTÃO WHATSAPP */}
                            <button
                                type="submit"
                                className="
                                    mt-4 bg-green-600 text-white py-3 
                                    rounded-xl font-bold flex items-center 
                                    justify-center gap-3 hover:bg-green-700 transition
                                    w-52 md:w-60
                                "
                            >
                                <Image src="/logos_brancas/whatsapp_branca.svg" alt="whatsapp" width={22} height={22} />
                                Enviar via WhatsApp
                            </button>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
}
