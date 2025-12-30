"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const socials = [
    {
      href: "https://www.instagram.com/gdcoracaogaucho",
      src: "/logos_pretas/instagram_preta.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com/gdcoracaogaucho",
      src: "/logos_pretas/facebook_preta.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.youtube.com/@nossoscaminhos_gdcoracaogaucho",
      src: "/logos_pretas/youtube_preto.svg",
      alt: "Youtube",
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 overflow-hidden text-white">
      {/* FUNDO COM BANDEIRA */}
      <div className="absolute inset-0 bg-[url('/images/bg5.png')] bg-center bg-cover pointer-events-none" />

      {/* ================= MOBILE HEADER ================= */}
      <div className="relative md:hidden flex justify-between items-center px-5 py-3">
        {/* MENU */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl hover:text-yellow-400 transition"
        >
          ☰
        </button>

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>

        {/* SOCIAL MOBILE */}
        <div className="flex gap-2">
          {socials.map((item) => (
            <a
              key={item.alt}
              href={item.href}
              target="_blank"
              className="group w-12 h-12 flex items-center justify-center"
            >
              <Image
                src={item.src}
                width={24}
                height={24}
                alt={item.alt}
                className="invert brightness-200 transition group-hover:invert-0 group-hover:brightness-100"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP HEADER ================= */}
      <div className="relative hidden md:flex items-center justify-between px-10 py-3 max-w-7xl mx-auto">
        {/* LOGO */}
        <Link href="/" className="rounded-full bg-white p-1">
          <Image
            src="/images/Logo.jpg"
            width={56}
            height={56}
            alt="Logo"
            className="rounded-full"
          />
        </Link>

        {/* NAV */}
        <nav className="flex gap-7 text-xs uppercase tracking-wide">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/sobre" className="hover:text-yellow-400 transition">Sobre</Link>
          <Link href="/curso" className="hover:text-yellow-400 transition">Curso</Link>
          <Link href="/slides" className="hover:text-yellow-400 transition">Blog</Link>
          <Link href="/contato" className="hover:text-yellow-400 transition">Contato</Link>
        </nav>

        {/* CTA + SOCIAL */}
        <div className="flex items-center gap-3">
          <Link
            href="/bilheteria"
            className="px-6 py-2 rounded-full text-sm font-semibold text-black bg-white/90 border border-white shadow-md transition-all hover:bg-yellow-400 hover:border-yellow-400"
          >
            Ingressos
          </Link>

          <Link
            href="/loja"
            className="px-6 py-2 rounded-full text-sm font-semibold text-black bg-white/90 border border-white shadow-md transition-all hover:bg-yellow-400 hover:border-yellow-400"
          >
            Loja
          </Link>

          <div className="flex gap-2 pl-4 ml-2 border-l border-white">
            {socials.map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                className="group w-12 h-12 flex items-center justify-center"
              >
                <Image
                  src={item.src}
                  width={24}
                  height={24}
                  alt={item.alt}
                  className="invert brightness-200 transition group-hover:invert-0 group-hover:brightness-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex text-white">
          <aside className="w-72 bg-neutral-900 p-6 relative">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl hover:text-yellow-400 transition"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-5 mt-10 text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
              <Link href="/curso" onClick={() => setMenuOpen(false)}>Curso</Link>
              <Link href="/slides" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            </nav>

            <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-col gap-3 text-sm">
              <Link href="/bilheteria" onClick={() => setMenuOpen(false)}>Ingressos</Link>
              <Link href="/loja" onClick={() => setMenuOpen(false)}>Loja</Link>
            </div>
          </aside>

          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
