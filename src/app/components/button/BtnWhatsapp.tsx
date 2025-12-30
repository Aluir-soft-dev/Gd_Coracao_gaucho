"use client";

import Image from "next/image";

type ButtonSize = "sm" | "md" | "lg";

interface WhatsappButtonProps {
  text?: string;
  message?: string;
  size?: ButtonSize;
}

export default function WhatsappButton({
  text = "Fale conosco",
  message = "Olá! Tenho interesse em saber mais sobre o Curso de Danças Coração Gaúcho!",
  size = "md",
}: WhatsappButtonProps) {

  const phone = "5548992210952";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const sizes: Record<ButtonSize, string> = {
    sm: "w-40 h-10",
    md: "w-52 md:w-60 h-10 md:h-12",
    lg: "w-64 h-14",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        bg-green-500 hover:bg-green-600 
        text-white 
        flex items-center justify-center 
        rounded-2xl gap-3 transition font-bold
        ${sizes[size]}
      `}
    >
      <Image
        src="/logos_brancas/whatsapp_branca.svg"
        alt="whatsapp"
        width={22}
        height={22}
      />
      {text}
    </a>
  );
}
