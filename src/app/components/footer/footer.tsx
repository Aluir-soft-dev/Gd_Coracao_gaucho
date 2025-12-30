"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="
      w-full 
      bg-[url('/images/bg5.png')] 
      bg-cover bg-center
      py-10 
      flex flex-col items-center gap-6
      text-white
    ">
      {/* BOTÃO VOLTAR AO TOPO */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          flex items-center gap-3
          bg-yellow-400 hover:bg-yellow-500
          text-yellow-900 font-semibold
          px-6 py-2
          rounded-full
          shadow-lg
          transition-all duration-200
        "
      >
        <Image
          alt="Voltar ao topo"
          src="/logos_brancas/up_branco.png"
          width={25}
          height={25}
          quality={100}
          className="opacity-90"
        />
        Voltar ao Topo
      </button>

      {/* TEXTO FINAL */}
      <p className="text-center text-sm md:text-base font-semibold drop-shadow-lg">
        Desenvolvido por <span className="font-extrabold">Gardsoft</span> © 2025
      </p>
    </footer>
  );
}
