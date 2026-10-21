// lib/aksara-jawa.ts

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

  // Jangan tinggalkan pangkon di ujung kata.
  if (result.endsWith("꧀")) {
    result = result.slice(0, -1);
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