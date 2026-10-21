
"use client";

import { useState } from "react";
import { latinToAksara } from "@/lib/aksaraJawa";
import {
  translateToJavanese,
  type JavaneseLevel,
  type SourceLanguage,
} from "@/lib/translator";

const ui = {
  id: {
    tagline: "Terjemahan Bahasa Jawa & Aksara Jawa",
    badge: "Aksara Jawa",
    source: "Bahasa sumber",
    level: "Tingkat Bahasa Jawa",
    input: "Masukkan kalimat",
    placeholder: "Contoh: Saya pergi ke pasar",
    translate: "Terjemahkan",
    meaning: "Arti Bahasa Jawa",
    script: "Aksara Jawa",
    copy: "Salin",
    copied: "Tersalin ✓",
    empty: "Silakan masukkan kalimat terlebih dahulu.",
    unsupported:
      "Terjemahan English dan Mandarin belum tersedia. Silakan pilih Indonesia.",
    copyError: "Gagal menyalin. Silakan salin teks secara manual.",
    levels: {
      ngoko: "Ngoko",
      krama: "Krama",
      "krama-inggil": "Krama Inggil",
    },
    footer: "SpeakJawa — Bahasa Jawa dan Aksara Jawa",
  },

  en: {
    tagline: "Javanese Translation & Javanese Script",
    badge: "Javanese Script",
    source: "Source language",
    level: "Javanese speech level",
    input: "Enter your sentence",
    placeholder: "Example: I am going to the market",
    translate: "Translate",
    meaning: "Javanese Translation",
    script: "Javanese Script",
    copy: "Copy",
    copied: "Copied ✓",
    empty: "Please enter a sentence first.",
    unsupported:
      "English-to-Javanese translation is not available yet. Please select Indonesian.",
    copyError: "Copy failed. Please copy the text manually.",
    levels: {
      ngoko: "Ngoko (informal)",
      krama: "Krama (polite)",
      "krama-inggil": "Krama Inggil (honorific)",
    },
    footer: "SpeakJawa — Javanese Language and Script",
  },

  zh: {
    tagline: "爪哇语翻译与爪哇文字",
    badge: "爪哇文字",
    source: "源语言",
    level: "爪哇语等级",
    input: "请输入句子",
    placeholder: "例如：我去市场",
    translate: "翻译",
    meaning: "爪哇语翻译结果",
    script: "爪哇文字",
    copy: "复制",
    copied: "已复制 ✓",
    empty: "请先输入句子。",
    unsupported:
      "目前尚不支持英语和中文翻译，请选择印度尼西亚语。",
    copyError: "复制失败，请手动复制文本。",
    levels: {
      ngoko: "Ngoko（非正式）",
      krama: "Krama（礼貌）",
      "krama-inggil": "Krama Inggil（敬语）",
    },
    footer: "SpeakJawa — 爪哇语与爪哇文字",
  },
};

export default function Home() {
  const [text, setText] = useState("");
  const [level, setLevel] = useState<JavaneseLevel>("krama");
  const [sourceLanguage, setSourceLanguage] =
    useState<SourceLanguage>("id");
  const [javanese, setJavanese] = useState("");
  const [aksara, setAksara] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const t = ui[sourceLanguage];

  function handleSourceLanguageChange(
    language: SourceLanguage
  ) {
    setSourceLanguage(language);
    setJavanese("");
    setAksara("");
    setError("");
    setCopied(false);
  }

  
function translate() {
  setError("");
  setCopied(false);

  if (!text.trim()) {
    setJavanese("");
    setAksara("");
    setError(t.empty);
    return;
  }

  try {
    // Tahap 1: Terjemahkan sesuai bahasa sumber yang dipilih.
    const result = translateToJavanese(
      text,
      level,
      sourceLanguage
    );

    if (!result.trim()) {
      setJavanese("");
      setAksara("");
      setError(t.empty);
      return;
    }

    // Tahap 2: Konversi hasil Jawa Latin ke Aksara Jawa.
    const aksaraResult = latinToAksara(result);

    setJavanese(result);
    setAksara(aksaraResult);
  } catch (err) {
    console.error("Translation error:", err);
    setJavanese("");
    setAksara("");
    setError("Terjadi kesalahan saat menerjemahkan.");
  }
}

  async function copyAksara() {
    if (!aksara) return;

    try {
      await navigator.clipboard.writeText(aksara);
      setCopied(true);
    } catch {
      setError(t.copyError);
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Speak<span className="text-red-600">Jawa</span>
            </h1>

            <p className="text-sm text-slate-500">
              {t.tagline}
            </p>
          </div>

          <div className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
            {t.badge}
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        {/* Input Card */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Source Language */}
            <div>
              <label
                htmlFor="source-language"
                className="mb-1 block text-sm font-semibold"
              >
                {t.source}
              </label>

              <select
                id="source-language"
                value={sourceLanguage}
                onChange={(e) =>
                  handleSourceLanguageChange(
                    e.target.value as SourceLanguage
                  )
                }
                className="rounded-lg border bg-white px-4 py-2 text-sm outline-none focus:border-red-500"
              >
                <option value="id">Indonesia</option>
                <option value="en">English</option>
                <option value="zh">中文（普通话）</option>
              </select>
            </div>

            {/* Javanese Level */}
            <div>
              <label
                htmlFor="javanese-level"
                className="mb-1 block text-sm font-semibold"
              >
                {t.level}
              </label>

              <select
                id="javanese-level"
                value={level}
                onChange={(e) =>
                  setLevel(e.target.value as JavaneseLevel)
                }
                className="rounded-lg border bg-white px-4 py-2 text-sm outline-none focus:border-red-500"
              >
                <option value="ngoko">
                  {t.levels.ngoko}
                </option>
                <option value="krama">
                  {t.levels.krama}
                </option>
                <option value="krama-inggil">
                  {t.levels["krama-inggil"]}
                </option>
              </select>
            </div>
          </div>

          {/* Input */}
          <label
            htmlFor="source-text"
            className="mb-2 block text-sm font-semibold"
          >
            {t.input}
          </label>

          <textarea
            id="source-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.placeholder}
            rows={3}
            className="w-full resize-none rounded-xl border p-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
          />

          {error && (
            <p
              role="alert"
              className="mt-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          {/* Translate Button */}
          <button
            onClick={translate}
            className="mt-4 w-full rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.99]"
          >
            {t.translate}
          </button>
        </div>

        {/* Results */}
        {(javanese || aksara) && (
          <div className="mt-6 space-y-5">
            {/* Javanese Translation */}
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-700">
                {t.meaning}
              </h2>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="whitespace-pre-wrap text-lg leading-relaxed">
                  {javanese}
                </p>
              </div>
            </div>

            {/* Javanese Script */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-700">
                  {t.script}
                </h2>

                <button
                  onClick={copyAksara}
                  disabled={!aksara}
                  className="rounded-lg border bg-white px-3 py-1.5 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-50"
                >
                  {copied ? t.copied : t.copy}
                </button>
              </div>

              <div className="min-h-32 rounded-2xl border bg-white p-6 shadow-sm">
                <p className="break-words whitespace-pre-wrap text-center text-3xl leading-loose">
                  {aksara}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          {t.footer}
        </p>
      </section>
    </main>
  );
}
