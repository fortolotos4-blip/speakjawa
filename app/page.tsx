
"use client";

import { useState } from "react";
import {
  latinToAksara,
  aksaraToLatin,
} from "@/lib/aksaraJawa";

import {
  translateToJavanese,
  translateJavaneseToLanguage,
  type JavaneseLevel,
  type SourceLanguage,
} from "@/lib/translator";

type TranslationMode = "toJavanese" | "fromAksara";

const ui = {
  id: {
    tagline: "Terjemahan Bahasa Jawa & Aksara Jawa",
    badge: "Aksara Jawa",
    mode: "Mode terjemahan",
    forward: "Ke Bahasa Jawa",
    reverse: "Dari Aksara Jawa",
    source: "Bahasa sumber",
    target: "Bahasa tujuan",
    level: "Tingkat Bahasa Jawa",
    input: "Masukkan kalimat",
    inputAksara: "Masukkan Aksara Jawa",
    placeholder: "Contoh: Saya pergi ke pasar",
    placeholderAksara: "Contoh: ꦱꦪ ꦩꦔꦤ꧀",
    translate: "Terjemahkan",
    meaning: "Hasil terjemahan Bahasa Jawa",
    latin: "Transliterasi Latin",
    script: "Aksara Jawa",
    targetMeaning: "Arti terjemahan",
    copy: "Salin hasil",
    copied: "Tersalin ✓",
    empty: "Silakan masukkan teks terlebih dahulu.",
    copyError: "Gagal menyalin. Silakan salin teks secara manual.",
    error: "Terjadi kesalahan saat menerjemahkan.",
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
    mode: "Translation mode",
    forward: "Translate to Javanese",
    reverse: "Translate from Javanese Script",
    source: "Source language",
    target: "Target language",
    level: "Javanese speech level",
    input: "Enter your sentence",
    inputAksara: "Enter Javanese script",
    placeholder: "Example: I am going to the market",
    placeholderAksara: "Example: ꦱꦪ ꦩꦔꦤ꧀",
    translate: "Translate",
    meaning: "Javanese translation",
    latin: "Latin transliteration",
    script: "Javanese script",
    targetMeaning: "Translated meaning",
    copy: "Copy result",
    copied: "Copied ✓",
    empty: "Please enter some text first.",
    copyError: "Copy failed. Please copy the text manually.",
    error: "An error occurred during translation.",
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
    mode: "翻译模式",
    forward: "翻译成爪哇语",
    reverse: "从爪哇文字翻译",
    source: "源语言",
    target: "目标语言",
    level: "爪哇语等级",
    input: "请输入句子",
    inputAksara: "请输入爪哇文字",
    placeholder: "例如：我去市场",
    placeholderAksara: "例如：ꦱꦪ ꦩꦔꦤ꧀",
    translate: "翻译",
    meaning: "爪哇语翻译结果",
    latin: "拉丁字母转写",
    script: "爪哇文字",
    targetMeaning: "翻译含义",
    copy: "复制结果",
    copied: "已复制 ✓",
    empty: "请先输入文本。",
    copyError: "复制失败，请手动复制文本。",
    error: "翻译过程中发生错误。",
    levels: {
      ngoko: "Ngoko（非正式）",
      krama: "Krama（礼貌）",
      "krama-inggil": "Krama Inggil（敬语）",
    },
    footer: "SpeakJawa — 爪哇语与爪哇文字",
  },
};

