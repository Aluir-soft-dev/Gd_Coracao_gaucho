"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardData {
  titulo: string;
  thumb: string;
  imagens: string[];
}

interface CardMeta {
  categoria: string;
  book: string;
  thumb?: string;
}

const cardsFixos: CardData[] = [
  {
    titulo: "Bailes de Formatura",
    thumb: "/images/Foto1.jpg",
    imagens: ["/images/Foto1.jpg", "/images/foto3.png", "/images/foto4.png"],
  },
  {
    titulo: "Aulas",
    thumb: "/images/foto4.png",
    imagens: ["/images/foto4.png"],
  },
  {
    titulo: "Momentos Especiais",
    thumb: "/images/foto3.png",
    imagens: ["/images/foto3.png"],
  },
];

export default function BlogSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fotoIndex, setFotoIndex] = useState(0);
  const [formaturasMeta, setFormaturasMeta] = useState<CardMeta[]>([]);
  const [loadingAlbum, setLoadingAlbum] = useState(false);

  const imagensRef = useRef<string[]>([]);
  const imagensCacheRef = useRef<Map<string, string[]>>(new Map());

  const API =
    "https://billowing-king-cb13.gdcoracaogaucho-comercial.workers.dev";

  const formatarNome = (n: string) =>
    n.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const keyFor = (c: string, b: string) => `${c}|${b}`;

  async function loadAlbum(c: string, b: string) {
    const key = keyFor(c, b);

    if (imagensCacheRef.current.has(key)) {
      imagensRef.current = imagensCacheRef.current.get(key)!;
      return;
    }

    setLoadingAlbum(true);
    try {
      const r = await fetch(`${API}/api/books/${c}/${b}`);
      const imgs: string[] = await r.json();
      imagensRef.current = imgs || [];
      imagensCacheRef.current.set(key, imgs || []);
    } catch {
      imagensRef.current = [];
    } finally {
      setLoadingAlbum(false);
    }
  }

  async function abrirModal(
    imagens?: string[],
    categoria?: string,
    book?: string
  ) {
    if (imagens) imagensRef.current = imagens;
    else if (categoria && book) await loadAlbum(categoria, book);

    setFotoIndex(0);
    setModalOpen(true);
  }

  const fecharModal = () => setModalOpen(false);

  const next = () =>
    setFotoIndex((i) => (i + 1) % imagensRef.current.length);

  const prev = () =>
    setFotoIndex((i) =>
      i === 0 ? imagensRef.current.length - 1 : i - 1
    );

  // trava scroll da página
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    (async () => {
      const r = await fetch(`${API}/api/categorias`);
      const categorias: string[] = await r.json();

      const meta: CardMeta[] = [];

      for (const c of categorias) {
        const rr = await fetch(`${API}/api/books/${c}`);
        const books: string[] = await rr.json();
        books.forEach((b) => meta.push({ categoria: c, book: b }));
      }

      for (const m of meta) {
        try {
          const r = await fetch(`${API}/api/books/${m.categoria}/${m.book}`);
          const imgs: string[] = await r.json();
          m.thumb = imgs?.[0];
        } catch {}
      }

      setFormaturasMeta(meta);
    })();
  }, []);

  return (
    <div className="w-full py-20 px-6">
      <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
        Blog
      </h2>

      {/* ÁLBUNS */}
      <h3 className="text-2xl font-bold text-red-900 text-center mb-8">
        Álbuns de Formatura
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {formaturasMeta.map((m) => (
          <div
            key={`${m.categoria}-${m.book}`}
            onClick={() => abrirModal(undefined, m.categoria, m.book)}
            className="bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center gap-4 hover:scale-105 transition cursor-pointer"
          >
            <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-100">
              {m.thumb && (
                <img
                  src={m.thumb}
                  alt={m.book}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <span className="font-semibold text-center">
              {formatarNome(m.categoria)} — {formatarNome(m.book)}
            </span>

            <button className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition">
              Ver mais
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={fecharModal}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ×
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white text-5xl"
          >
            ❮
          </button>

          <button
            onClick={next}
            className="absolute right-6 text-white text-5xl"
          >
            ❯
          </button>

          <div className="flex flex-col items-center w-full h-full pt-16">
            {/* IMAGEM PRINCIPAL */}
            <div className="relative w-full max-w-[80vw] h-[60vh]">
              {loadingAlbum ? (
                <div className="text-white">Carregando…</div>
              ) : (
                <Image
                  src={imagensRef.current[fotoIndex]}
                  alt=""
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* CONTADOR */}
            <div className="text-white mt-2">
              {fotoIndex + 1} / {imagensRef.current.length}
            </div>

            {/* 🔥 SCROLL HORIZONTAL DE THUMBNAILS */}
            <div className="mt-4 w-full max-w-[90vw] overflow-x-auto">
              <div className="flex gap-3 px-4">
                {imagensRef.current.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setFotoIndex(i)}
                    className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition
                      ${
                        i === fotoIndex
                          ? "border-yellow-400"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
