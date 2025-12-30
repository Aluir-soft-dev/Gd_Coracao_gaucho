import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import Image from "next/image";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Sobre() {
  return (
    <div className="w-full bg-gray-100">

      {/* ESPAÇO PARA HEADER */}
      <div className="pt-12 md:pt-20">

        {/* CONTAINER */}
        <div className="w-full flex justify-center px-4 py-10 md:py-20 ">
          
          {/* CARD */}
          <div
            className="
              bg-[#fafafa]
              rounded-3xl
              shadow-2xl
              p-6 md:p-12
              max-w-6xl
              w-full
              flex flex-col
              gap-10
            "
          >

            {/* TÍTULO */}
            <h1 className="font-bold text-center text-red-900 text-2xl md:text-4xl">
              Sobre o Gd Coração Gaúcho
            </h1>

            {/* ================= BLOCO 1 ================= */}
            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* TEXTO */}
              <div className="md:w-1/2">
                <p className="text-[16px] leading-relaxed text-gray-800 text-justify">
                  Fundado em 2012, o Grupo de Dança Coração Gaúcho nasceu da paixão pela cultura
                  e tradição do Rio Grande do Sul. Ao longo de 13 anos, construímos uma trajetória
                  marcada pelo compromisso em ensinar e preservar os valores gaúchos por meio da dança,
                  unindo técnica, emoção e identidade cultural.
                  Desde seus primeiros passos, o grupo se destacou por transformar cada apresentação
                  em uma experiência única, onde a tradição se encontra com a arte, e cada coreografia
                  conta uma história de orgulho e pertencimento.
                  Mais do que dançarinos, somos guardiões da cultura gaúcha, levando nosso trabalho a
                  escolas, eventos comunitários, festivais e competições, sempre com entusiasmo e dedicação.
                  Nossa missão é clara: manter viva a essência da tradição gaúcha, formar cidadãos
                  conscientes de suas raízes e inspirar novas gerações.
                </p>
              </div>

              {/* IMAGEM */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="foto sobre"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-xl w-full max-w-[480px] h-auto"
                />
              </div>
            </div>

            {/* ================= BLOCO 2 ================= */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">

              {/* TEXTO */}
              <div className="md:w-1/2">
                <p className="text-[16px] leading-relaxed text-gray-800 text-justify">
                  O Professor Alan de Abreu e sua esposa Eliane são o coração por trás do Grupo
                  de Dança Coração Gaúcho. Juntos, eles construíram uma trajetória de dedicação,
                  amor e compromisso com a tradição gaúcha, transformando a dança em uma verdadeira
                  expressão cultural.
                  Desde o início, Alan trouxe sua experiência e paixão pelo ensino, guiando os passos
                  de cada aluno com paciência, técnica e sensibilidade. Eliane, ao seu lado, soma apoio,
                  carinho e inspiração, tornando cada ensaio momentos de união e fortalecimento.
                  A parceria deles vai além da dança: é um compromisso com a preservação da cultura,
                  com a formação de novas gerações e com a transmissão dos valores gaúchos.
                </p>
              </div>

              {/* IMAGEM */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/Foto_sobre_1.jpg"
                  alt="foto sobre"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-xl w-full max-w-[480px] h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
