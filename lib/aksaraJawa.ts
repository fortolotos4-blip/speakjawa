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
  // Aksara rekan untuk bunyi serapan umum
  kh: "ꦏ꦳",
  dz: "ꦢ꦳",
  gh: "ꦒ꦳",
  f: "ꦥ꦳",
  v: "ꦥ꦳",
  z: "ꦗ꦳",
};

const VOWELS: Record<string, string> = {
  a: "",
  i: "ꦶ",
  u: "ꦸ",
  e: "ꦺ",
  é: "ꦺ",
  è: "ꦺ",
  ê: "ꦼ",
  o: "ꦺꦴ",
};

const FINAL_SIGNS: Record<string, string> = {
  ng: "ꦁ", // cecak
  r: "ꦂ", // layar
  h: "ꦃ", // wignyan
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

const SPECIAL_SYLLABLES = {
  paCeret: "ꦉ", // rê
  ngaLelet: "ꦊ", // lê
  cakraKeret: "ꦽ", // konsonan + rê
};

// Daftar kata umum Bahasa Jawa yang huruf "e"-nya perlu dibedakan secara pasti
// antara pepet (ê -> ꦼ) dan taling (é/è -> ꦺ).
const WORD_SPELLING_OVERRIDES: Record<string, string> = {
  // Pepet (ê)
  adhem: "adhêm",
  anem: "anêm",
  arep: "arêp",
  ayem: "ayêm",
  bener: "bênêr",
  benter: "bêntêr",
  boten: "botên",
  cemeng: "cêmêng",
  cepet: "cêpêt",
  dalem: "dalêm",
  dhateng: "dhatêng",
  dhemen: "dhêmên",
  dinten: "dintên",
  enem: "ênêm",
  enom: "ênom",
  gelem: "gêlêm",
  ijem: "ijêm",
  ireng: "irêng",
  jeneng: "jênêng",
  jenengku: "jênêngku",
  jumeneng: "jumênêng",
  kagem: "kagêm",
  kangen: "kangên",
  kemawon: "kêmawon",
  kembang: "kêmbang",
  kepripun: "kêpripun",
  kertas: "kêrtas",
  lega: "lêga",
  lemah: "lêmah",
  lemu: "lêmu",
  lenggah: "lênggah",
  leres: "lêrês",
  mangertos: "mangêrtos",
  mboten: "mbotên",
  menapa: "mênapa",
  menawi: "mênawi",
  mendhet: "mêndhêt",
  mengko: "mêngko",
  menika: "mênika",
  menyang: "mênyang",
  nedha: "nêdha",
  neng: "nêng",
  ngadeg: "ngadêg",
  ngendika: "ngêndika",
  ngerti: "ngêrti",
  ngrembug: "ngrêmbug",
  peken: "pêkên",
  pethak: "pêthak",
  pinter: "pintêr",
  rega: "rêga",
  rembag: "rêmbag",
  rembug: "rêmbug",
  resik: "rêsik",
  saged: "sagêd",
  sedanten: "sêdantên",
  sedasa: "sêdasa",
  sedaya: "sêdaya",
  sega: "sêga",
  segawon: "sêgawon",
  sekar: "sêkar",
  sekedhap: "sêkêdhap",
  sekul: "sêkul",
  seneng: "sênêng",
  sepuh: "sêpuh",
  sepuluh: "sêpuluh",
  setunggal: "sêtunggal",
  sewelas: "sêwêlas",
  sewidak: "sêwidak",
  sonten: "sontên",
  sugeng: "sugêng",
  suket: "sukêt",
  teka: "têka",
  tekan: "têkan",
  telas: "têlas",
  telu: "têlu",
  temen: "têmên",
  tentrem: "têntrêm",
  tilem: "tilêm",
  tresna: "trêsna",
  wektu: "wêktu",
  werna: "wêrna",
  wonten: "wontên",

  // Campuran pepet & taling
  ndherekaken: "ndhèrèkakên",
  sedhela: "sêdhéla",
  srengenge: "srêngéngé",

  // Taling (é / è)
  akeh: "akèh",
  bade: "badé",
  badhe: "badhé",
  dereng: "dèrèng",
  dhewe: "dhéwé",
  dheweke: "dhéwéké",
  duwe: "duwé",
  enak: "énak",
  enggal: "énggal",
  enjang: "énjang",
  entek: "èntèk",
  esuk: "ésuk",
  ewu: "èwu",
  gawe: "gawé",
  goleke: "golèké",
  goleki: "golèki",
  kabeh: "kabèh",
  kene: "kéné",
  kesah: "késah",
  kowe: "kowé",
  meja: "méja",
  ndherek: "ndhèrèk",
  ngombe: "ngombé",
  piye: "piyé",
  rame: "ramé",
  rene: "réné",
  sae: "saé",
  sampeyan: "sampéyan",
  sare: "saré",
  sewu: "sèwu",
  sore: "soré",
  suwe: "suwé",
  wae: "waé",
  wedang: "wédang",
};

function normalizeWord(word: string): string {
  const lower = word.toLowerCase();
  return WORD_SPELLING_OVERRIDES[lower] ?? lower;
}

function isVowel(char: string | undefined): boolean {
  if (!char) return false;

  return ["a", "i", "u", "e", "o", "é", "è", "ê"].includes(char);
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
  // Kaidah baku Aksara Jawa: rê -> Pa Ceret (ꦉ), lê -> Nga Lelet (ꦊ).
  if (consonant === "r" && vowel === "ê") {
    return SPECIAL_SYLLABLES.paCeret;
  }

  if (consonant === "l" && vowel === "ê") {
    return SPECIAL_SYLLABLES.ngaLelet;
  }

  let result = CONSONANTS[consonant];

  if (vowel) {
    result += VOWELS[vowel];
  }

  return result;
}

/**
 * Mengubah satu kata Latin menjadi Aksara Jawa sesuai kaidah baku.
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
    // VOKAL DI AWAL KATA ATAU SETELAH VOKAL (HIATUS)
    //
    // Sesuai kaidah baku Aksara Jawa, vokal mandiri pada kata
    // Jawa ditulis menggunakan aksara Ha (ꦲ) + sandhangan swara.
    // Contoh: aku -> ꦲꦏꦸ, ibu -> ꦲꦶꦧꦸ, omah -> ꦲꦺꦴꦩꦃ, sae -> ꦱꦲꦺ.
    // =========================================================

    if (isVowel(current)) {
      result += CONSONANTS.h + VOWELS[current];
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
    // KONSONAN PENUTUP SUKU KATA (SIGEG) DI TENGAH ATAU AKHIR KATA
    //
    // ng -> cecak (ꦁ), misal: mangga -> ꦩꦁꦒ, dhateng -> ꦝꦠꦼꦁ
    // r  -> layar (ꦂ), misal: kertas -> ꦏꦼꦂꦠꦱ꧀, pasar -> ꦥꦱꦂ
    // h  -> wignyan (ꦃ), misal: wahyu -> ꦮꦃꦪꦸ, kesah -> ꦏꦺꦱꦃ
    // =========================================================

    const afterVowel = i > 0 && isVowel(word[i - 1]);

    if (FINAL_SIGNS[consonant] && afterVowel) {
      result += FINAL_SIGNS[consonant];
      i = nextIndex;
      continue;
    }

    // =========================================================
    // KONSONAN + R/Y MEDIAL (CAKRA, CAKRA KERET, PENGKAL)
    //
    // contoh:
    // krupuk -> ꦏꦿꦸꦥꦸꦏ꧀
    // tresna -> ꦠꦽꦱ꧀ꦤ (cakra keret untuk r + ê)
    // kyai   -> ꦏꦾꦲꦶ
    // =========================================================

    const medial = word[nextIndex];
    const vowelAfterMedial = getVowel(word, nextIndex + 1);

    if (
      medial === "r" &&
      vowelAfterMedial &&
      consonant !== "r" &&
      consonant !== "h"
    ) {
      result += CONSONANTS[consonant];

      if (vowelAfterMedial === "ê") {
        result += SPECIAL_SYLLABLES.cakraKeret;
      } else {
        result += MEDIAL_SIGNS.r + VOWELS[vowelAfterMedial];
      }

      i = nextIndex + 2;
      continue;
    }

    if (
      medial === "y" &&
      vowelAfterMedial &&
      consonant !== "y" &&
      consonant !== "h"
    ) {
      result += CONSONANTS[consonant];
      result += MEDIAL_SIGNS.y;
      result += VOWELS[vowelAfterMedial];

      i = nextIndex + 2;
      continue;
    }

    // =========================================================
    // KONSONAN AKHIR ATAU KONSONAN + KONSONAN (PASANGAN / PANGKON)
    // =========================================================

    if (nextIndex >= word.length && FINAL_SIGNS[consonant]) {
      result += FINAL_SIGNS[consonant];
      i = nextIndex;
      continue;
    }

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

  // Kata ulang / ber-tanda hubung (misal: apa-apa, alun-alun)
  if (/[\p{L}\p{N}]-[\p{L}\p{N}]/u.test(token)) {
    return token
      .split("-")
      .map((part) => convertToken(part))
      .join("-");
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

  return leading + convertWord(core) + trailing;
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

const REVERSE_CONSONANTS = new Map<string, string>(
  Object.entries(CONSONANTS)
    .filter(([latin]) => latin !== "v" && !["kh", "dz", "gh", "f", "z"].includes(latin))
    .map(([latin, aksara]) => [aksara, latin])
);

const REVERSE_REKAN = new Map<string, string>([
  ["ꦏ", "kh"],
  ["ꦢ", "dz"],
  ["ꦒ", "gh"],
  ["ꦥ", "f"],
  ["ꦗ", "z"],
]);

const REVERSE_INDEPENDENT_VOWELS = new Map<string, string>([
  ["ꦄ", "a"],
  ["ꦆ", "i"],
  ["ꦈ", "u"],
  ["ꦌ", "e"],
  ["ꦎ", "o"],
]);

const REVERSE_DIGITS = new Map<string, string>(
  Object.entries(JAVANESE_DIGITS).map(([latin, aksara]) => [
    aksara,
    latin,
  ])
);

/**
 * Mengubah Aksara Jawa menjadi tulisan Latin.
 *
 * Mendukung:
 * - Aksara nglegena & aksara rekan (cecak telu ꦳)
 * - Pa ceret (ꦉ), nga lelet (ꦊ), dan cakra keret (ꦽ)
 * - Sandhangan swara, pangkon, cakra, pengkal
 * - Cecak, layar, dan wignyan
 * - Aksara swara, angka Jawa, dan tanda baca Jawa (꧈, ꧉)
 */
export function aksaraToLatin(text: string): string {
  if (!text.trim()) return "";

  const chars = Array.from(text);
  let result = "";

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const nextChar = chars[i + 1];

    // Angka Jawa
    if (REVERSE_DIGITS.has(char)) {
      result += REVERSE_DIGITS.get(char);
      continue;
    }

    // Tanda baca Aksara Jawa
    if (char === "꧈") {
      result += ",";
      continue;
    }

    if (char === "꧉") {
      result += ".";
      continue;
    }

    // Aksara swara atau vokal mandiri
    if (REVERSE_INDEPENDENT_VOWELS.has(char)) {
      result += REVERSE_INDEPENDENT_VOWELS.get(char);
      continue;
    }

    // Pa ceret (rê) dan Nga lelet (lê)
    if (char === SPECIAL_SYLLABLES.paCeret) {
      result += "rê";
      continue;
    }

    if (char === SPECIAL_SYLLABLES.ngaLelet) {
      result += "lê";
      continue;
    }

    // Aksara rekan (konsonan + cecak telu ꦳)
    if (nextChar === "꦳" && REVERSE_REKAN.has(char)) {
      result += REVERSE_REKAN.get(char) + "a";
      i++;
      continue;
    }

    // Aksara dasar: secara default memiliki vokal inheren "a".
    // Khusus ꦲ (Ha) di awal kata atau setelah vokal dibaca sebagai vokal
    // sesuai pelafalan baku Bahasa Jawa (misal ꦲꦏꦸ -> aku, ꦱꦲꦺ -> saé).
    if (REVERSE_CONSONANTS.has(char)) {
      if (char === "ꦲ") {
        const prevChar = chars[i - 1];
        const isAtWordStart = !prevChar || /[\s.,!?;:\-()"'“”‘’꧈꧉]/.test(prevChar);
        const isAfterVowelResult = /[aiueoéèê]$/.test(result);
        const isFollowedByPangkon = nextChar === "꧀";

        if ((isAtWordStart || isAfterVowelResult) && !isFollowedByPangkon) {
          result += "a";
          continue;
        }
      }

      result += REVERSE_CONSONANTS.get(char) + "a";
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

    // Cakra keret: tambahan bunyi rê
    if (char === SPECIAL_SYLLABLES.cakraKeret) {
      if (result.endsWith("a")) {
        result = result.slice(0, -1) + "rê";
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

    // Karakter lain, termasuk spasi dan tanda baca, dipertahankan.
    result += char;
  }

  return result;
}
