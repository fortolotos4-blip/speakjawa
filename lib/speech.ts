export type SpeechLanguage = "jv" | "id" | "en" | "zh";

export type SpeakOptions = {
  text: string;
  language: SpeechLanguage;
  rate?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (reason: "unsupported" | "failed") => void;
};

// Kata-kata Bahasa Jawa umum dengan vokal akhir "a" jejeg (dibaca /ɔ/)
// dan beberapa pelafalan khusus agar lebih jelas saat browser fallback ke suara id-ID.
const JAVANESE_PRONUNCIATION_MAP: Record<string, string> = {
  aja: "ojo",
  aksara: "aksoro",
  ana: "ono",
  apa: "opo",
  asta: "asto",
  badhe: "badé",
  bagya: "bagyo",
  bapa: "bopo",
  basa: "boso",
  baya: "boyo",
  bisa: "biso",
  cara: "coro",
  cetha: "ceto",
  dasa: "doso",
  dawa: "dowo",
  desa: "deso",
  dina: "dino",
  dunya: "dunyo",
  gawa: "gowo",
  gawe: "gawé",
  griya: "griyo",
  jawa: "jowo",
  kana: "kono",
  kanca: "konco",
  kandha: "kondo",
  karsa: "karso",
  kawula: "kawulo",
  kaya: "koyo",
  kene: "kéné",
  klapa: "klopo",
  kowe: "kowé",
  krama: "kromo",
  kula: "kulo",
  kutha: "kuto",
  lara: "loro",
  lima: "limo",
  lunga: "lungo",
  maca: "moco",
  mangga: "monggo",
  mata: "moto",
  mega: "mego",
  menapa: "menopo",
  menika: "meniko",
  muga: "mugo",
  nampa: "nompo",
  nedha: "nedo",
  negara: "negoro",
  ngapura: "ngapuro",
  ngasta: "ngasto",
  ngendika: "ngendiko",
  nggawa: "nggowo",
  nyata: "nyoto",
  padha: "podo",
  pira: "piro",
  pirsa: "pirso",
  piye: "piyé",
  prahara: "prahoro",
  priksa: "prikso",
  punapa: "punopo",
  punika: "puniko",
  rada: "rodo",
  rama: "romo",
  rasa: "roso",
  rega: "rego",
  sae: "saé",
  saka: "soko",
  salaka: "saloko",
  sanga: "songo",
  sapa: "sopo",
  sare: "saré",
  sega: "sego",
  sira: "siro",
  supaya: "supoyo",
  suwe: "suwé",
  swara: "sworo",
  swarga: "swargo",
  tamba: "tombo",
  tampa: "tompo",
  tandha: "tondo",
  teka: "teko",
  tiba: "tibo",
  tiga: "tigo",
  toya: "toyo",
  tuwa: "tuwo",
  uga: "ugo",
  upama: "upomo",
  utawa: "utowo",
  wae: "waé",
  waspa: "waspo",
};

// Kata penghubung / preposisi Bahasa Jawa tempat jeda napas terasa paling alami.
const JAVANESE_PHRASE_BREAK_WORDS = new Set([
  "amarga",
  "amargi",
  "bilih",
  "dateng",
  "dhateng",
  "ing",
  "ingkang",
  "kagem",
  "kaliyan",
  "kangge",
  "kanggo",
  "karo",
  "lan",
  "menawi",
  "menyang",
  "merga",
  "nanging",
  "saha",
  "sing",
  "supados",
  "supaya",
  "supoyo",
  "utawa",
  "utawi",
  "utowo",
  "wonten",
  "yen",
]);

const SENTENCE_PAUSE_MS = 280;

// Simpan referensi utterance aktif agar tidak di-garbage-collect oleh browser saat sedang diputar.
const activeUtterances = new Set<SpeechSynthesisUtterance>();
let activePlaybackId = 0;
let pauseTimerId: number | null = null;

export function isSpeechSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    typeof SpeechSynthesisUtterance !== "undefined"
  );
}

