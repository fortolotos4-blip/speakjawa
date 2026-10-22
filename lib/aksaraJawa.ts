// lib/aksaraJawa.ts

const CONSONANTS: Record<string, string> = {
  h: "ꦲ",
  n: "ꦤ",
  c: "ꦕ",
  r: "ꦫ",
  k: "ꦏ",
  d: "ꦢ",
  t: "ꦠ",
  s: "ꦱ",
  w: "ꦮ",
  l: "ꦭ",
  p: "ꦥ",
  dh: "ꦝ",
  j: "ꦗ",
  y: "ꦪ",
  ny: "ꦚ",
  m: "ꦩ",
  g: "ꦒ",
  b: "ꦧ",
  th: "ꦛ",
  ng: "ꦔ",
};

const VOWELS: Record<string, string> = {
  a: "",
  i: "ꦶ",
  u: "ꦸ",
  e: "ꦺ",
  o: "ꦺꦴ",
  é: "ꦺ",
  ê: "ꦼ",
};

const INDEPENDENT_VOWELS: Record<string, string> = {
  a: "ꦄ",
  i: "ꦆ",
  u: "ꦈ",
  e: "ꦌ",
  é: "ꦌ",
  ê: "ꦄ",
  o: "ꦎ",
};

const FINAL_SIGNS: Record<string, string> = {
  ng: "ꦁ", // cecak
  r: "ꦂ",  // layar
  h: "ꦃ",  // wignyan
};

const JAVANESE_DIGITS: Record<string, string> = {
  "0": "꧐",
  "1": "꧑",
  "2": "꧒",
  "3": "꧓",
  "4": "꧔",
  "5": "꧕",
  "6": "꧖",
  "7": "꧗",
  "8": "꧘",
  "9": "꧙",
};

const MEDIAL_SIGNS: Record<string, string> = {
  r: "ꦿ", // cakra
  y: "ꦾ", // pengkal
};

// Beberapa kata yang e-nya perlu dibedakan.
// Input tanpa diakritik memang ambigu dalam Bahasa Jawa.

const PEPET_WORDS: Record<string, string> = {
  dhateng: "dhatêng",
  kembang: "kêmbang",
  teka: "têka",
  suket: "sukêt",
  sekar: "sêkar",
  temen: "têmen",
  tekan: "têkan",
  wektu: "wêktu",
  ngerti: "ngêrti",
  neng: "nêng",

  // Tambahan kosakata Krama
  nedha: "nêdha",
  sekul: "sêkul",
};


const TALING_WORDS: Record<string, string> = {
  badhe: "badé",
  bade: "badé",
  akeh: "akèh",
  duwe: "duwé",
  goleki: "goléki",
  goleke: "goléké",
  meja: "méja",
  sega: "séga",
  sore: "soré",
  rene: "réne",
  kene: "kéné",
};

function normalizeWord(word: string): string {
  const lower = word.toLowerCase();

  if (PEPET_WORDS[lower]) {
    return PEPET_WORDS[lower];
  }

  if (TALING_WORDS[lower]) {
    return TALING_WORDS[lower];
  }

  return lower;
}

function isVowel(char: string | undefined): boolean {
  if (!char) return false;

  return ["a", "i", "u", "e", "o", "é", "ê"].includes(char);
}

function isDigit(char: string | undefined): boolean {
  return !!char && /[0-9]/.test(char);
}

function isConsonantStart(word: string, index: number): string | null {
  const two = word.slice(index, index + 2);

  if (CONSONANTS[two]) {
    return two;
  }

  const one = word[index];

  if (CONSONANTS[one]) {
    return one;
  }

  return null;
}

function getVowel(word: string, index: number): string | null {
  const char = word[index];

  return isVowel(char) ? char : null;
}

/**
 * Membentuk satu suku/aksara dasar.
 */
function buildSyllable(
  consonant: string,
  vowel: string | null
): string {
  let result = CONSONANTS[consonant];

  if (vowel) {
    result += VOWELS[vowel];
  }

  return result;
}

/**
 * Mengubah satu kata Latin menjadi Aksara Jawa.
 */
function convertWord(rawWord: string): string {
  if (!rawWord) return "";

  const word = normalizeWord(rawWord);

  let result = "";
  let i = 0;

  while (i < word.length) {
    const current = word[i];

    // =========================================================
    // ANGKA
    // =========================================================

    if (isDigit(current)) {
      result += JAVANESE_DIGITS[current];
      i++;
      continue;
    }

    // =========================================================
    // VOKAL DI AWAL KATA
    // =========================================================

    if (isVowel(current)) {
      result += INDEPENDENT_VOWELS[current];
      i++;
      continue;
    }

    // =========================================================
    // KONSONAN
    // =========================================================

    const consonant = isConsonantStart(word, i);

    if (!consonant) {
      // Karakter yang tidak dikenal dipertahankan.
      result += current;
      i++;
      continue;
    }

    const consonantLength = consonant.length;
    const nextIndex = i + consonantLength;

    // =========================================================
    // KONSONAN + VOKAL
    // =========================================================

    const vowel = getVowel(word, nextIndex);

    if (vowel) {
      result += buildSyllable(consonant, vowel);

      i = nextIndex + 1;
      continue;
    }

    // =========================================================
    // KONSONAN + R/Y MEDIAL
    //
    // contoh:
    // krupuk -> ꦏꦿꦸ...
    // ry...
    // ky...
    // =========================================================

    const medial = word[nextIndex];

    if (
      medial === "r" &&
      nextIndex + 1 < word.length &&
      isVowel(word[nextIndex + 1])
    ) {
      result += CONSONANTS[consonant];
      result += MEDIAL_SIGNS.r;
      result += VOWELS[word[nextIndex + 1]];

      i = nextIndex + 2;
      continue;
    }

    if (
      medial === "y" &&
      nextIndex + 1 < word.length &&
      isVowel(word[nextIndex + 1])
    ) {
      result += CONSONANTS[consonant];
      result += MEDIAL_SIGNS.y;
      result += VOWELS[word[nextIndex + 1]];

      i = nextIndex + 2;
      continue;
    }

    // =========================================================
    // KONSONAN AKHIR
    //
    // ng -> cecak
    // r  -> layar
    // h  -> wignyan
    // =========================================================

    if (nextIndex >= word.length) {
      if (FINAL_SIGNS[consonant]) {
        result += FINAL_SIGNS[consonant];
      } else {
        result += CONSONANTS[consonant];
        result += "꧀";
      }

      i = nextIndex;
      continue;
    }

    // =========================================================
    // KONSONAN + KONSONAN
    //
    // Menggunakan pangkon sebagai dasar pasangan.
    //
    // Contoh:
    // kembang
    // k + e
    // m + b
    // a + ng
    // =========================================================

    result += CONSONANTS[consonant];
    result += "꧀";

    i = nextIndex;
  }

  return result;
}

