import type { JavaneseLevel, SourceLanguage } from "./translator";

export type ExtraDictionaryEntry = {
  aliases: Record<SourceLanguage, string[]>;
  translation: Record<JavaneseLevel, string>;
};

/**
 * Kosakata tambahan & padanan percakapan sehari-hari (Indonesia, English, Mandarin).
 * Dipisahkan agar mudah dibaca dan ditambah kapan saja di VS Code.
 */
export const extraDictionary: ExtraDictionaryEntry[] = [
  // =========================================================================
  // SAPAAN & SOPAN SANTUN
  // =========================================================================
  {
    aliases: { id: ["halo", "hai"], en: ["hello", "hi", "hey"], zh: ["你好", "嗨"] },
    translation: { ngoko: "halo", krama: "halo", "krama-inggil": "halo" },
  },
  {
    aliases: { id: ["sampai jumpa", "dadah"], en: ["goodbye", "bye", "see you"], zh: ["再见", "拜拜"] },
    translation: { ngoko: "nganti ketemu maneh", krama: "sugeng pepisahan", "krama-inggil": "sugeng tindak" },
  },
  {
    aliases: { id: ["sampai besok"], en: ["see you tomorrow"], zh: ["明天见"] },
    translation: { ngoko: "ketemu sesuk", krama: "kepanggih benjang", "krama-inggil": "kepanggih benjang" },
  },
  {
    aliases: { id: ["terima kasih banyak"], en: ["thank you very much", "thank you so much", "thanks a lot"], zh: ["非常感谢", "多谢"] },
    translation: { ngoko: "matur nuwun banget", krama: "matur nuwun sanget", "krama-inggil": "matur sembah nuwun sanget" },
  },
  {
    aliases: { id: ["makasih", "terimakasih"], en: ["thanks", "thank you"], zh: ["谢谢", "谢谢你"] },
    translation: { ngoko: "matur nuwun", krama: "matur nuwun", "krama-inggil": "matur sembah nuwun" },
  },
  {
    aliases: { id: ["sama-sama"], en: ["you're welcome", "you are welcome"], zh: ["不客气", "不用谢"] },
    translation: { ngoko: "padha-padha", krama: "sami-sami", "krama-inggil": "sami-sami" },
  },
  {
    aliases: { id: ["mohon maaf", "minta maaf"], en: ["i am sorry", "i'm sorry", "sorry"], zh: ["对不起", "抱歉"] },
    translation: { ngoko: "ngapura", krama: "nyuwun pangapunten", "krama-inggil": "nyuwun agunging pangapunten" },
  },
  {
    aliases: { id: ["silakan", "silahkan"], en: ["please", "go ahead"], zh: ["请"] },
    translation: { ngoko: "mangga", krama: "mangga", "krama-inggil": "sumangga" },
  },
  {
    aliases: { id: ["senang bertemu denganmu"], en: ["nice to meet you"], zh: ["很高兴认识你"] },
    translation: { ngoko: "seneng ketemu kowe", krama: "remen kepanggih sampeyan", "krama-inggil": "remen kepanggih panjenengan" },
  },
  {
    aliases: { id: ["siapa namamu", "siapa nama anda"], en: ["what is your name", "what's your name"], zh: ["你叫什么名字", "您贵姓"] },
    translation: { ngoko: "sapa jenengmu", krama: "sinten nama sampeyan", "krama-inggil": "sinten asma panjenengan" },
  },
  {
    aliases: { id: ["aku baik-baik saja", "saya baik-baik saja"], en: ["i am fine", "i'm fine", "i am good"], zh: ["我很好"] },
    translation: { ngoko: "aku apik-apik wae", krama: "kula sae-sae kemawon", "krama-inggil": "kula sae-sae kemawon" },
  },
  {
    aliases: { id: ["aku cinta kamu", "saya cinta kamu"], en: ["i love you"], zh: ["我爱你"] },
    translation: { ngoko: "aku tresna kowe", krama: "kula tresna sampeyan", "krama-inggil": "kula tresna panjenengan" },
  },
  {
    aliases: { id: ["aku kangen kamu", "saya rindu kamu"], en: ["i miss you"], zh: ["我想你"] },
    translation: { ngoko: "aku kangen kowe", krama: "kula kangen sampeyan", "krama-inggil": "kula kangen panjenengan" },
  },
  {
    aliases: { id: ["berapa harganya", "ini berapa"], en: ["how much is this", "how much"], zh: ["多少钱", "这个多少钱"] },
    translation: { ngoko: "pira regane", krama: "pinten reginipun", "krama-inggil": "pinten reginipun" },
  },
  {
    aliases: { id: ["aku lapar", "saya lapar"], en: ["i am hungry", "i'm hungry"], zh: ["我饿了"] },
    translation: { ngoko: "aku luwe", krama: "kula luwe", "krama-inggil": "kula luwe" },
  },
  {
    aliases: { id: ["aku haus", "saya haus"], en: ["i am thirsty", "i'm thirsty"], zh: ["我渴了"] },
    translation: { ngoko: "aku ngelak", krama: "kula ngelak", "krama-inggil": "kula ngelak" },
  },
  {
    aliases: { id: ["aku capek", "saya lelah"], en: ["i am tired", "i'm tired"], zh: ["我累了"] },
    translation: { ngoko: "aku kesel", krama: "kula sayah", "krama-inggil": "kula sayah" },
  },

  // =========================================================================
  // KATA KERJA & MODAL HARIAN
  // =========================================================================
  {
    aliases: { id: ["mau", "ingin", "pengen"], en: ["want", "wanna"], zh: ["想", "想要", "要"] },
    translation: { ngoko: "arep", krama: "kepengin", "krama-inggil": "kersa" },
  },
  {
    aliases: { id: ["butuh", "membutuhkan"], en: ["need"], zh: ["需要"] },
    translation: { ngoko: "butuh", krama: "betah", "krama-inggil": "betah" },
  },
  {
    aliases: { id: ["seharusnya", "mestinya"], en: ["should", "ought to"], zh: ["应该"] },
    translation: { ngoko: "kudune", krama: "kedahipun", "krama-inggil": "kedahipun" },
  },
  {
    aliases: { id: ["punya", "mempunyai", "memiliki"], en: ["have", "has", "had", "own"], zh: ["拥有"] },
    translation: { ngoko: "duwe", krama: "gadhah", "krama-inggil": "kagungan" },
  },
  {
    aliases: { id: ["ngomong", "berbicara", "bicara"], en: ["talk", "speak"], zh: ["说话", "讲"] },
    translation: { ngoko: "ngomong", krama: "wicanten", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["bilang", "mengatakan"], en: ["say", "tell"], zh: ["说", "告诉"] },
    translation: { ngoko: "kandha", krama: "sanjang", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["bikin", "membuat"], en: ["make", "create"], zh: ["做"] },
    translation: { ngoko: "gawe", krama: "damel", "krama-inggil": "damel" },
  },
  {
    aliases: { id: ["tidur"], en: ["sleep"], zh: ["睡", "睡觉"] },
    translation: { ngoko: "turu", krama: "tilem", "krama-inggil": "sare" },
  },
  {
    aliases: { id: ["berdiri"], en: ["stand", "stand up"], zh: ["站", "站起来"] },
    translation: { ngoko: "ngadeg", krama: "ngadeg", "krama-inggil": "jumeneng" },
  },
  {
    aliases: { id: ["membaca"], en: ["read"], zh: ["读", "阅读"] },
    translation: { ngoko: "maca", krama: "maos", "krama-inggil": "maos" },
  },
  {
    aliases: { id: ["membantu", "bantu"], en: ["help", "assist"], zh: ["帮", "帮助", "帮忙"] },
    translation: { ngoko: "ngewangi", krama: "ngrencangi", "krama-inggil": "ngrencangi" },
  },
  {
    aliases: { id: ["jalan-jalan"], en: ["stroll", "take a walk"], zh: ["散步", "逛街"] },
    translation: { ngoko: "mlaku-mlaku", krama: "mlampah-mlampah", "krama-inggil": "mlampah-mlampah" },
  },
  {
    aliases: { id: ["kenal", "mengenal"], en: ["know someone", "acquainted"], zh: ["认识"] },
    translation: { ngoko: "kenal", krama: "tepang", "krama-inggil": "tepang" },
  },
  {
    aliases: { id: ["kangen", "rindu"], en: ["miss"], zh: ["想念"] },
    translation: { ngoko: "kangen", krama: "kangen", "krama-inggil": "kangen" },
  },

  // =========================================================================
  // MAKANAN, MINUMAN, BENDA & TEMPAT
  // =========================================================================
  {
    aliases: { id: ["nasi"], en: ["rice", "cooked rice"], zh: ["饭", "米饭"] },
    translation: { ngoko: "sega", krama: "sekul", "krama-inggil": "sekul" },
  },
  {
    aliases: { id: ["mie goreng", "mi goreng"], en: ["fried noodles"], zh: ["炒面"] },
    translation: { ngoko: "mi goreng", krama: "mi goreng", "krama-inggil": "mi goreng" },
  },
  {
    aliases: { id: ["kopi"], en: ["coffee"], zh: ["咖啡"] },
    translation: { ngoko: "kopi", krama: "kopi", "krama-inggil": "kopi" },
  },
  {
    aliases: { id: ["teh"], en: ["tea"], zh: ["茶"] },
    translation: { ngoko: "teh", krama: "teh", "krama-inggil": "teh" },
  },
  {
    aliases: { id: ["susu"], en: ["milk"], zh: ["牛奶"] },
    translation: { ngoko: "susu", krama: "susu", "krama-inggil": "susu" },
  },
  {
    aliases: { id: ["roti"], en: ["bread"], zh: ["面包"] },
    translation: { ngoko: "roti", krama: "roti", "krama-inggil": "roti" },
  },
  {
    aliases: { id: ["hp", "ponsel", "handphone"], en: ["phone", "cellphone", "mobile phone", "smartphone"], zh: ["手机", "电话"] },
    translation: { ngoko: "hp", krama: "telepon", "krama-inggil": "telepon" },
  },
  {
    aliases: { id: ["mobil", "kendaraan"], en: ["car", "vehicle"], zh: ["车", "汽车"] },
    translation: { ngoko: "mobil", krama: "mobil", "krama-inggil": "titihan" },
  },
  {
    aliases: { id: ["sepatu"], en: ["shoes", "shoe"], zh: ["鞋", "鞋子"] },
    translation: { ngoko: "sepatu", krama: "sepatu", "krama-inggil": "sepatu" },
  },
  {
    aliases: { id: ["desa", "kampung"], en: ["village"], zh: ["村", "村子", "村庄"] },
    translation: { ngoko: "desa", krama: "dhusun", "krama-inggil": "dhusun" },
  },
  {
    aliases: { id: ["ibu", "mama", "emak"], en: ["mom", "mommy", "mother"], zh: ["妈妈", "母亲"] },
    translation: { ngoko: "ibu", krama: "ibu", "krama-inggil": "ibu" },
  },
  {
    aliases: { id: ["papa", "ayah"], en: ["dad", "daddy", "father"], zh: ["爸爸", "父亲"] },
    translation: { ngoko: "bapak", krama: "rama", "krama-inggil": "rama" },
  },
  {
    aliases: { id: ["pacar", "kekasih"], en: ["boyfriend", "girlfriend", "partner"], zh: ["对象", "男朋友", "女朋友"] },
    translation: { ngoko: "pacar", krama: "pacar", "krama-inggil": "pacar" },
  },

  // =========================================================================
  // KATA SIFAT & WARNA (TERMASUK MANDARIN 1 KARAKTER)
  // =========================================================================
  {
    aliases: { id: ["capek", "cape", "lelah"], en: ["tired", "exhausted"], zh: ["累"] },
    translation: { ngoko: "kesel", krama: "sayah", "krama-inggil": "sayah" },
  },
  {
    aliases: { id: ["ngantuk", "mengantuk"], en: ["sleepy"], zh: ["困"] },
    translation: { ngoko: "ngantuk", krama: "ngantuk", "krama-inggil": "arip" },
  },
  {
    aliases: { id: ["haus"], en: ["thirsty"], zh: ["渴", "口渴"] },
    translation: { ngoko: "ngelak", krama: "ngelak", "krama-inggil": "ngelak" },
  },
  {
    aliases: { id: ["ganteng", "tampan"], en: ["handsome"], zh: ["帅", "英俊"] },
    translation: { ngoko: "bagus", krama: "bagus", "krama-inggil": "bagus" },
  },
  {
    aliases: { id: ["baik hati", "ramah"], en: ["kind", "friendly"], zh: ["善良", "友好"] },
    translation: { ngoko: "apikan", krama: "sae manahipun", "krama-inggil": "sae penggalihanipun" },
  },
  {
    aliases: { id: ["lezat", "nikmat"], en: ["delicious", "tasty", "yummy"], zh: ["好吃", "美味"] },
    translation: { ngoko: "enak", krama: "eca", "krama-inggil": "eca" },
  },
  {
    aliases: { id: ["lucu"], en: ["funny", "cute"], zh: ["可爱", "搞笑"] },
    translation: { ngoko: "lucu", krama: "lucu", "krama-inggil": "lucu" },
  },
  {
    aliases: { id: ["pendek"], en: ["short"], zh: ["短", "矮"] },
    translation: { ngoko: "cendhak", krama: "celak", "krama-inggil": "celak" },
  },
  {
    aliases: { id: ["merah"], en: ["red"], zh: ["红", "红色"] },
    translation: { ngoko: "abang", krama: "abrit", "krama-inggil": "abrit" },
  },
  {
    aliases: { id: ["putih"], en: ["white"], zh: ["白", "白色"] },
    translation: { ngoko: "putih", krama: "pethak", "krama-inggil": "pethak" },
  },
  {
    aliases: { id: ["hitam"], en: ["black"], zh: ["黑", "黑色"] },
    translation: { ngoko: "ireng", krama: "cemeng", "krama-inggil": "cemeng" },
  },
  {
    aliases: { id: ["biru"], en: ["blue"], zh: ["蓝", "蓝色"] },
    translation: { ngoko: "biru", krama: "biru", "krama-inggil": "biru" },
  },
  {
    aliases: { id: ["hijau"], en: ["green"], zh: ["绿", "绿色"] },
    translation: { ngoko: "ijo", krama: "ijem", "krama-inggil": "ijem" },
  },
  {
    aliases: { id: ["kuning"], en: ["yellow"], zh: ["黄", "黄色"] },
    translation: { ngoko: "kuning", krama: "jene", "krama-inggil": "jene" },
  },

  // =========================================================================
  // KATA TUGAS, KATA TANYA, KATA GANTI & WAKTU
  // =========================================================================
  {
    aliases: { id: ["kenapa", "mengapa"], en: ["why"], zh: ["为什么"] },
    translation: { ngoko: "ngapa", krama: "kenging menapa", "krama-inggil": "kenging menapa" },
  },
  {
    aliases: { id: ["kapan"], en: ["when"], zh: ["什么时候"] },
    translation: { ngoko: "kapan", krama: "benjang menapa", "krama-inggil": "benjang menapa" },
  },
  {
    aliases: { id: ["gimana"], en: ["how"], zh: ["怎么", "怎么样"] },
    translation: { ngoko: "piye", krama: "kepripun", "krama-inggil": "kepripun" },
  },
  {
    aliases: { id: ["kadang", "kadang-kadang"], en: ["sometimes"], zh: ["有时候", "有时"] },
    translation: { ngoko: "kadhang", krama: "kadhangkala", "krama-inggil": "kadhangkala" },
  },
  {
    aliases: { id: ["banget", "sangat"], en: ["very", "really", "so much"], zh: ["很", "非常", "太", "真"] },
    translation: { ngoko: "banget", krama: "sanget", "krama-inggil": "sanget" },
  },
  {
    aliases: { id: ["tapi"], en: ["but"], zh: ["但是", "可是"] },
    translation: { ngoko: "nanging", krama: "nanging", "krama-inggil": "nanging" },
  },
  {
    aliases: { id: ["gak", "nggak", "enggak"], en: ["don't", "doesn't", "didn't", "not"], zh: ["不", "没"] },
    translation: { ngoko: "ora", krama: "mboten", "krama-inggil": "mboten" },
  },
  {
    aliases: { id: ["jangan"], en: ["do not", "don't"], zh: ["别", "不要"] },
    translation: { ngoko: "aja", krama: "sampun", "krama-inggil": "sampun" },
  },
  {
    aliases: { id: ["cuma", "hanya"], en: ["only", "just"], zh: ["只"] },
    translation: { ngoko: "mung", krama: "namung", "krama-inggil": "namung" },
  },
  {
    aliases: { id: ["dengan", "bersama"], en: ["with"], zh: ["跟", "和"] },
    translation: { ngoko: "karo", krama: "kaliyan", "krama-inggil": "kaliyan" },
  },
  {
    aliases: { id: ["untuk", "buat"], en: ["for"], zh: ["为", "为了", "给"] },
    translation: { ngoko: "kanggo", krama: "kagem", "krama-inggil": "kagem" },
  },
  {
    aliases: { id: ["di sana", "sana"], en: ["there", "over there"], zh: ["那里", "那儿"] },
    translation: { ngoko: "kana", krama: "ngrika", "krama-inggil": "ngrika" },
  },
  {
    aliases: { id: ["ini"], en: ["this", "these"], zh: ["这", "这个"] },
    translation: { ngoko: "iki", krama: "menika", "krama-inggil": "menika" },
  },
  {
    aliases: { id: ["itu"], en: ["that", "those", "it"], zh: ["那", "那个", "它"] },
    translation: { ngoko: "iku", krama: "menika", "krama-inggil": "menika" },
  },
  {
    aliases: { id: ["dia"], en: ["him", "her", "he", "she"], zh: ["他", "她"] },
    translation: { ngoko: "dheweke", krama: "piyambakipun", "krama-inggil": "panjenenganipun" },
  },
  {
    aliases: { id: ["masih"], en: ["still"], zh: ["还"] },
    translation: { ngoko: "isih", krama: "taksih", "krama-inggil": "taksih" },
  },
  {
    aliases: { id: ["semua"], en: ["all", "every"], zh: ["都", "全部"] },
    translation: { ngoko: "kabeh", krama: "sedaya", "krama-inggil": "sedaya" },
  },
  {
    aliases: { id: ["paling"], en: ["most"], zh: ["最"] },
    translation: { ngoko: "paling", krama: "ingkang paling", "krama-inggil": "ingkang paling" },
  },
];