function cleanTextForSpeech(text: string): string {
  return text
    .replace(/[êÊ]/g, "e")
    .replace(/\s*[/;；]\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeJavaneseForIndonesianVoice(text: string): string {
  const cleaned = cleanTextForSpeech(text);

  return cleaned.replace(/[A-Za-zÀ-ÿ]+/g, (word) => {
    const lower = word.toLowerCase();
    const mapped = JAVANESE_PRONUNCIATION_MAP[lower];
    if (mapped) return mapped;

    // Suara id-ID sering ragu pada konsonan retrofleks Jawa "dh" dan "th",
    // sehingga diseragamkan ke "d" dan "t" agar artikulasi lebih halus.
    return word.replace(/dh/gi, "d").replace(/th/gi, "t");
  });
}

// Sisipkan koma jeda napas halus pada kalimat Jawa yang cukup panjang dan belum punya tanda baca,
// agar pembacaan tidak terburu-buru namun tetap mengalir alami (tidak kaku per kata).
function addNaturalJavanesePauses(sentence: string): string {
  if (/[,;:]/.test(sentence)) {
    return sentence;
  }

  const words = sentence.split(/\s+/).filter(Boolean);
  if (words.length < 4) {
    return sentence;
  }

  const output: string[] = [];
  let wordsSincePause = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const cleanWord = word.toLowerCase().replace(/[^a-zà-ÿ]/g, "");
    const remainingWords = words.length - i;

    const shouldBreakAtConnector =
      wordsSincePause >= 2 &&
      remainingWords >= 2 &&
      JAVANESE_PHRASE_BREAK_WORDS.has(cleanWord);

    const shouldBreakByLength =
      wordsSincePause >= 3 && remainingWords >= 2;

    if (shouldBreakAtConnector || shouldBreakByLength) {
      output[output.length - 1] = `${output[output.length - 1]},`;
      wordsSincePause = 0;
    }

    output.push(word);
    wordsSincePause += 1;
  }

  return output.join(" ");
}

function splitIntoSentences(text: string): string[] {
  const rawSegments = text
    .split(/(?<=[.!?。！？])\s+|\n+/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  return rawSegments.length > 0 ? rawSegments : [text.trim()];
}

function scoreVoiceQuality(voice: SpeechSynthesisVoice): number {
  const name = voice.name.toLowerCase();

  // Prioritaskan suara Natural / Neural / Online (sangat luwes di Edge/Chrome),
  // lalu Google voices, dibanding suara SAPI lama yang cenderung kaku.
  if (/natural|neural/.test(name)) return 100;
  if (/online/.test(name)) return 90;
  if (/google/.test(name)) return 80;
  if (/wavenet|premium|enhanced|siri|damayanti/.test(name)) return 70;
  if (voice.localService) return 40;
  return 50;
}

function findMatchingVoice(
  voices: SpeechSynthesisVoice[],
  prefixes: string[]
): SpeechSynthesisVoice | null {
  for (const prefix of prefixes) {
    const normalizedPrefix = prefix.toLowerCase();
    const matches = voices.filter((voice) => {
      const lang = voice.lang.toLowerCase();
      return (
        lang === normalizedPrefix ||
        lang.startsWith(`${normalizedPrefix}-`) ||
        lang.startsWith(`${normalizedPrefix}_`)
      );
    });

    if (matches.length > 0) {
      return [...matches].sort(
        (a, b) => scoreVoiceQuality(b) - scoreVoiceQuality(a)
      )[0];
    }
  }

  return null;
}

function pickBestVoice(
  voices: SpeechSynthesisVoice[],
  language: SpeechLanguage
): {
  voice: SpeechSynthesisVoice | null;
  langTag: string;
  isNativeJavanese: boolean;
} {
  if (language === "jv") {
    const javaneseVoice = findMatchingVoice(voices, ["jv-id", "jv", "jw-id", "jw"]);
    if (javaneseVoice) {
      return {
        voice: javaneseVoice,
        langTag: javaneseVoice.lang,
        isNativeJavanese: true,
      };
    }

    const indonesianVoice = findMatchingVoice(voices, ["id-id", "id"]);
    return {
      voice: indonesianVoice,
      langTag: indonesianVoice?.lang ?? "id-ID",
      isNativeJavanese: false,
    };
  }

  if (language === "id") {
    const voice = findMatchingVoice(voices, ["id-id", "id"]);
    return {
      voice,
      langTag: voice?.lang ?? "id-ID",
      isNativeJavanese: false,
    };
  }

  if (language === "en") {
    const voice = findMatchingVoice(voices, ["en-us", "en-gb", "en"]);
    return {
      voice,
      langTag: voice?.lang ?? "en-US",
      isNativeJavanese: false,
    };
  }

  const voice = findMatchingVoice(voices, ["zh-cn", "zh-hans", "zh"]);
  return {
    voice,
    langTag: voice?.lang ?? "zh-CN",
    isNativeJavanese: false,
  };
}

function loadVoices(synth: SpeechSynthesis): Promise<SpeechSynthesisVoice[]> {
  const existing = synth.getVoices();
  if (existing.length > 0) {
    return Promise.resolve(existing);
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
      resolve(synth.getVoices());
    };

    const handleVoicesChanged = () => {
      finish();
    };

    synth.addEventListener("voiceschanged", handleVoicesChanged);
    window.setTimeout(finish, 250);
  });
}

