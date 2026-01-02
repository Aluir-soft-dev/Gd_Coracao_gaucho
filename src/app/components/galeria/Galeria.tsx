"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AlbumMap {
  [categoria: string]: {
    [book: string]: string[];
  };
}

interface CardMeta {
  categoria: string;
  book: string;
  imagens: string[];
  thumb?: string;
}

export default function BlogSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fotoIndex, setFotoIndex] = useState(0);
  const [albuns, setAlbuns] = useState<CardMeta[]>([]);
  const [loading, setLoading] = useState(true);

  const imagensRef = useRef<string[]>([]);

  const API =
    "https://billowing-king-cb13.gdcoracaogaucho-comercial.workers.dev";

  const formatarNome = (n: string) =>
    n.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // ==========================
  // CARREGAR MAPA COMPLETO
  // ==========================
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API}/api/mapa`);
        const mapa: AlbumMap = await r.json();

        const cards: CardMeta[] = [];

        Object.entries(mapa).forEach(([categoria, books]) => {
          Object.entries(books).forEach(([book, imagens]) => {
            cards.push({
              categoria,
              book,
              imagens,
              thumb: imagens?.[0],
            });
          });
        });

        setAlbuns(cards);
      } catch (e) {
        console.error("Erro ao carregar álbuns", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // ==========================
  // MODAL
  // ==========================
  function abrirModal(imagens: string[]) {
    imagensRef.current = imagens;
    setFotoIndex(0);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
  }

  const next = () =>
    setFotoIndex((i) => (i + 1) % imagensRef.current.length);

  const prev = () =>
    setFotoIndex((i) =>
      i === 0 ? imagensRef.current.length - 1 : i - 1
    );

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // ==========================
  // RENDER
  // ==========================
  return (
    <div className="w-full py-20 px-6">
      <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
        Blog
      </h2>

      <h3 className="text-2xl font-bold text-red-900 text-center mb-8">
        Álbuns de Formatura
      </h3>

      {loading && (
        <p className="text-center text-gray-500">Carregando álbuns…</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {albuns.map((m) => (
          <div
            key={`${m.categoria}-${m.book}`}
            onClick={() => abrirModal(m.imagens)}
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

      {/* ================= MODAL ================= */}
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
            <div className="relative w-full max-w-[80vw] h-[60vh]">
              <Image
                src={imagensRef.current[fotoIndex] || ""}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="text-white mt-2">
              {fotoIndex + 1} / {imagensRef.current.length}
            </div>

            <div className="mt-4 w-full max-w-[90vw] overflow-x-auto">
              <div className="flex gap-3 px-4">
                {imagensRef.current.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setFotoIndex(i)}
                    className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      i === fotoIndex
                        ? "border-yellow-400"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
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