/**
 * Memisahkan tanda baca dari kata supaya tidak mengganggu
 * proses transliterasi.
 */
function convertToken(token: string): string {
  if (!token) return "";

  // Angka murni
  if (/^\d+$/.test(token)) {
    return token
      .split("")
      .map((digit) => JAVANESE_DIGITS[digit])
      .join("");
  }

  // Tanda baca di awal
  const leading = token.match(/^[^\p{L}\p{N}]+/u)?.[0] ?? "";

  // Tanda baca di akhir
  const trailing = token.match(/[^\p{L}\p{N}]+$/u)?.[0] ?? "";

  const start = leading.length;
  const end =
    trailing.length > 0
      ? token.length - trailing.length
      : token.length;

  const core = token.slice(start, end);

  if (!core) {
    return token;
  }

  return (
    leading +
    convertWord(core) +
    trailing
  );
}

/**
 * Fungsi utama.
 *
 * Contoh:
 *
 * latinToAksara("kula badhé dhateng pasar")
 *
 * menghasilkan:
 *
 * ꦏꦸꦭ ꦧꦝꦺ ꦝꦠꦼꦁ ꦥꦱꦂ
 */
export function latinToAksara(text: string): string {
  if (!text.trim()) {
    return "";
  }

  return text
    .split(/(\s+)/)
    .map((part) => {
      // Pertahankan spasi/newline
      if (/^\s+$/.test(part)) {
        return part;
      }

      return convertToken(part);
    })
    .join("");
}

/**
 * Mengubah Aksara Jawa menjadi tulisan Latin.
 *
 * Mendukung:
 * - Aksara nglegena
 * - Sandhangan swara
 * - Pangkon
 * - Cakra dan pengkal
 * - Cecak, layar, dan wignyan
 * - Aksara swara
 * - Angka Jawa
 *
 * Catatan: beberapa ejaan Latin tidak dapat dipulihkan secara
 * pasti karena satu aksara dapat mewakili beberapa bunyi.
 */
export function aksaraToLatin(text: string): string {
  if (!text.trim()) return "";

  const reverseConsonants = new Map<string, string>(
    Object.entries(CONSONANTS).map(([latin, aksara]) => [
      aksara,
      latin,
    ])
  );

  const reverseIndependentVowels = new Map<string, string>([
    ["ꦄ", "a"],
    ["ꦆ", "i"],
    ["ꦈ", "u"],
    ["ꦌ", "e"],
    ["ꦎ", "o"],
  ]);

  const reverseDigits = new Map<string, string>(
    Object.entries(JAVANESE_DIGITS).map(([latin, aksara]) => [
      aksara,
      latin,
    ])
  );

  const chars = Array.from(text);
  let result = "";

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    // Angka Jawa
    if (reverseDigits.has(char)) {
      result += reverseDigits.get(char);
      continue;
    }

    // Aksara swara atau vokal mandiri
    if (reverseIndependentVowels.has(char)) {
      result += reverseIndependentVowels.get(char);
      continue;
    }

    // Aksara dasar: secara default memiliki vokal inheren "a"
    if (reverseConsonants.has(char)) {
      result += reverseConsonants.get(char) + "a";
      continue;
    }

    // Pangkon: menghilangkan vokal inheren "a"
    if (char === "꧀") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1);
      }
      continue;
    }

    // Sandhangan swara: wulu (i)
    if (char === "ꦶ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "i";
      }
      continue;
    }

    // Sandhangan swara: suku (u)
    if (char === "ꦸ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "u";
      }
      continue;
    }

    // Taling (e/é)
    if (char === "ꦺ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "é";
      }
      continue;
    }

    // Taling tarung: o
    if (char === "ꦴ") {
      if (result.endsWith("é")) {
        result = result.slice(0, -1) + "o";
      }
      continue;
    }

    // Pepet (ê)
    if (char === "ꦼ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "ê";
      }
      continue;
    }

    // Cecak, layar, dan wignyan
    if (char === "ꦁ") {
      result += "ng";
      continue;
    }

    if (char === "ꦂ") {
      result += "r";
      continue;
    }

    if (char === "ꦃ") {
      result += "h";
      continue;
    }

    // Cakra: tambahan bunyi r
    if (char === "ꦿ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "ra";
      }
      continue;
    }

    // Pengkal: tambahan bunyi y
    if (char === "ꦾ") {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "ya";
      }
      continue;
    }

    // Karakter lain, termasuk spasi dan tanda baca,
    // dipertahankan.
    result += char;
  }

  return result;
}