export default function Home() {
  const [mode, setMode] =
    useState<TranslationMode>("toJavanese");

  const [text, setText] = useState("");
  const [level, setLevel] =
    useState<JavaneseLevel>("krama");

  const [sourceLanguage, setSourceLanguage] =
    useState<SourceLanguage>("id");

  const [javanese, setJavanese] = useState("");
  const [aksara, setAksara] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const t = ui[sourceLanguage];

  function clearResults() {
    setJavanese("");
    setAksara("");
    setError("");
    setCopied(false);
  }

  function changeMode(nextMode: TranslationMode) {
    setMode(nextMode);
    setText("");
    clearResults();
  }

  function handleLanguageChange(
    language: SourceLanguage
  ) {
    setSourceLanguage(language);
    clearResults();
  }

  function translate() {
    clearResults();

    if (!text.trim()) {
      setError(t.empty);
      return;
    }

    try {
      if (mode === "toJavanese") {
        // Mode 1:
        // Bahasa sumber -> Bahasa Jawa Latin -> Aksara Jawa.

        const result = translateToJavanese(
          text,
          level,
          sourceLanguage
        );

        if (!result.trim()) {
          setError(t.empty);
          return;
        }

        const aksaraResult = latinToAksara(result);

        setJavanese(result);
        setAksara(aksaraResult);
      } else {
        // Mode 2:
        // Aksara Jawa -> Latin -> bahasa tujuan.

        const latinResult = aksaraToLatin(text);

        if (!latinResult.trim()) {
          setError(t.empty);
          return;
        }

        const translatedResult =
          translateJavaneseToLanguage(
            latinResult,
            level,
            sourceLanguage
          );

        setJavanese(latinResult);
        setAksara(translatedResult);
      }
    } catch (err) {
      console.error("Translation error:", err);
      setJavanese("");
      setAksara("");
      setError(t.error);
    }
  }

  async function copyResult() {
    if (!aksara) return;

    try {
      await navigator.clipboard.writeText(aksara);
      setCopied(true);
    } catch {
      setError(t.copyError);
      setCopied(false);
    }
  }

  const firstResultLabel =
    mode === "toJavanese" ? t.meaning : t.latin;

  const secondResultLabel =
    mode === "toJavanese" ? t.script : t.targetMeaning;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5">
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

      <section className="mx-auto max-w-5xl px-5 py-10">
        {/* Input Card */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          {/* Translation Mode */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              {t.mode}
            </label>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => changeMode("toJavanese")}
                aria-pressed={mode === "toJavanese"}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  mode === "toJavanese"
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t.forward}
              </button>

              <button
                type="button"
                onClick={() => changeMode("fromAksara")}
                aria-pressed={mode === "fromAksara"}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  mode === "fromAksara"
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t.reverse}
              </button>
            </div>
          </div>

          {/* Language and Level */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1">
              <label
                htmlFor="source-language"
                className="mb-1 block text-sm font-semibold"
              >
                {mode === "toJavanese" ? t.source : t.target}
              </label>

              <select
                id="source-language"
                value={sourceLanguage}
                onChange={(e) =>
                  handleLanguageChange(
                    e.target.value as SourceLanguage
                  )
                }
                className="w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:border-red-500"
              >
                <option value="id">Indonesia</option>
                <option value="en">English</option>
                <option value="zh">中文（普通话）</option>
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="javanese-level"
                className="mb-1 block text-sm font-semibold"
              >
                {t.level}
              </label>

              <select
                id="javanese-level"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value as JavaneseLevel);
                  clearResults();
                }}
                className="w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:border-red-500"
              >
                <option value="ngoko">{t.levels.ngoko}</option>
                <option value="krama">{t.levels.krama}</option>
                <option value="krama-inggil">
                  {t.levels["krama-inggil"]}
                </option>
              </select>
            </div>
          </div>

          {/* Text Input */}
          <label
            htmlFor="source-text"
            className="mb-2 block text-sm font-semibold"
          >
            {mode === "toJavanese" ? t.input : t.inputAksara}
          </label>

          <textarea
            id="source-text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              clearResults();
            }}
            placeholder={
              mode === "toJavanese"
                ? t.placeholder
                : t.placeholderAksara
            }
            rows={4}
            className={`w-full resize-y rounded-xl border p-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 ${
              mode === "fromAksara"
                ? "text-2xl leading-loose"
                : ""
            }`}
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
            type="button"
            onClick={translate}
            className="mt-4 w-full rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.99]"
          >
            {t.translate}
          </button>
        </div>

        {/* Results */}
        {(javanese !== "" || aksara !== "") && (
          <div className="mt-6 space-y-5">
            {/* First Result */}
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-700">
                {firstResultLabel}
              </h2>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p
                  className={`whitespace-pre-wrap break-words leading-relaxed ${
                    mode === "fromAksara"
                      ? "text-2xl"
                      : "text-lg"
                  }`}
                >
                  {javanese}
                </p>
              </div>
            </div>

            {/* Second Result */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-slate-700">
                  {secondResultLabel}
                </h2>

                <button
                  type="button"
                  onClick={copyResult}
                  disabled={!aksara}
                  className="rounded-lg border bg-white px-3 py-1.5 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-50"
                >
                  {copied ? t.copied : t.copy}
                </button>
              </div>

              <div className="min-h-32 rounded-2xl border bg-white p-6 shadow-sm">
                <p
                  className={`break-words whitespace-pre-wrap text-center leading-loose ${
                    mode === "toJavanese"
                      ? "text-3xl"
                      : "text-lg"
                  }`}
                >
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
