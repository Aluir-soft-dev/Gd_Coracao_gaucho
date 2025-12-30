import Image from "next/image";
import Link from "next/link";
import YouTubeMusicPlayer from "./components/YouTubeMusicPlayer";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import BtnWhatsapp from "./components/button/BtnWhatsapp";

export default function Home() {
  return (
    <div className="w-full bg-gray-200">

      {/* =====================  HERO COM VÍDEO  ===================== */}
      <div className="relative w-full h-[600px] md:h-[920px] overflow-hidden touch-auto bg-black">

        {/* Vídeo de fundo */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
        >
          <source src="/images/bg3.mp4" type="video/mp4" />
        </video>

        {/* Camada escura */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Conteúdo acima do vídeo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 md:gap-6 text-white px-4">

   <Image
  alt="Logo"
  src="/images/LOGO2.png"
  width={350}
  height={350}
  className="
    rounded-full
    w-[200px] md:w-[350px]
    bg-white/70
    backdrop-blur-sm
    p-3
    shadow-[0_0_50px_rgba(255,255,255,0.55)]
  "
/>


          <p className="text-xl md:text-2xl font-semibold text-center">
            "Quem dança com o coração nunca dança sozinho"
          </p>

          <BtnWhatsapp />
        </div>
      </div>

      {/* =====================  PARCEIROS E APOIADORES  ===================== */}
      <section className="flex flex-col items-center px-4 py-16 md:py-24">

        <div
          className="
            flex flex-col items-center
            p-6 md:p-10
            bg-[#fafafa]
            rounded-2xl
            shadow-2xl
            gap-8
            w-full max-w-5xl
          "
        >
          <h1 className="font-bold text-2xl md:text-4xl text-red-900 text-center">
            Nossos Apoiadores e Parceiros
          </h1>

          <div className="flex items-center justify-center gap-6 md:gap-12 py-6 flex-wrap">

            <Image
              src="/images/patrocinador 1.jpg"
              alt="parceiro1"
              width={200}
              height={200}
              className="rounded-xl shadow-md hover:scale-105 transition-all duration-200 w-[140px] md:w-[200px]"
            />

            <Image
              src="/images/patrocinador4.png"
              alt="parceiro3"
              width={200}
              height={200}
              className="rounded-xl shadow-md hover:scale-105 transition-all duration-200 w-[140px] md:w-[200px]"
            />

            <Image
              src="/images/PATROCINADOR3.png"
              alt="parceiro4"
              width={200}
              height={200}
              className="rounded-xl shadow-md hover:scale-105 transition-all duration-200 w-[140px] md:w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* SAFE AREA iOS */}
      <div className="h-20 md:h-0"></div>

     
    </div>
  );
}
