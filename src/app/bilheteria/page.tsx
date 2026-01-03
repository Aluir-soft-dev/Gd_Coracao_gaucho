import Image from "next/image";
import Link from "next/link";

export default function CoracaoGauchoPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20">

      {/* ESPAÇAMENTO PARA HEADER */}
      <div className="pt-32 md:pt-40 flex items-center justify-center mb-20">

        {/* CARD CENTRAL */}
        <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-16 md:p-20 flex flex-col items-center text-center gap-6">
          
          {/* LOGO */}
          <div className="relative w-48 h-48">
            <Image
              src="/images/LOGO2.png"
              alt="Grupo de Danças Coração Gaúcho"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* TÍTULO */}
          <h1 className="text-2xl font-bold text-red-900">
            Página em Construção
          </h1>

          {/* TEXTO */}
          <p className="text-gray-600 leading-relaxed">
            Esta área do site do <strong>Grupo de Danças Coração Gaúcho</strong>{" "}
            ainda está em desenvolvimento.
            <br />
            <br />
            Em breve traremos novidades, conteúdos especiais e muito mais para
            você acompanhar de perto a nossa história e nossas apresentações.
          </p>

          {/* BOTÃO VOLTAR */}
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center bg-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-800 transition"
          >
            Voltar para a página principal
          </Link>

        </div>
      </div>
    </div>
  );
}