function clearPauseTimer(): void {
  if (pauseTimerId !== null && typeof window !== "undefined") {
    window.clearTimeout(pauseTimerId);
    pauseTimerId = null;
  }
}

export function stopSpeech(): void {
  activePlaybackId += 1;
  clearPauseTimer();
  activeUtterances.clear();

  if (!isSpeechSupported()) return;

  const synth = window.speechSynthesis;
  if (synth.speaking || synth.pending) {
    synth.cancel();
  }
}

export function speakText(options: SpeakOptions): void {
  const { text, language, rate, onStart, onEnd, onError } = options;

  if (!text.trim()) return;

  if (!isSpeechSupported()) {
    onError?.("unsupported");
    return;
  }

  const synth = window.speechSynthesis;
  stopSpeech();

  const playbackId = activePlaybackId;

  void loadVoices(synth).then((voices) => {
    if (playbackId !== activePlaybackId) return;

    const { voice, langTag, isNativeJavanese } = pickBestVoice(voices, language);
    const sentences = splitIntoSentences(text)
      .map((sentence) => {
        const normalized =
          language === "jv" && !isNativeJavanese
            ? normalizeJavaneseForIndonesianVoice(sentence)
            : cleanTextForSpeech(sentence);

        if (!normalized) return "";

        return language === "jv"
          ? addNaturalJavanesePauses(normalized)
          : normalized;
      })
      .filter(Boolean);

    if (sentences.length === 0) {
      onEnd?.();
      return;
    }

    const speechRate = rate ?? (language === "jv" ? 0.82 : 0.9);
    let currentIndex = 0;

    onStart?.();

    const speakNextSentence = () => {
      if (playbackId !== activePlaybackId) return;

      if (currentIndex >= sentences.length) {
        onEnd?.();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sentences[currentIndex]);
      utterance.lang = langTag;
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = speechRate;
      utterance.pitch = 1;

      utterance.onend = () => {
        activeUtterances.delete(utterance);
        if (playbackId !== activePlaybackId) return;

        currentIndex += 1;
        if (currentIndex < sentences.length) {
          pauseTimerId = window.setTimeout(() => {
            pauseTimerId = null;
            speakNextSentence();
          }, SENTENCE_PAUSE_MS);
        } else {
          onEnd?.();
        }
      };

      utterance.onerror = (event) => {
        activeUtterances.delete(utterance);
        if (playbackId !== activePlaybackId) return;

        // Pembatalan manual oleh pengguna bukan error.
        if (event.error === "canceled" || event.error === "interrupted") {
          onEnd?.();
          return;
        }

        onError?.("failed");
      };

      activeUtterances.add(utterance);
      synth.speak(utterance);
    };

    speakNextSentence();
  });
}
