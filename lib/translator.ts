
export type JavaneseLevel = "ngoko" | "krama" | "krama-inggil";
export type SourceLanguage = "id" | "en" | "zh";

type DictionaryEntry = {
  aliases: Record<SourceLanguage, string[]>;
  translation: Record<JavaneseLevel, string>;
};

// Satu konsep memiliki padanan dari tiga bahasa sumber.
const dictionary: DictionaryEntry[] = [
    {
    aliases: { id: ["abad"], en: ["century"], zh: ["世纪"] },
    translation: { ngoko: "abad", krama: "abad", "krama-inggil": "abad" },
  },
  {
    aliases: { id: ["abaikan"], en: ["ignore"], zh: ["不理会"] },
    translation: { ngoko: "nengake", krama: "nengaken", "krama-inggil": "nengaken" },
  },
  {
    aliases: { id: ["abon"], en: ["meat floss"], zh: ["肉松"] },
    translation: { ngoko: "abon", krama: "abon", "krama-inggil": "abon" },
  },
  {
    aliases: { id: ["abu"], en: ["ash"], zh: ["灰烬"] },
    translation: { ngoko: "awu", krama: "awu", "krama-inggil": "awu" },
  },
  {
    aliases: { id: ["abu-abu"], en: ["gray"], zh: ["灰色"] },
    translation: { ngoko: "klawu", krama: "klawu", "krama-inggil": "klawu" },
  },
  {
    aliases: { id: ["abu-abu arang"], en: ["charcoal gray"], zh: ["炭灰色"] },
    translation: { ngoko: "klawu areng", krama: "klawu areng", "krama-inggil": "klawu areng" },
  },
  {
    aliases: { id: ["abu-abu kebiruan"], en: ["bluish gray"], zh: ["蓝灰色"] },
    translation: { ngoko: "klawu semu biru", krama: "klawu semu biru", "krama-inggil": "klawu semu biru" },
  },
  {
    aliases: { id: ["abu-abu kehijauan"], en: ["greenish gray"], zh: ["绿灰色"] },
    translation: { ngoko: "klawu semu ijo", krama: "klawu semu ijem", "krama-inggil": "klawu semu ijem" },
  },
  {
    aliases: { id: ["abu-abu muda"], en: ["light gray"], zh: ["浅灰色"] },
    translation: { ngoko: "klawu enom", krama: "klawu anem", "krama-inggil": "klawu anem" },
  },
  {
    aliases: { id: ["abu-abu perak"], en: ["silver gray"], zh: ["银灰色"] },
    translation: { ngoko: "klawu salaka", krama: "klawu salaka", "krama-inggil": "klawu salaka" },
  },
  {
    aliases: { id: ["abu-abu tua"], en: ["dark gray"], zh: ["深灰色"] },
    translation: { ngoko: "klawu tuwa", krama: "klawu sepuh", "krama-inggil": "klawu sepuh" },
  },
  {
    aliases: { id: ["acuh tak acuh"], en: ["indifferent"], zh: ["漠不关心"] },
    translation: { ngoko: "cuek", krama: "cuek", "krama-inggil": "cuek" },
  },
  {
    aliases: { id: ["ada"], en: ["there is","exist"], zh: ["有；存在"] },
    translation: { ngoko: "ana", krama: "wonten", "krama-inggil": "wonten" },
  },
  {
    aliases: { id: ["adapun"], en: ["as for"], zh: ["至于"] },
    translation: { ngoko: "dene", krama: "dene", "krama-inggil": "dene" },
  },
  {
    aliases: { id: ["adat"], en: ["custom"], zh: ["习俗"] },
    translation: { ngoko: "adat", krama: "adat", "krama-inggil": "adat" },
  },
  {
    aliases: { id: ["adik"], en: ["younger sibling"], zh: ["弟弟；妹妹"] },
    translation: { ngoko: "adhi", krama: "adhi", "krama-inggil": "adhi" },
  },
  {
    aliases: { id: ["adik ipar"], en: ["younger sibling-in-law"], zh: ["年幼的姻亲兄弟姐妹"] },
    translation: { ngoko: "adhi ipe", krama: "adhi ipe", "krama-inggil": "rayi ipe" },
  },
  {
    aliases: { id: ["adik laki-laki"], en: ["younger brother"], zh: ["弟弟"] },
    translation: { ngoko: "adhi lanang", krama: "adhi jaler", "krama-inggil": "rayi kakung" },
  },
  {
    aliases: { id: ["adik perempuan"], en: ["younger sister"], zh: ["妹妹"] },
    translation: { ngoko: "adhi wadon", krama: "adhi estri", "krama-inggil": "rayi putri" },
  },
  {
    aliases: { id: ["adil"], en: ["fair"], zh: ["公正"] },
    translation: { ngoko: "adil", krama: "adil", "krama-inggil": "adil" },
  },
  {
    aliases: { id: ["adu"], en: ["report a grievance"], zh: ["告状"] },
    translation: { ngoko: "ngadu", krama: "ngadu", "krama-inggil": "ngadu" },
  },
  {
    aliases: { id: ["aduk"], en: ["stir"], zh: ["搅拌"] },
    translation: { ngoko: "ngudheg", krama: "ngudheg", "krama-inggil": "ngudheg" },
  },
  {
    aliases: { id: ["agak"], en: ["rather"], zh: ["有点"] },
    translation: { ngoko: "rada", krama: "radi", "krama-inggil": "radi" },
  },
  {
    aliases: { id: ["agama"], en: ["religion"], zh: ["宗教"] },
    translation: { ngoko: "agama", krama: "agami", "krama-inggil": "agami" },
  },
  {
    aliases: { id: ["agar"], en: ["so that","in order that"], zh: ["以便"] },
    translation: { ngoko: "supaya", krama: "supados", "krama-inggil": "supados" },
  },
  {
    aliases: { id: ["agar tidak"], en: ["so as not to"], zh: ["以免"] },
    translation: { ngoko: "supaya ora", krama: "supados boten", "krama-inggil": "supados boten" },
  },
  {
    aliases: { id: ["agen properti"], en: ["real estate agent"], zh: ["房地产经纪人"] },
    translation: { ngoko: "makelar omah", krama: "makelar griya", "krama-inggil": "makelar griya" },
  },
  {
    aliases: { id: ["Agustus"], en: ["August"], zh: ["八月"] },
    translation: { ngoko: "Agustus", krama: "Agustus", "krama-inggil": "Agustus" },
  },
  {
    aliases: { id: ["ahli gizi"], en: ["nutritionist"], zh: ["营养师"] },
    translation: { ngoko: "ahli gizi", krama: "ahli gizi", "krama-inggil": "ahli gizi" },
  },
  {
    aliases: { id: ["ahli waris"], en: ["heir"], zh: ["继承人"] },
    translation: { ngoko: "ahli waris", krama: "ahli waris", "krama-inggil": "ahli waris" },
  },
  {
    aliases: { id: ["air"], en: ["water"], zh: ["水"] },
    translation: { ngoko: "banyu", krama: "toya", "krama-inggil": "toya" },
  },
  {
    aliases: { id: ["air kelapa"], en: ["coconut water"], zh: ["椰子水"] },
    translation: { ngoko: "banyu klapa", krama: "toya krambil", "krama-inggil": "toya krambil" },
  },
  {
    aliases: { id: ["air mata"], en: ["tears"], zh: ["眼泪"] },
    translation: { ngoko: "luh", krama: "luh", "krama-inggil": "waspa" },
  },
  {
    aliases: { id: ["ajak"], en: ["invite to join"], zh: ["邀约"] },
    translation: { ngoko: "ngajak", krama: "ngajak", "krama-inggil": "ngajak" },
  },
  {
    aliases: { id: ["ajar"], en: ["teach"], zh: ["教"] },
    translation: { ngoko: "mulang", krama: "mucal", "krama-inggil": "mucal" },
  },
  {
    aliases: { id: ["ajari"], en: ["teach someone"], zh: ["教导"] },
    translation: { ngoko: "ngajari", krama: "mucali", "krama-inggil": "mucali" },
  },
  {
    aliases: { id: ["akad nikah"], en: ["marriage contract ceremony"], zh: ["婚约仪式"] },
    translation: { ngoko: "akad nikah", krama: "akad nikah", "krama-inggil": "akad nikah" },
  },
  {
    aliases: { id: ["akan"], en: ["will","going to"], zh: ["将；会"] },
    translation: { ngoko: "arep", krama: "badhe", "krama-inggil": "badhe" },
  },
  {
    aliases: { id: ["akar"], en: ["root"], zh: ["根"] },
    translation: { ngoko: "oyod", krama: "oyod", "krama-inggil": "oyod" },
  },
  {
    aliases: { id: ["akhir"], en: ["end"], zh: ["末尾"] },
    translation: { ngoko: "pungkasan", krama: "pungkasan", "krama-inggil": "pungkasan" },
  },
  {
    aliases: { id: ["akhir-akhir ini"], en: ["lately"], zh: ["最近"] },
    translation: { ngoko: "akhir-akhir iki", krama: "akhir-akhir menika", "krama-inggil": "akhir-akhir menika" },
  },
  {
    aliases: { id: ["akhirat"], en: ["afterlife"], zh: ["后世"] },
    translation: { ngoko: "akherat", krama: "akherat", "krama-inggil": "akherat" },
  },
  {
    aliases: { id: ["akhirnya"], en: ["finally"], zh: ["终于"] },
    translation: { ngoko: "pungkasane", krama: "pungkasanipun", "krama-inggil": "pungkasanipun" },
  },
  {
    aliases: { id: ["aki"], en: ["storage battery"], zh: ["蓄电池"] },
    translation: { ngoko: "aki", krama: "aki", "krama-inggil": "aki" },
  },
  {
    aliases: { id: ["akibatnya"], en: ["as a result"], zh: ["结果"] },
    translation: { ngoko: "akibate", krama: "akibatipun", "krama-inggil": "akibatipun" },
  },
  {
    aliases: { id: ["aksara"], en: ["script"], zh: ["文字"] },
    translation: { ngoko: "aksara", krama: "aksara", "krama-inggil": "aksara" },
  },
  {
    aliases: { id: ["aktor"], en: ["actor"], zh: ["男演员"] },
    translation: { ngoko: "aktor", krama: "aktor", "krama-inggil": "aktor" },
  },
  {
    aliases: { id: ["aktris"], en: ["actress"], zh: ["女演员"] },
    translation: { ngoko: "aktris", krama: "aktris", "krama-inggil": "aktris" },
  },
  {
    aliases: { id: ["aku","saya"], en: ["I","I am","me"], zh: ["我（非正式）"] },
    translation: { ngoko: "aku", krama: "kula", "krama-inggil": "kawula" },
  },
  {
    aliases: { id: ["akuarium"], en: ["aquarium"], zh: ["水族馆"] },
    translation: { ngoko: "akuarium", krama: "akuarium", "krama-inggil": "akuarium" },
  },
  {
    aliases: { id: ["akui"], en: ["admit"], zh: ["承认"] },
    translation: { ngoko: "ngakoni", krama: "ngakeni", "krama-inggil": "ngakeni" },
  },
  {
    aliases: { id: ["akun"], en: ["account"], zh: ["账号"] },
    translation: { ngoko: "akun", krama: "akun", "krama-inggil": "akun" },
  },
  {
    aliases: { id: ["akuntan"], en: ["accountant"], zh: ["会计师"] },
    translation: { ngoko: "akuntan", krama: "akuntan", "krama-inggil": "akuntan" },
  },
  {
    aliases: { id: ["alam"], en: ["nature"], zh: ["自然"] },
    translation: { ngoko: "alam", krama: "alam", "krama-inggil": "alam" },
  },
  {
    aliases: { id: ["alergi"], en: ["allergy"], zh: ["过敏"] },
    translation: { ngoko: "alergi", krama: "alergi", "krama-inggil": "alergi" },
  },
  {
    aliases: { id: ["alis"], en: ["eyebrow"], zh: ["眉毛"] },
    translation: { ngoko: "alis", krama: "alis", "krama-inggil": "alis" },
  },
  {
    aliases: { id: ["alkohol"], en: ["alcohol"], zh: ["酒精"] },
    translation: { ngoko: "alkohol", krama: "alkohol", "krama-inggil": "alkohol" },
  },
  {
    aliases: { id: ["alot"], en: ["tough to chew"], zh: ["难嚼的"] },
    translation: { ngoko: "alot", krama: "alot", "krama-inggil": "alot" },
  },
  {
    aliases: { id: ["alpukat"], en: ["avocado"], zh: ["牛油果"] },
    translation: { ngoko: "alpukat", krama: "alpukat", "krama-inggil": "alpukat" },
  },
  {
    aliases: { id: ["Alquran"], en: ["Quran"], zh: ["古兰经"] },
    translation: { ngoko: "Alquran", krama: "Alquran", "krama-inggil": "Alquran" },
  },
  {
    aliases: { id: ["alun-alun"], en: ["town square"], zh: ["城镇广场"] },
    translation: { ngoko: "alun-alun", krama: "alun-alun", "krama-inggil": "alun-alun" },
  },
  {
    aliases: { id: ["aman"], en: ["safe","secure"], zh: ["安全"] },
    translation: { ngoko: "aman", krama: "aman", "krama-inggil": "aman" },
  },
  {
    aliases: { id: ["amati"], en: ["observe"], zh: ["观察"] },
    translation: { ngoko: "ngamati", krama: "ngamati", "krama-inggil": "ngamati" },
  },
  {
    aliases: { id: ["ambeng"], en: ["ceremonial platter of rice and side dishes"], zh: ["仪式用米饭配菜拼盘"] },
    translation: { ngoko: "ambeng", krama: "ambeng", "krama-inggil": "ambeng" },
  },
  {
    aliases: { id: ["ambil"], en: ["take"], zh: ["拿取"] },
    translation: { ngoko: "njupuk", krama: "mendhet", "krama-inggil": "mundhut" },
  },
  {
    aliases: { id: ["ambulans"], en: ["ambulance"], zh: ["救护车"] },
    translation: { ngoko: "ambulans", krama: "ambulans", "krama-inggil": "ambulans" },
  },
  {
    aliases: { id: ["amis"], en: ["fishy-smelling"], zh: ["腥"] },
    translation: { ngoko: "amis", krama: "amis", "krama-inggil": "amis" },
  },
  {
    aliases: { id: ["amplas"], en: ["sand with sandpaper"], zh: ["用砂纸打磨"] },
    translation: { ngoko: "ngamplas", krama: "ngamplas", "krama-inggil": "ngamplas" },
  },
  {
    aliases: { id: ["amplop"], en: ["envelope"], zh: ["信封"] },
    translation: { ngoko: "amplop", krama: "amplop", "krama-inggil": "amplop" },
  },
  {
    aliases: { id: ["anak"], en: ["child"], zh: ["孩子"] },
    translation: { ngoko: "bocah", krama: "lare", "krama-inggil": "putra/putri" },
  },
  {
    aliases: { id: ["anak angkat"], en: ["adopted child"], zh: ["养子女"] },
    translation: { ngoko: "anak angkat", krama: "anak angkat", "krama-inggil": "putra angkat" },
  },
  {
    aliases: { id: ["anak bungsu"], en: ["youngest child"], zh: ["最小的孩子"] },
    translation: { ngoko: "anak ragil", krama: "anak ragil", "krama-inggil": "putra wuragil" },
  },
  {
    aliases: { id: ["anak kembar"], en: ["twins"], zh: ["双胞胎"] },
    translation: { ngoko: "anak kembar", krama: "anak kembar", "krama-inggil": "putra kembar" },
  },
  {
    aliases: { id: ["anak panah"], en: ["arrow"], zh: ["箭"] },
    translation: { ngoko: "panah", krama: "panah", "krama-inggil": "panah" },
  },
  {
    aliases: { id: ["anak piatu"], en: ["motherless child"], zh: ["丧母的孩子"] },
    translation: { ngoko: "anak piatu", krama: "anak piatu", "krama-inggil": "putra piatu" },
  },
  {
    aliases: { id: ["anak sulung"], en: ["eldest child"], zh: ["长子女"] },
    translation: { ngoko: "anak mbarep", krama: "anak pambajeng", "krama-inggil": "putra pambajeng" },
  },
  {
    aliases: { id: ["anak tengah"], en: ["middle child"], zh: ["排行居中的孩子"] },
    translation: { ngoko: "anak tengah", krama: "anak tengah", "krama-inggil": "putra tengah" },
  },
  {
    aliases: { id: ["anak tiri"], en: ["stepchild"], zh: ["继子女"] },
    translation: { ngoko: "anak kuwalon", krama: "anak kuwalon", "krama-inggil": "putra kuwalon" },
  },
  {
    aliases: { id: ["anak tunggal"], en: ["only child"], zh: ["独生子女"] },
    translation: { ngoko: "anak ontang-anting", krama: "anak ontang-anting", "krama-inggil": "putra ontang-anting" },
  },
  {
    aliases: { id: ["anak yatim"], en: ["fatherless child"], zh: ["丧父的孩子"] },
    translation: { ngoko: "anak yatim", krama: "anak yatim", "krama-inggil": "putra yatim" },
  },
  {
    aliases: { id: ["anak yatim piatu"], en: ["orphan"], zh: ["孤儿"] },
    translation: { ngoko: "anak yatim piatu", krama: "anak yatim piatu", "krama-inggil": "putra yatim piatu" },
  },
  {
    aliases: { id: ["ancam"], en: ["threaten"], zh: ["威胁"] },
    translation: { ngoko: "ngancam", krama: "ngancam", "krama-inggil": "ngancam" },
  },
  {
    aliases: { id: ["Anda"], en: ["you, formal"], zh: ["您"] },
    translation: { ngoko: "kowe", krama: "sampeyan", "krama-inggil": "panjenengan" },
  },
  {
    aliases: { id: ["andaikata"], en: ["supposing that"], zh: ["假如"] },
    translation: { ngoko: "upama", krama: "upami", "krama-inggil": "upami" },
  },
  {
    aliases: { id: ["anemia"], en: ["anemia"], zh: ["贫血"] },
    translation: { ngoko: "anemia", krama: "anemia", "krama-inggil": "anemia" },
  },
  {
    aliases: { id: ["anggaran"], en: ["budget"], zh: ["预算"] },
    translation: { ngoko: "anggaran", krama: "anggaran", "krama-inggil": "anggaran" },
  },
  {
    aliases: { id: ["anggrek"], en: ["orchid"], zh: ["兰花"] },
    translation: { ngoko: "anggrek", krama: "anggrek", "krama-inggil": "anggrek" },
  },
  {
    aliases: { id: ["angguk"], en: ["nod"], zh: ["点头"] },
    translation: { ngoko: "manthuk", krama: "manthuk", "krama-inggil": "manthuk" },
  },
  {
    aliases: { id: ["anggur"], en: ["grape"], zh: ["葡萄"] },
    translation: { ngoko: "anggur", krama: "anggur", "krama-inggil": "anggur" },
  },
  {
    aliases: { id: ["angin"], en: ["wind"], zh: ["风"] },
    translation: { ngoko: "angin", krama: "angin", "krama-inggil": "angin" },
  },
  {
    aliases: { id: ["angkat"], en: ["lift"], zh: ["抬起"] },
    translation: { ngoko: "ngangkat", krama: "ngangkat", "krama-inggil": "ngangkat" },
  },
  {
    aliases: { id: ["angkat besi"], en: ["weightlifting"], zh: ["举重"] },
    translation: { ngoko: "angkat besi", krama: "angkat besi", "krama-inggil": "angkat besi" },
  },
  {
    aliases: { id: ["angklung"], en: ["bamboo rattle instrument"], zh: ["竹摇乐器"] },
    translation: { ngoko: "angklung", krama: "angklung", "krama-inggil": "angklung" },
  },
  {
    aliases: { id: ["angkot"], en: ["public minivan"], zh: ["公共小巴"] },
    translation: { ngoko: "angkot", krama: "angkot", "krama-inggil": "angkot" },
  },
  {
    aliases: { id: ["angkuh"], en: ["haughty"], zh: ["高傲"] },
    translation: { ngoko: "kemaki", krama: "kemaki", "krama-inggil": "kemaki" },
  },
  {
    aliases: { id: ["angkut"], en: ["transport"], zh: ["搬运"] },
    translation: { ngoko: "ngangkut", krama: "ngangkut", "krama-inggil": "ngangkut" },
  },
  {
    aliases: { id: ["angsa"], en: ["goose"], zh: ["鹅"] },
    translation: { ngoko: "banyak", krama: "banyak", "krama-inggil": "banyak" },
  },
  {
    aliases: { id: ["angsuran"], en: ["installment"], zh: ["分期付款"] },
    translation: { ngoko: "cicilan", krama: "cicilan", "krama-inggil": "cicilan" },
  },
  {
    aliases: { id: ["anjing"], en: ["dog"], zh: ["狗"] },
    translation: { ngoko: "asu", krama: "segawon", "krama-inggil": "segawon" },
  },
  {
    aliases: { id: ["anjing laut"], en: ["seal"], zh: ["海豹"] },
    translation: { ngoko: "anjing laut", krama: "anjing laut", "krama-inggil": "anjing laut" },
  },
  {
    aliases: { id: ["anjurkan"], en: ["recommend"], zh: ["推荐"] },
    translation: { ngoko: "nganjurake", krama: "nganjuraken", "krama-inggil": "nganjuraken" },
  },
  {
    aliases: { id: ["antar"], en: ["accompany someone to a destination"], zh: ["送人"] },
    translation: { ngoko: "ngeterake", krama: "ngeteraken", "krama-inggil": "ndherekaken" },
  },
  {
    aliases: { id: ["antena"], en: ["antenna"], zh: ["天线"] },
    translation: { ngoko: "antena", krama: "antena", "krama-inggil": "antena" },
  },
  {
    aliases: { id: ["antibiotik"], en: ["antibiotic"], zh: ["抗生素"] },
    translation: { ngoko: "antibiotik", krama: "antibiotik", "krama-inggil": "antibiotik" },
  },
  {
    aliases: { id: ["anting"], en: ["earrings"], zh: ["耳环"] },
    translation: { ngoko: "anting-anting", krama: "anting-anting", "krama-inggil": "anting-anting" },
  },
  {
    aliases: { id: ["antiseptik"], en: ["antiseptic"], zh: ["抗菌剂"] },
    translation: { ngoko: "antiseptik", krama: "antiseptik", "krama-inggil": "antiseptik" },
  },
  {
    aliases: { id: ["antre"], en: ["queue"], zh: ["排队"] },
    translation: { ngoko: "antre", krama: "antre", "krama-inggil": "antre" },
  },
  {
    aliases: { id: ["anus"], en: ["anus"], zh: ["肛门"] },
    translation: { ngoko: "bol", krama: "bol", "krama-inggil": "bol" },
  },
  {
    aliases: { id: ["apa"], en: ["what"], zh: ["什么"] },
    translation: { ngoko: "apa", krama: "menapa", "krama-inggil": "menapa" },
  },
  {
    aliases: { id: ["apa kabar"], en: ["how are you?"], zh: ["你好吗？"] },
    translation: { ngoko: "piye kabare", krama: "pripun kabaripun", "krama-inggil": "pripun kabaripun" },
  },
  {
    aliases: { id: ["apa saja"], en: ["what things"], zh: ["哪些东西"] },
    translation: { ngoko: "apa wae", krama: "menapa kemawon", "krama-inggil": "menapa kemawon" },
  },
  {
    aliases: { id: ["apakah"], en: ["whether","question marker","do"], zh: ["是否"] },
    translation: { ngoko: "apa", krama: "menapa", "krama-inggil": "punapa" },
  },
  {
    aliases: { id: ["apalagi"], en: ["especially","let alone"], zh: ["更何况"] },
    translation: { ngoko: "luwih-luwih", krama: "langkung-langkung", "krama-inggil": "langkung-langkung" },
  },
  {
    aliases: { id: ["apartemen"], en: ["apartment"], zh: ["公寓"] },
    translation: { ngoko: "apartemen", krama: "apartemen", "krama-inggil": "apartemen" },
  },
  {
    aliases: { id: ["apel"], en: ["apple"], zh: ["苹果"] },
    translation: { ngoko: "apel", krama: "apel", "krama-inggil": "apel" },
  },
  {
    aliases: { id: ["apem"], en: ["fermented rice-flour cake"], zh: ["发酵米糕"] },
    translation: { ngoko: "apem", krama: "apem", "krama-inggil": "apem" },
  },
  {
    aliases: { id: ["api"], en: ["fire"], zh: ["火"] },
    translation: { ngoko: "geni", krama: "geni", "krama-inggil": "geni" },
  },
  {
    aliases: { id: ["aplikasi"], en: ["application"], zh: ["应用程序"] },
    translation: { ngoko: "aplikasi", krama: "aplikasi", "krama-inggil": "aplikasi" },
  },
  {
    aliases: { id: ["apotek"], en: ["pharmacy"], zh: ["药店"] },
    translation: { ngoko: "apotek", krama: "apotek", "krama-inggil": "apotek" },
  },
  {
    aliases: { id: ["apoteker"], en: ["pharmacist"], zh: ["药剂师"] },
    translation: { ngoko: "apotèker", krama: "apotèker", "krama-inggil": "apotèker" },
  },
  {
    aliases: { id: ["April"], en: ["April"], zh: ["四月"] },
    translation: { ngoko: "April", krama: "April", "krama-inggil": "April" },
  },
  {
    aliases: { id: ["arah"], en: ["direction"], zh: ["方向"] },
    translation: { ngoko: "arah", krama: "arah", "krama-inggil": "arah" },
  },
  {
    aliases: { id: ["arang"], en: ["charcoal"], zh: ["木炭"] },
    translation: { ngoko: "areng", krama: "areng", "krama-inggil": "areng" },
  },
  {
    aliases: { id: ["arena"], en: ["arena"], zh: ["竞技场"] },
    translation: { ngoko: "arena", krama: "arena", "krama-inggil": "arena" },
  },
  {
    aliases: { id: ["arsip"], en: ["archive"], zh: ["档案"] },
    translation: { ngoko: "arsip", krama: "arsip", "krama-inggil": "arsip" },
  },
  {
    aliases: { id: ["arsitek"], en: ["architect"], zh: ["建筑师"] },
    translation: { ngoko: "arsitèk", krama: "arsitèk", "krama-inggil": "arsitèk" },
  },
  {
    aliases: { id: ["artikan"], en: ["construe the meaning of"], zh: ["解释含义"] },
    translation: { ngoko: "ngartekake", krama: "ngartekaken", "krama-inggil": "ngartekaken" },
  },
  {
    aliases: { id: ["arus"], en: ["water current"], zh: ["水流"] },
    translation: { ngoko: "ilining banyu", krama: "ilining toya", "krama-inggil": "ilining toya" },
  },
  {
    aliases: { id: ["asah"], en: ["sharpen"], zh: ["磨利"] },
    translation: { ngoko: "ngasah", krama: "ngasah", "krama-inggil": "ngasah" },
  },
  {
    aliases: { id: ["asalkan"], en: ["provided that"], zh: ["只要"] },
    translation: { ngoko: "waton", krama: "waton", "krama-inggil": "waton" },
  },
  {
    aliases: { id: ["asam"], en: ["sour"], zh: ["酸"] },
    translation: { ngoko: "kecut", krama: "kecut", "krama-inggil": "kecut" },
  },
  {
    aliases: { id: ["asam jawa"], en: ["tamarind"], zh: ["罗望子"] },
    translation: { ngoko: "asem", krama: "asem", "krama-inggil": "asem" },
  },
  {
    aliases: { id: ["asam urat"], en: ["uric acid"], zh: ["尿酸"] },
    translation: { ngoko: "asam urat", krama: "asam urat", "krama-inggil": "asam urat" },
  },
  {
    aliases: { id: ["asap"], en: ["smoke"], zh: ["烟"] },
    translation: { ngoko: "kebul", krama: "kebul", "krama-inggil": "kebul" },
  },
  {
    aliases: { id: ["asbak"], en: ["ashtray"], zh: ["烟灰缸"] },
    translation: { ngoko: "asbak", krama: "asbak", "krama-inggil": "asbak" },
  },
  {
    aliases: { id: ["asin"], en: ["salty"], zh: ["咸"] },
    translation: { ngoko: "asin", krama: "asin", "krama-inggil": "asin" },
  },
  {
    aliases: { id: ["asma"], en: ["asthma"], zh: ["哮喘"] },
    translation: { ngoko: "asma", krama: "asma", "krama-inggil": "asma" },
  },
  {
    aliases: { id: ["asmaradana"], en: ["asmaradana poetic meter"], zh: ["阿斯马拉达纳诗律"] },
    translation: { ngoko: "asmaradana", krama: "asmaradana", "krama-inggil": "asmaradana" },
  },
  {
    aliases: { id: ["asrama"], en: ["dormitory"], zh: ["宿舍"] },
    translation: { ngoko: "asrama", krama: "asrama", "krama-inggil": "asrama" },
  },
  {
    aliases: { id: ["asuh"], en: ["nurture"], zh: ["抚育"] },
    translation: { ngoko: "ngasuh", krama: "ngasuh", "krama-inggil": "ngasuh" },
  },
  {
    aliases: { id: ["atap"], en: ["roof"], zh: ["屋顶"] },
    translation: { ngoko: "payon", krama: "payon", "krama-inggil": "payon" },
  },
  {
    aliases: { id: ["atas"], en: ["top","above"], zh: ["上方"] },
    translation: { ngoko: "dhuwur", krama: "inggil", "krama-inggil": "inggil" },
  },
  {
    aliases: { id: ["atasan"], en: ["superior"], zh: ["上司"] },
    translation: { ngoko: "dhuwuran", krama: "pimpinan", "krama-inggil": "pimpinan" },
  },
  {
    aliases: { id: ["atau"], en: ["or"], zh: ["或者"] },
    translation: { ngoko: "utawa", krama: "utawi", "krama-inggil": "utawi" },
  },
  {
    aliases: { id: ["atau bahkan"], en: ["or even"], zh: ["甚至或者"] },
    translation: { ngoko: "utawa malah", krama: "utawi malah", "krama-inggil": "utawi malah" },
  },
  {
    aliases: { id: ["atlet"], en: ["athlete"], zh: ["运动员"] },
    translation: { ngoko: "atlèt", krama: "atlèt", "krama-inggil": "atlèt" },
  },
  {
    aliases: { id: ["atletik"], en: ["athletics"], zh: ["田径"] },
    translation: { ngoko: "atletik", krama: "atletik", "krama-inggil": "atletik" },
  },
  {
    aliases: { id: ["ATM"], en: ["ATM"], zh: ["自动取款机"] },
    translation: { ngoko: "ATM", krama: "ATM", "krama-inggil": "ATM" },
  },
  {
    aliases: { id: ["auditor"], en: ["auditor"], zh: ["审计师"] },
    translation: { ngoko: "auditor", krama: "auditor", "krama-inggil": "auditor" },
  },
  {
    aliases: { id: ["aula"], en: ["assembly hall"], zh: ["礼堂"] },
    translation: { ngoko: "aula", krama: "aula", "krama-inggil": "aula" },
  },
  {
    aliases: { id: ["awal"], en: ["beginning"], zh: ["开始"] },
    translation: { ngoko: "wiwitan", krama: "wiwitan", "krama-inggil": "wiwitan" },
  },
  {
    aliases: { id: ["awan"], en: ["cloud"], zh: ["云"] },
    translation: { ngoko: "mega", krama: "mega", "krama-inggil": "mega" },
  },
  {
    aliases: { id: ["awas"], en: ["supervise"], zh: ["监督"] },
    translation: { ngoko: "ngawasi", krama: "ngawasi", "krama-inggil": "ngawasi" },
  },
  {
    aliases: { id: ["ayah"], en: ["father"], zh: ["父亲"] },
    translation: { ngoko: "bapak", krama: "rama", "krama-inggil": "rama" },
  },
  {
    aliases: { id: ["ayah angkat"], en: ["adoptive father"], zh: ["养父"] },
    translation: { ngoko: "bapak angkat", krama: "bapak angkat", "krama-inggil": "rama angkat" },
  },
  {
    aliases: { id: ["ayah mertua"], en: ["father-in-law"], zh: ["公公；岳父"] },
    translation: { ngoko: "maratuwa lanang", krama: "marasepuh jaler", "krama-inggil": "marasepuh kakung" },
  },
  {
    aliases: { id: ["ayah tiri"], en: ["stepfather"], zh: ["继父"] },
    translation: { ngoko: "bapak kuwalon", krama: "bapak kuwalon", "krama-inggil": "rama kuwalon" },
  },
  {
    aliases: { id: ["ayak"], en: ["sift"], zh: ["过筛"] },
    translation: { ngoko: "ngayak", krama: "ngayak", "krama-inggil": "ngayak" },
  },
  {
    aliases: { id: ["ayam"], en: ["chicken"], zh: ["鸡"] },
    translation: { ngoko: "pitik", krama: "ayam", "krama-inggil": "ayam" },
  },
  {
    aliases: { id: ["ayo"], en: ["come on","let us"], zh: ["来吧"] },
    translation: { ngoko: "ayo", krama: "mangga", "krama-inggil": "mangga" },
  },
  {
    aliases: { id: ["ayun"], en: ["swing","rock"], zh: ["摇动"] },
    translation: { ngoko: "ngayun", krama: "ngayun", "krama-inggil": "ngayun" },
  },
  {
    aliases: { id: ["azan"], en: ["call to prayer"], zh: ["宣礼"] },
    translation: { ngoko: "azan", krama: "azan", "krama-inggil": "azan" },
  },
  {
    aliases: { id: ["babad"], en: ["traditional historical chronicle"], zh: ["传统历史编年记"] },
    translation: { ngoko: "babad", krama: "babad", "krama-inggil": "babad" },
  },
  {
    aliases: { id: ["babi"], en: ["pig"], zh: ["猪"] },
    translation: { ngoko: "babi", krama: "babi", "krama-inggil": "babi" },
  },
  {
    aliases: { id: ["babi hutan"], en: ["wild boar"], zh: ["野猪"] },
    translation: { ngoko: "celeng", krama: "celeng", "krama-inggil": "celeng" },
  },
  {
    aliases: { id: ["baca"], en: ["read"], zh: ["阅读"] },
    translation: { ngoko: "maca", krama: "maos", "krama-inggil": "maos" },
  },
  {
    aliases: { id: ["badai"], en: ["storm"], zh: ["暴风雨"] },
    translation: { ngoko: "prahara", krama: "prahara", "krama-inggil": "prahara" },
  },
  {
    aliases: { id: ["badak"], en: ["rhinoceros"], zh: ["犀牛"] },
    translation: { ngoko: "badhak", krama: "badhak", "krama-inggil": "badhak" },
  },
  {
    aliases: { id: ["bagaimana"], en: ["how"], zh: ["怎样；如何"] },
    translation: { ngoko: "piye", krama: "kepripun", "krama-inggil": "kepripun" },
  },
  {
    aliases: { id: ["bagaimana jika"], en: ["what if"], zh: ["如果……怎么办"] },
    translation: { ngoko: "piye yen", krama: "kados pundi menawi", "krama-inggil": "kados pundi menawi" },
  },
  {
    aliases: { id: ["bagasi"], en: ["luggage compartment"], zh: ["行李舱"] },
    translation: { ngoko: "bagasi", krama: "bagasi", "krama-inggil": "bagasi" },
  },
  {
    aliases: { id: ["bagi"], en: ["divide into portions"], zh: ["分份"] },
    translation: { ngoko: "mbagi", krama: "mbagi", "krama-inggil": "mbagi" },
  },
  {
    aliases: { id: ["bagian"], en: ["section"], zh: ["部门"] },
    translation: { ngoko: "bagean", krama: "perangan", "krama-inggil": "perangan" },
  },
  {
    aliases: { id: ["bagus"], en: ["good","nice"], zh: ["好；不错"] },
    translation: { ngoko: "apik", krama: "sae", "krama-inggil": "sae" },
  },
  {
    aliases: { id: ["bahagia"], en: ["happy"], zh: ["幸福"] },
    translation: { ngoko: "bagya", krama: "bagya", "krama-inggil": "bagya" },
  },
  {
    aliases: { id: ["bahan bakar"], en: ["fuel"], zh: ["燃料"] },
    translation: { ngoko: "bahan bakar", krama: "bahan bakar", "krama-inggil": "bahan bakar" },
  },
  {
    aliases: { id: ["bahas"], en: ["discuss a topic"], zh: ["探讨"] },
    translation: { ngoko: "ngrembug", krama: "ngrembag", "krama-inggil": "ngrembag" },
  },
  {
    aliases: { id: ["bahasa"], en: ["language"], zh: ["语言"] },
    translation: { ngoko: "basa", krama: "basa", "krama-inggil": "basa" },
  },
  {
    aliases: { id: ["bahkan"], en: ["even"], zh: ["甚至"] },
    translation: { ngoko: "malah", krama: "malah", "krama-inggil": "malah" },
  },
  {
    aliases: { id: ["bahu"], en: ["shoulder"], zh: ["肩膀"] },
    translation: { ngoko: "pundhak", krama: "pundhak", "krama-inggil": "pamidhangan" },
  },
  {
    aliases: { id: ["bahwa"], en: ["that"], zh: ["引出陈述内容的连接词"] },
    translation: { ngoko: "yen", krama: "bilih", "krama-inggil": "bilih" },
  },
  {
    aliases: { id: ["baik"], en: ["good","well"], zh: ["好；良好"] },
    translation: { ngoko: "apik", krama: "sae", "krama-inggil": "sae" },
  },
  {
    aliases: { id: ["baik ... maupun ..."], en: ["whether ... or ...","both ... and ..."], zh: ["无论……还是……都"] },
    translation: { ngoko: "... utawa ... padha wae", krama: "... utawi ... sami kemawon", "krama-inggil": "... utawi ... sami kemawon" },
  },
  {
    aliases: { id: ["baik-baik saja"], en: ["just fine"], zh: ["一切都好"] },
    translation: { ngoko: "apik-apik wae", krama: "sae-sae kemawon", "krama-inggil": "sae-sae kemawon" },
  },
  {
    aliases: { id: ["baiklah"], en: ["all right"], zh: ["好吧"] },
    translation: { ngoko: "ya wis", krama: "inggih sampun", "krama-inggil": "inggih sampun" },
  },
  {
    aliases: { id: ["bajaj"], en: ["auto rickshaw"], zh: ["机动三轮出租车"] },
    translation: { ngoko: "bajaj", krama: "bajaj", "krama-inggil": "bajaj" },
  },
  {
    aliases: { id: ["bajak"], en: ["plow"], zh: ["犁"] },
    translation: { ngoko: "luku", krama: "luku", "krama-inggil": "luku" },
  },
  {
    aliases: { id: ["bajing"], en: ["squirrel"], zh: ["松鼠"] },
    translation: { ngoko: "bajing", krama: "bajing", "krama-inggil": "bajing" },
  },
  {
    aliases: { id: ["baju"], en: ["clothes","shirt"], zh: ["衣服；上衣"] },
    translation: { ngoko: "klambi", krama: "rasukan", "krama-inggil": "rasukan" },
  },
  {
    aliases: { id: ["baju bayi"], en: ["baby clothes"], zh: ["婴儿服"] },
    translation: { ngoko: "klambi bayi", krama: "rasukan bayi", "krama-inggil": "ageman bayi" },
  },
  {
    aliases: { id: ["baju pengantin"], en: ["wedding attire"], zh: ["婚礼服"] },
    translation: { ngoko: "klambi penganten", krama: "rasukan penganten", "krama-inggil": "ageman penganten" },
  },
  {
    aliases: { id: ["baju renang"], en: ["swimsuit"], zh: ["泳衣"] },
    translation: { ngoko: "klambi renang", krama: "rasukan renang", "krama-inggil": "ageman renang" },
  },
  {
    aliases: { id: ["bak"], en: ["water tank"], zh: ["水槽"] },
    translation: { ngoko: "bak", krama: "bak", "krama-inggil": "bak" },
  },
  {
    aliases: { id: ["bakar"], en: ["burn"], zh: ["焚烧"] },
    translation: { ngoko: "ngobong", krama: "mbesmi", "krama-inggil": "mbesmi" },
  },
  {
    aliases: { id: ["baki"], en: ["serving tray"], zh: ["托盘"] },
    translation: { ngoko: "nampan", krama: "nampan", "krama-inggil": "nampan" },
  },
  {
    aliases: { id: ["bakso"], en: ["meatballs"], zh: ["肉丸"] },
    translation: { ngoko: "bakso", krama: "bakso", "krama-inggil": "bakso" },
  },
  {
    aliases: { id: ["bakwan"], en: ["vegetable fritter"], zh: ["蔬菜炸饼"] },
    translation: { ngoko: "bakwan", krama: "bakwan", "krama-inggil": "bakwan" },
  },
  {
    aliases: { id: ["balai desa"], en: ["village hall"], zh: ["村公所"] },
    translation: { ngoko: "balai desa", krama: "balai dhusun", "krama-inggil": "balai dhusun" },
  },
  {
    aliases: { id: ["balap sepeda"], en: ["cycle racing"], zh: ["自行车赛"] },
    translation: { ngoko: "balap sepedha", krama: "balap sepedha", "krama-inggil": "balap sepedha" },
  },
  {
    aliases: { id: ["balik"], en: ["turn over"], zh: ["翻身"] },
    translation: { ngoko: "malik", krama: "malik", "krama-inggil": "malik" },
  },
  {
    aliases: { id: ["balita"], en: ["child under five"], zh: ["五岁以下儿童"] },
    translation: { ngoko: "bocah umur sangisore limang taun", krama: "lare umur sangandhaping gangsal taun", "krama-inggil": "lare yuswa sangandhaping gangsal taun" },
  },
  {
    aliases: { id: ["balkon"], en: ["balcony"], zh: ["阳台"] },
    translation: { ngoko: "balkon", krama: "balkon", "krama-inggil": "balkon" },
  },
  {
    aliases: { id: ["balok"], en: ["beam"], zh: ["横梁"] },
    translation: { ngoko: "blandar", krama: "blandar", "krama-inggil": "blandar" },
  },
  {
    aliases: { id: ["balut"], en: ["bandage","wrap"], zh: ["包扎"] },
    translation: { ngoko: "mbebet", krama: "mbebet", "krama-inggil": "mbebet" },
  },
  {
    aliases: { id: ["bambu"], en: ["bamboo"], zh: ["竹子"] },
    translation: { ngoko: "pring", krama: "deling", "krama-inggil": "deling" },
  },
  {
    aliases: { id: ["ban"], en: ["tire"], zh: ["轮胎"] },
    translation: { ngoko: "ban", krama: "ban", "krama-inggil": "ban" },
  },
  {
    aliases: { id: ["bandana"], en: ["bandana"], zh: ["方头巾"] },
    translation: { ngoko: "bandana", krama: "bandana", "krama-inggil": "bandana" },
  },
  {
    aliases: { id: ["bandara"], en: ["airport"], zh: ["机场"] },
    translation: { ngoko: "bandhara", krama: "bandhara", "krama-inggil": "bandhara" },
  },
  {
    aliases: { id: ["bandel"], en: ["unruly"], zh: ["不听话"] },
    translation: { ngoko: "mbeling", krama: "mbeling", "krama-inggil": "mbeling" },
  },
  {
    aliases: { id: ["bandeng"], en: ["milkfish"], zh: ["虱目鱼"] },
    translation: { ngoko: "bandeng", krama: "bandeng", "krama-inggil": "bandeng" },
  },
  {
    aliases: { id: ["bandingkan"], en: ["compare"], zh: ["比较"] },
    translation: { ngoko: "mbandhingake", krama: "mbandhingaken", "krama-inggil": "mbandhingaken" },
  },
  {
    aliases: { id: ["bangau"], en: ["stork"], zh: ["鹳"] },
    translation: { ngoko: "bango", krama: "bango", "krama-inggil": "bango" },
  },
  {
    aliases: { id: ["bangga"], en: ["proud"], zh: ["自豪"] },
    translation: { ngoko: "mongkog", krama: "mongkog", "krama-inggil": "mongkog" },
  },
  {
    aliases: { id: ["banggakan"], en: ["take pride in"], zh: ["引以为荣"] },
    translation: { ngoko: "nggunggung", krama: "nggunggung", "krama-inggil": "nggunggung" },
  },
  {
    aliases: { id: ["bangku"], en: ["bench"], zh: ["长凳"] },
    translation: { ngoko: "bangku", krama: "bangku", "krama-inggil": "bangku" },
  },
  {
    aliases: { id: ["bangun"], en: ["wake up","build"], zh: ["起床；建造"] },
    translation: { ngoko: "tangi", krama: "wungu", "krama-inggil": "wungu" },
  },
  {
    aliases: { id: ["bangunan"], en: ["structure"], zh: ["建筑物"] },
    translation: { ngoko: "wewangunan", krama: "wewangunan", "krama-inggil": "wewangunan" },
  },
  {
    aliases: { id: ["bangunkan"], en: ["wake someone up"], zh: ["叫醒"] },
    translation: { ngoko: "nggugah", krama: "nggugah", "krama-inggil": "nggugah" },
  },
  {
    aliases: { id: ["banjir"], en: ["flood"], zh: ["洪水"] },
    translation: { ngoko: "banjir", krama: "banjir", "krama-inggil": "banjir" },
  },
  {
    aliases: { id: ["bank"], en: ["bank"], zh: ["银行"] },
    translation: { ngoko: "bank", krama: "bank", "krama-inggil": "bank" },
  },
  {
    aliases: { id: ["bank daya"], en: ["power bank"], zh: ["充电宝"] },
    translation: { ngoko: "power bank", krama: "power bank", "krama-inggil": "power bank" },
  },
  {
    aliases: { id: ["bantah"], en: ["contradict"], zh: ["反驳"] },
    translation: { ngoko: "mbantah", krama: "mbantah", "krama-inggil": "mbantah" },
  },
  {
    aliases: { id: ["bantal"], en: ["pillow"], zh: ["枕头"] },
    translation: { ngoko: "bantal", krama: "bantal", "krama-inggil": "bantal" },
  },
  {
    aliases: { id: ["bantu"], en: ["help"], zh: ["帮助"] },
    translation: { ngoko: "mbantu", krama: "mbiyantu", "krama-inggil": "mbiyantu" },
  },
  {
    aliases: { id: ["banyak"], en: ["many","much"], zh: ["很多"] },
    translation: { ngoko: "akeh", krama: "kathah", "krama-inggil": "kathah" },
  },
  {
    aliases: { id: ["bapak"], en: ["father","sir"], zh: ["爸爸；先生"] },
    translation: { ngoko: "bapak", krama: "bapak", "krama-inggil": "bapak" },
  },
  {
    aliases: { id: ["bapak guru"], en: ["sir, addressing a male teacher"], zh: ["男老师"] },
    translation: { ngoko: "pak guru", krama: "bapak guru", "krama-inggil": "bapak guru" },
  },
  {
    aliases: { id: ["bapak kiai"], en: ["respected male Islamic teacher"], zh: ["尊敬的伊斯兰教老师"] },
    translation: { ngoko: "pak kyai", krama: "bapak kyai", "krama-inggil": "bapak kyai" },
  },
  {
    aliases: { id: ["bapak lurah"], en: ["Mr. village head"], zh: ["村长先生"] },
    translation: { ngoko: "pak lurah", krama: "bapak lurah", "krama-inggil": "bapak lurah" },
  },
  {
    aliases: { id: ["barang"], en: ["goods"], zh: ["物品"] },
    translation: { ngoko: "barang", krama: "barang", "krama-inggil": "barang" },
  },
  {
    aliases: { id: ["barat"], en: ["west"], zh: ["西"] },
    translation: { ngoko: "kulon", krama: "kilen", "krama-inggil": "kilen" },
  },
  {
    aliases: { id: ["barat daya"], en: ["southwest"], zh: ["西南"] },
    translation: { ngoko: "kidul kulon", krama: "kidul kilen", "krama-inggil": "kidul kilen" },
  },
  {
    aliases: { id: ["barat laut"], en: ["northwest"], zh: ["西北"] },
    translation: { ngoko: "lor kulon", krama: "ler kilen", "krama-inggil": "ler kilen" },
  },
  {
    aliases: { id: ["baring"], en: ["lie down"], zh: ["躺下"] },
    translation: { ngoko: "turon", krama: "tileman", "krama-inggil": "sarean" },
  },
  {
    aliases: { id: ["baringkan"], en: ["lay someone down"], zh: ["让人躺下"] },
    translation: { ngoko: "ngglethakake", krama: "ngglethakaken", "krama-inggil": "ngglethakaken" },
  },
  {
    aliases: { id: ["barista"], en: ["barista"], zh: ["咖啡师"] },
    translation: { ngoko: "barista", krama: "barista", "krama-inggil": "barista" },
  },
  {
    aliases: { id: ["barter"], en: ["barter"], zh: ["以物易物"] },
    translation: { ngoko: "ijol-ijolan", krama: "ijol-ijolan", "krama-inggil": "ijol-ijolan" },
  },
  {
    aliases: { id: ["baru"], en: ["new"], zh: ["新"] },
    translation: { ngoko: "anyar", krama: "enggal", "krama-inggil": "enggal" },
  },
  {
    aliases: { id: ["baru saja"], en: ["just now"], zh: ["刚刚"] },
    translation: { ngoko: "lagi wae", krama: "nembe kemawon", "krama-inggil": "nembe kemawon" },
  },
  {
    aliases: { id: ["barusan"], en: ["just now"], zh: ["刚刚"] },
    translation: { ngoko: "lagi wae", krama: "nembe kemawon", "krama-inggil": "nembe kemawon" },
  },
  {
    aliases: { id: ["basah"], en: ["wet"], zh: ["湿"] },
    translation: { ngoko: "teles", krama: "teles", "krama-inggil": "teles" },
  },
  {
    aliases: { id: ["baskom"], en: ["basin"], zh: ["盆"] },
    translation: { ngoko: "baskom", krama: "baskom", "krama-inggil": "baskom" },
  },
  {
    aliases: { id: ["basuh"], en: ["wash a body part"], zh: ["洗净"] },
    translation: { ngoko: "mbasuh", krama: "mbasuh", "krama-inggil": "mbasuh" },
  },
  {
    aliases: { id: ["batal"], en: ["cancel"], zh: ["取消"] },
    translation: { ngoko: "mbatalake", krama: "mbatalaken", "krama-inggil": "mbatalaken" },
  },
  {
    aliases: { id: ["batang"], en: ["trunk or stem"], zh: ["茎干"] },
    translation: { ngoko: "batang", krama: "batang", "krama-inggil": "batang" },
  },
  {
    aliases: { id: ["batas"], en: ["boundary"], zh: ["边界"] },
    translation: { ngoko: "wates", krama: "wates", "krama-inggil": "wates" },
  },
  {
    aliases: { id: ["baterai"], en: ["battery"], zh: ["电池"] },
    translation: { ngoko: "bateré", krama: "bateré", "krama-inggil": "bateré" },
  },
  {
    aliases: { id: ["batik"], en: ["batik"], zh: ["蜡染布"] },
    translation: { ngoko: "bathik", krama: "bathik", "krama-inggil": "bathik" },
  },
  {
    aliases: { id: ["batu"], en: ["stone"], zh: ["石头"] },
    translation: { ngoko: "watu", krama: "sela", "krama-inggil": "sela" },
  },
  {
    aliases: { id: ["batuk"], en: ["cough"], zh: ["咳嗽"] },
    translation: { ngoko: "watuk", krama: "watuk", "krama-inggil": "watuk" },
  },
  {
    aliases: { id: ["bawa"], en: ["carry"], zh: ["携带"] },
    translation: { ngoko: "nggawa", krama: "mbekta", "krama-inggil": "ngasta" },
  },
  {
    aliases: { id: ["bawah"], en: ["below","under"], zh: ["下面；之下"] },
    translation: { ngoko: "ngisor", krama: "andhap", "krama-inggil": "andhap" },
  },
  {
    aliases: { id: ["bawahan"], en: ["subordinate"], zh: ["下属"] },
    translation: { ngoko: "andhahan", krama: "andhahan", "krama-inggil": "andhahan" },
  },
  {
    aliases: { id: ["bawang"], en: ["garlic or onion"], zh: ["葱蒜"] },
    translation: { ngoko: "bawang", krama: "bawang", "krama-inggil": "bawang" },
  },
  {
    aliases: { id: ["bawang daun"], en: ["scallion"], zh: ["大葱"] },
    translation: { ngoko: "loncang", krama: "loncang", "krama-inggil": "loncang" },
  },
  {
    aliases: { id: ["bawang merah"], en: ["shallot"], zh: ["红葱头"] },
    translation: { ngoko: "brambang", krama: "brambang", "krama-inggil": "brambang" },
  },
  {
    aliases: { id: ["bawang putih"], en: ["garlic"], zh: ["大蒜"] },
    translation: { ngoko: "bawang", krama: "bawang", "krama-inggil": "bawang" },
  },
  {
    aliases: { id: ["bawel"], en: ["chattering"], zh: ["喋喋不休"] },
    translation: { ngoko: "criwis", krama: "criwis", "krama-inggil": "criwis" },
  },
  {
    aliases: { id: ["bayam"], en: ["amaranth"], zh: ["苋菜"] },
    translation: { ngoko: "bayem", krama: "bayem", "krama-inggil": "bayem" },
  },
  {
    aliases: { id: ["bayangkan"], en: ["imagine"], zh: ["想象"] },
    translation: { ngoko: "mbayangake", krama: "mbayangaken", "krama-inggil": "mbayangaken" },
  },
  {
    aliases: { id: ["bayar"], en: ["pay"], zh: ["付款"] },
    translation: { ngoko: "mbayar", krama: "mbayar", "krama-inggil": "mbayar" },
  },
  {
    aliases: { id: ["bayi"], en: ["baby"], zh: ["婴儿"] },
    translation: { ngoko: "bayi", krama: "bayi", "krama-inggil": "bayi" },
  },
  {
    aliases: { id: ["beasiswa"], en: ["scholarship"], zh: ["奖学金"] },
    translation: { ngoko: "beasiswa", krama: "beasiswa", "krama-inggil": "beasiswa" },
  },
  {
    aliases: { id: ["bebek"], en: ["duck"], zh: ["鸭"] },
    translation: { ngoko: "bebek", krama: "bebek", "krama-inggil": "bebek" },
  },
  {
    aliases: { id: ["beberapa"], en: ["some","several"], zh: ["一些；几个"] },
    translation: { ngoko: "sawetara", krama: "sawetawis", "krama-inggil": "sawetawis" },
  },
  {
    aliases: { id: ["becak"], en: ["cycle rickshaw"], zh: ["人力三轮车"] },
    translation: { ngoko: "becak", krama: "becak", "krama-inggil": "becak" },
  },
  {
    aliases: { id: ["bedakan"], en: ["distinguish"], zh: ["区分"] },
    translation: { ngoko: "mbedakake", krama: "mbedakaken", "krama-inggil": "mbedakaken" },
  },
  {
    aliases: { id: ["beduk"], en: ["large mosque drum"], zh: ["清真寺大鼓"] },
    translation: { ngoko: "bedhug", krama: "bedhug", "krama-inggil": "bedhug" },
  },
  {
    aliases: { id: ["bedung"], en: ["swaddle"], zh: ["包裹婴儿"] },
    translation: { ngoko: "mbedhong", krama: "mbedhong", "krama-inggil": "mbedhong" },
  },
  {
    aliases: { id: ["begitu selesai"], en: ["as soon as it is finished"], zh: ["一完成就"] },
    translation: { ngoko: "bareng wis rampung", krama: "sareng sampun rampung", "krama-inggil": "sareng sampun rampung" },
  },
  {
    aliases: { id: ["bekali"], en: ["provide with supplies"], zh: ["配给用品"] },
    translation: { ngoko: "mbekali", krama: "mbekali", "krama-inggil": "mbekali" },
  },
  {
    aliases: { id: ["bekerja"], en: ["work"], zh: ["工作"] },
    translation: { ngoko: "nyambut gawe", krama: "nyambut damel", "krama-inggil": "nyambut damel" },
  },
  {
    aliases: { id: ["bekicot"], en: ["giant African land snail"], zh: ["非洲大蜗牛"] },
    translation: { ngoko: "bekicot", krama: "bekicot", "krama-inggil": "bekicot" },
  },
  {
    aliases: { id: ["bel"], en: ["bell"], zh: ["铃"] },
    translation: { ngoko: "bel", krama: "bel", "krama-inggil": "bel" },
  },
  {
    aliases: { id: ["bela diri"], en: ["martial arts"], zh: ["武术"] },
    translation: { ngoko: "bela dhiri", krama: "bela dhiri", "krama-inggil": "bela dhiri" },
  },
  {
    aliases: { id: ["belah"], en: ["split in two"], zh: ["分成两半的"] },
    translation: { ngoko: "sigar", krama: "sigar", "krama-inggil": "sigar" },
  },
  {
    aliases: { id: ["belajar"], en: ["study","learn"], zh: ["学习"] },
    translation: { ngoko: "sinau", krama: "sinau", "krama-inggil": "sinau" },
  },
  {
    aliases: { id: ["belakang"], en: ["behind","back"], zh: ["后面；背后"] },
    translation: { ngoko: "mburi", krama: "wingking", "krama-inggil": "wingking" },
  },
  {
    aliases: { id: ["belalang"], en: ["grasshopper"], zh: ["蚱蜢"] },
    translation: { ngoko: "walang", krama: "walang", "krama-inggil": "walang" },
  },
  {
    aliases: { id: ["belanja"], en: ["shop for necessities"], zh: ["采购"] },
    translation: { ngoko: "blanja", krama: "blanja", "krama-inggil": "blanja" },
  },
  {
    aliases: { id: ["beli"], en: ["buy"], zh: ["买"] },
    translation: { ngoko: "tuku", krama: "tumbas", "krama-inggil": "mundhut" },
  },
  {
    aliases: { id: ["beliau"], en: ["he or she, respectful"], zh: ["他或她（敬称）"] },
    translation: { ngoko: "dheweke", krama: "piyambakipun", "krama-inggil": "panjenenganipun" },
  },
  {
    aliases: { id: ["belikan"], en: ["buy for someone"], zh: ["给人买"] },
    translation: { ngoko: "nukokake", krama: "numbasaken", "krama-inggil": "numbasaken" },
  },
  {
    aliases: { id: ["belimbing"], en: ["star fruit"], zh: ["杨桃"] },
    translation: { ngoko: "blimbing", krama: "blimbing", "krama-inggil": "blimbing" },
  },
  {
    aliases: { id: ["belok"], en: ["turn"], zh: ["转弯"] },
    translation: { ngoko: "menggok", krama: "menggok", "krama-inggil": "menggok" },
  },
  {
    aliases: { id: ["beludru"], en: ["velvet"], zh: ["天鹅绒"] },
    translation: { ngoko: "bludru", krama: "bludru", "krama-inggil": "bludru" },
  },
  {
    aliases: { id: ["belum"], en: ["not yet"], zh: ["还没有"] },
    translation: { ngoko: "durung", krama: "dereng", "krama-inggil": "dereng" },
  },
  {
    aliases: { id: ["belum pernah"], en: ["never before"], zh: ["从未"] },
    translation: { ngoko: "durung tau", krama: "dereng nate", "krama-inggil": "dereng nate" },
  },
  {
    aliases: { id: ["belum tentu"], en: ["not necessarily"], zh: ["未必"] },
    translation: { ngoko: "durung mesthi", krama: "dereng mesthi", "krama-inggil": "dereng mesthi" },
  },
  {
    aliases: { id: ["belum tidur"], en: ["not asleep yet"], zh: ["还没睡吗"] },
    translation: { ngoko: "durung turu", krama: "dereng tilem", "krama-inggil": "dereng sare" },
  },
  {
    aliases: { id: ["belut"], en: ["swamp eel"], zh: ["黄鳝"] },
    translation: { ngoko: "welut", krama: "welut", "krama-inggil": "welut" },
  },
  {
    aliases: { id: ["benang"], en: ["thread"], zh: ["线"] },
    translation: { ngoko: "bolah", krama: "bolah", "krama-inggil": "bolah" },
  },
  {
    aliases: { id: ["benar-benar"], en: ["really"], zh: ["确实"] },
    translation: { ngoko: "tenan", krama: "saestu", "krama-inggil": "saestu" },
  },
  {
    aliases: { id: ["benarkan"], en: ["confirm as correct"], zh: ["确认正确"] },
    translation: { ngoko: "mbenerake", krama: "leresaken", "krama-inggil": "leresaken" },
  },
  {
    aliases: { id: ["benci"], en: ["hate"], zh: ["憎恨"] },
    translation: { ngoko: "sengit", krama: "sengit", "krama-inggil": "sengit" },
  },
  {
    aliases: { id: ["bendahara"], en: ["treasurer"], zh: ["财务主管"] },
    translation: { ngoko: "bendahara", krama: "bendahara", "krama-inggil": "bendahara" },
  },
  {
    aliases: { id: ["bendera"], en: ["flag"], zh: ["旗帜"] },
    translation: { ngoko: "gendhera", krama: "gendhera", "krama-inggil": "gendhera" },
  },
  {
    aliases: { id: ["bendungan"], en: ["dam"], zh: ["水坝"] },
    translation: { ngoko: "bendungan", krama: "bendungan", "krama-inggil": "bendungan" },
  },
  {
    aliases: { id: ["bengis"], en: ["ferocious"], zh: ["凶残"] },
    translation: { ngoko: "wengis", krama: "wengis", "krama-inggil": "wengis" },
  },
  {
    aliases: { id: ["bengkah"], en: ["split open"], zh: ["裂开的"] },
    translation: { ngoko: "bengkah", krama: "bengkah", "krama-inggil": "bengkah" },
  },
  {
    aliases: { id: ["bengkak"], en: ["swollen"], zh: ["肿的"] },
    translation: { ngoko: "abuh", krama: "abuh", "krama-inggil": "abuh" },
  },
  {
    aliases: { id: ["bengkel"], en: ["repair shop"], zh: ["修理厂"] },
    translation: { ngoko: "bengkel", krama: "bengkel", "krama-inggil": "bengkel" },
  },
  {
    aliases: { id: ["bengkok"], en: ["bent"], zh: ["弯的"] },
    translation: { ngoko: "bengkong", krama: "bengkong", "krama-inggil": "bengkong" },
  },
  {
    aliases: { id: ["benjol"], en: ["having a bump"], zh: ["起包的"] },
    translation: { ngoko: "benjol", krama: "benjol", "krama-inggil": "benjol" },
  },
  {
    aliases: { id: ["bensin"], en: ["gasoline"], zh: ["汽油"] },
    translation: { ngoko: "bensin", krama: "bensin", "krama-inggil": "bensin" },
  },
  {
    aliases: { id: ["bentengan"], en: ["fortress tag"], zh: ["攻堡游戏"] },
    translation: { ngoko: "benthengan", krama: "benthengan", "krama-inggil": "benthengan" },
  },
  {
    aliases: { id: ["berang-berang"], en: ["otter"], zh: ["水獭"] },
    translation: { ngoko: "berang-berang", krama: "berang-berang", "krama-inggil": "berang-berang" },
  },
  {
    aliases: { id: ["berangkat"], en: ["depart","leave"], zh: ["出发；离开"] },
    translation: { ngoko: "budhal", krama: "bidhal", "krama-inggil": "tindak" },
  },
  {
    aliases: { id: ["berani"], en: ["brave"], zh: ["勇敢"] },
    translation: { ngoko: "wani", krama: "kendel", "krama-inggil": "kendel" },
  },
  {
    aliases: { id: ["berapa"], en: ["how many","how much"], zh: ["多少"] },
    translation: { ngoko: "pira", krama: "pinten", "krama-inggil": "pinten" },
  },
  {
    aliases: { id: ["berapa banyak"], en: ["how many in total"], zh: ["有多少"] },
    translation: { ngoko: "akehe pira", krama: "kathahipun pinten", "krama-inggil": "kathahipun pinten" },
  },
  {
    aliases: { id: ["berapa harganya"], en: ["how much does it cost"], zh: ["多少钱"] },
    translation: { ngoko: "regane pira", krama: "reginipun pinten", "krama-inggil": "reginipun pinten" },
  },
  {
    aliases: { id: ["berapa kali"], en: ["how many times"], zh: ["几次"] },
    translation: { ngoko: "ping pira", krama: "kaping pinten", "krama-inggil": "kaping pinten" },
  },
  {
    aliases: { id: ["berapa lama"], en: ["how long"], zh: ["多久"] },
    translation: { ngoko: "suwene pira", krama: "dangu pinten", "krama-inggil": "dangu pinten" },
  },
  {
    aliases: { id: ["berapa umur"], en: ["how old"], zh: ["几岁"] },
    translation: { ngoko: "umur pira", krama: "yuswa pinten", "krama-inggil": "yuswa pinten" },
  },
  {
    aliases: { id: ["beras"], en: ["uncooked rice"], zh: ["大米"] },
    translation: { ngoko: "beras", krama: "wos", "krama-inggil": "wos" },
  },
  {
    aliases: { id: ["berat"], en: ["heavy"], zh: ["重的"] },
    translation: { ngoko: "abot", krama: "awrat", "krama-inggil": "awrat" },
  },
  {
    aliases: { id: ["berbakti"], en: ["show filial devotion"], zh: ["孝敬"] },
    translation: { ngoko: "bekti", krama: "bekti", "krama-inggil": "bekti" },
  },
  {
    aliases: { id: ["berbalik"], en: ["turn back"], zh: ["转身"] },
    translation: { ngoko: "mbalik", krama: "mbalik", "krama-inggil": "mbalik" },
  },
  {
    aliases: { id: ["berbaring"], en: ["lie down"], zh: ["躺下"] },
    translation: { ngoko: "ngglethak", krama: "ngglethak", "krama-inggil": "ngglethak" },
  },
  {
    aliases: { id: ["berbaring miring"], en: ["lie on one's side"], zh: ["侧卧"] },
    translation: { ngoko: "turu miring", krama: "tilem miring", "krama-inggil": "sare miring" },
  },
  {
    aliases: { id: ["berbelok"], en: ["turn"], zh: ["转弯"] },
    translation: { ngoko: "menggok", krama: "menggok", "krama-inggil": "menggok" },
  },
  {
    aliases: { id: ["berbicara"], en: ["speak"], zh: ["说话"] },
    translation: { ngoko: "ngomong", krama: "wicanten", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["bercerai"], en: ["get divorced"], zh: ["离婚"] },
    translation: { ngoko: "pegatan", krama: "pegatan", "krama-inggil": "pegatan" },
  },
  {
    aliases: { id: ["bercerita"], en: ["tell a story"], zh: ["讲故事"] },
    translation: { ngoko: "crita", krama: "criyos", "krama-inggil": "criyos" },
  },
  {
    aliases: { id: ["berdampingan"], en: ["being side by side"], zh: ["并排"] },
    translation: { ngoko: "sesandhingan", krama: "sesandhingan", "krama-inggil": "sesandhingan" },
  },
  {
    aliases: { id: ["berdarah"], en: ["bleed"], zh: ["出血"] },
    translation: { ngoko: "getihen", krama: "rahen", "krama-inggil": "rahen" },
  },
  {
    aliases: { id: ["berdiri"], en: ["stand"], zh: ["站立"] },
    translation: { ngoko: "ngadeg", krama: "jumeneng", "krama-inggil": "jumeneng" },
  },
  {
    aliases: { id: ["berdiskusi"], en: ["discuss"], zh: ["讨论"] },
    translation: { ngoko: "rembugan", krama: "rembagan", "krama-inggil": "rembagan" },
  },
  {
    aliases: { id: ["berdoa"], en: ["pray"], zh: ["祈祷"] },
    translation: { ngoko: "ndonga", krama: "ndonga", "krama-inggil": "ndonga" },
  },
  {
    aliases: { id: ["bereskan"], en: ["tidy up"], zh: ["收拾"] },
    translation: { ngoko: "mberesi", krama: "mberesi", "krama-inggil": "mberesi" },
  },
  {
    aliases: { id: ["berganti"], en: ["change","take turns"], zh: ["更换；轮流"] },
    translation: { ngoko: "ganti", krama: "gantos", "krama-inggil": "gantos" },
  },
  {
    aliases: { id: ["bergantian"], en: ["in turns"], zh: ["轮流"] },
    translation: { ngoko: "gentenan", krama: "gentosan", "krama-inggil": "gentosan" },
  },
  {
    aliases: { id: ["bergelantungan"], en: ["hang on by one's hands"], zh: ["用手攀吊"] },
    translation: { ngoko: "gondhelan", krama: "gondhelan", "krama-inggil": "gondhelan" },
  },
  {
    aliases: { id: ["bergelombang"], en: ["undulating"], zh: ["波浪状的"] },
    translation: { ngoko: "ombak-ombakan", krama: "ombak-ombakan", "krama-inggil": "ombak-ombakan" },
  },
  {
    aliases: { id: ["bergerak"], en: ["move"], zh: ["移动"] },
    translation: { ngoko: "obah", krama: "obah", "krama-inggil": "obah" },
  },
  {
    aliases: { id: ["bergeser"], en: ["shift position"], zh: ["挪动"] },
    translation: { ngoko: "nggeser", krama: "nggeser", "krama-inggil": "nggeser" },
  },
  {
    aliases: { id: ["bergiliran"], en: ["in turns","alternately"], zh: ["轮流地"] },
    translation: { ngoko: "gentèn-gentèn", krama: "gentosan", "krama-inggil": "gentosan" },
  },
  {
    aliases: { id: ["berguling"], en: ["roll"], zh: ["翻滚"] },
    translation: { ngoko: "ngglundhung", krama: "ngglundhung", "krama-inggil": "ngglundhung" },
  },
  {
    aliases: { id: ["berhadapan"], en: ["facing each other"], zh: ["面对面"] },
    translation: { ngoko: "adhep-adhepan", krama: "ajeng-ajengan", "krama-inggil": "ajeng-ajengan" },
  },
  {
    aliases: { id: ["berhenti"], en: ["stop"], zh: ["停下"] },
    translation: { ngoko: "mandheg", krama: "kendel", "krama-inggil": "kendel" },
  },
  {
    aliases: { id: ["beri"], en: ["give"], zh: ["给"] },
    translation: { ngoko: "menehi", krama: "nyukani", "krama-inggil": "maringi" },
  },
  {
    aliases: { id: ["beri pakan"], en: ["feed animals"], zh: ["喂食"] },
    translation: { ngoko: "menehi pakan", krama: "nyukani pakan", "krama-inggil": "maringi pakan" },
  },
  {
    aliases: { id: ["beri salam"], en: ["offer greetings"], zh: ["问候"] },
    translation: { ngoko: "menehi salam", krama: "nyukani salam", "krama-inggil": "paring salam" },
  },
  {
    aliases: { id: ["beri tahu"], en: ["inform"], zh: ["告知"] },
    translation: { ngoko: "ngandhani", krama: "ngandhani", "krama-inggil": "ngandikani" },
  },
  {
    aliases: { id: ["beringin"], en: ["banyan"], zh: ["榕树"] },
    translation: { ngoko: "ringin", krama: "ringin", "krama-inggil": "ringin" },
  },
  {
    aliases: { id: ["berjajar"], en: ["standing in a row"], zh: ["排列"] },
    translation: { ngoko: "jejer", krama: "jejer", "krama-inggil": "jejer" },
  },
  {
    aliases: { id: ["berjalan"], en: ["walk","proceed"], zh: ["走路；进行"] },
    translation: { ngoko: "mlaku", krama: "mlampah", "krama-inggil": "mlampah" },
  },
  {
    aliases: { id: ["berkah"], en: ["blessing"], zh: ["福佑"] },
    translation: { ngoko: "berkah", krama: "berkah", "krama-inggil": "berkah" },
  },
  {
    aliases: { id: ["berkali-kali"], en: ["repeatedly"], zh: ["反复"] },
    translation: { ngoko: "bola-bali", krama: "wongsal-wangsul", "krama-inggil": "wongsal-wangsul" },
  },
  {
    aliases: { id: ["berkas"], en: ["file of documents"], zh: ["案卷"] },
    translation: { ngoko: "berkas", krama: "berkas", "krama-inggil": "berkas" },
  },
  {
    aliases: { id: ["berkat"], en: ["food parcel from a ceremonial feast"], zh: ["仪式宴席后分发的食物包"] },
    translation: { ngoko: "berkat", krama: "berkat", "krama-inggil": "berkat" },
  },
  {
    aliases: { id: ["berkata"], en: ["say"], zh: ["说"] },
    translation: { ngoko: "kandha", krama: "cariyos", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["berkumpul"], en: ["gather"], zh: ["团聚"] },
    translation: { ngoko: "ngumpul", krama: "ngempal", "krama-inggil": "ngempal" },
  },
  {
    aliases: { id: ["berkunjung"], en: ["visit"], zh: ["探访"] },
    translation: { ngoko: "dolan", krama: "dolan", "krama-inggil": "ameng-ameng" },
  },
  {
    aliases: { id: ["berlari"], en: ["run"], zh: ["跑"] },
    translation: { ngoko: "mlayu", krama: "mlajeng", "krama-inggil": "mlajeng" },
  },
  {
    aliases: { id: ["berlatih"], en: ["practice"], zh: ["练习"] },
    translation: { ngoko: "latihan", krama: "latihan", "krama-inggil": "latihan" },
  },
  {
    aliases: { id: ["berlutut"], en: ["kneel"], zh: ["跪"] },
    translation: { ngoko: "jengkeng", krama: "jengkeng", "krama-inggil": "jengkeng" },
  },
  {
    aliases: { id: ["bermain"], en: ["play"], zh: ["玩"] },
    translation: { ngoko: "dolan", krama: "dolan", "krama-inggil": "ameng-ameng" },
  },
  {
    aliases: { id: ["bernapas"], en: ["breathe"], zh: ["呼吸"] },
    translation: { ngoko: "ambegan", krama: "ambegan", "krama-inggil": "ambegan" },
  },
  {
    aliases: { id: ["berongga"], en: ["hollow"], zh: ["空心的"] },
    translation: { ngoko: "krowong", krama: "krowong", "krama-inggil": "krowong" },
  },
  {
    aliases: { id: ["berputar"], en: ["rotate"], zh: ["旋转"] },
    translation: { ngoko: "muter", krama: "muter", "krama-inggil": "muter" },
  },
  {
    aliases: { id: ["bersama"], en: ["together","with"], zh: ["一起；和"] },
    translation: { ngoko: "bareng", krama: "sesarengan", "krama-inggil": "sesarengan" },
  },
  {
    aliases: { id: ["bersama-sama"], en: ["together"], zh: ["一起"] },
    translation: { ngoko: "bebarengan", krama: "sesarengan", "krama-inggil": "sesarengan" },
  },
  {
    aliases: { id: ["bersih"], en: ["clean"], zh: ["干净"] },
    translation: { ngoko: "resik", krama: "resik", "krama-inggil": "resik" },
  },
  {
    aliases: { id: ["bersih desa"], en: ["village thanksgiving and purification ceremony"], zh: ["村庄感恩净化仪式"] },
    translation: { ngoko: "merti désa", krama: "merti désa", "krama-inggil": "merti désa" },
  },
  {
    aliases: { id: ["bersihkan"], en: ["clean"], zh: ["清洁"] },
    translation: { ngoko: "ngresiki", krama: "ngresiki", "krama-inggil": "ngresiki" },
  },
  {
    aliases: { id: ["bersimpuh"], en: ["sit on one's heels"], zh: ["跪坐"] },
    translation: { ngoko: "timpuh", krama: "timpuh", "krama-inggil": "timpuh" },
  },
  {
    aliases: { id: ["bersin"], en: ["sneeze"], zh: ["打喷嚏"] },
    translation: { ngoko: "wahing", krama: "wahing", "krama-inggil": "wahing" },
  },
  {
    aliases: { id: ["bersorak"], en: ["cheer"], zh: ["欢呼"] },
    translation: { ngoko: "surak", krama: "surak", "krama-inggil": "surak" },
  },
  {
    aliases: { id: ["bertahap"], en: ["gradually"], zh: ["逐步"] },
    translation: { ngoko: "sithik mbaka sithik", krama: "sakedhik mbaka sakedhik", "krama-inggil": "sakedhik mbaka sakedhik" },
  },
  {
    aliases: { id: ["bertanding"], en: ["compete"], zh: ["比赛"] },
    translation: { ngoko: "tandhing", krama: "tandhing", "krama-inggil": "tandhing" },
  },
  {
    aliases: { id: ["bertanya"], en: ["ask a question"], zh: ["提问"] },
    translation: { ngoko: "takon", krama: "nyuwun pirsa", "krama-inggil": "ndangu" },
  },
  {
    aliases: { id: ["bertepuk tangan"], en: ["clap"], zh: ["鼓掌"] },
    translation: { ngoko: "keplok", krama: "keplok", "krama-inggil": "keplok" },
  },
  {
    aliases: { id: ["berterima kasih"], en: ["thank"], zh: ["道谢"] },
    translation: { ngoko: "matur nuwun", krama: "matur nuwun", "krama-inggil": "matur nuwun" },
  },
  {
    aliases: { id: ["bertumpuk"], en: ["stacked"], zh: ["堆叠"] },
    translation: { ngoko: "tumpuk-tumpuk", krama: "tumpuk-tumpuk", "krama-inggil": "tumpuk-tumpuk" },
  },
  {
    aliases: { id: ["bertunangan"], en: ["be engaged"], zh: ["订婚"] },
    translation: { ngoko: "pacangan", krama: "pacangan", "krama-inggil": "pacangan" },
  },
  {
    aliases: { id: ["berturut-turut"], en: ["consecutively"], zh: ["接连"] },
    translation: { ngoko: "urut-urutan", krama: "urut-urutan", "krama-inggil": "urut-urutan" },
  },
  {
    aliases: { id: ["beruang"], en: ["bear"], zh: ["熊"] },
    translation: { ngoko: "bruwang", krama: "bruwang", "krama-inggil": "bruwang" },
  },
  {
    aliases: { id: ["besan"], en: ["child's parent-in-law"], zh: ["亲家"] },
    translation: { ngoko: "besan", krama: "besan", "krama-inggil": "besan" },
  },
  {
    aliases: { id: ["besar"], en: ["big","large"], zh: ["大"] },
    translation: { ngoko: "gedhe", krama: "ageng", "krama-inggil": "ageng" },
  },
  {
    aliases: { id: ["beskap"], en: ["Javanese formal jacket"], zh: ["爪哇男式礼服上衣"] },
    translation: { ngoko: "beskap", krama: "beskap", "krama-inggil": "beskap" },
  },
  {
    aliases: { id: ["besok"], en: ["tomorrow"], zh: ["明天"] },
    translation: { ngoko: "sesuk", krama: "benjing", "krama-inggil": "benjing" },
  },
  {
    aliases: { id: ["betah"], en: ["at ease staying somewhere"], zh: ["住得惯"] },
    translation: { ngoko: "betah", krama: "betah", "krama-inggil": "betah" },
  },
  {
    aliases: { id: ["betet"], en: ["parakeet"], zh: ["长尾鹦鹉"] },
    translation: { ngoko: "bethet", krama: "bethet", "krama-inggil": "bethet" },
  },
  {
    aliases: { id: ["betis"], en: ["calf"], zh: ["小腿肚"] },
    translation: { ngoko: "kempol", krama: "kempol", "krama-inggil": "kempol" },
  },
  {
    aliases: { id: ["biasanya"], en: ["usually"], zh: ["通常"] },
    translation: { ngoko: "lumrahe", krama: "limrahipun", "krama-inggil": "limrahipun" },
  },
  {
    aliases: { id: ["biawak"], en: ["monitor lizard"], zh: ["巨蜥"] },
    translation: { ngoko: "menyawak", krama: "menyawak", "krama-inggil": "menyawak" },
  },
  {
    aliases: { id: ["biaya"], en: ["cost"], zh: ["费用"] },
    translation: { ngoko: "ragad", krama: "prabeya", "krama-inggil": "prabeya" },
  },
  {
    aliases: { id: ["bibi"], en: ["aunt younger than one's parent"], zh: ["姑姑；姨妈"] },
    translation: { ngoko: "bulik", krama: "bulik", "krama-inggil": "bulik" },
  },
  {
    aliases: { id: ["bibi tua"], en: ["aunt older than one's parent"], zh: ["年长的姑妈或姨妈"] },
    translation: { ngoko: "budhe", krama: "budhe", "krama-inggil": "budhe" },
  },
  {
    aliases: { id: ["bibi yang lebih tua dari orang tua"], en: ["aunt older than one's parent"], zh: ["年长的姑姑或姨妈"] },
    translation: { ngoko: "budhe", krama: "budhe", "krama-inggil": "budhe" },
  },
  {
    aliases: { id: ["bibir"], en: ["lip"], zh: ["嘴唇"] },
    translation: { ngoko: "lambe", krama: "lambe", "krama-inggil": "lathi" },
  },
  {
    aliases: { id: ["bibit"], en: ["planting stock"], zh: ["种苗"] },
    translation: { ngoko: "winih", krama: "winih", "krama-inggil": "winih" },
  },
  {
    aliases: { id: ["bicara"], en: ["speak"], zh: ["说话"] },
    translation: { ngoko: "ngomong", krama: "wicanten", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["bidak"], en: ["pawn"], zh: ["兵"] },
    translation: { ngoko: "bidak", krama: "bidak", "krama-inggil": "bidak" },
  },
  {
    aliases: { id: ["bidan"], en: ["midwife"], zh: ["助产士"] },
    translation: { ngoko: "bidan", krama: "bidan", "krama-inggil": "bidan" },
  },
  {
    aliases: { id: ["bihun"], en: ["rice vermicelli"], zh: ["米粉"] },
    translation: { ngoko: "bihun", krama: "bihun", "krama-inggil": "bihun" },
  },
  {
    aliases: { id: ["bijaksana"], en: ["wise"], zh: ["明智"] },
    translation: { ngoko: "wicaksana", krama: "wicaksana", "krama-inggil": "wicaksana" },
  },
  {
    aliases: { id: ["biji"], en: ["seed"], zh: ["种子"] },
    translation: { ngoko: "wiji", krama: "wiji", "krama-inggil": "wiji" },
  },
  {
    aliases: { id: ["biksu"], en: ["Buddhist monk"], zh: ["比丘"] },
    translation: { ngoko: "biksu", krama: "biksu", "krama-inggil": "biksu" },
  },
  {
    aliases: { id: ["bilas"], en: ["rinse"], zh: ["漂洗"] },
    translation: { ngoko: "mbilasi", krama: "mbilasi", "krama-inggil": "mbilasi" },
  },
  {
    aliases: { id: ["bimbang"], en: ["wavering"], zh: ["动摇"] },
    translation: { ngoko: "goyah", krama: "goyah", "krama-inggil": "goyah" },
  },
  {
    aliases: { id: ["bimbing"], en: ["guide"], zh: ["引导"] },
    translation: { ngoko: "nuntun", krama: "nuntun", "krama-inggil": "nuntun" },
  },
  {
    aliases: { id: ["bingkai"], en: ["frame"], zh: ["相框"] },
    translation: { ngoko: "pigura", krama: "pigura", "krama-inggil": "pigura" },
  },
  {
    aliases: { id: ["bingung"], en: ["confused"], zh: ["困惑"] },
    translation: { ngoko: "bingung", krama: "bingung", "krama-inggil": "bingung" },
  },
  {
    aliases: { id: ["bingungkan"], en: ["confuse"], zh: ["使困惑"] },
    translation: { ngoko: "mbingungake", krama: "mbingungaken", "krama-inggil": "mbingungaken" },
  },
  {
    aliases: { id: ["bintang"], en: ["star"], zh: ["星星"] },
    translation: { ngoko: "lintang", krama: "lintang", "krama-inggil": "lintang" },
  },
  {
    aliases: { id: ["biologi"], en: ["biology"], zh: ["生物学"] },
    translation: { ngoko: "biologi", krama: "biologi", "krama-inggil": "biologi" },
  },
  {
    aliases: { id: ["bioskop"], en: ["cinema"], zh: ["电影院"] },
    translation: { ngoko: "bioskop", krama: "bioskop", "krama-inggil": "bioskop" },
  },
  {
    aliases: { id: ["biru"], en: ["blue"], zh: ["蓝色"] },
    translation: { ngoko: "biru", krama: "biru", "krama-inggil": "biru" },
  },
  {
    aliases: { id: ["biru dongker"], en: ["navy blue"], zh: ["藏蓝色"] },
    translation: { ngoko: "biru dongker", krama: "biru dongker", "krama-inggil": "biru dongker" },
  },
  {
    aliases: { id: ["biru elektrik"], en: ["electric blue"], zh: ["电光蓝"] },
    translation: { ngoko: "biru elektrik", krama: "biru elektrik", "krama-inggil": "biru elektrik" },
  },
  {
    aliases: { id: ["biru es"], en: ["ice blue"], zh: ["冰蓝色"] },
    translation: { ngoko: "biru es", krama: "biru es", "krama-inggil": "biru es" },
  },
  {
    aliases: { id: ["biru kehijauan"], en: ["greenish blue"], zh: ["绿蓝色"] },
    translation: { ngoko: "biru semu ijo", krama: "biru semu ijem", "krama-inggil": "biru semu ijem" },
  },
  {
    aliases: { id: ["biru kobalt"], en: ["cobalt blue"], zh: ["钴蓝色"] },
    translation: { ngoko: "biru kobalt", krama: "biru kobalt", "krama-inggil": "biru kobalt" },
  },
  {
    aliases: { id: ["biru langit"], en: ["sky blue"], zh: ["天蓝色"] },
    translation: { ngoko: "biru langit", krama: "biru langit", "krama-inggil": "biru langit" },
  },
  {
    aliases: { id: ["biru laut"], en: ["ocean blue"], zh: ["海蓝色"] },
    translation: { ngoko: "biru segara", krama: "biru seganten", "krama-inggil": "biru seganten" },
  },
  {
    aliases: { id: ["biru muda"], en: ["light blue"], zh: ["浅蓝色"] },
    translation: { ngoko: "biru enom", krama: "biru anem", "krama-inggil": "biru anem" },
  },
  {
    aliases: { id: ["biru nila"], en: ["indigo blue"], zh: ["靛蓝色"] },
    translation: { ngoko: "biru nila", krama: "biru nila", "krama-inggil": "biru nila" },
  },
  {
    aliases: { id: ["biru pastel"], en: ["pastel blue"], zh: ["柔蓝色"] },
    translation: { ngoko: "biru pastel", krama: "biru pastel", "krama-inggil": "biru pastel" },
  },
  {
    aliases: { id: ["biru pucat"], en: ["pale blue"], zh: ["淡蓝色"] },
    translation: { ngoko: "biru pucet", krama: "biru pucet", "krama-inggil": "biru pucet" },
  },
  {
    aliases: { id: ["biru safir"], en: ["sapphire blue"], zh: ["宝石蓝"] },
    translation: { ngoko: "biru safir", krama: "biru safir", "krama-inggil": "biru safir" },
  },
  {
    aliases: { id: ["biru terang"], en: ["bright blue"], zh: ["亮蓝色"] },
    translation: { ngoko: "biru padhang", krama: "biru padhang", "krama-inggil": "biru padhang" },
  },
  {
    aliases: { id: ["biru tua"], en: ["dark blue"], zh: ["深蓝色"] },
    translation: { ngoko: "biru tuwa", krama: "biru sepuh", "krama-inggil": "biru sepuh" },
  },
  {
    aliases: { id: ["bisa"], en: ["can","be able to"], zh: ["能；会"] },
    translation: { ngoko: "isa", krama: "saged", "krama-inggil": "saged" },
  },
  {
    aliases: { id: ["bisik"], en: ["whisper"], zh: ["低语"] },
    translation: { ngoko: "mbisik", krama: "mbisik", "krama-inggil": "mbisik" },
  },
  {
    aliases: { id: ["biskuit"], en: ["biscuit"], zh: ["饼干"] },
    translation: { ngoko: "biskuit", krama: "biskuit", "krama-inggil": "biskuit" },
  },
  {
    aliases: { id: ["bisul"], en: ["boil"], zh: ["疖"] },
    translation: { ngoko: "wudun", krama: "wudun", "krama-inggil": "wudun" },
  },
  {
    aliases: { id: ["blangkon"], en: ["Javanese traditional headdress"], zh: ["爪哇传统头巾帽"] },
    translation: { ngoko: "blangkon", krama: "blangkon", "krama-inggil": "blangkon" },
  },
  {
    aliases: { id: ["blencong"], en: ["traditional shadow-puppet lamp"], zh: ["传统皮影油灯"] },
    translation: { ngoko: "bléncong", krama: "bléncong", "krama-inggil": "bléncong" },
  },
  {
    aliases: { id: ["blender"], en: ["blender"], zh: ["搅拌机"] },
    translation: { ngoko: "blender", krama: "blender", "krama-inggil": "blender" },
  },
  {
    aliases: { id: ["blus"], en: ["blouse"], zh: ["女式衬衫"] },
    translation: { ngoko: "blus", krama: "blus", "krama-inggil": "blus" },
  },
  {
    aliases: { id: ["bodoh"], en: ["stupid"], zh: ["愚笨"] },
    translation: { ngoko: "bodho", krama: "bodho", "krama-inggil": "bodho" },
  },
  {
    aliases: { id: ["bohlam"], en: ["light bulb"], zh: ["灯泡"] },
    translation: { ngoko: "bohlam", krama: "bohlam", "krama-inggil": "bohlam" },
  },
  {
    aliases: { id: ["bohong"], en: ["lie"], zh: ["撒谎"] },
    translation: { ngoko: "goroh", krama: "goroh", "krama-inggil": "goroh" },
  },
  {
    aliases: { id: ["bokong"], en: ["buttocks"], zh: ["臀部"] },
    translation: { ngoko: "bokong", krama: "bokong", "krama-inggil": "bocong" },
  },
  {
    aliases: { id: ["bola"], en: ["ball"], zh: ["球"] },
    translation: { ngoko: "bal", krama: "bal", "krama-inggil": "bal" },
  },
  {
    aliases: { id: ["bola basket"], en: ["basketball"], zh: ["篮球"] },
    translation: { ngoko: "basket", krama: "basket", "krama-inggil": "basket" },
  },
  {
    aliases: { id: ["bola mata"], en: ["eyeball"], zh: ["眼球"] },
    translation: { ngoko: "bal mripat", krama: "bal mripat", "krama-inggil": "bal soca" },
  },
  {
    aliases: { id: ["bola voli"], en: ["volleyball"], zh: ["排球"] },
    translation: { ngoko: "voli", krama: "voli", "krama-inggil": "voli" },
  },
  {
    aliases: { id: ["boleh"], en: ["may","allowed"], zh: ["可以"] },
    translation: { ngoko: "oleh", krama: "kepareng", "krama-inggil": "kepareng" },
  },
  {
    aliases: { id: ["boleh bertanya"], en: ["may I ask a question"], zh: ["可以问一下吗"] },
    translation: { ngoko: "oleh takon", krama: "angsal nyuwun pirsa", "krama-inggil": "angsal nyuwun pirsa" },
  },
  {
    aliases: { id: ["bolong"], en: ["having a hole"], zh: ["有洞的"] },
    translation: { ngoko: "bolong", krama: "bolong", "krama-inggil": "bolong" },
  },
  {
    aliases: { id: ["bolu"], en: ["sponge cake"], zh: ["海绵蛋糕"] },
    translation: { ngoko: "bolu", krama: "bolu", "krama-inggil": "bolu" },
  },
  {
    aliases: { id: ["bonang"], en: ["gong chime"], zh: ["排锣"] },
    translation: { ngoko: "bonang", krama: "bonang", "krama-inggil": "bonang" },
  },
  {
    aliases: { id: ["bongkar"], en: ["dismantle"], zh: ["拆开"] },
    translation: { ngoko: "mbongkar", krama: "mbongkar", "krama-inggil": "mbongkar" },
  },
  {
    aliases: { id: ["bonus"], en: ["bonus"], zh: ["额外奖励"] },
    translation: { ngoko: "bonus", krama: "bonus", "krama-inggil": "bonus" },
  },
  {
    aliases: { id: ["bopong"], en: ["carry someone in both arms"], zh: ["横抱"] },
    translation: { ngoko: "mbopong", krama: "mbopong", "krama-inggil": "mbopong" },
  },
  {
    aliases: { id: ["bor"], en: ["drill"], zh: ["钻孔"] },
    translation: { ngoko: "ngebor", krama: "ngebor", "krama-inggil": "ngebor" },
  },
  {
    aliases: { id: ["bordir"], en: ["machine embroidery"], zh: ["机绣"] },
    translation: { ngoko: "bordir", krama: "bordir", "krama-inggil": "bordir" },
  },
  {
    aliases: { id: ["borong"], en: ["buy in bulk"], zh: ["大批购买"] },
    translation: { ngoko: "mborong", krama: "mborong", "krama-inggil": "mborong" },
  },
  {
    aliases: { id: ["boros"], en: ["extravagant"], zh: ["挥霍"] },
    translation: { ngoko: "boros", krama: "boros", "krama-inggil": "boros" },
  },
  {
    aliases: { id: ["bosan"], en: ["bored"], zh: ["厌倦"] },
    translation: { ngoko: "bosen", krama: "bosen", "krama-inggil": "bosen" },
  },
  {
    aliases: { id: ["botol"], en: ["bottle"], zh: ["瓶子"] },
    translation: { ngoko: "botol", krama: "botol", "krama-inggil": "botol" },
  },
  {
    aliases: { id: ["bros"], en: ["brooch"], zh: ["胸针"] },
    translation: { ngoko: "bros", krama: "bros", "krama-inggil": "bros" },
  },
  {
    aliases: { id: ["buah"], en: ["fruit"], zh: ["水果"] },
    translation: { ngoko: "woh", krama: "woh-wohan", "krama-inggil": "woh-wohan" },
  },
  {
    aliases: { id: ["buang"], en: ["throw away"], zh: ["扔掉"] },
    translation: { ngoko: "mbuwang", krama: "mbucal", "krama-inggil": "mbucal" },
  },
  {
    aliases: { id: ["buaya"], en: ["crocodile"], zh: ["鳄鱼"] },
    translation: { ngoko: "baya", krama: "baya", "krama-inggil": "baya" },
  },
  {
    aliases: { id: ["bubur"], en: ["porridge"], zh: ["粥"] },
    translation: { ngoko: "bubur", krama: "bubur", "krama-inggil": "bubur" },
  },
  {
    aliases: { id: ["buang air besar","bab","eek"], en: ["poop"], zh: ["大便"] },
    translation: { ngoko: "ngising", krama: "bebuwang", "krama-inggil": "bebuwang" },
  },
  {
    aliases: { id: ["buang air kecil","bak"], en: ["pee","peeing"], zh: ["小便"] },
    translation: { ngoko: "nguyuh", krama: "turas", "krama-inggil": "turas" },
  },
  {
    aliases: { id: ["bujuk"], en: ["persuade"], zh: ["劝说"] },
    translation: { ngoko: "mbujuk", krama: "mbujuk", "krama-inggil": "mbujuk" },
  },
  {
    aliases: { id: ["buka"], en: ["open"], zh: ["打开"] },
    translation: { ngoko: "mbukak", krama: "mbikak", "krama-inggil": "mbikak" },
  },
  {
    aliases: { id: ["bukan"], en: ["not","is not"], zh: ["不是"] },
    translation: { ngoko: "dudu", krama: "mboten", "krama-inggil": "mboten" },
  },
  {
    aliases: { id: ["bukan hanya"], en: ["not only"], zh: ["不仅"] },
    translation: { ngoko: "ora mung", krama: "boten namung", "krama-inggil": "boten namung" },
  },
  {
    aliases: { id: ["bukan karena"], en: ["not because"], zh: ["不是因为"] },
    translation: { ngoko: "ora amarga", krama: "boten amargi", "krama-inggil": "boten amargi" },
  },
  {
    aliases: { id: ["bukankah"], en: ["isn't it","isn't that"], zh: ["不是……吗"] },
    translation: { ngoko: "rak", krama: "rak", "krama-inggil": "rak" },
  },
  {
    aliases: { id: ["bukit"], en: ["hill"], zh: ["小山"] },
    translation: { ngoko: "gumuk", krama: "gumuk", "krama-inggil": "gumuk" },
  },
  {
    aliases: { id: ["buktikan"], en: ["prove"], zh: ["证明"] },
    translation: { ngoko: "mbuktekake", krama: "mbuktekaken", "krama-inggil": "mbuktekaken" },
  },
  {
    aliases: { id: ["buku"], en: ["book"], zh: ["书"] },
    translation: { ngoko: "buku", krama: "buku", "krama-inggil": "buku" },
  },
  {
    aliases: { id: ["buku tulis"], en: ["exercise book"], zh: ["练习本"] },
    translation: { ngoko: "buku tulis", krama: "buku tulis", "krama-inggil": "buku tulis" },
  },
  {
    aliases: { id: ["bulan"], en: ["month"], zh: ["月"] },
    translation: { ngoko: "sasi", krama: "wulan", "krama-inggil": "wulan" },
  },
  {
    aliases: { id: ["bulat"], en: ["round"], zh: ["圆的"] },
    translation: { ngoko: "bunder", krama: "bunder", "krama-inggil": "bunder" },
  },
  {
    aliases: { id: ["bulu"], en: ["body hair"], zh: ["体毛"] },
    translation: { ngoko: "wulu", krama: "wulu", "krama-inggil": "wulu" },
  },
  {
    aliases: { id: ["bulu mata"], en: ["eyelash"], zh: ["睫毛"] },
    translation: { ngoko: "idep", krama: "idep", "krama-inggil": "idep" },
  },
  {
    aliases: { id: ["bulu tangkis"], en: ["badminton"], zh: ["羽毛球"] },
    translation: { ngoko: "bulu tangkis", krama: "bulu tangkis", "krama-inggil": "bulu tangkis" },
  },
  {
    aliases: { id: ["bulus"], en: ["softshell turtle"], zh: ["鳖"] },
    translation: { ngoko: "bulus", krama: "bulus", "krama-inggil": "bulus" },
  },
  {
    aliases: { id: ["bumbui"], en: ["season"], zh: ["调味"] },
    translation: { ngoko: "mbumboni", krama: "mbumboni", "krama-inggil": "mbumboni" },
  },
  {
    aliases: { id: ["bumi"], en: ["earth"], zh: ["地球"] },
    translation: { ngoko: "bumi", krama: "bumi", "krama-inggil": "bumi" },
  },
  {
    aliases: { id: ["buncis"], en: ["green bean"], zh: ["四季豆"] },
    translation: { ngoko: "buncis", krama: "buncis", "krama-inggil": "buncis" },
  },
  {
    aliases: { id: ["buncit"], en: ["potbellied"], zh: ["大腹便便的"] },
    translation: { ngoko: "mblendhung", krama: "mblendhung", "krama-inggil": "mblendhung" },
  },
  {
    aliases: { id: ["bunga"], en: ["flower"], zh: ["花"] },
    translation: { ngoko: "kembang", krama: "sekar", "krama-inggil": "sekar" },
  },
  {
    aliases: { id: ["bunga matahari"], en: ["sunflower"], zh: ["向日葵"] },
    translation: { ngoko: "kembang srengenge", krama: "sekar surya", "krama-inggil": "sekar surya" },
  },
  {
    aliases: { id: ["bungkuk"], en: ["bend forward"], zh: ["弯腰"] },
    translation: { ngoko: "mbungkuk", krama: "mbungkuk", "krama-inggil": "mbungkuk" },
  },
  {
    aliases: { id: ["bungkus"], en: ["wrap"], zh: ["包裹"] },
    translation: { ngoko: "mbungkus", krama: "mbungkus", "krama-inggil": "mbungkus" },
  },
  {
    aliases: { id: ["buntung"], en: ["truncated"], zh: ["残缺一截的"] },
    translation: { ngoko: "buntung", krama: "buntung", "krama-inggil": "buntung" },
  },
  {
    aliases: { id: ["bupati"], en: ["regent"], zh: ["县长"] },
    translation: { ngoko: "bupati", krama: "bupati", "krama-inggil": "bupati" },
  },
  {
    aliases: { id: ["buruh"], en: ["laborer"], zh: ["工人"] },
    translation: { ngoko: "buruh", krama: "buruh", "krama-inggil": "buruh" },
  },
  {
    aliases: { id: ["buruk"], en: ["bad"], zh: ["恶劣"] },
    translation: { ngoko: "ala", krama: "awon", "krama-inggil": "awon" },
  },
  {
    aliases: { id: ["burung"], en: ["bird"], zh: ["鸟"] },
    translation: { ngoko: "manuk", krama: "peksi", "krama-inggil": "peksi" },
  },
  {
    aliases: { id: ["burung gereja"], en: ["tree sparrow"], zh: ["树麻雀"] },
    translation: { ngoko: "manuk greja", krama: "peksi greja", "krama-inggil": "peksi greja" },
  },
  {
    aliases: { id: ["burung hantu"], en: ["owl"], zh: ["猫头鹰"] },
    translation: { ngoko: "manuk hantu", krama: "peksi hantu", "krama-inggil": "peksi hantu" },
  },
  {
    aliases: { id: ["burung unta"], en: ["ostrich"], zh: ["鸵鸟"] },
    translation: { ngoko: "manuk unta", krama: "peksi unta", "krama-inggil": "peksi unta" },
  },
  {
    aliases: { id: ["bus"], en: ["bus"], zh: ["公共汽车"] },
    translation: { ngoko: "bis", krama: "bis", "krama-inggil": "bis" },
  },
  {
    aliases: { id: ["busuk"], en: ["rotten"], zh: ["腐烂"] },
    translation: { ngoko: "bosok", krama: "bosok", "krama-inggil": "bosok" },
  },
  {
    aliases: { id: ["busur"], en: ["bow"], zh: ["弓"] },
    translation: { ngoko: "gendhewa", krama: "gendhewa", "krama-inggil": "gendhewa" },
  },
  {
    aliases: { id: ["buyut"], en: ["great-grandparent"], zh: ["曾祖父母；曾外祖父母"] },
    translation: { ngoko: "simbah buyut", krama: "simbah buyut", "krama-inggil": "eyang buyut" },
  },
  {
    aliases: { id: ["cabai"], en: ["chili pepper"], zh: ["辣椒"] },
    translation: { ngoko: "lombok", krama: "lombok", "krama-inggil": "lombok" },
  },
  {
    aliases: { id: ["cabang"], en: ["branch"], zh: ["树枝"] },
    translation: { ngoko: "pang", krama: "pang", "krama-inggil": "pang" },
  },
  {
    aliases: { id: ["cabut"], en: ["pull out"], zh: ["拔出"] },
    translation: { ngoko: "mbedhol", krama: "mbedhol", "krama-inggil": "mbedhol" },
  },
  {
    aliases: { id: ["cacar"], en: ["smallpox"], zh: ["天花"] },
    translation: { ngoko: "cacar", krama: "cacar", "krama-inggil": "cacar" },
  },
  {
    aliases: { id: ["cacing"], en: ["worm"], zh: ["蠕虫"] },
    translation: { ngoko: "cacing", krama: "cacing", "krama-inggil": "cacing" },
  },
  {
    aliases: { id: ["cacingan"], en: ["intestinal worm infection"], zh: ["肠道寄生虫感染"] },
    translation: { ngoko: "cacingan", krama: "cacingan", "krama-inggil": "cacingan" },
  },
  {
    aliases: { id: ["cahaya"], en: ["light","radiance"], zh: ["光；光芒"] },
    translation: { ngoko: "cahya", krama: "cahya", "krama-inggil": "cahya" },
  },
  {
    aliases: { id: ["cair"], en: ["liquid","diluted"], zh: ["液体的；稀的"] },
    translation: { ngoko: "encer", krama: "encer", "krama-inggil": "encer" },
  },
  {
    aliases: { id: ["cairan"], en: ["liquid","fluid"], zh: ["液体"] },
    translation: { ngoko: "banyu", krama: "toya", "krama-inggil": "toya" },
  },
  {
    aliases: { id: ["cakap"], en: ["capable"], zh: ["能干"] },
    translation: { ngoko: "wasis", krama: "wasis", "krama-inggil": "wasis" },
  },
  {
    aliases: { id: ["cakar"], en: ["scratch with the nails"], zh: ["抓挠"] },
    translation: { ngoko: "nyakar", krama: "nyakar", "krama-inggil": "nyakar" },
  },
  {
    aliases: { id: ["cakram keras"], en: ["hard disk"], zh: ["硬盘"] },
    translation: { ngoko: "hard disk", krama: "hard disk", "krama-inggil": "hard disk" },
  },
  {
    aliases: { id: ["calon"], en: ["candidate","prospective"], zh: ["候选人；准……"] },
    translation: { ngoko: "bakal", krama: "bakal", "krama-inggil": "bakal" },
  },
  {
    aliases: { id: ["camat"], en: ["subdistrict head"], zh: ["区长"] },
    translation: { ngoko: "camat", krama: "camat", "krama-inggil": "camat" },
  },
  {
    aliases: { id: ["campak"], en: ["measles"], zh: ["麻疹"] },
    translation: { ngoko: "gabagen", krama: "gabagen", "krama-inggil": "gabagen" },
  },
  {
    aliases: { id: ["campur"], en: ["mix"], zh: ["混合"] },
    translation: { ngoko: "nyampur", krama: "nyampur", "krama-inggil": "nyampur" },
  },
  {
    aliases: { id: ["campuran"], en: ["mixture"], zh: ["混合物"] },
    translation: { ngoko: "campuran", krama: "campuran", "krama-inggil": "campuran" },
  },
  {
    aliases: { id: ["candi"], en: ["ancient Hindu-Buddhist temple"], zh: ["古代印度教佛教寺庙"] },
    translation: { ngoko: "candhi", krama: "candhi", "krama-inggil": "candhi" },
  },
  {
    aliases: { id: ["canggung"], en: ["awkward"], zh: ["局促"] },
    translation: { ngoko: "kikuk", krama: "kikuk", "krama-inggil": "kikuk" },
  },
  {
    aliases: { id: ["cangkir"], en: ["cup","mug"], zh: ["杯子"] },
    translation: { ngoko: "cangkir", krama: "cangkir", "krama-inggil": "cangkir" },
  },
  {
    aliases: { id: ["cangkul"], en: ["hoe"], zh: ["锄头"] },
    translation: { ngoko: "pacul", krama: "pacul", "krama-inggil": "pacul" },
  },
  {
    aliases: { id: ["cantik"], en: ["beautiful (usually feminine)"], zh: ["漂亮；美丽"] },
    translation: { ngoko: "ayu", krama: "ayu", "krama-inggil": "ayu" },
  },
  {
    aliases: { id: ["canting"], en: ["batik wax pen"], zh: ["蜡染笔"] },
    translation: { ngoko: "canthing", krama: "canthing", "krama-inggil": "canthing" },
  },
  {
    aliases: { id: ["capung"], en: ["dragonfly"], zh: ["蜻蜓"] },
    translation: { ngoko: "kinjeng", krama: "kinjeng", "krama-inggil": "kinjeng" },
  },
  {
    aliases: { id: ["cara"], en: ["way","method"], zh: ["方法；方式"] },
    translation: { ngoko: "cara", krama: "cara", "krama-inggil": "cara" },
  },
  {
    aliases: { id: ["cari"], en: ["search","look for"], zh: ["寻找"] },
    translation: { ngoko: "golek", krama: "pados", "krama-inggil": "pados" },
  },
  {
    aliases: { id: ["carian"], en: ["search result","thing sought"], zh: ["搜索结果；所找之物"] },
    translation: { ngoko: "golekan", krama: "padosan", "krama-inggil": "padosan" },
  },
  {
    aliases: { id: ["cat"], en: ["paint"], zh: ["油漆"] },
    translation: { ngoko: "cet", krama: "cet", "krama-inggil": "cet" },
  },
  {
    aliases: { id: ["catat"], en: ["note down","record"], zh: ["记录"] },
    translation: { ngoko: "nyathet", krama: "nyathet", "krama-inggil": "nyathet" },
  },
  {
    aliases: { id: ["catatan"], en: ["note","record"], zh: ["笔记；记录"] },
    translation: { ngoko: "cathetan", krama: "cathetan", "krama-inggil": "cathetan" },
  },
  {
    aliases: { id: ["catur"], en: ["chess"], zh: ["国际象棋"] },
    translation: { ngoko: "sekak", krama: "sekak", "krama-inggil": "sekak" },
  },
  {
    aliases: { id: ["CCTV"], en: ["closed-circuit television"], zh: ["闭路电视"] },
    translation: { ngoko: "CCTV", krama: "CCTV", "krama-inggil": "CCTV" },
  },
  {
    aliases: { id: ["CD"], en: ["compact disc"], zh: ["光盘"] },
    translation: { ngoko: "CD", krama: "CD", "krama-inggil": "CD" },
  },
  {
    aliases: { id: ["cebok"], en: ["clean someone after toileting"], zh: ["便后清洗"] },
    translation: { ngoko: "nyewoki", krama: "nyewoki", "krama-inggil": "nyewoki" },
  },
  {
    aliases: { id: ["cecak"], en: ["house gecko"], zh: ["壁虎"] },
    translation: { ngoko: "cecak", krama: "cecak", "krama-inggil": "cecak" },
  },
  {
    aliases: { id: ["cegukan"], en: ["hiccup"], zh: ["打嗝"] },
    translation: { ngoko: "ceguken", krama: "ceguken", "krama-inggil": "ceguken" },
  },
  {
    aliases: { id: ["cekatan"], en: ["quick and efficient"], zh: ["麻利"] },
    translation: { ngoko: "cekatan", krama: "cekatan", "krama-inggil": "cekatan" },
  },
  {
    aliases: { id: ["cekung"], en: ["concave"], zh: ["凹的"] },
    translation: { ngoko: "cekung", krama: "cekung", "krama-inggil": "cekung" },
  },
  {
    aliases: { id: ["cela"], en: ["disparage"], zh: ["贬损"] },
    translation: { ngoko: "nyacad", krama: "nyacad", "krama-inggil": "nyacad" },
  },
  {
    aliases: { id: ["celana"], en: ["trousers"], zh: ["裤子"] },
    translation: { ngoko: "kathok", krama: "sruwal", "krama-inggil": "sruwal" },
  },
  {
    aliases: { id: ["celana dalam"], en: ["underpants"], zh: ["内裤"] },
    translation: { ngoko: "kathok njero", krama: "sruwal lebet", "krama-inggil": "sruwal lebet" },
  },
  {
    aliases: { id: ["celana pendek"], en: ["shorts"], zh: ["短裤"] },
    translation: { ngoko: "kathok cendhak", krama: "sruwal cekak", "krama-inggil": "sruwal cekak" },
  },
  {
    aliases: { id: ["celemek"], en: ["apron"], zh: ["围裙"] },
    translation: { ngoko: "celemek", krama: "celemek", "krama-inggil": "celemek" },
  },
  {
    aliases: { id: ["celempung"], en: ["large Javanese zither"], zh: ["爪哇大型齐特琴"] },
    translation: { ngoko: "celempung", krama: "celempung", "krama-inggil": "celempung" },
  },
  {
    aliases: { id: ["cemas"], en: ["anxious","worried"], zh: ["焦虑；担心"] },
    translation: { ngoko: "kuwatir", krama: "sumelang", "krama-inggil": "sumelang" },
  },
  {
    aliases: { id: ["cemberut"], en: ["frown"], zh: ["皱眉"] },
    translation: { ngoko: "mrengut", krama: "mrengut", "krama-inggil": "mrengut" },
  },
  {
    aliases: { id: ["cembung"], en: ["convex"], zh: ["凸的"] },
    translation: { ngoko: "cembung", krama: "cembung", "krama-inggil": "cembung" },
  },
  {
    aliases: { id: ["cemburu"], en: ["jealous"], zh: ["嫉妒"] },
    translation: { ngoko: "meri", krama: "meri", "krama-inggil": "meri" },
  },
  {
    aliases: { id: ["cempala"], en: ["puppeteer's wooden mallet"], zh: ["皮影艺人木槌"] },
    translation: { ngoko: "cempala", krama: "cempala", "krama-inggil": "cempala" },
  },
  {
    aliases: { id: ["cempedak"], en: ["cempedak"], zh: ["小菠萝蜜"] },
    translation: { ngoko: "cempedak", krama: "cempedak", "krama-inggil": "cempedak" },
  },
  {
    aliases: { id: ["cendela"], en: ["window"], zh: ["窗户"] },
    translation: { ngoko: "jendhela", krama: "jendhela", "krama-inggil": "jendhela" },
  },
  {
    aliases: { id: ["cendol"], en: ["green starch jelly droplets"], zh: ["绿色淀粉冻条"] },
    translation: { ngoko: "cendhol", krama: "cendhol", "krama-inggil": "cendhol" },
  },
  {
    aliases: { id: ["cenil"], en: ["chewy starch sweets with grated coconut"], zh: ["椰丝淀粉软糕"] },
    translation: { ngoko: "cenil", krama: "cenil", "krama-inggil": "cenil" },
  },
  {
    aliases: { id: ["centong"], en: ["rice paddle"], zh: ["饭勺"] },
    translation: { ngoko: "enthong", krama: "enthong", "krama-inggil": "enthong" },
  },
  {
    aliases: { id: ["cepat"], en: ["fast","quick"], zh: ["快"] },
    translation: { ngoko: "cepet", krama: "enggal", "krama-inggil": "enggal" },
  },
  {
    aliases: { id: ["cepat-cepat"], en: ["quickly"], zh: ["赶快"] },
    translation: { ngoko: "cepet-cepet", krama: "enggal-enggal", "krama-inggil": "enggal-enggal" },
  },
  {
    aliases: { id: ["cerah"], en: ["bright","clear"], zh: ["明亮；晴朗"] },
    translation: { ngoko: "padhang", krama: "padhang", "krama-inggil": "padhang" },
  },
  {
    aliases: { id: ["ceramah"], en: ["give a talk"], zh: ["作讲座"] },
    translation: { ngoko: "ceramah", krama: "ceramah", "krama-inggil": "ceramah" },
  },
  {
    aliases: { id: ["cerdas"], en: ["intelligent"], zh: ["聪慧"] },
    translation: { ngoko: "pinter", krama: "lantip", "krama-inggil": "lantip" },
  },
  {
    aliases: { id: ["cerdik"], en: ["clever"], zh: ["机智"] },
    translation: { ngoko: "才", krama: "才", "krama-inggil": "才" },
  },
  {
    aliases: { id: ["cerewet"], en: ["fussy"], zh: ["爱唠叨"] },
    translation: { ngoko: "crewet", krama: "crewet", "krama-inggil": "crewet" },
  },
  {
    aliases: { id: ["ceria"], en: ["cheerful"], zh: ["喜气洋洋"] },
    translation: { ngoko: "sumringah", krama: "sumringah", "krama-inggil": "sumringah" },
  },
  {
    aliases: { id: ["cerita"], en: ["story"], zh: ["故事"] },
    translation: { ngoko: "crita", krama: "criyos", "krama-inggil": "criyos" },
  },
  {
    aliases: { id: ["cermai"], en: ["star gooseberry"], zh: ["星油藤"] },
    translation: { ngoko: "cerme", krama: "cerme", "krama-inggil": "cerme" },
  },
  {
    aliases: { id: ["cermat"], en: ["careful"], zh: ["细致"] },
    translation: { ngoko: "premati", krama: "premati", "krama-inggil": "premati" },
  },
  {
    aliases: { id: ["cermati"], en: ["scrutinize"], zh: ["审视"] },
    translation: { ngoko: "niti", krama: "niti", "krama-inggil": "niti" },
  },
  {
    aliases: { id: ["cermin"], en: ["mirror"], zh: ["镜子"] },
    translation: { ngoko: "pangilon", krama: "pangilon", "krama-inggil": "pangilon" },
  },
  {
    aliases: { id: ["ceroboh"], en: ["careless"], zh: ["粗心"] },
    translation: { ngoko: "sembrana", krama: "sembrana", "krama-inggil": "sembrana" },
  },
  {
    aliases: { id: ["cetak"], en: ["print","mold"], zh: ["打印；印制"] },
    translation: { ngoko: "nyetak", krama: "nyithak", "krama-inggil": "nyithak" },
  },
  {
    aliases: { id: ["cibir"], en: ["curl one's lips in scorn"], zh: ["撇嘴"] },
    translation: { ngoko: "mencep", krama: "mencep", "krama-inggil": "mencep" },
  },
  {
    aliases: { id: ["cicak"], en: ["house gecko"], zh: ["壁虎"] },
    translation: { ngoko: "cecak", krama: "cecak", "krama-inggil": "cecak" },
  },
  {
    aliases: { id: ["cicil"], en: ["pay in installments"], zh: ["分期付款"] },
    translation: { ngoko: "nyicil", krama: "nyicil", "krama-inggil": "nyicil" },
  },
  {
    aliases: { id: ["cicip"], en: ["taste"], zh: ["尝味"] },
    translation: { ngoko: "ngicipi", krama: "ngicipi", "krama-inggil": "ngicipi" },
  },
  {
    aliases: { id: ["cicit"], en: ["great-grandchild"], zh: ["曾孙辈"] },
    translation: { ngoko: "buyut", krama: "buyut", "krama-inggil": "buyut" },
  },
  {
    aliases: { id: ["cincang"], en: ["mince"], zh: ["剁碎"] },
    translation: { ngoko: "nyacah", krama: "nyacah", "krama-inggil": "nyacah" },
  },
  {
    aliases: { id: ["cincin"], en: ["ring"], zh: ["戒指"] },
    translation: { ngoko: "ali-ali", krama: "ali-ali", "krama-inggil": "ali-ali" },
  },
  {
    aliases: { id: ["cinta"], en: ["love"], zh: ["爱；爱情"] },
    translation: { ngoko: "tresna", krama: "tresna", "krama-inggil": "tresna" },
  },
  {
    aliases: { id: ["cita-cita"], en: ["ambition","aspiration"], zh: ["理想；志向"] },
    translation: { ngoko: "gegayuhan", krama: "gegayuhan", "krama-inggil": "gegayuhan" },
  },
  {
    aliases: { id: ["coba"], en: ["try","attempt"], zh: ["尝试"] },
    translation: { ngoko: "nyoba", krama: "nyobi", "krama-inggil": "nyobi" },
  },
  {
    aliases: { id: ["cobek"], en: ["mortar"], zh: ["研钵"] },
    translation: { ngoko: "cowèk", krama: "cowèk", "krama-inggil": "cowèk" },
  },
  {
    aliases: { id: ["cocok"], en: ["suitable","matching"], zh: ["合适；相符"] },
    translation: { ngoko: "cocog", krama: "cocog", "krama-inggil": "cocog" },
  },
  {
    aliases: { id: ["cokelat"], en: ["brown"], zh: ["棕色"] },
    translation: { ngoko: "coklat", krama: "coklat", "krama-inggil": "coklat" },
  },
  {
    aliases: { id: ["cokelat karamel"], en: ["caramel brown"], zh: ["焦糖色"] },
    translation: { ngoko: "coklat karamel", krama: "coklat karamel", "krama-inggil": "coklat karamel" },
  },
  {
    aliases: { id: ["cokelat keemasan"], en: ["golden brown"], zh: ["金棕色"] },
    translation: { ngoko: "coklat semu emas", krama: "coklat semu emas", "krama-inggil": "coklat semu emas" },
  },
  {
    aliases: { id: ["cokelat kekuningan"], en: ["yellowish brown"], zh: ["黄棕色"] },
    translation: { ngoko: "coklat semu kuning", krama: "coklat semu jene", "krama-inggil": "coklat semu jene" },
  },
  {
    aliases: { id: ["cokelat kemerahan"], en: ["reddish brown"], zh: ["红棕色"] },
    translation: { ngoko: "coklat semu abang", krama: "coklat semu abrit", "krama-inggil": "coklat semu abrit" },
  },
  {
    aliases: { id: ["cokelat kopi"], en: ["coffee brown"], zh: ["咖啡色"] },
    translation: { ngoko: "coklat kopi", krama: "coklat kopi", "krama-inggil": "coklat kopi" },
  },
  {
    aliases: { id: ["cokelat muda"], en: ["light brown"], zh: ["浅棕色"] },
    translation: { ngoko: "coklat enom", krama: "coklat anem", "krama-inggil": "coklat anem" },
  },
  {
    aliases: { id: ["cokelat susu"], en: ["milk chocolate brown"], zh: ["牛奶巧克力色"] },
    translation: { ngoko: "coklat susu", krama: "coklat susu", "krama-inggil": "coklat susu" },
  },
  {
    aliases: { id: ["cokelat tanah"], en: ["earth brown"], zh: ["土棕色"] },
    translation: { ngoko: "coklat lemah", krama: "coklat siti", "krama-inggil": "coklat siti" },
  },
  {
    aliases: { id: ["cokelat tua"], en: ["dark brown"], zh: ["深棕色"] },
    translation: { ngoko: "coklat tuwa", krama: "coklat sepuh", "krama-inggil": "coklat sepuh" },
  },
  {
    aliases: { id: ["condong"], en: ["leaning"], zh: ["歪斜的"] },
    translation: { ngoko: "dhoyong", krama: "dhoyong", "krama-inggil": "dhoyong" },
  },
  {
    aliases: { id: ["congkak"], en: ["conceited"], zh: ["自负"] },
    translation: { ngoko: "umuk", krama: "umuk", "krama-inggil": "umuk" },
  },
  {
    aliases: { id: ["congklak"], en: ["congklak"], zh: ["播棋"] },
    translation: { ngoko: "dhakon", krama: "dhakon", "krama-inggil": "dhakon" },
  },
  {
    aliases: { id: ["contoh"], en: ["example","sample"], zh: ["例子；样本"] },
    translation: { ngoko: "tuladha", krama: "tuladha", "krama-inggil": "tuladha" },
  },
  {
    aliases: { id: ["cuaca"], en: ["weather"], zh: ["天气"] },
    translation: { ngoko: "cuaca", krama: "cuaca", "krama-inggil": "cuaca" },
  },
  {
    aliases: { id: ["cubit"], en: ["pinch"], zh: ["掐"] },
    translation: { ngoko: "njiwit", krama: "njiwit", "krama-inggil": "njiwit" },
  },
  {
    aliases: { id: ["cuci"], en: ["wash"], zh: ["洗"] },
    translation: { ngoko: "umbah", krama: "umbah", "krama-inggil": "umbah" },
  },
  {
    aliases: { id: ["cucian"], en: ["laundry","items to wash"], zh: ["待洗衣物"] },
    translation: { ngoko: "umbahan", krama: "umbahan", "krama-inggil": "umbahan" },
  },
  {
    aliases: { id: ["cucu"], en: ["grandchild"], zh: ["孙辈"] },
    translation: { ngoko: "putu", krama: "wayah", "krama-inggil": "wayah" },
  },
  {
    aliases: { id: ["cuka"], en: ["vinegar"], zh: ["醋"] },
    translation: { ngoko: "cuka", krama: "cuka", "krama-inggil": "cuka" },
  },
  {
    aliases: { id: ["cukup"], en: ["enough","sufficient"], zh: ["足够"] },
    translation: { ngoko: "cukup", krama: "cekap", "krama-inggil": "cekap" },
  },
  {
    aliases: { id: ["cukupi"], en: ["provide enough","meet needs"], zh: ["满足需要"] },
    translation: { ngoko: "nyukupi", krama: "nyekapi", "krama-inggil": "nyekapi" },
  },
  {
    aliases: { id: ["cukur"], en: ["shave","haircut"], zh: ["剃；理发"] },
    translation: { ngoko: "nyukur", krama: "nyukur", "krama-inggil": "nyukur" },
  },
  {
    aliases: { id: ["cuma"], en: ["only","just"], zh: ["只是；仅仅"] },
    translation: { ngoko: "mung", krama: "namung", "krama-inggil": "namung" },
  },
  {
    aliases: { id: ["cumi-cumi"], en: ["squid"], zh: ["鱿鱼"] },
    translation: { ngoko: "cumi-cumi", krama: "cumi-cumi", "krama-inggil": "cumi-cumi" },
  },
  {
    aliases: { id: ["cuping telinga"], en: ["earlobe"], zh: ["耳垂"] },
    translation: { ngoko: "cuping kuping", krama: "cuping kuping", "krama-inggil": "cuping talingan" },
  },
  {
    aliases: { id: ["curam"], en: ["steep"], zh: ["陡的"] },
    translation: { ngoko: "tajem", krama: "tajem", "krama-inggil": "tajem" },
  },
  {
    aliases: { id: ["curang"], en: ["dishonest"], zh: ["奸诈"] },
    translation: { ngoko: "culika", krama: "culika", "krama-inggil": "culika" },
  },
  {
    aliases: { id: ["curiga"], en: ["suspicious"], zh: ["怀疑"] },
    translation: { ngoko: "curiga", krama: "sumelang", "krama-inggil": "sumelang" },
  },
  {
    aliases: { id: ["curigai"], en: ["be suspicious of"], zh: ["猜疑"] },
    translation: { ngoko: "nyujanani", krama: "nyujanani", "krama-inggil": "nyujanani" },
  },
  {
    aliases: { id: ["dada"], en: ["chest"], zh: ["胸部"] },
    translation: { ngoko: "dhadha", krama: "dhadha", "krama-inggil": "dhadha" },
  },
  {
    aliases: { id: ["dadah"], en: ["goodbye","take leave"], zh: ["告别"] },
    translation: { ngoko: "pamit", krama: "pamit", "krama-inggil": "pamit" },
  },
  {
    aliases: { id: ["dadu"], en: ["die"], zh: ["骰子"] },
    translation: { ngoko: "dhadhu", krama: "dhadhu", "krama-inggil": "dhadhu" },
  },
  {
    aliases: { id: ["daerah"], en: ["region"], zh: ["地区"] },
    translation: { ngoko: "wilayah", krama: "wilayah", "krama-inggil": "wilayah" },
  },
  {
    aliases: { id: ["daftar"], en: ["list"], zh: ["清单"] },
    translation: { ngoko: "dhaptar", krama: "dhaptar", "krama-inggil": "dhaptar" },
  },
  {
    aliases: { id: ["daftar hadir"], en: ["attendance list"], zh: ["签到表"] },
    translation: { ngoko: "dhaptar hadir", krama: "dhaptar hadir", "krama-inggil": "dhaptar hadir" },
  },
  {
    aliases: { id: ["dagangan"], en: ["merchandise"], zh: ["商品"] },
    translation: { ngoko: "dagangan", krama: "dagangan", "krama-inggil": "dagangan" },
  },
  {
    aliases: { id: ["daging"], en: ["meat"], zh: ["肉"] },
    translation: { ngoko: "daging", krama: "daging", "krama-inggil": "daging" },
  },
  {
    aliases: { id: ["dagu"], en: ["chin"], zh: ["下巴"] },
    translation: { ngoko: "uwang", krama: "uwang", "krama-inggil": "uwang" },
  },
  {
    aliases: { id: ["dahak"], en: ["phlegm"], zh: ["痰"] },
    translation: { ngoko: "riyak", krama: "riyak", "krama-inggil": "jlagra" },
  },
  {
    aliases: { id: ["dahan"], en: ["branch of a tree"], zh: ["树枝"] },
    translation: { ngoko: "pang", krama: "pang", "krama-inggil": "pang" },
  },
  {
    aliases: { id: ["dahi"], en: ["forehead"], zh: ["额头"] },
    translation: { ngoko: "bathuk", krama: "bathuk", "krama-inggil": "bathuk" },
  },
  {
    aliases: { id: ["dahulu"], en: ["formerly","before"], zh: ["以前；从前"] },
    translation: { ngoko: "biyen", krama: "rumiyin", "krama-inggil": "rumiyin" },
  },
  {
    aliases: { id: ["dahulu kala"], en: ["long ago"], zh: ["很久以前"] },
    translation: { ngoko: "jaman biyen", krama: "jaman rumiyin", "krama-inggil": "jaman rumiyin" },
  },
  {
    aliases: { id: ["dalam"], en: ["inside","deep"], zh: ["里面；深"] },
    translation: { ngoko: "jero", krama: "lebet", "krama-inggil": "lebet" },
  },
  {
    aliases: { id: ["dalam-dalam"], en: ["deeply"], zh: ["深深地"] },
    translation: { ngoko: "jero-jero", krama: "lebet-lebet", "krama-inggil": "lebet-lebet" },
  },
  {
    aliases: { id: ["dalang"], en: ["wayang puppeteer"], zh: ["哇扬偶戏艺人"] },
    translation: { ngoko: "dhalang", krama: "dhalang", "krama-inggil": "dhalang" },
  },
  {
    aliases: { id: ["damai"], en: ["peaceful","peace"], zh: ["和平；安宁"] },
    translation: { ngoko: "tentrem", krama: "tentrem", "krama-inggil": "tentrem" },
  },
  {
    aliases: { id: ["damaikan"], en: ["reconcile","make peace"], zh: ["调解；和解"] },
    translation: { ngoko: "ngleremake", krama: "ngleremake", "krama-inggil": "ngleremake" },
  },
  {
    aliases: { id: ["dan"], en: ["and"], zh: ["和；与"] },
    translation: { ngoko: "lan", krama: "lan", "krama-inggil": "lan" },
  },
  {
    aliases: { id: ["dan kemudian"], en: ["and then"], zh: ["然后"] },
    translation: { ngoko: "lan banjur", krama: "lan lajeng", "krama-inggil": "lan lajeng" },
  },
  {
    aliases: { id: ["danau"], en: ["lake"], zh: ["湖"] },
    translation: { ngoko: "tlaga", krama: "tlaga", "krama-inggil": "tlaga" },
  },
  {
    aliases: { id: ["dandang"], en: ["traditional rice steamer"], zh: ["蒸锅"] },
    translation: { ngoko: "dandang", krama: "dandang", "krama-inggil": "dandang" },
  },
  {
    aliases: { id: ["dandanggula"], en: ["dhandhanggula poetic meter"], zh: ["丹当古拉诗律"] },
    translation: { ngoko: "dhandhanggula", krama: "dhandhanggula", "krama-inggil": "dhandhanggula" },
  },
  {
    aliases: { id: ["dangkal"], en: ["shallow"], zh: ["浅的"] },
    translation: { ngoko: "cethek", krama: "cethek", "krama-inggil": "cethek" },
  },
  {
    aliases: { id: ["dapat"], en: ["can","obtain"], zh: ["能够；得到"] },
    translation: { ngoko: "bisa", krama: "saged", "krama-inggil": "saged" },
  },
  {
    aliases: { id: ["dapur"], en: ["kitchen"], zh: ["厨房"] },
    translation: { ngoko: "pawon", krama: "pawon", "krama-inggil": "pawon" },
  },
  {
    aliases: { id: ["darah"], en: ["blood"], zh: ["血"] },
    translation: { ngoko: "getih", krama: "rah", "krama-inggil": "rah" },
  },
  {
    aliases: { id: ["darat"], en: ["land","mainland"], zh: ["陆地"] },
    translation: { ngoko: "darat", krama: "darat", "krama-inggil": "darat" },
  },
  {
    aliases: { id: ["dari"], en: ["from"], zh: ["从"] },
    translation: { ngoko: "saka", krama: "saking", "krama-inggil": "saking" },
  },
  {
    aliases: { id: ["dari mana"], en: ["from where"], zh: ["从哪里"] },
    translation: { ngoko: "saka endi", krama: "saking pundi", "krama-inggil": "saking pundi" },
  },
  {
    aliases: { id: ["dari sana"], en: ["from over there"], zh: ["从那边"] },
    translation: { ngoko: "saka kana", krama: "saking ngrika", "krama-inggil": "saking ngrika" },
  },
  {
    aliases: { id: ["dari siapa"], en: ["from whom"], zh: ["来自谁"] },
    translation: { ngoko: "saka sapa", krama: "saking sinten", "krama-inggil": "saking sinten" },
  },
  {
    aliases: { id: ["dari sini"], en: ["from here"], zh: ["从这里"] },
    translation: { ngoko: "saka kene", krama: "saking ngriki", "krama-inggil": "saking ngriki" },
  },
  {
    aliases: { id: ["dari situ"], en: ["from where you are"], zh: ["从你那里"] },
    translation: { ngoko: "saka kono", krama: "saking ngriku", "krama-inggil": "saking ngriku" },
  },
  {
    aliases: { id: ["daripada"], en: ["than","rather than"], zh: ["比；与其"] },
    translation: { ngoko: "tinimbang", krama: "tinimbang", "krama-inggil": "tinimbang" },
  },
  {
    aliases: { id: ["darurat"], en: ["emergency"], zh: ["紧急情况"] },
    translation: { ngoko: "darurat", krama: "darurat", "krama-inggil": "darurat" },
  },
  {
    aliases: { id: ["dasar"], en: ["base","foundation"], zh: ["基础"] },
    translation: { ngoko: "dhasar", krama: "dhasar", "krama-inggil": "dhasar" },
  },
  {
    aliases: { id: ["dasawarsa"], en: ["decade"], zh: ["十年"] },
    translation: { ngoko: "dasawarsa", krama: "dasawarsa", "krama-inggil": "dasawarsa" },
  },
  {
    aliases: { id: ["dasi"], en: ["necktie"], zh: ["领带"] },
    translation: { ngoko: "dhasi", krama: "dhasi", "krama-inggil": "dhasi" },
  },
  {
    aliases: { id: ["daster"], en: ["house dress"], zh: ["宽松家居裙"] },
    translation: { ngoko: "dhaster", krama: "dhaster", "krama-inggil": "dhaster" },
  },
  {
    aliases: { id: ["data"], en: ["data"], zh: ["数据"] },
    translation: { ngoko: "data", krama: "data", "krama-inggil": "data" },
  },
  {
    aliases: { id: ["datang"], en: ["come","arrive"], zh: ["来；到达"] },
    translation: { ngoko: "teka", krama: "dugi", "krama-inggil": "rawuh" },
  },
  {
    aliases: { id: ["datar"], en: ["flat"], zh: ["平的"] },
    translation: { ngoko: "rata", krama: "rata", "krama-inggil": "rata" },
  },
  {
    aliases: { id: ["dataran"], en: ["plain"], zh: ["平原"] },
    translation: { ngoko: "dharatan", krama: "dharatan", "krama-inggil": "dharatan" },
  },
  {
    aliases: { id: ["daun"], en: ["leaf"], zh: ["叶子"] },
    translation: { ngoko: "godhong", krama: "ron", "krama-inggil": "ron" },
  },
  {
    aliases: { id: ["dawet"], en: ["coconut milk drink with starch jelly"], zh: ["椰浆粉条甜饮"] },
    translation: { ngoko: "dhawet", krama: "dhawet", "krama-inggil": "dhawet" },
  },
  {
    aliases: { id: ["debat"], en: ["debate"], zh: ["辩论"] },
    translation: { ngoko: "debat", krama: "debat", "krama-inggil": "debat" },
  },
  {
    aliases: { id: ["debu"], en: ["dust"], zh: ["灰尘"] },
    translation: { ngoko: "bledug", krama: "lebu", "krama-inggil": "lebu" },
  },
  {
    aliases: { id: ["dedak"], en: ["rice bran"], zh: ["米糠"] },
    translation: { ngoko: "katul", krama: "katul", "krama-inggil": "katul" },
  },
  {
    aliases: { id: ["dekat"], en: ["near","close"], zh: ["近"] },
    translation: { ngoko: "cedhak", krama: "celak", "krama-inggil": "celak" },
  },
  {
    aliases: { id: ["dekat sekali"], en: ["very close"], zh: ["非常近"] },
    translation: { ngoko: "cedhak banget", krama: "celak sanget", "krama-inggil": "celak sanget" },
  },
  {
    aliases: { id: ["delapan"], en: ["eight"], zh: ["八"] },
    translation: { ngoko: "wolu", krama: "wolu", "krama-inggil": "wolu" },
  },
  {
    aliases: { id: ["delapan belas"], en: ["eighteen"], zh: ["十八"] },
    translation: { ngoko: "wolulas", krama: "wolulas", "krama-inggil": "wolulas" },
  },
  {
    aliases: { id: ["delapan puluh"], en: ["eighty"], zh: ["八十"] },
    translation: { ngoko: "wolung puluh", krama: "wolung dasa", "krama-inggil": "wolung dasa" },
  },
  {
    aliases: { id: ["delapan puluh delapan"], en: ["eighty-eight"], zh: ["八十八"] },
    translation: { ngoko: "wolung puluh wolu", krama: "wolung dasa wolu", "krama-inggil": "wolung dasa wolu" },
  },
  {
    aliases: { id: ["delapan puluh dua"], en: ["eighty-two"], zh: ["八十二"] },
    translation: { ngoko: "wolung puluh loro", krama: "wolung dasa kalih", "krama-inggil": "wolung dasa kalih" },
  },
  {
    aliases: { id: ["delapan puluh empat"], en: ["eighty-four"], zh: ["八十四"] },
    translation: { ngoko: "wolung puluh papat", krama: "wolung dasa sekawan", "krama-inggil": "wolung dasa sekawan" },
  },
  {
    aliases: { id: ["delapan puluh enam"], en: ["eighty-six"], zh: ["八十六"] },
    translation: { ngoko: "wolung puluh enem", krama: "wolung dasa enem", "krama-inggil": "wolung dasa enem" },
  },
  {
    aliases: { id: ["delapan puluh lima"], en: ["eighty-five"], zh: ["八十五"] },
    translation: { ngoko: "wolung puluh lima", krama: "wolung dasa gangsal", "krama-inggil": "wolung dasa gangsal" },
  },
  {
    aliases: { id: ["delapan puluh satu"], en: ["eighty-one"], zh: ["八十一"] },
    translation: { ngoko: "wolung puluh siji", krama: "wolung dasa setunggal", "krama-inggil": "wolung dasa setunggal" },
  },
  {
    aliases: { id: ["delapan puluh sembilan"], en: ["eighty-nine"], zh: ["八十九"] },
    translation: { ngoko: "wolung puluh sanga", krama: "wolung dasa sanga", "krama-inggil": "wolung dasa sanga" },
  },
  {
    aliases: { id: ["delapan puluh tiga"], en: ["eighty-three"], zh: ["八十三"] },
    translation: { ngoko: "wolung puluh telu", krama: "wolung dasa tiga", "krama-inggil": "wolung dasa tiga" },
  },
  {
    aliases: { id: ["delapan puluh tujuh"], en: ["eighty-seven"], zh: ["八十七"] },
    translation: { ngoko: "wolung puluh pitu", krama: "wolung dasa pitu", "krama-inggil": "wolung dasa pitu" },
  },
  {
    aliases: { id: ["delima"], en: ["pomegranate"], zh: ["石榴"] },
    translation: { ngoko: "dlima", krama: "dlima", "krama-inggil": "dlima" },
  },
  {
    aliases: { id: ["delman"], en: ["horse-drawn carriage"], zh: ["马车"] },
    translation: { ngoko: "dhokar", krama: "dhokar", "krama-inggil": "dhokar" },
  },
  {
    aliases: { id: ["demam"], en: ["fever"], zh: ["发烧"] },
    translation: { ngoko: "panas", krama: "benter", "krama-inggil": "benter" },
  },
  {
    aliases: { id: ["demi"], en: ["for the sake of"], zh: ["为了"] },
    translation: { ngoko: "kanggo", krama: "kagem", "krama-inggil": "kagem" },
  },
  {
    aliases: { id: ["demikian"], en: ["thus","like that"], zh: ["如此；那样"] },
    translation: { ngoko: "mangkono", krama: "mekaten", "krama-inggil": "mekaten" },
  },
  {
    aliases: { id: ["demokrasi"], en: ["democracy"], zh: ["民主"] },
    translation: { ngoko: "demokrasi", krama: "demokrasi", "krama-inggil": "demokrasi" },
  },
  {
    aliases: { id: ["demung"], en: ["low-register metallophone"], zh: ["低音金属排琴"] },
    translation: { ngoko: "demung", krama: "demung", "krama-inggil": "demung" },
  },
  {
    aliases: { id: ["denda"], en: ["fine","penalty"], zh: ["罚款；处罚"] },
    translation: { ngoko: "denda", krama: "denda", "krama-inggil": "denda" },
  },
  {
    aliases: { id: ["dendam"], en: ["hold a grudge"], zh: ["记恨"] },
    translation: { ngoko: "ndendam", krama: "ndendam", "krama-inggil": "ndendam" },
  },
  {
    aliases: { id: ["dendeng"], en: ["dried seasoned meat"], zh: ["肉干"] },
    translation: { ngoko: "dhendheng", krama: "dhendheng", "krama-inggil": "dhendheng" },
  },
  {
    aliases: { id: ["dengan"], en: ["with","by"], zh: ["和；用"] },
    translation: { ngoko: "karo", krama: "kaliyan", "krama-inggil": "kaliyan" },
  },
  {
    aliases: { id: ["dengan apa"], en: ["with what"], zh: ["用什么"] },
    translation: { ngoko: "nganggo apa", krama: "ngangge menapa", "krama-inggil": "ngangge menapa" },
  },
  {
    aliases: { id: ["dengan demikian"], en: ["thus","in this way"], zh: ["这样一来"] },
    translation: { ngoko: "kanthi mangkono", krama: "kanthi mekaten", "krama-inggil": "kanthi mekaten" },
  },
  {
    aliases: { id: ["dengan siapa"], en: ["with whom"], zh: ["跟谁"] },
    translation: { ngoko: "karo sapa", krama: "kaliyan sinten", "krama-inggil": "kaliyan sinten" },
  },
  {
    aliases: { id: ["dengar"], en: ["hear","listen"], zh: ["听见；听"] },
    translation: { ngoko: "krungu", krama: "mireng", "krama-inggil": "mireng" },
  },
  {
    aliases: { id: ["dengarkan"], en: ["listen!"], zh: ["听！"] },
    translation: { ngoko: "rungokna", krama: "mirengaken", "krama-inggil": "mirengaken" },
  },
  {
    aliases: { id: ["dengki"], en: ["maliciously envious"], zh: ["妒忌心重"] },
    translation: { ngoko: "drengki", krama: "drengki", "krama-inggil": "drengki" },
  },
  {
    aliases: { id: ["dengung"], en: ["buzz","hum"], zh: ["嗡嗡声"] },
    translation: { ngoko: "dengung", krama: "dengung", "krama-inggil": "dengung" },
  },
  {
    aliases: { id: ["denting"], en: ["clang","chime"], zh: ["叮当声"] },
    translation: { ngoko: "denting", krama: "denting", "krama-inggil": "denting" },
  },
  {
    aliases: { id: ["depan"], en: ["front","in front"], zh: ["前面"] },
    translation: { ngoko: "ngarep", krama: "ngajeng", "krama-inggil": "ngajeng" },
  },
  {
    aliases: { id: ["derajat"], en: ["degree","rank"], zh: ["度；等级"] },
    translation: { ngoko: "drajat", krama: "draja(t)", "krama-inggil": "draja(t)" },
  },
  {
    aliases: { id: ["deras"], en: ["fast-flowing","heavy"], zh: ["急；猛烈"] },
    translation: { ngoko: "banter", krama: "deres", "krama-inggil": "deres" },
  },
  {
    aliases: { id: ["derita"], en: ["suffering"], zh: ["苦难"] },
    translation: { ngoko: "sangsara", krama: "sangsara", "krama-inggil": "sangsara" },
  },
  {
    aliases: { id: ["dermaga"], en: ["pier"], zh: ["码头"] },
    translation: { ngoko: "dermaga", krama: "dermaga", "krama-inggil": "dermaga" },
  },
  {
    aliases: { id: ["dermawan"], en: ["generous"], zh: ["慷慨"] },
    translation: { ngoko: "loman", krama: "loman", "krama-inggil": "loman" },
  },
  {
    aliases: { id: ["desa"], en: ["village"], zh: ["村庄"] },
    translation: { ngoko: "desa", krama: "dhusun", "krama-inggil": "dhusun" },
  },
  {
    aliases: { id: ["desain"], en: ["design"], zh: ["设计"] },
    translation: { ngoko: "desain", krama: "desain", "krama-inggil": "desain" },
  },
  {
    aliases: { id: ["desainer"], en: ["designer"], zh: ["设计师"] },
    translation: { ngoko: "desainer", krama: "desainer", "krama-inggil": "desainer" },
  },
  {
    aliases: { id: ["desainer grafis"], en: ["graphic designer"], zh: ["平面设计师"] },
    translation: { ngoko: "desainer grafis", krama: "desainer grafis", "krama-inggil": "desainer grafis" },
  },
  {
    aliases: { id: ["Desember"], en: ["December"], zh: ["十二月"] },
    translation: { ngoko: "Desember", krama: "Desember", "krama-inggil": "Desember" },
  },
  {
    aliases: { id: ["detik"], en: ["second (time)"], zh: ["秒"] },
    translation: { ngoko: "detik", krama: "detik", "krama-inggil": "detik" },
  },
  {
    aliases: { id: ["dewasa"], en: ["adult","mature"], zh: ["成年人；成熟"] },
    translation: { ngoko: "diwasa", krama: "diwasa", "krama-inggil": "diwasa" },
  },
  {
    aliases: { id: ["dewi"], en: ["goddess"], zh: ["女神"] },
    translation: { ngoko: "dewi", krama: "dewi", "krama-inggil": "dewi" },
  },
  {
    aliases: { id: ["di"], en: ["at","in","on"], zh: ["在"] },
    translation: { ngoko: "ing", krama: "wonten", "krama-inggil": "wonten" },
  },
  {
    aliases: { id: ["di antara"], en: ["between","among"], zh: ["在之间"] },
    translation: { ngoko: "ing antarane", krama: "wonten ing antawisipun", "krama-inggil": "wonten ing antawisipun" },
  },
  {
    aliases: { id: ["di atas"], en: ["above","on top"], zh: ["在上面"] },
    translation: { ngoko: "ing dhuwur", krama: "wonten ing inggil", "krama-inggil": "wonten ing inggil" },
  },
  {
    aliases: { id: ["di bawah"], en: ["below","underneath"], zh: ["在下面"] },
    translation: { ngoko: "ing ngisor", krama: "wonten ing ngandhap", "krama-inggil": "wonten ing ngandhap" },
  },
  {
    aliases: { id: ["di belakang"], en: ["behind"], zh: ["在后面"] },
    translation: { ngoko: "ing mburi", krama: "wonten ing wingking", "krama-inggil": "wonten ing wingking" },
  },
  {
    aliases: { id: ["di dalam"], en: ["inside"], zh: ["在里面"] },
    translation: { ngoko: "ing njero", krama: "wonten ing lebet", "krama-inggil": "wonten ing lebet" },
  },
  {
    aliases: { id: ["di depan"], en: ["in front"], zh: ["在前面"] },
    translation: { ngoko: "ing ngarep", krama: "wonten ing ngajeng", "krama-inggil": "wonten ing ngajeng" },
  },
  {
    aliases: { id: ["di luar"], en: ["outside"], zh: ["在外面"] },
    translation: { ngoko: "ing njaba", krama: "wonten ing njawi", "krama-inggil": "wonten ing njawi" },
  },
  {
    aliases: { id: ["di mana"], en: ["where"], zh: ["在哪里"] },
    translation: { ngoko: "ing ngendi", krama: "wonten pundi", "krama-inggil": "wonten pundi" },
  },
  {
    aliases: { id: ["di mana-mana"], en: ["everywhere"], zh: ["到处"] },
    translation: { ngoko: "ing ngendi-endi", krama: "wonten ing pundi-pundi", "krama-inggil": "wonten ing pundi-pundi" },
  },
  {
    aliases: { id: ["di sana"], en: ["over there"], zh: ["在那边"] },
    translation: { ngoko: "ing kana", krama: "wonten ngrika", "krama-inggil": "wonten ngrika" },
  },
  {
    aliases: { id: ["di sini"], en: ["here"], zh: ["在这里"] },
    translation: { ngoko: "ing kene", krama: "wonten ngriki", "krama-inggil": "wonten ngriki" },
  },
  {
    aliases: { id: ["di situ"], en: ["there near you"], zh: ["在你那里"] },
    translation: { ngoko: "ing kono", krama: "wonten ngriku", "krama-inggil": "wonten ngriku" },
  },
  {
    aliases: { id: ["dia"], en: ["he","she","they (singular)"], zh: ["他；她"] },
    translation: { ngoko: "dheweke", krama: "piyambakipun", "krama-inggil": "piyambakipun" },
  },
  {
    aliases: { id: ["dia sendiri"], en: ["he himself","she herself"], zh: ["他自己；她自己"] },
    translation: { ngoko: "dheweke dhewe", krama: "piyambakipun piyambak", "krama-inggil": "panjenenganipun piyambak" },
  },
  {
    aliases: { id: ["diabetes"], en: ["diabetes"], zh: ["糖尿病"] },
    translation: { ngoko: "diabetes", krama: "diabetes", "krama-inggil": "diabetes" },
  },
  {
    aliases: { id: ["diagnosis"], en: ["diagnosis"], zh: ["诊断"] },
    translation: { ngoko: "diagnosis", krama: "diagnosis", "krama-inggil": "diagnosis" },
  },
  {
    aliases: { id: ["diam"], en: ["silent","quiet"], zh: ["安静；沉默"] },
    translation: { ngoko: "meneng", krama: "meneng", "krama-inggil": "meneng" },
  },
  {
    aliases: { id: ["diam-diam"], en: ["secretly","quietly"], zh: ["悄悄地"] },
    translation: { ngoko: "meneng-meneng", krama: "meneng-meneng", "krama-inggil": "meneng-meneng" },
  },
  {
    aliases: { id: ["diare"], en: ["diarrhea"], zh: ["腹泻"] },
    translation: { ngoko: "mencret", krama: "mencret", "krama-inggil": "mencret" },
  },
  {
    aliases: { id: ["didik"], en: ["educate"], zh: ["教育"] },
    translation: { ngoko: "ndhidhik", krama: "ndhidhik", "krama-inggil": "ndhidhik" },
  },
  {
    aliases: { id: ["didikan"], en: ["education","upbringing"], zh: ["教育；教养"] },
    translation: { ngoko: "pendhidhikan", krama: "pendhidhikan", "krama-inggil": "pendhidhikan" },
  },
  {
    aliases: { id: ["digital"], en: ["digital"], zh: ["数字的"] },
    translation: { ngoko: "digital", krama: "digital", "krama-inggil": "digital" },
  },
  {
    aliases: { id: ["dikte"], en: ["dictate"], zh: ["口述供记录"] },
    translation: { ngoko: "ndhikte", krama: "ndhikte", "krama-inggil": "ndhikte" },
  },
  {
    aliases: { id: ["dinamo"], en: ["dynamo"], zh: ["发电机"] },
    translation: { ngoko: "dinamo", krama: "dinamo", "krama-inggil": "dinamo" },
  },
  {
    aliases: { id: ["dinas"], en: ["government department"], zh: ["政府部门"] },
    translation: { ngoko: "dinas", krama: "dinas", "krama-inggil": "dinas" },
  },
  {
    aliases: { id: ["dinding"], en: ["wall"], zh: ["墙"] },
    translation: { ngoko: "tembok", krama: "tembok", "krama-inggil": "tembok" },
  },
  {
    aliases: { id: ["dingin"], en: ["cold"], zh: ["冷"] },
    translation: { ngoko: "adhem", krama: "asrep", "krama-inggil": "asrep" },
  },
  {
    aliases: { id: ["dinginkan"], en: ["cool down"], zh: ["冷却"] },
    translation: { ngoko: "ngademake", krama: "ngademaken", "krama-inggil": "ngademaken" },
  },
  {
    aliases: { id: ["dini hari"], en: ["very early morning"], zh: ["凌晨"] },
    translation: { ngoko: "esuk umun-umun", krama: "enjing umun-umun", "krama-inggil": "enjing umun-umun" },
  },
  {
    aliases: { id: ["dipan"], en: ["bedstead"], zh: ["床架"] },
    translation: { ngoko: "amben", krama: "amben", "krama-inggil": "amben" },
  },
  {
    aliases: { id: ["diplomat"], en: ["diplomat"], zh: ["外交官"] },
    translation: { ngoko: "diplomat", krama: "diplomat", "krama-inggil": "diplomat" },
  },
  {
    aliases: { id: ["direktur"], en: ["company director"], zh: ["公司总监"] },
    translation: { ngoko: "dirèktur", krama: "dirèktur", "krama-inggil": "dirèktur" },
  },
  {
    aliases: { id: ["diri sendiri"], en: ["oneself"], zh: ["自己"] },
    translation: { ngoko: "awake dhewe", krama: "piyambak", "krama-inggil": "piyambak" },
  },
  {
    aliases: { id: ["disiplin"], en: ["discipline"], zh: ["纪律"] },
    translation: { ngoko: "disiplin", krama: "disiplin", "krama-inggil": "disiplin" },
  },
  {
    aliases: { id: ["diska lepas"], en: ["USB flash drive"], zh: ["优盘"] },
    translation: { ngoko: "flashdisk", krama: "flashdisk", "krama-inggil": "flashdisk" },
  },
  {
    aliases: { id: ["diskon"], en: ["discount"], zh: ["折扣"] },
    translation: { ngoko: "diskon", krama: "diskon", "krama-inggil": "diskon" },
  },
  {
    aliases: { id: ["diskusi"], en: ["discussion"], zh: ["讨论"] },
    translation: { ngoko: "rembugan", krama: "rembagan", "krama-inggil": "rembagan" },
  },
  {
    aliases: { id: ["dispenser"], en: ["water dispenser"], zh: ["饮水机"] },
    translation: { ngoko: "dispenser", krama: "dispenser", "krama-inggil": "dispenser" },
  },
  {
    aliases: { id: ["doa"], en: ["prayer"], zh: ["祷告；祈祷"] },
    translation: { ngoko: "donga", krama: "donga", "krama-inggil": "donga" },
  },
  {
    aliases: { id: ["doakan"], en: ["pray for"], zh: ["为……祈祷"] },
    translation: { ngoko: "ndongakake", krama: "ndongakaken", "krama-inggil": "ndongakaken" },
  },
  {
    aliases: { id: ["dodol"], en: ["sticky coconut milk confection"], zh: ["椰浆糯米软糖"] },
    translation: { ngoko: "dodol", krama: "dodol", "krama-inggil": "dodol" },
  },
  {
    aliases: { id: ["dokter"], en: ["doctor"], zh: ["医生"] },
    translation: { ngoko: "dhokter", krama: "dhokter", "krama-inggil": "dhokter" },
  },
  {
    aliases: { id: ["dokter gigi"], en: ["dentist"], zh: ["牙医"] },
    translation: { ngoko: "dhokter untu", krama: "dhokter waos", "krama-inggil": "dhokter waos" },
  },
  {
    aliases: { id: ["dokter hewan"], en: ["veterinarian"], zh: ["兽医"] },
    translation: { ngoko: "dhokter kéwan", krama: "dhokter kéwan", "krama-inggil": "dhokter kéwan" },
  },
  {
    aliases: { id: ["dokumen"], en: ["document"], zh: ["文件"] },
    translation: { ngoko: "dokumen", krama: "dokumen", "krama-inggil": "dokumen" },
  },
  {
    aliases: { id: ["domba"], en: ["sheep"], zh: ["绵羊"] },
    translation: { ngoko: "wedhus", krama: "wedhus", "krama-inggil": "wedhus" },
  },
  {
    aliases: { id: ["domino"], en: ["dominoes"], zh: ["多米诺骨牌"] },
    translation: { ngoko: "dhomino", krama: "dhomino", "krama-inggil": "dhomino" },
  },
  {
    aliases: { id: ["dompet"], en: ["wallet"], zh: ["钱包"] },
    translation: { ngoko: "dhompèt", krama: "dhompèt", "krama-inggil": "dhompèt" },
  },
  {
    aliases: { id: ["donasi"], en: ["donation"], zh: ["捐赠"] },
    translation: { ngoko: "sumbangan", krama: "sumbangan", "krama-inggil": "sumbangan" },
  },
  {
    aliases: { id: ["dongeng"], en: ["tell a fairy tale"], zh: ["讲童话"] },
    translation: { ngoko: "ndongeng", krama: "ndongeng", "krama-inggil": "ndongeng" },
  },
  {
    aliases: { id: ["dongkol"], en: ["inwardly resentful"], zh: ["窝火"] },
    translation: { ngoko: "mangkel", krama: "mangkel", "krama-inggil": "mangkel" },
  },
  {
    aliases: { id: ["donor"], en: ["donor"], zh: ["捐献者"] },
    translation: { ngoko: "donor", krama: "donor", "krama-inggil": "donor" },
  },
  {
    aliases: { id: ["dorong"], en: ["push"], zh: ["推"] },
    translation: { ngoko: "nyurung", krama: "nyurung", "krama-inggil": "nyurung" },
  },
  {
    aliases: { id: ["dosa"], en: ["sin"], zh: ["罪"] },
    translation: { ngoko: "dosa", krama: "dosa", "krama-inggil": "dosa" },
  },
  {
    aliases: { id: ["dosen"], en: ["lecturer"], zh: ["大学教师"] },
    translation: { ngoko: "dosèn", krama: "dosèn", "krama-inggil": "dosèn" },
  },
  {
    aliases: { id: ["dosis"], en: ["dosage"], zh: ["剂量"] },
    translation: { ngoko: "dosis", krama: "dosis", "krama-inggil": "dosis" },
  },
  {
    aliases: { id: ["doyan"], en: ["like","fond of"], zh: ["喜欢"] },
    translation: { ngoko: "seneng", krama: "remen", "krama-inggil": "remen" },
  },
  {
    aliases: { id: ["drama"], en: ["drama"], zh: ["戏剧"] },
    translation: { ngoko: "drama", krama: "drama", "krama-inggil": "drama" },
  },
  {
    aliases: { id: ["drone"], en: ["drone"], zh: ["无人机"] },
    translation: { ngoko: "drone", krama: "drone", "krama-inggil": "drone" },
  },
  {
    aliases: { id: ["dua"], en: ["two"], zh: ["二；两"] },
    translation: { ngoko: "loro", krama: "kalih", "krama-inggil": "kalih" },
  },
  {
    aliases: { id: ["dua belas"], en: ["twelve"], zh: ["十二"] },
    translation: { ngoko: "rolas", krama: "kalih welas", "krama-inggil": "kalih welas" },
  },
  {
    aliases: { id: ["dua kali"], en: ["twice"], zh: ["两次"] },
    translation: { ngoko: "kaping pindho", krama: "kaping kalih", "krama-inggil": "kaping kalih" },
  },
  {
    aliases: { id: ["dua puluh"], en: ["twenty"], zh: ["二十"] },
    translation: { ngoko: "rong puluh", krama: "kalih dasa", "krama-inggil": "kalih dasa" },
  },
  {
    aliases: { id: ["dua puluh delapan"], en: ["twenty-eight"], zh: ["二十八"] },
    translation: { ngoko: "wolulikur", krama: "wolulikur", "krama-inggil": "wolulikur" },
  },
  {
    aliases: { id: ["dua puluh dua"], en: ["twenty-two"], zh: ["二十二"] },
    translation: { ngoko: "rolikur", krama: "kalih likur", "krama-inggil": "kalih likur" },
  },
  {
    aliases: { id: ["dua puluh empat"], en: ["twenty-four"], zh: ["二十四"] },
    translation: { ngoko: "patlikur", krama: "sekawan likur", "krama-inggil": "sekawan likur" },
  },
  {
    aliases: { id: ["dua puluh enam"], en: ["twenty-six"], zh: ["二十六"] },
    translation: { ngoko: "nemlikur", krama: "nemlikur", "krama-inggil": "nemlikur" },
  },
  {
    aliases: { id: ["dua puluh lima"], en: ["twenty-five"], zh: ["二十五"] },
    translation: { ngoko: "selawe", krama: "selangkung", "krama-inggil": "selangkung" },
  },
  {
    aliases: { id: ["dua puluh satu"], en: ["twenty-one"], zh: ["二十一"] },
    translation: { ngoko: "selikur", krama: "selikur", "krama-inggil": "selikur" },
  },
  {
    aliases: { id: ["dua puluh sembilan"], en: ["twenty-nine"], zh: ["二十九"] },
    translation: { ngoko: "sangalikur", krama: "sangalikur", "krama-inggil": "sangalikur" },
  },
  {
    aliases: { id: ["dua puluh tiga"], en: ["twenty-three"], zh: ["二十三"] },
    translation: { ngoko: "telulikur", krama: "tigang likur", "krama-inggil": "tigang likur" },
  },
  {
    aliases: { id: ["dua puluh tujuh"], en: ["twenty-seven"], zh: ["二十七"] },
    translation: { ngoko: "pitulikur", krama: "pitulikur", "krama-inggil": "pitulikur" },
  },
  {
    aliases: { id: ["dua ratus"], en: ["two hundred"], zh: ["二百"] },
    translation: { ngoko: "rong atus", krama: "kalih atus", "krama-inggil": "kalih atus" },
  },
  {
    aliases: { id: ["dua ribu"], en: ["two thousand"], zh: ["二千"] },
    translation: { ngoko: "rong ewu", krama: "kalih ewu", "krama-inggil": "kalih ewu" },
  },
  {
    aliases: { id: ["duda"], en: ["widower","divorced man"], zh: ["鳏夫；离异男子"] },
    translation: { ngoko: "dhudha", krama: "dhudha", "krama-inggil": "dhudha" },
  },
  {
    aliases: { id: ["duduk"], en: ["sit"], zh: ["坐"] },
    translation: { ngoko: "lungguh", krama: "lenggah", "krama-inggil": "lenggah" },
  },
  {
    aliases: { id: ["duduk dahulu"], en: ["sit down for a while"], zh: ["先坐一会儿"] },
    translation: { ngoko: "lungguh dhisik", krama: "lenggah rumiyin", "krama-inggil": "lenggah rumiyin" },
  },
  {
    aliases: { id: ["dudukkan"], en: ["seat someone"], zh: ["扶坐"] },
    translation: { ngoko: "nglungguhake", krama: "nglenggahaken", "krama-inggil": "nglenggahaken" },
  },
  {
    aliases: { id: ["duga"], en: ["suppose"], zh: ["推测"] },
    translation: { ngoko: "ngira", krama: "nginten", "krama-inggil": "nginten" },
  },
  {
    aliases: { id: ["duku"], en: ["langsat"], zh: ["兰撒果"] },
    translation: { ngoko: "duku", krama: "duku", "krama-inggil": "duku" },
  },
  {
    aliases: { id: ["dukung"], en: ["support"], zh: ["支持"] },
    translation: { ngoko: "nyengkuyung", krama: "nyengkuyung", "krama-inggil": "nyengkuyung" },
  },
  {
    aliases: { id: ["dunia"], en: ["world"], zh: ["世界"] },
    translation: { ngoko: "donya", krama: "donya", "krama-inggil": "donya" },
  },
  {
    aliases: { id: ["dupa"], en: ["incense"], zh: ["香"] },
    translation: { ngoko: "dupa", krama: "dupa", "krama-inggil": "dupa" },
  },
  {
    aliases: { id: ["durasi"], en: ["duration"], zh: ["时长"] },
    translation: { ngoko: "dawane wektu", krama: "dangu wektu", "krama-inggil": "dangu wektu" },
  },
  {
    aliases: { id: ["durhaka"], en: ["disobedient","treacherous"], zh: ["忤逆；背叛"] },
    translation: { ngoko: "duraka", krama: "duraka", "krama-inggil": "duraka" },
  },
  {
    aliases: { id: ["duri"], en: ["thorn"], zh: ["刺"] },
    translation: { ngoko: "eri", krama: "eri", "krama-inggil": "eri" },
  },
  {
    aliases: { id: ["durian"], en: ["durian"], zh: ["榴莲"] },
    translation: { ngoko: "duren", krama: "duren", "krama-inggil": "duren" },
  },
  {
    aliases: { id: ["durma"], en: ["durma poetic meter"], zh: ["杜尔马诗律"] },
    translation: { ngoko: "durma", krama: "durma", "krama-inggil": "durma" },
  },
  {
    aliases: { id: ["dusta"], en: ["lie","falsehood"], zh: ["谎言"] },
    translation: { ngoko: "goroh", krama: "dusta", "krama-inggil": "dusta" },
  },
  {
    aliases: { id: ["dustakan"], en: ["deceive","lie to"], zh: ["欺骗"] },
    translation: { ngoko: "ngapusi", krama: "ngapusi", "krama-inggil": "ngapusi" },
  },
  {
    aliases: { id: ["dusun"], en: ["hamlet"], zh: ["小村落"] },
    translation: { ngoko: "dhukuh", krama: "dhukuh", "krama-inggil": "dhukuh" },
  },
  {
    aliases: { id: ["DVD"], en: ["DVD"], zh: ["数字多功能光盘"] },
    translation: { ngoko: "DVD", krama: "DVD", "krama-inggil": "DVD" },
  },
  {
    aliases: { id: ["earphone"], en: ["earphones"], zh: ["耳塞式耳机"] },
    translation: { ngoko: "earphone", krama: "earphone", "krama-inggil": "earphone" },
  },
  {
    aliases: { id: ["ecer"], en: ["sell by the piece"], zh: ["零售"] },
    translation: { ngoko: "ngecer", krama: "ngecer", "krama-inggil": "ngecer" },
  },
  {
    aliases: { id: ["editor"], en: ["editor"], zh: ["编辑"] },
    translation: { ngoko: "éditor", krama: "éditor", "krama-inggil": "éditor" },
  },
  {
    aliases: { id: ["egois"], en: ["selfish"], zh: ["自私"] },
    translation: { ngoko: "egois", krama: "egois", "krama-inggil": "egois" },
  },
  {
    aliases: { id: ["egrang"], en: ["stilts"], zh: ["高跷"] },
    translation: { ngoko: "egrang", krama: "egrang", "krama-inggil": "egrang" },
  },
  {
    aliases: { id: ["eja"], en: ["spell"], zh: ["拼读"] },
    translation: { ngoko: "ngeja", krama: "ngeja", "krama-inggil": "ngeja" },
  },
  {
    aliases: { id: ["ejek"], en: ["mock"], zh: ["嘲笑"] },
    translation: { ngoko: "ngece", krama: "ngece", "krama-inggil": "ngece" },
  },
  {
    aliases: { id: ["ekonomi"], en: ["economy","economics"], zh: ["经济"] },
    translation: { ngoko: "ekonomi", krama: "ekonomi", "krama-inggil": "ekonomi" },
  },
  {
    aliases: { id: ["ekonomis"], en: ["economical"], zh: ["节约的；经济的"] },
    translation: { ngoko: "irit", krama: "irit", "krama-inggil": "irit" },
  },
  {
    aliases: { id: ["ekor"], en: ["tail"], zh: ["尾巴"] },
    translation: { ngoko: "buntut", krama: "buntut", "krama-inggil": "buntut" },
  },
  {
    aliases: { id: ["ekosistem"], en: ["ecosystem"], zh: ["生态系统"] },
    translation: { ngoko: "ekosistem", krama: "ekosistem", "krama-inggil": "ekosistem" },
  },
  {
    aliases: { id: ["eksekusi"], en: ["execution","implementation"], zh: ["执行；实施"] },
    translation: { ngoko: "eksekusi", krama: "eksekusi", "krama-inggil": "eksekusi" },
  },
  {
    aliases: { id: ["eksekutif"], en: ["executive"], zh: ["行政人员；高管"] },
    translation: { ngoko: "eksekutif", krama: "eksekutif", "krama-inggil": "eksekutif" },
  },
  {
    aliases: { id: ["eksis"], en: ["exist","be present"], zh: ["存在"] },
    translation: { ngoko: "ana", krama: "wonten", "krama-inggil": "wonten" },
  },
  {
    aliases: { id: ["eksperimen"], en: ["experiment"], zh: ["实验"] },
    translation: { ngoko: "pacoban", krama: "pacoban", "krama-inggil": "pacoban" },
  },
  {
    aliases: { id: ["eksperimenkan"], en: ["experiment with"], zh: ["试验"] },
    translation: { ngoko: "nyoba", krama: "nyobi", "krama-inggil": "nyobi" },
  },
  {
    aliases: { id: ["ekspor"], en: ["export"], zh: ["出口"] },
    translation: { ngoko: "ngekspor", krama: "ngekspor", "krama-inggil": "ngekspor" },
  },
  {
    aliases: { id: ["ekspresi"], en: ["expression"], zh: ["表达；表情"] },
    translation: { ngoko: "ekspresi", krama: "ekspresi", "krama-inggil": "ekspresi" },
  },
  {
    aliases: { id: ["ekspresif"], en: ["expressive"], zh: ["富有表现力的"] },
    translation: { ngoko: "ekspresif", krama: "ekspresif", "krama-inggil": "ekspresif" },
  },
  {
    aliases: { id: ["ekstra"], en: ["extra","additional"], zh: ["额外的"] },
    translation: { ngoko: "tambahan", krama: "tambahan", "krama-inggil": "tambahan" },
  },
  {
    aliases: { id: ["ekstrem"], en: ["extreme"], zh: ["极端的"] },
    translation: { ngoko: "banget", krama: "sanget", "krama-inggil": "sanget" },
  },
  {
    aliases: { id: ["elang"], en: ["eagle"], zh: ["鹰"] },
    translation: { ngoko: "elang", krama: "elang", "krama-inggil": "elang" },
  },
  {
    aliases: { id: ["elastis"], en: ["stretchable"], zh: ["可伸展的"] },
    translation: { ngoko: "mulur", krama: "mulur", "krama-inggil": "mulur" },
  },
  {
    aliases: { id: ["elektrik"], en: ["electric"], zh: ["电的"] },
    translation: { ngoko: "listrik", krama: "listrik", "krama-inggil": "listrik" },
  },
  {
    aliases: { id: ["elektronik"], en: ["electronic"], zh: ["电子的"] },
    translation: { ngoko: "elektronik", krama: "elektronik", "krama-inggil": "elektronik" },
  },
  {
    aliases: { id: ["elus"], en: ["stroke gently"], zh: ["抚摸"] },
    translation: { ngoko: "ngelus", krama: "ngelus", "krama-inggil": "ngelus" },
  },
  {
    aliases: { id: ["emas"], en: ["gold"], zh: ["黄金"] },
    translation: { ngoko: "emas", krama: "emas", "krama-inggil": "emas" },
  },
  {
    aliases: { id: ["ember"], en: ["bucket"], zh: ["桶"] },
    translation: { ngoko: "ember", krama: "ember", "krama-inggil": "ember" },
  },
  {
    aliases: { id: ["embun"], en: ["dew"], zh: ["露水"] },
    translation: { ngoko: "embun", krama: "embun", "krama-inggil": "embun" },
  },
  {
    aliases: { id: ["empat"], en: ["four"], zh: ["四"] },
    translation: { ngoko: "papat", krama: "sekawan", "krama-inggil": "sekawan" },
  },
  {
    aliases: { id: ["empat belas"], en: ["fourteen"], zh: ["十四"] },
    translation: { ngoko: "patbelas", krama: "sekawan welas", "krama-inggil": "sekawan welas" },
  },
  {
    aliases: { id: ["empat puluh"], en: ["forty"], zh: ["四十"] },
    translation: { ngoko: "patang puluh", krama: "sekawan dasa", "krama-inggil": "sekawan dasa" },
  },
  {
    aliases: { id: ["empat puluh delapan"], en: ["forty-eight"], zh: ["四十八"] },
    translation: { ngoko: "patang puluh wolu", krama: "sekawan dasa wolu", "krama-inggil": "sekawan dasa wolu" },
  },
  {
    aliases: { id: ["empat puluh dua"], en: ["forty-two"], zh: ["四十二"] },
    translation: { ngoko: "patang puluh loro", krama: "sekawan dasa kalih", "krama-inggil": "sekawan dasa kalih" },
  },
  {
    aliases: { id: ["empat puluh empat"], en: ["forty-four"], zh: ["四十四"] },
    translation: { ngoko: "patang puluh papat", krama: "sekawan dasa sekawan", "krama-inggil": "sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["empat puluh enam"], en: ["forty-six"], zh: ["四十六"] },
    translation: { ngoko: "patang puluh enem", krama: "sekawan dasa enem", "krama-inggil": "sekawan dasa enem" },
  },
  {
    aliases: { id: ["empat puluh lima"], en: ["forty-five"], zh: ["四十五"] },
    translation: { ngoko: "patang puluh lima", krama: "sekawan dasa gangsal", "krama-inggil": "sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["empat puluh satu"], en: ["forty-one"], zh: ["四十一"] },
    translation: { ngoko: "patang puluh siji", krama: "sekawan dasa setunggal", "krama-inggil": "sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["empat puluh sembilan"], en: ["forty-nine"], zh: ["四十九"] },
    translation: { ngoko: "patang puluh sanga", krama: "sekawan dasa sanga", "krama-inggil": "sekawan dasa sanga" },
  },
  {
    aliases: { id: ["empat puluh tiga"], en: ["forty-three"], zh: ["四十三"] },
    translation: { ngoko: "patang puluh telu", krama: "sekawan dasa tiga", "krama-inggil": "sekawan dasa tiga" },
  },
  {
    aliases: { id: ["empat puluh tujuh"], en: ["forty-seven"], zh: ["四十七"] },
    translation: { ngoko: "patang puluh pitu", krama: "sekawan dasa pitu", "krama-inggil": "sekawan dasa pitu" },
  },
  {
    aliases: { id: ["empati"], en: ["empathy"], zh: ["共情"] },
    translation: { ngoko: "empati", krama: "empati", "krama-inggil": "empati" },
  },
  {
    aliases: { id: ["empedu"], en: ["gallbladder"], zh: ["胆囊"] },
    translation: { ngoko: "rempelo", krama: "rempelo", "krama-inggil": "rempelo" },
  },
  {
    aliases: { id: ["emping"], en: ["melinjo nut crackers"], zh: ["买麻藤籽薄脆"] },
    translation: { ngoko: "emping", krama: "emping", "krama-inggil": "emping" },
  },
  {
    aliases: { id: ["empit"], en: ["hold under the arm"], zh: ["夹在腋下"] },
    translation: { ngoko: "ngepit", krama: "ngepit", "krama-inggil": "ngepit" },
  },
  {
    aliases: { id: ["empuk"], en: ["soft","tender"], zh: ["柔软；嫩"] },
    translation: { ngoko: "empuk", krama: "empuk", "krama-inggil": "empuk" },
  },
  {
    aliases: { id: ["enak"], en: ["delicious","comfortable"], zh: ["好吃；舒服"] },
    translation: { ngoko: "enak", krama: "eca", "krama-inggil": "eca" },
  },
  {
    aliases: { id: ["enam"], en: ["six"], zh: ["六"] },
    translation: { ngoko: "enem", krama: "enem", "krama-inggil": "enem" },
  },
  {
    aliases: { id: ["enam belas"], en: ["sixteen"], zh: ["十六"] },
    translation: { ngoko: "nembelas", krama: "nembelas", "krama-inggil": "nembelas" },
  },
  {
    aliases: { id: ["enam puluh"], en: ["sixty"], zh: ["六十"] },
    translation: { ngoko: "sewidak", krama: "sewidak", "krama-inggil": "sewidak" },
  },
  {
    aliases: { id: ["enam puluh delapan"], en: ["sixty-eight"], zh: ["六十八"] },
    translation: { ngoko: "sewidak wolu", krama: "sewidak wolu", "krama-inggil": "sewidak wolu" },
  },
  {
    aliases: { id: ["enam puluh dua"], en: ["sixty-two"], zh: ["六十二"] },
    translation: { ngoko: "sewidak loro", krama: "sewidak kalih", "krama-inggil": "sewidak kalih" },
  },
  {
    aliases: { id: ["enam puluh empat"], en: ["sixty-four"], zh: ["六十四"] },
    translation: { ngoko: "sewidak papat", krama: "sewidak sekawan", "krama-inggil": "sewidak sekawan" },
  },
  {
    aliases: { id: ["enam puluh enam"], en: ["sixty-six"], zh: ["六十六"] },
    translation: { ngoko: "sewidak enem", krama: "sewidak enem", "krama-inggil": "sewidak enem" },
  },
  {
    aliases: { id: ["enam puluh lima"], en: ["sixty-five"], zh: ["六十五"] },
    translation: { ngoko: "sewidak lima", krama: "sewidak gangsal", "krama-inggil": "sewidak gangsal" },
  },
  {
    aliases: { id: ["enam puluh satu"], en: ["sixty-one"], zh: ["六十一"] },
    translation: { ngoko: "sewidak siji", krama: "sewidak setunggal", "krama-inggil": "sewidak setunggal" },
  },
  {
    aliases: { id: ["enam puluh sembilan"], en: ["sixty-nine"], zh: ["六十九"] },
    translation: { ngoko: "sewidak sanga", krama: "sewidak sanga", "krama-inggil": "sewidak sanga" },
  },
  {
    aliases: { id: ["enam puluh tiga"], en: ["sixty-three"], zh: ["六十三"] },
    translation: { ngoko: "sewidak telu", krama: "sewidak tiga", "krama-inggil": "sewidak tiga" },
  },
  {
    aliases: { id: ["enam puluh tujuh"], en: ["sixty-seven"], zh: ["六十七"] },
    translation: { ngoko: "sewidak pitu", krama: "sewidak pitu", "krama-inggil": "sewidak pitu" },
  },
  {
    aliases: { id: ["encer"], en: ["thin","watery"], zh: ["稀"] },
    translation: { ngoko: "cuwer", krama: "cuwer", "krama-inggil": "cuwer" },
  },
  {
    aliases: { id: ["energi"], en: ["energy"], zh: ["能量"] },
    translation: { ngoko: "energi", krama: "energi", "krama-inggil": "energi" },
  },
  {
    aliases: { id: ["enggan"], en: ["reluctant","unwilling"], zh: ["不愿意"] },
    translation: { ngoko: "emoh", krama: "mboten purun", "krama-inggil": "mboten purun" },
  },
  {
    aliases: { id: ["engkau"], en: ["you (informal)"], zh: ["你"] },
    translation: { ngoko: "kowe", krama: "sliramu", "krama-inggil": "sliramu" },
  },
  {
    aliases: { id: ["engsel"], en: ["hinge"], zh: ["铰链"] },
    translation: { ngoko: "engsel", krama: "engsel", "krama-inggil": "engsel" },
  },
  {
    aliases: { id: ["entah ... entah ..."], en: ["whether ... or ... (uncertain)"], zh: ["不知是……还是……"] },
    translation: { ngoko: "embuh ... embuh ...", krama: "mboten mangertos ... mboten mangertos ...", "krama-inggil": "mboten mangertos ... mboten mangertos ..." },
  },
  {
    aliases: { id: ["enteng"], en: ["lightweight","easy"], zh: ["轻；容易"] },
    translation: { ngoko: "entheng", krama: "entheng", "krama-inggil": "entheng" },
  },
  {
    aliases: { id: ["entok"], en: ["Muscovy duck"], zh: ["番鸭"] },
    translation: { ngoko: "menthok", krama: "menthok", "krama-inggil": "menthok" },
  },
  {
    aliases: { id: ["entri"], en: ["entry","record"], zh: ["条目；记录"] },
    translation: { ngoko: "entri", krama: "entri", "krama-inggil": "entri" },
  },
  {
    aliases: { id: ["era"], en: ["era","age"], zh: ["时代"] },
    translation: { ngoko: "jaman", krama: "jaman", "krama-inggil": "jaman" },
  },
  {
    aliases: { id: ["erat"], en: ["tight","close"], zh: ["紧密"] },
    translation: { ngoko: "kenceng", krama: "raket", "krama-inggil": "raket" },
  },
  {
    aliases: { id: ["erosi"], en: ["erosion"], zh: ["侵蚀"] },
    translation: { ngoko: "erosi", krama: "erosi", "krama-inggil": "erosi" },
  },
  {
    aliases: { id: ["es"], en: ["ice"], zh: ["冰"] },
    translation: { ngoko: "es", krama: "es", "krama-inggil": "es" },
  },
  {
    aliases: { id: ["es batu"], en: ["ice cube"], zh: ["冰块"] },
    translation: { ngoko: "es watu", krama: "es watu", "krama-inggil": "es watu" },
  },
  {
    aliases: { id: ["es jeruk"], en: ["iced orange drink"], zh: ["冰橙汁"] },
    translation: { ngoko: "es jeruk", krama: "es jeruk", "krama-inggil": "es jeruk" },
  },
  {
    aliases: { id: ["es teh"], en: ["iced tea"], zh: ["冰茶"] },
    translation: { ngoko: "es teh", krama: "es teh", "krama-inggil": "es teh" },
  },
  {
    aliases: { id: ["esai"], en: ["essay"], zh: ["散文；短论"] },
    translation: { ngoko: "esai", krama: "esai", "krama-inggil": "esai" },
  },
  {
    aliases: { id: ["eskalator"], en: ["escalator"], zh: ["自动扶梯"] },
    translation: { ngoko: "eskalator", krama: "eskalator", "krama-inggil": "eskalator" },
  },
  {
    aliases: { id: ["esok"], en: ["tomorrow"], zh: ["明天"] },
    translation: { ngoko: "sesuk", krama: "benjing", "krama-inggil": "benjing" },
  },
  {
    aliases: { id: ["estafet"], en: ["relay"], zh: ["接力"] },
    translation: { ngoko: "estafet", krama: "estafet", "krama-inggil": "estafet" },
  },
  {
    aliases: { id: ["evaluasi"], en: ["evaluation"], zh: ["评估"] },
    translation: { ngoko: "evaluasi", krama: "evaluasi", "krama-inggil": "evaluasi" },
  },
  {
    aliases: { id: ["evaluasi ulang"], en: ["re-evaluation"], zh: ["重新评估"] },
    translation: { ngoko: "evaluasi maneh", krama: "evaluasi malih", "krama-inggil": "evaluasi malih" },
  },
  {
    aliases: { id: ["evolusi"], en: ["evolution"], zh: ["进化"] },
    translation: { ngoko: "évolusi", krama: "évolusi", "krama-inggil": "évolusi" },
  },
  {
    aliases: { id: ["fajar"], en: ["dawn"], zh: ["黎明"] },
    translation: { ngoko: "esuk", krama: "enjing", "krama-inggil": "enjing" },
  },
  {
    aliases: { id: ["fakta"], en: ["fact"], zh: ["事实"] },
    translation: { ngoko: "kasunyatan", krama: "kasunyatan", "krama-inggil": "kasunyatan" },
  },
  {
    aliases: { id: ["faktor"], en: ["factor"], zh: ["因素"] },
    translation: { ngoko: "faktor", krama: "faktor", "krama-inggil": "faktor" },
  },
  {
    aliases: { id: ["fakultas"], en: ["faculty"], zh: ["学院"] },
    translation: { ngoko: "fakultas", krama: "fakultas", "krama-inggil": "fakultas" },
  },
  {
    aliases: { id: ["fantasi"], en: ["fantasy"], zh: ["幻想"] },
    translation: { ngoko: "imajinasi", krama: "imajinasi", "krama-inggil": "imajinasi" },
  },
  {
    aliases: { id: ["farmasi"], en: ["pharmacy"], zh: ["药学"] },
    translation: { ngoko: "farmasi", krama: "farmasi", "krama-inggil": "farmasi" },
  },
  {
    aliases: { id: ["fase"], en: ["phase","stage"], zh: ["阶段"] },
    translation: { ngoko: "tahap", krama: "tahap", "krama-inggil": "tahap" },
  },
  {
    aliases: { id: ["favorit"], en: ["favorite"], zh: ["最喜欢的"] },
    translation: { ngoko: "kesayangan", krama: "kesayangan", "krama-inggil": "kesayangan" },
  },
  {
    aliases: { id: ["februari"], en: ["February"], zh: ["二月"] },
    translation: { ngoko: "Februari", krama: "Februari", "krama-inggil": "Februari" },
  },
  {
    aliases: { id: ["federal"], en: ["federal"], zh: ["联邦的"] },
    translation: { ngoko: "federal", krama: "federal", "krama-inggil": "federal" },
  },
  {
    aliases: { id: ["feri"], en: ["ferry"], zh: ["渡轮"] },
    translation: { ngoko: "kapal feri", krama: "kapal feri", "krama-inggil": "kapal feri" },
  },
  {
    aliases: { id: ["festival"], en: ["festival"], zh: ["节日；庆典"] },
    translation: { ngoko: "festival", krama: "festival", "krama-inggil": "festival" },
  },
  {
    aliases: { id: ["fiksi"], en: ["fiction"], zh: ["虚构作品"] },
    translation: { ngoko: "fiksi", krama: "fiksi", "krama-inggil": "fiksi" },
  },
  {
    aliases: { id: ["film"], en: ["film","movie"], zh: ["电影"] },
    translation: { ngoko: "film", krama: "film", "krama-inggil": "film" },
  },
  {
    aliases: { id: ["filosofi"], en: ["philosophy"], zh: ["哲学"] },
    translation: { ngoko: "filsafat", krama: "filsafat", "krama-inggil": "filsafat" },
  },
  {
    aliases: { id: ["filter"], en: ["filter"], zh: ["过滤器"] },
    translation: { ngoko: "saringan", krama: "saringan", "krama-inggil": "saringan" },
  },
  {
    aliases: { id: ["finansial"], en: ["financial"], zh: ["财务的"] },
    translation: { ngoko: "babagan dhuwit", krama: "babagan arta", "krama-inggil": "babagan arta" },
  },
  {
    aliases: { id: ["fisik"], en: ["physical"], zh: ["身体的；物理的"] },
    translation: { ngoko: "jasmani", krama: "jasmani", "krama-inggil": "jasmani" },
  },
  {
    aliases: { id: ["fisika"], en: ["physics"], zh: ["物理学"] },
    translation: { ngoko: "fisika", krama: "fisika", "krama-inggil": "fisika" },
  },
  {
    aliases: { id: ["fisioterapis"], en: ["physiotherapist"], zh: ["物理治疗师"] },
    translation: { ngoko: "fisioterapis", krama: "fisioterapis", "krama-inggil": "fisioterapis" },
  },
  {
    aliases: { id: ["fitnah"], en: ["slander"], zh: ["诽谤"] },
    translation: { ngoko: "mitnah", krama: "mitnah", "krama-inggil": "mitnah" },
  },
  {
    aliases: { id: ["fitur"], en: ["feature"], zh: ["功能；特征"] },
    translation: { ngoko: "fitur", krama: "fitur", "krama-inggil": "fitur" },
  },
  {
    aliases: { id: ["fleksibel"], en: ["flexible"], zh: ["灵活的"] },
    translation: { ngoko: "lentur", krama: "lentur", "krama-inggil": "lentur" },
  },
  {
    aliases: { id: ["flu"], en: ["influenza"], zh: ["流感"] },
    translation: { ngoko: "flu", krama: "flu", "krama-inggil": "flu" },
  },
  {
    aliases: { id: ["fokus"], en: ["focus"], zh: ["焦点；专注"] },
    translation: { ngoko: "fokus", krama: "fokus", "krama-inggil": "fokus" },
  },
  {
    aliases: { id: ["fokuskan"], en: ["focus (something)"], zh: ["聚焦"] },
    translation: { ngoko: "fokusna", krama: "fokusaken", "krama-inggil": "fokusaken" },
  },
  {
    aliases: { id: ["folder"], en: ["folder"], zh: ["文件夹"] },
    translation: { ngoko: "folder", krama: "folder", "krama-inggil": "folder" },
  },
  {
    aliases: { id: ["formal"], en: ["formal","official"], zh: ["正式的"] },
    translation: { ngoko: "resmi", krama: "resmi", "krama-inggil": "resmi" },
  },
  {
    aliases: { id: ["format"], en: ["format"], zh: ["格式"] },
    translation: { ngoko: "format", krama: "format", "krama-inggil": "format" },
  },
  {
    aliases: { id: ["formulir"], en: ["form"], zh: ["表格"] },
    translation: { ngoko: "formulir", krama: "formulir", "krama-inggil": "formulir" },
  },
  {
    aliases: { id: ["forum"], en: ["forum"], zh: ["论坛"] },
    translation: { ngoko: "forum", krama: "forum", "krama-inggil": "forum" },
  },
  {
    aliases: { id: ["foto"], en: ["photo"], zh: ["照片"] },
    translation: { ngoko: "foto", krama: "foto", "krama-inggil": "foto" },
  },
  {
    aliases: { id: ["fotografer"], en: ["photographer"], zh: ["摄影师"] },
    translation: { ngoko: "tukang foto", krama: "juru foto", "krama-inggil": "juru foto" },
  },
  {
    aliases: { id: ["fotografi"], en: ["photography"], zh: ["摄影"] },
    translation: { ngoko: "fotografi", krama: "fotografi", "krama-inggil": "fotografi" },
  },
  {
    aliases: { id: ["fotokopi"], en: ["photocopy"], zh: ["复印"] },
    translation: { ngoko: "fotokopi", krama: "fotokopi", "krama-inggil": "fotokopi" },
  },
  {
    aliases: { id: ["frekuensi"], en: ["frequency"], zh: ["频率"] },
    translation: { ngoko: "frekuensi", krama: "frekuensi", "krama-inggil": "frekuensi" },
  },
  {
    aliases: { id: ["frustrasi"], en: ["frustrated","frustration"], zh: ["沮丧；挫折感"] },
    translation: { ngoko: "kuciwa", krama: "kuciwa", "krama-inggil": "kuciwa" },
  },
  {
    aliases: { id: ["fuksia"], en: ["fuchsia"], zh: ["紫红色"] },
    translation: { ngoko: "fuksia", krama: "fuksia", "krama-inggil": "fuksia" },
  },
  {
    aliases: { id: ["fundamental"], en: ["fundamental"], zh: ["基础的；根本的"] },
    translation: { ngoko: "dhasar", krama: "dhasar", "krama-inggil": "dhasar" },
  },
  {
    aliases: { id: ["fungsi"], en: ["function","use"], zh: ["功能；用途"] },
    translation: { ngoko: "guna", krama: "guna", "krama-inggil": "guna" },
  },
  {
    aliases: { id: ["fungsional"], en: ["functional"], zh: ["功能性的"] },
    translation: { ngoko: "fungsional", krama: "fungsional", "krama-inggil": "fungsional" },
  },
  {
    aliases: { id: ["futsal"], en: ["futsal"], zh: ["五人制足球"] },
    translation: { ngoko: "futsal", krama: "futsal", "krama-inggil": "futsal" },
  },
  {
    aliases: { id: ["gabah"], en: ["unhusked rice"], zh: ["稻谷"] },
    translation: { ngoko: "gabah", krama: "gabah", "krama-inggil": "gabah" },
  },
  {
    aliases: { id: ["gado-gado"], en: ["Indonesian mixed salad with peanut sauce"], zh: ["印尼花生酱杂拌沙拉"] },
    translation: { ngoko: "gado-gado", krama: "gado-gado", "krama-inggil": "gado-gado" },
  },
  {
    aliases: { id: ["gagah"], en: ["brave","handsome"], zh: ["英勇；英俊"] },
    translation: { ngoko: "gagah", krama: "gagah", "krama-inggil": "gagah" },
  },
  {
    aliases: { id: ["gagak"], en: ["crow"], zh: ["乌鸦"] },
    translation: { ngoko: "gagak", krama: "gagak", "krama-inggil": "gagak" },
  },
  {
    aliases: { id: ["gagang"], en: ["handle"], zh: ["把手"] },
    translation: { ngoko: "gagang", krama: "gagang", "krama-inggil": "gagang" },
  },
  {
    aliases: { id: ["gagasan"], en: ["idea","concept"], zh: ["想法；概念"] },
    translation: { ngoko: "gagasan", krama: "gagasan", "krama-inggil": "gagasan" },
  },
  {
    aliases: { id: ["gajah"], en: ["elephant"], zh: ["大象"] },
    translation: { ngoko: "gajah", krama: "liman", "krama-inggil": "liman" },
  },
  {
    aliases: { id: ["gaji"], en: ["salary"], zh: ["工资"] },
    translation: { ngoko: "bayaran", krama: "bayaran", "krama-inggil": "bayaran" },
  },
  {
    aliases: { id: ["gajian"], en: ["payday"], zh: ["发薪日"] },
    translation: { ngoko: "dina gajian", krama: "dinten nampi gaji", "krama-inggil": "dinten nampi gaji" },
  },
  {
    aliases: { id: ["galak"], en: ["fierce","aggressive"], zh: ["凶猛；凶狠"] },
    translation: { ngoko: "galak", krama: "galak", "krama-inggil": "galak" },
  },
  {
    aliases: { id: ["galeri"], en: ["gallery"], zh: ["画廊；展厅"] },
    translation: { ngoko: "galeri", krama: "galeri", "krama-inggil": "galeri" },
  },
  {
    aliases: { id: ["gali"], en: ["dig"], zh: ["挖"] },
    translation: { ngoko: "ndhudhuk", krama: "ndhudhuk", "krama-inggil": "ndhudhuk" },
  },
  {
    aliases: { id: ["gambang"], en: ["wooden xylophone"], zh: ["木琴"] },
    translation: { ngoko: "gambang", krama: "gambang", "krama-inggil": "gambang" },
  },
  {
    aliases: { id: ["gambar"], en: ["picture","image"], zh: ["图画；图像"] },
    translation: { ngoko: "gambar", krama: "gambar", "krama-inggil": "gambar" },
  },
  {
    aliases: { id: ["gambaran"], en: ["description","illustration"], zh: ["描述；概况"] },
    translation: { ngoko: "gambaran", krama: "gambaran", "krama-inggil": "gambaran" },
  },
  {
    aliases: { id: ["gambuh"], en: ["gambuh poetic meter"], zh: ["甘布诗律"] },
    translation: { ngoko: "gambuh", krama: "gambuh", "krama-inggil": "gambuh" },
  },
  {
    aliases: { id: ["gamelan"], en: ["gamelan ensemble"], zh: ["甘美兰乐队"] },
    translation: { ngoko: "gamelan", krama: "gangsa", "krama-inggil": "gangsa" },
  },
  {
    aliases: { id: ["gampang"], en: ["easy"], zh: ["容易"] },
    translation: { ngoko: "gampang", krama: "gampil", "krama-inggil": "gampil" },
  },
  {
    aliases: { id: ["gang"], en: ["alley"], zh: ["小巷"] },
    translation: { ngoko: "gang", krama: "gang", "krama-inggil": "gang" },
  },
  {
    aliases: { id: ["gangguan"], en: ["disturbance","disruption"], zh: ["干扰；故障"] },
    translation: { ngoko: "gangguan", krama: "gangguan", "krama-inggil": "gangguan" },
  },
  {
    aliases: { id: ["ganjil"], en: ["odd","strange"], zh: ["奇数；奇怪"] },
    translation: { ngoko: "ganjil", krama: "ganjil", "krama-inggil": "ganjil" },
  },
  {
    aliases: { id: ["ganti"], en: ["replace","change"], zh: ["更换"] },
    translation: { ngoko: "ganti", krama: "gantos", "krama-inggil": "gantos" },
  },
  {
    aliases: { id: ["gantian"], en: ["in turn","replacement"], zh: ["轮流；替换"] },
    translation: { ngoko: "gantian", krama: "gentosan", "krama-inggil": "gentosan" },
  },
  {
    aliases: { id: ["gantung"], en: ["hang"], zh: ["悬挂"] },
    translation: { ngoko: "nggantung", krama: "nggantung", "krama-inggil": "nggantung" },
  },
  {
    aliases: { id: ["gantungan"], en: ["hanging hook"], zh: ["挂钩"] },
    translation: { ngoko: "canthelan", krama: "canthelan", "krama-inggil": "canthelan" },
  },
  {
    aliases: { id: ["gapura"], en: ["gateway"], zh: ["门楼"] },
    translation: { ngoko: "gapura", krama: "gapura", "krama-inggil": "gapura" },
  },
  {
    aliases: { id: ["garam"], en: ["salt"], zh: ["盐"] },
    translation: { ngoko: "uyah", krama: "uyah", "krama-inggil": "uyah" },
  },
  {
    aliases: { id: ["garasi"], en: ["garage"], zh: ["车库"] },
    translation: { ngoko: "garasi", krama: "garasi", "krama-inggil": "garasi" },
  },
  {
    aliases: { id: ["garis"], en: ["line"], zh: ["线；线条"] },
    translation: { ngoko: "garis", krama: "garis", "krama-inggil": "garis" },
  },
  {
    aliases: { id: ["garis bawah"], en: ["underline"], zh: ["下划线"] },
    translation: { ngoko: "garis ngisor", krama: "garis ngandhap", "krama-inggil": "garis ngandhap" },
  },
  {
    aliases: { id: ["garis depan"], en: ["front line"], zh: ["前线"] },
    translation: { ngoko: "garis ngarep", krama: "garis ngajeng", "krama-inggil": "garis ngajeng" },
  },
  {
    aliases: { id: ["garis finis"], en: ["finish line"], zh: ["终点线"] },
    translation: { ngoko: "garis finis", krama: "garis finis", "krama-inggil": "garis finis" },
  },
  {
    aliases: { id: ["garis miring"], en: ["slash","diagonal line"], zh: ["斜线"] },
    translation: { ngoko: "garis miring", krama: "garis miring", "krama-inggil": "garis miring" },
  },
  {
    aliases: { id: ["garis mulai"], en: ["starting line"], zh: ["起跑线"] },
    translation: { ngoko: "garis start", krama: "garis start", "krama-inggil": "garis start" },
  },
  {
    aliases: { id: ["garis tengah"], en: ["center line"], zh: ["中线"] },
    translation: { ngoko: "garis tengah", krama: "garis tengah", "krama-inggil": "garis tengah" },
  },
  {
    aliases: { id: ["garpu"], en: ["fork"], zh: ["叉子"] },
    translation: { ngoko: "garpu", krama: "garpu", "krama-inggil": "garpu" },
  },
  {
    aliases: { id: ["garu"], en: ["harrow"], zh: ["耙"] },
    translation: { ngoko: "garu", krama: "garu", "krama-inggil": "garu" },
  },
  {
    aliases: { id: ["garuk"], en: ["scratch an itch"], zh: ["挠痒"] },
    translation: { ngoko: "nggaruk", krama: "nggaruk", "krama-inggil": "nggaruk" },
  },
  {
    aliases: { id: ["gas"], en: ["gas"], zh: ["气体；燃气"] },
    translation: { ngoko: "gas", krama: "gas", "krama-inggil": "gas" },
  },
  {
    aliases: { id: ["gasing"], en: ["spinning top"], zh: ["陀螺"] },
    translation: { ngoko: "gangsing", krama: "gangsing", "krama-inggil": "gangsing" },
  },
  {
    aliases: { id: ["gatal"], en: ["itchy"], zh: ["痒"] },
    translation: { ngoko: "gatel", krama: "gatel", "krama-inggil": "gatel" },
  },
  {
    aliases: { id: ["gaun"], en: ["dress"], zh: ["连衣裙"] },
    translation: { ngoko: "gaun", krama: "gaun", "krama-inggil": "gaun" },
  },
  {
    aliases: { id: ["gawang"], en: ["goal"], zh: ["球门"] },
    translation: { ngoko: "gawang", krama: "gawang", "krama-inggil": "gawang" },
  },
  {
    aliases: { id: ["gayung"], en: ["water dipper"], zh: ["水瓢"] },
    translation: { ngoko: "siwur", krama: "siwur", "krama-inggil": "siwur" },
  },
  {
    aliases: { id: ["gedung"], en: ["building"], zh: ["大楼"] },
    translation: { ngoko: "gedhong", krama: "gedhong", "krama-inggil": "gedhong" },
  },
  {
    aliases: { id: ["gelang"], en: ["bracelet"], zh: ["手镯"] },
    translation: { ngoko: "gelang", krama: "gelang", "krama-inggil": "gelang" },
  },
  {
    aliases: { id: ["gelanggang"], en: ["arena"], zh: ["竞技场"] },
    translation: { ngoko: "gelanggang", krama: "gelanggang", "krama-inggil": "gelanggang" },
  },
  {
    aliases: { id: ["gelap"], en: ["dark"], zh: ["黑暗"] },
    translation: { ngoko: "peteng", krama: "peteng", "krama-inggil": "peteng" },
  },
  {
    aliases: { id: ["gelas"], en: ["glass","drinking glass"], zh: ["玻璃杯"] },
    translation: { ngoko: "gelas", krama: "gelas", "krama-inggil": "gelas" },
  },
  {
    aliases: { id: ["geleng"], en: ["shake one's head"], zh: ["摇头"] },
    translation: { ngoko: "gedheg", krama: "gedheg", "krama-inggil": "gedheg" },
  },
  {
    aliases: { id: ["geliat"], en: ["stretch after resting"], zh: ["伸懒腰"] },
    translation: { ngoko: "mulet", krama: "mulet", "krama-inggil": "mulet" },
  },
  {
    aliases: { id: ["gelisah"], en: ["uneasy","anxious"], zh: ["不安"] },
    translation: { ngoko: "sumelang", krama: "sumelang", "krama-inggil": "sumelang" },
  },
  {
    aliases: { id: ["gelombang"], en: ["wave"], zh: ["波浪"] },
    translation: { ngoko: "ombak", krama: "ombak", "krama-inggil": "ombak" },
  },
  {
    aliases: { id: ["gelombang laut"], en: ["sea wave"], zh: ["海浪"] },
    translation: { ngoko: "ombak segara", krama: "ombak seganten", "krama-inggil": "ombak seganten" },
  },
  {
    aliases: { id: ["gelombang suara"], en: ["sound wave"], zh: ["声波"] },
    translation: { ngoko: "ombak swara", krama: "ombak swanten", "krama-inggil": "ombak swanten" },
  },
  {
    aliases: { id: ["gemar"], en: ["fond of","enjoy"], zh: ["爱好；喜欢"] },
    translation: { ngoko: "seneng", krama: "remen", "krama-inggil": "remen" },
  },
  {
    aliases: { id: ["gembira"], en: ["joyful"], zh: ["喜悦"] },
    translation: { ngoko: "bungah", krama: "bingah", "krama-inggil": "bingah" },
  },
  {
    aliases: { id: ["gembok"], en: ["padlock"], zh: ["挂锁"] },
    translation: { ngoko: "gembok", krama: "gembok", "krama-inggil": "gembok" },
  },
  {
    aliases: { id: ["gemetar"], en: ["tremble","shake"], zh: ["发抖"] },
    translation: { ngoko: "ndredheg", krama: "ndredheg", "krama-inggil": "ndredheg" },
  },
  {
    aliases: { id: ["gempa"], en: ["earthquake"], zh: ["地震"] },
    translation: { ngoko: "lindhu", krama: "lindhu", "krama-inggil": "lindhu" },
  },
  {
    aliases: { id: ["gempal"], en: ["stocky"], zh: ["矮壮的"] },
    translation: { ngoko: "dempal", krama: "dempal", "krama-inggil": "dempal" },
  },
  {
    aliases: { id: ["gemuk"], en: ["fat","plump"], zh: ["胖"] },
    translation: { ngoko: "lemu", krama: "lemu", "krama-inggil": "lemu" },
  },
  {
    aliases: { id: ["genap"], en: ["even","complete"], zh: ["偶数；完整"] },
    translation: { ngoko: "genep", krama: "genep", "krama-inggil": "genep" },
  },
  {
    aliases: { id: ["gendang"], en: ["double-headed drum"], zh: ["双面鼓"] },
    translation: { ngoko: "kendhang", krama: "kendhang", "krama-inggil": "kendhang" },
  },
  {
    aliases: { id: ["gender"], en: ["gender metallophone"], zh: ["根德尔金属排琴"] },
    translation: { ngoko: "gendèr", krama: "gendèr", "krama-inggil": "gendèr" },
  },
  {
    aliases: { id: ["gending"], en: ["gamelan composition"], zh: ["甘美兰乐曲"] },
    translation: { ngoko: "gendhing", krama: "gendhing", "krama-inggil": "gendhing" },
  },
  {
    aliases: { id: ["gendong"], en: ["carry someone on one's back or hip"], zh: ["背抱"] },
    translation: { ngoko: "nggendhong", krama: "nggendhong", "krama-inggil": "nggendhong" },
  },
  {
    aliases: { id: ["generasi"], en: ["generation"], zh: ["一代人"] },
    translation: { ngoko: "angkatan", krama: "angkatan", "krama-inggil": "angkatan" },
  },
  {
    aliases: { id: ["genggam"], en: ["grip"], zh: ["握住"] },
    translation: { ngoko: "nggenggem", krama: "nggenggem", "krama-inggil": "nggenggem" },
  },
  {
    aliases: { id: ["genius"], en: ["genius"], zh: ["天才"] },
    translation: { ngoko: "jenius", krama: "jenius", "krama-inggil": "jenius" },
  },
  {
    aliases: { id: ["genjer"], en: ["yellow velvetleaf (plant)"], zh: ["水芹类植物"] },
    translation: { ngoko: "genjer", krama: "genjer", "krama-inggil": "genjer" },
  },
  {
    aliases: { id: ["genjot"], en: ["pedal","boost"], zh: ["蹬；加速"] },
    translation: { ngoko: "nggenjot", krama: "nggenjot", "krama-inggil": "nggenjot" },
  },
  {
    aliases: { id: ["genset"], en: ["generator set"], zh: ["发电机组"] },
    translation: { ngoko: "genset", krama: "genset", "krama-inggil": "genset" },
  },
  {
    aliases: { id: ["genteng"], en: ["roof tile"], zh: ["屋瓦"] },
    translation: { ngoko: "gendheng", krama: "gendheng", "krama-inggil": "gendheng" },
  },
  {
    aliases: { id: ["geografi"], en: ["geography"], zh: ["地理"] },
    translation: { ngoko: "geografi", krama: "geografi", "krama-inggil": "geografi" },
  },
  {
    aliases: { id: ["gerak"], en: ["movement"], zh: ["运动；动作"] },
    translation: { ngoko: "obah", krama: "obah", "krama-inggil": "obah" },
  },
  {
    aliases: { id: ["gerakan"], en: ["movement","motion"], zh: ["运动；动作"] },
    translation: { ngoko: "obah-obahan", krama: "obah-obahan", "krama-inggil": "obah-obahan" },
  },
  {
    aliases: { id: ["geram"], en: ["exasperated"], zh: ["气恼"] },
    translation: { ngoko: "gemes", krama: "gemes", "krama-inggil": "gemes" },
  },
  {
    aliases: { id: ["gerbang"], en: ["gate","gateway"], zh: ["大门；入口"] },
    translation: { ngoko: "gapura", krama: "gapura", "krama-inggil": "gapura" },
  },
  {
    aliases: { id: ["gerbong"], en: ["railway carriage"], zh: ["火车车厢"] },
    translation: { ngoko: "gerbong", krama: "gerbong", "krama-inggil": "gerbong" },
  },
  {
    aliases: { id: ["gereja"], en: ["church"], zh: ["教堂"] },
    translation: { ngoko: "greja", krama: "greja", "krama-inggil": "greja" },
  },
  {
    aliases: { id: ["gerimis"], en: ["drizzle"], zh: ["毛毛雨"] },
    translation: { ngoko: "grimis", krama: "grimis", "krama-inggil": "grimis" },
  },
  {
    aliases: { id: ["gerinda"], en: ["grinder"], zh: ["砂轮机"] },
    translation: { ngoko: "gerinda", krama: "gerinda", "krama-inggil": "gerinda" },
  },
  {
    aliases: { id: ["gerobak"], en: ["cart"], zh: ["手推车"] },
    translation: { ngoko: "grobak", krama: "grobak", "krama-inggil": "grobak" },
  },
  {
    aliases: { id: ["gerombolan"], en: ["group","gang"], zh: ["一群；团伙"] },
    translation: { ngoko: "gerombolan", krama: "gerombolan", "krama-inggil": "gerombolan" },
  },
  {
    aliases: { id: ["gerutu"], en: ["grumble"], zh: ["嘟囔"] },
    translation: { ngoko: "grundelan", krama: "grundelan", "krama-inggil": "grundelan" },
  },
  {
    aliases: { id: ["gesekan"], en: ["friction","rubbing"], zh: ["摩擦"] },
    translation: { ngoko: "gesekan", krama: "gesekan", "krama-inggil": "gesekan" },
  },
  {
    aliases: { id: ["geser"], en: ["shift","slide"], zh: ["移动；滑动"] },
    translation: { ngoko: "geser", krama: "geser", "krama-inggil": "geser" },
  },
  {
    aliases: { id: ["gesit"], en: ["nimble"], zh: ["灵巧"] },
    translation: { ngoko: "prigel", krama: "prigel", "krama-inggil": "prigel" },
  },
  {
    aliases: { id: ["getah"], en: ["sap","latex"], zh: ["树液；乳胶"] },
    translation: { ngoko: "pulut", krama: "pulut", "krama-inggil": "tlutuh" },
  },
  {
    aliases: { id: ["getar"], en: ["vibration"], zh: ["振动"] },
    translation: { ngoko: "geter", krama: "geter", "krama-inggil": "geter" },
  },
  {
    aliases: { id: ["getaran"], en: ["vibration","tremor"], zh: ["振动；震颤"] },
    translation: { ngoko: "geteran", krama: "geteran", "krama-inggil": "geteran" },
  },
  {
    aliases: { id: ["getuk"], en: ["sweet mashed cassava cake"], zh: ["甜木薯糕"] },
    translation: { ngoko: "gethuk", krama: "gethuk", "krama-inggil": "gethuk" },
  },
  {
    aliases: { id: ["gigi"], en: ["tooth","teeth"], zh: ["牙齿"] },
    translation: { ngoko: "untu", krama: "waos", "krama-inggil": "waos" },
  },
  {
    aliases: { id: ["gigih"], en: ["persistent"], zh: ["坚持不懈"] },
    translation: { ngoko: "ulet", krama: "ulet", "krama-inggil": "ulet" },
  },
  {
    aliases: { id: ["gigit"], en: ["bite"], zh: ["咬"] },
    translation: { ngoko: "nyokot", krama: "nyakot", "krama-inggil": "nyakot" },
  },
  {
    aliases: { id: ["gila"], en: ["crazy","insane"], zh: ["疯狂"] },
    translation: { ngoko: "edan", krama: "edan", "krama-inggil": "edan" },
  },
  {
    aliases: { id: ["giling"], en: ["grind"], zh: ["研磨"] },
    translation: { ngoko: "nggiling", krama: "nggiling", "krama-inggil": "nggiling" },
  },
  {
    aliases: { id: ["gilir"], en: ["turn","rotation"], zh: ["轮次；轮换"] },
    translation: { ngoko: "gilir", krama: "gentos", "krama-inggil": "gentos" },
  },
  {
    aliases: { id: ["ginjal"], en: ["kidney"], zh: ["肾脏"] },
    translation: { ngoko: "ginjel", krama: "ginjel", "krama-inggil": "ginjel" },
  },
  {
    aliases: { id: ["girang"], en: ["delighted"], zh: ["欢喜"] },
    translation: { ngoko: "girang", krama: "girang", "krama-inggil": "girang" },
  },
  {
    aliases: { id: ["gizi"], en: ["nutrition"], zh: ["营养"] },
    translation: { ngoko: "gizi", krama: "gizi", "krama-inggil": "gizi" },
  },
  {
    aliases: { id: ["global"], en: ["global"], zh: ["全球的"] },
    translation: { ngoko: "global", krama: "global", "krama-inggil": "global" },
  },
  {
    aliases: { id: ["globe"], en: ["globe"], zh: ["地球仪"] },
    translation: { ngoko: "globe", krama: "globe", "krama-inggil": "globe" },
  },
  {
    aliases: { id: ["gobak sodor"], en: ["gobak sodor"], zh: ["拦线游戏"] },
    translation: { ngoko: "gobag sodor", krama: "gobag sodor", "krama-inggil": "gobag sodor" },
  },
  {
    aliases: { id: ["goda"], en: ["tease"], zh: ["逗弄"] },
    translation: { ngoko: "nggodha", krama: "nggodha", "krama-inggil": "nggodha" },
  },
  {
    aliases: { id: ["gol"], en: ["goal (sports)"], zh: ["进球"] },
    translation: { ngoko: "gol", krama: "gol", "krama-inggil": "gol" },
  },
  {
    aliases: { id: ["golf"], en: ["golf"], zh: ["高尔夫球"] },
    translation: { ngoko: "golf", krama: "golf", "krama-inggil": "golf" },
  },
  {
    aliases: { id: ["golongan"], en: ["group","category"], zh: ["群体；类别"] },
    translation: { ngoko: "golongan", krama: "golongan", "krama-inggil": "golongan" },
  },
  {
    aliases: { id: ["gondok"], en: ["goiter"], zh: ["甲状腺肿"] },
    translation: { ngoko: "gondhok", krama: "gondhok", "krama-inggil": "gondhok" },
  },
  {
    aliases: { id: ["gondongan"], en: ["mumps"], zh: ["流行性腮腺炎"] },
    translation: { ngoko: "gondhongen", krama: "gondhongen", "krama-inggil": "gondhongen" },
  },
  {
    aliases: { id: ["gong"], en: ["gong"], zh: ["锣"] },
    translation: { ngoko: "gong", krama: "gong", "krama-inggil": "gong" },
  },
  {
    aliases: { id: ["goreng"], en: ["fry"], zh: ["炸；煎"] },
    translation: { ngoko: "goreng", krama: "goreng", "krama-inggil": "goreng" },
  },
  {
    aliases: { id: ["gorengan"], en: ["fried food","fritter"], zh: ["油炸食品"] },
    translation: { ngoko: "gorengan", krama: "gorengan", "krama-inggil": "gorengan" },
  },
  {
    aliases: { id: ["gorila"], en: ["gorilla"], zh: ["大猩猩"] },
    translation: { ngoko: "gorila", krama: "gorila", "krama-inggil": "gorila" },
  },
  {
    aliases: { id: ["gosip"], en: ["gossip"], zh: ["说闲话"] },
    translation: { ngoko: "ngrasani", krama: "ngrasani", "krama-inggil": "ngrasani" },
  },
  {
    aliases: { id: ["gosok"], en: ["rub","scrub"], zh: ["擦；刷"] },
    translation: { ngoko: "gosok", krama: "gosok", "krama-inggil": "gosok" },
  },
  {
    aliases: { id: ["gosokan"], en: ["rubbing","polish"], zh: ["擦拭"] },
    translation: { ngoko: "gosokan", krama: "gosokan", "krama-inggil": "gosokan" },
  },
  {
    aliases: { id: ["gosong"], en: ["burnt"], zh: ["焦"] },
    translation: { ngoko: "gosong", krama: "gosong", "krama-inggil": "gosong" },
  },
  {
    aliases: { id: ["gotong royong"], en: ["mutual cooperation"], zh: ["互助合作"] },
    translation: { ngoko: "gugur gunung", krama: "gotong royong", "krama-inggil": "gotong royong" },
  },
  {
    aliases: { id: ["goyang"], en: ["sway","shake"], zh: ["摇摆"] },
    translation: { ngoko: "oyag", krama: "oyag", "krama-inggil": "oyag" },
  },
  {
    aliases: { id: ["goyangan"], en: ["swaying","dance movement"], zh: ["摇摆；舞步"] },
    translation: { ngoko: "oyagan", krama: "oyagan", "krama-inggil": "oyagan" },
  },
  {
    aliases: { id: ["GPS"], en: ["GPS"], zh: ["全球定位系统"] },
    translation: { ngoko: "GPS", krama: "GPS", "krama-inggil": "GPS" },
  },
  {
    aliases: { id: ["grebeg"], en: ["Javanese royal ceremonial procession"], zh: ["爪哇王室庆典游行"] },
    translation: { ngoko: "garebeg", krama: "garebeg", "krama-inggil": "garebeg" },
  },
  {
    aliases: { id: ["grup"], en: ["group"], zh: ["组；群"] },
    translation: { ngoko: "kelompok", krama: "kelompok", "krama-inggil": "kelompok" },
  },
  {
    aliases: { id: ["gua"], en: ["cave"], zh: ["洞穴"] },
    translation: { ngoko: "guwa", krama: "guwa", "krama-inggil": "guwa" },
  },
  {
    aliases: { id: ["gubernur"], en: ["governor"], zh: ["省长"] },
    translation: { ngoko: "gubernur", krama: "gubernur", "krama-inggil": "gubernur" },
  },
  {
    aliases: { id: ["gubuk"], en: ["hut"], zh: ["茅屋"] },
    translation: { ngoko: "gubug", krama: "gubug", "krama-inggil": "gubug" },
  },
  {
    aliases: { id: ["gudang"], en: ["warehouse"], zh: ["仓库"] },
    translation: { ngoko: "gudhang", krama: "gudhang", "krama-inggil": "gudhang" },
  },
  {
    aliases: { id: ["gudeg"], en: ["sweet young jackfruit stew"], zh: ["甜炖嫩菠萝蜜"] },
    translation: { ngoko: "gudheg", krama: "gudheg", "krama-inggil": "gudheg" },
  },
  {
    aliases: { id: ["gugup"], en: ["nervous"], zh: ["紧张"] },
    translation: { ngoko: "gugup", krama: "gugup", "krama-inggil": "gugup" },
  },
  {
    aliases: { id: ["gugur"], en: ["fall","drop","die in battle"], zh: ["落下；阵亡"] },
    translation: { ngoko: "tiba", krama: "dhawah", "krama-inggil": "dhawah" },
  },
  {
    aliases: { id: ["gugus"], en: ["cluster","group"], zh: ["簇；群"] },
    translation: { ngoko: "gugus", krama: "gugus", "krama-inggil": "gugus" },
  },
  {
    aliases: { id: ["gula"], en: ["sugar"], zh: ["糖"] },
    translation: { ngoko: "gula", krama: "gula", "krama-inggil": "gula" },
  },
  {
    aliases: { id: ["gula merah"], en: ["palm sugar"], zh: ["棕榈糖"] },
    translation: { ngoko: "gula Jawa", krama: "gendhis Jawi", "krama-inggil": "gendhis Jawi" },
  },
  {
    aliases: { id: ["gulai"], en: ["Indonesian curry"], zh: ["印尼咖喱"] },
    translation: { ngoko: "gule", krama: "gule", "krama-inggil": "gule" },
  },
  {
    aliases: { id: ["gulat"], en: ["wrestling"], zh: ["摔跤"] },
    translation: { ngoko: "gulat", krama: "gulat", "krama-inggil": "gulat" },
  },
  {
    aliases: { id: ["guling"], en: ["bolster"], zh: ["长抱枕"] },
    translation: { ngoko: "guling", krama: "guling", "krama-inggil": "guling" },
  },
  {
    aliases: { id: ["gulung"], en: ["roll up"], zh: ["卷起"] },
    translation: { ngoko: "gulung", krama: "gulung", "krama-inggil": "gulung" },
  },
  {
    aliases: { id: ["gulungan"], en: ["roll","coil"], zh: ["卷；卷状物"] },
    translation: { ngoko: "gulung", krama: "gulung", "krama-inggil": "gulung" },
  },
  {
    aliases: { id: ["gumam"], en: ["mumble"], zh: ["嘟囔"] },
    translation: { ngoko: "nggremeng", krama: "nggremeng", "krama-inggil": "nggremeng" },
  },
  {
    aliases: { id: ["gundul"], en: ["bald","shaved"], zh: ["秃；剃光"] },
    translation: { ngoko: "gundhul", krama: "gundhul", "krama-inggil": "gundhul" },
  },
  {
    aliases: { id: ["gunting"], en: ["scissors"], zh: ["剪刀"] },
    translation: { ngoko: "gunting", krama: "gunting", "krama-inggil": "gunting" },
  },
  {
    aliases: { id: ["gunting kuku"], en: ["nail clippers"], zh: ["指甲剪"] },
    translation: { ngoko: "gunting kuku", krama: "gunting kuku", "krama-inggil": "gunting kuku" },
  },
  {
    aliases: { id: ["gunting rambut"], en: ["haircut","scissors for hair"], zh: ["剪发；理发剪"] },
    translation: { ngoko: "gunting rambut", krama: "gunting rambut", "krama-inggil": "gunting rambut" },
  },
  {
    aliases: { id: ["guntur"], en: ["thunder"], zh: ["雷声"] },
    translation: { ngoko: "gludhug", krama: "gludhug", "krama-inggil": "gludhug" },
  },
  {
    aliases: { id: ["gunung"], en: ["mountain"], zh: ["山"] },
    translation: { ngoko: "gunung", krama: "redi", "krama-inggil": "redi" },
  },
  {
    aliases: { id: ["gunungan"], en: ["mountain-shaped wayang puppet"], zh: ["山形皮影"] },
    translation: { ngoko: "gunungan", krama: "gunungan", "krama-inggil": "gunungan" },
  },
  {
    aliases: { id: ["gurami"], en: ["giant gourami"], zh: ["丝足鲈"] },
    translation: { ngoko: "gurami", krama: "gurami", "krama-inggil": "gurami" },
  },
  {
    aliases: { id: ["gurih"], en: ["savory"], zh: ["鲜美；咸香"] },
    translation: { ngoko: "gurih", krama: "gurih", "krama-inggil": "gurih" },
  },
  {
    aliases: { id: ["gurita"], en: ["octopus"], zh: ["章鱼"] },
    translation: { ngoko: "gurita", krama: "gurita", "krama-inggil": "gurita" },
  },
  {
    aliases: { id: ["guru"], en: ["teacher"], zh: ["老师"] },
    translation: { ngoko: "guru", krama: "guru", "krama-inggil": "guru" },
  },
  {
    aliases: { id: ["guru besar"], en: ["professor"], zh: ["教授"] },
    translation: { ngoko: "profesor", krama: "profesor", "krama-inggil": "profesor" },
  },
  {
    aliases: { id: ["guru privat"], en: ["private tutor"], zh: ["私人家教"] },
    translation: { ngoko: "guru les", krama: "guru les", "krama-inggil": "guru les" },
  },
  {
    aliases: { id: ["guruh"], en: ["thunder"], zh: ["雷声"] },
    translation: { ngoko: "gludhug", krama: "gludhug", "krama-inggil": "gludhug" },
  },
  {
    aliases: { id: ["gurun"], en: ["desert"], zh: ["沙漠"] },
    translation: { ngoko: "ara-ara garing", krama: "ara-ara garing", "krama-inggil": "ara-ara garing" },
  },
  {
    aliases: { id: ["gusi"], en: ["gum"], zh: ["牙龈"] },
    translation: { ngoko: "gusi", krama: "gusi", "krama-inggil": "gusi" },
  },
  {
    aliases: { id: ["habis"], en: ["used up"], zh: ["用完"] },
    translation: { ngoko: "entek", krama: "telas", "krama-inggil": "telas" },
  },
  {
    aliases: { id: ["hadiah"], en: ["gift"], zh: ["礼物"] },
    translation: { ngoko: "bebungah", krama: "bebingah", "krama-inggil": "bebingah" },
  },
  {
    aliases: { id: ["hadirin"], en: ["ladies and gentlemen","attendees"], zh: ["各位来宾"] },
    translation: { ngoko: "para rawuh", krama: "para rawuh", "krama-inggil": "para rawuh" },
  },
  {
    aliases: { id: ["hafal"], en: ["know by heart"], zh: ["熟记"] },
    translation: { ngoko: "apal", krama: "apal", "krama-inggil": "apal" },
  },
  {
    aliases: { id: ["hafalkan"], en: ["memorize"], zh: ["背诵"] },
    translation: { ngoko: "ngapalake", krama: "ngapalaken", "krama-inggil": "ngapalaken" },
  },
  {
    aliases: { id: ["hajah"], en: ["hajj pilgrim (female honorific)"], zh: ["完成麦加朝觐的女性的尊称"] },
    translation: { ngoko: "hajah", krama: "hajah", "krama-inggil": "hajah" },
  },
  {
    aliases: { id: ["haji"], en: ["hajj pilgrim (male honorific)"], zh: ["哈吉"] },
    translation: { ngoko: "kaji", krama: "kaji", "krama-inggil": "kaji" },
  },
  {
    aliases: { id: ["hakim"], en: ["judge"], zh: ["法官"] },
    translation: { ngoko: "hakim", krama: "hakim", "krama-inggil": "hakim" },
  },
  {
    aliases: { id: ["halal"], en: ["religiously permissible"], zh: ["教法允许的"] },
    translation: { ngoko: "halal", krama: "halal", "krama-inggil": "halal" },
  },
  {
    aliases: { id: ["halaman"], en: ["yard"], zh: ["院子"] },
    translation: { ngoko: "latar", krama: "latar", "krama-inggil": "latar" },
  },
  {
    aliases: { id: ["halo"], en: ["hello"], zh: ["你好"] },
    translation: { ngoko: "halo", krama: "halo", "krama-inggil": "halo" },
  },
  {
    aliases: { id: ["halte"], en: ["bus stop"], zh: ["公交车站"] },
    translation: { ngoko: "halte", krama: "halte", "krama-inggil": "halte" },
  },
  {
    aliases: { id: ["halus"], en: ["fine-textured"], zh: ["细腻的"] },
    translation: { ngoko: "alus", krama: "alus", "krama-inggil": "alus" },
  },
  {
    aliases: { id: ["hama"], en: ["pest"], zh: ["害虫"] },
    translation: { ngoko: "ama", krama: "ama", "krama-inggil": "ama" },
  },
  {
    aliases: { id: ["hambar"], en: ["bland"], zh: ["寡淡"] },
    translation: { ngoko: "cemplang", krama: "cemplang", "krama-inggil": "cemplang" },
  },
  {
    aliases: { id: ["hamil"], en: ["pregnant"], zh: ["怀孕"] },
    translation: { ngoko: "meteng", krama: "meteng", "krama-inggil": "ngandhut" },
  },
  {
    aliases: { id: ["hampa"], en: ["empty inside"], zh: ["空虚"] },
    translation: { ngoko: "suwung", krama: "suwung", "krama-inggil": "suwung" },
  },
  {
    aliases: { id: ["hampir"], en: ["almost"], zh: ["几乎"] },
    translation: { ngoko: "meh", krama: "badhe", "krama-inggil": "badhe" },
  },
  {
    aliases: { id: ["handuk"], en: ["towel"], zh: ["毛巾"] },
    translation: { ngoko: "andhuk", krama: "andhuk", "krama-inggil": "andhuk" },
  },
  {
    aliases: { id: ["hangat"], en: ["warm"], zh: ["温暖"] },
    translation: { ngoko: "anget", krama: "anget", "krama-inggil": "anget" },
  },
  {
    aliases: { id: ["hangatkan"], en: ["warm up"], zh: ["加热"] },
    translation: { ngoko: "ngangetake", krama: "ngangetaken", "krama-inggil": "ngangetaken" },
  },
  {
    aliases: { id: ["hanya"], en: ["only"], zh: ["只；仅仅"] },
    translation: { ngoko: "mung", krama: "namung", "krama-inggil": "namung" },
  },
  {
    aliases: { id: ["hanya jika"], en: ["only if"], zh: ["只有……才"] },
    translation: { ngoko: "mung yen", krama: "namung menawi", "krama-inggil": "namung menawi" },
  },
  {
    aliases: { id: ["haram"], en: ["religiously forbidden"], zh: ["教法禁止的"] },
    translation: { ngoko: "haram", krama: "haram", "krama-inggil": "haram" },
  },
  {
    aliases: { id: ["harap"], en: ["hope"], zh: ["盼望"] },
    translation: { ngoko: "ngarep-arep", krama: "ngajeng-ajeng", "krama-inggil": "ngajeng-ajeng" },
  },
  {
    aliases: { id: ["harapan"], en: ["hope"], zh: ["希望"] },
    translation: { ngoko: "pangarep-arep", krama: "pangajeng-ajeng", "krama-inggil": "pangajeng-ajeng" },
  },
  {
    aliases: { id: ["harga"], en: ["price"], zh: ["价格"] },
    translation: { ngoko: "rega", krama: "regi", "krama-inggil": "regi" },
  },
  {
    aliases: { id: ["hargai"], en: ["appreciate"], zh: ["重视"] },
    translation: { ngoko: "ngregani", krama: "ngregani", "krama-inggil": "ngregani" },
  },
  {
    aliases: { id: ["hari"], en: ["day"], zh: ["天"] },
    translation: { ngoko: "dina", krama: "dinten", "krama-inggil": "dinten" },
  },
  {
    aliases: { id: ["hari besok"], en: ["tomorrow","the next day"], zh: ["明天；第二天"] },
    translation: { ngoko: "sesuk", krama: "benjing", "krama-inggil": "benjing" },
  },
  {
    aliases: { id: ["hari ini"], en: ["today"], zh: ["今天"] },
    translation: { ngoko: "dina iki", krama: "dinten menika", "krama-inggil": "dinten menika" },
  },
  {
    aliases: { id: ["hari kemarin"], en: ["yesterday"], zh: ["昨天"] },
    translation: { ngoko: "wingi", krama: "wingi", "krama-inggil": "wingi" },
  },
  {
    aliases: { id: ["hari raya"], en: ["religious festival day"], zh: ["宗教节日"] },
    translation: { ngoko: "riyaya", krama: "riyadin", "krama-inggil": "riyadin" },
  },
  {
    aliases: { id: ["harimau"], en: ["tiger"], zh: ["老虎"] },
    translation: { ngoko: "macan", krama: "macan", "krama-inggil": "macan" },
  },
  {
    aliases: { id: ["haru"], en: ["emotionally moved"], zh: ["感动"] },
    translation: { ngoko: "trenyuh", krama: "trenyuh", "krama-inggil": "trenyuh" },
  },
  {
    aliases: { id: ["harum"], en: ["fragrant"], zh: ["芳香"] },
    translation: { ngoko: "wangi", krama: "wangi", "krama-inggil": "wangi" },
  },
  {
    aliases: { id: ["harus"], en: ["must","have to"], zh: ["必须；应该"] },
    translation: { ngoko: "kudu", krama: "kedah", "krama-inggil": "kedah" },
  },
  {
    aliases: { id: ["hasrat"], en: ["desire"], zh: ["渴望"] },
    translation: { ngoko: "pepenginan", krama: "pepenginan", "krama-inggil": "pepenginan" },
  },
  {
    aliases: { id: ["hati"], en: ["heart","liver"], zh: ["心；肝"] },
    translation: { ngoko: "ati", krama: "manah", "krama-inggil": "manah" },
  },
  {
    aliases: { id: ["hati-hati"], en: ["carefully"], zh: ["小心地"] },
    translation: { ngoko: "ngati-ati", krama: "ngati-ati", "krama-inggil": "ngati-ati" },
  },
  {
    aliases: { id: ["hati-hati di jalan"], en: ["take care on the road"], zh: ["路上小心"] },
    translation: { ngoko: "ati-ati ing dalan", krama: "atos-atos ing margi", "krama-inggil": "atos-atos ing margi" },
  },
  {
    aliases: { id: ["haus"], en: ["thirsty"], zh: ["口渴"] },
    translation: { ngoko: "ngelak", krama: "ngelak", "krama-inggil": "ngelak" },
  },
  {
    aliases: { id: ["headset"], en: ["headset"], zh: ["耳麦"] },
    translation: { ngoko: "headset", krama: "headset", "krama-inggil": "headset" },
  },
  {
    aliases: { id: ["helikopter"], en: ["helicopter"], zh: ["直升机"] },
    translation: { ngoko: "helikopter", krama: "helikopter", "krama-inggil": "helikopter" },
  },
  {
    aliases: { id: ["helm"], en: ["helmet"], zh: ["头盔"] },
    translation: { ngoko: "helm", krama: "helm", "krama-inggil": "helm" },
  },
  {
    aliases: { id: ["hemat"], en: ["frugal"], zh: ["节俭"] },
    translation: { ngoko: "ngirit", krama: "gemi", "krama-inggil": "gemi" },
  },
  {
    aliases: { id: ["hendaki"], en: ["desire"], zh: ["希望得到"] },
    translation: { ngoko: "ngarepake", krama: "ngajengaken", "krama-inggil": "ngarsakaken" },
  },
  {
    aliases: { id: ["hentak"], en: ["stamp one's foot"], zh: ["跺脚"] },
    translation: { ngoko: "ngentak", krama: "ngentak", "krama-inggil": "ngentak" },
  },
  {
    aliases: { id: ["hewan"], en: ["animal"], zh: ["动物"] },
    translation: { ngoko: "kewan", krama: "sato", "krama-inggil": "sato" },
  },
  {
    aliases: { id: ["hibur"], en: ["console"], zh: ["安慰"] },
    translation: { ngoko: "nglipur", krama: "nglipur", "krama-inggil": "nglipur" },
  },
  {
    aliases: { id: ["hidang"], en: ["serve food"], zh: ["上菜"] },
    translation: { ngoko: "nyuguhake", krama: "nyuguhaken", "krama-inggil": "nyuguhaken" },
  },
  {
    aliases: { id: ["hidung"], en: ["nose"], zh: ["鼻子"] },
    translation: { ngoko: "irung", krama: "grana", "krama-inggil": "grana" },
  },
  {
    aliases: { id: ["hidup"], en: ["live","alive"], zh: ["生活；活着"] },
    translation: { ngoko: "urip", krama: "gesang", "krama-inggil": "gesang" },
  },
  {
    aliases: { id: ["hijau"], en: ["green"], zh: ["绿色"] },
    translation: { ngoko: "ijo", krama: "ijem", "krama-inggil": "ijem" },
  },
  {
    aliases: { id: ["hijau apel"], en: ["apple green"], zh: ["苹果绿"] },
    translation: { ngoko: "ijo apel", krama: "ijem apel", "krama-inggil": "ijem apel" },
  },
  {
    aliases: { id: ["hijau botol"], en: ["bottle green"], zh: ["瓶绿色"] },
    translation: { ngoko: "ijo botol", krama: "ijem botol", "krama-inggil": "ijem botol" },
  },
  {
    aliases: { id: ["hijau daun"], en: ["leaf green"], zh: ["叶绿色"] },
    translation: { ngoko: "ijo godhong", krama: "ijem ron", "krama-inggil": "ijem ron" },
  },
  {
    aliases: { id: ["hijau kebiruan"], en: ["bluish green"], zh: ["蓝绿色"] },
    translation: { ngoko: "ijo semu biru", krama: "ijem semu biru", "krama-inggil": "ijem semu biru" },
  },
  {
    aliases: { id: ["hijau kekuningan"], en: ["yellowish green"], zh: ["黄绿色"] },
    translation: { ngoko: "ijo semu kuning", krama: "ijem semu jene", "krama-inggil": "ijem semu jene" },
  },
  {
    aliases: { id: ["hijau lumut"], en: ["moss green"], zh: ["苔绿色"] },
    translation: { ngoko: "ijo lumut", krama: "ijem lumut", "krama-inggil": "ijem lumut" },
  },
  {
    aliases: { id: ["hijau mint"], en: ["mint green"], zh: ["薄荷绿"] },
    translation: { ngoko: "ijo mint", krama: "ijem mint", "krama-inggil": "ijem mint" },
  },
  {
    aliases: { id: ["hijau muda"], en: ["light green"], zh: ["浅绿色"] },
    translation: { ngoko: "ijo enom", krama: "ijem anem", "krama-inggil": "ijem anem" },
  },
  {
    aliases: { id: ["hijau neon"], en: ["neon green"], zh: ["荧光绿"] },
    translation: { ngoko: "ijo neon", krama: "ijem neon", "krama-inggil": "ijem neon" },
  },
  {
    aliases: { id: ["hijau pastel"], en: ["pastel green"], zh: ["柔绿色"] },
    translation: { ngoko: "ijo pastel", krama: "ijem pastel", "krama-inggil": "ijem pastel" },
  },
  {
    aliases: { id: ["hijau pucat"], en: ["pale green"], zh: ["淡绿色"] },
    translation: { ngoko: "ijo pucet", krama: "ijem pucet", "krama-inggil": "ijem pucet" },
  },
  {
    aliases: { id: ["hijau rumput"], en: ["grass green"], zh: ["草绿色"] },
    translation: { ngoko: "ijo suket", krama: "ijem rumput", "krama-inggil": "ijem rumput" },
  },
  {
    aliases: { id: ["hijau tentara"], en: ["army green"], zh: ["军绿色"] },
    translation: { ngoko: "ijo tentara", krama: "ijem tentara", "krama-inggil": "ijem tentara" },
  },
  {
    aliases: { id: ["hijau terang"], en: ["bright green"], zh: ["亮绿色"] },
    translation: { ngoko: "ijo padhang", krama: "ijem padhang", "krama-inggil": "ijem padhang" },
  },
  {
    aliases: { id: ["hijau tua"], en: ["dark green"], zh: ["深绿色"] },
    translation: { ngoko: "ijo tuwa", krama: "ijem sepuh", "krama-inggil": "ijem sepuh" },
  },
  {
    aliases: { id: ["hijau zaitun"], en: ["olive green"], zh: ["橄榄绿"] },
    translation: { ngoko: "ijo zaitun", krama: "ijem zaitun", "krama-inggil": "ijem zaitun" },
  },
  {
    aliases: { id: ["hijau zamrud"], en: ["emerald green"], zh: ["祖母绿"] },
    translation: { ngoko: "ijo zamrud", krama: "ijem zamrud", "krama-inggil": "ijem zamrud" },
  },
  {
    aliases: { id: ["hilir"], en: ["downstream"], zh: ["下游"] },
    translation: { ngoko: "ilir", krama: "ilir", "krama-inggil": "ilir" },
  },
  {
    aliases: { id: ["hina"], en: ["insult"], zh: ["侮辱"] },
    translation: { ngoko: "ngina", krama: "ngina", "krama-inggil": "ngina" },
  },
  {
    aliases: { id: ["hingga"], en: ["until"], zh: ["直到"] },
    translation: { ngoko: "nganti", krama: "ngantos", "krama-inggil": "ngantos" },
  },
  {
    aliases: { id: ["hipertensi"], en: ["hypertension"], zh: ["高血压"] },
    translation: { ngoko: "hipertensi", krama: "hipertensi", "krama-inggil": "hipertensi" },
  },
  {
    aliases: { id: ["hitam"], en: ["black"], zh: ["黑色"] },
    translation: { ngoko: "ireng", krama: "cemeng", "krama-inggil": "cemeng" },
  },
  {
    aliases: { id: ["hitam kebiruan"], en: ["bluish black"], zh: ["蓝黑色"] },
    translation: { ngoko: "ireng semu biru", krama: "cemeng semu biru", "krama-inggil": "cemeng semu biru" },
  },
  {
    aliases: { id: ["hitam pekat"], en: ["jet black"], zh: ["漆黑色"] },
    translation: { ngoko: "ireng ndhedhet", krama: "cemeng ndhedhet", "krama-inggil": "cemeng ndhedhet" },
  },
  {
    aliases: { id: ["hitung"], en: ["count"], zh: ["计数"] },
    translation: { ngoko: "ngetung", krama: "ngetang", "krama-inggil": "ngetang" },
  },
  {
    aliases: { id: ["hiu"], en: ["shark"], zh: ["鲨鱼"] },
    translation: { ngoko: "hiu", krama: "hiu", "krama-inggil": "hiu" },
  },
  {
    aliases: { id: ["hormat"], en: ["respect"], zh: ["尊敬"] },
    translation: { ngoko: "urmat", krama: "urmat", "krama-inggil": "urmat" },
  },
  {
    aliases: { id: ["hormati"], en: ["respect"], zh: ["尊重"] },
    translation: { ngoko: "ngajeni", krama: "ngajeni", "krama-inggil": "ngajeni" },
  },
  {
    aliases: { id: ["hotel"], en: ["hotel"], zh: ["酒店"] },
    translation: { ngoko: "hotel", krama: "hotel", "krama-inggil": "hotel" },
  },
  {
    aliases: { id: ["hujan"], en: ["rain"], zh: ["雨"] },
    translation: { ngoko: "udan", krama: "jawah", "krama-inggil": "jawah" },
  },
  {
    aliases: { id: ["hulu"], en: ["upstream"], zh: ["上游"] },
    translation: { ngoko: "hulu", krama: "hulu", "krama-inggil": "hulu" },
  },
  {
    aliases: { id: ["hutan"], en: ["forest"], zh: ["森林"] },
    translation: { ngoko: "alas", krama: "wana", "krama-inggil": "wana" },
  },
  {
    aliases: { id: ["iba"], en: ["compassionate"], zh: ["怜悯"] },
    translation: { ngoko: "welas", krama: "welas", "krama-inggil": "welas" },
  },
  {
    aliases: { id: ["iba hati"], en: ["feel sorry for"], zh: ["同情"] },
    translation: { ngoko: "mesakake", krama: "mesakaken", "krama-inggil": "mesakaken" },
  },
  {
    aliases: { id: ["iba terhadap"], en: ["pity someone"], zh: ["怜惜"] },
    translation: { ngoko: "melasi", krama: "melasi", "krama-inggil": "melasi" },
  },
  {
    aliases: { id: ["ibadah"], en: ["worship"], zh: ["礼拜"] },
    translation: { ngoko: "ibadah", krama: "ibadah", "krama-inggil": "ibadah" },
  },
  {
    aliases: { id: ["ibu"], en: ["mother"], zh: ["母亲"] },
    translation: { ngoko: "ibu", krama: "ibu", "krama-inggil": "ibu" },
  },
  {
    aliases: { id: ["ibu angkat"], en: ["adoptive mother"], zh: ["养母"] },
    translation: { ngoko: "ibu angkat", krama: "ibu angkat", "krama-inggil": "ibu angkat" },
  },
  {
    aliases: { id: ["ibu guru"], en: ["ma'am, addressing a female teacher"], zh: ["女老师"] },
    translation: { ngoko: "bu guru", krama: "ibu guru", "krama-inggil": "ibu guru" },
  },
  {
    aliases: { id: ["ibu jari"], en: ["thumb"], zh: ["拇指"] },
    translation: { ngoko: "jempol", krama: "jempol", "krama-inggil": "jempol" },
  },
  {
    aliases: { id: ["ibu kota"], en: ["capital city"], zh: ["首府"] },
    translation: { ngoko: "ibu kutha", krama: "ibu kitha", "krama-inggil": "ibu kitha" },
  },
  {
    aliases: { id: ["ibu lurah"], en: ["Madam village head","village head's wife"], zh: ["女村长；村长夫人"] },
    translation: { ngoko: "bu lurah", krama: "ibu lurah", "krama-inggil": "ibu lurah" },
  },
  {
    aliases: { id: ["ibu mertua"], en: ["mother-in-law"], zh: ["婆婆；岳母"] },
    translation: { ngoko: "maratuwa wadon", krama: "marasepuh estri", "krama-inggil": "marasepuh putri" },
  },
  {
    aliases: { id: ["ibu nyai"], en: ["respected female Islamic teacher","kiai's wife"], zh: ["尊敬的伊斯兰教女老师；教士夫人"] },
    translation: { ngoko: "bu nyai", krama: "ibu nyai", "krama-inggil": "ibu nyai" },
  },
  {
    aliases: { id: ["ibu tiri"], en: ["stepmother"], zh: ["继母"] },
    translation: { ngoko: "ibu kuwalon", krama: "ibu kuwalon", "krama-inggil": "ibu kuwalon" },
  },
  {
    aliases: { id: ["ijab"], en: ["formal marriage offer"], zh: ["婚约要约"] },
    translation: { ngoko: "ijab", krama: "ijab", "krama-inggil": "ijab" },
  },
  {
    aliases: { id: ["ijazah"], en: ["diploma"], zh: ["毕业证书"] },
    translation: { ngoko: "ijazah", krama: "ijazah", "krama-inggil": "ijazah" },
  },
  {
    aliases: { id: ["ikal"], en: ["wavy-haired"], zh: ["头发微卷的"] },
    translation: { ngoko: "ikal", krama: "ikal", "krama-inggil": "ikal" },
  },
  {
    aliases: { id: ["ikamah"], en: ["call announcing the start of prayer"], zh: ["成拜词"] },
    translation: { ngoko: "ikamah", krama: "ikamah", "krama-inggil": "ikamah" },
  },
  {
    aliases: { id: ["ikan"], en: ["fish"], zh: ["鱼"] },
    translation: { ngoko: "iwak", krama: "ulam", "krama-inggil": "ulam" },
  },
  {
    aliases: { id: ["ikan asin"], en: ["salted fish"], zh: ["咸鱼"] },
    translation: { ngoko: "gereh", krama: "gereh", "krama-inggil": "gereh" },
  },
  {
    aliases: { id: ["ikan mas"], en: ["common carp"], zh: ["鲤鱼"] },
    translation: { ngoko: "iwak mas", krama: "ulam mas", "krama-inggil": "ulam mas" },
  },
  {
    aliases: { id: ["ikat"], en: ["tie"], zh: ["捆绑"] },
    translation: { ngoko: "naleni", krama: "naleni", "krama-inggil": "naleni" },
  },
  {
    aliases: { id: ["ikat kepala"], en: ["headcloth"], zh: ["包头巾"] },
    translation: { ngoko: "iket", krama: "iket", "krama-inggil": "iket" },
  },
  {
    aliases: { id: ["ikat pinggang"], en: ["belt"], zh: ["腰带"] },
    translation: { ngoko: "sabuk", krama: "sabuk", "krama-inggil": "paningset" },
  },
  {
    aliases: { id: ["ikhlas"], en: ["sincere","willing"], zh: ["心甘情愿"] },
    translation: { ngoko: "lila", krama: "lila", "krama-inggil": "lila" },
  },
  {
    aliases: { id: ["iklan"], en: ["advertise"], zh: ["登广告"] },
    translation: { ngoko: "ngiklanake", krama: "ngiklanaken", "krama-inggil": "ngiklanaken" },
  },
  {
    aliases: { id: ["iklim"], en: ["climate"], zh: ["气候"] },
    translation: { ngoko: "iklim", krama: "iklim", "krama-inggil": "iklim" },
  },
  {
    aliases: { id: ["ilmu"], en: ["learning","science"], zh: ["学问"] },
    translation: { ngoko: "ngelmu", krama: "ngelmi", "krama-inggil": "ngelmi" },
  },
  {
    aliases: { id: ["ilmuwan"], en: ["scientist"], zh: ["科学家"] },
    translation: { ngoko: "ilmuwan", krama: "ilmuwan", "krama-inggil": "ilmuwan" },
  },
  {
    aliases: { id: ["imam"], en: ["prayer leader"], zh: ["领拜者"] },
    translation: { ngoko: "imam", krama: "imam", "krama-inggil": "imam" },
  },
  {
    aliases: { id: ["iman"], en: ["faith"], zh: ["信仰"] },
    translation: { ngoko: "iman", krama: "iman", "krama-inggil": "iman" },
  },
  {
    aliases: { id: ["impor"], en: ["import"], zh: ["进口"] },
    translation: { ngoko: "ngimpor", krama: "ngimpor", "krama-inggil": "ngimpor" },
  },
  {
    aliases: { id: ["Indonesia"], en: ["Indonesia"], zh: ["印度尼西亚"] },
    translation: { ngoko: "Indonesia", krama: "Indonesia", "krama-inggil": "Indonesia" },
  },
  {
    aliases: { id: ["infak"], en: ["religious donation"], zh: ["宗教捐款"] },
    translation: { ngoko: "infak", krama: "infak", "krama-inggil": "infak" },
  },
  {
    aliases: { id: ["infeksi"], en: ["infection"], zh: ["感染"] },
    translation: { ngoko: "infeksi", krama: "infeksi", "krama-inggil": "infeksi" },
  },
  {
    aliases: { id: ["infus"], en: ["intravenous infusion"], zh: ["输液"] },
    translation: { ngoko: "infus", krama: "infus", "krama-inggil": "infus" },
  },
  {
    aliases: { id: ["ingat"], en: ["remember"], zh: ["记得"] },
    translation: { ngoko: "eling", krama: "emut", "krama-inggil": "emut" },
  },
  {
    aliases: { id: ["ingatkan"], en: ["remind"], zh: ["提醒"] },
    translation: { ngoko: "ngelingake", krama: "ngemutaken", "krama-inggil": "ngemutaken" },
  },
  {
    aliases: { id: ["ingin"], en: ["want"], zh: ["想要"] },
    translation: { ngoko: "kepengin", krama: "kepengin", "krama-inggil": "kersa" },
  },
  {
    aliases: { id: ["ingus"], en: ["nasal mucus"], zh: ["鼻涕"] },
    translation: { ngoko: "umbel", krama: "umbel", "krama-inggil": "gadhing" },
  },
  {
    aliases: { id: ["ini"], en: ["this"], zh: ["这；这个"] },
    translation: { ngoko: "iki", krama: "menika", "krama-inggil": "menika" },
  },
  {
    aliases: { id: ["ini siapa"], en: ["who is this"], zh: ["这是谁"] },
    translation: { ngoko: "iki sapa", krama: "menika sinten", "krama-inggil": "menika sinten" },
  },
  {
    aliases: { id: ["injak"], en: ["step on"], zh: ["踩"] },
    translation: { ngoko: "ngidak", krama: "ngidak", "krama-inggil": "ngidak" },
  },
  {
    aliases: { id: ["Injil"], en: ["Gospel"], zh: ["福音书"] },
    translation: { ngoko: "Injil", krama: "Injil", "krama-inggil": "Injil" },
  },
  {
    aliases: { id: ["insinyur"], en: ["engineer"], zh: ["工程师"] },
    translation: { ngoko: "insinyur", krama: "insinyur", "krama-inggil": "insinyur" },
  },
  {
    aliases: { id: ["insomnia"], en: ["insomnia"], zh: ["失眠"] },
    translation: { ngoko: "insomnia", krama: "insomnia", "krama-inggil": "insomnia" },
  },
  {
    aliases: { id: ["internet"], en: ["internet"], zh: ["互联网"] },
    translation: { ngoko: "internet", krama: "internet", "krama-inggil": "internet" },
  },
  {
    aliases: { id: ["ipar"], en: ["sibling-in-law"], zh: ["姻亲兄弟姐妹"] },
    translation: { ngoko: "ipe", krama: "ipe", "krama-inggil": "ipe" },
  },
  {
    aliases: { id: ["irama"], en: ["rhythm"], zh: ["节奏"] },
    translation: { ngoko: "wirama", krama: "wirama", "krama-inggil": "wirama" },
  },
  {
    aliases: { id: ["iri"], en: ["envy"], zh: ["羡妒"] },
    translation: { ngoko: "meri", krama: "meri", "krama-inggil": "meri" },
  },
  {
    aliases: { id: ["iris"], en: ["slice"], zh: ["切片"] },
    translation: { ngoko: "ngiris", krama: "ngiris", "krama-inggil": "ngiris" },
  },
  {
    aliases: { id: ["isak"], en: ["sob"], zh: ["抽泣"] },
    translation: { ngoko: "sesenggukan", krama: "sesenggukan", "krama-inggil": "sesenggukan" },
  },
  {
    aliases: { id: ["isap"], en: ["suck"], zh: ["吸"] },
    translation: { ngoko: "nyedhot", krama: "nyedhot", "krama-inggil": "nyedhot" },
  },
  {
    aliases: { id: ["iseng"], en: ["playfully idle"], zh: ["闲来闹着玩"] },
    translation: { ngoko: "iseng", krama: "iseng", "krama-inggil": "iseng" },
  },
  {
    aliases: { id: ["isi"], en: ["fill"], zh: ["装满"] },
    translation: { ngoko: "ngisi", krama: "ngisi", "krama-inggil": "ngisi" },
  },
  {
    aliases: { id: ["istana"], en: ["palace"], zh: ["宫殿"] },
    translation: { ngoko: "kedhaton", krama: "kedhaton", "krama-inggil": "kedhaton" },
  },
  {
    aliases: { id: ["istirahat"], en: ["rest"], zh: ["休息"] },
    translation: { ngoko: "ngaso", krama: "kendel", "krama-inggil": "leren" },
  },
  {
    aliases: { id: ["istri"], en: ["wife"], zh: ["妻子"] },
    translation: { ngoko: "bojo wadon", krama: "semah estri", "krama-inggil": "garwa putri" },
  },
  {
    aliases: { id: ["itu"], en: ["that"], zh: ["那；那个"] },
    translation: { ngoko: "kuwi", krama: "niku", "krama-inggil": "punika" },
  },
  {
    aliases: { id: ["itu siapa"], en: ["who is that"], zh: ["那是谁"] },
    translation: { ngoko: "kuwi sapa", krama: "punika sinten", "krama-inggil": "punika sinten" },
  },
  {
    aliases: { id: ["iya"], en: ["yes"], zh: ["是；对"] },
    translation: { ngoko: "iya", krama: "inggih", "krama-inggil": "inggih" },
  },
  {
    aliases: { id: ["izin"], en: ["permission"], zh: ["许可"] },
    translation: { ngoko: "idin", krama: "idin", "krama-inggil": "idin" },
  },
  {
    aliases: { id: ["izinkan"], en: ["permit"], zh: ["允许"] },
    translation: { ngoko: "ngolehake", krama: "ngidinaken", "krama-inggil": "ngidinaken" },
  },
  {
    aliases: { id: ["jabatan"], en: ["official position"], zh: ["职务"] },
    translation: { ngoko: "kalungguhan", krama: "kalenggahan", "krama-inggil": "kalenggahan" },
  },
  {
    aliases: { id: ["jadi"], en: ["so","thus"], zh: ["所以"] },
    translation: { ngoko: "dadi", krama: "dados", "krama-inggil": "dados" },
  },
  {
    aliases: { id: ["jadwal"], en: ["schedule"], zh: ["时间表"] },
    translation: { ngoko: "jadwal", krama: "jadwal", "krama-inggil": "jadwal" },
  },
  {
    aliases: { id: ["jaga"], en: ["look after"], zh: ["照看"] },
    translation: { ngoko: "njaga", krama: "njagi", "krama-inggil": "njagi" },
  },
  {
    aliases: { id: ["jagung"], en: ["corn"], zh: ["玉米"] },
    translation: { ngoko: "jagung", krama: "jagung", "krama-inggil": "jagung" },
  },
  {
    aliases: { id: ["jahat"], en: ["evil","mean"], zh: ["坏；邪恶"] },
    translation: { ngoko: "ala", krama: "awon", "krama-inggil": "awon" },
  },
  {
    aliases: { id: ["jahe"], en: ["ginger"], zh: ["姜"] },
    translation: { ngoko: "jae", krama: "jae", "krama-inggil": "jae" },
  },
  {
    aliases: { id: ["jahil"], en: ["mischievous"], zh: ["爱捉弄人"] },
    translation: { ngoko: "jail", krama: "jail", "krama-inggil": "jail" },
  },
  {
    aliases: { id: ["jahit"], en: ["sew"], zh: ["缝"] },
    translation: { ngoko: "njait", krama: "njait", "krama-inggil": "njait" },
  },
  {
    aliases: { id: ["jahitan"], en: ["stitching"], zh: ["缝线"] },
    translation: { ngoko: "jaitan", krama: "jaitan", "krama-inggil": "jaitan" },
  },
  {
    aliases: { id: ["jaket"], en: ["jacket"], zh: ["夹克"] },
    translation: { ngoko: "jaket", krama: "jaket", "krama-inggil": "jaket" },
  },
  {
    aliases: { id: ["jaksa"], en: ["prosecutor"], zh: ["检察官"] },
    translation: { ngoko: "jaksa", krama: "jaksa", "krama-inggil": "jaksa" },
  },
  {
    aliases: { id: ["jakun"], en: ["Adam's apple"], zh: ["喉结"] },
    translation: { ngoko: "kala menjing", krama: "kala menjing", "krama-inggil": "kala menjing" },
  },
  {
    aliases: { id: ["jalak"], en: ["starling"], zh: ["椋鸟"] },
    translation: { ngoko: "jalak", krama: "jalak", "krama-inggil": "jalak" },
  },
  {
    aliases: { id: ["jalan"], en: ["road","walk"], zh: ["路；走"] },
    translation: { ngoko: "dalan", krama: "margi", "krama-inggil": "margi" },
  },
  {
    aliases: { id: ["jalan kaki"], en: ["walk"], zh: ["步行"] },
    translation: { ngoko: "mlaku", krama: "mlampah", "krama-inggil": "tindak" },
  },
  {
    aliases: { id: ["jalan raya"], en: ["main road"], zh: ["大路"] },
    translation: { ngoko: "dalan gedhe", krama: "margi ageng", "krama-inggil": "margi ageng" },
  },
  {
    aliases: { id: ["jalan tol"], en: ["toll road"], zh: ["收费公路"] },
    translation: { ngoko: "dalan tol", krama: "margi tol", "krama-inggil": "margi tol" },
  },
  {
    aliases: { id: ["jam"], en: ["hour"], zh: ["小时"] },
    translation: { ngoko: "jam", krama: "jam", "krama-inggil": "jam" },
  },
  {
    aliases: { id: ["jam digital"], en: ["digital clock"], zh: ["数字钟"] },
    translation: { ngoko: "jam digital", krama: "jam digital", "krama-inggil": "jam digital" },
  },
  {
    aliases: { id: ["jam dinding"], en: ["wall clock"], zh: ["挂钟"] },
    translation: { ngoko: "jam tembok", krama: "jam tembok", "krama-inggil": "jam tembok" },
  },
  {
    aliases: { id: ["jamban"], en: ["latrine"], zh: ["厕所"] },
    translation: { ngoko: "jamban", krama: "jamban", "krama-inggil": "jamban" },
  },
  {
    aliases: { id: ["jambu air"], en: ["water apple"], zh: ["水蒲桃"] },
    translation: { ngoko: "jambu banyu", krama: "jambu toya", "krama-inggil": "jambu toya" },
  },
  {
    aliases: { id: ["jambu biji"], en: ["guava"], zh: ["番石榴"] },
    translation: { ngoko: "jambu kluthuk", krama: "jambu kluthuk", "krama-inggil": "jambu kluthuk" },
  },
  {
    aliases: { id: ["jamin"], en: ["guarantee"], zh: ["保证"] },
    translation: { ngoko: "njamin", krama: "njamin", "krama-inggil": "njamin" },
  },
  {
    aliases: { id: ["jamu"], en: ["traditional herbal drink"], zh: ["传统草药饮品"] },
    translation: { ngoko: "jamu", krama: "jamu", "krama-inggil": "jamu" },
  },
  {
    aliases: { id: ["jamur"], en: ["mushroom"], zh: ["蘑菇"] },
    translation: { ngoko: "jamur", krama: "jamur", "krama-inggil": "jamur" },
  },
  {
    aliases: { id: ["janda"], en: ["widow","divorced woman"], zh: ["寡妇；离异女子"] },
    translation: { ngoko: "randha", krama: "randha", "krama-inggil": "randha" },
  },
  {
    aliases: { id: ["janggut"], en: ["beard"], zh: ["胡须"] },
    translation: { ngoko: "jenggot", krama: "jenggot", "krama-inggil": "kethepan" },
  },
  {
    aliases: { id: ["jangkau"], en: ["reach"], zh: ["够到"] },
    translation: { ngoko: "njangkau", krama: "njangkau", "krama-inggil": "njangkau" },
  },
  {
    aliases: { id: ["jangkrik"], en: ["cricket"], zh: ["蟋蟀"] },
    translation: { ngoko: "jangkrik", krama: "jangkrik", "krama-inggil": "jangkrik" },
  },
  {
    aliases: { id: ["jangkung"], en: ["lanky"], zh: ["瘦高的"] },
    translation: { ngoko: "jangkung", krama: "jangkung", "krama-inggil": "jangkung" },
  },
  {
    aliases: { id: ["janji"], en: ["promise"], zh: ["承诺"] },
    translation: { ngoko: "janji", krama: "janji", "krama-inggil": "janji" },
  },
  {
    aliases: { id: ["jantung"], en: ["heart"], zh: ["心脏"] },
    translation: { ngoko: "jantung", krama: "jantung", "krama-inggil": "jantung" },
  },
  {
    aliases: { id: ["Januari"], en: ["January"], zh: ["一月"] },
    translation: { ngoko: "Januari", krama: "Januari", "krama-inggil": "Januari" },
  },
  {
    aliases: { id: ["janur"], en: ["young coconut leaf"], zh: ["嫩椰叶"] },
    translation: { ngoko: "janur", krama: "janur", "krama-inggil": "janur" },
  },
  {
    aliases: { id: ["jarang"], en: ["rarely"], zh: ["很少"] },
    translation: { ngoko: "arang", krama: "arang", "krama-inggil": "arang" },
  },
  {
    aliases: { id: ["jari"], en: ["finger"], zh: ["手指"] },
    translation: { ngoko: "driji", krama: "driji", "krama-inggil": "racikan" },
  },
  {
    aliases: { id: ["jari kaki"], en: ["toe"], zh: ["脚趾"] },
    translation: { ngoko: "driji sikil", krama: "driji suku", "krama-inggil": "racikan suku" },
  },
  {
    aliases: { id: ["jari manis"], en: ["ring finger"], zh: ["无名指"] },
    translation: { ngoko: "driji manis", krama: "driji manis", "krama-inggil": "racikan manis" },
  },
  {
    aliases: { id: ["jari tengah"], en: ["middle finger"], zh: ["中指"] },
    translation: { ngoko: "driji tengah", krama: "driji tengah", "krama-inggil": "racikan tengah" },
  },
  {
    aliases: { id: ["jarik"], en: ["traditional wraparound cloth"], zh: ["传统裹身长布"] },
    translation: { ngoko: "jarik", krama: "nyamping", "krama-inggil": "nyamping" },
  },
  {
    aliases: { id: ["jarum"], en: ["needle"], zh: ["针"] },
    translation: { ngoko: "dom", krama: "dom", "krama-inggil": "dom" },
  },
  {
    aliases: { id: ["jas"], en: ["suit jacket"], zh: ["西装外套"] },
    translation: { ngoko: "jas", krama: "jas", "krama-inggil": "jas" },
  },
  {
    aliases: { id: ["jas hujan"], en: ["raincoat"], zh: ["雨衣"] },
    translation: { ngoko: "jas udan", krama: "jas jawah", "krama-inggil": "jas jawah" },
  },
  {
    aliases: { id: ["jati"], en: ["teak"], zh: ["柚木"] },
    translation: { ngoko: "jati", krama: "jati", "krama-inggil": "jati" },
  },
  {
    aliases: { id: ["jatilan"], en: ["traditional woven-horse dance"], zh: ["爪哇竹马舞"] },
    translation: { ngoko: "jathilan", krama: "jathilan", "krama-inggil": "jathilan" },
  },
  {
    aliases: { id: ["jauh"], en: ["far"], zh: ["远"] },
    translation: { ngoko: "adoh", krama: "tebih", "krama-inggil": "tebih" },
  },
  {
    aliases: { id: ["Jawa"], en: ["Java","Javanese"], zh: ["爪哇；爪哇语"] },
    translation: { ngoko: "Jawa", krama: "Jawi", "krama-inggil": "Jawi" },
  },
  {
    aliases: { id: ["jawab"], en: ["answer"], zh: ["回答"] },
    translation: { ngoko: "njawab", krama: "mangsuli", "krama-inggil": "mangsuli" },
  },
  {
    aliases: { id: ["jawaban"], en: ["answer"], zh: ["答案"] },
    translation: { ngoko: "wangsulan", krama: "wangsulan", "krama-inggil": "wangsulan" },
  },
  {
    aliases: { id: ["jelas"], en: ["clear"], zh: ["清楚"] },
    translation: { ngoko: "cetha", krama: "cetha", "krama-inggil": "cetha" },
  },
  {
    aliases: { id: ["jelaskan"], en: ["explain"], zh: ["解释"] },
    translation: { ngoko: "njlentrehake", krama: "njlentrehaken", "krama-inggil": "njlentrehaken" },
  },
  {
    aliases: { id: ["jembatan"], en: ["bridge"], zh: ["桥"] },
    translation: { ngoko: "kreteg", krama: "kreteg", "krama-inggil": "kreteg" },
  },
  {
    aliases: { id: ["jemput"], en: ["pick someone up"], zh: ["接"] },
    translation: { ngoko: "methuk", krama: "methuk", "krama-inggil": "mapag" },
  },
  {
    aliases: { id: ["jemu"], en: ["weary of something"], zh: ["腻烦"] },
    translation: { ngoko: "jenuh", krama: "jenuh", "krama-inggil": "jenuh" },
  },
  {
    aliases: { id: ["jemur"], en: ["dry in the sun"], zh: ["晾晒"] },
    translation: { ngoko: "mepe", krama: "mepe", "krama-inggil": "mepe" },
  },
  {
    aliases: { id: ["jemuran"], en: ["clothes-drying rack"], zh: ["晾衣架"] },
    translation: { ngoko: "pemean", krama: "pemean", "krama-inggil": "pemean" },
  },
  {
    aliases: { id: ["jenazah"], en: ["deceased body"], zh: ["遗体"] },
    translation: { ngoko: "layon", krama: "layon", "krama-inggil": "layon" },
  },
  {
    aliases: { id: ["jendela"], en: ["window"], zh: ["窗户"] },
    translation: { ngoko: "cendhela", krama: "cendhela", "krama-inggil": "cendhela" },
  },
  {
    aliases: { id: ["jendol"], en: ["protruding"], zh: ["凸出的"] },
    translation: { ngoko: "njendhol", krama: "njendhol", "krama-inggil": "njendhol" },
  },
  {
    aliases: { id: ["jengkel"], en: ["irritated"], zh: ["恼火"] },
    translation: { ngoko: "jengkel", krama: "jengkel", "krama-inggil": "jengkel" },
  },
  {
    aliases: { id: ["jengkelkan"], en: ["annoy"], zh: ["惹恼"] },
    translation: { ngoko: "nggawe jengkel", krama: "ndamel jengkel", "krama-inggil": "ndamel jengkel" },
  },
  {
    aliases: { id: ["jenuh"], en: ["fed up"], zh: ["厌烦"] },
    translation: { ngoko: "jeleh", krama: "jeleh", "krama-inggil": "jeleh" },
  },
  {
    aliases: { id: ["jerami"], en: ["rice straw"], zh: ["稻草"] },
    translation: { ngoko: "damen", krama: "damen", "krama-inggil": "damen" },
  },
  {
    aliases: { id: ["jerapah"], en: ["giraffe"], zh: ["长颈鹿"] },
    translation: { ngoko: "jerapah", krama: "jerapah", "krama-inggil": "jerapah" },
  },
  {
    aliases: { id: ["jerawat"], en: ["acne"], zh: ["痤疮"] },
    translation: { ngoko: "kukul", krama: "kukul", "krama-inggil": "kukul" },
  },
  {
    aliases: { id: ["jernih"], en: ["clear"], zh: ["清澈"] },
    translation: { ngoko: "bening", krama: "bening", "krama-inggil": "bening" },
  },
  {
    aliases: { id: ["jeruk"], en: ["orange"], zh: ["橙子"] },
    translation: { ngoko: "jeruk", krama: "jeruk", "krama-inggil": "jeruk" },
  },
  {
    aliases: { id: ["jeruk bali"], en: ["pomelo"], zh: ["柚子"] },
    translation: { ngoko: "jeruk bali", krama: "jeruk bali", "krama-inggil": "jeruk bali" },
  },
  {
    aliases: { id: ["jeruk nipis"], en: ["lime"], zh: ["青柠"] },
    translation: { ngoko: "jeruk pecel", krama: "jeruk pecel", "krama-inggil": "jeruk pecel" },
  },
  {
    aliases: { id: ["jijik"], en: ["disgusted"], zh: ["恶心"] },
    translation: { ngoko: "jijik", krama: "jijik", "krama-inggil": "jijik" },
  },
  {
    aliases: { id: ["jika"], en: ["if"], zh: ["如果"] },
    translation: { ngoko: "yen", krama: "menawi", "krama-inggil": "menawi" },
  },
  {
    aliases: { id: ["jika demikian"], en: ["if so","in that case"], zh: ["既然如此"] },
    translation: { ngoko: "yen mangkono", krama: "menawi mekaten", "krama-inggil": "menawi mekaten" },
  },
  {
    aliases: { id: ["jilat"], en: ["lick"], zh: ["舔"] },
    translation: { ngoko: "ndilat", krama: "ndilat", "krama-inggil": "ndilat" },
  },
  {
    aliases: { id: ["jilbab"], en: ["hijab"], zh: ["穆斯林女式头巾"] },
    translation: { ngoko: "jilbab", krama: "jilbab", "krama-inggil": "jilbab" },
  },
  {
    aliases: { id: ["jingga"], en: ["orange"], zh: ["橙色"] },
    translation: { ngoko: "jingga", krama: "jingga", "krama-inggil": "jingga" },
  },
  {
    aliases: { id: ["jingga kemerahan"], en: ["reddish orange"], zh: ["红橙色"] },
    translation: { ngoko: "jingga semu abang", krama: "jingga semu abrit", "krama-inggil": "jingga semu abrit" },
  },
  {
    aliases: { id: ["jingga muda"], en: ["light orange"], zh: ["浅橙色"] },
    translation: { ngoko: "jingga enom", krama: "jingga anem", "krama-inggil": "jingga anem" },
  },
  {
    aliases: { id: ["jingga tua"], en: ["deep orange"], zh: ["深橙色"] },
    translation: { ngoko: "jingga tuwa", krama: "jingga sepuh", "krama-inggil": "jingga sepuh" },
  },
  {
    aliases: { id: ["jinjing"], en: ["carry by hand at one's side"], zh: ["提"] },
    translation: { ngoko: "njinjing", krama: "njinjing", "krama-inggil": "njinjing" },
  },
  {
    aliases: { id: ["jinjit"], en: ["stand on tiptoe"], zh: ["踮脚"] },
    translation: { ngoko: "njinjit", krama: "njinjit", "krama-inggil": "njinjit" },
  },
  {
    aliases: { id: ["joglo"], en: ["traditional Javanese joglo house"], zh: ["爪哇传统尖顶房屋"] },
    translation: { ngoko: "joglo", krama: "joglo", "krama-inggil": "joglo" },
  },
  {
    aliases: { id: ["jok"], en: ["vehicle seat"], zh: ["车座"] },
    translation: { ngoko: "jok", krama: "jok", "krama-inggil": "jok" },
  },
  {
    aliases: { id: ["jongkok"], en: ["squat"], zh: ["蹲"] },
    translation: { ngoko: "ndhodhok", krama: "ndhodhok", "krama-inggil": "ndhodhok" },
  },
  {
    aliases: { id: ["joystick"], en: ["joystick"], zh: ["操纵杆"] },
    translation: { ngoko: "joystick", krama: "joystick", "krama-inggil": "joystick" },
  },
  {
    aliases: { id: ["jual"], en: ["sell"], zh: ["卖"] },
    translation: { ngoko: "adol", krama: "sade", "krama-inggil": "sade" },
  },
  {
    aliases: { id: ["juara"], en: ["champion"], zh: ["冠军"] },
    translation: { ngoko: "juwara", krama: "juwara", "krama-inggil": "juwara" },
  },
  {
    aliases: { id: ["jubah"], en: ["robe"], zh: ["长袍"] },
    translation: { ngoko: "jubah", krama: "jubah", "krama-inggil": "jubah" },
  },
  {
    aliases: { id: ["judes"], en: ["snappish"], zh: ["说话刻薄"] },
    translation: { ngoko: "judhes", krama: "judhes", "krama-inggil": "judhes" },
  },
  {
    aliases: { id: ["judo"], en: ["judo"], zh: ["柔道"] },
    translation: { ngoko: "judo", krama: "judo", "krama-inggil": "judo" },
  },
  {
    aliases: { id: ["juga"], en: ["also","too"], zh: ["也"] },
    translation: { ngoko: "uga", krama: "ugi", "krama-inggil": "ugi" },
  },
  {
    aliases: { id: ["jujur"], en: ["honest"], zh: ["诚实"] },
    translation: { ngoko: "jujur", krama: "jujur", "krama-inggil": "jujur" },
  },
  {
    aliases: { id: ["Juli"], en: ["July"], zh: ["七月"] },
    translation: { ngoko: "Juli", krama: "Juli", "krama-inggil": "Juli" },
  },
  {
    aliases: { id: ["Jumat"], en: ["Friday"], zh: ["星期五"] },
    translation: { ngoko: "Jemuwah", krama: "Jemuwah", "krama-inggil": "Jemuwah" },
  },
  {
    aliases: { id: ["Juni"], en: ["June"], zh: ["六月"] },
    translation: { ngoko: "Juni", krama: "Juni", "krama-inggil": "Juni" },
  },
  {
    aliases: { id: ["jurang"], en: ["ravine"], zh: ["深谷"] },
    translation: { ngoko: "jurang", krama: "jurang", "krama-inggil": "jurang" },
  },
  {
    aliases: { id: ["jus"], en: ["juice"], zh: ["果汁"] },
    translation: { ngoko: "jus", krama: "jus", "krama-inggil": "jus" },
  },
  {
    aliases: { id: ["justru karena"], en: ["precisely because"], zh: ["恰恰因为"] },
    translation: { ngoko: "malah amarga", krama: "malah amargi", "krama-inggil": "malah amargi" },
  },
  {
    aliases: { id: ["kabar"], en: ["inform"], zh: ["告知"] },
    translation: { ngoko: "ngabari", krama: "ngabari", "krama-inggil": "ngabari" },
  },
  {
    aliases: { id: ["kabari"], en: ["notify"], zh: ["通知"] },
    translation: { ngoko: "ngabari", krama: "ngabari", "krama-inggil": "ngabari" },
  },
  {
    aliases: { id: ["kabel"], en: ["cable"], zh: ["电缆"] },
    translation: { ngoko: "kabel", krama: "kabel", "krama-inggil": "kabel" },
  },
  {
    aliases: { id: ["kabul"], en: ["formal acceptance of a marriage offer"], zh: ["婚约承诺"] },
    translation: { ngoko: "kabul", krama: "kabul", "krama-inggil": "kabul" },
  },
  {
    aliases: { id: ["kabupaten"], en: ["regency"], zh: ["县"] },
    translation: { ngoko: "kabupaten", krama: "kabupaten", "krama-inggil": "kabupaten" },
  },
  {
    aliases: { id: ["kabut"], en: ["fog"], zh: ["雾"] },
    translation: { ngoko: "pedhut", krama: "pedhut", "krama-inggil": "pedhut" },
  },
  {
    aliases: { id: ["kacang hijau"], en: ["mung bean"], zh: ["绿豆"] },
    translation: { ngoko: "kacang ijo", krama: "kacang ijem", "krama-inggil": "kacang ijem" },
  },
  {
    aliases: { id: ["kacang panjang"], en: ["yardlong bean"], zh: ["豇豆"] },
    translation: { ngoko: "kacang lanjaran", krama: "kacang lanjaran", "krama-inggil": "kacang lanjaran" },
  },
  {
    aliases: { id: ["kacang tanah"], en: ["peanut"], zh: ["花生"] },
    translation: { ngoko: "kacang brol", krama: "kacang brol", "krama-inggil": "kacang brol" },
  },
  {
    aliases: { id: ["kadal"], en: ["lizard"], zh: ["蜥蜴"] },
    translation: { ngoko: "kadal", krama: "kadal", "krama-inggil": "kadal" },
  },
  {
    aliases: { id: ["kadang-kadang"], en: ["sometimes"], zh: ["有时"] },
    translation: { ngoko: "sok-sok", krama: "kala-kala", "krama-inggil": "kala-kala" },
  },
  {
    aliases: { id: ["kafan"], en: ["burial shroud"], zh: ["裹尸布"] },
    translation: { ngoko: "mori", krama: "mori", "krama-inggil": "mori" },
  },
  {
    aliases: { id: ["kafe"], en: ["cafe"], zh: ["咖啡馆"] },
    translation: { ngoko: "kafe", krama: "kafe", "krama-inggil": "kafe" },
  },
  {
    aliases: { id: ["kagum"], en: ["amazed"], zh: ["惊叹"] },
    translation: { ngoko: "gumun", krama: "gumun", "krama-inggil": "gumun" },
  },
  {
    aliases: { id: ["kagumi"], en: ["admire"], zh: ["钦佩"] },
    translation: { ngoko: "ngagumi", krama: "ngagumi", "krama-inggil": "ngagumi" },
  },
  {
    aliases: { id: ["kain"], en: ["fabric"], zh: ["布料"] },
    translation: { ngoko: "kain", krama: "kain", "krama-inggil": "kain" },
  },
  {
    aliases: { id: ["kain panjang"], en: ["long cloth worn as a wrap"], zh: ["裹身长布"] },
    translation: { ngoko: "jarik", krama: "sinjang", "krama-inggil": "sinjang" },
  },
  {
    aliases: { id: ["kakak"], en: ["older sibling"], zh: ["哥哥或姐姐"] },
    translation: { ngoko: "kakang", krama: "kakang", "krama-inggil": "raka" },
  },
  {
    aliases: { id: ["kakak ipar"], en: ["older sibling-in-law"], zh: ["年长的姻亲兄弟姐妹"] },
    translation: { ngoko: "kakang ipe", krama: "kakang ipe", "krama-inggil": "raka ipe" },
  },
  {
    aliases: { id: ["kakak laki-laki"], en: ["older brother","address for a young man"], zh: ["哥哥"] },
    translation: { ngoko: "mas", krama: "mas", "krama-inggil": "mas" },
  },
  {
    aliases: { id: ["kakak perempuan"], en: ["older sister","address for a young woman"], zh: ["姐姐"] },
    translation: { ngoko: "mbak", krama: "mbak", "krama-inggil": "mbak" },
  },
  {
    aliases: { id: ["kakao"], en: ["cacao"], zh: ["可可树"] },
    translation: { ngoko: "kakao", krama: "kakao", "krama-inggil": "kakao" },
  },
  {
    aliases: { id: ["kakatua"], en: ["cockatoo"], zh: ["凤头鹦鹉"] },
    translation: { ngoko: "kakatua", krama: "kakatua", "krama-inggil": "kakatua" },
  },
  {
    aliases: { id: ["kakek"], en: ["grandfather"], zh: ["爷爷；外公"] },
    translation: { ngoko: "simbah kakung", krama: "simbah kakung", "krama-inggil": "eyang kakung" },
  },
  {
    aliases: { id: ["kakek buyut"], en: ["great-grandfather"], zh: ["曾祖父；曾外祖父"] },
    translation: { ngoko: "simbah buyut lanang", krama: "simbah buyut jaler", "krama-inggil": "eyang buyut kakung" },
  },
  {
    aliases: { id: ["kaki"], en: ["foot","leg"], zh: ["脚；腿"] },
    translation: { ngoko: "sikil", krama: "suku", "krama-inggil": "suku" },
  },
  {
    aliases: { id: ["kaku"], en: ["stiff"], zh: ["僵硬的"] },
    translation: { ngoko: "kaku", krama: "kaku", "krama-inggil": "kaku" },
  },
  {
    aliases: { id: ["kalah"], en: ["lose"], zh: ["输"] },
    translation: { ngoko: "kalah", krama: "kawon", "krama-inggil": "kawon" },
  },
  {
    aliases: { id: ["kalau"], en: ["if","when"], zh: ["如果；要是"] },
    translation: { ngoko: "nek", krama: "menawi", "krama-inggil": "menawi" },
  },
  {
    aliases: { id: ["kalau tidak"], en: ["if not","otherwise"], zh: ["如果不；否则"] },
    translation: { ngoko: "yen ora", krama: "menawi boten", "krama-inggil": "menawi boten" },
  },
  {
    aliases: { id: ["kalaupun"], en: ["even if"], zh: ["就算"] },
    translation: { ngoko: "sanajan yen", krama: "sanajan menawi", "krama-inggil": "sanajan menawi" },
  },
  {
    aliases: { id: ["kalender"], en: ["calendar"], zh: ["日历"] },
    translation: { ngoko: "tanggalan", krama: "tanggalan", "krama-inggil": "tanggalan" },
  },
  {
    aliases: { id: ["bisa kah"], en: ["can"], zh: ["罐子"] },
    translation: { ngoko: "pareng", krama: "pareng", "krama-inggil": "pareng" },
  },
  {
    aliases: { id: ["kalian"], en: ["you all"], zh: ["你们"] },
    translation: { ngoko: "kowe kabeh", krama: "sampeyan sedaya", "krama-inggil": "panjenengan sedaya" },
  },
  {
    aliases: { id: ["kalian berdua"], en: ["the two of you"], zh: ["你们俩"] },
    translation: { ngoko: "kowe sakloron", krama: "sampeyan kekalih", "krama-inggil": "panjenengan kekalih" },
  },
  {
    aliases: { id: ["kalkulator"], en: ["calculator"], zh: ["计算器"] },
    translation: { ngoko: "kalkulator", krama: "kalkulator", "krama-inggil": "kalkulator" },
  },
  {
    aliases: { id: ["kalkun"], en: ["turkey"], zh: ["火鸡"] },
    translation: { ngoko: "kalkun", krama: "kalkun", "krama-inggil": "kalkun" },
  },
  {
    aliases: { id: ["kalong"], en: ["flying fox"], zh: ["狐蝠"] },
    translation: { ngoko: "kalong", krama: "kalong", "krama-inggil": "kalong" },
  },
  {
    aliases: { id: ["kalung"], en: ["necklace"], zh: ["项链"] },
    translation: { ngoko: "kalung", krama: "kalung", "krama-inggil": "kalung" },
  },
  {
    aliases: { id: ["kamar"], en: ["room","bedroom"], zh: ["房间；卧室"] },
    translation: { ngoko: "kamar", krama: "kamar", "krama-inggil": "kamar" },
  },
  {
    aliases: { id: ["kamar mandi"], en: ["bathroom"], zh: ["浴室"] },
    translation: { ngoko: "jedhing", krama: "jedhing", "krama-inggil": "jedhing" },
  },
  {
    aliases: { id: ["kamar tidur"], en: ["bedroom"], zh: ["卧室"] },
    translation: { ngoko: "kamar turu", krama: "kamar tilem", "krama-inggil": "kamar sare" },
  },
  {
    aliases: { id: ["kambing"], en: ["goat"], zh: ["山羊"] },
    translation: { ngoko: "wedhus", krama: "menda", "krama-inggil": "menda" },
  },
  {
    aliases: { id: ["kamera"], en: ["camera"], zh: ["相机"] },
    translation: { ngoko: "kamera", krama: "kamera", "krama-inggil": "kamera" },
  },
  {
    aliases: { id: ["kamerawan"], en: ["camera operator"], zh: ["摄像师"] },
    translation: { ngoko: "juru kamera", krama: "juru kamera", "krama-inggil": "juru kamera" },
  },
  {
    aliases: { id: ["kami"], en: ["we","us (excluding you)"], zh: ["我们（不包括你）"] },
    translation: { ngoko: "awake dhewe", krama: "kula sarencang", "krama-inggil": "kawula sedaya" },
  },
  {
    aliases: { id: ["kami berdua"], en: ["the two of us"], zh: ["我们俩"] },
    translation: { ngoko: "aku sakloron", krama: "kula kekalih", "krama-inggil": "kula kekalih" },
  },
  {
    aliases: { id: ["Kamis"], en: ["Thursday"], zh: ["星期四"] },
    translation: { ngoko: "Kemis", krama: "Kemis", "krama-inggil": "Kemis" },
  },
  {
    aliases: { id: ["kampung"], en: ["neighborhood"], zh: ["街坊"] },
    translation: { ngoko: "kampung", krama: "kampung", "krama-inggil": "kampung" },
  },
  {
    aliases: { id: ["kampus"], en: ["campus"], zh: ["校园"] },
    translation: { ngoko: "kampus", krama: "kampus", "krama-inggil": "kampus" },
  },
  {
    aliases: { id: ["kamu"], en: ["you"], zh: ["你"] },
    translation: { ngoko: "kowe", krama: "sampeyan", "krama-inggil": "panjenengan" },
  },
  {
    aliases: { id: ["kamu sendiri"], en: ["you yourself"], zh: ["你自己"] },
    translation: { ngoko: "kowe dhewe", krama: "sampeyan piyambak", "krama-inggil": "panjenengan piyambak" },
  },
  {
    aliases: { id: ["kamus"], en: ["dictionary"], zh: ["词典"] },
    translation: { ngoko: "kamus", krama: "kamus", "krama-inggil": "kamus" },
  },
  {
    aliases: { id: ["kanan"], en: ["right (direction)"], zh: ["右边"] },
    translation: { ngoko: "tengen", krama: "tengen", "krama-inggil": "tengen" },
  },
  {
    aliases: { id: ["kancing"], en: ["button"], zh: ["纽扣"] },
    translation: { ngoko: "benik", krama: "benik", "krama-inggil": "benik" },
  },
  {
    aliases: { id: ["kandang"], en: ["animal enclosure"], zh: ["畜栏"] },
    translation: { ngoko: "kandhang", krama: "kandhang", "krama-inggil": "kandhang" },
  },
  {
    aliases: { id: ["kandung kemih"], en: ["urinary bladder"], zh: ["膀胱"] },
    translation: { ngoko: "kandhung kemih", krama: "kandhung kemih", "krama-inggil": "kandhung kemih" },
  },
  {
    aliases: { id: ["kangkung"], en: ["water spinach"], zh: ["空心菜"] },
    translation: { ngoko: "kangkung", krama: "kangkung", "krama-inggil": "kangkung" },
  },
  {
    aliases: { id: ["kanguru"], en: ["kangaroo"], zh: ["袋鼠"] },
    translation: { ngoko: "kanguru", krama: "kanguru", "krama-inggil": "kanguru" },
  },
  {
    aliases: { id: ["kanker"], en: ["cancer"], zh: ["癌症"] },
    translation: { ngoko: "kanker", krama: "kanker", "krama-inggil": "kanker" },
  },
  {
    aliases: { id: ["kantin"], en: ["canteen"], zh: ["食堂"] },
    translation: { ngoko: "kantin", krama: "kantin", "krama-inggil": "kantin" },
  },
  {
    aliases: { id: ["kantong"], en: ["pouch"], zh: ["袋子"] },
    translation: { ngoko: "kanthong", krama: "kanthong", "krama-inggil": "kanthong" },
  },
  {
    aliases: { id: ["kantor"], en: ["office"], zh: ["办公室"] },
    translation: { ngoko: "kantor", krama: "kantor", "krama-inggil": "kantor" },
  },
  {
    aliases: { id: ["kantor polisi"], en: ["police station"], zh: ["警察局"] },
    translation: { ngoko: "kantor polisi", krama: "kantor polisi", "krama-inggil": "kantor polisi" },
  },
  {
    aliases: { id: ["kantor pos"], en: ["post office"], zh: ["邮局"] },
    translation: { ngoko: "kantor pos", krama: "kantor pos", "krama-inggil": "kantor pos" },
  },
  {
    aliases: { id: ["kapal"], en: ["ship"], zh: ["轮船"] },
    translation: { ngoko: "kapal", krama: "kapal", "krama-inggil": "kapal" },
  },
  {
    aliases: { id: ["kapan"], en: ["when"], zh: ["什么时候"] },
    translation: { ngoko: "kapan", krama: "kapan", "krama-inggil": "kapan" },
  },
  {
    aliases: { id: ["kapas"], en: ["cotton fiber"], zh: ["棉花"] },
    translation: { ngoko: "kapas", krama: "kapas", "krama-inggil": "kapas" },
  },
  {
    aliases: { id: ["kapsul"], en: ["capsule"], zh: ["胶囊"] },
    translation: { ngoko: "kapsul", krama: "kapsul", "krama-inggil": "kapsul" },
  },
  {
    aliases: { id: ["kapuk"], en: ["kapok tree"], zh: ["吉贝"] },
    translation: { ngoko: "randhu", krama: "randhu", "krama-inggil": "randhu" },
  },
  {
    aliases: { id: ["kapur"], en: ["chalk"], zh: ["粉笔"] },
    translation: { ngoko: "kapur", krama: "kapur", "krama-inggil": "kapur" },
  },
  {
    aliases: { id: ["karate"], en: ["karate"], zh: ["空手道"] },
    translation: { ngoko: "karate", krama: "karate", "krama-inggil": "karate" },
  },
  {
    aliases: { id: ["kardigan"], en: ["cardigan"], zh: ["开衫"] },
    translation: { ngoko: "kardigan", krama: "kardigan", "krama-inggil": "kardigan" },
  },
  {
    aliases: { id: ["karena"], en: ["because"], zh: ["因为"] },
    translation: { ngoko: "merga", krama: "amargi", "krama-inggil": "amargi" },
  },
  {
    aliases: { id: ["karet"], en: ["rubber tree"], zh: ["橡胶树"] },
    translation: { ngoko: "karet", krama: "karet", "krama-inggil": "karet" },
  },
  {
    aliases: { id: ["karpet"], en: ["carpet"], zh: ["地毯"] },
    translation: { ngoko: "karpet", krama: "karpet", "krama-inggil": "karpet" },
  },
  {
    aliases: { id: ["kartu"], en: ["playing card"], zh: ["扑克牌"] },
    translation: { ngoko: "kertu", krama: "kertu", "krama-inggil": "kertu" },
  },
  {
    aliases: { id: ["kartu debit"], en: ["debit card"], zh: ["借记卡"] },
    translation: { ngoko: "kertu debit", krama: "kertu debit", "krama-inggil": "kertu debit" },
  },
  {
    aliases: { id: ["kartu kredit"], en: ["credit card"], zh: ["信用卡"] },
    translation: { ngoko: "kertu kredit", krama: "kertu kredit", "krama-inggil": "kertu kredit" },
  },
  {
    aliases: { id: ["kartu memori"], en: ["memory card"], zh: ["存储卡"] },
    translation: { ngoko: "kertu memori", krama: "kertu memori", "krama-inggil": "kertu memori" },
  },
  {
    aliases: { id: ["kartu SIM"], en: ["SIM card"], zh: ["用户识别卡"] },
    translation: { ngoko: "kertu SIM", krama: "kertu SIM", "krama-inggil": "kertu SIM" },
  },
  {
    aliases: { id: ["karung"], en: ["sack"], zh: ["麻袋"] },
    translation: { ngoko: "karung", krama: "karung", "krama-inggil": "karung" },
  },
  {
    aliases: { id: ["kasa"], en: ["gauze"], zh: ["纱布"] },
    translation: { ngoko: "kasa", krama: "kasa", "krama-inggil": "kasa" },
  },
  {
    aliases: { id: ["kasar"], en: ["rude"], zh: ["粗鲁"] },
    translation: { ngoko: "kasar", krama: "kasar", "krama-inggil": "kasar" },
  },
  {
    aliases: { id: ["kasih"], en: ["affection"], zh: ["关爱"] },
    translation: { ngoko: "sih", krama: "sih", "krama-inggil": "sih" },
  },
  {
    aliases: { id: ["kasihani"], en: ["pity"], zh: ["怜悯"] },
    translation: { ngoko: "mesakake", krama: "mesakaken", "krama-inggil": "mesakaken" },
  },
  {
    aliases: { id: ["kasir"], en: ["cashier"], zh: ["收银员"] },
    translation: { ngoko: "kasir", krama: "kasir", "krama-inggil": "kasir" },
  },
  {
    aliases: { id: ["kasur"], en: ["mattress"], zh: ["床垫"] },
    translation: { ngoko: "kasur", krama: "kasur", "krama-inggil": "kasur" },
  },
  {
    aliases: { id: ["kata sandi"], en: ["password"], zh: ["密码"] },
    translation: { ngoko: "sandhi", krama: "sandhi", "krama-inggil": "sandhi" },
  },
  {
    aliases: { id: ["katak"], en: ["frog"], zh: ["青蛙"] },
    translation: { ngoko: "kodhok", krama: "kodhok", "krama-inggil": "kodhok" },
  },
  {
    aliases: { id: ["katarak"], en: ["cataract"], zh: ["白内障"] },
    translation: { ngoko: "katarak", krama: "katarak", "krama-inggil": "katarak" },
  },
  {
    aliases: { id: ["katun"], en: ["cotton fabric"], zh: ["棉布"] },
    translation: { ngoko: "katun", krama: "katun", "krama-inggil": "katun" },
  },
  {
    aliases: { id: ["kaus"], en: ["T-shirt"], zh: ["T恤"] },
    translation: { ngoko: "kaos", krama: "kaos", "krama-inggil": "kaos" },
  },
  {
    aliases: { id: ["kaus dalam"], en: ["undershirt"], zh: ["内衣汗衫"] },
    translation: { ngoko: "kaos njero", krama: "kaos lebet", "krama-inggil": "kaos lebet" },
  },
  {
    aliases: { id: ["kaus kaki"], en: ["socks"], zh: ["袜子"] },
    translation: { ngoko: "kaos sikil", krama: "kaos suku", "krama-inggil": "kaos sampeyan" },
  },
  {
    aliases: { id: ["kayu"], en: ["wood"], zh: ["木材"] },
    translation: { ngoko: "kayu", krama: "kajeng", "krama-inggil": "kajeng" },
  },
  {
    aliases: { id: ["ke"], en: ["to","toward"], zh: ["到；向"] },
    translation: { ngoko: "menyang", krama: "dhateng", "krama-inggil": "dhateng" },
  },
  {
    aliases: { id: ["ke atas"], en: ["upward"], zh: ["向上"] },
    translation: { ngoko: "menyang dhuwur", krama: "dhateng inggil", "krama-inggil": "dhateng inggil" },
  },
  {
    aliases: { id: ["ke bawah"], en: ["downward"], zh: ["向下"] },
    translation: { ngoko: "menyang ngisor", krama: "dhateng ngandhap", "krama-inggil": "dhateng ngandhap" },
  },
  {
    aliases: { id: ["ke belakang"], en: ["toward the back"], zh: ["向后"] },
    translation: { ngoko: "menyang mburi", krama: "dhateng wingking", "krama-inggil": "dhateng wingking" },
  },
  {
    aliases: { id: ["ke dalam"], en: ["inward"], zh: ["向内"] },
    translation: { ngoko: "menyang njero", krama: "dhateng lebet", "krama-inggil": "dhateng lebet" },
  },
  {
    aliases: { id: ["ke depan"], en: ["toward the front"], zh: ["向前"] },
    translation: { ngoko: "menyang ngarep", krama: "dhateng ngajeng", "krama-inggil": "dhateng ngajeng" },
  },
  {
    aliases: { id: ["ke kanan"], en: ["to the right"], zh: ["向右"] },
    translation: { ngoko: "menyang tengen", krama: "dhateng tengen", "krama-inggil": "dhateng tengen" },
  },
  {
    aliases: { id: ["ke kiri"], en: ["to the left"], zh: ["向左"] },
    translation: { ngoko: "menyang kiwa", krama: "dhateng kiwa", "krama-inggil": "dhateng kiwa" },
  },
  {
    aliases: { id: ["ke luar"], en: ["outward"], zh: ["向外"] },
    translation: { ngoko: "menyang njaba", krama: "dhateng njawi", "krama-inggil": "dhateng njawi" },
  },
  {
    aliases: { id: ["ke mana"], en: ["where to"], zh: ["去哪里"] },
    translation: { ngoko: "menyang ngendi", krama: "dhateng pundi", "krama-inggil": "dhateng pundi" },
  },
  {
    aliases: { id: ["ke mana saja"], en: ["to which places"], zh: ["去哪些地方"] },
    translation: { ngoko: "menyang ngendi wae", krama: "dhateng pundi kemawon", "krama-inggil": "dhateng pundi kemawon" },
  },
  {
    aliases: { id: ["ke mana-mana"], en: ["everywhere"], zh: ["到处"] },
    translation: { ngoko: "menyang ngendi-endi", krama: "dhateng pundi-pundi", "krama-inggil": "dhateng pundi-pundi" },
  },
  {
    aliases: { id: ["ke sana"], en: ["to over there"], zh: ["到那边"] },
    translation: { ngoko: "mrana", krama: "mrika", "krama-inggil": "mrika" },
  },
  {
    aliases: { id: ["ke sini"], en: ["to here"], zh: ["到这里"] },
    translation: { ngoko: "mrene", krama: "mriki", "krama-inggil": "mriki" },
  },
  {
    aliases: { id: ["ke situ"], en: ["to where you are"], zh: ["到你那里"] },
    translation: { ngoko: "mrono", krama: "mriku", "krama-inggil": "mriku" },
  },
  {
    aliases: { id: ["kebaya"], en: ["kebaya blouse"], zh: ["可巴雅上衣"] },
    translation: { ngoko: "kebaya", krama: "kebaya", "krama-inggil": "kebaya" },
  },
  {
    aliases: { id: ["keberangkatan"], en: ["departure"], zh: ["出发"] },
    translation: { ngoko: "budhalan", krama: "bidhalan", "krama-inggil": "bidhalan" },
  },
  {
    aliases: { id: ["kebetulan"], en: ["by chance"], zh: ["碰巧"] },
    translation: { ngoko: "ndilalah", krama: "ndilalah", "krama-inggil": "ndilalah" },
  },
  {
    aliases: { id: ["kebun"], en: ["garden"], zh: ["园子"] },
    translation: { ngoko: "kebon", krama: "kebon", "krama-inggil": "kebon" },
  },
  {
    aliases: { id: ["kebun binatang"], en: ["zoo"], zh: ["动物园"] },
    translation: { ngoko: "kebon binatang", krama: "kebon binatang", "krama-inggil": "kebon binatang" },
  },
  {
    aliases: { id: ["kecamatan"], en: ["subdistrict"], zh: ["分区"] },
    translation: { ngoko: "kecamatan", krama: "kecamatan", "krama-inggil": "kecamatan" },
  },
  {
    aliases: { id: ["kecap"], en: ["soy sauce"], zh: ["酱油"] },
    translation: { ngoko: "kecap", krama: "kecap", "krama-inggil": "kecap" },
  },
  {
    aliases: { id: ["kecelakaan"], en: ["accident"], zh: ["事故"] },
    translation: { ngoko: "kacilakan", krama: "kacilakan", "krama-inggil": "kacilakan" },
  },
  {
    aliases: { id: ["kecewa"], en: ["disappointed"], zh: ["失望"] },
    translation: { ngoko: "gela", krama: "gela", "krama-inggil": "gela" },
  },
  {
    aliases: { id: ["kecewakan"], en: ["disappoint"], zh: ["使失望"] },
    translation: { ngoko: "gawe kuciwa", krama: "damel kuciwa", "krama-inggil": "damel kuciwa" },
  },
  {
    aliases: { id: ["kecil"], en: ["small"], zh: ["小"] },
    translation: { ngoko: "cilik", krama: "alit", "krama-inggil": "alit" },
  },
  {
    aliases: { id: ["kecuali"], en: ["except","unless"], zh: ["除非；除了"] },
    translation: { ngoko: "kajaba", krama: "kajawi", "krama-inggil": "kajawi" },
  },
  {
    aliases: { id: ["kecuali jika"], en: ["unless"], zh: ["除非"] },
    translation: { ngoko: "kajaba yen", krama: "kajawi menawi", "krama-inggil": "kajawi menawi" },
  },
  {
    aliases: { id: ["kedatangan"], en: ["arrival"], zh: ["到达"] },
    translation: { ngoko: "tekane", krama: "dumuginipun", "krama-inggil": "rawuhipun" },
  },
  {
    aliases: { id: ["kedelai"], en: ["soybean"], zh: ["大豆"] },
    translation: { ngoko: "dhele", krama: "dhele", "krama-inggil": "dhele" },
  },
  {
    aliases: { id: ["kedip"], en: ["blink"], zh: ["眨眼"] },
    translation: { ngoko: "kedhep", krama: "kedhep", "krama-inggil": "kedhep" },
  },
  {
    aliases: { id: ["kedondong"], en: ["ambarella"], zh: ["太平洋榅桲"] },
    translation: { ngoko: "dhondhong", krama: "dhondhong", "krama-inggil": "dhondhong" },
  },
  {
    aliases: { id: ["kejam"], en: ["cruel"], zh: ["残忍"] },
    translation: { ngoko: "kejem", krama: "kejem", "krama-inggil": "kejem" },
  },
  {
    aliases: { id: ["kejang"], en: ["convulsion"], zh: ["抽搐"] },
    translation: { ngoko: "kejang", krama: "kejang", "krama-inggil": "kejang" },
  },
  {
    aliases: { id: ["keju"], en: ["cheese"], zh: ["奶酪"] },
    translation: { ngoko: "keju", krama: "keju", "krama-inggil": "keju" },
  },
  {
    aliases: { id: ["kejutkan"], en: ["startle"], zh: ["使吃惊"] },
    translation: { ngoko: "ngagetake", krama: "ngagetaken", "krama-inggil": "ngagetaken" },
  },
  {
    aliases: { id: ["kekar"], en: ["sturdy"], zh: ["健壮的"] },
    translation: { ngoko: "rosa", krama: "rosa", "krama-inggil": "rosa" },
  },
  {
    aliases: { id: ["kekeringan"], en: ["drought"], zh: ["干旱"] },
    translation: { ngoko: "ketiga dawa", krama: "ketiga panjang", "krama-inggil": "ketiga panjang" },
  },
  {
    aliases: { id: ["kelahiran"], en: ["birth"], zh: ["出生"] },
    translation: { ngoko: "lair", krama: "lair", "krama-inggil": "miyos" },
  },
  {
    aliases: { id: ["kelak"], en: ["in the future"], zh: ["将来"] },
    translation: { ngoko: "mbesuk", krama: "mbenjing", "krama-inggil": "mbenjing" },
  },
  {
    aliases: { id: ["kelambu"], en: ["mosquito net"], zh: ["蚊帐"] },
    translation: { ngoko: "klambu", krama: "klambu", "krama-inggil": "klambu" },
  },
  {
    aliases: { id: ["kelamin"], en: ["genitals"], zh: ["生殖器"] },
    translation: { ngoko: "kelamin", krama: "kelamin", "krama-inggil": "kelamin" },
  },
  {
    aliases: { id: ["kelapa"], en: ["coconut"], zh: ["椰子"] },
    translation: { ngoko: "krambil", krama: "krambil", "krama-inggil": "krambil" },
  },
  {
    aliases: { id: ["kelas"], en: ["classroom"], zh: ["教室"] },
    translation: { ngoko: "kelas", krama: "kelas", "krama-inggil": "kelas" },
  },
  {
    aliases: { id: ["kelelawar"], en: ["bat"], zh: ["蝙蝠"] },
    translation: { ngoko: "lawa", krama: "lawa", "krama-inggil": "lawa" },
  },
  {
    aliases: { id: ["kelenteng"], en: ["Chinese temple"], zh: ["中式庙宇"] },
    translation: { ngoko: "klentheng", krama: "klentheng", "krama-inggil": "klentheng" },
  },
  {
    aliases: { id: ["kelereng"], en: ["marble"], zh: ["弹珠"] },
    translation: { ngoko: "neker", krama: "neker", "krama-inggil": "neker" },
  },
  {
    aliases: { id: ["kelim"], en: ["hem"], zh: ["折边"] },
    translation: { ngoko: "kelim", krama: "kelim", "krama-inggil": "kelim" },
  },
  {
    aliases: { id: ["kelinci"], en: ["rabbit"], zh: ["兔子"] },
    translation: { ngoko: "terwelu", krama: "terwelu", "krama-inggil": "terwelu" },
  },
  {
    aliases: { id: ["kelingking"], en: ["little finger"], zh: ["小指"] },
    translation: { ngoko: "jenthik", krama: "jenthik", "krama-inggil": "jenthik" },
  },
  {
    aliases: { id: ["kelir"], en: ["shadow-puppet screen"], zh: ["皮影幕布"] },
    translation: { ngoko: "kelir", krama: "kelir", "krama-inggil": "kelir" },
  },
  {
    aliases: { id: ["kelola"], en: ["manage"], zh: ["管理"] },
    translation: { ngoko: "ngurus", krama: "ngurus", "krama-inggil": "ngurus" },
  },
  {
    aliases: { id: ["kelompok"], en: ["group"], zh: ["小组"] },
    translation: { ngoko: "kelompok", krama: "kelompok", "krama-inggil": "kelompok" },
  },
  {
    aliases: { id: ["kelopak mata"], en: ["eyelid"], zh: ["眼皮"] },
    translation: { ngoko: "tlapukan", krama: "tlapukan", "krama-inggil": "tlapukan" },
  },
  {
    aliases: { id: ["keluar"], en: ["go out"], zh: ["出去"] },
    translation: { ngoko: "metu", krama: "medal", "krama-inggil": "medal" },
  },
  {
    aliases: { id: ["keluarga"], en: ["family"], zh: ["家庭"] },
    translation: { ngoko: "kulawarga", krama: "kulawarga", "krama-inggil": "kulawarga" },
  },
  {
    aliases: { id: ["keluh"], en: ["complain"], zh: ["抱怨"] },
    translation: { ngoko: "sambat", krama: "nggresula", "krama-inggil": "nggresula" },
  },
  {
    aliases: { id: ["kemacetan"], en: ["traffic congestion"], zh: ["交通拥堵"] },
    translation: { ngoko: "kemacetan", krama: "kemacetan", "krama-inggil": "kemacetan" },
  },
  {
    aliases: { id: ["kemangi"], en: ["lemon basil"], zh: ["柠檬罗勒"] },
    translation: { ngoko: "kemangi", krama: "kemangi", "krama-inggil": "kemangi" },
  },
  {
    aliases: { id: ["kemarau"], en: ["dry season"], zh: ["旱季"] },
    translation: { ngoko: "ketiga", krama: "ketiga", "krama-inggil": "ketiga" },
  },
  {
    aliases: { id: ["kemarin"], en: ["yesterday"], zh: ["昨天"] },
    translation: { ngoko: "wingi", krama: "wingi", "krama-inggil": "wingi" },
  },
  {
    aliases: { id: ["kemarin lusa"], en: ["the day before yesterday"], zh: ["前天"] },
    translation: { ngoko: "rong dina kepungkur", krama: "kalih dinten kepengker", "krama-inggil": "kalih dinten kepengker" },
  },
  {
    aliases: { id: ["kemas"], en: ["pack"], zh: ["打包"] },
    translation: { ngoko: "ngepak", krama: "ngepak", "krama-inggil": "ngepak" },
  },
  {
    aliases: { id: ["kematian"], en: ["death"], zh: ["死亡"] },
    translation: { ngoko: "pati", krama: "pejah", "krama-inggil": "seda" },
  },
  {
    aliases: { id: ["kembali"], en: ["return"], zh: ["返回"] },
    translation: { ngoko: "bali", krama: "wangsul", "krama-inggil": "kondur" },
  },
  {
    aliases: { id: ["kembalian"], en: ["change"], zh: ["找零"] },
    translation: { ngoko: "susuk", krama: "susuk", "krama-inggil": "susuk" },
  },
  {
    aliases: { id: ["kembalikan"], en: ["return something"], zh: ["归还"] },
    translation: { ngoko: "mbalekake", krama: "mangsulaken", "krama-inggil": "mangsulaken" },
  },
  {
    aliases: { id: ["kembang sepatu"], en: ["hibiscus"], zh: ["朱槿"] },
    translation: { ngoko: "wora-wari", krama: "wora-wari", "krama-inggil": "wora-wari" },
  },
  {
    aliases: { id: ["kembung"], en: ["inflated"], zh: ["鼓胀的"] },
    translation: { ngoko: "mlembung", krama: "mlembung", "krama-inggil": "mlembung" },
  },
  {
    aliases: { id: ["kemeja"], en: ["button-up shirt"], zh: ["衬衫"] },
    translation: { ngoko: "kemeja", krama: "kemeja", "krama-inggil": "kemeja" },
  },
  {
    aliases: { id: ["kementerian"], en: ["ministry"], zh: ["部"] },
    translation: { ngoko: "kamentrian", krama: "kamentrian", "krama-inggil": "kamentrian" },
  },
  {
    aliases: { id: ["kemenyan"], en: ["benzoin incense"], zh: ["安息香"] },
    translation: { ngoko: "menyan", krama: "menyan", "krama-inggil": "menyan" },
  },
  {
    aliases: { id: ["kemiri"], en: ["candlenut"], zh: ["石栗"] },
    translation: { ngoko: "miri", krama: "miri", "krama-inggil": "miri" },
  },
  {
    aliases: { id: ["kemoceng"], en: ["feather duster"], zh: ["鸡毛掸子"] },
    translation: { ngoko: "sulak", krama: "sulak", "krama-inggil": "sulak" },
  },
  {
    aliases: { id: ["kempul"], en: ["small hanging gong"], zh: ["小悬锣"] },
    translation: { ngoko: "kempul", krama: "kempul", "krama-inggil": "kempul" },
  },
  {
    aliases: { id: ["kempyang"], en: ["paired small kettle gongs"], zh: ["成对小座锣"] },
    translation: { ngoko: "kempyang", krama: "kempyang", "krama-inggil": "kempyang" },
  },
  {
    aliases: { id: ["kemudian"], en: ["next","subsequently"], zh: ["接着"] },
    translation: { ngoko: "sabanjure", krama: "salajengipun", "krama-inggil": "salajengipun" },
  },
  {
    aliases: { id: ["kenali"], en: ["recognize"], zh: ["认出"] },
    translation: { ngoko: "ngenali", krama: "ngenali", "krama-inggil": "ngenali" },
  },
  {
    aliases: { id: ["kenang"], en: ["recollect"], zh: ["追忆"] },
    translation: { ngoko: "ngeling-eling", krama: "ngemut-emut", "krama-inggil": "ngemut-emut" },
  },
  {
    aliases: { id: ["kencang"], en: ["taut"], zh: ["绷紧的"] },
    translation: { ngoko: "kenceng", krama: "kenceng", "krama-inggil": "kenceng" },
  },
  {
    aliases: { id: ["kencur"], en: ["aromatic ginger"], zh: ["山柰"] },
    translation: { ngoko: "kencur", krama: "kencur", "krama-inggil": "kencur" },
  },
  {
    aliases: { id: ["kendaraan"], en: ["vehicle"], zh: ["交通工具"] },
    translation: { ngoko: "tumpakan", krama: "tumpakan", "krama-inggil": "titihan" },
  },
  {
    aliases: { id: ["kendati demikian"], en: ["nevertheless"], zh: ["尽管如此"] },
    translation: { ngoko: "sanajan mangkono", krama: "sanajan mekaten", "krama-inggil": "sanajan mekaten" },
  },
  {
    aliases: { id: ["kendi"], en: ["earthenware water jug"], zh: ["陶水壶"] },
    translation: { ngoko: "kendhi", krama: "kendhi", "krama-inggil": "kendhi" },
  },
  {
    aliases: { id: ["kendur"], en: ["slack"], zh: ["松弛的"] },
    translation: { ngoko: "kendho", krama: "kendho", "krama-inggil": "kendho" },
  },
  {
    aliases: { id: ["kenduri"], en: ["communal ritual feast"], zh: ["集体仪式宴席"] },
    translation: { ngoko: "kendhurèn", krama: "kendhurèn", "krama-inggil": "kendhurèn" },
  },
  {
    aliases: { id: ["kenong"], en: ["large kettle gong"], zh: ["大型座锣"] },
    translation: { ngoko: "kenong", krama: "kenong", "krama-inggil": "kenong" },
  },
  {
    aliases: { id: ["kental"], en: ["thick","viscous"], zh: ["黏稠"] },
    translation: { ngoko: "kenthel", krama: "kenthel", "krama-inggil": "kenthel" },
  },
  {
    aliases: { id: ["kentang"], en: ["potato"], zh: ["土豆"] },
    translation: { ngoko: "kenthang", krama: "kenthang", "krama-inggil": "kenthang" },
  },
  {
    aliases: { id: ["kentongan"], en: ["slit drum"], zh: ["木梆"] },
    translation: { ngoko: "kenthongan", krama: "kenthongan", "krama-inggil": "kenthongan" },
  },
  {
    aliases: { id: ["kenyal"], en: ["springy"], zh: ["有弹性的"] },
    translation: { ngoko: "kenyal", krama: "kenyal", "krama-inggil": "kenyal" },
  },
  {
    aliases: { id: ["kenyang"], en: ["full (after eating)"], zh: ["饱"] },
    translation: { ngoko: "wareg", krama: "tuwuk", "krama-inggil": "tuwuk" },
  },
  {
    aliases: { id: ["keong"], en: ["water snail"], zh: ["水螺"] },
    translation: { ngoko: "keong", krama: "keong", "krama-inggil": "keong" },
  },
  {
    aliases: { id: ["kepal"], en: ["clench one's fist"], zh: ["握拳"] },
    translation: { ngoko: "ngepel", krama: "ngepel", "krama-inggil": "ngepel" },
  },
  {
    aliases: { id: ["kepala"], en: ["head"], zh: ["头"] },
    translation: { ngoko: "endhas", krama: "sirah", "krama-inggil": "mustaka" },
  },
  {
    aliases: { id: ["kepala desa"], en: ["village head"], zh: ["村长"] },
    translation: { ngoko: "lurah", krama: "lurah", "krama-inggil": "lurah" },
  },
  {
    aliases: { id: ["kepala keluarga"], en: ["head of the family"], zh: ["一家之主"] },
    translation: { ngoko: "kepala kulawarga", krama: "kepala kulawarga", "krama-inggil": "kepala kulawarga" },
  },
  {
    aliases: { id: ["kepala sekolah"], en: ["school principal"], zh: ["校长"] },
    translation: { ngoko: "kepala sekolah", krama: "kepala sekolah", "krama-inggil": "kepala sekolah" },
  },
  {
    aliases: { id: ["kepiting"], en: ["crab"], zh: ["螃蟹"] },
    translation: { ngoko: "yuyu", krama: "yuyu", "krama-inggil": "yuyu" },
  },
  {
    aliases: { id: ["keponakan"], en: ["nephew","niece"], zh: ["侄子女；外甥子女"] },
    translation: { ngoko: "ponakan", krama: "kaponakan", "krama-inggil": "kaponakan" },
  },
  {
    aliases: { id: ["keputusan"], en: ["decision"], zh: ["决定"] },
    translation: { ngoko: "putusan", krama: "putusan", "krama-inggil": "putusan" },
  },
  {
    aliases: { id: ["kepyak"], en: ["metal clappers used in wayang"], zh: ["皮影戏金属响板"] },
    translation: { ngoko: "kepyak", krama: "kepyak", "krama-inggil": "kepyak" },
  },
  {
    aliases: { id: ["kerabat"], en: ["relatives"], zh: ["亲属"] },
    translation: { ngoko: "sanak", krama: "sanak", "krama-inggil": "sanak" },
  },
  {
    aliases: { id: ["kerah"], en: ["collar"], zh: ["衣领"] },
    translation: { ngoko: "krah", krama: "krah", "krama-inggil": "krah" },
  },
  {
    aliases: { id: ["keramas"], en: ["wash one's hair"], zh: ["洗头"] },
    translation: { ngoko: "kramas", krama: "kramas", "krama-inggil": "jamas" },
  },
  {
    aliases: { id: ["kerang"], en: ["clam"], zh: ["蛤蜊"] },
    translation: { ngoko: "kerang", krama: "kerang", "krama-inggil": "kerang" },
  },
  {
    aliases: { id: ["keranjang"], en: ["basket"], zh: ["篮子"] },
    translation: { ngoko: "kranjang", krama: "kranjang", "krama-inggil": "kranjang" },
  },
  {
    aliases: { id: ["keras"], en: ["unyielding"], zh: ["强硬"] },
    translation: { ngoko: "atos", krama: "atos", "krama-inggil": "atos" },
  },
  {
    aliases: { id: ["keras kepala"], en: ["stubborn"], zh: ["固执"] },
    translation: { ngoko: "wangkal", krama: "wangkal", "krama-inggil": "wangkal" },
  },
  {
    aliases: { id: ["keraton"], en: ["Javanese royal palace"], zh: ["爪哇王宫"] },
    translation: { ngoko: "kraton", krama: "kraton", "krama-inggil": "kraton" },
  },
  {
    aliases: { id: ["kerbau"], en: ["water buffalo"], zh: ["水牛"] },
    translation: { ngoko: "kebo", krama: "maesa", "krama-inggil": "maesa" },
  },
  {
    aliases: { id: ["kerdil"], en: ["stunted"], zh: ["矮小的"] },
    translation: { ngoko: "kunthet", krama: "kunthet", "krama-inggil": "kunthet" },
  },
  {
    aliases: { id: ["kereta"], en: ["train"], zh: ["火车"] },
    translation: { ngoko: "sepur", krama: "sepur", "krama-inggil": "sepur" },
  },
  {
    aliases: { id: ["kereta api"], en: ["train"], zh: ["火车"] },
    translation: { ngoko: "sepur", krama: "sepur", "krama-inggil": "sepur" },
  },
  {
    aliases: { id: ["kerikil"], en: ["gravel"], zh: ["碎石"] },
    translation: { ngoko: "krikil", krama: "krikil", "krama-inggil": "krikil" },
  },
  {
    aliases: { id: ["kering"], en: ["dry"], zh: ["干"] },
    translation: { ngoko: "garing", krama: "garing", "krama-inggil": "garing" },
  },
  {
    aliases: { id: ["keringat"], en: ["sweat"], zh: ["汗"] },
    translation: { ngoko: "kringet", krama: "kringet", "krama-inggil": "riwe" },
  },
  {
    aliases: { id: ["keringkan"], en: ["dry"], zh: ["弄干"] },
    translation: { ngoko: "nggaringake", krama: "nggaringaken", "krama-inggil": "nggaringaken" },
  },
  {
    aliases: { id: ["keriput"], en: ["wrinkled"], zh: ["起皱的"] },
    translation: { ngoko: "kisut", krama: "kisut", "krama-inggil": "kisut" },
  },
  {
    aliases: { id: ["keris"], en: ["kris dagger"], zh: ["克里斯短剑"] },
    translation: { ngoko: "keris", krama: "dhuwung", "krama-inggil": "dhuwung" },
  },
  {
    aliases: { id: ["keriting"], en: ["curly"], zh: ["卷曲的"] },
    translation: { ngoko: "kriting", krama: "kriting", "krama-inggil": "kriting" },
  },
  {
    aliases: { id: ["kerja"], en: ["work"], zh: ["工作"] },
    translation: { ngoko: "nyambut gawe", krama: "nyambut damel", "krama-inggil": "nyambut damel" },
  },
  {
    aliases: { id: ["kernet"], en: ["driver's assistant"], zh: ["随车助手"] },
    translation: { ngoko: "kernet", krama: "kernet", "krama-inggil": "kernet" },
  },
  {
    aliases: { id: ["kerok"], en: ["perform therapeutic skin scraping"], zh: ["刮痧"] },
    translation: { ngoko: "ngeroki", krama: "ngeroki", "krama-inggil": "ngeroki" },
  },
  {
    aliases: { id: ["kerongkongan"], en: ["esophagus"], zh: ["食管"] },
    translation: { ngoko: "krongkongan", krama: "krongkongan", "krama-inggil": "krongkongan" },
  },
  {
    aliases: { id: ["keropos"], en: ["porous and weakened"], zh: ["疏松多孔的"] },
    translation: { ngoko: "kropos", krama: "kropos", "krama-inggil": "kropos" },
  },
  {
    aliases: { id: ["kertas"], en: ["paper"], zh: ["纸"] },
    translation: { ngoko: "dluwang", krama: "dlancang", "krama-inggil": "dlancang" },
  },
  {
    aliases: { id: ["kerudung"], en: ["headscarf"], zh: ["头巾"] },
    translation: { ngoko: "kudhung", krama: "kudhung", "krama-inggil": "kudhung" },
  },
  {
    aliases: { id: ["keruh"], en: ["murky"], zh: ["浑浊"] },
    translation: { ngoko: "buthek", krama: "buthek", "krama-inggil": "buthek" },
  },
  {
    aliases: { id: ["kerupuk"], en: ["crispy crackers"], zh: ["脆片"] },
    translation: { ngoko: "krupuk", krama: "krupuk", "krama-inggil": "krupuk" },
  },
  {
    aliases: { id: ["kesal"], en: ["annoyed"], zh: ["气恼"] },
    translation: { ngoko: "mangkel", krama: "mangkel", "krama-inggil": "mangkel" },
  },
  {
    aliases: { id: ["kesat"], en: ["non-slippery"], zh: ["涩的"] },
    translation: { ngoko: "seret", krama: "seret", "krama-inggil": "seret" },
  },
  {
    aliases: { id: ["keseleo"], en: ["sprain"], zh: ["扭伤"] },
    translation: { ngoko: "kecethit", krama: "kecethit", "krama-inggil": "kecethit" },
  },
  {
    aliases: { id: ["kesemek"], en: ["persimmon"], zh: ["柿子"] },
    translation: { ngoko: "kesemek", krama: "kesemek", "krama-inggil": "kesemek" },
  },
  {
    aliases: { id: ["kesemutan"], en: ["pins and needles"], zh: ["麻刺感"] },
    translation: { ngoko: "gringgingen", krama: "gringgingen", "krama-inggil": "gringgingen" },
  },
  {
    aliases: { id: ["kesepian"], en: ["lonely"], zh: ["孤独"] },
    translation: { ngoko: "kasepen", krama: "kasepen", "krama-inggil": "kasepen" },
  },
  {
    aliases: { id: ["keset"], en: ["doormat"], zh: ["门垫"] },
    translation: { ngoko: "kesed", krama: "kesed", "krama-inggil": "kesed" },
  },
  {
    aliases: { id: ["ketan"], en: ["glutinous rice"], zh: ["糯米"] },
    translation: { ngoko: "ketan", krama: "ketan", "krama-inggil": "ketan" },
  },
  {
    aliases: { id: ["ketat"], en: ["tight-fitting"], zh: ["紧身的"] },
    translation: { ngoko: "sesek", krama: "sesek", "krama-inggil": "sesek" },
  },
  {
    aliases: { id: ["ketel"], en: ["kettle"], zh: ["烧水壶"] },
    translation: { ngoko: "ceret", krama: "ceret", "krama-inggil": "ceret" },
  },
  {
    aliases: { id: ["ketiak"], en: ["armpit"], zh: ["腋窝"] },
    translation: { ngoko: "kelek", krama: "kelek", "krama-inggil": "kelek" },
  },
  {
    aliases: { id: ["ketika"], en: ["when"], zh: ["当时"] },
    translation: { ngoko: "nalika", krama: "nalika", "krama-inggil": "nalika" },
  },
  {
    aliases: { id: ["ketoprak"], en: ["traditional Javanese theater"], zh: ["爪哇传统戏剧"] },
    translation: { ngoko: "kethoprak", krama: "kethoprak", "krama-inggil": "kethoprak" },
  },
  {
    aliases: { id: ["ketua"], en: ["chairperson"], zh: ["主席"] },
    translation: { ngoko: "ketua", krama: "ketua", "krama-inggil": "ketua" },
  },
  {
    aliases: { id: ["ketuk"], en: ["tap"], zh: ["敲打"] },
    translation: { ngoko: "ndhodhog", krama: "nuthuk", "krama-inggil": "nuthuk" },
  },
  {
    aliases: { id: ["ketumbar"], en: ["coriander seed"], zh: ["芫荽籽"] },
    translation: { ngoko: "tumbar", krama: "tumbar", "krama-inggil": "tumbar" },
  },
  {
    aliases: { id: ["ketupat"], en: ["rice cake boiled in woven palm leaves"], zh: ["椰叶米糕"] },
    translation: { ngoko: "kupat", krama: "kupat", "krama-inggil": "kupat" },
  },
  {
    aliases: { id: ["keturunan"], en: ["descendants","lineage"], zh: ["后代；血统"] },
    translation: { ngoko: "turunan", krama: "turunan", "krama-inggil": "turunan" },
  },
  {
    aliases: { id: ["khawatir"], en: ["worried","worry"], zh: ["担心"] },
    translation: { ngoko: "kuwatir", krama: "kuwatir", "krama-inggil": "kuwatir" },
  },
  {
    aliases: { id: ["khawatirkan"], en: ["worry about"], zh: ["担心"] },
    translation: { ngoko: "nguwatirake", krama: "nguwatosaken", "krama-inggil": "nguwatosaken" },
  },
  {
    aliases: { id: ["khitan"], en: ["circumcision"], zh: ["割礼"] },
    translation: { ngoko: "tetak", krama: "supit", "krama-inggil": "supit" },
  },
  {
    aliases: { id: ["khotbah"], en: ["sermon"], zh: ["讲道"] },
    translation: { ngoko: "khutbah", krama: "khutbah", "krama-inggil": "khutbah" },
  },
  {
    aliases: { id: ["kiai"], en: ["respected Islamic scholar"], zh: ["伊斯兰教长老"] },
    translation: { ngoko: "kyai", krama: "kyai", "krama-inggil": "kyai" },
  },
  {
    aliases: { id: ["kiamat"], en: ["Judgment Day"], zh: ["末日"] },
    translation: { ngoko: "kiamat", krama: "kiamat", "krama-inggil": "kiamat" },
  },
  {
    aliases: { id: ["kiblat"], en: ["direction of Islamic prayer"], zh: ["朝向"] },
    translation: { ngoko: "kiblat", krama: "kiblat", "krama-inggil": "kiblat" },
  },
  {
    aliases: { id: ["kijang"], en: ["muntjac"], zh: ["麂"] },
    translation: { ngoko: "kidang", krama: "kidang", "krama-inggil": "kidang" },
  },
  {
    aliases: { id: ["kilat"], en: ["lightning"], zh: ["闪电"] },
    translation: { ngoko: "kilat", krama: "kilat", "krama-inggil": "kilat" },
  },
  {
    aliases: { id: ["kimia"], en: ["chemistry"], zh: ["化学"] },
    translation: { ngoko: "kimia", krama: "kimia", "krama-inggil": "kimia" },
  },
  {
    aliases: { id: ["kinanti"], en: ["kinanthi poetic meter"], zh: ["基南蒂诗律"] },
    translation: { ngoko: "kinanthi", krama: "kinanthi", "krama-inggil": "kinanthi" },
  },
  {
    aliases: { id: ["kios"], en: ["kiosk"], zh: ["售货亭"] },
    translation: { ngoko: "kios", krama: "kios", "krama-inggil": "kios" },
  },
  {
    aliases: { id: ["kipas angin"], en: ["electric fan"], zh: ["电风扇"] },
    translation: { ngoko: "kipas angin", krama: "kipas angin", "krama-inggil": "kipas angin" },
  },
  {
    aliases: { id: ["kira-kira"], en: ["approximately"], zh: ["大约"] },
    translation: { ngoko: "kira-kira", krama: "kinten-kinten", "krama-inggil": "kinten-kinten" },
  },
  {
    aliases: { id: ["kiri"], en: ["left (direction)"], zh: ["左边"] },
    translation: { ngoko: "kiwa", krama: "kiwa", "krama-inggil": "kiwa" },
  },
  {
    aliases: { id: ["kirim"], en: ["send"], zh: ["寄送"] },
    translation: { ngoko: "ngirim", krama: "ngintun", "krama-inggil": "ngintun" },
  },
  {
    aliases: { id: ["kiriman"], en: ["shipment"], zh: ["寄送物品"] },
    translation: { ngoko: "kiriman", krama: "kintunan", "krama-inggil": "kintunan" },
  },
  {
    aliases: { id: ["kita"], en: ["we","us (including you)"], zh: ["我们（包括你）"] },
    translation: { ngoko: "awake dhewe", krama: "kita", "krama-inggil": "kita" },
  },
  {
    aliases: { id: ["kitab"], en: ["scripture"], zh: ["经书"] },
    translation: { ngoko: "kitab", krama: "kitab", "krama-inggil": "kitab" },
  },
  {
    aliases: { id: ["klakson"], en: ["horn"], zh: ["喇叭"] },
    translation: { ngoko: "klakson", krama: "klakson", "krama-inggil": "klakson" },
  },
  {
    aliases: { id: ["klepon"], en: ["palm-sugar-filled glutinous rice balls"], zh: ["棕榈糖馅糯米球"] },
    translation: { ngoko: "klepon", krama: "klepon", "krama-inggil": "klepon" },
  },
  {
    aliases: { id: ["klinik"], en: ["clinic"], zh: ["诊所"] },
    translation: { ngoko: "klinik", krama: "klinik", "krama-inggil": "klinik" },
  },
  {
    aliases: { id: ["Kliwon"], en: ["Kliwon, a Javanese five-day-cycle day"], zh: ["爪哇五日历的克利翁日"] },
    translation: { ngoko: "Kliwon", krama: "Kliwon", "krama-inggil": "Kliwon" },
  },
  {
    aliases: { id: ["knalpot"], en: ["exhaust pipe"], zh: ["排气管"] },
    translation: { ngoko: "knalpot", krama: "knalpot", "krama-inggil": "knalpot" },
  },
  {
    aliases: { id: ["kobra"], en: ["cobra"], zh: ["眼镜蛇"] },
    translation: { ngoko: "ula kobra", krama: "sawer kobra", "krama-inggil": "sawer kobra" },
  },
  {
    aliases: { id: ["kode batang"], en: ["barcode"], zh: ["条形码"] },
    translation: { ngoko: "barcode", krama: "barcode", "krama-inggil": "barcode" },
  },
  {
    aliases: { id: ["kode QR"], en: ["QR code"], zh: ["二维码"] },
    translation: { ngoko: "kode QR", krama: "kode QR", "krama-inggil": "kode QR" },
  },
  {
    aliases: { id: ["kodok"], en: ["toad"], zh: ["蟾蜍"] },
    translation: { ngoko: "bangkong", krama: "bangkong", "krama-inggil": "bangkong" },
  },
  {
    aliases: { id: ["koin"], en: ["coin"], zh: ["硬币"] },
    translation: { ngoko: "dhuwit recèh", krama: "arta recèh", "krama-inggil": "arta recèh" },
  },
  {
    aliases: { id: ["koki"], en: ["cook"], zh: ["厨师"] },
    translation: { ngoko: "juru masak", krama: "juru masak", "krama-inggil": "juru masak" },
  },
  {
    aliases: { id: ["kolak"], en: ["sweet coconut milk dessert"], zh: ["椰浆甜汤"] },
    translation: { ngoko: "kolak", krama: "kolak", "krama-inggil": "kolak" },
  },
  {
    aliases: { id: ["kolam"], en: ["pond"], zh: ["池塘"] },
    translation: { ngoko: "blumbang", krama: "blumbang", "krama-inggil": "blumbang" },
  },
  {
    aliases: { id: ["kolam renang"], en: ["swimming pool"], zh: ["游泳池"] },
    translation: { ngoko: "kolam renang", krama: "kolam renang", "krama-inggil": "kolam renang" },
  },
  {
    aliases: { id: ["kompor"], en: ["stove"], zh: ["炉子"] },
    translation: { ngoko: "kompor", krama: "kompor", "krama-inggil": "kompor" },
  },
  {
    aliases: { id: ["kompos"], en: ["compost"], zh: ["堆肥"] },
    translation: { ngoko: "kompos", krama: "kompos", "krama-inggil": "kompos" },
  },
  {
    aliases: { id: ["kompres"], en: ["apply a compress"], zh: ["敷"] },
    translation: { ngoko: "ngompres", krama: "ngompres", "krama-inggil": "ngompres" },
  },
  {
    aliases: { id: ["komputer"], en: ["computer"], zh: ["电脑"] },
    translation: { ngoko: "komputer", krama: "komputer", "krama-inggil": "komputer" },
  },
  {
    aliases: { id: ["kondektur"], en: ["conductor"], zh: ["乘务员"] },
    translation: { ngoko: "kondhèktur", krama: "kondhèktur", "krama-inggil": "kondhèktur" },
  },
  {
    aliases: { id: ["koper"], en: ["suitcase"], zh: ["行李箱"] },
    translation: { ngoko: "koper", krama: "koper", "krama-inggil": "koper" },
  },
  {
    aliases: { id: ["kopi"], en: ["coffee"], zh: ["咖啡"] },
    translation: { ngoko: "kopi", krama: "kopi", "krama-inggil": "kopi" },
  },
  {
    aliases: { id: ["kopling"], en: ["clutch"], zh: ["离合器"] },
    translation: { ngoko: "kopling", krama: "kopling", "krama-inggil": "kopling" },
  },
  {
    aliases: { id: ["koran"], en: ["newspaper"], zh: ["报纸"] },
    translation: { ngoko: "koran", krama: "koran", "krama-inggil": "koran" },
  },
  {
    aliases: { id: ["korek api"], en: ["lighter"], zh: ["打火机"] },
    translation: { ngoko: "korèk", krama: "korèk", "krama-inggil": "korèk" },
  },
  {
    aliases: { id: ["kos"], en: ["boarding house"], zh: ["出租寄宿房"] },
    translation: { ngoko: "kos", krama: "kos", "krama-inggil": "kos" },
  },
  {
    aliases: { id: ["kosong"], en: ["empty"], zh: ["空的"] },
    translation: { ngoko: "kothong", krama: "kothong", "krama-inggil": "kothong" },
  },
  {
    aliases: { id: ["kosongkan"], en: ["empty"], zh: ["清空"] },
    translation: { ngoko: "ngosongake", krama: "ngosongaken", "krama-inggil": "ngosongaken" },
  },
  {
    aliases: { id: ["kota"], en: ["city"], zh: ["城市"] },
    translation: { ngoko: "kutha", krama: "kitha", "krama-inggil": "kitha" },
  },
  {
    aliases: { id: ["kotak"], en: ["box-shaped"], zh: ["方盒状的"] },
    translation: { ngoko: "kothak", krama: "kothak", "krama-inggil": "kothak" },
  },
  {
    aliases: { id: ["kotor"], en: ["dirty"], zh: ["脏"] },
    translation: { ngoko: "reged", krama: "reged", "krama-inggil": "reged" },
  },
  {
    aliases: { id: ["koyak"], en: ["ripped open"], zh: ["破裂的"] },
    translation: { ngoko: "bedhah", krama: "bedhah", "krama-inggil": "bedhah" },
  },
  {
    aliases: { id: ["kram"], en: ["cramp"], zh: ["抽筋"] },
    translation: { ngoko: "kram", krama: "kram", "krama-inggil": "kram" },
  },
  {
    aliases: { id: ["kreatif"], en: ["creative"], zh: ["有创造力"] },
    translation: { ngoko: "kreatif", krama: "kreatif", "krama-inggil": "kreatif" },
  },
  {
    aliases: { id: ["krem"], en: ["cream"], zh: ["奶油色"] },
    translation: { ngoko: "krem", krama: "krem", "krama-inggil": "krem" },
  },
  {
    aliases: { id: ["kritik"], en: ["criticize"], zh: ["批评"] },
    translation: { ngoko: "ngritik", krama: "ngritik", "krama-inggil": "ngritik" },
  },
  {
    aliases: { id: ["kritis"], en: ["critical-minded"], zh: ["有批判性思维"] },
    translation: { ngoko: "kritis", krama: "kritis", "krama-inggil": "kritis" },
  },
  {
    aliases: { id: ["kuat"], en: ["strong"], zh: ["强壮；有力"] },
    translation: { ngoko: "kuwat", krama: "kiyat", "krama-inggil": "kiyat" },
  },
  {
    aliases: { id: ["kubis"], en: ["cabbage"], zh: ["卷心菜"] },
    translation: { ngoko: "kobis", krama: "kobis", "krama-inggil": "kobis" },
  },
  {
    aliases: { id: ["kucek"], en: ["rub clothes by hand"], zh: ["搓洗"] },
    translation: { ngoko: "ngucek", krama: "ngucek", "krama-inggil": "ngucek" },
  },
  {
    aliases: { id: ["kucing"], en: ["cat"], zh: ["猫"] },
    translation: { ngoko: "kucing", krama: "kucing", "krama-inggil": "kucing" },
  },
  {
    aliases: { id: ["kuda"], en: ["horse"], zh: ["马"] },
    translation: { ngoko: "jaran", krama: "kuda", "krama-inggil": "kuda" },
  },
  {
    aliases: { id: ["kuda lumping"], en: ["woven bamboo horse prop"], zh: ["编织竹马道具"] },
    translation: { ngoko: "jaran képang", krama: "jaran képang", "krama-inggil": "jaran képang" },
  },
  {
    aliases: { id: ["kuda nil"], en: ["hippopotamus"], zh: ["河马"] },
    translation: { ngoko: "kuda nil", krama: "kuda nil", "krama-inggil": "kuda nil" },
  },
  {
    aliases: { id: ["kudis"], en: ["scabies"], zh: ["疥疮"] },
    translation: { ngoko: "gudhig", krama: "gudhig", "krama-inggil": "gudhig" },
  },
  {
    aliases: { id: ["kue"], en: ["cake or sweet snack"], zh: ["糕点"] },
    translation: { ngoko: "jajan", krama: "jajan", "krama-inggil": "jajan" },
  },
  {
    aliases: { id: ["kue lapis"], en: ["steamed layered cake"], zh: ["千层蒸糕"] },
    translation: { ngoko: "lapis", krama: "lapis", "krama-inggil": "lapis" },
  },
  {
    aliases: { id: ["kuitansi"], en: ["payment receipt"], zh: ["收据"] },
    translation: { ngoko: "kwitansi", krama: "kwitansi", "krama-inggil": "kwitansi" },
  },
  {
    aliases: { id: ["kuku"], en: ["nail"], zh: ["指甲"] },
    translation: { ngoko: "kuku", krama: "kuku", "krama-inggil": "kenaka" },
  },
  {
    aliases: { id: ["kukus"], en: ["steam"], zh: ["蒸"] },
    translation: { ngoko: "ngukus", krama: "ngukus", "krama-inggil": "ngukus" },
  },
  {
    aliases: { id: ["kukusan"], en: ["steaming basket"], zh: ["蒸笼"] },
    translation: { ngoko: "kukusan", krama: "kukusan", "krama-inggil": "kukusan" },
  },
  {
    aliases: { id: ["kulit"], en: ["skin"], zh: ["皮肤"] },
    translation: { ngoko: "lulang", krama: "cucal", "krama-inggil": "cucal" },
  },
  {
    aliases: { id: ["kulit kayu"], en: ["bark"], zh: ["树皮"] },
    translation: { ngoko: "babakan", krama: "babakan", "krama-inggil": "babakan" },
  },
  {
    aliases: { id: ["kulkas"], en: ["refrigerator"], zh: ["冰箱"] },
    translation: { ngoko: "kulkas", krama: "kulkas", "krama-inggil": "kulkas" },
  },
  {
    aliases: { id: ["kulum"], en: ["hold or suck in the mouth"], zh: ["含"] },
    translation: { ngoko: "ngemut", krama: "ngemut", "krama-inggil": "ngemut" },
  },
  {
    aliases: { id: ["kumal"], en: ["shabby"], zh: ["破旧的"] },
    translation: { ngoko: "kumel", krama: "kumel", "krama-inggil": "kumel" },
  },
  {
    aliases: { id: ["kumis"], en: ["mustache"], zh: ["小胡子"] },
    translation: { ngoko: "kumis", krama: "kumis", "krama-inggil": "rawis" },
  },
  {
    aliases: { id: ["kumpul"], en: ["collect"], zh: ["收集"] },
    translation: { ngoko: "nglumpukake", krama: "ngempalaken", "krama-inggil": "ngempalaken" },
  },
  {
    aliases: { id: ["kumpulkan"], en: ["gather"], zh: ["收集"] },
    translation: { ngoko: "nglumpukake", krama: "nglumpukaken", "krama-inggil": "nglumpukaken" },
  },
  {
    aliases: { id: ["kumur"], en: ["rinse one's mouth"], zh: ["漱口"] },
    translation: { ngoko: "kemu", krama: "kemu", "krama-inggil": "kemu" },
  },
  {
    aliases: { id: ["kunci"], en: ["key"], zh: ["钥匙"] },
    translation: { ngoko: "kunci", krama: "kunci", "krama-inggil": "kunci" },
  },
  {
    aliases: { id: ["kuncup"], en: ["closed up"], zh: ["合拢的"] },
    translation: { ngoko: "mingkup", krama: "mingkup", "krama-inggil": "mingkup" },
  },
  {
    aliases: { id: ["kuning"], en: ["yellow"], zh: ["黄色"] },
    translation: { ngoko: "kuning", krama: "jene", "krama-inggil": "jene" },
  },
  {
    aliases: { id: ["kuning emas"], en: ["golden yellow"], zh: ["金黄色"] },
    translation: { ngoko: "kuning emas", krama: "jene emas", "krama-inggil": "jene emas" },
  },
  {
    aliases: { id: ["kuning gading"], en: ["ivory yellow"], zh: ["象牙黄"] },
    translation: { ngoko: "kuning gadhing", krama: "jene gadhing", "krama-inggil": "jene gadhing" },
  },
  {
    aliases: { id: ["kuning kehijauan"], en: ["greenish yellow"], zh: ["绿黄色"] },
    translation: { ngoko: "kuning semu ijo", krama: "jene semu ijem", "krama-inggil": "jene semu ijem" },
  },
  {
    aliases: { id: ["kuning kunyit"], en: ["turmeric yellow"], zh: ["姜黄色"] },
    translation: { ngoko: "kuning kunir", krama: "jene kunir", "krama-inggil": "jene kunir" },
  },
  {
    aliases: { id: ["kuning lemon"], en: ["lemon yellow"], zh: ["柠檬黄"] },
    translation: { ngoko: "kuning lemon", krama: "jene lemon", "krama-inggil": "jene lemon" },
  },
  {
    aliases: { id: ["kuning muda"], en: ["light yellow"], zh: ["浅黄色"] },
    translation: { ngoko: "kuning enom", krama: "jene anem", "krama-inggil": "jene anem" },
  },
  {
    aliases: { id: ["kuning mustard"], en: ["mustard yellow"], zh: ["芥末黄"] },
    translation: { ngoko: "kuning mustard", krama: "jene mustard", "krama-inggil": "jene mustard" },
  },
  {
    aliases: { id: ["kuning pastel"], en: ["pastel yellow"], zh: ["柔黄色"] },
    translation: { ngoko: "kuning pastel", krama: "jene pastel", "krama-inggil": "jene pastel" },
  },
  {
    aliases: { id: ["kuning pucat"], en: ["pale yellow"], zh: ["淡黄色"] },
    translation: { ngoko: "kuning pucet", krama: "jene pucet", "krama-inggil": "jene pucet" },
  },
  {
    aliases: { id: ["kuning terang"], en: ["bright yellow"], zh: ["亮黄色"] },
    translation: { ngoko: "kuning padhang", krama: "jene padhang", "krama-inggil": "jene padhang" },
  },
  {
    aliases: { id: ["kuning tua"], en: ["deep yellow"], zh: ["深黄色"] },
    translation: { ngoko: "kuning tuwa", krama: "jene sepuh", "krama-inggil": "jene sepuh" },
  },
  {
    aliases: { id: ["kunjung"], en: ["visit"], zh: ["拜访"] },
    translation: { ngoko: "marani", krama: "murugi", "krama-inggil": "sowan" },
  },
  {
    aliases: { id: ["kuntul"], en: ["egret"], zh: ["白鹭"] },
    translation: { ngoko: "kuntul", krama: "kuntul", "krama-inggil": "kuntul" },
  },
  {
    aliases: { id: ["kunyah"], en: ["chew"], zh: ["咀嚼"] },
    translation: { ngoko: "ngunyah", krama: "nggayem", "krama-inggil": "mamah" },
  },
  {
    aliases: { id: ["kunyit"], en: ["turmeric"], zh: ["姜黄"] },
    translation: { ngoko: "kunir", krama: "kunir", "krama-inggil": "kunir" },
  },
  {
    aliases: { id: ["kupas"], en: ["peel"], zh: ["削皮"] },
    translation: { ngoko: "ngonceki", krama: "ngonceki", "krama-inggil": "ngonceki" },
  },
  {
    aliases: { id: ["kupu-kupu"], en: ["butterfly"], zh: ["蝴蝶"] },
    translation: { ngoko: "kupu", krama: "kupu", "krama-inggil": "kupu" },
  },
  {
    aliases: { id: ["kura-kura"], en: ["turtle"], zh: ["龟"] },
    translation: { ngoko: "kura-kura", krama: "kura-kura", "krama-inggil": "kura-kura" },
  },
  {
    aliases: { id: ["kurang"], en: ["insufficient"], zh: ["不足"] },
    translation: { ngoko: "kurang", krama: "kirang", "krama-inggil": "kirang" },
  },
  {
    aliases: { id: ["kurap"], en: ["ringworm"], zh: ["体癣"] },
    translation: { ngoko: "kurap", krama: "kurap", "krama-inggil": "kurap" },
  },
  {
    aliases: { id: ["kuras"], en: ["drain and clean"], zh: ["排水清洗"] },
    translation: { ngoko: "nguras", krama: "nguras", "krama-inggil": "nguras" },
  },
  {
    aliases: { id: ["kurir"], en: ["courier"], zh: ["快递员"] },
    translation: { ngoko: "kurir", krama: "kurir", "krama-inggil": "kurir" },
  },
  {
    aliases: { id: ["kurma"], en: ["date"], zh: ["椰枣"] },
    translation: { ngoko: "kurma", krama: "kurma", "krama-inggil": "kurma" },
  },
  {
    aliases: { id: ["kursi"], en: ["chair"], zh: ["椅子"] },
    translation: { ngoko: "kursi", krama: "kursi", "krama-inggil": "kursi" },
  },
  {
    aliases: { id: ["kurus"], en: ["skinny"], zh: ["瘦的"] },
    translation: { ngoko: "kuru", krama: "kera", "krama-inggil": "kera" },
  },
  {
    aliases: { id: ["kusut"], en: ["wrinkled"], zh: ["皱的"] },
    translation: { ngoko: "lecek", krama: "lecek", "krama-inggil": "lecek" },
  },
  {
    aliases: { id: ["kutang"], en: ["bra"], zh: ["胸罩"] },
    translation: { ngoko: "kutang", krama: "kutang", "krama-inggil": "kutang" },
  },
  {
    aliases: { id: ["kutilang"], en: ["sooty-headed bulbul"], zh: ["白喉红臀鹎"] },
    translation: { ngoko: "kutilang", krama: "kutilang", "krama-inggil": "kutilang" },
  },
  {
    aliases: { id: ["kutip"], en: ["quote"], zh: ["引用"] },
    translation: { ngoko: "ngutip", krama: "ngutip", "krama-inggil": "ngutip" },
  },
  {
    aliases: { id: ["kutuk"], en: ["curse someone"], zh: ["诅咒"] },
    translation: { ngoko: "nyupatani", krama: "nyupatani", "krama-inggil": "nyupatani" },
  },
  {
    aliases: { id: ["laba"], en: ["profit"], zh: ["利润"] },
    translation: { ngoko: "bathi", krama: "bathi", "krama-inggil": "bathi" },
  },
  {
    aliases: { id: ["laba-laba"], en: ["spider"], zh: ["蜘蛛"] },
    translation: { ngoko: "onggo-onggo", krama: "onggo-onggo", "krama-inggil": "onggo-onggo" },
  },
  {
    aliases: { id: ["laboratorium"], en: ["laboratory"], zh: ["实验室"] },
    translation: { ngoko: "laboratorium", krama: "laboratorium", "krama-inggil": "laboratorium" },
  },
  {
    aliases: { id: ["labu"], en: ["pumpkin"], zh: ["南瓜"] },
    translation: { ngoko: "waluh", krama: "waluh", "krama-inggil": "waluh" },
  },
  {
    aliases: { id: ["labuhan"], en: ["ritual presentation of offerings at a sacred natural site"], zh: ["在自然圣地举行的献祭仪式"] },
    translation: { ngoko: "labuhan", krama: "labuhan", "krama-inggil": "labuhan" },
  },
  {
    aliases: { id: ["laci"], en: ["drawer"], zh: ["抽屉"] },
    translation: { ngoko: "laci", krama: "laci", "krama-inggil": "laci" },
  },
  {
    aliases: { id: ["ladang"], en: ["dry field"], zh: ["旱田"] },
    translation: { ngoko: "tegal", krama: "tegal", "krama-inggil": "tegal" },
  },
  {
    aliases: { id: ["lagi"], en: ["again","still"], zh: ["再；还"] },
    translation: { ngoko: "maneh", krama: "malih", "krama-inggil": "malih" },
  },
  {
    aliases: { id: ["lagi pula"], en: ["besides","moreover"], zh: ["而且"] },
    translation: { ngoko: "tur", krama: "tur", "krama-inggil": "tur" },
  },
  {
    aliases: { id: ["lahir"], en: ["to be born"], zh: ["出生"] },
    translation: { ngoko: "lair", krama: "lair", "krama-inggil": "miyos" },
  },
  {
    aliases: { id: ["lakon"], en: ["dramatic story"], zh: ["戏剧情节"] },
    translation: { ngoko: "lakon", krama: "lakon", "krama-inggil": "lakon" },
  },
  {
    aliases: { id: ["lalat"], en: ["fly"], zh: ["苍蝇"] },
    translation: { ngoko: "laler", krama: "laler", "krama-inggil": "laler" },
  },
  {
    aliases: { id: ["lalu"], en: ["then"], zh: ["然后"] },
    translation: { ngoko: "banjur", krama: "lajeng", "krama-inggil": "lajeng" },
  },
  {
    aliases: { id: ["lama"], en: ["long","old"], zh: ["久；旧"] },
    translation: { ngoko: "lawas", krama: "dangu", "krama-inggil": "dangu" },
  },
  {
    aliases: { id: ["lama tidak bertemu"], en: ["long time no see"], zh: ["好久不见"] },
    translation: { ngoko: "suwe ora ketemu", krama: "dangu boten kepanggih", "krama-inggil": "dangu boten kepanggih" },
  },
  {
    aliases: { id: ["lamaran"], en: ["marriage proposal"], zh: ["提亲"] },
    translation: { ngoko: "lamaran", krama: "panglamar", "krama-inggil": "panglamar" },
  },
  {
    aliases: { id: ["lambai"], en: ["wave one's hand"], zh: ["挥手"] },
    translation: { ngoko: "ngawe-awe", krama: "ngawe-awe", "krama-inggil": "ngawe-awe" },
  },
  {
    aliases: { id: ["lamban"], en: ["slow"], zh: ["迟缓"] },
    translation: { ngoko: "rindhik", krama: "rindhik", "krama-inggil": "rindhik" },
  },
  {
    aliases: { id: ["lambat"], en: ["slow"], zh: ["慢"] },
    translation: { ngoko: "alon", krama: "alon", "krama-inggil": "alon" },
  },
  {
    aliases: { id: ["lambung"], en: ["stomach"], zh: ["胃"] },
    translation: { ngoko: "lambung", krama: "lambung", "krama-inggil": "lambung" },
  },
  {
    aliases: { id: ["lampu"], en: ["lamp"], zh: ["灯"] },
    translation: { ngoko: "lampu", krama: "lampu", "krama-inggil": "lampu" },
  },
  {
    aliases: { id: ["lampu lalu lintas"], en: ["traffic light"], zh: ["交通信号灯"] },
    translation: { ngoko: "lampu lalu lintas", krama: "lampu lalu lintas", "krama-inggil": "lampu lalu lintas" },
  },
  {
    aliases: { id: ["lamun"], en: ["daydream"], zh: ["幻想"] },
    translation: { ngoko: "nglamun", krama: "nglamun", "krama-inggil": "nglamun" },
  },
  {
    aliases: { id: ["landai"], en: ["gently sloping"], zh: ["平缓的"] },
    translation: { ngoko: "landhe", krama: "landhe", "krama-inggil": "landhe" },
  },
  {
    aliases: { id: ["landak"], en: ["porcupine"], zh: ["豪猪"] },
    translation: { ngoko: "landhak", krama: "landhak", "krama-inggil": "landhak" },
  },
  {
    aliases: { id: ["langgan"], en: ["buy regularly from"], zh: ["经常惠顾"] },
    translation: { ngoko: "langganan", krama: "langganan", "krama-inggil": "langganan" },
  },
  {
    aliases: { id: ["langit"], en: ["sky"], zh: ["天空"] },
    translation: { ngoko: "langit", krama: "langit", "krama-inggil": "langit" },
  },
  {
    aliases: { id: ["langit-langit"], en: ["ceiling"], zh: ["天花板"] },
    translation: { ngoko: "plafon", krama: "plafon", "krama-inggil": "plafon" },
  },
  {
    aliases: { id: ["langit-langit mulut"], en: ["palate"], zh: ["上腭"] },
    translation: { ngoko: "cethak", krama: "cethak", "krama-inggil": "cethak" },
  },
  {
    aliases: { id: ["langsing"], en: ["slim"], zh: ["苗条的"] },
    translation: { ngoko: "singset", krama: "singset", "krama-inggil": "singset" },
  },
  {
    aliases: { id: ["langsung"], en: ["directly"], zh: ["直接"] },
    translation: { ngoko: "langsung", krama: "langsung", "krama-inggil": "langsung" },
  },
  {
    aliases: { id: ["lansia"], en: ["elderly person"], zh: ["老年人"] },
    translation: { ngoko: "wong tuwa", krama: "tiyang sepuh", "krama-inggil": "tiyang sepuh" },
  },
  {
    aliases: { id: ["lantai"], en: ["floor"], zh: ["地板"] },
    translation: { ngoko: "jogan", krama: "jogan", "krama-inggil": "jogan" },
  },
  {
    aliases: { id: ["lap"], en: ["wiping cloth"], zh: ["抹布"] },
    translation: { ngoko: "lap", krama: "lap", "krama-inggil": "lap" },
  },
  {
    aliases: { id: ["lapak"], en: ["stall"], zh: ["摊位"] },
    translation: { ngoko: "lapak", krama: "lapak", "krama-inggil": "lapak" },
  },
  {
    aliases: { id: ["lapang"], en: ["spacious"], zh: ["宽敞的"] },
    translation: { ngoko: "lega", krama: "lega", "krama-inggil": "lega" },
  },
  {
    aliases: { id: ["lapang dada"], en: ["accepting and openhearted"], zh: ["豁达"] },
    translation: { ngoko: "legawa", krama: "legawa", "krama-inggil": "legawa" },
  },
  {
    aliases: { id: ["lapangan"], en: ["open field"], zh: ["场地"] },
    translation: { ngoko: "lapangan", krama: "lapangan", "krama-inggil": "lapangan" },
  },
  {
    aliases: { id: ["lapar"], en: ["hungry"], zh: ["饿"] },
    translation: { ngoko: "luwe", krama: "luwe", "krama-inggil": "luwe" },
  },
  {
    aliases: { id: ["lapisan"], en: ["lining"], zh: ["衬里"] },
    translation: { ngoko: "lapisan", krama: "lapisan", "krama-inggil": "lapisan" },
  },
  {
    aliases: { id: ["lapor"], en: ["report"], zh: ["报告"] },
    translation: { ngoko: "lapor", krama: "lapor", "krama-inggil": "lapor" },
  },
  {
    aliases: { id: ["laporan"], en: ["report"], zh: ["报告"] },
    translation: { ngoko: "laporan", krama: "laporan", "krama-inggil": "laporan" },
  },
  {
    aliases: { id: ["laptop"], en: ["laptop"], zh: ["笔记本电脑"] },
    translation: { ngoko: "laptop", krama: "laptop", "krama-inggil": "laptop" },
  },
  {
    aliases: { id: ["larang"], en: ["forbid"], zh: ["禁止"] },
    translation: { ngoko: "nglarang", krama: "nglarang", "krama-inggil": "nglarang" },
  },
  {
    aliases: { id: ["laras"], en: ["musical tuning system"], zh: ["调律体系"] },
    translation: { ngoko: "laras", krama: "laras", "krama-inggil": "laras" },
  },
  {
    aliases: { id: ["lari"], en: ["run"], zh: ["跑步"] },
    translation: { ngoko: "mlayu", krama: "mlajeng", "krama-inggil": "mlajeng" },
  },
  {
    aliases: { id: ["laris"], en: ["selling well"], zh: ["畅销"] },
    translation: { ngoko: "laris", krama: "laris", "krama-inggil": "laris" },
  },
  {
    aliases: { id: ["latih"], en: ["train"], zh: ["训练"] },
    translation: { ngoko: "nglatih", krama: "nglatih", "krama-inggil": "nglatih" },
  },
  {
    aliases: { id: ["laut"], en: ["sea"], zh: ["海"] },
    translation: { ngoko: "segara", krama: "seganten", "krama-inggil": "seganten" },
  },
  {
    aliases: { id: ["lawan"], en: ["opponent"], zh: ["对手"] },
    translation: { ngoko: "mungsuh", krama: "mengsah", "krama-inggil": "mengsah" },
  },
  {
    aliases: { id: ["layang-layang"], en: ["kite"], zh: ["风筝"] },
    translation: { ngoko: "layangan", krama: "layangan", "krama-inggil": "layangan" },
  },
  {
    aliases: { id: ["layar"], en: ["screen"], zh: ["屏幕"] },
    translation: { ngoko: "layar", krama: "layar", "krama-inggil": "layar" },
  },
  {
    aliases: { id: ["layu"], en: ["wilted"], zh: ["枯萎"] },
    translation: { ngoko: "alum", krama: "alum", "krama-inggil": "alum" },
  },
  {
    aliases: { id: ["lebah"], en: ["bee"], zh: ["蜜蜂"] },
    translation: { ngoko: "tawon", krama: "tawon", "krama-inggil": "tawon" },
  },
  {
    aliases: { id: ["lebar"], en: ["wide"], zh: ["宽的"] },
    translation: { ngoko: "amba", krama: "wiyar", "krama-inggil": "wiyar" },
  },
  {
    aliases: { id: ["lebih"], en: ["more","over"], zh: ["更；超过"] },
    translation: { ngoko: "luwih", krama: "langkung", "krama-inggil": "langkung" },
  },
  {
    aliases: { id: ["lecek"], en: ["crumpled"], zh: ["皱巴巴的"] },
    translation: { ngoko: "lecek", krama: "lecek", "krama-inggil": "lecek" },
  },
  {
    aliases: { id: ["leci"], en: ["lychee"], zh: ["荔枝"] },
    translation: { ngoko: "leci", krama: "leci", "krama-inggil": "leci" },
  },
  {
    aliases: { id: ["lega"], en: ["relieved"], zh: ["宽慰"] },
    translation: { ngoko: "lega", krama: "lega", "krama-inggil": "lega" },
  },
  {
    aliases: { id: ["Legi"], en: ["Legi, a Javanese five-day-cycle day"], zh: ["爪哇五日历的莱吉日"] },
    translation: { ngoko: "Legi", krama: "Legi", "krama-inggil": "Legi" },
  },
  {
    aliases: { id: ["leher"], en: ["neck"], zh: ["脖子"] },
    translation: { ngoko: "gulu", krama: "gulu", "krama-inggil": "jangga" },
  },
  {
    aliases: { id: ["lelah"], en: ["tired"], zh: ["累"] },
    translation: { ngoko: "kesel", krama: "sayah", "krama-inggil": "sayah" },
  },
  {
    aliases: { id: ["lelang"], en: ["auction"], zh: ["拍卖"] },
    translation: { ngoko: "nglelang", krama: "nglelang", "krama-inggil": "nglelang" },
  },
  {
    aliases: { id: ["lele"], en: ["walking catfish"], zh: ["胡子鲶"] },
    translation: { ngoko: "lele", krama: "lele", "krama-inggil": "lele" },
  },
  {
    aliases: { id: ["leluhur"], en: ["ancestors"], zh: ["祖先"] },
    translation: { ngoko: "leluhur", krama: "leluhur", "krama-inggil": "leluhur" },
  },
  {
    aliases: { id: ["lem"], en: ["glue"], zh: ["胶水"] },
    translation: { ngoko: "lim", krama: "lim", "krama-inggil": "lim" },
  },
  {
    aliases: { id: ["lemah"], en: ["weak","frail"], zh: ["虚弱"] },
    translation: { ngoko: "ringkih", krama: "ringkih", "krama-inggil": "ringkih" },
  },
  {
    aliases: { id: ["lemari"], en: ["cabinet"], zh: ["柜子"] },
    translation: { ngoko: "lemari", krama: "lemari", "krama-inggil": "lemari" },
  },
  {
    aliases: { id: ["lemari pembeku"], en: ["freezer"], zh: ["冷冻柜"] },
    translation: { ngoko: "freezer", krama: "freezer", "krama-inggil": "freezer" },
  },
  {
    aliases: { id: ["lemas"], en: ["weak"], zh: ["无力"] },
    translation: { ngoko: "lemes", krama: "lemes", "krama-inggil": "lemes" },
  },
  {
    aliases: { id: ["lembaga"], en: ["institution"], zh: ["机构"] },
    translation: { ngoko: "lembaga", krama: "lembaga", "krama-inggil": "lembaga" },
  },
  {
    aliases: { id: ["lembah"], en: ["valley"], zh: ["山谷"] },
    translation: { ngoko: "lembah", krama: "lembah", "krama-inggil": "lembah" },
  },
  {
    aliases: { id: ["lembek"], en: ["mushy"], zh: ["软烂的"] },
    translation: { ngoko: "lembek", krama: "lembek", "krama-inggil": "lembek" },
  },
  {
    aliases: { id: ["lembut"], en: ["gentle"], zh: ["温柔"] },
    translation: { ngoko: "lembut", krama: "lembut", "krama-inggil": "lembut" },
  },
  {
    aliases: { id: ["lemon"], en: ["lemon"], zh: ["柠檬"] },
    translation: { ngoko: "lemon", krama: "lemon", "krama-inggil": "lemon" },
  },
  {
    aliases: { id: ["lempar"], en: ["throw"], zh: ["扔"] },
    translation: { ngoko: "mbalang", krama: "mbalang", "krama-inggil": "mbalang" },
  },
  {
    aliases: { id: ["lempar lembing"], en: ["javelin throw"], zh: ["标枪"] },
    translation: { ngoko: "lempar lembing", krama: "lempar lembing", "krama-inggil": "lempar lembing" },
  },
  {
    aliases: { id: ["lemper"], en: ["glutinous rice roll with savory filling"], zh: ["咸馅糯米卷"] },
    translation: { ngoko: "lemper", krama: "lemper", "krama-inggil": "lemper" },
  },
  {
    aliases: { id: ["lencana"], en: ["badge"], zh: ["徽章"] },
    translation: { ngoko: "lencana", krama: "lencana", "krama-inggil": "lencana" },
  },
  {
    aliases: { id: ["lengan"], en: ["arm"], zh: ["手臂"] },
    translation: { ngoko: "lengen", krama: "lengen", "krama-inggil": "lengen" },
  },
  {
    aliases: { id: ["lengan baju"], en: ["sleeve"], zh: ["袖子"] },
    translation: { ngoko: "lengen klambi", krama: "lengen rasukan", "krama-inggil": "lengen ageman" },
  },
  {
    aliases: { id: ["lengkeng"], en: ["longan"], zh: ["龙眼"] },
    translation: { ngoko: "klengkeng", krama: "klengkeng", "krama-inggil": "klengkeng" },
  },
  {
    aliases: { id: ["lengket"], en: ["sticky"], zh: ["黏"] },
    translation: { ngoko: "pliket", krama: "pliket", "krama-inggil": "pliket" },
  },
  {
    aliases: { id: ["lengkuas"], en: ["galangal"], zh: ["南姜"] },
    translation: { ngoko: "laos", krama: "laos", "krama-inggil": "laos" },
  },
  {
    aliases: { id: ["lentur"], en: ["flexible"], zh: ["柔韧的"] },
    translation: { ngoko: "lemes", krama: "lemes", "krama-inggil": "lemes" },
  },
  {
    aliases: { id: ["lepas"], en: ["take off"], zh: ["脱下"] },
    translation: { ngoko: "nyopot", krama: "nyopot", "krama-inggil": "nyopot" },
  },
  {
    aliases: { id: ["lepat"], en: ["leaf-wrapped sticky rice cake"], zh: ["叶包糯米糕"] },
    translation: { ngoko: "lepet", krama: "lepet", "krama-inggil": "lepet" },
  },
  {
    aliases: { id: ["leper"], en: ["flat and shallow"], zh: ["扁平而浅的"] },
    translation: { ngoko: "leper", krama: "leper", "krama-inggil": "leper" },
  },
  {
    aliases: { id: ["lereng"], en: ["slope"], zh: ["山坡"] },
    translation: { ngoko: "pereng", krama: "pereng", "krama-inggil": "pereng" },
  },
  {
    aliases: { id: ["lesu"], en: ["listless"], zh: ["无精打采"] },
    translation: { ngoko: "lesu", krama: "lesu", "krama-inggil": "lesu" },
  },
  {
    aliases: { id: ["lesung"], en: ["rice mortar used in traditional percussion"], zh: ["兼作打击乐器的舂米槽"] },
    translation: { ngoko: "lesung", krama: "lesung", "krama-inggil": "lesung" },
  },
  {
    aliases: { id: ["lesung pipi"], en: ["dimple"], zh: ["酒窝"] },
    translation: { ngoko: "lesung pipi", krama: "lesung pipi", "krama-inggil": "lesung pangarasan" },
  },
  {
    aliases: { id: ["letak"], en: ["put down"], zh: ["放下"] },
    translation: { ngoko: "nyelehake", krama: "nyelehaken", "krama-inggil": "nyelehaken" },
  },
  {
    aliases: { id: ["letusan"], en: ["eruption"], zh: ["喷发"] },
    translation: { ngoko: "jeblugan", krama: "jeblugan", "krama-inggil": "jeblugan" },
  },
  {
    aliases: { id: ["lewat"], en: ["pass by"], zh: ["经过"] },
    translation: { ngoko: "liwat", krama: "langkung", "krama-inggil": "langkung" },
  },
  {
    aliases: { id: ["lewat tengah malam"], en: ["after midnight"], zh: ["午夜过后"] },
    translation: { ngoko: "wayah lingsir wengi", krama: "wanci lingsir dalu", "krama-inggil": "wanci lingsir dalu" },
  },
  {
    aliases: { id: ["liat"], en: ["tough and pliable"], zh: ["韧的"] },
    translation: { ngoko: "alot", krama: "alot", "krama-inggil": "alot" },
  },
  {
    aliases: { id: ["libur"], en: ["holiday"], zh: ["假日"] },
    translation: { ngoko: "prei", krama: "prei", "krama-inggil": "prei" },
  },
  {
    aliases: { id: ["licik"], en: ["sly"], zh: ["狡猾"] },
    translation: { ngoko: "julig", krama: "julig", "krama-inggil": "julig" },
  },
  {
    aliases: { id: ["licin"], en: ["slippery"], zh: ["滑的"] },
    translation: { ngoko: "lunyu", krama: "lunyu", "krama-inggil": "lunyu" },
  },
  {
    aliases: { id: ["lidah"], en: ["tongue"], zh: ["舌头"] },
    translation: { ngoko: "ilat", krama: "ilat", "krama-inggil": "lidhah" },
  },
  {
    aliases: { id: ["lidah buaya"], en: ["aloe vera"], zh: ["芦荟"] },
    translation: { ngoko: "ilat baya", krama: "ilat baya", "krama-inggil": "ilat baya" },
  },
  {
    aliases: { id: ["lift"], en: ["elevator"], zh: ["电梯"] },
    translation: { ngoko: "lift", krama: "lift", "krama-inggil": "lift" },
  },
  {
    aliases: { id: ["lihat"], en: ["see"], zh: ["看"] },
    translation: { ngoko: "ndeleng", krama: "ningali", "krama-inggil": "mirsani" },
  },
  {
    aliases: { id: ["lilin"], en: ["candle"], zh: ["蜡烛"] },
    translation: { ngoko: "lilin", krama: "lilin", "krama-inggil": "lilin" },
  },
  {
    aliases: { id: ["lima"], en: ["five"], zh: ["五"] },
    translation: { ngoko: "lima", krama: "gangsal", "krama-inggil": "gangsal" },
  },
  {
    aliases: { id: ["lima belas"], en: ["fifteen"], zh: ["十五"] },
    translation: { ngoko: "limalas", krama: "gangsal welas", "krama-inggil": "gangsal welas" },
  },
  {
    aliases: { id: ["lima puluh"], en: ["fifty"], zh: ["五十"] },
    translation: { ngoko: "seket", krama: "seket", "krama-inggil": "seket" },
  },
  {
    aliases: { id: ["lima puluh delapan"], en: ["fifty-eight"], zh: ["五十八"] },
    translation: { ngoko: "seket wolu", krama: "seket wolu", "krama-inggil": "seket wolu" },
  },
  {
    aliases: { id: ["lima puluh dua"], en: ["fifty-two"], zh: ["五十二"] },
    translation: { ngoko: "seket loro", krama: "seket kalih", "krama-inggil": "seket kalih" },
  },
  {
    aliases: { id: ["lima puluh empat"], en: ["fifty-four"], zh: ["五十四"] },
    translation: { ngoko: "seket papat", krama: "seket sekawan", "krama-inggil": "seket sekawan" },
  },
  {
    aliases: { id: ["lima puluh enam"], en: ["fifty-six"], zh: ["五十六"] },
    translation: { ngoko: "seket enem", krama: "seket enem", "krama-inggil": "seket enem" },
  },
  {
    aliases: { id: ["lima puluh lima"], en: ["fifty-five"], zh: ["五十五"] },
    translation: { ngoko: "seket lima", krama: "seket gangsal", "krama-inggil": "seket gangsal" },
  },
  {
    aliases: { id: ["lima puluh satu"], en: ["fifty-one"], zh: ["五十一"] },
    translation: { ngoko: "seket siji", krama: "seket setunggal", "krama-inggil": "seket setunggal" },
  },
  {
    aliases: { id: ["lima puluh sembilan"], en: ["fifty-nine"], zh: ["五十九"] },
    translation: { ngoko: "seket sanga", krama: "seket sanga", "krama-inggil": "seket sanga" },
  },
  {
    aliases: { id: ["lima puluh tiga"], en: ["fifty-three"], zh: ["五十三"] },
    translation: { ngoko: "seket telu", krama: "seket tiga", "krama-inggil": "seket tiga" },
  },
  {
    aliases: { id: ["lima puluh tujuh"], en: ["fifty-seven"], zh: ["五十七"] },
    translation: { ngoko: "seket pitu", krama: "seket pitu", "krama-inggil": "seket pitu" },
  },
  {
    aliases: { id: ["lima ratus"], en: ["five hundred"], zh: ["五百"] },
    translation: { ngoko: "limang atus", krama: "gangsal atus", "krama-inggil": "gangsal atus" },
  },
  {
    aliases: { id: ["lincah"], en: ["agile"], zh: ["敏捷"] },
    translation: { ngoko: "trampil", krama: "trampil", "krama-inggil": "trampil" },
  },
  {
    aliases: { id: ["lindung"], en: ["protect"], zh: ["庇护"] },
    translation: { ngoko: "ngayomi", krama: "ngayomi", "krama-inggil": "ngayomi" },
  },
  {
    aliases: { id: ["lintasan"], en: ["track"], zh: ["跑道"] },
    translation: { ngoko: "lintasan", krama: "lintasan", "krama-inggil": "lintasan" },
  },
  {
    aliases: { id: ["linu"], en: ["deep aching"], zh: ["酸疼"] },
    translation: { ngoko: "linu", krama: "linu", "krama-inggil": "linu" },
  },
  {
    aliases: { id: ["lipat"], en: ["fold"], zh: ["折叠"] },
    translation: { ngoko: "nglempit", krama: "nglempit", "krama-inggil": "nglempit" },
  },
  {
    aliases: { id: ["lipatan"], en: ["fold"], zh: ["褶"] },
    translation: { ngoko: "lempitan", krama: "lempitan", "krama-inggil": "lempitan" },
  },
  {
    aliases: { id: ["lirik"], en: ["glance sideways"], zh: ["斜眼看"] },
    translation: { ngoko: "nglirik", krama: "nglirik", "krama-inggil": "nglirik" },
  },
  {
    aliases: { id: ["listrik"], en: ["electricity"], zh: ["电"] },
    translation: { ngoko: "listrik", krama: "listrik", "krama-inggil": "listrik" },
  },
  {
    aliases: { id: ["lobak"], en: ["radish"], zh: ["萝卜"] },
    translation: { ngoko: "lobak", krama: "lobak", "krama-inggil": "lobak" },
  },
  {
    aliases: { id: ["lobster"], en: ["lobster"], zh: ["龙虾"] },
    translation: { ngoko: "lobster", krama: "lobster", "krama-inggil": "lobster" },
  },
  {
    aliases: { id: ["lokomotif"], en: ["locomotive"], zh: ["火车头"] },
    translation: { ngoko: "lokomotif", krama: "lokomotif", "krama-inggil": "lokomotif" },
  },
  {
    aliases: { id: ["lompat"], en: ["jump"], zh: ["跳"] },
    translation: { ngoko: "mlumpat", krama: "mlumpat", "krama-inggil": "mlumpat" },
  },
  {
    aliases: { id: ["lompat jauh"], en: ["long jump"], zh: ["跳远"] },
    translation: { ngoko: "lompat jauh", krama: "lompat jauh", "krama-inggil": "lompat jauh" },
  },
  {
    aliases: { id: ["lompat tali"], en: ["jump rope"], zh: ["跳绳"] },
    translation: { ngoko: "dolanan tali", krama: "dolanan tali", "krama-inggil": "dolanan tali" },
  },
  {
    aliases: { id: ["lompat tinggi"], en: ["high jump"], zh: ["跳高"] },
    translation: { ngoko: "lompat tinggi", krama: "lompat tinggi", "krama-inggil": "lompat tinggi" },
  },
  {
    aliases: { id: ["longgar"], en: ["loose-fitting"], zh: ["宽松的"] },
    translation: { ngoko: "logor", krama: "logor", "krama-inggil": "logor" },
  },
  {
    aliases: { id: ["longsor"], en: ["landslide"], zh: ["山体滑坡"] },
    translation: { ngoko: "longsor", krama: "longsor", "krama-inggil": "longsor" },
  },
  {
    aliases: { id: ["lonjong"], en: ["oblong"], zh: ["长圆形的"] },
    translation: { ngoko: "lonjong", krama: "lonjong", "krama-inggil": "lonjong" },
  },
  {
    aliases: { id: ["lontong"], en: ["rice cake steamed in banana leaves"], zh: ["香蕉叶米糕"] },
    translation: { ngoko: "lonthong", krama: "lonthong", "krama-inggil": "lonthong" },
  },
  {
    aliases: { id: ["lorong"], en: ["corridor"], zh: ["走廊"] },
    translation: { ngoko: "lorong", krama: "lorong", "krama-inggil": "lorong" },
  },
  {
    aliases: { id: ["los"], en: ["market stall hall"], zh: ["市场棚区"] },
    translation: { ngoko: "los", krama: "los", "krama-inggil": "los" },
  },
  {
    aliases: { id: ["losmen"], en: ["guesthouse"], zh: ["小旅馆"] },
    translation: { ngoko: "losmen", krama: "losmen", "krama-inggil": "losmen" },
  },
  {
    aliases: { id: ["loteng"], en: ["attic"], zh: ["阁楼"] },
    translation: { ngoko: "loteng", krama: "loteng", "krama-inggil": "loteng" },
  },
  {
    aliases: { id: ["luar"], en: ["outside"], zh: ["外面"] },
    translation: { ngoko: "njaba", krama: "njawi", "krama-inggil": "njawi" },
  },
  {
    aliases: { id: ["luas"], en: ["extensive"], zh: ["广阔的"] },
    translation: { ngoko: "jembar", krama: "wiyar", "krama-inggil": "wiyar" },
  },
  {
    aliases: { id: ["lubang hidung"], en: ["nostril"], zh: ["鼻孔"] },
    translation: { ngoko: "bolongan irung", krama: "bolongan irung", "krama-inggil": "bolongan grana" },
  },
  {
    aliases: { id: ["ludah"], en: ["saliva"], zh: ["唾液"] },
    translation: { ngoko: "idu", krama: "idu", "krama-inggil": "kecoh" },
  },
  {
    aliases: { id: ["lugu"], en: ["guileless"], zh: ["老实淳朴"] },
    translation: { ngoko: "lugu", krama: "lugu", "krama-inggil": "lugu" },
  },
  {
    aliases: { id: ["luka"], en: ["wound"], zh: ["伤口"] },
    translation: { ngoko: "tatu", krama: "tatu", "krama-inggil": "tatu" },
  },
  {
    aliases: { id: ["lukis"], en: ["paint"], zh: ["绘画"] },
    translation: { ngoko: "nglukis", krama: "nglukis", "krama-inggil": "nglukis" },
  },
  {
    aliases: { id: ["lumba-lumba"], en: ["dolphin"], zh: ["海豚"] },
    translation: { ngoko: "lumba-lumba", krama: "lumba-lumba", "krama-inggil": "lumba-lumba" },
  },
  {
    aliases: { id: ["lumbung"], en: ["granary"], zh: ["粮仓"] },
    translation: { ngoko: "lumbung", krama: "lumbung", "krama-inggil": "lumbung" },
  },
  {
    aliases: { id: ["lumpuh"], en: ["paralyzed"], zh: ["瘫痪"] },
    translation: { ngoko: "lumpuh", krama: "lumpuh", "krama-inggil": "lumpuh" },
  },
  {
    aliases: { id: ["lumpur"], en: ["mud"], zh: ["泥浆"] },
    translation: { ngoko: "lendhut", krama: "lendhut", "krama-inggil": "lendhut" },
  },
  {
    aliases: { id: ["lumut"], en: ["moss"], zh: ["苔藓"] },
    translation: { ngoko: "lumut", krama: "lumut", "krama-inggil": "lumut" },
  },
  {
    aliases: { id: ["lunak"], en: ["soft"], zh: ["软的"] },
    translation: { ngoko: "empuk", krama: "empuk", "krama-inggil": "empuk" },
  },
  {
    aliases: { id: ["lunas"], en: ["paid in full"], zh: ["付清"] },
    translation: { ngoko: "lunas", krama: "lunas", "krama-inggil": "lunas" },
  },
  {
    aliases: { id: ["lupa"], en: ["forget"], zh: ["忘记"] },
    translation: { ngoko: "lali", krama: "kesupen", "krama-inggil": "kesupen" },
  },
  {
    aliases: { id: ["lupakan"], en: ["put out of one's mind"], zh: ["忘却"] },
    translation: { ngoko: "nglalekake", krama: "nglalekaken", "krama-inggil": "nglalekaken" },
  },
  {
    aliases: { id: ["lurah"], en: ["village or urban ward head"], zh: ["村长或街道负责人"] },
    translation: { ngoko: "lurah", krama: "lurah", "krama-inggil": "lurah" },
  },
  {
    aliases: { id: ["lurik"], en: ["traditional striped woven cloth"], zh: ["传统条纹织布"] },
    translation: { ngoko: "lurik", krama: "lurik", "krama-inggil": "lurik" },
  },
  {
    aliases: { id: ["lurus"], en: ["straight"], zh: ["直的"] },
    translation: { ngoko: "lempeng", krama: "lempeng", "krama-inggil": "lempeng" },
  },
  {
    aliases: { id: ["lusa"], en: ["the day after tomorrow"], zh: ["后天"] },
    translation: { ngoko: "sesuk emben", krama: "benjing emben", "krama-inggil": "benjing emben" },
  },
  {
    aliases: { id: ["lutut"], en: ["knee"], zh: ["膝盖"] },
    translation: { ngoko: "dhengkul", krama: "dhengkul", "krama-inggil": "jengku" },
  },
  {
    aliases: { id: ["luwak"], en: ["Asian palm civet"], zh: ["椰子猫"] },
    translation: { ngoko: "luwak", krama: "luwak", "krama-inggil": "luwak" },
  },
  {
    aliases: { id: ["maaf"], en: ["sorry","excuse me"], zh: ["对不起；抱歉"] },
    translation: { ngoko: "ngapura", krama: "nyuwun pangapunten", "krama-inggil": "nyuwun pangapunten" },
  },
  {
    aliases: { id: ["maafkan"], en: ["forgive"], zh: ["原谅"] },
    translation: { ngoko: "ngapura", krama: "ngapunten", "krama-inggil": "ngapunten" },
  },
  {
    aliases: { id: ["maag"], en: ["gastric trouble"], zh: ["胃病"] },
    translation: { ngoko: "mag", krama: "mag", "krama-inggil": "mag" },
  },
  {
    aliases: { id: ["macan tutul"], en: ["leopard"], zh: ["豹"] },
    translation: { ngoko: "macan tutul", krama: "macan tutul", "krama-inggil": "macan tutul" },
  },
  {
    aliases: { id: ["macapat"], en: ["traditional Javanese sung poetry"], zh: ["爪哇传统格律诗歌"] },
    translation: { ngoko: "macapat", krama: "macapat", "krama-inggil": "macapat" },
  },
  {
    aliases: { id: ["magenta"], en: ["magenta"], zh: ["品红色"] },
    translation: { ngoko: "magenta", krama: "magenta", "krama-inggil": "magenta" },
  },
  {
    aliases: { id: ["mahal"], en: ["expensive"], zh: ["贵"] },
    translation: { ngoko: "larang", krama: "awis", "krama-inggil": "awis" },
  },
  {
    aliases: { id: ["mahar"], en: ["marital gift to the bride"], zh: ["聘礼"] },
    translation: { ngoko: "maskawin", krama: "maskawin", "krama-inggil": "maskawin" },
  },
  {
    aliases: { id: ["mahoni"], en: ["mahogany"], zh: ["桃花心木"] },
    translation: { ngoko: "mahoni", krama: "mahoni", "krama-inggil": "mahoni" },
  },
  {
    aliases: { id: ["majalah"], en: ["magazine"], zh: ["杂志"] },
    translation: { ngoko: "majalah", krama: "majalah", "krama-inggil": "majalah" },
  },
  {
    aliases: { id: ["majikan"], en: ["employer","boss"], zh: ["雇主；老板"] },
    translation: { ngoko: "juragan", krama: "juragan", "krama-inggil": "juragan" },
  },
  {
    aliases: { id: ["maju"], en: ["advance"], zh: ["前进"] },
    translation: { ngoko: "maju", krama: "majeng", "krama-inggil": "majeng" },
  },
  {
    aliases: { id: ["maka"], en: ["so","therefore"], zh: ["于是"] },
    translation: { ngoko: "mula", krama: "pramila", "krama-inggil": "pramila" },
  },
  {
    aliases: { id: ["makam"], en: ["grave"], zh: ["坟墓"] },
    translation: { ngoko: "kuburan", krama: "pasarean", "krama-inggil": "pasarean" },
  },
  {
    aliases: { id: ["makan"], en: ["eat"], zh: ["吃"] },
    translation: { ngoko: "mangan", krama: "nedha", "krama-inggil": "dhahar" },
  },
  {
    aliases: { id: ["makanan"], en: ["food"], zh: ["食物"] },
    translation: { ngoko: "panganan", krama: "dhaharan", "krama-inggil": "dhaharan" },
  },
  {
    aliases: { id: ["maki"], en: ["curse at"], zh: ["辱骂"] },
    translation: { ngoko: "misuhi", krama: "misuhi", "krama-inggil": "misuhi" },
  },
  {
    aliases: { id: ["makmum"], en: ["follower in congregational prayer"], zh: ["跟拜者"] },
    translation: { ngoko: "makmum", krama: "makmum", "krama-inggil": "makmum" },
  },
  {
    aliases: { id: ["malaikat"], en: ["angel"], zh: ["天使"] },
    translation: { ngoko: "malaikat", krama: "malaikat", "krama-inggil": "malaikat" },
  },
  {
    aliases: { id: ["malam"], en: ["night","evening"], zh: ["晚上；夜晚"] },
    translation: { ngoko: "bengi", krama: "dalu", "krama-inggil": "dalu" },
  },
  {
    aliases: { id: ["malam Jumat"], en: ["Thursday night, the eve of Friday"], zh: ["星期五前夜"] },
    translation: { ngoko: "malem Jemuwah", krama: "dalu Jemuwah", "krama-inggil": "dalu Jemuwah" },
  },
  {
    aliases: { id: ["malam-malam"], en: ["late at night"], zh: ["大晚上"] },
    translation: { ngoko: "bengi-bengi", krama: "dalu-dalu", "krama-inggil": "dalu-dalu" },
  },
  {
    aliases: { id: ["malaria"], en: ["malaria"], zh: ["疟疾"] },
    translation: { ngoko: "malaria", krama: "malaria", "krama-inggil": "malaria" },
  },
  {
    aliases: { id: ["malas"], en: ["lazy"], zh: ["懒惰"] },
    translation: { ngoko: "kesed", krama: "kesed", "krama-inggil": "kesed" },
  },
  {
    aliases: { id: ["malu"], en: ["ashamed"], zh: ["羞愧"] },
    translation: { ngoko: "isin", krama: "lingsem", "krama-inggil": "lingsem" },
  },
  {
    aliases: { id: ["malukan"], en: ["embarrass"], zh: ["使难堪"] },
    translation: { ngoko: "nggawe isin", krama: "ndamel lingsem", "krama-inggil": "ndamel lingsem" },
  },
  {
    aliases: { id: ["mampir dahulu"], en: ["stop by for a while"], zh: ["先来坐一会儿"] },
    translation: { ngoko: "mampir dhisik", krama: "mangga pinarak rumiyin", "krama-inggil": "mangga pinarak rumiyin" },
  },
  {
    aliases: { id: ["mampu"], en: ["capable","able"], zh: ["有能力"] },
    translation: { ngoko: "bisa", krama: "saged", "krama-inggil": "saged" },
  },
  {
    aliases: { id: ["mana"], en: ["which","where"], zh: ["哪一个；哪里"] },
    translation: { ngoko: "endi", krama: "pundi", "krama-inggil": "pundi" },
  },
  {
    aliases: { id: ["manajer"], en: ["manager"], zh: ["经理"] },
    translation: { ngoko: "manajer", krama: "manajer", "krama-inggil": "manajer" },
  },
  {
    aliases: { id: ["mancung"], en: ["high-bridged"], zh: ["鼻梁高挺的"] },
    translation: { ngoko: "bangir", krama: "bangir", "krama-inggil": "bangir" },
  },
  {
    aliases: { id: ["mandi"], en: ["bathe","take a bath"], zh: ["洗澡"] },
    translation: { ngoko: "adus", krama: "siram", "krama-inggil": "siram" },
  },
  {
    aliases: { id: ["mandikan"], en: ["bathe someone"], zh: ["给人洗澡"] },
    translation: { ngoko: "ngadusi", krama: "ngedusi", "krama-inggil": "nyirami" },
  },
  {
    aliases: { id: ["mandiri"], en: ["independent"], zh: ["独立"] },
    translation: { ngoko: "mandhiri", krama: "mandhiri", "krama-inggil": "mandhiri" },
  },
  {
    aliases: { id: ["mangga"], en: ["mango"], zh: ["芒果"] },
    translation: { ngoko: "pelem", krama: "poh", "krama-inggil": "poh" },
  },
  {
    aliases: { id: ["manggis"], en: ["mangosteen"], zh: ["山竹"] },
    translation: { ngoko: "manggis", krama: "manggis", "krama-inggil": "manggis" },
  },
  {
    aliases: { id: ["mangkuk"], en: ["bowl"], zh: ["碗"] },
    translation: { ngoko: "mangkok", krama: "mangkok", "krama-inggil": "mangkok" },
  },
  {
    aliases: { id: ["mani"], en: ["semen"], zh: ["精液"] },
    translation: { ngoko: "mani", krama: "mani", "krama-inggil": "mani" },
  },
  {
    aliases: { id: ["manis"], en: ["sweet"], zh: ["甜"] },
    translation: { ngoko: "legi", krama: "legi", "krama-inggil": "legi" },
  },
  {
    aliases: { id: ["manset"], en: ["cuff"], zh: ["袖口"] },
    translation: { ngoko: "manset", krama: "manset", "krama-inggil": "manset" },
  },
  {
    aliases: { id: ["mantap"], en: ["resolute"], zh: ["笃定"] },
    translation: { ngoko: "mantep", krama: "mantep", "krama-inggil": "mantep" },
  },
  {
    aliases: { id: ["mantel"], en: ["overcoat"], zh: ["大衣"] },
    translation: { ngoko: "mantel", krama: "mantel", "krama-inggil": "mantel" },
  },
  {
    aliases: { id: ["manyun"], en: ["pout"], zh: ["噘嘴"] },
    translation: { ngoko: "mecucu", krama: "mecucu", "krama-inggil": "mecucu" },
  },
  {
    aliases: { id: ["map"], en: ["folder"], zh: ["文件夹"] },
    translation: { ngoko: "map", krama: "map", "krama-inggil": "map" },
  },
  {
    aliases: { id: ["marah"], en: ["angry"], zh: ["生气"] },
    translation: { ngoko: "nesu", krama: "duka", "krama-inggil": "duka" },
  },
  {
    aliases: { id: ["maraton"], en: ["marathon"], zh: ["马拉松"] },
    translation: { ngoko: "maraton", krama: "maraton", "krama-inggil": "maraton" },
  },
  {
    aliases: { id: ["Maret"], en: ["March"], zh: ["三月"] },
    translation: { ngoko: "Maret", krama: "Maret", "krama-inggil": "Maret" },
  },
  {
    aliases: { id: ["markisa"], en: ["passion fruit"], zh: ["百香果"] },
    translation: { ngoko: "markisa", krama: "markisa", "krama-inggil": "markisa" },
  },
  {
    aliases: { id: ["masak"], en: ["cook"], zh: ["做饭"] },
    translation: { ngoko: "masak", krama: "masak", "krama-inggil": "masak" },
  },
  {
    aliases: { id: ["masih"], en: ["still"], zh: ["仍然"] },
    translation: { ngoko: "isih", krama: "taksih", "krama-inggil": "taksih" },
  },
  {
    aliases: { id: ["masing-masing"], en: ["each one"], zh: ["各自"] },
    translation: { ngoko: "dhewe-dhewe", krama: "piyambak-piyambak", "krama-inggil": "piyambak-piyambak" },
  },
  {
    aliases: { id: ["masinis"], en: ["train driver"], zh: ["火车司机"] },
    translation: { ngoko: "masinis", krama: "masinis", "krama-inggil": "masinis" },
  },
  {
    aliases: { id: ["masjid"], en: ["mosque"], zh: ["清真寺"] },
    translation: { ngoko: "masjid", krama: "masjid", "krama-inggil": "masjid" },
  },
  {
    aliases: { id: ["masker"], en: ["face mask"], zh: ["口罩"] },
    translation: { ngoko: "masker", krama: "masker", "krama-inggil": "masker" },
  },
  {
    aliases: { id: ["maskumambang"], en: ["maskumambang poetic meter"], zh: ["马斯库曼邦诗律"] },
    translation: { ngoko: "maskumambang", krama: "maskumambang", "krama-inggil": "maskumambang" },
  },
  {
    aliases: { id: ["masuk"], en: ["enter"], zh: ["进入"] },
    translation: { ngoko: "mlebu", krama: "mlebet", "krama-inggil": "mlebet" },
  },
  {
    aliases: { id: ["masuk dahulu"], en: ["come in first"], zh: ["先进来吧"] },
    translation: { ngoko: "mlebu dhisik", krama: "mlebet rumiyin", "krama-inggil": "mlebet rumiyin" },
  },
  {
    aliases: { id: ["mata"], en: ["eye"], zh: ["眼睛"] },
    translation: { ngoko: "mripat", krama: "mripat", "krama-inggil": "mripat" },
  },
  {
    aliases: { id: ["mata kaki"], en: ["ankle bone"], zh: ["踝骨"] },
    translation: { ngoko: "polok", krama: "polok", "krama-inggil": "polok" },
  },
  {
    aliases: { id: ["matahari"], en: ["sun"], zh: ["太阳"] },
    translation: { ngoko: "srengenge", krama: "surya", "krama-inggil": "surya" },
  },
  {
    aliases: { id: ["matang"], en: ["cooked","ripe"], zh: ["熟"] },
    translation: { ngoko: "mateng", krama: "mateng", "krama-inggil": "mateng" },
  },
  {
    aliases: { id: ["matematika"], en: ["mathematics"], zh: ["数学"] },
    translation: { ngoko: "matematika", krama: "matematika", "krama-inggil": "matematika" },
  },
  {
    aliases: { id: ["mati"], en: ["die","dead"], zh: ["死；死亡"] },
    translation: { ngoko: "mati", krama: "pejah", "krama-inggil": "tilar donya" },
  },
  {
    aliases: { id: ["matikan"], en: ["turn off"], zh: ["关掉"] },
    translation: { ngoko: "mateni", krama: "mejahi", "krama-inggil": "mejahi" },
  },
  {
    aliases: { id: ["mau ke mana"], en: ["where are you going"], zh: ["你要去哪里"] },
    translation: { ngoko: "arep menyang ngendi", krama: "badhe dhateng pundi", "krama-inggil": "badhe tindak pundi" },
  },
  {
    aliases: { id: ["mawar"], en: ["rose"], zh: ["玫瑰"] },
    translation: { ngoko: "mawar", krama: "mawar", "krama-inggil": "mawar" },
  },
  {
    aliases: { id: ["medali"], en: ["medal"], zh: ["奖牌"] },
    translation: { ngoko: "medhali", krama: "medhali", "krama-inggil": "medhali" },
  },
  {
    aliases: { id: ["megatruh"], en: ["megatruh poetic meter"], zh: ["梅加特鲁诗律"] },
    translation: { ngoko: "megatruh", krama: "megatruh", "krama-inggil": "megatruh" },
  },
  {
    aliases: { id: ["Mei"], en: ["May"], zh: ["五月"] },
    translation: { ngoko: "Mei", krama: "Mei", "krama-inggil": "Mei" },
  },
  {
    aliases: { id: ["meja"], en: ["table","desk"], zh: ["桌子"] },
    translation: { ngoko: "meja", krama: "meja", "krama-inggil": "meja" },
  },
  {
    aliases: { id: ["mekanik"], en: ["mechanic"], zh: ["机修工"] },
    translation: { ngoko: "montir", krama: "montir", "krama-inggil": "montir" },
  },
  {
    aliases: { id: ["mekar"], en: ["opened out"], zh: ["展开的"] },
    translation: { ngoko: "mekar", krama: "mekar", "krama-inggil": "mekar" },
  },
  {
    aliases: { id: ["melahirkan"], en: ["give birth"], zh: ["分娩"] },
    translation: { ngoko: "manak", krama: "manak", "krama-inggil": "mbabar" },
  },
  {
    aliases: { id: ["melakukan"], en: ["do"], zh: ["分娩"] },
    translation: { ngoko: "nglakoni", krama: "nggarap", "krama-inggil": "nindakaken" },
  },
  {
    aliases: { id: ["melainkan"], en: ["but rather"], zh: ["而是"] },
    translation: { ngoko: "nanging", krama: "nanging", "krama-inggil": "nanging" },
  },
  {
    aliases: { id: ["melamar"], en: ["propose marriage"], zh: ["求婚；提亲"] },
    translation: { ngoko: "nglamar", krama: "nglamar", "krama-inggil": "nglamar" },
  },
  {
    aliases: { id: ["melar"], en: ["stretched out"], zh: ["拉松变长的"] },
    translation: { ngoko: "molor", krama: "molor", "krama-inggil": "molor" },
  },
  {
    aliases: { id: ["melati"], en: ["jasmine"], zh: ["茉莉"] },
    translation: { ngoko: "mlathi", krama: "mlathi", "krama-inggil": "mlathi" },
  },
  {
    aliases: { id: ["melempar"], en: ["throw"], zh: ["投掷"] },
    translation: { ngoko: "mbalang", krama: "mbalang", "krama-inggil": "mbalang" },
  },
  {
    aliases: { id: ["melengkung"], en: ["curved"], zh: ["弧形的"] },
    translation: { ngoko: "mlengkung", krama: "mlengkung", "krama-inggil": "mlengkung" },
  },
  {
    aliases: { id: ["melihat"], en: ["see"], zh: ["看"] },
    translation: { ngoko: "ndeleng", krama: "ningali", "krama-inggil": "mirsani" },
  },
  {
    aliases: { id: ["melintang"], en: ["lying crosswise"], zh: ["横着"] },
    translation: { ngoko: "malang", krama: "malang", "krama-inggil": "malang" },
  },
  {
    aliases: { id: ["melompat"], en: ["jump"], zh: ["跳跃"] },
    translation: { ngoko: "mlumpat", krama: "mlumpat", "krama-inggil": "mlumpat" },
  },
  {
    aliases: { id: ["melon"], en: ["melon"], zh: ["甜瓜"] },
    translation: { ngoko: "melon", krama: "melon", "krama-inggil": "melon" },
  },
  {
    aliases: { id: ["melotot"], en: ["glare with wide eyes"], zh: ["瞪眼"] },
    translation: { ngoko: "mendelik", krama: "mendelik", "krama-inggil": "mendelik" },
  },
  {
    aliases: { id: ["memanggang"], en: ["roast"], zh: ["烤"] },
    translation: { ngoko: "manggang", krama: "manggang", "krama-inggil": "manggang" },
  },
  {
    aliases: { id: ["memanjat"], en: ["climb"], zh: ["攀爬"] },
    translation: { ngoko: "menek", krama: "menek", "krama-inggil": "menek" },
  },
  {
    aliases: { id: ["memar"], en: ["bruise"], zh: ["瘀伤"] },
    translation: { ngoko: "memar", krama: "memar", "krama-inggil": "memar" },
  },
  {
    aliases: { id: ["memarut"], en: ["grate"], zh: ["擦丝"] },
    translation: { ngoko: "marut", krama: "marut", "krama-inggil": "marut" },
  },
  {
    aliases: { id: ["memasak"], en: ["cook"], zh: ["做饭"] },
    translation: { ngoko: "masak", krama: "masak", "krama-inggil": "masak" },
  },
  {
    aliases: { id: ["membaca"], en: ["read"], zh: ["阅读"] },
    translation: { ngoko: "maca", krama: "maos", "krama-inggil": "maos" },
  },
  {
    aliases: { id: ["membantu"], en: ["help"], zh: ["帮助"] },
    translation: { ngoko: "mbantu", krama: "mbiyantu", "krama-inggil": "paring pitulungan" },
  },
  {
    aliases: { id: ["membawa"], en: ["bring","carry"], zh: ["带；拿"] },
    translation: { ngoko: "nggawa", krama: "mbekta", "krama-inggil": "ngasta" },
  },
  {
    aliases: { id: ["membayar"], en: ["pay"], zh: ["支付"] },
    translation: { ngoko: "mbayar", krama: "mbayar", "krama-inggil": "mbayar" },
  },
  {
    aliases: { id: ["membelakangi"], en: ["turn one's back to"], zh: ["背对"] },
    translation: { ngoko: "ngungkuri", krama: "ngungkuri", "krama-inggil": "ngungkuri" },
  },
  {
    aliases: { id: ["membeli"], en: ["buy"], zh: ["买"] },
    translation: { ngoko: "tuku", krama: "tumbas", "krama-inggil": "mundhut" },
  },
  {
    aliases: { id: ["memberi"], en: ["give"], zh: ["给"] },
    translation: { ngoko: "menehi", krama: "paring", "krama-inggil": "paring" },
  },
  {
    aliases: { id: ["membersihkan"], en: ["clean"], zh: ["打扫；清洁"] },
    translation: { ngoko: "ngresiki", krama: "ngresiki", "krama-inggil": "ngresiki" },
  },
  {
    aliases: { id: ["membesarkan"], en: ["raise a child"], zh: ["抚养长大"] },
    translation: { ngoko: "nggedhekake", krama: "ng agengaken", "krama-inggil": "ng agengaken" },
  },
  {
    aliases: { id: ["membidik"], en: ["aim"], zh: ["瞄准"] },
    translation: { ngoko: "ngincer", krama: "ngincer", "krama-inggil": "ngincer" },
  },
  {
    aliases: { id: ["membuat"], en: ["make","create"], zh: ["做；制作"] },
    translation: { ngoko: "nggawe", krama: "damel", "krama-inggil": "damel" },
  },
  {
    aliases: { id: ["membujur"], en: ["lying lengthwise"], zh: ["纵向延伸"] },
    translation: { ngoko: "mujur", krama: "mujur", "krama-inggil": "mujur" },
  },
  {
    aliases: { id: ["membuka"], en: ["open"], zh: ["打开"] },
    translation: { ngoko: "mbukak", krama: "mbikak", "krama-inggil": "mbikak" },
  },
  {
    aliases: { id: ["membungkus"], en: ["wrap"], zh: ["包裹"] },
    translation: { ngoko: "mbungkus", krama: "mbungkus", "krama-inggil": "mbungkus" },
  },
  {
    aliases: { id: ["memeluk"], en: ["hug"], zh: ["拥抱"] },
    translation: { ngoko: "ngrangk ul", krama: "ngrangk ul", "krama-inggil": "ngrangk ul" },
  },
  {
    aliases: { id: ["memeras"], en: ["squeeze"], zh: ["挤压"] },
    translation: { ngoko: "meres", krama: "meres", "krama-inggil": "meres" },
  },
  {
    aliases: { id: ["memerintah"], en: ["command"], zh: ["命令"] },
    translation: { ngoko: "mrentah", krama: "mrentah", "krama-inggil": "ndhawuhi" },
  },
  {
    aliases: { id: ["meminta"], en: ["request"], zh: ["请求"] },
    translation: { ngoko: "njaluk", krama: "nyuwun", "krama-inggil": "nyuwun" },
  },
  {
    aliases: { id: ["memukul"], en: ["hit"], zh: ["击打"] },
    translation: { ngoko: "nggebug", krama: "nggebug", "krama-inggil": "nggebug" },
  },
  {
    aliases: { id: ["menafkahi"], en: ["provide financial support"], zh: ["供养"] },
    translation: { ngoko: "menehi nafkah", krama: "nyukani nafkah", "krama-inggil": "maringi nafkah" },
  },
  {
    aliases: { id: ["menandatangani"], en: ["sign"], zh: ["签字"] },
    translation: { ngoko: "menehi teken", krama: "nyukani teken", "krama-inggil": "maringi tapak asma" },
  },
  {
    aliases: { id: ["menang"], en: ["win"], zh: ["赢"] },
    translation: { ngoko: "menang", krama: "menang", "krama-inggil": "menang" },
  },
  {
    aliases: { id: ["menangkap"], en: ["catch"], zh: ["接住"] },
    translation: { ngoko: "nyekel", krama: "nyepeng", "krama-inggil": "ngasta" },
  },
  {
    aliases: { id: ["menantu"], en: ["child-in-law"], zh: ["女婿或儿媳"] },
    translation: { ngoko: "mantu", krama: "mantu", "krama-inggil": "putra mantu" },
  },
  {
    aliases: { id: ["menantu laki-laki"], en: ["son-in-law"], zh: ["女婿"] },
    translation: { ngoko: "mantu lanang", krama: "mantu jaler", "krama-inggil": "putra mantu kakung" },
  },
  {
    aliases: { id: ["menantu perempuan"], en: ["daughter-in-law"], zh: ["儿媳"] },
    translation: { ngoko: "mantu wadon", krama: "mantu estri", "krama-inggil": "putra mantu putri" },
  },
  {
    aliases: { id: ["menari"], en: ["to dance"], zh: ["跳舞"] },
    translation: { ngoko: "njogèd", krama: "mbeksa", "krama-inggil": "mbeksa" },
  },
  {
    aliases: { id: ["menarik"], en: ["pull"], zh: ["拉"] },
    translation: { ngoko: "narik", krama: "narik", "krama-inggil": "narik" },
  },
  {
    aliases: { id: ["mencari"], en: ["look for","search"], zh: ["寻找"] },
    translation: { ngoko: "golek", krama: "pados", "krama-inggil": "pados" },
  },
  {
    aliases: { id: ["mencicipi"], en: ["taste"], zh: ["尝"] },
    translation: { ngoko: "nyicipi", krama: "nyicipi", "krama-inggil": "nyicipi" },
  },
  {
    aliases: { id: ["mencintai"], en: ["care for"], zh: ["爱；疼爱"] },
    translation: { ngoko: "nresnani", krama: "nresnani", "krama-inggil": "nresnani" },
  },
  {
    aliases: { id: ["mencium"], en: ["kiss"], zh: ["亲吻"] },
    translation: { ngoko: "ngambung", krama: "ngambung", "krama-inggil": "ngaras" },
  },
  {
    aliases: { id: ["mencontoh"], en: ["imitate","copy"], zh: ["模仿"] },
    translation: { ngoko: "niru", krama: "niru", "krama-inggil": "niru" },
  },
  {
    aliases: { id: ["mencuci"], en: ["wash"], zh: ["洗"] },
    translation: { ngoko: "ngumbah", krama: "umbah-umbah", "krama-inggil": "umbah-umbah" },
  },
  {
    aliases: { id: ["mendadak"], en: ["suddenly"], zh: ["突然"] },
    translation: { ngoko: "dumadakan", krama: "dumadakan", "krama-inggil": "dumadakan" },
  },
  {
    aliases: { id: ["mendahului"], en: ["go ahead of","overtake"], zh: ["领先"] },
    translation: { ngoko: "ndhisiki", krama: "ndhisiki", "krama-inggil": "ndhisiki" },
  },
  {
    aliases: { id: ["mendapat"], en: ["get","receive"], zh: ["获得"] },
    translation: { ngoko: "entuk", krama: "pikantuk", "krama-inggil": "pikantuk" },
  },
  {
    aliases: { id: ["mendatar"], en: ["level","horizontal"], zh: ["水平"] },
    translation: { ngoko: "rata", krama: "rata", "krama-inggil": "rata" },
  },
  {
    aliases: { id: ["mendekat"], en: ["approach"], zh: ["靠近"] },
    translation: { ngoko: "nyedhak", krama: "nyelak", "krama-inggil": "nyelak" },
  },
  {
    aliases: { id: ["mendengar"], en: ["hear","listen"], zh: ["听见；听"] },
    translation: { ngoko: "ngrungokake", krama: "mireng", "krama-inggil": "miyarsa" },
  },
  {
    aliases: { id: ["mendengarkan"], en: ["listen to"], zh: ["聆听"] },
    translation: { ngoko: "ngrungokake", krama: "mirengaken", "krama-inggil": "mirengaken" },
  },
  {
    aliases: { id: ["mendidik"], en: ["educate","raise"], zh: ["教育；培养"] },
    translation: { ngoko: "ndhidhik", krama: "ndhidhik", "krama-inggil": "ndhidhik" },
  },
  {
    aliases: { id: ["mendorong"], en: ["push"], zh: ["推"] },
    translation: { ngoko: "nyurung", krama: "nyurung", "krama-inggil": "nyurung" },
  },
  {
    aliases: { id: ["mendung"], en: ["overcast"], zh: ["阴天"] },
    translation: { ngoko: "mendhung", krama: "mendhung", "krama-inggil": "mendhung" },
  },
  {
    aliases: { id: ["menembang"], en: ["to sing traditional Javanese poetry"], zh: ["吟唱爪哇诗歌"] },
    translation: { ngoko: "nembang", krama: "nyekar", "krama-inggil": "nyekar" },
  },
  {
    aliases: { id: ["menemukan"], en: ["find","discover"], zh: ["找到；发现"] },
    translation: { ngoko: "nemokake", krama: "manggih", "krama-inggil": "manggih" },
  },
  {
    aliases: { id: ["menendang"], en: ["kick"], zh: ["踢"] },
    translation: { ngoko: "nyepak", krama: "nyepak", "krama-inggil": "nyepak" },
  },
  {
    aliases: { id: ["menepi"], en: ["move to the side"], zh: ["靠边"] },
    translation: { ngoko: "minggir", krama: "minggir", "krama-inggil": "minggir" },
  },
  {
    aliases: { id: ["menerima"], en: ["receive","accept"], zh: ["收到；接受"] },
    translation: { ngoko: "nampa", krama: "nampi", "krama-inggil": "nampi" },
  },
  {
    aliases: { id: ["mengadopsi"], en: ["adopt a child"], zh: ["收养孩子"] },
    translation: { ngoko: "ngangkat anak", krama: "ngangkat anak", "krama-inggil": "ngangkat putra" },
  },
  {
    aliases: { id: ["mengaduk"], en: ["stir"], zh: ["搅拌"] },
    translation: { ngoko: "ngudheg", krama: "ngudheg", "krama-inggil": "ngudheg" },
  },
  {
    aliases: { id: ["mengajar"], en: ["teach"], zh: ["教"] },
    translation: { ngoko: "mulang", krama: "mulang", "krama-inggil": "mulang" },
  },
  {
    aliases: { id: ["mengamuk"], en: ["rage"], zh: ["大发雷霆"] },
    translation: { ngoko: "ngamuk", krama: "ngamuk", "krama-inggil": "ngamuk" },
  },
  {
    aliases: { id: ["mengantuk"], en: ["sleepy"], zh: ["困"] },
    translation: { ngoko: "ngantuk", krama: "ngantuk", "krama-inggil": "ngantuk" },
  },
  {
    aliases: { id: ["mengapa"], en: ["why"], zh: ["为什么"] },
    translation: { ngoko: "ngapa", krama: "kenging menapa", "krama-inggil": "kenging menapa" },
  },
  {
    aliases: { id: ["mengapa tidak"], en: ["why not"], zh: ["为什么不"] },
    translation: { ngoko: "kena apa ora", krama: "kenging menapa boten", "krama-inggil": "kenging menapa boten" },
  },
  {
    aliases: { id: ["mengasuh"], en: ["look after a child"], zh: ["照看孩子"] },
    translation: { ngoko: "ngemong", krama: "ngemong", "krama-inggil": "ngemong" },
  },
  {
    aliases: { id: ["mengatakan"], en: ["say","tell"], zh: ["说；告诉"] },
    translation: { ngoko: "ngomong", krama: "matur", "krama-inggil": "ngendika" },
  },
  {
    aliases: { id: ["mengejar"], en: ["chase"], zh: ["追赶"] },
    translation: { ngoko: "ngoyak", krama: "ngoyak", "krama-inggil": "ngoyak" },
  },
  {
    aliases: { id: ["mengelilingi"], en: ["go around"], zh: ["绕行"] },
    translation: { ngoko: "ngubengi", krama: "ngubengi", "krama-inggil": "ngubengi" },
  },
  {
    aliases: { id: ["mengemudi"], en: ["drive"], zh: ["驾驶"] },
    translation: { ngoko: "nyopir", krama: "nyopir", "krama-inggil": "nyopir" },
  },
  {
    aliases: { id: ["mengerem"], en: ["brake"], zh: ["制动"] },
    translation: { ngoko: "ngerem", krama: "ngerem", "krama-inggil": "ngerem" },
  },
  {
    aliases: { id: ["mengesot"], en: ["scoot along while seated"], zh: ["坐着挪动"] },
    translation: { ngoko: "ngesot", krama: "ngesot", "krama-inggil": "ngesot" },
  },
  {
    aliases: { id: ["menggambar"], en: ["draw","sketch"], zh: ["画画"] },
    translation: { ngoko: "nggambar", krama: "nggambar", "krama-inggil": "nggambar" },
  },
  {
    aliases: { id: ["mengganggu"], en: ["disturb","bother"], zh: ["打扰"] },
    translation: { ngoko: "ngganggu", krama: "ngganggu", "krama-inggil": "ngganggu" },
  },
  {
    aliases: { id: ["menggendong"], en: ["carry a child in one's arms or on one's back"], zh: ["抱着或背着孩子"] },
    translation: { ngoko: "nggendhong", krama: "nggendhong", "krama-inggil": "nggendhong" },
  },
  {
    aliases: { id: ["menggigil"], en: ["shiver"], zh: ["打寒战"] },
    translation: { ngoko: "ndredheg", krama: "ndredheg", "krama-inggil": "ndredheg" },
  },
  {
    aliases: { id: ["menggiring"], en: ["dribble"], zh: ["运球"] },
    translation: { ngoko: "nggiring", krama: "nggiring", "krama-inggil": "nggiring" },
  },
  {
    aliases: { id: ["menggoreng"], en: ["fry (food)"], zh: ["油炸；煎"] },
    translation: { ngoko: "nggoreng", krama: "nggoreng", "krama-inggil": "nggoreng" },
  },
  {
    aliases: { id: ["menggosok"], en: ["rub","polish","brush"], zh: ["擦拭；刷"] },
    translation: { ngoko: "nggosok", krama: "nggosok", "krama-inggil": "nggosok" },
  },
  {
    aliases: { id: ["menggulung"], en: ["roll up"], zh: ["卷起"] },
    translation: { ngoko: "nggulung", krama: "nggulung", "krama-inggil": "nggulung" },
  },
  {
    aliases: { id: ["menghadap"], en: ["face toward"], zh: ["朝向"] },
    translation: { ngoko: "madhep", krama: "majeng", "krama-inggil": "majeng" },
  },
  {
    aliases: { id: ["menghitung"], en: ["calculate"], zh: ["计算"] },
    translation: { ngoko: "ngetung", krama: "ngetang", "krama-inggil": "ngetang" },
  },
  {
    aliases: { id: ["mengikuti"], en: ["follow"], zh: ["跟随"] },
    translation: { ngoko: "ngetutake", krama: "ngetutaken", "krama-inggil": "ndherek" },
  },
  {
    aliases: { id: ["mengirim"], en: ["send"], zh: ["发送"] },
    translation: { ngoko: "ngirim", krama: "ngintun", "krama-inggil": "ngintun" },
  },
  {
    aliases: { id: ["mengiris"], en: ["slice"], zh: ["切片"] },
    translation: { ngoko: "ngiris", krama: "ngiris", "krama-inggil": "ngiris" },
  },
  {
    aliases: { id: ["mengoper"], en: ["pass the ball"], zh: ["传球"] },
    translation: { ngoko: "ngoper", krama: "ngoper", "krama-inggil": "ngoper" },
  },
  {
    aliases: { id: ["menguap"], en: ["yawn"], zh: ["打哈欠"] },
    translation: { ngoko: "angop", krama: "angop", "krama-inggil": "angop" },
  },
  {
    aliases: { id: ["mengukus"], en: ["steam"], zh: ["蒸"] },
    translation: { ngoko: "ngukus", krama: "ngukus", "krama-inggil": "ngukus" },
  },
  {
    aliases: { id: ["mengupas"], en: ["peel"], zh: ["削皮"] },
    translation: { ngoko: "ngonceki", krama: "ngonceki", "krama-inggil": "ngonceki" },
  },
  {
    aliases: { id: ["menikah"], en: ["marry"], zh: ["结婚"] },
    translation: { ngoko: "rabi", krama: "emah-emah", "krama-inggil": "krama" },
  },
  {
    aliases: { id: ["menimang"], en: ["fondly entertain or soothe a baby"], zh: ["逗哄婴儿"] },
    translation: { ngoko: "ngudang", krama: "ngudang", "krama-inggil": "ngudang" },
  },
  {
    aliases: { id: ["menit"], en: ["minute"], zh: ["分钟"] },
    translation: { ngoko: "menit", krama: "menit", "krama-inggil": "menit" },
  },
  {
    aliases: { id: ["menjauh"], en: ["move away"], zh: ["远离"] },
    translation: { ngoko: "ngadoh", krama: "nebih", "krama-inggil": "nebih" },
  },
  {
    aliases: { id: ["menjawab"], en: ["answer"], zh: ["回答"] },
    translation: { ngoko: "mangsuli", krama: "mangsuli", "krama-inggil": "mangsuli" },
  },
  {
    aliases: { id: ["menjual"], en: ["sell"], zh: ["卖"] },
    translation: { ngoko: "adol", krama: "sade", "krama-inggil": "sade" },
  },
  {
    aliases: { id: ["menjulurkan lidah"], en: ["stick out one's tongue"], zh: ["吐舌头"] },
    translation: { ngoko: "melet", krama: "melet", "krama-inggil": "melet" },
  },
  {
    aliases: { id: ["mentah"], en: ["raw","unripe"], zh: ["生"] },
    translation: { ngoko: "mentah", krama: "mentah", "krama-inggil": "mentah" },
  },
  {
    aliases: { id: ["mentega"], en: ["butter"], zh: ["黄油"] },
    translation: { ngoko: "mentega", krama: "mentega", "krama-inggil": "mentega" },
  },
  {
    aliases: { id: ["menteri"], en: ["minister"], zh: ["部长"] },
    translation: { ngoko: "mentri", krama: "mentri", "krama-inggil": "mentri" },
  },
  {
    aliases: { id: ["mentimun"], en: ["cucumber"], zh: ["黄瓜"] },
    translation: { ngoko: "timun", krama: "timun", "krama-inggil": "timun" },
  },
  {
    aliases: { id: ["menulis"], en: ["write"], zh: ["写"] },
    translation: { ngoko: "nulis", krama: "nyerat", "krama-inggil": "nyerat" },
  },
  {
    aliases: { id: ["menumbuk"], en: ["pound"], zh: ["捣"] },
    translation: { ngoko: "nutu", krama: "nutu", "krama-inggil": "nutu" },
  },
  {
    aliases: { id: ["menumis"], en: ["sauté"], zh: ["煸炒"] },
    translation: { ngoko: "nggangsa", krama: "nggangsa", "krama-inggil": "nggangsa" },
  },
  {
    aliases: { id: ["menumpang"], en: ["hitch a ride"], zh: ["搭便车"] },
    translation: { ngoko: "nunut", krama: "nunut", "krama-inggil": "nunut" },
  },
  {
    aliases: { id: ["menunggu"], en: ["wait"], zh: ["等"] },
    translation: { ngoko: "ngenteni", krama: "ngentosi", "krama-inggil": "ngentosi" },
  },
  {
    aliases: { id: ["menutup"], en: ["close","shut"], zh: ["关闭"] },
    translation: { ngoko: "nutup", krama: "nutup", "krama-inggil": "nutup" },
  },
  {
    aliases: { id: ["menyajikan"], en: ["serve"], zh: ["上菜"] },
    translation: { ngoko: "nyuguhake", krama: "nyuguhaken", "krama-inggil": "nyuguhaken" },
  },
  {
    aliases: { id: ["menyalip"], en: ["overtake"], zh: ["超车"] },
    translation: { ngoko: "nyalip", krama: "nyalip", "krama-inggil": "nyalip" },
  },
  {
    aliases: { id: ["menyaring"], en: ["strain"], zh: ["过滤"] },
    translation: { ngoko: "nyaring", krama: "nyaring", "krama-inggil": "nyaring" },
  },
  {
    aliases: { id: ["menyayangi"], en: ["cherish"], zh: ["疼爱"] },
    translation: { ngoko: "nresnani", krama: "nresnani", "krama-inggil": "nresnani" },
  },
  {
    aliases: { id: ["menyeberang"], en: ["cross"], zh: ["横过"] },
    translation: { ngoko: "nyabrang", krama: "nyabrang", "krama-inggil": "nyabrang" },
  },
  {
    aliases: { id: ["menyelam"], en: ["dive underwater"], zh: ["潜水"] },
    translation: { ngoko: "nyilem", krama: "nyilem", "krama-inggil": "nyilem" },
  },
  {
    aliases: { id: ["menyusui"], en: ["breastfeed"], zh: ["哺乳"] },
    translation: { ngoko: "nusoni", krama: "nyusoni", "krama-inggil": "nyusoni" },
  },
  {
    aliases: { id: ["menyusul"], en: ["catch up with"], zh: ["追上"] },
    translation: { ngoko: "nyusul", krama: "nyusul", "krama-inggil": "nyusul" },
  },
  {
    aliases: { id: ["merah"], en: ["red"], zh: ["红色"] },
    translation: { ngoko: "abang", krama: "abrit", "krama-inggil": "abrit" },
  },
  {
    aliases: { id: ["merah anggur"], en: ["wine red"], zh: ["酒红色"] },
    translation: { ngoko: "abang anggur", krama: "abrit anggur", "krama-inggil": "abrit anggur" },
  },
  {
    aliases: { id: ["merah bata"], en: ["brick red"], zh: ["砖红色"] },
    translation: { ngoko: "abang bata", krama: "abrit bata", "krama-inggil": "abrit bata" },
  },
  {
    aliases: { id: ["merah cabai"], en: ["chili red"], zh: ["辣椒红"] },
    translation: { ngoko: "abang lombok", krama: "abrit lombok", "krama-inggil": "abrit lombok" },
  },
  {
    aliases: { id: ["merah darah"], en: ["blood red"], zh: ["血红色"] },
    translation: { ngoko: "abang getih", krama: "abrit rah", "krama-inggil": "abrit rah" },
  },
  {
    aliases: { id: ["merah delima"], en: ["ruby red"], zh: ["宝石红"] },
    translation: { ngoko: "abang delima", krama: "abrit delima", "krama-inggil": "abrit delima" },
  },
  {
    aliases: { id: ["merah gelap"], en: ["dark red"], zh: ["暗红色"] },
    translation: { ngoko: "abang peteng", krama: "abrit peteng", "krama-inggil": "abrit peteng" },
  },
  {
    aliases: { id: ["merah hati"], en: ["liver red"], zh: ["肝红色"] },
    translation: { ngoko: "abang ati", krama: "abrit manah", "krama-inggil": "abrit manah" },
  },
  {
    aliases: { id: ["merah karang"], en: ["coral red"], zh: ["珊瑚红"] },
    translation: { ngoko: "abang karang", krama: "abrit karang", "krama-inggil": "abrit karang" },
  },
  {
    aliases: { id: ["merah marun"], en: ["maroon"], zh: ["栗红色"] },
    translation: { ngoko: "abang marun", krama: "abrit marun", "krama-inggil": "abrit marun" },
  },
  {
    aliases: { id: ["merah muda"], en: ["pink"], zh: ["粉红色"] },
    translation: { ngoko: "jambon", krama: "jambon", "krama-inggil": "jambon" },
  },
  {
    aliases: { id: ["merah muda pastel"], en: ["pastel pink"], zh: ["柔粉色"] },
    translation: { ngoko: "jambon pastel", krama: "jambon pastel", "krama-inggil": "jambon pastel" },
  },
  {
    aliases: { id: ["merah muda pucat"], en: ["pale pink"], zh: ["淡粉红色"] },
    translation: { ngoko: "jambon pucet", krama: "jambon pucet", "krama-inggil": "jambon pucet" },
  },
  {
    aliases: { id: ["merah muda terang"], en: ["bright pink"], zh: ["亮粉红色"] },
    translation: { ngoko: "jambon padhang", krama: "jambon padhang", "krama-inggil": "jambon padhang" },
  },
  {
    aliases: { id: ["merah muda tua"], en: ["deep pink"], zh: ["深粉红色"] },
    translation: { ngoko: "jambon tuwa", krama: "jambon sepuh", "krama-inggil": "jambon sepuh" },
  },
  {
    aliases: { id: ["merah salmon"], en: ["salmon red"], zh: ["鲑鱼红"] },
    translation: { ngoko: "abang salmon", krama: "abrit salmon", "krama-inggil": "abrit salmon" },
  },
  {
    aliases: { id: ["merah terang"], en: ["bright red"], zh: ["鲜红色"] },
    translation: { ngoko: "abang padhang", krama: "abrit padhang", "krama-inggil": "abrit padhang" },
  },
  {
    aliases: { id: ["merah tomat"], en: ["tomato red"], zh: ["番茄红"] },
    translation: { ngoko: "abang tomat", krama: "abrit tomat", "krama-inggil": "abrit tomat" },
  },
  {
    aliases: { id: ["merah tua"], en: ["deep red"], zh: ["深红色"] },
    translation: { ngoko: "abang tuwa", krama: "abrit sepuh", "krama-inggil": "abrit sepuh" },
  },
  {
    aliases: { id: ["merak"], en: ["peafowl"], zh: ["孔雀"] },
    translation: { ngoko: "merak", krama: "merak", "krama-inggil": "merak" },
  },
  {
    aliases: { id: ["merawat"], en: ["care for"], zh: ["照料"] },
    translation: { ngoko: "ngrumat", krama: "ngrumat", "krama-inggil": "ngrumat" },
  },
  {
    aliases: { id: ["merebus"], en: ["boil"], zh: ["煮"] },
    translation: { ngoko: "nggodhog", krama: "nggodhog", "krama-inggil": "nggodhog" },
  },
  {
    aliases: { id: ["mereka"], en: ["they","them"], zh: ["他们；她们"] },
    translation: { ngoko: "dheweke kabeh", krama: "piyambakipun sedaya", "krama-inggil": "piyambakipun sedaya" },
  },
  {
    aliases: { id: ["mereka berdua"], en: ["the two of them"], zh: ["他们俩"] },
    translation: { ngoko: "dheweke sakloron", krama: "piyambakipun kekalih", "krama-inggil": "panjenenganipun kekalih" },
  },
  {
    aliases: { id: ["merendam"], en: ["soak"], zh: ["浸泡"] },
    translation: { ngoko: "ngum", krama: "ngum", "krama-inggil": "ngum" },
  },
  {
    aliases: { id: ["merica"], en: ["pepper"], zh: ["胡椒"] },
    translation: { ngoko: "mrica", krama: "mrica", "krama-inggil": "mrica" },
  },
  {
    aliases: { id: ["merpati"], en: ["pigeon"], zh: ["鸽子"] },
    translation: { ngoko: "dara", krama: "dara", "krama-inggil": "dara" },
  },
  {
    aliases: { id: ["mertua"], en: ["parent-in-law"], zh: ["配偶的父母"] },
    translation: { ngoko: "maratuwa", krama: "marasepuh", "krama-inggil": "marasepuh" },
  },
  {
    aliases: { id: ["mesin"], en: ["engine"], zh: ["发动机"] },
    translation: { ngoko: "mesin", krama: "mesin", "krama-inggil": "mesin" },
  },
  {
    aliases: { id: ["mesin cuci"], en: ["washing machine"], zh: ["洗衣机"] },
    translation: { ngoko: "mesin umbah", krama: "mesin umbah", "krama-inggil": "mesin umbah" },
  },
  {
    aliases: { id: ["mesin fotokopi"], en: ["photocopier"], zh: ["复印机"] },
    translation: { ngoko: "mesin fotokopi", krama: "mesin fotokopi", "krama-inggil": "mesin fotokopi" },
  },
  {
    aliases: { id: ["mesin jahit"], en: ["sewing machine"], zh: ["缝纫机"] },
    translation: { ngoko: "mesin jahit", krama: "mesin jahit", "krama-inggil": "mesin jahit" },
  },
  {
    aliases: { id: ["mesin kasir"], en: ["cash register"], zh: ["收银机"] },
    translation: { ngoko: "mesin kasir", krama: "mesin kasir", "krama-inggil": "mesin kasir" },
  },
  {
    aliases: { id: ["meskipun"], en: ["although","even though"], zh: ["虽然"] },
    translation: { ngoko: "sanajan", krama: "sanajan", "krama-inggil": "sanajan" },
  },
  {
    aliases: { id: ["meskipun begitu"], en: ["even so"], zh: ["即便如此"] },
    translation: { ngoko: "nadyan mangkono", krama: "nadyan mekaten", "krama-inggil": "nadyan mekaten" },
  },
  {
    aliases: { id: ["meteran listrik"], en: ["electricity meter"], zh: ["电表"] },
    translation: { ngoko: "meteran listrik", krama: "meteran listrik", "krama-inggil": "meteran listrik" },
  },
  {
    aliases: { id: ["mewarisi"], en: ["inherit"], zh: ["继承"] },
    translation: { ngoko: "marisi", krama: "marisi", "krama-inggil": "marisi" },
  },
  {
    aliases: { id: ["mi"], en: ["noodles"], zh: ["面条"] },
    translation: { ngoko: "mi", krama: "mi", "krama-inggil": "mi" },
  },
  {
    aliases: { id: ["midodareni"], en: ["Javanese pre-wedding evening ceremony"], zh: ["爪哇婚礼前夜仪式"] },
    translation: { ngoko: "midodareni", krama: "midodareni", "krama-inggil": "midodareni" },
  },
  {
    aliases: { id: ["mijil"], en: ["mijil poetic meter"], zh: ["米吉尔诗律"] },
    translation: { ngoko: "mijil", krama: "mijil", "krama-inggil": "mijil" },
  },
  {
    aliases: { id: ["mikrofon"], en: ["microphone"], zh: ["麦克风"] },
    translation: { ngoko: "mikrofon", krama: "mikrofon", "krama-inggil": "mikrofon" },
  },
  {
    aliases: { id: ["mikser"], en: ["mixer"], zh: ["打蛋器"] },
    translation: { ngoko: "mikser", krama: "mikser", "krama-inggil": "mikser" },
  },
  {
    aliases: { id: ["milik siapa"], en: ["whose"], zh: ["谁的"] },
    translation: { ngoko: "duweke sapa", krama: "gadhahanipun sinten", "krama-inggil": "kagunganipun sinten" },
  },
  {
    aliases: { id: ["mimisan"], en: ["nosebleed"], zh: ["流鼻血"] },
    translation: { ngoko: "mimisen", krama: "mimisen", "krama-inggil": "mimisen" },
  },
  {
    aliases: { id: ["mimpi"], en: ["dream"], zh: ["做梦"] },
    translation: { ngoko: "ngimpi", krama: "ngimpen", "krama-inggil": "ngimpen" },
  },
  {
    aliases: { id: ["minder"], en: ["inferior"], zh: ["自卑"] },
    translation: { ngoko: "cilik ati", krama: "alit manah", "krama-inggil": "alit penggalih" },
  },
  {
    aliases: { id: ["Minggu"], en: ["Sunday"], zh: ["星期日"] },
    translation: { ngoko: "Ahad", krama: "Ahad", "krama-inggil": "Ahad" },
  },
  {
    aliases: { id: ["minibus"], en: ["minibus"], zh: ["小型客车"] },
    translation: { ngoko: "minibus", krama: "minibus", "krama-inggil": "minibus" },
  },
  {
    aliases: { id: ["minta"], en: ["request"], zh: ["请求"] },
    translation: { ngoko: "njaluk", krama: "nyuwun", "krama-inggil": "mundhut" },
  },
  {
    aliases: { id: ["minta maaf"], en: ["apologize"], zh: ["道歉"] },
    translation: { ngoko: "njaluk pangapura", krama: "nyuwun pangapunten", "krama-inggil": "nyuwun pangapunten" },
  },
  {
    aliases: { id: ["minum"], en: ["drink"], zh: ["喝"] },
    translation: { ngoko: "ngombe", krama: "ngunjuk", "krama-inggil": "unjuk" },
  },
  {
    aliases: { id: ["minyak"], en: ["oil"], zh: ["油"] },
    translation: { ngoko: "lenga", krama: "lisah", "krama-inggil": "lisah" },
  },
  {
    aliases: { id: ["minyak goreng"], en: ["cooking oil"], zh: ["食用油"] },
    translation: { ngoko: "lenga goreng", krama: "lisah goreng", "krama-inggil": "lisah goreng" },
  },
  {
    aliases: { id: ["miring"], en: ["slanted"], zh: ["倾斜的"] },
    translation: { ngoko: "miring", krama: "miring", "krama-inggil": "miring" },
  },
  {
    aliases: { id: ["misalnya"], en: ["for example"], zh: ["例如"] },
    translation: { ngoko: "upamane", krama: "upaminipun", "krama-inggil": "upaminipun" },
  },
  {
    aliases: { id: ["mitoni"], en: ["to hold a seventh-month pregnancy ceremony"], zh: ["举行怀孕七个月庆典"] },
    translation: { ngoko: "mitoni", krama: "mitoni", "krama-inggil": "mitoni" },
  },
  {
    aliases: { id: ["mobil"], en: ["car"], zh: ["汽车"] },
    translation: { ngoko: "mobil", krama: "mobil", "krama-inggil": "mobil" },
  },
  {
    aliases: { id: ["modal"], en: ["capital"], zh: ["本金"] },
    translation: { ngoko: "modhal", krama: "modhal", "krama-inggil": "modhal" },
  },
  {
    aliases: { id: ["modem"], en: ["modem"], zh: ["调制解调器"] },
    translation: { ngoko: "modem", krama: "modem", "krama-inggil": "modem" },
  },
  {
    aliases: { id: ["mohon"], en: ["plead"], zh: ["恳求"] },
    translation: { ngoko: "nyuwun", krama: "nyuwun", "krama-inggil": "nyuwun" },
  },
  {
    aliases: { id: ["mohon doa restu"], en: ["I ask for your blessing"], zh: ["恳请您的祝福"] },
    translation: { ngoko: "njaluk pangestu", krama: "nyuwun pangestu", "krama-inggil": "nyuwun pangestu" },
  },
  {
    aliases: { id: ["mohon izin"], en: ["may I have permission"], zh: ["请允许"] },
    translation: { ngoko: "njaluk idin", krama: "nyuwun idin", "krama-inggil": "nyuwun idin" },
  },
  {
    aliases: { id: ["mohon maaf lahir dan batin"], en: ["please forgive my outward and inward wrongs"], zh: ["请原谅我言行和内心的过错"] },
    translation: { ngoko: "njaluk pangapura lair batin", krama: "nyuwun pangapunten lair batos", "krama-inggil": "nyuwun pangapunten lair batos" },
  },
  {
    aliases: { id: ["monitor"], en: ["monitor"], zh: ["显示器"] },
    translation: { ngoko: "monitor", krama: "monitor", "krama-inggil": "monitor" },
  },
  {
    aliases: { id: ["monopoli"], en: ["Monopoly"], zh: ["大富翁"] },
    translation: { ngoko: "monopoli", krama: "monopoli", "krama-inggil": "monopoli" },
  },
  {
    aliases: { id: ["monyet"], en: ["monkey"], zh: ["猴子"] },
    translation: { ngoko: "kethek", krama: "rewanda", "krama-inggil": "rewanda" },
  },
  {
    aliases: { id: ["motif"], en: ["decorative pattern"], zh: ["装饰纹样"] },
    translation: { ngoko: "corak", krama: "corak", "krama-inggil": "corak" },
  },
  {
    aliases: { id: ["motor"], en: ["motorcycle","motor"], zh: ["摩托车；马达"] },
    translation: { ngoko: "montor", krama: "montor", "krama-inggil": "montor" },
  },
  {
    aliases: { id: ["muak"], en: ["sickened"], zh: ["厌恶"] },
    translation: { ngoko: "eneg", krama: "eneg", "krama-inggil": "eneg" },
  },
  {
    aliases: { id: ["mual"], en: ["nauseous"], zh: ["恶心"] },
    translation: { ngoko: "eneg", krama: "eneg", "krama-inggil": "eneg" },
  },
  {
    aliases: { id: ["muat"], en: ["load"], zh: ["装载"] },
    translation: { ngoko: "ngemot", krama: "ngemot", "krama-inggil": "ngemot" },
  },
  {
    aliases: { id: ["muda"], en: ["young"], zh: ["年轻"] },
    translation: { ngoko: "enom", krama: "enem", "krama-inggil": "enem" },
  },
  {
    aliases: { id: ["mudah"], en: ["easy"], zh: ["容易"] },
    translation: { ngoko: "gampang", krama: "gampil", "krama-inggil": "gampil" },
  },
  {
    aliases: { id: ["mujair"], en: ["Mozambique tilapia"], zh: ["莫桑比克罗非鱼"] },
    translation: { ngoko: "mujair", krama: "mujair", "krama-inggil": "mujair" },
  },
  {
    aliases: { id: ["mukena"], en: ["women's prayer garment"], zh: ["穆斯林女式礼拜服"] },
    translation: { ngoko: "rukuh", krama: "rukuh", "krama-inggil": "rukuh" },
  },
  {
    aliases: { id: ["mula-mula"], en: ["initially"], zh: ["起初"] },
    translation: { ngoko: "wiwitane", krama: "wiwitanipun", "krama-inggil": "wiwitanipun" },
  },
  {
    aliases: { id: ["mulus"], en: ["smooth and unblemished"], zh: ["光洁无瑕的"] },
    translation: { ngoko: "mulus", krama: "mulus", "krama-inggil": "mulus" },
  },
  {
    aliases: { id: ["mulut"], en: ["mouth"], zh: ["嘴"] },
    translation: { ngoko: "cangkem", krama: "tutuk", "krama-inggil": "tutuk" },
  },
  {
    aliases: { id: ["munafik"], en: ["hypocritical"], zh: ["虚伪"] },
    translation: { ngoko: "lamis", krama: "lamis", "krama-inggil": "lamis" },
  },
  {
    aliases: { id: ["mundur"], en: ["move backward"], zh: ["后退"] },
    translation: { ngoko: "mundur", krama: "mundur", "krama-inggil": "mundur" },
  },
  {
    aliases: { id: ["mungkin"], en: ["maybe","possible"], zh: ["可能"] },
    translation: { ngoko: "mbokmenawa", krama: "bokmenawi", "krama-inggil": "bokmenawi" },
  },
  {
    aliases: { id: ["muntah"], en: ["vomit"], zh: ["呕吐"] },
    translation: { ngoko: "mutah", krama: "mutah", "krama-inggil": "luntur" },
  },
  {
    aliases: { id: ["murah"], en: ["cheap","inexpensive"], zh: ["便宜"] },
    translation: { ngoko: "murah", krama: "mirah", "krama-inggil": "mirah" },
  },
  {
    aliases: { id: ["murid"], en: ["student","pupil"], zh: ["学生"] },
    translation: { ngoko: "murid", krama: "murid", "krama-inggil": "murid" },
  },
  {
    aliases: { id: ["murka"], en: ["furious"], zh: ["愤怒"] },
    translation: { ngoko: "muring-muring", krama: "muring-muring", "krama-inggil": "muring-muring" },
  },
  {
    aliases: { id: ["murung"], en: ["sorrowful"], zh: ["忧伤"] },
    translation: { ngoko: "sungkawa", krama: "sungkawa", "krama-inggil": "sungkawa" },
  },
  {
    aliases: { id: ["musala"], en: ["Muslim prayer hall"], zh: ["穆斯林祈祷室"] },
    translation: { ngoko: "langgar", krama: "langgar", "krama-inggil": "langgar" },
  },
  {
    aliases: { id: ["museum"], en: ["museum"], zh: ["博物馆"] },
    translation: { ngoko: "museum", krama: "museum", "krama-inggil": "museum" },
  },
  {
    aliases: { id: ["musik"], en: ["music"], zh: ["音乐"] },
    translation: { ngoko: "musik", krama: "musik", "krama-inggil": "musik" },
  },
  {
    aliases: { id: ["musim"], en: ["season"], zh: ["季节"] },
    translation: { ngoko: "mangsa", krama: "mangsa", "krama-inggil": "mangsa" },
  },
  {
    aliases: { id: ["musim hujan"], en: ["rainy season"], zh: ["雨季"] },
    translation: { ngoko: "mangsa rendheng", krama: "mangsa rendheng", "krama-inggil": "mangsa rendheng" },
  },
  {
    aliases: { id: ["musim kemarau"], en: ["dry season"], zh: ["旱季"] },
    translation: { ngoko: "mangsa ketiga", krama: "mangsa ketiga", "krama-inggil": "mangsa ketiga" },
  },
  {
    aliases: { id: ["musyawarah"], en: ["deliberate together"], zh: ["协商"] },
    translation: { ngoko: "musyawarah", krama: "musyawarah", "krama-inggil": "musyawarah" },
  },
  {
    aliases: { id: ["nabi"], en: ["prophet"], zh: ["先知"] },
    translation: { ngoko: "nabi", krama: "nabi", "krama-inggil": "nabi" },
  },
  {
    aliases: { id: ["nafkah"], en: ["financial support","maintenance"], zh: ["生活费；赡养费"] },
    translation: { ngoko: "nafkah", krama: "nafkah", "krama-inggil": "nafkah" },
  },
  {
    aliases: { id: ["nagasari"], en: ["banana-filled steamed rice-flour cake"], zh: ["香蕉馅蒸米糕"] },
    translation: { ngoko: "nagasari", krama: "nagasari", "krama-inggil": "nagasari" },
  },
  {
    aliases: { id: ["naik"], en: ["ride"], zh: ["乘坐"] },
    translation: { ngoko: "numpak", krama: "numpak", "krama-inggil": "nitih" },
  },
  {
    aliases: { id: ["nak"], en: ["dear child"], zh: ["孩子"] },
    translation: { ngoko: "nak", krama: "nak", "krama-inggil": "nak" },
  },
  {
    aliases: { id: ["nakal"], en: ["naughty"], zh: ["淘气"] },
    translation: { ngoko: "nakal", krama: "nakal", "krama-inggil": "nakal" },
  },
  {
    aliases: { id: ["nakhoda"], en: ["ship captain"], zh: ["船长"] },
    translation: { ngoko: "nakhoda", krama: "nakhoda", "krama-inggil": "nakhoda" },
  },
  {
    aliases: { id: ["nama"], en: ["name"], zh: ["名字"] },
    translation: { ngoko: "jeneng", krama: "nama", "krama-inggil": "asma" },
  },
  {
    aliases: { id: ["nama saya"], en: ["my name is"], zh: ["我的名字是"] },
    translation: { ngoko: "jenengku", krama: "nama kula", "krama-inggil": "nama kula" },
  },
  {
    aliases: { id: ["nampan"], en: ["tray"], zh: ["托盘"] },
    translation: { ngoko: "nampan", krama: "nampan", "krama-inggil": "nampan" },
  },
  {
    aliases: { id: ["namun demikian"], en: ["however","nonetheless"], zh: ["然而"] },
    translation: { ngoko: "nanging sanajan mangkono", krama: "nanging sanajan mekaten", "krama-inggil": "nanging sanajan mekaten" },
  },
  {
    aliases: { id: ["nanah"], en: ["pus"], zh: ["脓"] },
    translation: { ngoko: "nanah", krama: "nanah", "krama-inggil": "nanah" },
  },
  {
    aliases: { id: ["nanas"], en: ["pineapple"], zh: ["菠萝"] },
    translation: { ngoko: "nanas", krama: "nanas", "krama-inggil": "nanas" },
  },
  {
    aliases: { id: ["nangka"], en: ["jackfruit"], zh: ["菠萝蜜"] },
    translation: { ngoko: "nangka", krama: "nangka", "krama-inggil": "nangka" },
  },
  {
    aliases: { id: ["nanti"], en: ["later"], zh: ["稍后；以后"] },
    translation: { ngoko: "mengko", krama: "mangke", "krama-inggil": "mangke" },
  },
  {
    aliases: { id: ["napas"], en: ["breath"], zh: ["呼吸"] },
    translation: { ngoko: "ambegan", krama: "ambegan", "krama-inggil": "ambegan" },
  },
  {
    aliases: { id: ["nasi"], en: ["cooked rice"], zh: ["米饭"] },
    translation: { ngoko: "sega", krama: "sekul", "krama-inggil": "sekul" },
  },
  {
    aliases: { id: ["nasi goreng"], en: ["fried rice"], zh: ["炒饭"] },
    translation: { ngoko: "sega goreng", krama: "sekul goreng", "krama-inggil": "sekul goreng" },
  },
  {
    aliases: { id: ["nasi jagung"], en: ["corn rice"], zh: ["玉米饭"] },
    translation: { ngoko: "sega jagung", krama: "sekul jagung", "krama-inggil": "sekul jagung" },
  },
  {
    aliases: { id: ["nasi kuning"], en: ["turmeric rice"], zh: ["姜黄饭"] },
    translation: { ngoko: "sega kuning", krama: "sekul kuning", "krama-inggil": "sekul kuning" },
  },
  {
    aliases: { id: ["nasi liwet"], en: ["Javanese coconut rice"], zh: ["爪哇椰浆焖饭"] },
    translation: { ngoko: "sega liwet", krama: "sekul liwet", "krama-inggil": "sekul liwet" },
  },
  {
    aliases: { id: ["nasi uduk"], en: ["coconut milk rice"], zh: ["椰浆饭"] },
    translation: { ngoko: "sega gurih", krama: "sekul gurih", "krama-inggil": "sekul gurih" },
  },
  {
    aliases: { id: ["nasihati"], en: ["advise"], zh: ["劝告"] },
    translation: { ngoko: "ngandhani", krama: "nyukani", "krama-inggil": "maringi pitutur" },
  },
  {
    aliases: { id: ["negara"], en: ["country"], zh: ["国家"] },
    translation: { ngoko: "nagara", krama: "negari", "krama-inggil": "negari" },
  },
  {
    aliases: { id: ["nekat"], en: ["recklessly determined"], zh: ["不顾一切"] },
    translation: { ngoko: "nekat", krama: "nekat", "krama-inggil": "nekat" },
  },
  {
    aliases: { id: ["nelayan"], en: ["fisher"], zh: ["渔民"] },
    translation: { ngoko: "nelayan", krama: "nelayan", "krama-inggil": "nelayan" },
  },
  {
    aliases: { id: ["nenek"], en: ["grandmother"], zh: ["祖母；外祖母"] },
    translation: { ngoko: "simbah wadon", krama: "simbah estri", "krama-inggil": "eyang putri" },
  },
  {
    aliases: { id: ["nenek buyut"], en: ["great-grandmother"], zh: ["曾祖母；曾外祖母"] },
    translation: { ngoko: "simbah buyut wadon", krama: "simbah buyut estri", "krama-inggil": "eyang buyut putri" },
  },
  {
    aliases: { id: ["neraka"], en: ["hell"], zh: ["地狱"] },
    translation: { ngoko: "neraka", krama: "neraka", "krama-inggil": "neraka" },
  },
  {
    aliases: { id: ["net"], en: ["sports net"], zh: ["球网"] },
    translation: { ngoko: "net", krama: "net", "krama-inggil": "net" },
  },
  {
    aliases: { id: ["ngengat"], en: ["moth"], zh: ["蛾"] },
    translation: { ngoko: "ngengat", krama: "ngengat", "krama-inggil": "ngengat" },
  },
  {
    aliases: { id: ["ngeri"], en: ["horrified"], zh: ["恐惧"] },
    translation: { ngoko: "ngeri", krama: "ngeri", "krama-inggil": "ngeri" },
  },
  {
    aliases: { id: ["niatkan"], en: ["intend"], zh: ["打算"] },
    translation: { ngoko: "niyatake", krama: "niyataken", "krama-inggil": "niyataken" },
  },
  {
    aliases: { id: ["nila"], en: ["Nile tilapia"], zh: ["尼罗罗非鱼"] },
    translation: { ngoko: "nila", krama: "nila", "krama-inggil": "nila" },
  },
  {
    aliases: { id: ["nilai"], en: ["score"], zh: ["分数"] },
    translation: { ngoko: "biji", krama: "biji", "krama-inggil": "biji" },
  },
  {
    aliases: { id: ["nol"], en: ["zero"], zh: ["零"] },
    translation: { ngoko: "nol", krama: "nol", "krama-inggil": "nol" },
  },
  {
    aliases: { id: ["nona"], en: ["miss"], zh: ["小姐"] },
    translation: { ngoko: "nona", krama: "nona", "krama-inggil": "nona" },
  },
  {
    aliases: { id: ["nota"], en: ["sales bill"], zh: ["销售单"] },
    translation: { ngoko: "nota", krama: "nota", "krama-inggil": "nota" },
  },
  {
    aliases: { id: ["notaris"], en: ["notary"], zh: ["公证员"] },
    translation: { ngoko: "notaris", krama: "notaris", "krama-inggil": "notaris" },
  },
  {
    aliases: { id: ["November"], en: ["November"], zh: ["十一月"] },
    translation: { ngoko: "November", krama: "November", "krama-inggil": "November" },
  },
  {
    aliases: { id: ["nyadran"], en: ["to perform communal ancestral grave rites"], zh: ["举行集体祭祖扫墓仪式"] },
    translation: { ngoko: "nyadran", krama: "nyadran", "krama-inggil": "nyadran" },
  },
  {
    aliases: { id: ["nyai"], en: ["honorific for a respected woman or a kiai's wife"], zh: ["对受尊敬女性或伊斯兰教长老妻子的尊称"] },
    translation: { ngoko: "nyai", krama: "nyai", "krama-inggil": "nyai" },
  },
  {
    aliases: { id: ["nyaman"], en: ["comfortable"], zh: ["舒适"] },
    translation: { ngoko: "kepenak", krama: "sekeca", "krama-inggil": "sekeca" },
  },
  {
    aliases: { id: ["nyamuk"], en: ["mosquito"], zh: ["蚊子"] },
    translation: { ngoko: "lemut", krama: "lemut", "krama-inggil": "lemut" },
  },
  {
    aliases: { id: ["nyanyi"], en: ["sing"], zh: ["唱歌"] },
    translation: { ngoko: "nembang", krama: "nembang", "krama-inggil": "nembang" },
  },
  {
    aliases: { id: ["nyonya"], en: ["madam","Mrs."], zh: ["夫人；太太"] },
    translation: { ngoko: "nyonya", krama: "nyonya", "krama-inggil": "nyonya" },
  },
  {
    aliases: { id: ["obat"], en: ["medicine"], zh: ["药"] },
    translation: { ngoko: "obat", krama: "jampi", "krama-inggil": "jampi" },
  },
  {
    aliases: { id: ["obati"], en: ["medicate","treat"], zh: ["治疗"] },
    translation: { ngoko: "nambani", krama: "njampeni", "krama-inggil": "njampeni" },
  },
  {
    aliases: { id: ["obeng"], en: ["screwdriver"], zh: ["螺丝刀"] },
    translation: { ngoko: "obèng", krama: "obèng", "krama-inggil": "obèng" },
  },
  {
    aliases: { id: ["obral"], en: ["sell at clearance prices"], zh: ["甩卖"] },
    translation: { ngoko: "ngobral", krama: "ngobral", "krama-inggil": "ngobral" },
  },
  {
    aliases: { id: ["obrol"], en: ["chat"], zh: ["聊天"] },
    translation: { ngoko: "ngobrol", krama: "ngobrol", "krama-inggil": "ngobrol" },
  },
  {
    aliases: { id: ["oceh"], en: ["babble"], zh: ["唠叨"] },
    translation: { ngoko: "ngoceh", krama: "ngoceh", "krama-inggil": "ngoceh" },
  },
  {
    aliases: { id: ["Oktober"], en: ["October"], zh: ["十月"] },
    translation: { ngoko: "Oktober", krama: "Oktober", "krama-inggil": "Oktober" },
  },
  {
    aliases: { id: ["olahraga"], en: ["sports"], zh: ["体育"] },
    translation: { ngoko: "olahraga", krama: "olahraga", "krama-inggil": "olahraga" },
  },
  {
    aliases: { id: ["oleh karena itu"], en: ["therefore"], zh: ["因此"] },
    translation: { ngoko: "mula saka iku", krama: "pramila saking punika", "krama-inggil": "pramila saking punika" },
  },
  {
    aliases: { id: ["oles"], en: ["apply by smearing"], zh: ["涂抹"] },
    translation: { ngoko: "ngoles", krama: "ngoles", "krama-inggil": "ngoles" },
  },
  {
    aliases: { id: ["oli"], en: ["lubricating oil"], zh: ["润滑油"] },
    translation: { ngoko: "oli", krama: "oli", "krama-inggil": "oli" },
  },
  {
    aliases: { id: ["olok"], en: ["ridicule"], zh: ["奚落"] },
    translation: { ngoko: "ngolok-olok", krama: "ngolok-olok", "krama-inggil": "ngolok-olok" },
  },
  {
    aliases: { id: ["ombak"], en: ["wave"], zh: ["海浪"] },
    translation: { ngoko: "ombak", krama: "ombak", "krama-inggil": "ombak" },
  },
  {
    aliases: { id: ["onde-onde"], en: ["sesame ball with mung bean filling"], zh: ["绿豆馅芝麻球"] },
    translation: { ngoko: "onde-onde", krama: "onde-onde", "krama-inggil": "onde-onde" },
  },
  {
    aliases: { id: ["ongkos"], en: ["fare"], zh: ["车费"] },
    translation: { ngoko: "ongkos", krama: "ongkos", "krama-inggil": "ongkos" },
  },
  {
    aliases: { id: ["operasi"], en: ["surgery"], zh: ["手术"] },
    translation: { ngoko: "operasi", krama: "operasi", "krama-inggil": "operasi" },
  },
  {
    aliases: { id: ["optimistis"], en: ["optimistic"], zh: ["乐观"] },
    translation: { ngoko: "optimis", krama: "optimis", "krama-inggil": "optimis" },
  },
  {
    aliases: { id: ["orang"], en: ["person","people"], zh: ["人；人们"] },
    translation: { ngoko: "wong", krama: "tiyang", "krama-inggil": "tiyang" },
  },
  {
    aliases: { id: ["orang ini"], en: ["this person"], zh: ["这个人"] },
    translation: { ngoko: "wong iki", krama: "tiyang menika", "krama-inggil": "tiyang menika" },
  },
  {
    aliases: { id: ["orang itu"], en: ["that person"], zh: ["那个人"] },
    translation: { ngoko: "wong kuwi", krama: "tiyang menika", "krama-inggil": "tiyang menika" },
  },
  {
    aliases: { id: ["orang lain"], en: ["other people"], zh: ["别人"] },
    translation: { ngoko: "wong liya", krama: "tiyang sanes", "krama-inggil": "tiyang sanes" },
  },
  {
    aliases: { id: ["orang tersebut"], en: ["the aforementioned person"], zh: ["上述那个人"] },
    translation: { ngoko: "wong kasebut", krama: "tiyang kasebat", "krama-inggil": "tiyang kasebat" },
  },
  {
    aliases: { id: ["orang tua"], en: ["parents"], zh: ["父母"] },
    translation: { ngoko: "wong tuwa", krama: "tiyang sepuh", "krama-inggil": "tiyang sepuh" },
  },
  {
    aliases: { id: ["orang tua angkat"], en: ["adoptive parents"], zh: ["养父母"] },
    translation: { ngoko: "wong tuwa angkat", krama: "tiyang sepuh angkat", "krama-inggil": "tiyang sepuh angkat" },
  },
  {
    aliases: { id: ["orangutan"], en: ["orangutan"], zh: ["红毛猩猩"] },
    translation: { ngoko: "orangutan", krama: "orangutan", "krama-inggil": "orangutan" },
  },
  {
    aliases: { id: ["otak"], en: ["brain"], zh: ["脑"] },
    translation: { ngoko: "utek", krama: "utek", "krama-inggil": "utek" },
  },
  {
    aliases: { id: ["otot"], en: ["muscle"], zh: ["肌肉"] },
    translation: { ngoko: "otot", krama: "otot", "krama-inggil": "otot" },
  },
  {
    aliases: { id: ["oval"], en: ["oval"], zh: ["椭圆形的"] },
    translation: { ngoko: "oval", krama: "oval", "krama-inggil": "oval" },
  },
  {
    aliases: { id: ["oven"], en: ["oven"], zh: ["烤箱"] },
    translation: { ngoko: "oven", krama: "oven", "krama-inggil": "oven" },
  },
  {
    aliases: { id: ["oven gelombang mikro"], en: ["microwave oven"], zh: ["微波炉"] },
    translation: { ngoko: "microwave", krama: "microwave", "krama-inggil": "microwave" },
  },
  {
    aliases: { id: ["oyong"], en: ["ridged gourd"], zh: ["棱角丝瓜"] },
    translation: { ngoko: "gambas", krama: "gambas", "krama-inggil": "gambas" },
  },
  {
    aliases: { id: ["pabrik"], en: ["factory"], zh: ["工厂"] },
    translation: { ngoko: "pabrik", krama: "pabrik", "krama-inggil": "pabrik" },
  },
  {
    aliases: { id: ["padahal"], en: ["whereas","when in fact"], zh: ["其实却"] },
    translation: { ngoko: "kamangka", krama: "kamangka", "krama-inggil": "kamangka" },
  },
  {
    aliases: { id: ["padang"], en: ["open field"], zh: ["旷野"] },
    translation: { ngoko: "ara-ara", krama: "ara-ara", "krama-inggil": "ara-ara" },
  },
  {
    aliases: { id: ["padat"], en: ["dense"], zh: ["密实的"] },
    translation: { ngoko: "padhet", krama: "padhet", "krama-inggil": "padhet" },
  },
  {
    aliases: { id: ["padi"], en: ["rice plant"], zh: ["水稻"] },
    translation: { ngoko: "pari", krama: "pantun", "krama-inggil": "pantun" },
  },
  {
    aliases: { id: ["pagar"], en: ["fence"], zh: ["围栏"] },
    translation: { ngoko: "pager", krama: "pager", "krama-inggil": "pager" },
  },
  {
    aliases: { id: ["pagi"], en: ["morning"], zh: ["早上"] },
    translation: { ngoko: "esuk", krama: "enjing", "krama-inggil": "enjing" },
  },
  {
    aliases: { id: ["pagi ini"], en: ["this morning"], zh: ["今天早上"] },
    translation: { ngoko: "esuk iki", krama: "enjing menika", "krama-inggil": "enjing menika" },
  },
  {
    aliases: { id: ["pagi-pagi"], en: ["early in the morning"], zh: ["一大早"] },
    translation: { ngoko: "esuk-esuk", krama: "enjing-enjing", "krama-inggil": "enjing-enjing" },
  },
  {
    aliases: { id: ["paha"], en: ["thigh"], zh: ["大腿"] },
    translation: { ngoko: "pupu", krama: "pupu", "krama-inggil": "pupu" },
  },
  {
    aliases: { id: ["pahala"], en: ["spiritual reward"], zh: ["善功的回报"] },
    translation: { ngoko: "pahala", krama: "pahala", "krama-inggil": "pahala" },
  },
  {
    aliases: { id: ["paham"], en: ["understand"], zh: ["理解"] },
    translation: { ngoko: "mudheng", krama: "mangertos", "krama-inggil": "mangertos" },
  },
  {
    aliases: { id: ["Pahing"], en: ["Pahing, a Javanese five-day-cycle day"], zh: ["爪哇五日历的帕欣日"] },
    translation: { ngoko: "Paing", krama: "Paing", "krama-inggil": "Paing" },
  },
  {
    aliases: { id: ["pahit"], en: ["bitter"], zh: ["苦"] },
    translation: { ngoko: "pait", krama: "pait", "krama-inggil": "pait" },
  },
  {
    aliases: { id: ["pajak"], en: ["tax"], zh: ["税"] },
    translation: { ngoko: "pajeg", krama: "pajeg", "krama-inggil": "pajeg" },
  },
  {
    aliases: { id: ["pajang"], en: ["display"], zh: ["陈列"] },
    translation: { ngoko: "majang", krama: "majang", "krama-inggil": "majang" },
  },
  {
    aliases: { id: ["pakai"], en: ["wear"], zh: ["穿戴"] },
    translation: { ngoko: "nganggo", krama: "ngangge", "krama-inggil": "ngagem" },
  },
  {
    aliases: { id: ["pakaian"], en: ["clothing"], zh: ["服装"] },
    translation: { ngoko: "sandhangan", krama: "pangangge", "krama-inggil": "ageman" },
  },
  {
    aliases: { id: ["pakaian olahraga"], en: ["sportswear"], zh: ["运动服"] },
    translation: { ngoko: "sandhangan olahraga", krama: "pangangge olahraga", "krama-inggil": "ageman olahraga" },
  },
  {
    aliases: { id: ["paket"], en: ["parcel"], zh: ["包裹"] },
    translation: { ngoko: "paket", krama: "paket", "krama-inggil": "paket" },
  },
  {
    aliases: { id: ["pakis"], en: ["fern"], zh: ["蕨类"] },
    translation: { ngoko: "pakis", krama: "pakis", "krama-inggil": "pakis" },
  },
  {
    aliases: { id: ["paku"], en: ["nail"], zh: ["钉"] },
    translation: { ngoko: "maku", krama: "maku", "krama-inggil": "maku" },
  },
  {
    aliases: { id: ["paling"], en: ["most","-est"], zh: ["最"] },
    translation: { ngoko: "paling", krama: "paling", "krama-inggil": "paling" },
  },
  {
    aliases: { id: ["palsu"], en: ["counterfeit"], zh: ["假的"] },
    translation: { ngoko: "palsu", krama: "palsu", "krama-inggil": "palsu" },
  },
  {
    aliases: { id: ["palu"], en: ["hammer"], zh: ["锤子"] },
    translation: { ngoko: "palu", krama: "palu", "krama-inggil": "palu" },
  },
  {
    aliases: { id: ["paman"], en: ["uncle younger than one's parent"], zh: ["叔叔；舅舅"] },
    translation: { ngoko: "paklik", krama: "paklik", "krama-inggil": "paklik" },
  },
  {
    aliases: { id: ["paman tua"], en: ["uncle older than one's parent"], zh: ["伯父；年长的舅舅"] },
    translation: { ngoko: "pakdhe", krama: "pakdhe", "krama-inggil": "pakdhe" },
  },
  {
    aliases: { id: ["paman yang lebih tua dari orang tua"], en: ["uncle older than one's parent"], zh: ["伯父；年长的舅舅"] },
    translation: { ngoko: "pakdhe", krama: "pakdhe", "krama-inggil": "pakdhe" },
  },
  {
    aliases: { id: ["pamit"], en: ["take leave"], zh: ["告辞"] },
    translation: { ngoko: "pamit", krama: "pamit", "krama-inggil": "pamit" },
  },
  {
    aliases: { id: ["panahan"], en: ["archery"], zh: ["射箭"] },
    translation: { ngoko: "panahan", krama: "panahan", "krama-inggil": "panahan" },
  },
  {
    aliases: { id: ["panas"], en: ["hot"], zh: ["热"] },
    translation: { ngoko: "panas", krama: "benter", "krama-inggil": "benter" },
  },
  {
    aliases: { id: ["panci"], en: ["cooking pot"], zh: ["煮锅"] },
    translation: { ngoko: "panci", krama: "panci", "krama-inggil": "panci" },
  },
  {
    aliases: { id: ["pancing"], en: ["fishing rod"], zh: ["鱼竿"] },
    translation: { ngoko: "pancing", krama: "pancing", "krama-inggil": "pancing" },
  },
  {
    aliases: { id: ["pancuran"], en: ["water spout"], zh: ["出水口"] },
    translation: { ngoko: "pancuran", krama: "pancuran", "krama-inggil": "pancuran" },
  },
  {
    aliases: { id: ["panda"], en: ["panda"], zh: ["大熊猫"] },
    translation: { ngoko: "panda", krama: "panda", "krama-inggil": "panda" },
  },
  {
    aliases: { id: ["pandai"], en: ["clever"], zh: ["聪明"] },
    translation: { ngoko: "pinter", krama: "pinter", "krama-inggil": "pinter" },
  },
  {
    aliases: { id: ["pandai besi"], en: ["blacksmith"], zh: ["铁匠"] },
    translation: { ngoko: "pandhé wesi", krama: "pandhé wesi", "krama-inggil": "pandhé wesi" },
  },
  {
    aliases: { id: ["pandan"], en: ["pandan"], zh: ["香兰"] },
    translation: { ngoko: "pandan", krama: "pandan", "krama-inggil": "pandan" },
  },
  {
    aliases: { id: ["pandang"], en: ["look at"], zh: ["看"] },
    translation: { ngoko: "delok", krama: "ningali", "krama-inggil": "mirsani" },
  },
  {
    aliases: { id: ["panel surya"], en: ["solar panel"], zh: ["太阳能板"] },
    translation: { ngoko: "panel surya", krama: "panel surya", "krama-inggil": "panel surya" },
  },
  {
    aliases: { id: ["panen"], en: ["harvest"], zh: ["收获"] },
    translation: { ngoko: "panen", krama: "panen", "krama-inggil": "panen" },
  },
  {
    aliases: { id: ["pangeran"], en: ["prince"], zh: ["王子；亲王"] },
    translation: { ngoko: "pangeran", krama: "pangeran", "krama-inggil": "pangeran" },
  },
  {
    aliases: { id: ["panggang"], en: ["roast"], zh: ["烤"] },
    translation: { ngoko: "manggang", krama: "manggang", "krama-inggil": "manggang" },
  },
  {
    aliases: { id: ["panggih"], en: ["ceremonial meeting of bride and groom"], zh: ["新郎新娘相见仪式"] },
    translation: { ngoko: "panggih", krama: "panggih", "krama-inggil": "panggih" },
  },
  {
    aliases: { id: ["panggil"], en: ["call someone"], zh: ["叫人"] },
    translation: { ngoko: "nyeluk", krama: "nyeluk", "krama-inggil": "nimbali" },
  },
  {
    aliases: { id: ["panggilan"], en: ["call/name"], zh: ["称呼"] },
    translation: { ngoko: "celukan", krama: "sesebatan", "krama-inggil": "sesebatan" },
  },
  {
    aliases: { id: ["panggul"], en: ["pelvis"], zh: ["骨盆"] },
    translation: { ngoko: "panggul", krama: "panggul", "krama-inggil": "panggul" },
  },
  {
    aliases: { id: ["panggung"], en: ["stage"], zh: ["舞台"] },
    translation: { ngoko: "panggung", krama: "panggung", "krama-inggil": "panggung" },
  },
  {
    aliases: { id: ["pangkal"], en: ["base","root end"], zh: ["根部"] },
    translation: { ngoko: "pangkal", krama: "pangkal", "krama-inggil": "pangkal" },
  },
  {
    aliases: { id: ["pangkalan"], en: ["base/terminal"], zh: ["基地/站点"] },
    translation: { ngoko: "pangkalan", krama: "pangkalan", "krama-inggil": "pangkalan" },
  },
  {
    aliases: { id: ["pangkas"], en: ["prune"], zh: ["修剪"] },
    translation: { ngoko: "ngethoki", krama: "ngethoki", "krama-inggil": "ngethoki" },
  },
  {
    aliases: { id: ["pangku"], en: ["hold on one's lap"], zh: ["抱在膝上"] },
    translation: { ngoko: "mangku", krama: "mangku", "krama-inggil": "mangku" },
  },
  {
    aliases: { id: ["pangkur"], en: ["pangkur poetic meter"], zh: ["庞库尔诗律"] },
    translation: { ngoko: "pangkur", krama: "pangkur", "krama-inggil": "pangkur" },
  },
  {
    aliases: { id: ["panik"], en: ["panicked"], zh: ["惊慌"] },
    translation: { ngoko: "gupuh", krama: "gupuh", "krama-inggil": "gupuh" },
  },
  {
    aliases: { id: ["panjang"], en: ["long"], zh: ["长"] },
    translation: { ngoko: "dawa", krama: "dangu", "krama-inggil": "dangu" },
  },
  {
    aliases: { id: ["pantai"], en: ["beach"], zh: ["海滩"] },
    translation: { ngoko: "segara", krama: "pasir", "krama-inggil": "pasir" },
  },
  {
    aliases: { id: ["pantang"], en: ["taboo/forbidden"], zh: ["禁忌"] },
    translation: { ngoko: "pamal", krama: "pamal", "krama-inggil": "pamal" },
  },
  {
    aliases: { id: ["panu"], en: ["tinea versicolor"], zh: ["花斑癣"] },
    translation: { ngoko: "panu", krama: "panu", "krama-inggil": "panu" },
  },
  {
    aliases: { id: ["papah"], en: ["support someone while walking"], zh: ["搀扶"] },
    translation: { ngoko: "mapah", krama: "mapah", "krama-inggil": "mapah" },
  },
  {
    aliases: { id: ["papan"], en: ["board"], zh: ["木板"] },
    translation: { ngoko: "papan", krama: "papan", "krama-inggil": "papan" },
  },
  {
    aliases: { id: ["papan catur"], en: ["chessboard"], zh: ["国际象棋棋盘"] },
    translation: { ngoko: "papan sekak", krama: "papan sekak", "krama-inggil": "papan sekak" },
  },
  {
    aliases: { id: ["papan ketik"], en: ["keyboard"], zh: ["键盘"] },
    translation: { ngoko: "papan ketik", krama: "papan ketik", "krama-inggil": "papan ketik" },
  },
  {
    aliases: { id: ["papan tulis"], en: ["writing board"], zh: ["书写板"] },
    translation: { ngoko: "papan tulis", krama: "papan tulis", "krama-inggil": "papan tulis" },
  },
  {
    aliases: { id: ["papar"], en: ["explain"], zh: ["说明"] },
    translation: { ngoko: "jlentreh", krama: "jlentreh", "krama-inggil": "jlentreh" },
  },
  {
    aliases: { id: ["paraf"], en: ["initial a document"], zh: ["简签"] },
    translation: { ngoko: "menehi paraf", krama: "nyukani paraf", "krama-inggil": "maringi paraf" },
  },
  {
    aliases: { id: ["parah"], en: ["severe"], zh: ["严重"] },
    translation: { ngoko: "abot", krama: "awrat", "krama-inggil": "awrat" },
  },
  {
    aliases: { id: ["parang"], en: ["machete"], zh: ["砍刀"] },
    translation: { ngoko: "bendho", krama: "bendho", "krama-inggil": "bendho" },
  },
  {
    aliases: { id: ["pare"], en: ["bitter melon"], zh: ["苦瓜"] },
    translation: { ngoko: "pare", krama: "pare", "krama-inggil": "pare" },
  },
  {
    aliases: { id: ["parfum"], en: ["perfume"], zh: ["香水"] },
    translation: { ngoko: "wangi-wangian", krama: "arum-aruman", "krama-inggil": "arum-aruman" },
  },
  {
    aliases: { id: ["pari"], en: ["ray"], zh: ["鳐鱼"] },
    translation: { ngoko: "pari", krama: "pari", "krama-inggil": "pari" },
  },
  {
    aliases: { id: ["parkir"], en: ["park"], zh: ["停车"] },
    translation: { ngoko: "parkir", krama: "parkir", "krama-inggil": "parkir" },
  },
  {
    aliases: { id: ["paru-paru"], en: ["lungs"], zh: ["肺"] },
    translation: { ngoko: "paru-paru", krama: "paru-paru", "krama-inggil": "paru-paru" },
  },
  {
    aliases: { id: ["parut"], en: ["grate"], zh: ["擦丝"] },
    translation: { ngoko: "marut", krama: "marut", "krama-inggil": "marut" },
  },
  {
    aliases: { id: ["parutan"], en: ["grater"], zh: ["擦丝器"] },
    translation: { ngoko: "parut", krama: "parut", "krama-inggil": "parut" },
  },
  {
    aliases: { id: ["pasang"], en: ["install"], zh: ["安装"] },
    translation: { ngoko: "masang", krama: "masang", "krama-inggil": "masang" },
  },
  {
    aliases: { id: ["pasangan"], en: ["spouse"], zh: ["配偶"] },
    translation: { ngoko: "bojo", krama: "semah", "krama-inggil": "garwa" },
  },
  {
    aliases: { id: ["pasar"], en: ["market"], zh: ["市场"] },
    translation: { ngoko: "pasar", krama: "peken", "krama-inggil": "peken" },
  },
  {
    aliases: { id: ["pasien"], en: ["patient"], zh: ["患者"] },
    translation: { ngoko: "pasien", krama: "pasien", "krama-inggil": "pasien" },
  },
  {
    aliases: { id: ["pasir"], en: ["sand"], zh: ["沙子"] },
    translation: { ngoko: "wedhi", krama: "wedhi", "krama-inggil": "wedhi" },
  },
  {
    aliases: { id: ["pasok"], en: ["supply"], zh: ["供货"] },
    translation: { ngoko: "masok", krama: "masok", "krama-inggil": "masok" },
  },
  {
    aliases: { id: ["pasrah"], en: ["resign oneself"], zh: ["听任"] },
    translation: { ngoko: "pasrah", krama: "pasrah", "krama-inggil": "pasrah" },
  },
  {
    aliases: { id: ["pasta gigi"], en: ["toothpaste"], zh: ["牙膏"] },
    translation: { ngoko: "odhol", krama: "odhol", "krama-inggil": "odhol" },
  },
  {
    aliases: { id: ["pasti"], en: ["certain"], zh: ["肯定"] },
    translation: { ngoko: "mesthi", krama: "tamtu", "krama-inggil": "tamtu" },
  },
  {
    aliases: { id: ["pastor"], en: ["Catholic priest"], zh: ["天主教神父"] },
    translation: { ngoko: "pastur", krama: "pastur", "krama-inggil": "pastur" },
  },
  {
    aliases: { id: ["pasukan"], en: ["troops"], zh: ["部队"] },
    translation: { ngoko: "prajurit", krama: "prajurit", "krama-inggil": "prajurit" },
  },
  {
    aliases: { id: ["patah"], en: ["snapped"], zh: ["折断的"] },
    translation: { ngoko: "tugel", krama: "putung", "krama-inggil": "putung" },
  },
  {
    aliases: { id: ["patih"], en: ["chief minister of a Javanese kingdom"], zh: ["宰相"] },
    translation: { ngoko: "patih", krama: "patih", "krama-inggil": "patih" },
  },
  {
    aliases: { id: ["patuh"], en: ["obedient"], zh: ["服从"] },
    translation: { ngoko: "manut", krama: "miturut", "krama-inggil": "miturut" },
  },
  {
    aliases: { id: ["patung"], en: ["statue"], zh: ["雕像"] },
    translation: { ngoko: "reca", krama: "reca", "krama-inggil": "reca" },
  },
  {
    aliases: { id: ["paus"], en: ["whale"], zh: ["鲸"] },
    translation: { ngoko: "paus", krama: "paus", "krama-inggil": "paus" },
  },
  {
    aliases: { id: ["payet"], en: ["sequin"], zh: ["亮片"] },
    translation: { ngoko: "payet", krama: "payet", "krama-inggil": "payet" },
  },
  {
    aliases: { id: ["payudara"], en: ["breast"], zh: ["乳房"] },
    translation: { ngoko: "susu", krama: "susu", "krama-inggil": "pembayun" },
  },
  {
    aliases: { id: ["payung"], en: ["umbrella"], zh: ["雨伞"] },
    translation: { ngoko: "payung", krama: "songsong", "krama-inggil": "songsong" },
  },
  {
    aliases: { id: ["pecah"], en: ["broken"], zh: ["破碎"] },
    translation: { ngoko: "pecah", krama: "pecah", "krama-inggil": "pecah" },
  },
  {
    aliases: { id: ["pecahkan"], en: ["crack open"], zh: ["敲开"] },
    translation: { ngoko: "mecah", krama: "mecah", "krama-inggil": "mecah" },
  },
  {
    aliases: { id: ["pecel"], en: ["vegetables with peanut sauce"], zh: ["花生酱拌蔬菜"] },
    translation: { ngoko: "pecel", krama: "pecel", "krama-inggil": "pecel" },
  },
  {
    aliases: { id: ["peci"], en: ["cap"], zh: ["帽子"] },
    translation: { ngoko: "kopyah", krama: "kopyah", "krama-inggil": "kopyah" },
  },
  {
    aliases: { id: ["pedagang"], en: ["trader"], zh: ["商贩"] },
    translation: { ngoko: "bakul", krama: "bakul", "krama-inggil": "bakul" },
  },
  {
    aliases: { id: ["pedal"], en: ["pedal"], zh: ["踏板"] },
    translation: { ngoko: "pedhal", krama: "pedhal", "krama-inggil": "pedhal" },
  },
  {
    aliases: { id: ["pedas"], en: ["spicy"], zh: ["辣"] },
    translation: { ngoko: "pedhes", krama: "pedhes", "krama-inggil": "pedhes" },
  },
  {
    aliases: { id: ["peduli"], en: ["care"], zh: ["关心"] },
    translation: { ngoko: "nggatekake", krama: "nggatosaken", "krama-inggil": "nggatosaken" },
  },
  {
    aliases: { id: ["pedulikan"], en: ["care about"], zh: ["关心"] },
    translation: { ngoko: "nggagas", krama: "nggagas", "krama-inggil": "nggagas" },
  },
  {
    aliases: { id: ["pegal"], en: ["sore","aching"], zh: ["酸痛"] },
    translation: { ngoko: "pegel", krama: "pegel", "krama-inggil": "pegel" },
  },
  {
    aliases: { id: ["pegang"], en: ["hold"], zh: ["握住"] },
    translation: { ngoko: "nyekel", krama: "nyepeng", "krama-inggil": "ngasta" },
  },
  {
    aliases: { id: ["pegawai"], en: ["employee"], zh: ["职员"] },
    translation: { ngoko: "pegawai", krama: "pegawai", "krama-inggil": "pegawai" },
  },
  {
    aliases: { id: ["pejal"], en: ["solid"], zh: ["实心的"] },
    translation: { ngoko: "padhet", krama: "padhet", "krama-inggil": "padhet" },
  },
  {
    aliases: { id: ["pejam"], en: ["close one's eyes"], zh: ["闭眼"] },
    translation: { ngoko: "merem", krama: "merem", "krama-inggil": "merem" },
  },
  {
    aliases: { id: ["peka"], en: ["sensitive"], zh: ["敏感"] },
    translation: { ngoko: "landhep pangrasa", krama: "landhep pangraos", "krama-inggil": "landhep pangraos" },
  },
  {
    aliases: { id: ["pekan"], en: ["week"], zh: ["星期"] },
    translation: { ngoko: "minggu", krama: "minggu", "krama-inggil": "minggu" },
  },
  {
    aliases: { id: ["pekarangan"], en: ["house grounds"], zh: ["宅院用地"] },
    translation: { ngoko: "pekarangan", krama: "pekarangan", "krama-inggil": "pekarangan" },
  },
  {
    aliases: { id: ["pekebun"], en: ["plantation farmer"], zh: ["种植户"] },
    translation: { ngoko: "wong tani kebon", krama: "tiyang tani kebon", "krama-inggil": "tiyang tani kebon" },
  },
  {
    aliases: { id: ["pekerja"], en: ["worker"], zh: ["工人"] },
    translation: { ngoko: "buruh", krama: "pegawe", "krama-inggil": "pegawe" },
  },
  {
    aliases: { id: ["pekerjaan"], en: ["work"], zh: ["工作"] },
    translation: { ngoko: "gawean", krama: "padamelan", "krama-inggil": "padamelan" },
  },
  {
    aliases: { id: ["pekerjaan rumah"], en: ["homework"], zh: ["家庭作业"] },
    translation: { ngoko: "PR", krama: "PR", "krama-inggil": "PR" },
  },
  {
    aliases: { id: ["pekik"], en: ["scream"], zh: ["尖叫"] },
    translation: { ngoko: "njerit", krama: "njerit", "krama-inggil": "njerit" },
  },
  {
    aliases: { id: ["pel"], en: ["mop"], zh: ["拖把"] },
    translation: { ngoko: "pèl", krama: "pèl", "krama-inggil": "pèl" },
  },
  {
    aliases: { id: ["pelabuhan"], en: ["port"], zh: ["港口"] },
    translation: { ngoko: "plabuhan", krama: "plabuhan", "krama-inggil": "plabuhan" },
  },
  {
    aliases: { id: ["pelajaran"], en: ["lesson"], zh: ["课程"] },
    translation: { ngoko: "piwulang", krama: "piwulang", "krama-inggil": "piwulang" },
  },
  {
    aliases: { id: ["pelajari"], en: ["study"], zh: ["学习"] },
    translation: { ngoko: "nyinaoni", krama: "nyinaoni", "krama-inggil": "nyinaoni" },
  },
  {
    aliases: { id: ["pelan"], en: ["slow"], zh: ["慢"] },
    translation: { ngoko: "alon", krama: "alon", "krama-inggil": "alon" },
  },
  {
    aliases: { id: ["pelanggan"], en: ["regular customer"], zh: ["老顾客"] },
    translation: { ngoko: "langganan", krama: "langganan", "krama-inggil": "langganan" },
  },
  {
    aliases: { id: ["pelangi"], en: ["rainbow"], zh: ["彩虹"] },
    translation: { ngoko: "kluwung", krama: "kluwung", "krama-inggil": "kluwung" },
  },
  {
    aliases: { id: ["pelatih"], en: ["coach"], zh: ["教练"] },
    translation: { ngoko: "pelatih", krama: "pelatih", "krama-inggil": "pelatih" },
  },
  {
    aliases: { id: ["pelaut"], en: ["sailor"], zh: ["海员"] },
    translation: { ngoko: "pelaut", krama: "pelaut", "krama-inggil": "pelaut" },
  },
  {
    aliases: { id: ["pelawak"], en: ["comedian"], zh: ["喜剧演员"] },
    translation: { ngoko: "pelawak", krama: "pelawak", "krama-inggil": "pelawak" },
  },
  {
    aliases: { id: ["pelayan restoran"], en: ["restaurant server"], zh: ["餐厅服务员"] },
    translation: { ngoko: "pelayan restoran", krama: "pelayan restoran", "krama-inggil": "pelayan restoran" },
  },
  {
    aliases: { id: ["pelayanan"], en: ["service"], zh: ["服务"] },
    translation: { ngoko: "pelayanan", krama: "pelayanan", "krama-inggil": "pelayanan" },
  },
  {
    aliases: { id: ["pelek"], en: ["wheel rim"], zh: ["轮辋"] },
    translation: { ngoko: "peleg", krama: "peleg", "krama-inggil": "peleg" },
  },
  {
    aliases: { id: ["pelihara"], en: ["raise","keep animals"], zh: ["饲养"] },
    translation: { ngoko: "ngingu", krama: "ngingah", "krama-inggil": "ngingah" },
  },
  {
    aliases: { id: ["pelikan"], en: ["pelican"], zh: ["鹈鹕"] },
    translation: { ngoko: "pelikan", krama: "pelikan", "krama-inggil": "pelikan" },
  },
  {
    aliases: { id: ["pelipis"], en: ["temple"], zh: ["太阳穴"] },
    translation: { ngoko: "pilingan", krama: "pilingan", "krama-inggil": "pilingan" },
  },
  {
    aliases: { id: ["pelit"], en: ["stingy"], zh: ["吝啬"] },
    translation: { ngoko: "medit", krama: "cethil", "krama-inggil": "cethil" },
  },
  {
    aliases: { id: ["pelog"], en: ["pelog seven-tone tuning system"], zh: ["佩洛格七声音阶"] },
    translation: { ngoko: "pélog", krama: "pélog", "krama-inggil": "pélog" },
  },
  {
    aliases: { id: ["peluang"], en: ["opportunity"], zh: ["机会"] },
    translation: { ngoko: "kalodhangan", krama: "kalodhangan", "krama-inggil": "kalodhangan" },
  },
  {
    aliases: { id: ["peluit"], en: ["whistle"], zh: ["哨子"] },
    translation: { ngoko: "sempritan", krama: "sempritan", "krama-inggil": "sempritan" },
  },
  {
    aliases: { id: ["peluk"], en: ["hug"], zh: ["拥抱"] },
    translation: { ngoko: "rangkul", krama: "rangkul", "krama-inggil": "rangkul" },
  },
  {
    aliases: { id: ["pelukis"], en: ["painter"], zh: ["画家"] },
    translation: { ngoko: "pelukis", krama: "pelukis", "krama-inggil": "pelukis" },
  },
  {
    aliases: { id: ["peluru"], en: ["bullet"], zh: ["子弹"] },
    translation: { ngoko: "pelor", krama: "pelor", "krama-inggil": "pelor" },
  },
  {
    aliases: { id: ["pemadam"], en: ["extinguisher"], zh: ["灭火器"] },
    translation: { ngoko: "pemadam", krama: "pemadam", "krama-inggil": "pemadam" },
  },
  {
    aliases: { id: ["pemadam kebakaran"], en: ["firefighter"], zh: ["消防员"] },
    translation: { ngoko: "petugas pemadam kebakaran", krama: "petugas pemadam kebakaran", "krama-inggil": "petugas pemadam kebakaran" },
  },
  {
    aliases: { id: ["pemain"], en: ["player"], zh: ["选手"] },
    translation: { ngoko: "pemain", krama: "pemain", "krama-inggil": "pemain" },
  },
  {
    aliases: { id: ["pemakaman"], en: ["burial"], zh: ["安葬"] },
    translation: { ngoko: "panguburan", krama: "panguburan", "krama-inggil": "panguburan" },
  },
  {
    aliases: { id: ["pemalu"], en: ["shy"], zh: ["害羞"] },
    translation: { ngoko: "isinan", krama: "lingseman", "krama-inggil": "lingseman" },
  },
  {
    aliases: { id: ["pemanas air"], en: ["water heater"], zh: ["热水器"] },
    translation: { ngoko: "water heater", krama: "water heater", "krama-inggil": "water heater" },
  },
  {
    aliases: { id: ["pemandu wisata"], en: ["tour guide"], zh: ["导游"] },
    translation: { ngoko: "pramuwisata", krama: "pramuwisata", "krama-inggil": "pramuwisata" },
  },
  {
    aliases: { id: ["pemasok"], en: ["supplier"], zh: ["供应商"] },
    translation: { ngoko: "pemasok", krama: "pemasok", "krama-inggil": "pemasok" },
  },
  {
    aliases: { id: ["pematang"], en: ["field bund"], zh: ["田埂"] },
    translation: { ngoko: "galengan", krama: "galengan", "krama-inggil": "galengan" },
  },
  {
    aliases: { id: ["pematung"], en: ["sculptor"], zh: ["雕塑家"] },
    translation: { ngoko: "juru reca", krama: "juru reca", "krama-inggil": "juru reca" },
  },
  {
    aliases: { id: ["pembantu"], en: ["domestic helper"], zh: ["家政帮工"] },
    translation: { ngoko: "rewang", krama: "rencang", "krama-inggil": "rencang" },
  },
  {
    aliases: { id: ["pembatik"], en: ["batik artisan"], zh: ["蜡染工匠"] },
    translation: { ngoko: "tukang bathik", krama: "tukang bathik", "krama-inggil": "tukang bathik" },
  },
  {
    aliases: { id: ["pembawa acara"], en: ["master of ceremonies"], zh: ["主持人"] },
    translation: { ngoko: "pranatacara", krama: "pranatacara", "krama-inggil": "pranatacara" },
  },
  {
    aliases: { id: ["pembeli"], en: ["buyer"], zh: ["买家"] },
    translation: { ngoko: "sing tuku", krama: "ingkang tumbas", "krama-inggil": "ingkang tumbas" },
  },
  {
    aliases: { id: ["pembuka"], en: ["opener/opening"], zh: ["开口/开启器"] },
    translation: { ngoko: "bukaan", krama: "pambuka", "krama-inggil": "pambuka" },
  },
  {
    aliases: { id: ["pembuluh darah"], en: ["blood vessel"], zh: ["血管"] },
    translation: { ngoko: "pembuluh getih", krama: "pembuluh rah", "krama-inggil": "pembuluh rah" },
  },
  {
    aliases: { id: ["pemerintah"], en: ["government"], zh: ["政府"] },
    translation: { ngoko: "pamarentah", krama: "pamarentah", "krama-inggil": "pamarentah" },
  },
  {
    aliases: { id: ["pemimpin"], en: ["leader"], zh: ["领导"] },
    translation: { ngoko: "pimpinan", krama: "pimpinan", "krama-inggil": "pimpinan" },
  },
  {
    aliases: { id: ["pemindai"], en: ["scanner"], zh: ["扫描仪"] },
    translation: { ngoko: "scanner", krama: "scanner", "krama-inggil": "scanner" },
  },
  {
    aliases: { id: ["pemrogram"], en: ["programmer"], zh: ["程序员"] },
    translation: { ngoko: "programer", krama: "programer", "krama-inggil": "programer" },
  },
  {
    aliases: { id: ["pemuda"], en: ["young man"], zh: ["青年男子"] },
    translation: { ngoko: "nom-noman", krama: "nem-neman", "krama-inggil": "nem-neman" },
  },
  {
    aliases: { id: ["pemudi"], en: ["young woman"], zh: ["青年女子"] },
    translation: { ngoko: "nom-noman wadon", krama: "nem-neman estri", "krama-inggil": "nem-neman estri" },
  },
  {
    aliases: { id: ["pemulung"], en: ["waste picker"], zh: ["拾荒者"] },
    translation: { ngoko: "pemulung", krama: "pemulung", "krama-inggil": "pemulung" },
  },
  {
    aliases: { id: ["pemusik"], en: ["musician"], zh: ["音乐家"] },
    translation: { ngoko: "musisi", krama: "musisi", "krama-inggil": "musisi" },
  },
  {
    aliases: { id: ["pena"], en: ["pen"], zh: ["笔"] },
    translation: { ngoko: "pulpèn", krama: "pulpèn", "krama-inggil": "pulpèn" },
  },
  {
    aliases: { id: ["penakut"], en: ["timid"], zh: ["胆小"] },
    translation: { ngoko: "ajrih", krama: "jirih", "krama-inggil": "jirih" },
  },
  {
    aliases: { id: ["penambang"], en: ["miner"], zh: ["矿工"] },
    translation: { ngoko: "buruh tambang", krama: "buruh tambang", "krama-inggil": "buruh tambang" },
  },
  {
    aliases: { id: ["penanak nasi listrik"], en: ["rice cooker"], zh: ["电饭煲"] },
    translation: { ngoko: "rice cooker", krama: "rice cooker", "krama-inggil": "rice cooker" },
  },
  {
    aliases: { id: ["penari"], en: ["dancer"], zh: ["舞者"] },
    translation: { ngoko: "pambeksa", krama: "pambeksa", "krama-inggil": "pambeksa" },
  },
  {
    aliases: { id: ["penasaran"], en: ["curious and eager to know"], zh: ["好奇"] },
    translation: { ngoko: "penasaran", krama: "penasaran", "krama-inggil": "penasaran" },
  },
  {
    aliases: { id: ["penata rambut"], en: ["hairstylist"], zh: ["发型师"] },
    translation: { ngoko: "penata rambut", krama: "penata rambut", "krama-inggil": "penata rambut" },
  },
  {
    aliases: { id: ["pencak silat"], en: ["pencak silat"], zh: ["班卡苏拉"] },
    translation: { ngoko: "pencak silat", krama: "pencak silat", "krama-inggil": "pencak silat" },
  },
  {
    aliases: { id: ["pendaftaran"], en: ["registration"], zh: ["报名"] },
    translation: { ngoko: "pendhaftaran", krama: "pendhaftaran", "krama-inggil": "pendhaftaran" },
  },
  {
    aliases: { id: ["pendapa"], en: ["open-sided Javanese pavilion"], zh: ["爪哇开放式厅堂"] },
    translation: { ngoko: "pendhapa", krama: "pendhapa", "krama-inggil": "pendhapa" },
  },
  {
    aliases: { id: ["pendek"], en: ["short"], zh: ["矮/短"] },
    translation: { ngoko: "cendhek", krama: "andhap", "krama-inggil": "andhap" },
  },
  {
    aliases: { id: ["pendeta"], en: ["Protestant minister"], zh: ["牧师"] },
    translation: { ngoko: "pandhita", krama: "pandhita", "krama-inggil": "pandhita" },
  },
  {
    aliases: { id: ["pendidikan"], en: ["education"], zh: ["教育"] },
    translation: { ngoko: "pendhidhikan", krama: "pendhidhikan", "krama-inggil": "pendhidhikan" },
  },
  {
    aliases: { id: ["pendingin ruangan"], en: ["air conditioner"], zh: ["空调"] },
    translation: { ngoko: "AC", krama: "AC", "krama-inggil": "AC" },
  },
  {
    aliases: { id: ["penduduk"], en: ["resident"], zh: ["居民"] },
    translation: { ngoko: "warga", krama: "warga", "krama-inggil": "warga" },
  },
  {
    aliases: { id: ["peneliti"], en: ["researcher"], zh: ["研究员"] },
    translation: { ngoko: "panaliti", krama: "panaliti", "krama-inggil": "panaliti" },
  },
  {
    aliases: { id: ["penerbangan"], en: ["flight"], zh: ["航班/飞行"] },
    translation: { ngoko: "penerbangan", krama: "penerbangan", "krama-inggil": "penerbangan" },
  },
  {
    aliases: { id: ["penerjemah"], en: ["translator"], zh: ["翻译员"] },
    translation: { ngoko: "juru basa", krama: "juru basa", "krama-inggil": "juru basa" },
  },
  {
    aliases: { id: ["pengacara"], en: ["lawyer"], zh: ["律师"] },
    translation: { ngoko: "pangacara", krama: "pangacara", "krama-inggil": "pangacara" },
  },
  {
    aliases: { id: ["pengadilan"], en: ["courthouse"], zh: ["法院"] },
    translation: { ngoko: "pengadilan", krama: "pengadilan", "krama-inggil": "pengadilan" },
  },
  {
    aliases: { id: ["pengajian"], en: ["Islamic study gathering"], zh: ["伊斯兰教学习会"] },
    translation: { ngoko: "pengajian", krama: "pengajian", "krama-inggil": "pengajian" },
  },
  {
    aliases: { id: ["pengalaman"], en: ["experience"], zh: ["经验"] },
    translation: { ngoko: "pengalaman", krama: "pengalaman", "krama-inggil": "pengalaman" },
  },
  {
    aliases: { id: ["pengantin"], en: ["bride/groom"], zh: ["新郎新娘"] },
    translation: { ngoko: "manten", krama: "penganten", "krama-inggil": "penganten" },
  },
  {
    aliases: { id: ["pengantin laki-laki"], en: ["groom"], zh: ["新郎"] },
    translation: { ngoko: "penganten lanang", krama: "penganten jaler", "krama-inggil": "penganten kakung" },
  },
  {
    aliases: { id: ["pengantin perempuan"], en: ["bride"], zh: ["新娘"] },
    translation: { ngoko: "penganten wadon", krama: "penganten estri", "krama-inggil": "penganten putri" },
  },
  {
    aliases: { id: ["pengeras suara"], en: ["loudspeaker"], zh: ["扬声器"] },
    translation: { ngoko: "speaker", krama: "speaker", "krama-inggil": "speaker" },
  },
  {
    aliases: { id: ["pengetahuan"], en: ["knowledge"], zh: ["知识"] },
    translation: { ngoko: "kawruh", krama: "kawruh", "krama-inggil": "kawruh" },
  },
  {
    aliases: { id: ["penggaris"], en: ["ruler"], zh: ["尺子"] },
    translation: { ngoko: "mistar", krama: "mistar", "krama-inggil": "mistar" },
  },
  {
    aliases: { id: ["penghapus"], en: ["eraser"], zh: ["橡皮擦"] },
    translation: { ngoko: "pambusak", krama: "setip", "krama-inggil": "setip" },
  },
  {
    aliases: { id: ["penghasilan"], en: ["income"], zh: ["收入"] },
    translation: { ngoko: "asil", krama: "pangasilan", "krama-inggil": "pangasilan" },
  },
  {
    aliases: { id: ["penghulu"], en: ["Islamic marriage officiant"], zh: ["伊斯兰婚礼主持人"] },
    translation: { ngoko: "pengulu", krama: "pengulu", "krama-inggil": "pengulu" },
  },
  {
    aliases: { id: ["penginapan"], en: ["lodging"], zh: ["旅店"] },
    translation: { ngoko: "penginepan", krama: "penginepan", "krama-inggil": "penginepan" },
  },
  {
    aliases: { id: ["pengisi daya"], en: ["charger"], zh: ["充电器"] },
    translation: { ngoko: "cas", krama: "cas", "krama-inggil": "cas" },
  },
  {
    aliases: { id: ["pengojek"], en: ["motorcycle taxi driver"], zh: ["摩托车出租司机"] },
    translation: { ngoko: "tukang ojèk", krama: "tukang ojèk", "krama-inggil": "tukang ojèk" },
  },
  {
    aliases: { id: ["pengrawit"], en: ["gamelan musician"], zh: ["甘美兰乐师"] },
    translation: { ngoko: "pengrawit", krama: "pengrawit", "krama-inggil": "pengrawit" },
  },
  {
    aliases: { id: ["penguin"], en: ["penguin"], zh: ["企鹅"] },
    translation: { ngoko: "penguin", krama: "penguin", "krama-inggil": "penguin" },
  },
  {
    aliases: { id: ["pengunjung"], en: ["visitor"], zh: ["访客"] },
    translation: { ngoko: "tamu", krama: "tamu", "krama-inggil": "tamu" },
  },
  {
    aliases: { id: ["pengusaha"], en: ["entrepreneur"], zh: ["企业家"] },
    translation: { ngoko: "pengusaha", krama: "pengusaha", "krama-inggil": "pengusaha" },
  },
  {
    aliases: { id: ["penis"], en: ["penis"], zh: ["阴茎"] },
    translation: { ngoko: "peli", krama: "peli", "krama-inggil": "kalam" },
  },
  {
    aliases: { id: ["peniti"], en: ["safety pin"], zh: ["安全别针"] },
    translation: { ngoko: "peniti", krama: "peniti", "krama-inggil": "peniti" },
  },
  {
    aliases: { id: ["penjaga gawang"], en: ["goalkeeper"], zh: ["守门员"] },
    translation: { ngoko: "kiper", krama: "kiper", "krama-inggil": "kiper" },
  },
  {
    aliases: { id: ["penjahit"], en: ["tailor"], zh: ["裁缝"] },
    translation: { ngoko: "tukang jahit", krama: "tukang jahit", "krama-inggil": "tukang jahit" },
  },
  {
    aliases: { id: ["penjara"], en: ["prison"], zh: ["监狱"] },
    translation: { ngoko: "pakunjaran", krama: "pakunjaran", "krama-inggil": "pakunjaran" },
  },
  {
    aliases: { id: ["penjual"], en: ["seller"], zh: ["卖家"] },
    translation: { ngoko: "bakul", krama: "bakul", "krama-inggil": "bakul" },
  },
  {
    aliases: { id: ["penonton"], en: ["spectator"], zh: ["观众"] },
    translation: { ngoko: "penonton", krama: "penonton", "krama-inggil": "penonton" },
  },
  {
    aliases: { id: ["pensil"], en: ["pencil"], zh: ["铅笔"] },
    translation: { ngoko: "potlot", krama: "potlot", "krama-inggil": "potlot" },
  },
  {
    aliases: { id: ["penting"], en: ["important"], zh: ["重要"] },
    translation: { ngoko: "penting", krama: "wigati", "krama-inggil": "wigati" },
  },
  {
    aliases: { id: ["penuh"], en: ["full"], zh: ["满的"] },
    translation: { ngoko: "kebak", krama: "kebak", "krama-inggil": "kebak" },
  },
  {
    aliases: { id: ["penulis"], en: ["writer"], zh: ["作家"] },
    translation: { ngoko: "panulis", krama: "panulis", "krama-inggil": "panulis" },
  },
  {
    aliases: { id: ["penumpang"], en: ["passenger"], zh: ["乘客"] },
    translation: { ngoko: "penumpang", krama: "penumpang", "krama-inggil": "penumpang" },
  },
  {
    aliases: { id: ["penyakit"], en: ["illness"], zh: ["疾病"] },
    translation: { ngoko: "lara", krama: "gerah", "krama-inggil": "gerah" },
  },
  {
    aliases: { id: ["penyanyi"], en: ["singer"], zh: ["歌手"] },
    translation: { ngoko: "penyanyi", krama: "penyanyi", "krama-inggil": "penyanyi" },
  },
  {
    aliases: { id: ["penyapu"], en: ["broom"], zh: ["扫帚"] },
    translation: { ngoko: "sapu", krama: "sapu", "krama-inggil": "sapu" },
  },
  {
    aliases: { id: ["penyebab"], en: ["cause"], zh: ["原因"] },
    translation: { ngoko: "sebab", krama: "sebab", "krama-inggil": "sebab" },
  },
  {
    aliases: { id: ["penyeberangan"], en: ["crossing"], zh: ["人行横道/渡口"] },
    translation: { ngoko: "panyebrangan", krama: "panyebrangan", "krama-inggil": "panyebrangan" },
  },
  {
    aliases: { id: ["penyedot debu"], en: ["vacuum cleaner"], zh: ["吸尘器"] },
    translation: { ngoko: "vacuum cleaner", krama: "vacuum cleaner", "krama-inggil": "vacuum cleaner" },
  },
  {
    aliases: { id: ["penyiar"], en: ["broadcaster"], zh: ["播音员"] },
    translation: { ngoko: "penyiar", krama: "penyiar", "krama-inggil": "penyiar" },
  },
  {
    aliases: { id: ["penyiram"], en: ["watering can"], zh: ["洒水壶"] },
    translation: { ngoko: "gembor", krama: "gembor", "krama-inggil": "gembor" },
  },
  {
    aliases: { id: ["penyok"], en: ["dented"], zh: ["凹瘪的"] },
    translation: { ngoko: "penyok", krama: "penyok", "krama-inggil": "penyok" },
  },
  {
    aliases: { id: ["penyu"], en: ["sea turtle"], zh: ["海龟"] },
    translation: { ngoko: "penyu", krama: "penyu", "krama-inggil": "penyu" },
  },
  {
    aliases: { id: ["pepaya"], en: ["papaya"], zh: ["木瓜"] },
    translation: { ngoko: "kates", krama: "gandhul", "krama-inggil": "gandhul" },
  },
  {
    aliases: { id: ["perahu"], en: ["boat"], zh: ["小船"] },
    translation: { ngoko: "prau", krama: "baita", "krama-inggil": "baita" },
  },
  {
    aliases: { id: ["perajin"], en: ["artisan"], zh: ["手工艺人"] },
    translation: { ngoko: "pengrajin", krama: "pengrajin", "krama-inggil": "pengrajin" },
  },
  {
    aliases: { id: ["perak"], en: ["silver"], zh: ["银色"] },
    translation: { ngoko: "salaka", krama: "salaka", "krama-inggil": "salaka" },
  },
  {
    aliases: { id: ["perang"], en: ["war"], zh: ["战争"] },
    translation: { ngoko: "perang", krama: "perang", "krama-inggil": "perang" },
  },
  {
    aliases: { id: ["perangkat keras"], en: ["hardware"], zh: ["硬件"] },
    translation: { ngoko: "hardware", krama: "hardware", "krama-inggil": "hardware" },
  },
  {
    aliases: { id: ["perangkat lunak"], en: ["software"], zh: ["软件"] },
    translation: { ngoko: "software", krama: "software", "krama-inggil": "software" },
  },
  {
    aliases: { id: ["perangko"], en: ["postage stamp"], zh: ["邮票"] },
    translation: { ngoko: "prangko", krama: "prangko", "krama-inggil": "prangko" },
  },
  {
    aliases: { id: ["peras"], en: ["wring out"], zh: ["拧干"] },
    translation: { ngoko: "meres", krama: "meres", "krama-inggil": "meres" },
  },
  {
    aliases: { id: ["perasaan"], en: ["feeling"], zh: ["感受"] },
    translation: { ngoko: "pangrasa", krama: "pangraos", "krama-inggil": "pangraos" },
  },
  {
    aliases: { id: ["peraturan"], en: ["regulation"], zh: ["规定"] },
    translation: { ngoko: "pranatan", krama: "pranatan", "krama-inggil": "pranatan" },
  },
  {
    aliases: { id: ["perawat"], en: ["nurse"], zh: ["护士"] },
    translation: { ngoko: "perawat", krama: "perawat", "krama-inggil": "perawat" },
  },
  {
    aliases: { id: ["perbaiki"], en: ["repair"], zh: ["修理"] },
    translation: { ngoko: "ndandani", krama: "ndandosi", "krama-inggil": "ndandosi" },
  },
  {
    aliases: { id: ["perban"], en: ["bandage"], zh: ["绷带"] },
    translation: { ngoko: "perban", krama: "perban", "krama-inggil": "perban" },
  },
  {
    aliases: { id: ["percaya"], en: ["believe","trust"], zh: ["相信；信任"] },
    translation: { ngoko: "percaya", krama: "pitados", "krama-inggil": "pitados" },
  },
  {
    aliases: { id: ["percayai"], en: ["trust"], zh: ["信任"] },
    translation: { ngoko: "ngandel", krama: "pitados", "krama-inggil": "pitados" },
  },
  {
    aliases: { id: ["perceraian"], en: ["divorce"], zh: ["离婚"] },
    translation: { ngoko: "pegatan", krama: "pegatan", "krama-inggil": "pegatan" },
  },
  {
    aliases: { id: ["perempatan"], en: ["four-way intersection"], zh: ["十字路口"] },
    translation: { ngoko: "prapatan dalan", krama: "prapatan margi", "krama-inggil": "prapatan margi" },
  },
  {
    aliases: { id: ["perempuan"], en: ["woman"], zh: ["女人"] },
    translation: { ngoko: "wedok", krama: "estri", "krama-inggil": "estri" },
  },
  {
    aliases: { id: ["pergelangan kaki"], en: ["ankle joint"], zh: ["踝关节"] },
    translation: { ngoko: "pagelangan sikil", krama: "pagelangan suku", "krama-inggil": "pagelangan suku" },
  },
  {
    aliases: { id: ["pergelangan tangan"], en: ["wrist"], zh: ["手腕"] },
    translation: { ngoko: "bangkekan", krama: "bangkekan", "krama-inggil": "bangkekan" },
  },
  {
    aliases: { id: ["pergi"], en: ["go","leave"], zh: ["去；离开"] },
    translation: { ngoko: "lunga", krama: "kesah", "krama-inggil": "tindak" },
  },
  {
    aliases: { id: ["perhatikan"], en: ["pay attention to"], zh: ["注意"] },
    translation: { ngoko: "nggatekake", krama: "nggatosaken", "krama-inggil": "nggatosaken" },
  },
  {
    aliases: { id: ["perias"], en: ["makeup artist"], zh: ["化妆师"] },
    translation: { ngoko: "juru rias", krama: "juru rias", "krama-inggil": "juru rias" },
  },
  {
    aliases: { id: ["peribahasa"], en: ["proverb"], zh: ["谚语"] },
    translation: { ngoko: "paribasan", krama: "paribasan", "krama-inggil": "paribasan" },
  },
  {
    aliases: { id: ["periksa"], en: ["inspect"], zh: ["检查"] },
    translation: { ngoko: "mriksa", krama: "mriksa", "krama-inggil": "mriksa" },
  },
  {
    aliases: { id: ["peringatkan"], en: ["warn"], zh: ["提醒"] },
    translation: { ngoko: "ngelingake", krama: "ngemutaken", "krama-inggil": "ngemutaken" },
  },
  {
    aliases: { id: ["perintah"], en: ["command"], zh: ["命令"] },
    translation: { ngoko: "mrentah", krama: "mrentah", "krama-inggil": "ndhawuhi" },
  },
  {
    aliases: { id: ["perjalanan"], en: ["journey"], zh: ["旅程"] },
    translation: { ngoko: "lelungan", krama: "lampahan", "krama-inggil": "lampahan" },
  },
  {
    aliases: { id: ["perjanjian"], en: ["agreement"], zh: ["协议"] },
    translation: { ngoko: "janjian", krama: "prasetyan", "krama-inggil": "prasetyan" },
  },
  {
    aliases: { id: ["perkedel"], en: ["potato fritter"], zh: ["炸土豆饼"] },
    translation: { ngoko: "perkedel", krama: "perkedel", "krama-inggil": "perkedel" },
  },
  {
    aliases: { id: ["perkenalkan","kenalkan"], en: ["introduce","allow me to introduce"], zh: ["介绍"] },
    translation: { ngoko: "kenalake", krama: "nepangaken", "krama-inggil": "nepangaken" },
  },
  {
    aliases: { id: ["perkirakan"], en: ["estimate"], zh: ["估计"] },
    translation: { ngoko: "ngira-ira", krama: "nginten-inten", "krama-inggil": "nginten-inten" },
  },
  {
    aliases: { id: ["perkutut"], en: ["zebra dove"], zh: ["斑姬地鸠"] },
    translation: { ngoko: "perkutut", krama: "perkutut", "krama-inggil": "perkutut" },
  },
  {
    aliases: { id: ["perlahan"], en: ["slowly"], zh: ["慢慢地"] },
    translation: { ngoko: "alon-alon", krama: "alon-alon", "krama-inggil": "alon-alon" },
  },
  {
    aliases: { id: ["perlu"], en: ["necessary"], zh: ["必要"] },
    translation: { ngoko: "perlu", krama: "prelu", "krama-inggil": "prelu" },
  },
  {
    aliases: { id: ["permainan"], en: ["game"], zh: ["游戏"] },
    translation: { ngoko: "dolanan", krama: "dolanan", "krama-inggil": "dolanan" },
  },
  {
    aliases: { id: ["permata"], en: ["gem"], zh: ["宝石"] },
    translation: { ngoko: "inten", krama: "sesotya", "krama-inggil": "sesotya" },
  },
  {
    aliases: { id: ["permen"], en: ["candy"], zh: ["糖果"] },
    translation: { ngoko: "gulali", krama: "permen", "krama-inggil": "permen" },
  },
  {
    aliases: { id: ["permisi"], en: ["excuse me"], zh: ["打扰一下；借过"] },
    translation: { ngoko: "amit", krama: "nyuwun sewu", "krama-inggil": "nyuwun sewu" },
  },
  {
    aliases: { id: ["permisi lewat"], en: ["excuse me, may I pass"], zh: ["借过一下"] },
    translation: { ngoko: "nuwun sewu, arep liwat", krama: "nuwun sewu, badhe langkung", "krama-inggil": "nuwun sewu, badhe langkung" },
  },
  {
    aliases: { id: ["permukaan"], en: ["surface"], zh: ["表面"] },
    translation: { ngoko: "lumah", krama: "lumah", "krama-inggil": "lumah" },
  },
  {
    aliases: { id: ["permukiman"], en: ["settlement"], zh: ["聚居地"] },
    translation: { ngoko: "padunungan", krama: "padunungan", "krama-inggil": "padunungan" },
  },
  {
    aliases: { id: ["pernah"], en: ["ever"], zh: ["曾经"] },
    translation: { ngoko: "tau", krama: "nate", "krama-inggil": "nate" },
  },
  {
    aliases: { id: ["pernikahan"], en: ["marriage","wedding"], zh: ["婚姻；婚礼"] },
    translation: { ngoko: "palakrama", krama: "palakrama", "krama-inggil": "palakrama" },
  },
  {
    aliases: { id: ["perpustakaan"], en: ["library"], zh: ["图书馆"] },
    translation: { ngoko: "perpustakaan", krama: "perpustakaan", "krama-inggil": "perpustakaan" },
  },
  {
    aliases: { id: ["persegi"], en: ["square"], zh: ["正方形的"] },
    translation: { ngoko: "pesagi", krama: "pesagi", "krama-inggil": "pesagi" },
  },
  {
    aliases: { id: ["persilakan"], en: ["politely invite to proceed"], zh: ["请"] },
    translation: { ngoko: "ngaturi", krama: "ngaturi", "krama-inggil": "ngaturi" },
  },
  {
    aliases: { id: ["persimpangan"], en: ["intersection"], zh: ["交叉路口"] },
    translation: { ngoko: "prapatan", krama: "prapatan", "krama-inggil": "prapatan" },
  },
  {
    aliases: { id: ["persis"], en: ["exactly"], zh: ["恰好"] },
    translation: { ngoko: "persis", krama: "persis", "krama-inggil": "persis" },
  },
  {
    aliases: { id: ["persneling"], en: ["gearshift"], zh: ["换挡装置"] },
    translation: { ngoko: "persneling", krama: "persneling", "krama-inggil": "persneling" },
  },
  {
    aliases: { id: ["pertama"], en: ["first"], zh: ["第一"] },
    translation: { ngoko: "pisanan", krama: "kaping setunggal", "krama-inggil": "kaping setunggal" },
  },
  {
    aliases: { id: ["pertigaan"], en: ["three-way junction"], zh: ["三岔路口"] },
    translation: { ngoko: "pertelon", krama: "pertigan", "krama-inggil": "pertigan" },
  },
  {
    aliases: { id: ["pertimbangkan"], en: ["weigh up"], zh: ["权衡"] },
    translation: { ngoko: "nimbang-nimbang", krama: "nimbang-nimbang", "krama-inggil": "nimbang-nimbang" },
  },
  {
    aliases: { id: ["pertunangan"], en: ["engagement"], zh: ["订婚"] },
    translation: { ngoko: "pacangan", krama: "pacangan", "krama-inggil": "pacangan" },
  },
  {
    aliases: { id: ["perumahan"], en: ["housing estate"], zh: ["住宅区"] },
    translation: { ngoko: "perumahan", krama: "perumahan", "krama-inggil": "perumahan" },
  },
  {
    aliases: { id: ["perunggu"], en: ["bronze"], zh: ["青铜色"] },
    translation: { ngoko: "prunggu", krama: "prunggu", "krama-inggil": "prunggu" },
  },
  {
    aliases: { id: ["perut"], en: ["stomach","belly"], zh: ["肚子；胃"] },
    translation: { ngoko: "weteng", krama: "padharan", "krama-inggil": "padharan" },
  },
  {
    aliases: { id: ["pesan"], en: ["order/message"], zh: ["订单/信息"] },
    translation: { ngoko: "pesen", krama: "pesen", "krama-inggil": "pesen" },
  },
  {
    aliases: { id: ["pesanan"], en: ["order"], zh: ["订单"] },
    translation: { ngoko: "pesenan", krama: "pesenan", "krama-inggil": "pesenan" },
  },
  {
    aliases: { id: ["pesantren"], en: ["Islamic boarding school"], zh: ["伊斯兰寄宿学校"] },
    translation: { ngoko: "pesantren", krama: "pesantren", "krama-inggil": "pesantren" },
  },
  {
    aliases: { id: ["pesawat"], en: ["airplane"], zh: ["飞机"] },
    translation: { ngoko: "montor mabur", krama: "montor mabur", "krama-inggil": "montor mabur" },
  },
  {
    aliases: { id: ["pesek"], en: ["flat-nosed"], zh: ["塌鼻子的"] },
    translation: { ngoko: "pesek", krama: "pesek", "krama-inggil": "pesek" },
  },
  {
    aliases: { id: ["peserta"], en: ["participant"], zh: ["参与者"] },
    translation: { ngoko: "peserta", krama: "peserta", "krama-inggil": "peserta" },
  },
  {
    aliases: { id: ["pesimistis"], en: ["pessimistic"], zh: ["悲观"] },
    translation: { ngoko: "pesimis", krama: "pesimis", "krama-inggil": "pesimis" },
  },
  {
    aliases: { id: ["pesing"], en: ["pungent smell"], zh: ["刺鼻气味"] },
    translation: { ngoko: "pesing", krama: "pesing", "krama-inggil": "pesing" },
  },
  {
    aliases: { id: ["pesulap"], en: ["magician"], zh: ["魔术师"] },
    translation: { ngoko: "tukang sulap", krama: "tukang sulap", "krama-inggil": "tukang sulap" },
  },
  {
    aliases: { id: ["peta"], en: ["map"], zh: ["地图"] },
    translation: { ngoko: "peta", krama: "peta", "krama-inggil": "peta" },
  },
  {
    aliases: { id: ["petak umpet"], en: ["hide-and-seek"], zh: ["捉迷藏"] },
    translation: { ngoko: "dhelikan", krama: "dhelikan", "krama-inggil": "dhelikan" },
  },
  {
    aliases: { id: ["petani"], en: ["farmer"], zh: ["农民"] },
    translation: { ngoko: "tani", krama: "tani", "krama-inggil": "tani" },
  },
  {
    aliases: { id: ["peternak"], en: ["livestock farmer"], zh: ["养殖户"] },
    translation: { ngoko: "peternak", krama: "peternak", "krama-inggil": "peternak" },
  },
  {
    aliases: { id: ["peti"], en: ["chest"], zh: ["箱子"] },
    translation: { ngoko: "pethi", krama: "pethi", "krama-inggil": "pethi" },
  },
  {
    aliases: { id: ["petik"], en: ["pick fruit or leaves"], zh: ["采摘"] },
    translation: { ngoko: "methik", krama: "methik", "krama-inggil": "methik" },
  },
  {
    aliases: { id: ["petir"], en: ["lightning"], zh: ["闪电"] },
    translation: { ngoko: "bledheg", krama: "bledheg", "krama-inggil": "bledheg" },
  },
  {
    aliases: { id: ["petugas kebersihan"], en: ["cleaner"], zh: ["保洁员"] },
    translation: { ngoko: "tukang resik-resik", krama: "tukang reresik", "krama-inggil": "tukang reresik" },
  },
  {
    aliases: { id: ["petunjuk"], en: ["instruction"], zh: ["指示"] },
    translation: { ngoko: "pituduh", krama: "pitedah", "krama-inggil": "pitedah" },
  },
  {
    aliases: { id: ["piagam"], en: ["certificate"], zh: ["证书"] },
    translation: { ngoko: "piagam", krama: "piagam", "krama-inggil": "piagam" },
  },
  {
    aliases: { id: ["piala"], en: ["trophy"], zh: ["奖杯"] },
    translation: { ngoko: "piala", krama: "piala", "krama-inggil": "piala" },
  },
  {
    aliases: { id: ["piama"], en: ["pajamas"], zh: ["睡衣"] },
    translation: { ngoko: "piyama", krama: "piyama", "krama-inggil": "piyama" },
  },
  {
    aliases: { id: ["pidato"], en: ["give a speech"], zh: ["演讲"] },
    translation: { ngoko: "sesorah", krama: "sesorah", "krama-inggil": "sesorah" },
  },
  {
    aliases: { id: ["pijat"], en: ["massage"], zh: ["按摩"] },
    translation: { ngoko: "pijet", krama: "pijet", "krama-inggil": "pijet" },
  },
  {
    aliases: { id: ["pikap"], en: ["pickup truck"], zh: ["皮卡车"] },
    translation: { ngoko: "pikap", krama: "pikap", "krama-inggil": "pikap" },
  },
  {
    aliases: { id: ["pikir"], en: ["think"], zh: ["思考"] },
    translation: { ngoko: "mikir", krama: "manah", "krama-inggil": "nggalih" },
  },
  {
    aliases: { id: ["pikiran"], en: ["thought"], zh: ["思想"] },
    translation: { ngoko: "pikiran", krama: "penggalih", "krama-inggil": "penggalih" },
  },
  {
    aliases: { id: ["pikirkan"], en: ["think about"], zh: ["考虑"] },
    translation: { ngoko: "mikiri", krama: "mikiri", "krama-inggil": "nggalih" },
  },
  {
    aliases: { id: ["pikul"], en: ["carry"], zh: ["扛"] },
    translation: { ngoko: "nggotong", krama: "nggotong", "krama-inggil": "nggotong" },
  },
  {
    aliases: { id: ["pil"], en: ["pill"], zh: ["药丸"] },
    translation: { ngoko: "pil", krama: "pil", "krama-inggil": "pil" },
  },
  {
    aliases: { id: ["pilah"], en: ["sort"], zh: ["分类"] },
    translation: { ngoko: "milah", krama: "milah", "krama-inggil": "milah" },
  },
  {
    aliases: { id: ["pilek"], en: ["common cold"], zh: ["感冒"] },
    translation: { ngoko: "pileg", krama: "pileg", "krama-inggil": "pileg" },
  },
  {
    aliases: { id: ["pilih"], en: ["choose"], zh: ["选择"] },
    translation: { ngoko: "milih", krama: "milih", "krama-inggil": "milih" },
  },
  {
    aliases: { id: ["pilot"], en: ["pilot"], zh: ["飞行员"] },
    translation: { ngoko: "pilot", krama: "pilot", "krama-inggil": "pilot" },
  },
  {
    aliases: { id: ["pilu"], en: ["sorrowful"], zh: ["悲苦"] },
    translation: { ngoko: "nelangsa", krama: "nelangsa", "krama-inggil": "nelangsa" },
  },
  {
    aliases: { id: ["pimpinan"], en: ["leader"], zh: ["领导"] },
    translation: { ngoko: "pimpinan", krama: "pimpinan", "krama-inggil": "pimpinan" },
  },
  {
    aliases: { id: ["pindah"], en: ["move to another place"], zh: ["迁移"] },
    translation: { ngoko: "pindhah", krama: "pindhah", "krama-inggil": "pindhah" },
  },
  {
    aliases: { id: ["pindahkan"], en: ["move something"], zh: ["挪动"] },
    translation: { ngoko: "mindhah", krama: "mindhah", "krama-inggil": "mindhah" },
  },
  {
    aliases: { id: ["pinggang"], en: ["waist"], zh: ["腰"] },
    translation: { ngoko: "bangkekan", krama: "bangkekan", "krama-inggil": "pamekan" },
  },
  {
    aliases: { id: ["pingsan"], en: ["faint"], zh: ["昏厥"] },
    translation: { ngoko: "semaput", krama: "semaput", "krama-inggil": "semaput" },
  },
  {
    aliases: { id: ["pinjam"], en: ["borrow"], zh: ["借入"] },
    translation: { ngoko: "nyilih", krama: "nyambut", "krama-inggil": "ngampil" },
  },
  {
    aliases: { id: ["pinjaman"], en: ["loan"], zh: ["借款"] },
    translation: { ngoko: "silihan", krama: "sambutan", "krama-inggil": "sambutan" },
  },
  {
    aliases: { id: ["pinjamkan"], en: ["lend"], zh: ["借出"] },
    translation: { ngoko: "nyilihake", krama: "nyambutaken", "krama-inggil": "nyambutaken" },
  },
  {
    aliases: { id: ["pintar"], en: ["smart"], zh: ["聪明"] },
    translation: { ngoko: "pinter", krama: "pinter", "krama-inggil": "pinter" },
  },
  {
    aliases: { id: ["pintu"], en: ["door"], zh: ["门"] },
    translation: { ngoko: "lawang", krama: "konten", "krama-inggil": "konten" },
  },
  {
    aliases: { id: ["pinus"], en: ["pine"], zh: ["松树"] },
    translation: { ngoko: "pinus", krama: "pinus", "krama-inggil": "pinus" },
  },
  {
    aliases: { id: ["pipi"], en: ["cheek"], zh: ["脸颊"] },
    translation: { ngoko: "pipi", krama: "pipi", "krama-inggil": "pangarasan" },
  },
  {
    aliases: { id: ["pipih"], en: ["flattened"], zh: ["扁的"] },
    translation: { ngoko: "gepeng", krama: "gepeng", "krama-inggil": "gepeng" },
  },
  {
    aliases: { id: ["pipit"], en: ["munia"], zh: ["文鸟"] },
    translation: { ngoko: "emprit", krama: "emprit", "krama-inggil": "emprit" },
  },
  {
    aliases: { id: ["pir"], en: ["pear"], zh: ["梨"] },
    translation: { ngoko: "pir", krama: "pir", "krama-inggil": "pir" },
  },
  {
    aliases: { id: ["piring"], en: ["plate"], zh: ["盘子"] },
    translation: { ngoko: "piring", krama: "piring", "krama-inggil": "piring" },
  },
  {
    aliases: { id: ["pisah"], en: ["separate"], zh: ["分开"] },
    translation: { ngoko: "pisah", krama: "pisah", "krama-inggil": "pisah" },
  },
  {
    aliases: { id: ["pisahkan"], en: ["separate"], zh: ["分开"] },
    translation: { ngoko: "misahake", krama: "misahaken", "krama-inggil": "misahaken" },
  },
  {
    aliases: { id: ["pisang"], en: ["banana"], zh: ["香蕉"] },
    translation: { ngoko: "gedhang", krama: "pisang", "krama-inggil": "pisang" },
  },
  {
    aliases: { id: ["pisang goreng"], en: ["fried banana"], zh: ["炸香蕉"] },
    translation: { ngoko: "gedhang goreng", krama: "pisang goreng", "krama-inggil": "pisang goreng" },
  },
  {
    aliases: { id: ["pisau"], en: ["knife"], zh: ["刀"] },
    translation: { ngoko: "peso", krama: "peso", "krama-inggil": "peso" },
  },
  {
    aliases: { id: ["pistol"], en: ["pistol"], zh: ["手枪"] },
    translation: { ngoko: "pistol", krama: "pistol", "krama-inggil": "pistol" },
  },
  {
    aliases: { id: ["pita"], en: ["ribbon"], zh: ["丝带"] },
    translation: { ngoko: "pita", krama: "pita", "krama-inggil": "pita" },
  },
  {
    aliases: { id: ["piutang"], en: ["receivable"], zh: ["应收款"] },
    translation: { ngoko: "piutang", krama: "piutang", "krama-inggil": "piutang" },
  },
  {
    aliases: { id: ["plasenta"], en: ["placenta"], zh: ["胎盘"] },
    translation: { ngoko: "ari-ari", krama: "ari-ari", "krama-inggil": "ari-ari" },
  },
  {
    aliases: { id: ["plastik"], en: ["plastic"], zh: ["塑料"] },
    translation: { ngoko: "plastik", krama: "plastik", "krama-inggil": "plastik" },
  },
  {
    aliases: { id: ["plester"], en: ["adhesive plaster"], zh: ["创可贴"] },
    translation: { ngoko: "plester", krama: "plester", "krama-inggil": "plester" },
  },
  {
    aliases: { id: ["plinplan"], en: ["fickle"], zh: ["反复无常"] },
    translation: { ngoko: "mencla-mencle", krama: "mencla-mencle", "krama-inggil": "mencla-mencle" },
  },
  {
    aliases: { id: ["pohon"], en: ["tree"], zh: ["树"] },
    translation: { ngoko: "wit", krama: "wit", "krama-inggil": "wit" },
  },
  {
    aliases: { id: ["pokok"], en: ["main/essential"], zh: ["主要"] },
    translation: { ngoko: "pokok", krama: "pokok", "krama-inggil": "pokok" },
  },
  {
    aliases: { id: ["pola"], en: ["sewing pattern"], zh: ["裁剪纸样"] },
    translation: { ngoko: "pola", krama: "pola", "krama-inggil": "pola" },
  },
  {
    aliases: { id: ["polisi"], en: ["police officer"], zh: ["警察"] },
    translation: { ngoko: "polisi", krama: "polisi", "krama-inggil": "polisi" },
  },
  {
    aliases: { id: ["polisi tidur"], en: ["speed bump"], zh: ["减速带"] },
    translation: { ngoko: "polisi turu", krama: "polisi turu", "krama-inggil": "polisi turu" },
  },
  {
    aliases: { id: ["polos"], en: ["innocent"], zh: ["单纯"] },
    translation: { ngoko: "polos", krama: "polos", "krama-inggil": "polos" },
  },
  {
    aliases: { id: ["pom bensin"], en: ["gas station"], zh: ["加油站"] },
    translation: { ngoko: "pom bensin", krama: "pom bensin", "krama-inggil": "pom bensin" },
  },
  {
    aliases: { id: ["pompa air"], en: ["water pump"], zh: ["水泵"] },
    translation: { ngoko: "pompa banyu", krama: "pompa toya", "krama-inggil": "pompa toya" },
  },
  {
    aliases: { id: ["Pon"], en: ["Pon, a Javanese five-day-cycle day"], zh: ["爪哇五日历的庞日"] },
    translation: { ngoko: "Pon", krama: "Pon", "krama-inggil": "Pon" },
  },
  {
    aliases: { id: ["pondok"], en: ["hut"], zh: ["小屋"] },
    translation: { ngoko: "gubug", krama: "pondhok", "krama-inggil": "pondhok" },
  },
  {
    aliases: { id: ["ponsel"], en: ["mobile phone"], zh: ["手机"] },
    translation: { ngoko: "HP", krama: "HP", "krama-inggil": "HP" },
  },
  {
    aliases: { id: ["pori-pori"], en: ["pores"], zh: ["毛孔"] },
    translation: { ngoko: "pori-pori", krama: "pori-pori", "krama-inggil": "pori-pori" },
  },
  {
    aliases: { id: ["posisi"], en: ["position"], zh: ["位置"] },
    translation: { ngoko: "posisi", krama: "posisi", "krama-inggil": "posisi" },
  },
  {
    aliases: { id: ["potong"], en: ["cut"], zh: ["切断"] },
    translation: { ngoko: "ngethok", krama: "ngethok", "krama-inggil": "ngethok" },
  },
  {
    aliases: { id: ["potongan"], en: ["piece/cut"], zh: ["切片/部分"] },
    translation: { ngoko: "potongan", krama: "potongan", "krama-inggil": "potongan" },
  },
  {
    aliases: { id: ["prajurit"], en: ["soldier"], zh: ["士兵"] },
    translation: { ngoko: "prajurit", krama: "prajurit", "krama-inggil": "prajurit" },
  },
  {
    aliases: { id: ["praktik"], en: ["practice"], zh: ["实践"] },
    translation: { ngoko: "praktik", krama: "praktik", "krama-inggil": "praktik" },
  },
  {
    aliases: { id: ["pramugara"], en: ["male flight attendant"], zh: ["男空乘"] },
    translation: { ngoko: "pramugara", krama: "pramugara", "krama-inggil": "pramugara" },
  },
  {
    aliases: { id: ["pramugari"], en: ["female flight attendant"], zh: ["空姐"] },
    translation: { ngoko: "pramugari", krama: "pramugari", "krama-inggil": "pramugari" },
  },
  {
    aliases: { id: ["pramuniaga"], en: ["shop assistant"], zh: ["售货员"] },
    translation: { ngoko: "pramuniaga", krama: "pramuniaga", "krama-inggil": "pramuniaga" },
  },
  {
    aliases: { id: ["presiden"], en: ["president"], zh: ["总统"] },
    translation: { ngoko: "presidhen", krama: "presidhen", "krama-inggil": "presidhen" },
  },
  {
    aliases: { id: ["prestasi"], en: ["achievement"], zh: ["成就"] },
    translation: { ngoko: "prestasi", krama: "prestasi", "krama-inggil": "prestasi" },
  },
  {
    aliases: { id: ["printer"], en: ["printer"], zh: ["打印机"] },
    translation: { ngoko: "printer", krama: "printer", "krama-inggil": "printer" },
  },
  {
    aliases: { id: ["produk"], en: ["product"], zh: ["产品"] },
    translation: { ngoko: "produk", krama: "produk", "krama-inggil": "produk" },
  },
  {
    aliases: { id: ["produksi"], en: ["production"], zh: ["生产"] },
    translation: { ngoko: "produksi", krama: "produksi", "krama-inggil": "produksi" },
  },
  {
    aliases: { id: ["profesor"], en: ["professor"], zh: ["教授"] },
    translation: { ngoko: "profesor", krama: "profesor", "krama-inggil": "profesor" },
  },
  {
    aliases: { id: ["program"], en: ["program"], zh: ["项目/程序"] },
    translation: { ngoko: "program", krama: "program", "krama-inggil": "program" },
  },
  {
    aliases: { id: ["promosi"], en: ["promote a product"], zh: ["推广"] },
    translation: { ngoko: "promosi", krama: "promosi", "krama-inggil": "promosi" },
  },
  {
    aliases: { id: ["proporsional"], en: ["well-proportioned"], zh: ["匀称的"] },
    translation: { ngoko: "imbang", krama: "imbang", "krama-inggil": "imbang" },
  },
  {
    aliases: { id: ["proposal"], en: ["proposal"], zh: ["提案"] },
    translation: { ngoko: "proposal", krama: "proposal", "krama-inggil": "proposal" },
  },
  {
    aliases: { id: ["protes"], en: ["protest"], zh: ["抗议"] },
    translation: { ngoko: "protes", krama: "protes", "krama-inggil": "protes" },
  },
  {
    aliases: { id: ["provinsi"], en: ["province"], zh: ["省"] },
    translation: { ngoko: "provinsi", krama: "provinsi", "krama-inggil": "provinsi" },
  },
  {
    aliases: { id: ["proyek"], en: ["project"], zh: ["项目"] },
    translation: { ngoko: "proyek", krama: "proyek", "krama-inggil": "proyek" },
  },
  {
    aliases: { id: ["proyektor"], en: ["projector"], zh: ["投影仪"] },
    translation: { ngoko: "proyektor", krama: "proyektor", "krama-inggil": "proyektor" },
  },
  {
    aliases: { id: ["psikiater"], en: ["psychiatrist"], zh: ["精神科医生"] },
    translation: { ngoko: "psikiater", krama: "psikiater", "krama-inggil": "psikiater" },
  },
  {
    aliases: { id: ["psikolog"], en: ["psychologist"], zh: ["心理学家"] },
    translation: { ngoko: "psikolog", krama: "psikolog", "krama-inggil": "psikolog" },
  },
  {
    aliases: { id: ["puas"], en: ["satisfied"], zh: ["满意"] },
    translation: { ngoko: "marem", krama: "marem", "krama-inggil": "marem" },
  },
  {
    aliases: { id: ["puasa"], en: ["to fast"], zh: ["封斋"] },
    translation: { ngoko: "pasa", krama: "siyam", "krama-inggil": "siyam" },
  },
  {
    aliases: { id: ["pucat"], en: ["pale"], zh: ["苍白"] },
    translation: { ngoko: "pucet", krama: "pucet", "krama-inggil": "pucet" },
  },
  {
    aliases: { id: ["pucung"], en: ["pocung poetic meter"], zh: ["波琼诗律"] },
    translation: { ngoko: "pocung", krama: "pocung", "krama-inggil": "pocung" },
  },
  {
    aliases: { id: ["puisi"], en: ["poem"], zh: ["诗"] },
    translation: { ngoko: "guritan", krama: "guritan", "krama-inggil": "guritan" },
  },
  {
    aliases: { id: ["pujangga"], en: ["poet-scholar"], zh: ["诗人学者"] },
    translation: { ngoko: "pujangga", krama: "pujangga", "krama-inggil": "pujangga" },
  },
  {
    aliases: { id: ["puji"], en: ["praise"], zh: ["赞扬"] },
    translation: { ngoko: "ngalem", krama: "ngalem", "krama-inggil": "ngalem" },
  },
  {
    aliases: { id: ["pukul"], en: ["hit"], zh: ["打"] },
    translation: { ngoko: "nggebug", krama: "nggebug", "krama-inggil": "nggebug" },
  },
  {
    aliases: { id: ["pukul berapa"], en: ["at what time"], zh: ["几点"] },
    translation: { ngoko: "jam pira", krama: "jam pinten", "krama-inggil": "jam pinten" },
  },
  {
    aliases: { id: ["pulang"], en: ["go home"], zh: ["回家"] },
    translation: { ngoko: "mulih", krama: "wangsul", "krama-inggil": "kondur" },
  },
  {
    aliases: { id: ["pulau"], en: ["island"], zh: ["岛"] },
    translation: { ngoko: "pulo", krama: "pulo", "krama-inggil": "pulo" },
  },
  {
    aliases: { id: ["pulpen"], en: ["pen"], zh: ["圆珠笔"] },
    translation: { ngoko: "bolpen", krama: "bolpen", "krama-inggil": "bolpen" },
  },
  {
    aliases: { id: ["pulsa"], en: ["mobile phone credit"], zh: ["话费余额"] },
    translation: { ngoko: "pulsa", krama: "pulsa", "krama-inggil": "pulsa" },
  },
  {
    aliases: { id: ["punakawan"], en: ["comic servant characters in wayang"], zh: ["哇扬戏中的滑稽侍从"] },
    translation: { ngoko: "panakawan", krama: "panakawan", "krama-inggil": "panakawan" },
  },
  {
    aliases: { id: ["puncak"], en: ["peak"], zh: ["山顶"] },
    translation: { ngoko: "pucuk", krama: "pucuk", "krama-inggil": "pucuk" },
  },
  {
    aliases: { id: ["punggung"], en: ["back"], zh: ["背部"] },
    translation: { ngoko: "geger", krama: "pengkeran", "krama-inggil": "pengkeran" },
  },
  {
    aliases: { id: ["punggung tangan"], en: ["back of the hand"], zh: ["手背"] },
    translation: { ngoko: "geger tangan", krama: "geger tangan", "krama-inggil": "pengkeran asta" },
  },
  {
    aliases: { id: ["pupil"], en: ["pupil"], zh: ["瞳孔"] },
    translation: { ngoko: "manik mripat", krama: "manik mripat", "krama-inggil": "manik soca" },
  },
  {
    aliases: { id: ["pupuk"], en: ["fertilizer"], zh: ["肥料"] },
    translation: { ngoko: "rabuk", krama: "rabuk", "krama-inggil": "rabuk" },
  },
  {
    aliases: { id: ["pura"], en: ["Hindu temple"], zh: ["印度教寺庙"] },
    translation: { ngoko: "pura", krama: "pura", "krama-inggil": "pura" },
  },
  {
    aliases: { id: ["pura-pura"], en: ["pretend"], zh: ["假装"] },
    translation: { ngoko: "ethok-ethok", krama: "ethok-ethok", "krama-inggil": "ethok-ethok" },
  },
  {
    aliases: { id: ["pusaka"], en: ["sacred heirloom"], zh: ["神圣传家宝"] },
    translation: { ngoko: "pusaka", krama: "pusaka", "krama-inggil": "pusaka" },
  },
  {
    aliases: { id: ["pusar"], en: ["navel"], zh: ["肚脐"] },
    translation: { ngoko: "udel", krama: "udel", "krama-inggil": "nabi" },
  },
  {
    aliases: { id: ["pusat"], en: ["center"], zh: ["中心"] },
    translation: { ngoko: "punjer", krama: "punjer", "krama-inggil": "punjer" },
  },
  {
    aliases: { id: ["pusat kebugaran"], en: ["fitness center"], zh: ["健身中心"] },
    translation: { ngoko: "papan fitnes", krama: "papan fitnes", "krama-inggil": "papan fitnes" },
  },
  {
    aliases: { id: ["pusat perbelanjaan"], en: ["shopping mall"], zh: ["购物中心"] },
    translation: { ngoko: "mal", krama: "mal", "krama-inggil": "mal" },
  },
  {
    aliases: { id: ["pusing"], en: ["dizzy"], zh: ["头晕"] },
    translation: { ngoko: "mumet", krama: "mumet", "krama-inggil": "mumet" },
  },
  {
    aliases: { id: ["puskesmas"], en: ["community health center"], zh: ["社区卫生服务中心"] },
    translation: { ngoko: "puskesmas", krama: "puskesmas", "krama-inggil": "puskesmas" },
  },
  {
    aliases: { id: ["pustakawan"], en: ["librarian"], zh: ["图书管理员"] },
    translation: { ngoko: "pustakawan", krama: "pustakawan", "krama-inggil": "pustakawan" },
  },
  {
    aliases: { id: ["putar"], en: ["turn around"], zh: ["转动"] },
    translation: { ngoko: "muter", krama: "muter", "krama-inggil": "muter" },
  },
  {
    aliases: { id: ["putih"], en: ["white"], zh: ["白色"] },
    translation: { ngoko: "putih", krama: "pethak", "krama-inggil": "pethak" },
  },
  {
    aliases: { id: ["putih gading"], en: ["ivory white"], zh: ["象牙白"] },
    translation: { ngoko: "putih gadhing", krama: "pethak gadhing", "krama-inggil": "pethak gadhing" },
  },
  {
    aliases: { id: ["putih kebiruan"], en: ["bluish white"], zh: ["蓝白色"] },
    translation: { ngoko: "putih semu biru", krama: "pethak semu biru", "krama-inggil": "pethak semu biru" },
  },
  {
    aliases: { id: ["putih susu"], en: ["milky white"], zh: ["乳白色"] },
    translation: { ngoko: "putih susu", krama: "pethak susu", "krama-inggil": "pethak susu" },
  },
  {
    aliases: { id: ["putih tulang"], en: ["bone white"], zh: ["骨白色"] },
    translation: { ngoko: "putih balung", krama: "pethak tosan", "krama-inggil": "pethak tosan" },
  },
  {
    aliases: { id: ["puting"], en: ["nipple"], zh: ["乳头"] },
    translation: { ngoko: "pentil", krama: "pentil", "krama-inggil": "pentil" },
  },
  {
    aliases: { id: ["putra"], en: ["son"], zh: ["儿子"] },
    translation: { ngoko: "anak lanang", krama: "anak jaler", "krama-inggil": "putra kakung" },
  },
  {
    aliases: { id: ["putri"], en: ["daughter"], zh: ["女儿"] },
    translation: { ngoko: "anak wadon", krama: "anak estri", "krama-inggil": "putra putri" },
  },
  {
    aliases: { id: ["putri raja"], en: ["princess"], zh: ["公主"] },
    translation: { ngoko: "putri ratu", krama: "putri ratu", "krama-inggil": "putri nata" },
  },
  {
    aliases: { id: ["putu"], en: ["bamboo-steamed rice cake with palm sugar"], zh: ["竹筒棕榈糖米糕"] },
    translation: { ngoko: "puthu", krama: "puthu", "krama-inggil": "puthu" },
  },
  {
    aliases: { id: ["putus asa"], en: ["despairing"], zh: ["绝望"] },
    translation: { ngoko: "mutung", krama: "mutung", "krama-inggil": "mutung" },
  },
  {
    aliases: { id: ["putuskan"], en: ["decide"], zh: ["决定"] },
    translation: { ngoko: "mutusake", krama: "mutusaken", "krama-inggil": "mutusaken" },
  },
  {
    aliases: { id: ["quorum"], en: ["quorum"], zh: ["法定人数"] },
    translation: { ngoko: "kuorum", krama: "kuorum", "krama-inggil": "kuorum" },
  },
  {
    aliases: { id: ["Quran"], en: ["Quran"], zh: ["古兰经"] },
    translation: { ngoko: "Al-Qur'an", krama: "Al-Qur'an", "krama-inggil": "Al-Qur'an" },
  },
  {
    aliases: { id: ["rabu"], en: ["Wednesday"], zh: ["星期三"] },
    translation: { ngoko: "Rebo", krama: "Rebo", "krama-inggil": "Rebo" },
  },
  {
    aliases: { id: ["rabun"], en: ["visually impaired"], zh: ["视力模糊"] },
    translation: { ngoko: "lamur", krama: "lamur", "krama-inggil": "lamur" },
  },
  {
    aliases: { id: ["radang"], en: ["inflammation"], zh: ["炎症"] },
    translation: { ngoko: "radhang", krama: "radhang", "krama-inggil": "radhang" },
  },
  {
    aliases: { id: ["radio"], en: ["radio"], zh: ["收音机"] },
    translation: { ngoko: "radhio", krama: "radhio", "krama-inggil": "radhio" },
  },
  {
    aliases: { id: ["ragu"], en: ["hesitant"], zh: ["犹豫"] },
    translation: { ngoko: "mangu-mangu", krama: "mangu-mangu", "krama-inggil": "mangu-mangu" },
  },
  {
    aliases: { id: ["ragukan"], en: ["doubt"], zh: ["怀疑"] },
    translation: { ngoko: "mangu-mangu marang", krama: "mangu-mangu dhateng", "krama-inggil": "mangu-mangu dhateng" },
  },
  {
    aliases: { id: ["rahang"], en: ["jaw"], zh: ["颌骨"] },
    translation: { ngoko: "rahang", krama: "rahang", "krama-inggil": "rahang" },
  },
  {
    aliases: { id: ["rahasia"], en: ["secret"], zh: ["秘密"] },
    translation: { ngoko: "rahasia", krama: "rahasia", "krama-inggil": "rahasia" },
  },
  {
    aliases: { id: ["rahim"], en: ["uterus"], zh: ["子宫"] },
    translation: { ngoko: "guwa garba", krama: "guwa garba", "krama-inggil": "guwa garba" },
  },
  {
    aliases: { id: ["raih"], en: ["reach for"], zh: ["伸手够"] },
    translation: { ngoko: "nggayuh", krama: "nggayuh", "krama-inggil": "nggayuh" },
  },
  {
    aliases: { id: ["raja"], en: ["king"], zh: ["国王"] },
    translation: { ngoko: "ratu", krama: "ratu", "krama-inggil": "nata" },
  },
  {
    aliases: { id: ["rajang"], en: ["cut into thin strips"], zh: ["切丝"] },
    translation: { ngoko: "ngracik", krama: "ngracik", "krama-inggil": "ngracik" },
  },
  {
    aliases: { id: ["rajin"], en: ["industrious"], zh: ["勤劳"] },
    translation: { ngoko: "sregep", krama: "sregep", "krama-inggil": "sregep" },
  },
  {
    aliases: { id: ["rajungan"], en: ["blue swimming crab"], zh: ["蓝泳蟹"] },
    translation: { ngoko: "rajungan", krama: "rajungan", "krama-inggil": "rajungan" },
  },
  {
    aliases: { id: ["rak"], en: ["rack"], zh: ["置物架"] },
    translation: { ngoko: "rak", krama: "rak", "krama-inggil": "rak" },
  },
  {
    aliases: { id: ["raket"], en: ["racket"], zh: ["球拍"] },
    translation: { ngoko: "raket", krama: "raket", "krama-inggil": "raket" },
  },
  {
    aliases: { id: ["rakit"], en: ["raft"], zh: ["木筏"] },
    translation: { ngoko: "gethek", krama: "gethek", "krama-inggil": "gethek" },
  },
  {
    aliases: { id: ["rakyat"], en: ["the people"], zh: ["人民"] },
    translation: { ngoko: "rakyat", krama: "rakyat", "krama-inggil": "rakyat" },
  },
  {
    aliases: { id: ["ramah"], en: ["friendly"], zh: ["友善"] },
    translation: { ngoko: "grapyak", krama: "grapyak", "krama-inggil": "grapyak" },
  },
  {
    aliases: { id: ["ramai"], en: ["lively","bustling"], zh: ["热闹"] },
    translation: { ngoko: "rame", krama: "rame", "krama-inggil": "rame" },
  },
  {
    aliases: { id: ["rambu lalu lintas"], en: ["traffic sign"], zh: ["交通标志"] },
    translation: { ngoko: "rambu lalu lintas", krama: "rambu lalu lintas", "krama-inggil": "rambu lalu lintas" },
  },
  {
    aliases: { id: ["rambut"], en: ["hair"], zh: ["头发"] },
    translation: { ngoko: "rambut", krama: "rikma", "krama-inggil": "rikma" },
  },
  {
    aliases: { id: ["rambutan"], en: ["rambutan"], zh: ["红毛丹"] },
    translation: { ngoko: "rambutan", krama: "rambutan", "krama-inggil": "rambutan" },
  },
  {
    aliases: { id: ["ramping"], en: ["slender"], zh: ["纤细的"] },
    translation: { ngoko: "ramping", krama: "ramping", "krama-inggil": "ramping" },
  },
  {
    aliases: { id: ["rangkak"], en: ["crawl on all fours"], zh: ["爬行"] },
    translation: { ngoko: "mrangkak", krama: "mrangkak", "krama-inggil": "mrangkak" },
  },
  {
    aliases: { id: ["rangkum"], en: ["sum up"], zh: ["归纳"] },
    translation: { ngoko: "ngrangkum", krama: "ngrangkum", "krama-inggil": "ngrangkum" },
  },
  {
    aliases: { id: ["ransel"], en: ["backpack"], zh: ["背包"] },
    translation: { ngoko: "ransel", krama: "ransel", "krama-inggil": "ransel" },
  },
  {
    aliases: { id: ["rantai"], en: ["chain"], zh: ["链条"] },
    translation: { ngoko: "rante", krama: "rante", "krama-inggil": "rante" },
  },
  {
    aliases: { id: ["ranting"], en: ["twig"], zh: ["细枝"] },
    translation: { ngoko: "rencèk", krama: "rencèk", "krama-inggil": "rencèk" },
  },
  {
    aliases: { id: ["rapat"], en: ["meeting"], zh: ["会议"] },
    translation: { ngoko: "rapat", krama: "rapat", "krama-inggil": "rapat" },
  },
  {
    aliases: { id: ["rapikan"], en: ["tidy","arrange"], zh: ["整理"] },
    translation: { ngoko: "nata", krama: "nata", "krama-inggil": "nata" },
  },
  {
    aliases: { id: ["rapor"], en: ["report card"], zh: ["成绩单"] },
    translation: { ngoko: "rapor", krama: "rapor", "krama-inggil": "rapor" },
  },
  {
    aliases: { id: ["rapuh"], en: ["brittle"], zh: ["易碎"] },
    translation: { ngoko: "getas", krama: "getas", "krama-inggil": "getas" },
  },
  {
    aliases: { id: ["rasa"], en: ["taste/feeling"], zh: ["味道/感觉"] },
    translation: { ngoko: "rasa", krama: "raos", "krama-inggil": "raos" },
  },
  {
    aliases: { id: ["rasakan"], en: ["feel"], zh: ["感受"] },
    translation: { ngoko: "ngrasakake", krama: "ngraosaken", "krama-inggil": "ngraosaken" },
  },
  {
    aliases: { id: ["rasul"], en: ["messenger of God"], zh: ["使者"] },
    translation: { ngoko: "rasul", krama: "rasul", "krama-inggil": "rasul" },
  },
  {
    aliases: { id: ["rata"], en: ["even"], zh: ["平整的"] },
    translation: { ngoko: "warata", krama: "warata", "krama-inggil": "warata" },
  },
  {
    aliases: { id: ["ratapi"], en: ["mourn"], zh: ["哀悼"] },
    translation: { ngoko: "nangisi", krama: "nangisi", "krama-inggil": "nangisi" },
  },
  {
    aliases: { id: ["ratu"], en: ["queen"], zh: ["女王"] },
    translation: { ngoko: "ratu wadon", krama: "ratu estri", "krama-inggil": "ratu putri" },
  },
  {
    aliases: { id: ["rawa"], en: ["swamp"], zh: ["沼泽"] },
    translation: { ngoko: "rawa", krama: "rawa", "krama-inggil": "rawa" },
  },
  {
    aliases: { id: ["rawat"], en: ["care for"], zh: ["照料"] },
    translation: { ngoko: "ngopeni", krama: "ngrimat", "krama-inggil": "ngrimat" },
  },
  {
    aliases: { id: ["rawon"], en: ["beef soup with black keluak broth"], zh: ["印尼黑果牛肉汤"] },
    translation: { ngoko: "rawon", krama: "rawon", "krama-inggil": "rawon" },
  },
  {
    aliases: { id: ["raya"], en: ["great/large"], zh: ["盛大"] },
    translation: { ngoko: "gedhe", krama: "ageng", "krama-inggil": "ageng" },
  },
  {
    aliases: { id: ["rayu"], en: ["sweet-talk"], zh: ["哄劝"] },
    translation: { ngoko: "ngrayu", krama: "ngrayu", "krama-inggil": "ngrayu" },
  },
  {
    aliases: { id: ["rebab"], en: ["bowed spike fiddle"], zh: ["拉弦胡琴"] },
    translation: { ngoko: "rebab", krama: "rebab", "krama-inggil": "rebab" },
  },
  {
    aliases: { id: ["rebah"], en: ["fall down"], zh: ["倒下"] },
    translation: { ngoko: "ambruk", krama: "rebah", "krama-inggil": "rebah" },
  },
  {
    aliases: { id: ["rebus"], en: ["boil"], zh: ["煮"] },
    translation: { ngoko: "nggodhog", krama: "nggodhog", "krama-inggil": "nggodhog" },
  },
  {
    aliases: { id: ["rebusan"], en: ["boiled food"], zh: ["水煮食物"] },
    translation: { ngoko: "godhogan", krama: "godhogan", "krama-inggil": "godhogan" },
  },
  {
    aliases: { id: ["receh"], en: ["small change"], zh: ["零钱"] },
    translation: { ngoko: "receh", krama: "receh", "krama-inggil": "receh" },
  },
  {
    aliases: { id: ["reda"], en: ["subside"], zh: ["减弱"] },
    translation: { ngoko: "suda", krama: "suda", "krama-inggil": "suda" },
  },
  {
    aliases: { id: ["redup"], en: ["dim"], zh: ["昏暗"] },
    translation: { ngoko: "remeng-remeng", krama: "remeng-remeng", "krama-inggil": "remeng-remeng" },
  },
  {
    aliases: { id: ["regang"], en: ["stretch out"], zh: ["伸展"] },
    translation: { ngoko: "mulur", krama: "mulur", "krama-inggil": "mulur" },
  },
  {
    aliases: { id: ["regu"], en: ["team/squad"], zh: ["小组"] },
    translation: { ngoko: "regu", krama: "regu", "krama-inggil": "regu" },
  },
  {
    aliases: { id: ["rekan kerja"], en: ["coworker"], zh: ["同事"] },
    translation: { ngoko: "kanca nyambut gawe", krama: "rencang nyambut damel", "krama-inggil": "rencang nyambut damel" },
  },
  {
    aliases: { id: ["rekening"], en: ["account"], zh: ["账户"] },
    translation: { ngoko: "rekening", krama: "rekening", "krama-inggil": "rekening" },
  },
  {
    aliases: { id: ["rektor"], en: ["university rector"], zh: ["大学校长"] },
    translation: { ngoko: "rektor", krama: "rektor", "krama-inggil": "rektor" },
  },
  {
    aliases: { id: ["rel"], en: ["rail"], zh: ["铁轨"] },
    translation: { ngoko: "rel", krama: "rel", "krama-inggil": "rel" },
  },
  {
    aliases: { id: ["rela"], en: ["be willing"], zh: ["甘愿"] },
    translation: { ngoko: "lila", krama: "lila", "krama-inggil": "lila" },
  },
  {
    aliases: { id: ["rem"], en: ["brake"], zh: ["刹车"] },
    translation: { ngoko: "rem", krama: "rem", "krama-inggil": "rem" },
  },
  {
    aliases: { id: ["remaja"], en: ["teenager"], zh: ["青少年"] },
    translation: { ngoko: "nom-noman", krama: "nem-neman", "krama-inggil": "nem-neman" },
  },
  {
    aliases: { id: ["remas"], en: ["squeeze in the hand"], zh: ["揉捏"] },
    translation: { ngoko: "ngremet", krama: "ngremet", "krama-inggil": "ngremet" },
  },
  {
    aliases: { id: ["rematik"], en: ["rheumatism"], zh: ["风湿病"] },
    translation: { ngoko: "rematik", krama: "rematik", "krama-inggil": "rematik" },
  },
  {
    aliases: { id: ["rembulan"], en: ["moon"], zh: ["月亮"] },
    translation: { ngoko: "rembulan", krama: "wulan", "krama-inggil": "wulan" },
  },
  {
    aliases: { id: ["remehkan"], en: ["underestimate"], zh: ["轻视"] },
    translation: { ngoko: "ngremehake", krama: "ngremehaken", "krama-inggil": "ngremehaken" },
  },
  {
    aliases: { id: ["remote"], en: ["remote control"], zh: ["遥控器"] },
    translation: { ngoko: "remot", krama: "remot", "krama-inggil": "remot" },
  },
  {
    aliases: { id: ["rempah"], en: ["spice"], zh: ["香料"] },
    translation: { ngoko: "bumbu", krama: "bumbu", "krama-inggil": "bumbu" },
  },
  {
    aliases: { id: ["rempeyek"], en: ["savory rice-flour crackers"], zh: ["咸味米粉薄脆"] },
    translation: { ngoko: "peyek", krama: "peyek", "krama-inggil": "peyek" },
  },
  {
    aliases: { id: ["renang"], en: ["swim"], zh: ["游泳"] },
    translation: { ngoko: "nglangi", krama: "nglangi", "krama-inggil": "nglangi" },
  },
  {
    aliases: { id: ["rencana"], en: ["plan"], zh: ["计划"] },
    translation: { ngoko: "rencana", krama: "rencana", "krama-inggil": "rencana" },
  },
  {
    aliases: { id: ["rencanakan"], en: ["plan"], zh: ["计划"] },
    translation: { ngoko: "ngrancang", krama: "ngrancang", "krama-inggil": "ngrancang" },
  },
  {
    aliases: { id: ["renda"], en: ["lace"], zh: ["蕾丝"] },
    translation: { ngoko: "renda", krama: "renda", "krama-inggil": "renda" },
  },
  {
    aliases: { id: ["rendah"], en: ["low"], zh: ["低"] },
    translation: { ngoko: "endhek", krama: "andhap", "krama-inggil": "andhap" },
  },
  {
    aliases: { id: ["rendah hati"], en: ["humble"], zh: ["谦逊"] },
    translation: { ngoko: "andhap asor", krama: "andhap asor", "krama-inggil": "andhap asor" },
  },
  {
    aliases: { id: ["rendam"], en: ["soak"], zh: ["浸泡"] },
    translation: { ngoko: "ngrendhem", krama: "ngrendhem", "krama-inggil": "ngrendhem" },
  },
  {
    aliases: { id: ["rendang"], en: ["rendang"], zh: ["仁当咖喱"] },
    translation: { ngoko: "rendang", krama: "rendang", "krama-inggil": "rendang" },
  },
  {
    aliases: { id: ["renggang"], en: ["widely spaced"], zh: ["稀疏的"] },
    translation: { ngoko: "arang", krama: "awis", "krama-inggil": "awis" },
  },
  {
    aliases: { id: ["renggut"], en: ["snatch"], zh: ["抢夺"] },
    translation: { ngoko: "ngrebut", krama: "ngrebut", "krama-inggil": "ngrebut" },
  },
  {
    aliases: { id: ["renung"], en: ["reflect"], zh: ["沉思"] },
    translation: { ngoko: "ngrenung", krama: "ngrenung", "krama-inggil": "ngrenung" },
  },
  {
    aliases: { id: ["reog"], en: ["reog masked dance performance"], zh: ["雷奥格面具舞"] },
    translation: { ngoko: "réyog", krama: "réyog", "krama-inggil": "réyog" },
  },
  {
    aliases: { id: ["repot"], en: ["busy/troublesome"], zh: ["麻烦"] },
    translation: { ngoko: "rekasa", krama: "rekasa", "krama-inggil": "rekasa" },
  },
  {
    aliases: { id: ["resep"], en: ["recipe/prescription"], zh: ["食谱/处方"] },
    translation: { ngoko: "resep", krama: "resep", "krama-inggil": "resep" },
  },
  {
    aliases: { id: ["resepsionis"], en: ["receptionist"], zh: ["接待员"] },
    translation: { ngoko: "rèsèpsionis", krama: "rèsèpsionis", "krama-inggil": "rèsèpsionis" },
  },
  {
    aliases: { id: ["resmi"], en: ["official"], zh: ["正式"] },
    translation: { ngoko: "resmi", krama: "resmi", "krama-inggil": "resmi" },
  },
  {
    aliases: { id: ["restoran"], en: ["restaurant"], zh: ["餐馆"] },
    translation: { ngoko: "restoran", krama: "restoran", "krama-inggil": "restoran" },
  },
  {
    aliases: { id: ["retak"], en: ["cracked"], zh: ["有裂纹的"] },
    translation: { ngoko: "rengat", krama: "rengat", "krama-inggil": "rengat" },
  },
  {
    aliases: { id: ["reuni"], en: ["reunion"], zh: ["团聚"] },
    translation: { ngoko: "reuni", krama: "reuni", "krama-inggil": "reuni" },
  },
  {
    aliases: { id: ["rewel"], en: ["fussy"], zh: ["爱闹"] },
    translation: { ngoko: "rewel", krama: "rewel", "krama-inggil": "rewel" },
  },
  {
    aliases: { id: ["rezeki"], en: ["sustenance/livelihood"], zh: ["生计/福分"] },
    translation: { ngoko: "rejeki", krama: "rejeki", "krama-inggil": "rejeki" },
  },
  {
    aliases: { id: ["riang"], en: ["joyful"], zh: ["欢喜"] },
    translation: { ngoko: "bungah", krama: "bingah", "krama-inggil": "bingah" },
  },
  {
    aliases: { id: ["ribut"], en: ["noisy"], zh: ["吵闹"] },
    translation: { ngoko: "rame", krama: "ribut", "krama-inggil": "ribut" },
  },
  {
    aliases: { id: ["rimbun"], en: ["dense with foliage"], zh: ["茂密"] },
    translation: { ngoko: "rungkut", krama: "rungkut", "krama-inggil": "rungkut" },
  },
  {
    aliases: { id: ["rindu"], en: ["miss someone"], zh: ["想念"] },
    translation: { ngoko: "kangen", krama: "kangen", "krama-inggil": "kangen" },
  },
  {
    aliases: { id: ["ringan"], en: ["lightweight"], zh: ["轻的"] },
    translation: { ngoko: "entheng", krama: "entheng", "krama-inggil": "entheng" },
  },
  {
    aliases: { id: ["ringkas"], en: ["concise"], zh: ["简洁"] },
    translation: { ngoko: "cekak", krama: "ringkes", "krama-inggil": "ringkes" },
  },
  {
    aliases: { id: ["ringsek"], en: ["crushed"], zh: ["压碎"] },
    translation: { ngoko: "remuk", krama: "remuk", "krama-inggil": "remuk" },
  },
  {
    aliases: { id: ["risau"], en: ["worried"], zh: ["担心"] },
    translation: { ngoko: "kuwatir", krama: "kuwatir", "krama-inggil": "kuwatir" },
  },
  {
    aliases: { id: ["risi"], en: ["uncomfortable or squeamish"], zh: ["浑身不自在"] },
    translation: { ngoko: "risi", krama: "risi", "krama-inggil": "risi" },
  },
  {
    aliases: { id: ["risiko"], en: ["risk"], zh: ["风险"] },
    translation: { ngoko: "risiko", krama: "risiko", "krama-inggil": "risiko" },
  },
  {
    aliases: { id: ["ritsleting"], en: ["zipper"], zh: ["拉链"] },
    translation: { ngoko: "resleting", krama: "resleting", "krama-inggil": "resleting" },
  },
  {
    aliases: { id: ["robot"], en: ["robot"], zh: ["机器人"] },
    translation: { ngoko: "robot", krama: "robot", "krama-inggil": "robot" },
  },
  {
    aliases: { id: ["roda"], en: ["wheel"], zh: ["车轮"] },
    translation: { ngoko: "rodha", krama: "rodha", "krama-inggil": "rodha" },
  },
  {
    aliases: { id: ["roh"], en: ["spirit"], zh: ["灵魂"] },
    translation: { ngoko: "roh", krama: "roh", "krama-inggil": "roh" },
  },
  {
    aliases: { id: ["rohani"], en: ["spiritual"], zh: ["精神/灵性"] },
    translation: { ngoko: "rohani", krama: "rohani", "krama-inggil": "rohani" },
  },
  {
    aliases: { id: ["rok"], en: ["skirt"], zh: ["裙子"] },
    translation: { ngoko: "rok", krama: "rok", "krama-inggil": "rok" },
  },
  {
    aliases: { id: ["roket"], en: ["rocket"], zh: ["火箭"] },
    translation: { ngoko: "roket", krama: "roket", "krama-inggil": "roket" },
  },
  {
    aliases: { id: ["rokok"], en: ["cigarette"], zh: ["香烟"] },
    translation: { ngoko: "udud", krama: "rokok", "krama-inggil": "rokok" },
  },
  {
    aliases: { id: ["rombongan"], en: ["group"], zh: ["一群"] },
    translation: { ngoko: "rombongan", krama: "rombongan", "krama-inggil": "rombongan" },
  },
  {
    aliases: { id: ["rompi"], en: ["vest"], zh: ["马甲"] },
    translation: { ngoko: "rompi", krama: "rompi", "krama-inggil": "rompi" },
  },
  {
    aliases: { id: ["rotan"], en: ["rattan"], zh: ["藤"] },
    translation: { ngoko: "penjalin", krama: "penjalin", "krama-inggil": "penjalin" },
  },
  {
    aliases: { id: ["roti"], en: ["bread"], zh: ["面包"] },
    translation: { ngoko: "roti", krama: "roti", "krama-inggil": "roti" },
  },
  {
    aliases: { id: ["router"], en: ["router"], zh: ["路由器"] },
    translation: { ngoko: "router", krama: "router", "krama-inggil": "router" },
  },
  {
    aliases: { id: ["ruang"], en: ["room"], zh: ["房间"] },
    translation: { ngoko: "ruwang", krama: "ruwang", "krama-inggil": "ruwang" },
  },
  {
    aliases: { id: ["ruang kelas"], en: ["classroom"], zh: ["教室"] },
    translation: { ngoko: "ruang kelas", krama: "ruang kelas", "krama-inggil": "ruang kelas" },
  },
  {
    aliases: { id: ["ruang keluarga"], en: ["family room"], zh: ["家庭起居室"] },
    translation: { ngoko: "ruang kulawarga", krama: "ruang kulawarga", "krama-inggil": "ruang kulawarga" },
  },
  {
    aliases: { id: ["ruang makan"], en: ["dining room"], zh: ["餐厅"] },
    translation: { ngoko: "kamar mangan", krama: "kamar nedha", "krama-inggil": "kamar dhahar" },
  },
  {
    aliases: { id: ["ruang tamu"], en: ["reception room"], zh: ["客厅"] },
    translation: { ngoko: "kamar tamu", krama: "kamar tamu", "krama-inggil": "kamar tamu" },
  },
  {
    aliases: { id: ["rubah"], en: ["fox"], zh: ["狐狸"] },
    translation: { ngoko: "rubah", krama: "rubah", "krama-inggil": "rubah" },
  },
  {
    aliases: { id: ["rugi"], en: ["incur a loss"], zh: ["亏损"] },
    translation: { ngoko: "tuna", krama: "tuna", "krama-inggil": "tuna" },
  },
  {
    aliases: { id: ["rujuk"], en: ["reconcile after divorce"], zh: ["复婚"] },
    translation: { ngoko: "rujuk", krama: "rujuk", "krama-inggil": "rujuk" },
  },
  {
    aliases: { id: ["rumah"], en: ["house","home"], zh: ["房子；家"] },
    translation: { ngoko: "omah", krama: "griya", "krama-inggil": "dalem" },
  },
  {
    aliases: { id: ["rumah sakit"], en: ["hospital"], zh: ["医院"] },
    translation: { ngoko: "omah sakit", krama: "griya sakit", "krama-inggil": "griya sakit" },
  },
  {
    aliases: { id: ["rumah tangga"], en: ["household","married life"], zh: ["家庭；婚姻生活"] },
    translation: { ngoko: "bale wisma", krama: "bale griya", "krama-inggil": "bale griya" },
  },
  {
    aliases: { id: ["rumput"], en: ["grass"], zh: ["草"] },
    translation: { ngoko: "suket", krama: "suket", "krama-inggil": "suket" },
  },
  {
    aliases: { id: ["runcing"], en: ["pointed"], zh: ["尖的"] },
    translation: { ngoko: "lancip", krama: "lancip", "krama-inggil": "lancip" },
  },
  {
    aliases: { id: ["runding"], en: ["confer"], zh: ["商谈"] },
    translation: { ngoko: "rembugan", krama: "rembagan", "krama-inggil": "rembagan" },
  },
  {
    aliases: { id: ["rupanya"], en: ["apparently"], zh: ["原来"] },
    translation: { ngoko: "jebule", krama: "jebulipun", "krama-inggil": "jebulipun" },
  },
  {
    aliases: { id: ["rupiah"], en: ["rupiah"], zh: ["印尼盾"] },
    translation: { ngoko: "rupiyah", krama: "rupiyah", "krama-inggil": "rupiyah" },
  },
  {
    aliases: { id: ["rusa"], en: ["deer"], zh: ["鹿"] },
    translation: { ngoko: "menjangan", krama: "menjangan", "krama-inggil": "menjangan" },
  },
  {
    aliases: { id: ["rusak"], en: ["damaged","broken"], zh: ["损坏"] },
    translation: { ngoko: "rusak", krama: "risak", "krama-inggil": "risak" },
  },
  {
    aliases: { id: ["rusuk"], en: ["rib"], zh: ["肋骨"] },
    translation: { ngoko: "iga", krama: "iga", "krama-inggil": "unus" },
  },
  {
    aliases: { id: ["ruwatan"], en: ["ritual to avert misfortune"], zh: ["消灾仪式"] },
    translation: { ngoko: "ruwatan", krama: "ruwatan", "krama-inggil": "ruwatan" },
  },
  {
    aliases: { id: ["saat"], en: ["moment"], zh: ["时刻"] },
    translation: { ngoko: "wayah", krama: "wanci", "krama-inggil": "wanci" },
  },
  {
    aliases: { id: ["sabar"], en: ["patient"], zh: ["耐心"] },
    translation: { ngoko: "sabar", krama: "sabar", "krama-inggil": "sabar" },
  },
  {
    aliases: { id: ["sabit"], en: ["sickle"], zh: ["镰刀"] },
    translation: { ngoko: "arit", krama: "arit", "krama-inggil": "arit" },
  },
  {
    aliases: { id: ["Sabtu"], en: ["Saturday"], zh: ["星期六"] },
    translation: { ngoko: "Setu", krama: "Setu", "krama-inggil": "Setu" },
  },
  {
    aliases: { id: ["sabuk"], en: ["belt"], zh: ["腰带"] },
    translation: { ngoko: "sabuk", krama: "sabuk", "krama-inggil": "paningset" },
  },
  {
    aliases: { id: ["sabuk pengaman"], en: ["seat belt"], zh: ["安全带"] },
    translation: { ngoko: "sabuk pengaman", krama: "sabuk pengaman", "krama-inggil": "sabuk pengaman" },
  },
  {
    aliases: { id: ["sabun"], en: ["soap"], zh: ["肥皂"] },
    translation: { ngoko: "sabun", krama: "sabun", "krama-inggil": "sabun" },
  },
  {
    aliases: { id: ["sadari"], en: ["realize"], zh: ["意识到"] },
    translation: { ngoko: "ngrumangsani", krama: "ngrumaosi", "krama-inggil": "ngrumaosi" },
  },
  {
    aliases: { id: ["sahabat"], en: ["close friend"], zh: ["好友"] },
    translation: { ngoko: "kanca raket", krama: "rencang raket", "krama-inggil": "rencang raket" },
  },
  {
    aliases: { id: ["sahut"], en: ["call back in response"], zh: ["应答"] },
    translation: { ngoko: "nyauri", krama: "nyauri", "krama-inggil": "nyauri" },
  },
  {
    aliases: { id: ["saja"], en: ["just"], zh: ["而已"] },
    translation: { ngoko: "wae", krama: "kemawon", "krama-inggil": "kemawon" },
  },
  {
    aliases: { id: ["sajadah"], en: ["prayer mat"], zh: ["礼拜毯"] },
    translation: { ngoko: "sajadah", krama: "sajadah", "krama-inggil": "sajadah" },
  },
  {
    aliases: { id: ["sajikan"], en: ["serve food"], zh: ["上菜"] },
    translation: { ngoko: "nyuguhake", krama: "nyuguhaken", "krama-inggil": "nyuguhaken" },
  },
  {
    aliases: { id: ["sakelar"], en: ["switch"], zh: ["开关"] },
    translation: { ngoko: "saklar", krama: "saklar", "krama-inggil": "saklar" },
  },
  {
    aliases: { id: ["sakit"], en: ["sick","ill","painful"], zh: ["生病；疼痛"] },
    translation: { ngoko: "lara", krama: "gerah", "krama-inggil": "gerah" },
  },
  {
    aliases: { id: ["sakit hati"], en: ["emotionally hurt"], zh: ["伤心"] },
    translation: { ngoko: "lara ati", krama: "sakit manah", "krama-inggil": "sakit penggalih" },
  },
  {
    aliases: { id: ["saksi"], en: ["witness"], zh: ["见证人"] },
    translation: { ngoko: "seksi", krama: "seksi", "krama-inggil": "seksi" },
  },
  {
    aliases: { id: ["saku"], en: ["pocket"], zh: ["口袋"] },
    translation: { ngoko: "kanthong", krama: "kanthong", "krama-inggil": "kanthong" },
  },
  {
    aliases: { id: ["salah"], en: ["wrong","fault"], zh: ["错误"] },
    translation: { ngoko: "salah", krama: "lepat", "krama-inggil": "lepat" },
  },
  {
    aliases: { id: ["salahkan"], en: ["blame"], zh: ["责怪"] },
    translation: { ngoko: "nyalahake", krama: "nyalahaken", "krama-inggil": "nyalahaken" },
  },
  {
    aliases: { id: ["salak"], en: ["snake fruit"], zh: ["蛇皮果"] },
    translation: { ngoko: "salak", krama: "salak", "krama-inggil": "salak" },
  },
  {
    aliases: { id: ["salam"], en: ["greeting"], zh: ["问候"] },
    translation: { ngoko: "salam", krama: "salam", "krama-inggil": "salam" },
  },
  {
    aliases: { id: ["salat"], en: ["to perform Islamic ritual prayer"], zh: ["做礼拜"] },
    translation: { ngoko: "salat", krama: "salat", "krama-inggil": "salat" },
  },
  {
    aliases: { id: ["saldo"], en: ["balance"], zh: ["余额"] },
    translation: { ngoko: "saldo", krama: "saldo", "krama-inggil": "saldo" },
  },
  {
    aliases: { id: ["salep"], en: ["ointment"], zh: ["药膏"] },
    translation: { ngoko: "salep", krama: "salep", "krama-inggil": "salep" },
  },
  {
    aliases: { id: ["salin"], en: ["copy"], zh: ["抄写"] },
    translation: { ngoko: "nyalin", krama: "nyalin", "krama-inggil": "nyalin" },
  },
  {
    aliases: { id: ["salju"], en: ["snow"], zh: ["雪"] },
    translation: { ngoko: "salju", krama: "salju", "krama-inggil": "salju" },
  },
  {
    aliases: { id: ["sama sekali"], en: ["at all"], zh: ["丝毫"] },
    translation: { ngoko: "babar pisan", krama: "babar pisan", "krama-inggil": "babar pisan" },
  },
  {
    aliases: { id: ["sama-sama"], en: ["you are welcome"], zh: ["不客气"] },
    translation: { ngoko: "padha-padha", krama: "sami-sami", "krama-inggil": "sami-sami" },
  },
  {
    aliases: { id: ["sambal"], en: ["chili relish"], zh: ["辣椒酱"] },
    translation: { ngoko: "sambel", krama: "sambel", "krama-inggil": "sambel" },
  },
  {
    aliases: { id: ["sambil"], en: ["while also doing"], zh: ["一边……一边"] },
    translation: { ngoko: "karo", krama: "kaliyan", "krama-inggil": "kaliyan" },
  },
  {
    aliases: { id: ["sambung"], en: ["connect"], zh: ["连接"] },
    translation: { ngoko: "nyambung", krama: "nyambung", "krama-inggil": "nyambung" },
  },
  {
    aliases: { id: ["sambut"], en: ["welcome"], zh: ["欢迎"] },
    translation: { ngoko: "nyambut", krama: "nyambut", "krama-inggil": "nyambut" },
  },
  {
    aliases: { id: ["sampah"], en: ["garbage"], zh: ["垃圾"] },
    translation: { ngoko: "uwuh", krama: "sampah", "krama-inggil": "sampah" },
  },
  {
    aliases: { id: ["sampai"], en: ["reach"], zh: ["到达"] },
    translation: { ngoko: "tekan", krama: "dumugi", "krama-inggil": "dumugi" },
  },
  {
    aliases: { id: ["sampai bertemu lagi"], en: ["see you again"], zh: ["下次再见"] },
    translation: { ngoko: "nganti ketemu maneh", krama: "ngantos kepanggih malih", "krama-inggil": "ngantos kepanggih malih" },
  },
  {
    aliases: { id: ["sampai besok"], en: ["see you tomorrow"], zh: ["明天见"] },
    translation: { ngoko: "nganti sesuk", krama: "ngantos benjing", "krama-inggil": "ngantos benjing" },
  },
  {
    aliases: { id: ["sampai jumpa"], en: ["see you"], zh: ["再见"] },
    translation: { ngoko: "nganti ketemu", krama: "ngantos kepanggih", "krama-inggil": "ngantos kepanggih" },
  },
  {
    aliases: { id: ["sampai kapan"], en: ["until when"], zh: ["到什么时候"] },
    translation: { ngoko: "nganti kapan", krama: "ngantos kapan", "krama-inggil": "ngantos kapan" },
  },
  {
    aliases: { id: ["sampai sekarang"], en: ["until now"], zh: ["直到现在"] },
    translation: { ngoko: "nganti saiki", krama: "ngantos samenika", "krama-inggil": "ngantos samenika" },
  },
  {
    aliases: { id: ["samping"], en: ["side","beside"], zh: ["旁边"] },
    translation: { ngoko: "sandhing", krama: "sandhing", "krama-inggil": "sandhing" },
  },
  {
    aliases: { id: ["sampo"], en: ["shampoo"], zh: ["洗发水"] },
    translation: { ngoko: "sampo", krama: "sampo", "krama-inggil": "sampo" },
  },
  {
    aliases: { id: ["sampul"], en: ["cover"], zh: ["封面"] },
    translation: { ngoko: "sampul", krama: "sampul", "krama-inggil": "sampul" },
  },
  {
    aliases: { id: ["samudra"], en: ["ocean"], zh: ["海洋"] },
    translation: { ngoko: "segara", krama: "samudra", "krama-inggil": "samudra" },
  },
  {
    aliases: { id: ["sanca"], en: ["python"], zh: ["蟒蛇"] },
    translation: { ngoko: "ula sawa", krama: "sawer sawa", "krama-inggil": "sawer sawa" },
  },
  {
    aliases: { id: ["sandal"], en: ["sandals"], zh: ["凉鞋"] },
    translation: { ngoko: "sandhal", krama: "sandhal", "krama-inggil": "sandhal" },
  },
  {
    aliases: { id: ["sandar"], en: ["lean against"], zh: ["倚靠"] },
    translation: { ngoko: "nyendhe", krama: "nyendhe", "krama-inggil": "nyendhe" },
  },
  {
    aliases: { id: ["sangat"], en: ["very"], zh: ["非常"] },
    translation: { ngoko: "banget", krama: "sanget", "krama-inggil": "sanget" },
  },
  {
    aliases: { id: ["sanggup"], en: ["able"], zh: ["能够"] },
    translation: { ngoko: "kuwat", krama: "saged", "krama-inggil": "saged" },
  },
  {
    aliases: { id: ["sangka"], en: ["suspect or suppose"], zh: ["猜想"] },
    translation: { ngoko: "nyana", krama: "nyana", "krama-inggil": "nyana" },
  },
  {
    aliases: { id: ["sangkal"], en: ["deny"], zh: ["否认"] },
    translation: { ngoko: "nyangkal", krama: "nyangkal", "krama-inggil": "nyangkal" },
  },
  {
    aliases: { id: ["sangrai"], en: ["dry-roast"], zh: ["干炒"] },
    translation: { ngoko: "nyangan", krama: "nyangan", "krama-inggil": "nyangan" },
  },
  {
    aliases: { id: ["sanjung"], en: ["extol"], zh: ["赞美"] },
    translation: { ngoko: "ngalem", krama: "ngalem", "krama-inggil": "ngalem" },
  },
  {
    aliases: { id: ["santai"], en: ["relaxed"], zh: ["放松"] },
    translation: { ngoko: "santai", krama: "santai", "krama-inggil": "santai" },
  },
  {
    aliases: { id: ["santan"], en: ["coconut milk"], zh: ["椰浆"] },
    translation: { ngoko: "santen", krama: "santen", "krama-inggil": "santen" },
  },
  {
    aliases: { id: ["santri"], en: ["Islamic boarding school student"], zh: ["伊斯兰寄宿学校学生"] },
    translation: { ngoko: "santri", krama: "santri", "krama-inggil": "santri" },
  },
  {
    aliases: { id: ["santun"], en: ["courteous"], zh: ["彬彬有礼"] },
    translation: { ngoko: "alus", krama: "alus", "krama-inggil": "alus" },
  },
  {
    aliases: { id: ["sapa"], en: ["greet"], zh: ["打招呼"] },
    translation: { ngoko: "nyapa", krama: "nyapa", "krama-inggil": "nyapa" },
  },
  {
    aliases: { id: ["sapi"], en: ["cow"], zh: ["牛"] },
    translation: { ngoko: "sapi", krama: "sapi", "krama-inggil": "sapi" },
  },
  {
    aliases: { id: ["sapih"], en: ["wean"], zh: ["断奶"] },
    translation: { ngoko: "nyapih", krama: "nyapih", "krama-inggil": "nyapih" },
  },
  {
    aliases: { id: ["sapu"], en: ["sweep"], zh: ["扫"] },
    translation: { ngoko: "nyapu", krama: "nyapu", "krama-inggil": "nyapu" },
  },
  {
    aliases: { id: ["sapu tangan"], en: ["handkerchief"], zh: ["手帕"] },
    translation: { ngoko: "saputangan", krama: "saputangan", "krama-inggil": "saputangan" },
  },
  {
    aliases: { id: ["saraf"], en: ["nerve"], zh: ["神经"] },
    translation: { ngoko: "saraf", krama: "saraf", "krama-inggil": "saraf" },
  },
  {
    aliases: { id: ["saran"], en: ["suggestion"], zh: ["建议"] },
    translation: { ngoko: "usul", krama: "usul", "krama-inggil": "usul" },
  },
  {
    aliases: { id: ["sarang"], en: ["nest"], zh: ["巢"] },
    translation: { ngoko: "susuh", krama: "susuh", "krama-inggil": "susuh" },
  },
  {
    aliases: { id: ["sarankan"], en: ["suggest"], zh: ["建议"] },
    translation: { ngoko: "menehi saran", krama: "nyukani saran", "krama-inggil": "paring saran" },
  },
  {
    aliases: { id: ["sarapan"], en: ["breakfast"], zh: ["早餐"] },
    translation: { ngoko: "sarapan", krama: "nedha enjing", "krama-inggil": "nedha enjing" },
  },
  {
    aliases: { id: ["sarden"], en: ["sardine"], zh: ["沙丁鱼"] },
    translation: { ngoko: "sarden", krama: "sarden", "krama-inggil": "sarden" },
  },
  {
    aliases: { id: ["sariawan"], en: ["mouth ulcer"], zh: ["口腔溃疡"] },
    translation: { ngoko: "sariawan", krama: "sariawan", "krama-inggil": "sariawan" },
  },
  {
    aliases: { id: ["saring"], en: ["strain"], zh: ["过滤"] },
    translation: { ngoko: "nyaring", krama: "nyaring", "krama-inggil": "nyaring" },
  },
  {
    aliases: { id: ["saringan"], en: ["strainer"], zh: ["滤网"] },
    translation: { ngoko: "saringan", krama: "saringan", "krama-inggil": "saringan" },
  },
  {
    aliases: { id: ["saron"], en: ["saron metallophone"], zh: ["萨龙金属排琴"] },
    translation: { ngoko: "saron", krama: "saron", "krama-inggil": "saron" },
  },
  {
    aliases: { id: ["sarung"], en: ["sarong"], zh: ["纱笼"] },
    translation: { ngoko: "sarung", krama: "sarung", "krama-inggil": "sarung" },
  },
  {
    aliases: { id: ["sarung bantal"], en: ["pillowcase"], zh: ["枕套"] },
    translation: { ngoko: "sarung bantal", krama: "sarung bantal", "krama-inggil": "sarung bantal" },
  },
  {
    aliases: { id: ["sarung tangan"], en: ["gloves"], zh: ["手套"] },
    translation: { ngoko: "sarung tangan", krama: "sarung tangan", "krama-inggil": "sarung asta" },
  },
  {
    aliases: { id: ["sastrawan"], en: ["literary writer"], zh: ["文学家"] },
    translation: { ngoko: "sastrawan", krama: "sastrawan", "krama-inggil": "sastrawan" },
  },
  {
    aliases: { id: ["sate"], en: ["satay"], zh: ["沙爹烤串"] },
    translation: { ngoko: "sate", krama: "sate", "krama-inggil": "sate" },
  },
  {
    aliases: { id: ["satelit"], en: ["satellite"], zh: ["卫星"] },
    translation: { ngoko: "satelit", krama: "satelit", "krama-inggil": "satelit" },
  },
  {
    aliases: { id: ["satpam"], en: ["security guard"], zh: ["保安"] },
    translation: { ngoko: "satpam", krama: "satpam", "krama-inggil": "satpam" },
  },
  {
    aliases: { id: ["satu per satu"], en: ["one by one"], zh: ["逐个"] },
    translation: { ngoko: "siji-siji", krama: "setunggal-setunggal", "krama-inggil": "setunggal-setunggal" },
  },
  {
    aliases: { id: ["satu sama lain"], en: ["one another"], zh: ["彼此"] },
    translation: { ngoko: "siji lan sijine", krama: "satunggal kaliyan satunggalipun", "krama-inggil": "satunggal kaliyan satunggalipun" },
  },
  {
    aliases: { id: ["saudara"], en: ["brother","fellow","formal address"], zh: ["兄弟；同胞"] },
    translation: { ngoko: "sedulur", krama: "sedherek", "krama-inggil": "sedherek" },
  },
  {
    aliases: { id: ["saudara kandung"], en: ["biological sibling"], zh: ["亲兄弟姐妹"] },
    translation: { ngoko: "sedulur kandhung", krama: "sadherek kandhung", "krama-inggil": "sadherek kandhung" },
  },
  {
    aliases: { id: ["saudara kembar"], en: ["twin sibling"], zh: ["双胞胎兄弟姐妹"] },
    translation: { ngoko: "sedulur kembar", krama: "sadherek kembar", "krama-inggil": "sadherek kembar" },
  },
  {
    aliases: { id: ["saudara laki-laki"], en: ["brother"], zh: ["兄弟"] },
    translation: { ngoko: "sedulur lanang", krama: "sadherek jaler", "krama-inggil": "sadherek kakung" },
  },
  {
    aliases: { id: ["saudara perempuan"], en: ["sister"], zh: ["姐妹"] },
    translation: { ngoko: "sedulur wadon", krama: "sadherek estri", "krama-inggil": "sadherek putri" },
  },
  {
    aliases: { id: ["saudara seayah"], en: ["paternal half-sibling"], zh: ["同父异母的兄弟姐妹"] },
    translation: { ngoko: "sedulur tunggal bapa", krama: "sedherek tunggal bapak", "krama-inggil": "sedherek tunggal rama" },
  },
  {
    aliases: { id: ["saudara seibu"], en: ["maternal half-sibling"], zh: ["同母异父的兄弟姐妹"] },
    translation: { ngoko: "sedulur tunggal biyung", krama: "sedherek tunggal ibu", "krama-inggil": "sedherek tunggal ibu" },
  },
  {
    aliases: { id: ["saudara tiri"], en: ["stepsibling"], zh: ["继兄弟姐妹"] },
    translation: { ngoko: "sedulur tiri", krama: "sedherek tiri", "krama-inggil": "sedherek tiri" },
  },
  {
    aliases: { id: ["saudari"], en: ["sister","female formal address"], zh: ["姐妹；女士"] },
    translation: { ngoko: "sedulur wadon", krama: "sedherek estri", "krama-inggil": "sedherek putri" },
  },
  {
    aliases: { id: ["sawah"], en: ["rice field"], zh: ["稻田"] },
    translation: { ngoko: "sawah", krama: "sabin", "krama-inggil": "sabin" },
  },
  {
    aliases: { id: ["sawi"], en: ["mustard greens"], zh: ["芥菜"] },
    translation: { ngoko: "sawi", krama: "sawi", "krama-inggil": "sawi" },
  },
  {
    aliases: { id: ["sawo"], en: ["sapodilla"], zh: ["人心果"] },
    translation: { ngoko: "sawo", krama: "sawo", "krama-inggil": "sawo" },
  },
  {
    aliases: { id: ["saya"], en: ["I","me (polite/neutral)"], zh: ["我"] },
    translation: { ngoko: "aku", krama: "kula", "krama-inggil": "kawula" },
  },
  {
    aliases: { id: ["saya dengarkan"], en: ["I am listening"], zh: ["我在听"] },
    translation: { ngoko: "takrungokake", krama: "kula mirengaken", "krama-inggil": "kula mirengaken" },
  },
  {
    aliases: { id: ["saya pamit"], en: ["I will take my leave"], zh: ["我先告辞了"] },
    translation: { ngoko: "aku pamit", krama: "kula nyuwun pamit", "krama-inggil": "kula nyuwun pamit" },
  },
  {
    aliases: { id: ["saya pulang dahulu"], en: ["I am heading home now"], zh: ["我先回家了"] },
    translation: { ngoko: "aku mulih dhisik", krama: "kula wangsul rumiyin", "krama-inggil": "kula wangsul rumiyin" },
  },
  {
    aliases: { id: ["saya sendiri"], en: ["I myself"], zh: ["我自己"] },
    translation: { ngoko: "aku dhewe", krama: "kula piyambak", "krama-inggil": "kula piyambak" },
  },
  {
    aliases: { id: ["saya tidak tahu"], en: ["I don't know"], zh: ["我不知道"] },
    translation: { ngoko: "aku ora ngerti", krama: "kula mboten mangertos", "krama-inggil": "kula mboten mangertos" },
  },
  {
    aliases: { id: ["sayang"], en: ["dear/pity"], zh: ["亲爱的/可惜"] },
    translation: { ngoko: "eman", krama: "eman", "krama-inggil": "eman" },
  },
  {
    aliases: { id: ["sayangi"], en: ["cherish"], zh: ["疼爱"] },
    translation: { ngoko: "nresnani", krama: "nresnani", "krama-inggil": "nresnani" },
  },
  {
    aliases: { id: ["sayangnya"], en: ["unfortunately"], zh: ["可惜"] },
    translation: { ngoko: "emane", krama: "emanipun", "krama-inggil": "emanipun" },
  },
  {
    aliases: { id: ["sayap"], en: ["wing"], zh: ["翅膀"] },
    translation: { ngoko: "swiwi", krama: "swiwi", "krama-inggil": "swiwi" },
  },
  {
    aliases: { id: ["sayur"], en: ["vegetable"], zh: ["蔬菜"] },
    translation: { ngoko: "jangan", krama: "jangan", "krama-inggil": "jangan" },
  },
  {
    aliases: { id: ["sebab"], en: ["for","because"], zh: ["因为"] },
    translation: { ngoko: "awit", krama: "awit", "krama-inggil": "awit" },
  },
  {
    aliases: { id: ["sebagaimana"], en: ["just as"], zh: ["正如"] },
    translation: { ngoko: "kaya dene", krama: "kados dene", "krama-inggil": "kados dene" },
  },
  {
    aliases: { id: ["sebaiknya"], en: ["preferably"], zh: ["最好"] },
    translation: { ngoko: "becike", krama: "prayoginipun", "krama-inggil": "prayoginipun" },
  },
  {
    aliases: { id: ["sebal"], en: ["irritated"], zh: ["烦躁"] },
    translation: { ngoko: "sebel", krama: "sebel", "krama-inggil": "sebel" },
  },
  {
    aliases: { id: ["sebaliknya"], en: ["conversely","on the contrary"], zh: ["相反"] },
    translation: { ngoko: "kosok baline", krama: "kosok wangsulipun", "krama-inggil": "kosok wangsulipun" },
  },
  {
    aliases: { id: ["sebarkan"], en: ["disseminate"], zh: ["传播"] },
    translation: { ngoko: "nyebarake", krama: "nyebaraken", "krama-inggil": "nyebaraken" },
  },
  {
    aliases: { id: ["sebelah"], en: ["side"], zh: ["一边"] },
    translation: { ngoko: "sisih", krama: "sawijining sisih", "krama-inggil": "sawijining sisih" },
  },
  {
    aliases: { id: ["sebelah barat"], en: ["western side"], zh: ["西侧"] },
    translation: { ngoko: "sisih kulon", krama: "sisih kilen", "krama-inggil": "sisih kilen" },
  },
  {
    aliases: { id: ["sebelah selatan"], en: ["southern side"], zh: ["南侧"] },
    translation: { ngoko: "sisih kidul", krama: "sisih kidul", "krama-inggil": "sisih kidul" },
  },
  {
    aliases: { id: ["sebelah timur"], en: ["eastern side"], zh: ["东侧"] },
    translation: { ngoko: "sisih wetan", krama: "sisih wetan", "krama-inggil": "sisih wetan" },
  },
  {
    aliases: { id: ["sebelah utara"], en: ["northern side"], zh: ["北侧"] },
    translation: { ngoko: "sisih lor", krama: "sisih ler", "krama-inggil": "sisih ler" },
  },
  {
    aliases: { id: ["sebelas"], en: ["eleven"], zh: ["十一"] },
    translation: { ngoko: "sewelas", krama: "setunggal welas", "krama-inggil": "setunggal welas" },
  },
  {
    aliases: { id: ["sebelum"], en: ["before"], zh: ["之前"] },
    translation: { ngoko: "sadurunge", krama: "saderengipun", "krama-inggil": "saderengipun" },
  },
  {
    aliases: { id: ["sebelum akhirnya"], en: ["before finally"], zh: ["在最终……之前"] },
    translation: { ngoko: "sadurunge pungkasane", krama: "saderengipun pungkasanipun", "krama-inggil": "saderengipun pungkasanipun" },
  },
  {
    aliases: { id: ["sebelum itu"], en: ["before that"], zh: ["在那之前"] },
    translation: { ngoko: "sadurunge iku", krama: "saderengipun punika", "krama-inggil": "saderengipun punika" },
  },
  {
    aliases: { id: ["sebelumnya"], en: ["previously"], zh: ["之前"] },
    translation: { ngoko: "sadurunge", krama: "saderengipun", "krama-inggil": "saderengipun" },
  },
  {
    aliases: { id: ["sebentar"], en: ["a short while"], zh: ["一会儿"] },
    translation: { ngoko: "sedhela", krama: "sekedhap", "krama-inggil": "sekedhap" },
  },
  {
    aliases: { id: ["sebentar, ya"], en: ["just a moment, please"], zh: ["稍等一下啊"] },
    translation: { ngoko: "sedhela, ya", krama: "sekedhap, nggih", "krama-inggil": "sekedhap, nggih" },
  },
  {
    aliases: { id: ["seberang"], en: ["opposite side"], zh: ["对岸"] },
    translation: { ngoko: "sabrang", krama: "sabrang", "krama-inggil": "sabrang" },
  },
  {
    aliases: { id: ["sebulan"], en: ["one month"], zh: ["一个月"] },
    translation: { ngoko: "sesasi", krama: "sewulan", "krama-inggil": "sewulan" },
  },
  {
    aliases: { id: ["sebut"], en: ["mention"], zh: ["提及"] },
    translation: { ngoko: "nyebut", krama: "nyebat", "krama-inggil": "nyebat" },
  },
  {
    aliases: { id: ["sedang"], en: ["currently","in the middle of"], zh: ["正在"] },
    translation: { ngoko: "lagi", krama: "saweg", "krama-inggil": "saweg" },
  },
  {
    aliases: { id: ["sedangkan"], en: ["whereas"], zh: ["而"] },
    translation: { ngoko: "dene", krama: "dene", "krama-inggil": "dene" },
  },
  {
    aliases: { id: ["sedekah"], en: ["charitable giving"], zh: ["施舍"] },
    translation: { ngoko: "sedhekah", krama: "sedhekah", "krama-inggil": "sedhekah" },
  },
  {
    aliases: { id: ["sederhana"], en: ["unpretentious"], zh: ["朴素"] },
    translation: { ngoko: "prasaja", krama: "prasaja", "krama-inggil": "prasaja" },
  },
  {
    aliases: { id: ["sedia"], en: ["provide"], zh: ["提供"] },
    translation: { ngoko: "nyedhiyakake", krama: "nyawisaken", "krama-inggil": "nyawisaken" },
  },
  {
    aliases: { id: ["sedih"], en: ["sad"], zh: ["难过"] },
    translation: { ngoko: "sedhih", krama: "sungkawa", "krama-inggil": "sungkawa" },
  },
  {
    aliases: { id: ["sedihkan"], en: ["sadden"], zh: ["使伤心"] },
    translation: { ngoko: "gawe sedhih", krama: "damel sedhih", "krama-inggil": "damel sedhih" },
  },
  {
    aliases: { id: ["sedikit"], en: ["a little","few"], zh: ["一点；少量"] },
    translation: { ngoko: "sithik", krama: "sekedhik", "krama-inggil": "sekedhik" },
  },
  {
    aliases: { id: ["sedikit-sedikit"], en: ["in small amounts"], zh: ["一点一点地"] },
    translation: { ngoko: "sithik-sithik", krama: "sakedhik-sakedhik", "krama-inggil": "sakedhik-sakedhik" },
  },
  {
    aliases: { id: ["sedot"], en: ["suck up"], zh: ["吸"] },
    translation: { ngoko: "nyedhot", krama: "nyedhot", "krama-inggil": "nyedhot" },
  },
  {
    aliases: { id: ["seduh"], en: ["brew","steep"], zh: ["冲泡"] },
    translation: { ngoko: "nyedhuh", krama: "nyedhuh", "krama-inggil": "nyedhuh" },
  },
  {
    aliases: { id: ["seenaknya"], en: ["as one pleases"], zh: ["随心所欲地"] },
    translation: { ngoko: "sakarepe", krama: "sapikajengipun", "krama-inggil": "sapikajengipun" },
  },
  {
    aliases: { id: ["segan"], en: ["diffident"], zh: ["拘谨"] },
    translation: { ngoko: "rikuh", krama: "rikuh", "krama-inggil": "rikuh" },
  },
  {
    aliases: { id: ["segar"], en: ["fresh"], zh: ["新鲜"] },
    translation: { ngoko: "seger", krama: "seger", "krama-inggil": "seger" },
  },
  {
    aliases: { id: ["segera"], en: ["soon"], zh: ["马上"] },
    translation: { ngoko: "enggal", krama: "enggal", "krama-inggil": "enggal" },
  },
  {
    aliases: { id: ["segitiga"], en: ["triangular"], zh: ["三角形的"] },
    translation: { ngoko: "segi telu", krama: "segi tiga", "krama-inggil": "segi tiga" },
  },
  {
    aliases: { id: ["sehari"], en: ["one day"], zh: ["一天"] },
    translation: { ngoko: "sedina", krama: "sedinten", "krama-inggil": "sedinten" },
  },
  {
    aliases: { id: ["seharian"], en: ["all day"], zh: ["整天"] },
    translation: { ngoko: "sedina muput", krama: "sadinten muput", "krama-inggil": "sadinten muput" },
  },
  {
    aliases: { id: ["seharusnya"], en: ["as one should"], zh: ["理应"] },
    translation: { ngoko: "kudune", krama: "kedahipun", "krama-inggil": "kedahipun" },
  },
  {
    aliases: { id: ["sehat"], en: ["healthy"], zh: ["健康"] },
    translation: { ngoko: "waras", krama: "saras", "krama-inggil": "saras" },
  },
  {
    aliases: { id: ["sehingga"], en: ["so that","with the result that"], zh: ["以致"] },
    translation: { ngoko: "nganti", krama: "ngantos", "krama-inggil": "ngantos" },
  },
  {
    aliases: { id: ["sejajar"], en: ["parallel"], zh: ["平行"] },
    translation: { ngoko: "sejajar", krama: "sejajar", "krama-inggil": "sejajar" },
  },
  {
    aliases: { id: ["sejak"], en: ["since"], zh: ["自从"] },
    translation: { ngoko: "wiwit", krama: "wiwit", "krama-inggil": "wiwit" },
  },
  {
    aliases: { id: ["sejak dahulu"], en: ["since long ago"], zh: ["从以前起"] },
    translation: { ngoko: "wiwit biyen", krama: "wiwit rumiyin", "krama-inggil": "wiwit rumiyin" },
  },
  {
    aliases: { id: ["sejak kapan"], en: ["since when"], zh: ["从什么时候起"] },
    translation: { ngoko: "wiwit kapan", krama: "wiwit kapan", "krama-inggil": "wiwit kapan" },
  },
  {
    aliases: { id: ["sejarah"], en: ["history"], zh: ["历史"] },
    translation: { ngoko: "sejarah", krama: "sejarah", "krama-inggil": "sejarah" },
  },
  {
    aliases: { id: ["sejuk"], en: ["cool"], zh: ["凉爽"] },
    translation: { ngoko: "adem", krama: "asrep", "krama-inggil": "asrep" },
  },
  {
    aliases: { id: ["sejuta"], en: ["one million"], zh: ["一百万"] },
    translation: { ngoko: "sayuta", krama: "setunggal yuta", "krama-inggil": "setunggal yuta" },
  },
  {
    aliases: { id: ["seka"], en: ["wipe someone's body"], zh: ["擦身"] },
    translation: { ngoko: "nyeka", krama: "nyeka", "krama-inggil": "nyeka" },
  },
  {
    aliases: { id: ["sekali"], en: ["once"], zh: ["一次"] },
    translation: { ngoko: "pisan", krama: "sepisan", "krama-inggil": "sepisan" },
  },
  {
    aliases: { id: ["sekaligus"], en: ["at the same time"], zh: ["一并"] },
    translation: { ngoko: "sisan", krama: "sisan", "krama-inggil": "sisan" },
  },
  {
    aliases: { id: ["sekalipun"], en: ["even if"], zh: ["即使"] },
    translation: { ngoko: "senajan", krama: "senajan", "krama-inggil": "senajan" },
  },
  {
    aliases: { id: ["sekam"], en: ["rice husk"], zh: ["稻壳"] },
    translation: { ngoko: "brambut", krama: "brambut", "krama-inggil": "brambut" },
  },
  {
    aliases: { id: ["sekarang"], en: ["now"], zh: ["现在"] },
    translation: { ngoko: "saiki", krama: "sakmenika", "krama-inggil": "sakmenika" },
  },
  {
    aliases: { id: ["sekaten"], en: ["Javanese festival commemorating Muhammad's birth"], zh: ["爪哇纪念穆罕默德诞辰的节庆"] },
    translation: { ngoko: "sekaten", krama: "sekaten", "krama-inggil": "sekaten" },
  },
  {
    aliases: { id: ["seketika"], en: ["instantly"], zh: ["瞬间"] },
    translation: { ngoko: "sanalika", krama: "sanalika", "krama-inggil": "sanalika" },
  },
  {
    aliases: { id: ["sekolah"], en: ["school"], zh: ["学校"] },
    translation: { ngoko: "sekolah", krama: "sekolah", "krama-inggil": "sekolah" },
  },
  {
    aliases: { id: ["sekretaris"], en: ["secretary"], zh: ["秘书"] },
    translation: { ngoko: "sèkrètaris", krama: "sèkrètaris", "krama-inggil": "sèkrètaris" },
  },
  {
    aliases: { id: ["sekrup"], en: ["screw"], zh: ["螺丝"] },
    translation: { ngoko: "sekrup", krama: "sekrup", "krama-inggil": "sekrup" },
  },
  {
    aliases: { id: ["sela"], en: ["interrupt"], zh: ["插话"] },
    translation: { ngoko: "nyelani", krama: "nyelani", "krama-inggil": "nyelani" },
  },
  {
    aliases: { id: ["selada"], en: ["lettuce"], zh: ["生菜"] },
    translation: { ngoko: "slada", krama: "slada", "krama-inggil": "slada" },
  },
  {
    aliases: { id: ["selain itu"], en: ["in addition"], zh: ["此外"] },
    translation: { ngoko: "saliyane iku", krama: "sanesipun punika", "krama-inggil": "sanesipun punika" },
  },
  {
    aliases: { id: ["selalu"], en: ["always"], zh: ["总是"] },
    translation: { ngoko: "mesthi", krama: "tansah", "krama-inggil": "tansah" },
  },
  {
    aliases: { id: ["selam"], en: ["dive underwater"], zh: ["潜水"] },
    translation: { ngoko: "nyilem", krama: "nyilem", "krama-inggil": "nyilem" },
  },
  {
    aliases: { id: ["selama"], en: ["during"], zh: ["期间"] },
    translation: { ngoko: "sajrone", krama: "salebeting", "krama-inggil": "salebeting" },
  },
  {
    aliases: { id: ["selama masih"], en: ["as long as still"], zh: ["只要还"] },
    translation: { ngoko: "anggere isih", krama: "anggeripun taksih", "krama-inggil": "anggeripun taksih" },
  },
  {
    aliases: { id: ["selamanya"], en: ["forever"], zh: ["永远"] },
    translation: { ngoko: "salawase", krama: "salaminipun", "krama-inggil": "salaminipun" },
  },
  {
    aliases: { id: ["selamat"], en: ["safe/congratulations"], zh: ["平安/祝贺"] },
    translation: { ngoko: "slamet", krama: "wilujeng", "krama-inggil": "wilujeng" },
  },
  {
    aliases: { id: ["selamat bekerja"], en: ["have a good day at work"], zh: ["祝工作愉快"] },
    translation: { ngoko: "sugeng nyambut gawe", krama: "sugeng nyambut damel", "krama-inggil": "sugeng nyambut damel" },
  },
  {
    aliases: { id: ["selamat belajar"], en: ["enjoy your studies"], zh: ["祝学习愉快"] },
    translation: { ngoko: "sugeng sinau", krama: "sugeng sinau", "krama-inggil": "sugeng sinau" },
  },
  {
    aliases: { id: ["selamat beristirahat"], en: ["have a good rest"], zh: ["好好休息"] },
    translation: { ngoko: "sugeng ngaso", krama: "sugeng ngaso", "krama-inggil": "sugeng kendel" },
  },
  {
    aliases: { id: ["selamat bertemu kembali"], en: ["welcome back","good to meet again"], zh: ["很高兴再次见面"] },
    translation: { ngoko: "sugeng ketemu maneh", krama: "sugeng kepanggih malih", "krama-inggil": "sugeng kepanggih malih" },
  },
  {
    aliases: { id: ["selamat datang"], en: ["welcome"], zh: ["欢迎"] },
    translation: { ngoko: "sugeng rawuh", krama: "sugeng rawuh", "krama-inggil": "sugeng rawuh" },
  },
  {
    aliases: { id: ["selamat jalan"], en: ["have a safe journey"], zh: ["一路平安"] },
    translation: { ngoko: "slamet dalane", krama: "sugeng tindak", "krama-inggil": "sugeng tindak" },
  },
  {
    aliases: { id: ["selamat Lebaran"], en: ["happy Eid"], zh: ["开斋节快乐"] },
    translation: { ngoko: "sugeng Riyaya", krama: "sugeng Riyadi", "krama-inggil": "sugeng Riyadi" },
  },
  {
    aliases: { id: ["selamat malam"], en: ["good evening","good night"], zh: ["晚上好；晚安"] },
    translation: { ngoko: "sugeng dalu", krama: "sugeng dalu", "krama-inggil": "sugeng dalu" },
  },
  {
    aliases: { id: ["selamat menempuh hidup baru"], en: ["best wishes for your married life"], zh: ["新婚快乐"] },
    translation: { ngoko: "sugeng omah-omah", krama: "sugeng gesang bebrayan", "krama-inggil": "sugeng gesang bebrayan" },
  },
  {
    aliases: { id: ["selamat pagi"], en: ["good morning"], zh: ["早上好"] },
    translation: { ngoko: "sugeng enjing", krama: "sugeng enjing", "krama-inggil": "sugeng enjing" },
  },
  {
    aliases: { id: ["selamat siang"], en: ["good afternoon"], zh: ["中午好"] },
    translation: { ngoko: "sugeng siyang", krama: "sugeng siyang", "krama-inggil": "sugeng siyang" },
  },
  {
    aliases: { id: ["selamat sore"], en: ["good late afternoon"], zh: ["下午好"] },
    translation: { ngoko: "sugeng sonten", krama: "sugeng sonten", "krama-inggil": "sugeng sonten" },
  },
  {
    aliases: { id: ["selamat tahun baru"], en: ["happy New Year"], zh: ["新年快乐"] },
    translation: { ngoko: "sugeng taun anyar", krama: "sugeng warsa enggal", "krama-inggil": "sugeng warsa enggal" },
  },
  {
    aliases: { id: ["selamat tidur"], en: ["sleep well"], zh: ["晚安"] },
    translation: { ngoko: "sugeng sare", krama: "sugeng sare", "krama-inggil": "sugeng sare" },
  },
  {
    aliases: { id: ["selamat tinggal"], en: ["goodbye to those staying"], zh: ["留步，再见"] },
    translation: { ngoko: "slamet sing ditinggal", krama: "sugeng kantun", "krama-inggil": "sugeng kantun" },
  },
  {
    aliases: { id: ["selamat ulang tahun"], en: ["happy birthday"], zh: ["生日快乐"] },
    translation: { ngoko: "sugeng ambal warsa", krama: "sugeng ambal warsa", "krama-inggil": "sugeng ambal warsa" },
  },
  {
    aliases: { id: ["selamatan"], en: ["communal blessing feast"], zh: ["祈福宴"] },
    translation: { ngoko: "slametan", krama: "wilujengan", "krama-inggil": "wilujengan" },
  },
  {
    aliases: { id: ["selanjutnya"], en: ["next"], zh: ["接下来"] },
    translation: { ngoko: "sabancure", krama: "salajengipun", "krama-inggil": "salajengipun" },
  },
  {
    aliases: { id: ["selapanan"], en: ["thirty-fifth-day birth celebration"], zh: ["出生第三十五天庆典"] },
    translation: { ngoko: "selapanan", krama: "selapanan", "krama-inggil": "selapanan" },
  },
  {
    aliases: { id: ["Selasa"], en: ["Tuesday"], zh: ["星期二"] },
    translation: { ngoko: "Slasa", krama: "Slasa", "krama-inggil": "Slasa" },
  },
  {
    aliases: { id: ["selatan"], en: ["south"], zh: ["南"] },
    translation: { ngoko: "kidul", krama: "kidul", "krama-inggil": "kidul" },
  },
  {
    aliases: { id: ["seledri"], en: ["celery"], zh: ["芹菜"] },
    translation: { ngoko: "sledri", krama: "sledri", "krama-inggil": "sledri" },
  },
  {
    aliases: { id: ["selendang"], en: ["shawl"], zh: ["披巾"] },
    translation: { ngoko: "sléndhang", krama: "sléndhang", "krama-inggil": "sléndhang" },
  },
  {
    aliases: { id: ["selesai"], en: ["finished"], zh: ["完成"] },
    translation: { ngoko: "rampung", krama: "sampun rampung", "krama-inggil": "sampun rampung" },
  },
  {
    aliases: { id: ["selidiki"], en: ["investigate"], zh: ["调查"] },
    translation: { ngoko: "nyelidiki", krama: "nyelidiki", "krama-inggil": "nyelidiki" },
  },
  {
    aliases: { id: ["selimut"], en: ["blanket"], zh: ["毯子"] },
    translation: { ngoko: "kemul", krama: "singeb", "krama-inggil": "singeb" },
  },
  {
    aliases: { id: ["selimuti"], en: ["cover with a blanket"], zh: ["盖被子"] },
    translation: { ngoko: "nyelimuti", krama: "nyelimuti", "krama-inggil": "nyelimuti" },
  },
  {
    aliases: { id: ["selingkuh"], en: ["cheat on partner"], zh: ["出轨"] },
    translation: { ngoko: "selingkuh", krama: "selingkuh", "krama-inggil": "selingkuh" },
  },
  {
    aliases: { id: ["selokan"], en: ["drainage ditch"], zh: ["排水沟"] },
    translation: { ngoko: "kalen", krama: "kalen", "krama-inggil": "kalen" },
  },
  {
    aliases: { id: ["selotip"], en: ["adhesive tape"], zh: ["胶带"] },
    translation: { ngoko: "sélotip", krama: "sélotip", "krama-inggil": "sélotip" },
  },
  {
    aliases: { id: ["seluruh"], en: ["all"], zh: ["全部"] },
    translation: { ngoko: "kabeh", krama: "sedaya", "krama-inggil": "sedaya" },
  },
  {
    aliases: { id: ["semak"], en: ["thicket"], zh: ["灌木丛"] },
    translation: { ngoko: "grumbul", krama: "grumbul", "krama-inggil": "grumbul" },
  },
  {
    aliases: { id: ["semakin"], en: ["increasingly"], zh: ["越来越"] },
    translation: { ngoko: "saya", krama: "saya", "krama-inggil": "saya" },
  },
  {
    aliases: { id: ["semalam"], en: ["one night"], zh: ["一夜"] },
    translation: { ngoko: "sewengi", krama: "sedalu", "krama-inggil": "sedalu" },
  },
  {
    aliases: { id: ["semalaman"], en: ["all night"], zh: ["整夜"] },
    translation: { ngoko: "sewengi muput", krama: "sedalu muput", "krama-inggil": "sedalu muput" },
  },
  {
    aliases: { id: ["semampai"], en: ["tall and slender"], zh: ["修长的"] },
    translation: { ngoko: "dhuwur singset", krama: "inggil singset", "krama-inggil": "inggil singset" },
  },
  {
    aliases: { id: ["semangat"], en: ["spirit"], zh: ["精神"] },
    translation: { ngoko: "semangat", krama: "semangat", "krama-inggil": "semangat" },
  },
  {
    aliases: { id: ["semangka"], en: ["watermelon"], zh: ["西瓜"] },
    translation: { ngoko: "semangka", krama: "semangka", "krama-inggil": "semangka" },
  },
  {
    aliases: { id: ["sembahyang"], en: ["to pray"], zh: ["祷告"] },
    translation: { ngoko: "sembahyang", krama: "sembahyang", "krama-inggil": "sembahyang" },
  },
  {
    aliases: { id: ["sembelit"], en: ["constipation"], zh: ["便秘"] },
    translation: { ngoko: "bebelen", krama: "bebelen", "krama-inggil": "bebelen" },
  },
  {
    aliases: { id: ["sembrono"], en: ["rash"], zh: ["鲁莽"] },
    translation: { ngoko: "grusa-grusu", krama: "grusa-grusu", "krama-inggil": "grusa-grusu" },
  },
  {
    aliases: { id: ["sembuh"], en: ["recover"], zh: ["康复"] },
    translation: { ngoko: "waras", krama: "saras", "krama-inggil": "saras" },
  },
  {
    aliases: { id: ["sembuhkan"], en: ["heal"], zh: ["治愈"] },
    translation: { ngoko: "marasake", krama: "nyarasaken", "krama-inggil": "nyarasaken" },
  },
  {
    aliases: { id: ["sementara"], en: ["temporarily"], zh: ["暂时"] },
    translation: { ngoko: "sauntara", krama: "sawetawis", "krama-inggil": "sawetawis" },
  },
  {
    aliases: { id: ["sementara itu"], en: ["meanwhile"], zh: ["与此同时"] },
    translation: { ngoko: "sauntara iku", krama: "sawetawis punika", "krama-inggil": "sawetawis punika" },
  },
  {
    aliases: { id: ["semester"], en: ["semester"], zh: ["学期"] },
    translation: { ngoko: "semester", krama: "semester", "krama-inggil": "semester" },
  },
  {
    aliases: { id: ["seminggu"], en: ["one week"], zh: ["一周"] },
    translation: { ngoko: "seminggu", krama: "seminggu", "krama-inggil": "seminggu" },
  },
  {
    aliases: { id: ["semoga berhasil"], en: ["may you succeed"], zh: ["祝你成功"] },
    translation: { ngoko: "muga-muga kasil", krama: "mugi-mugi kasil", "krama-inggil": "mugi-mugi kasil" },
  },
  {
    aliases: { id: ["semoga lancar"], en: ["may everything go smoothly"], zh: ["祝一切顺利"] },
    translation: { ngoko: "muga-muga lancar", krama: "mugi-mugi lancar", "krama-inggil": "mugi-mugi lancar" },
  },
  {
    aliases: { id: ["semoga lekas sembuh"], en: ["get well soon"], zh: ["祝早日康复"] },
    translation: { ngoko: "muga-muga enggal mari", krama: "mugi-mugi enggal mantun", "krama-inggil": "mugi-mugi enggal saras" },
  },
  {
    aliases: { id: ["semoga selalu sehat"], en: ["may you always be healthy"], zh: ["祝您身体一直健康"] },
    translation: { ngoko: "muga-muga tansah sehat", krama: "mugi-mugi tansah sehat", "krama-inggil": "mugi-mugi tansah saras" },
  },
  {
    aliases: { id: ["semoga selamat"], en: ["may you be safe"], zh: ["祝您平安"] },
    translation: { ngoko: "muga-muga slamet", krama: "mugi-mugi wilujeng", "krama-inggil": "mugi-mugi wilujeng" },
  },
  {
    aliases: { id: ["sempit"], en: ["narrow"], zh: ["狭窄的"] },
    translation: { ngoko: "ciut", krama: "ciut", "krama-inggil": "ciut" },
  },
  {
    aliases: { id: ["semprot"], en: ["spray"], zh: ["喷洒"] },
    translation: { ngoko: "nyemprot", krama: "nyemprot", "krama-inggil": "nyemprot" },
  },
  {
    aliases: { id: ["semua"], en: ["all","everyone"], zh: ["所有；大家"] },
    translation: { ngoko: "kabeh", krama: "sedaya", "krama-inggil": "sedaya" },
  },
  {
    aliases: { id: ["semua orang"], en: ["everyone"], zh: ["所有人"] },
    translation: { ngoko: "kabeh wong", krama: "sedaya tiyang", "krama-inggil": "sedaya tiyang" },
  },
  {
    aliases: { id: ["semut"], en: ["ant"], zh: ["蚂蚁"] },
    translation: { ngoko: "semut", krama: "semut", "krama-inggil": "semut" },
  },
  {
    aliases: { id: ["senam"], en: ["gymnastics"], zh: ["体操"] },
    translation: { ngoko: "senam", krama: "senam", "krama-inggil": "senam" },
  },
  {
    aliases: { id: ["senang"], en: ["happy","glad"], zh: ["高兴；开心"] },
    translation: { ngoko: "bungah", krama: "bingah", "krama-inggil": "bingah" },
  },
  {
    aliases: { id: ["senang bertemu denganmu"], en: ["pleased to meet you"], zh: ["很高兴见到你"] },
    translation: { ngoko: "seneng ketemu kowe", krama: "bingah kepanggih sampeyan", "krama-inggil": "bingah kepanggih panjenengan" },
  },
  {
    aliases: { id: ["senangkan"], en: ["please someone"], zh: ["使高兴"] },
    translation: { ngoko: "nyenengake", krama: "ngremenaken", "krama-inggil": "ngremenaken" },
  },
  {
    aliases: { id: ["sendi"], en: ["joint"], zh: ["关节"] },
    translation: { ngoko: "sendhi", krama: "sendhi", "krama-inggil": "sendhi" },
  },
  {
    aliases: { id: ["sendiri"], en: ["alone","oneself"], zh: ["自己；独自"] },
    translation: { ngoko: "dhewe", krama: "piyambak", "krama-inggil": "piyambak" },
  },
  {
    aliases: { id: ["sendirian"], en: ["alone"], zh: ["独自"] },
    translation: { ngoko: "dhewekan", krama: "piyambakan", "krama-inggil": "piyambakan" },
  },
  {
    aliases: { id: ["sendok"], en: ["spoon"], zh: ["勺子"] },
    translation: { ngoko: "sendhok", krama: "sendhok", "krama-inggil": "sendhok" },
  },
  {
    aliases: { id: ["sendok garpu"], en: ["cutlery"], zh: ["餐具"] },
    translation: { ngoko: "sendhok garpu", krama: "sendhok garpu", "krama-inggil": "sendhok garpu" },
  },
  {
    aliases: { id: ["sendok sayur"], en: ["ladle"], zh: ["汤勺"] },
    translation: { ngoko: "irus", krama: "irus", "krama-inggil": "irus" },
  },
  {
    aliases: { id: ["sendratari"], en: ["dance drama"], zh: ["舞剧"] },
    translation: { ngoko: "sendratari", krama: "sendratari", "krama-inggil": "sendratari" },
  },
  {
    aliases: { id: ["sengaja"], en: ["deliberately"], zh: ["故意"] },
    translation: { ngoko: "sengaja", krama: "sengaja", "krama-inggil": "sengaja" },
  },
  {
    aliases: { id: ["sengsara"], en: ["miserable"], zh: ["痛苦"] },
    translation: { ngoko: "sengsara", krama: "sengsara", "krama-inggil": "sengsara" },
  },
  {
    aliases: { id: ["seni"], en: ["art"], zh: ["艺术"] },
    translation: { ngoko: "seni", krama: "seni", "krama-inggil": "seni" },
  },
  {
    aliases: { id: ["Senin"], en: ["Monday"], zh: ["星期一"] },
    translation: { ngoko: "Senen", krama: "Senen", "krama-inggil": "Senen" },
  },
  {
    aliases: { id: ["senja"], en: ["dusk"], zh: ["黄昏"] },
    translation: { ngoko: "surup", krama: "surup", "krama-inggil": "surup" },
  },
  {
    aliases: { id: ["senter"], en: ["flashlight"], zh: ["手电筒"] },
    translation: { ngoko: "senter", krama: "senter", "krama-inggil": "senter" },
  },
  {
    aliases: { id: ["sentuh"], en: ["touch"], zh: ["触摸"] },
    translation: { ngoko: "ndemek", krama: "ndemek", "krama-inggil": "ndemek" },
  },
  {
    aliases: { id: ["senyum"], en: ["smile"], zh: ["微笑"] },
    translation: { ngoko: "mesem", krama: "mesem", "krama-inggil": "mesem" },
  },
  {
    aliases: { id: ["seolah-olah"], en: ["as if"], zh: ["仿佛"] },
    translation: { ngoko: "kaya-kaya", krama: "kados-kados", "krama-inggil": "kados-kados" },
  },
  {
    aliases: { id: ["sepak bola"], en: ["football"], zh: ["足球"] },
    translation: { ngoko: "bal-balan", krama: "bal-balan", "krama-inggil": "bal-balan" },
  },
  {
    aliases: { id: ["sepanjang hari"], en: ["all day long"], zh: ["一整天"] },
    translation: { ngoko: "sedina muput", krama: "sedinten muput", "krama-inggil": "sedinten muput" },
  },
  {
    aliases: { id: ["sepasaran"], en: ["fifth-day birth celebration"], zh: ["出生第五天庆典"] },
    translation: { ngoko: "sepasaran", krama: "sepasaran", "krama-inggil": "sepasaran" },
  },
  {
    aliases: { id: ["sepat"], en: ["astringent"], zh: ["涩"] },
    translation: { ngoko: "sepet", krama: "sepet", "krama-inggil": "sepet" },
  },
  {
    aliases: { id: ["sepatu"], en: ["shoes"], zh: ["鞋子"] },
    translation: { ngoko: "sepatu", krama: "sepatu", "krama-inggil": "sepatu" },
  },
  {
    aliases: { id: ["sepeda"], en: ["bicycle"], zh: ["自行车"] },
    translation: { ngoko: "pit", krama: "sepedha", "krama-inggil": "sepedha" },
  },
  {
    aliases: { id: ["sepeda motor"], en: ["motorcycle"], zh: ["摩托车"] },
    translation: { ngoko: "sepedha motor", krama: "sepedha motor", "krama-inggil": "sepedha motor" },
  },
  {
    aliases: { id: ["sepelekan"], en: ["trivialize"], zh: ["小看"] },
    translation: { ngoko: "nyepelekake", krama: "nyepelekaken", "krama-inggil": "nyepelekaken" },
  },
  {
    aliases: { id: ["seperempat jam"], en: ["a quarter of an hour"], zh: ["一刻钟"] },
    translation: { ngoko: "seprapat jam", krama: "seprapat jam", "krama-inggil": "seprapat jam" },
  },
  {
    aliases: { id: ["seperti"], en: ["like","as"], zh: ["像"] },
    translation: { ngoko: "kaya", krama: "kados", "krama-inggil": "kados" },
  },
  {
    aliases: { id: ["seperti apa"], en: ["what like"], zh: ["什么样"] },
    translation: { ngoko: "kaya apa", krama: "kados menapa", "krama-inggil": "kados menapa" },
  },
  {
    aliases: { id: ["sepi"], en: ["quiet","deserted"], zh: ["冷清"] },
    translation: { ngoko: "sepi", krama: "sepen", "krama-inggil": "sepen" },
  },
  {
    aliases: { id: ["seprai"], en: ["bedsheet"], zh: ["床单"] },
    translation: { ngoko: "seprei", krama: "seprei", "krama-inggil": "seprei" },
  },
  {
    aliases: { id: ["September"], en: ["September"], zh: ["九月"] },
    translation: { ngoko: "September", krama: "September", "krama-inggil": "September" },
  },
  {
    aliases: { id: ["sepuluh ribu"], en: ["ten thousand"], zh: ["一万"] },
    translation: { ngoko: "sepuluh ewu", krama: "sedasa ewu", "krama-inggil": "sedasa ewu" },
  },
  {
    aliases: { id: ["sepupu"], en: ["cousin"], zh: ["堂表兄弟姐妹"] },
    translation: { ngoko: "sedulur misanan", krama: "sedherek misanan", "krama-inggil": "sedherek misanan" },
  },
  {
    aliases: { id: ["serabi"], en: ["rice-flour pancake"], zh: ["米粉煎饼"] },
    translation: { ngoko: "srabi", krama: "srabi", "krama-inggil": "srabi" },
  },
  {
    aliases: { id: ["seragam"], en: ["uniform"], zh: ["制服"] },
    translation: { ngoko: "sragam", krama: "sragam", "krama-inggil": "sragam" },
  },
  {
    aliases: { id: ["serahkan"], en: ["hand over"], zh: ["交付"] },
    translation: { ngoko: "masrahake", krama: "masrahaken", "krama-inggil": "masrahaken" },
  },
  {
    aliases: { id: ["serai"], en: ["lemongrass"], zh: ["香茅"] },
    translation: { ngoko: "sere", krama: "sere", "krama-inggil": "sere" },
  },
  {
    aliases: { id: ["serakah"], en: ["greedy"], zh: ["贪婪"] },
    translation: { ngoko: "srakah", krama: "srakah", "krama-inggil": "srakah" },
  },
  {
    aliases: { id: ["seram"], en: ["scary"], zh: ["可怕"] },
    translation: { ngoko: "medeni", krama: "medeni", "krama-inggil": "medeni" },
  },
  {
    aliases: { id: ["serangga"], en: ["insect"], zh: ["昆虫"] },
    translation: { ngoko: "gegremet", krama: "gegremet", "krama-inggil": "gegremet" },
  },
  {
    aliases: { id: ["serat"], en: ["Javanese literary text"], zh: ["爪哇文学典籍"] },
    translation: { ngoko: "serat", krama: "serat", "krama-inggil": "serat" },
  },
  {
    aliases: { id: ["seratus ribu"], en: ["one hundred thousand"], zh: ["十万"] },
    translation: { ngoko: "satus ewu", krama: "setunggal atus ewu", "krama-inggil": "setunggal atus ewu" },
  },
  {
    aliases: { id: ["serbet"], en: ["napkin"], zh: ["餐巾"] },
    translation: { ngoko: "serbèt", krama: "serbèt", "krama-inggil": "serbèt" },
  },
  {
    aliases: { id: ["seri"], en: ["tied"], zh: ["平局"] },
    translation: { ngoko: "seri", krama: "seri", "krama-inggil": "seri" },
  },
  {
    aliases: { id: ["seribu"], en: ["one thousand"], zh: ["一千"] },
    translation: { ngoko: "sewu", krama: "setunggal ewu", "krama-inggil": "setunggal ewu" },
  },
  {
    aliases: { id: ["serigala"], en: ["wolf"], zh: ["狼"] },
    translation: { ngoko: "serigala", krama: "serigala", "krama-inggil": "serigala" },
  },
  {
    aliases: { id: ["sering"], en: ["often"], zh: ["经常"] },
    translation: { ngoko: "kerep", krama: "asring", "krama-inggil": "asring" },
  },
  {
    aliases: { id: ["seringai"], en: ["grin"], zh: ["咧嘴笑"] },
    translation: { ngoko: "mesem nyengir", krama: "mesem", "krama-inggil": "mesem" },
  },
  {
    aliases: { id: ["serius"], en: ["serious"], zh: ["认真"] },
    translation: { ngoko: "serius", krama: "serius", "krama-inggil": "serius" },
  },
  {
    aliases: { id: ["serok"], en: ["skimmer"], zh: ["漏勺"] },
    translation: { ngoko: "serok", krama: "serok", "krama-inggil": "serok" },
  },
  {
    aliases: { id: ["serong"], en: ["diagonal","oblique"], zh: ["斜向"] },
    translation: { ngoko: "nyerong", krama: "nyerong", "krama-inggil": "nyerong" },
  },
  {
    aliases: { id: ["serpihan"], en: ["shard/fragment"], zh: ["碎片"] },
    translation: { ngoko: "remukan", krama: "remukan", "krama-inggil": "remukan" },
  },
  {
    aliases: { id: ["serta"], en: ["as well as"], zh: ["以及"] },
    translation: { ngoko: "sarta", krama: "sarta", "krama-inggil": "sarta" },
  },
  {
    aliases: { id: ["serukan"], en: ["call out"], zh: ["高声呼喊"] },
    translation: { ngoko: "nyerokake", krama: "nyerokaken", "krama-inggil": "nyerokaken" },
  },
  {
    aliases: { id: ["seruling"], en: ["flute"], zh: ["笛子"] },
    translation: { ngoko: "suling", krama: "suling", "krama-inggil": "suling" },
  },
  {
    aliases: { id: ["server"], en: ["server"], zh: ["服务器"] },
    translation: { ngoko: "server", krama: "server", "krama-inggil": "server" },
  },
  {
    aliases: { id: ["sesaji"], en: ["ritual offering"], zh: ["祭品"] },
    translation: { ngoko: "sajen", krama: "sajen", "krama-inggil": "sajen" },
  },
  {
    aliases: { id: ["sesak"], en: ["short of breath","tight"], zh: ["憋闷"] },
    translation: { ngoko: "sesek", krama: "sesek", "krama-inggil": "sesek" },
  },
  {
    aliases: { id: ["sesal"], en: ["regret"], zh: ["后悔"] },
    translation: { ngoko: "getun", krama: "getun", "krama-inggil": "getun" },
  },
  {
    aliases: { id: ["sesali"], en: ["regret"], zh: ["后悔"] },
    translation: { ngoko: "getun", krama: "getun", "krama-inggil": "getun" },
  },
  {
    aliases: { id: ["sesalkan"], en: ["lament a decision or event"], zh: ["惋惜"] },
    translation: { ngoko: "nggetuni", krama: "nggetuni", "krama-inggil": "nggetuni" },
  },
  {
    aliases: { id: ["seseorang"], en: ["someone"], zh: ["某个人"] },
    translation: { ngoko: "wong siji", krama: "tiyang satunggal", "krama-inggil": "tiyang satunggal" },
  },
  {
    aliases: { id: ["sesuai"], en: ["suitable"], zh: ["合适"] },
    translation: { ngoko: "cocog", krama: "trep", "krama-inggil": "trep" },
  },
  {
    aliases: { id: ["sesuatu"], en: ["something"], zh: ["东西"] },
    translation: { ngoko: "samubarang", krama: "samukawis", "krama-inggil": "samukawis" },
  },
  {
    aliases: { id: ["sesudah"], en: ["after"], zh: ["之后"] },
    translation: { ngoko: "sawise", krama: "sasampunipun", "krama-inggil": "sasampunipun" },
  },
  {
    aliases: { id: ["sesudahnya"], en: ["afterward"], zh: ["之后"] },
    translation: { ngoko: "sawise", krama: "sasampunipun", "krama-inggil": "sasampunipun" },
  },
  {
    aliases: { id: ["sesungguhnya"], en: ["in truth"], zh: ["其实"] },
    translation: { ngoko: "sejatine", krama: "sajatosipun", "krama-inggil": "sajatosipun" },
  },
  {
    aliases: { id: ["setahun"], en: ["one year"], zh: ["一年"] },
    translation: { ngoko: "setaun", krama: "setaun", "krama-inggil": "setaun" },
  },
  {
    aliases: { id: ["setan"], en: ["devil"], zh: ["恶魔"] },
    translation: { ngoko: "setan", krama: "setan", "krama-inggil": "setan" },
  },
  {
    aliases: { id: ["setelah itu"], en: ["after that"], zh: ["之后"] },
    translation: { ngoko: "sawise iku", krama: "sasampunipun punika", "krama-inggil": "sasampunipun punika" },
  },
  {
    aliases: { id: ["setelah semuanya"], en: ["after everything"], zh: ["一切结束之后"] },
    translation: { ngoko: "sawise kabeh", krama: "sasampunipun sedaya", "krama-inggil": "sasampunipun sedaya" },
  },
  {
    aliases: { id: ["setengah"], en: ["half"], zh: ["一半"] },
    translation: { ngoko: "separo", krama: "sepalih", "krama-inggil": "sepalih" },
  },
  {
    aliases: { id: ["setengah jam"], en: ["half an hour"], zh: ["半小时"] },
    translation: { ngoko: "setengah jam", krama: "setengah jam", "krama-inggil": "setengah jam" },
  },
  {
    aliases: { id: ["setia"], en: ["loyal"], zh: ["忠诚"] },
    translation: { ngoko: "setya", krama: "setya", "krama-inggil": "setya" },
  },
  {
    aliases: { id: ["setiap"], en: ["every","each"], zh: ["每；每个"] },
    translation: { ngoko: "saben", krama: "saben", "krama-inggil": "saben" },
  },
  {
    aliases: { id: ["setiap bulan"], en: ["every month"], zh: ["每月"] },
    translation: { ngoko: "saben sasi", krama: "saben wulan", "krama-inggil": "saben wulan" },
  },
  {
    aliases: { id: ["setiap hari"], en: ["every day"], zh: ["每天"] },
    translation: { ngoko: "saben dina", krama: "saben dinten", "krama-inggil": "saben dinten" },
  },
  {
    aliases: { id: ["setiap kali"], en: ["whenever","every time"], zh: ["每当"] },
    translation: { ngoko: "saben", krama: "saben", "krama-inggil": "saben" },
  },
  {
    aliases: { id: ["setiap minggu"], en: ["every week"], zh: ["每周"] },
    translation: { ngoko: "saben minggu", krama: "saben minggu", "krama-inggil": "saben minggu" },
  },
  {
    aliases: { id: ["setiap orang"], en: ["each person"], zh: ["每个人"] },
    translation: { ngoko: "saben wong", krama: "saben tiyang", "krama-inggil": "saben tiyang" },
  },
  {
    aliases: { id: ["setiap tahun"], en: ["every year"], zh: ["每年"] },
    translation: { ngoko: "saben taun", krama: "saben taun", "krama-inggil": "saben taun" },
  },
  {
    aliases: { id: ["setir"], en: ["steering wheel"], zh: ["方向盘"] },
    translation: { ngoko: "setir", krama: "setir", "krama-inggil": "setir" },
  },
  {
    aliases: { id: ["setor"], en: ["deposit money"], zh: ["存款"] },
    translation: { ngoko: "nyetor", krama: "nyetor", "krama-inggil": "nyetor" },
  },
  {
    aliases: { id: ["setrika"], en: ["clothes iron"], zh: ["熨斗"] },
    translation: { ngoko: "setrika", krama: "setrika", "krama-inggil": "setrika" },
  },
  {
    aliases: { id: ["setuju"], en: ["agree"], zh: ["同意"] },
    translation: { ngoko: "sarujuk", krama: "sarujuk", "krama-inggil": "sarujuk" },
  },
  {
    aliases: { id: ["setujuan"], en: ["agreement"], zh: ["同意"] },
    translation: { ngoko: "persetujuan", krama: "persetujuan", "krama-inggil": "persetujuan" },
  },
  {
    aliases: { id: ["setujui"], en: ["agree to"], zh: ["赞同"] },
    translation: { ngoko: "nyarujuki", krama: "nyarujuki", "krama-inggil": "nyarujuki" },
  },
  {
    aliases: { id: ["sewa"], en: ["rent"], zh: ["租用"] },
    translation: { ngoko: "nyewa", krama: "nyewa", "krama-inggil": "nyewa" },
  },
  {
    aliases: { id: ["sewaktu"], en: ["at the time that"], zh: ["在……的时候"] },
    translation: { ngoko: "wektu", krama: "wekdal", "krama-inggil": "wekdal" },
  },
  {
    aliases: { id: ["si anu"], en: ["so-and-so"], zh: ["某某"] },
    translation: { ngoko: "si anu", krama: "si anu", "krama-inggil": "si anu" },
  },
  {
    aliases: { id: ["sian"], en: ["cyan"], zh: ["青色"] },
    translation: { ngoko: "sian", krama: "sian", "krama-inggil": "sian" },
  },
  {
    aliases: { id: ["siang"], en: ["daytime","noon"], zh: ["白天；中午"] },
    translation: { ngoko: "awan", krama: "siang", "krama-inggil": "siang" },
  },
  {
    aliases: { id: ["siangi"], en: ["weed"], zh: ["除草"] },
    translation: { ngoko: "matun", krama: "matun", "krama-inggil": "matun" },
  },
  {
    aliases: { id: ["siap"], en: ["ready"], zh: ["准备就绪"] },
    translation: { ngoko: "siyap", krama: "siyap", "krama-inggil": "siyap" },
  },
  {
    aliases: { id: ["siapa"], en: ["who"], zh: ["谁"] },
    translation: { ngoko: "sapa", krama: "sinten", "krama-inggil": "sinten" },
  },
  {
    aliases: { id: ["siapa namamu"], en: ["what is your name"], zh: ["你叫什么名字"] },
    translation: { ngoko: "sapa jenengmu", krama: "sinten nama sampeyan", "krama-inggil": "sinten asma panjenengan" },
  },
  {
    aliases: { id: ["siapa saja"], en: ["who all"], zh: ["哪些人"] },
    translation: { ngoko: "sapa wae", krama: "sinten kemawon", "krama-inggil": "sinten kemawon" },
  },
  {
    aliases: { id: ["siapa yang"], en: ["who is the one who"], zh: ["是谁"] },
    translation: { ngoko: "sapa sing", krama: "sinten ingkang", "krama-inggil": "sinten ingkang" },
  },
  {
    aliases: { id: ["siapkan"], en: ["prepare"], zh: ["准备"] },
    translation: { ngoko: "nyiapake", krama: "nyawisaken", "krama-inggil": "nyawisaken" },
  },
  {
    aliases: { id: ["siarkan"], en: ["broadcast"], zh: ["播报"] },
    translation: { ngoko: "nyiarake", krama: "nyiaraken", "krama-inggil": "nyiaraken" },
  },
  {
    aliases: { id: ["sibuk"], en: ["busy"], zh: ["忙"] },
    translation: { ngoko: "repot", krama: "repot", "krama-inggil": "repot" },
  },
  {
    aliases: { id: ["sidang"], en: ["formal session"], zh: ["正式会议"] },
    translation: { ngoko: "sidang", krama: "sidang", "krama-inggil": "sidang" },
  },
  {
    aliases: { id: ["sigap"], en: ["ready and alert"], zh: ["随时准备好"] },
    translation: { ngoko: "siyaga", krama: "siyaga", "krama-inggil": "siyaga" },
  },
  {
    aliases: { id: ["sikat"], en: ["brush"], zh: ["刷子"] },
    translation: { ngoko: "sikat", krama: "sikat", "krama-inggil": "sikat" },
  },
  {
    aliases: { id: ["sikat gigi"], en: ["toothbrush"], zh: ["牙刷"] },
    translation: { ngoko: "sikat untu", krama: "sikat waos", "krama-inggil": "sikat waos" },
  },
  {
    aliases: { id: ["siku"], en: ["elbow"], zh: ["肘"] },
    translation: { ngoko: "sikut", krama: "sikut", "krama-inggil": "sikut" },
  },
  {
    aliases: { id: ["sikut"], en: ["jab with the elbow"], zh: ["用肘撞"] },
    translation: { ngoko: "nyikut", krama: "nyikut", "krama-inggil": "nyikut" },
  },
  {
    aliases: { id: ["silakan"], en: ["please","go ahead"], zh: ["请；请便"] },
    translation: { ngoko: "monggo", krama: "mangga", "krama-inggil": "mangga" },
  },
  {
    aliases: { id: ["silakan berbicara"], en: ["please speak"], zh: ["请讲"] },
    translation: { ngoko: "ayo ngomong", krama: "mangga wicanten", "krama-inggil": "mangga ngendika" },
  },
  {
    aliases: { id: ["silakan bertanya"], en: ["please ask"], zh: ["请问吧"] },
    translation: { ngoko: "ayo takon", krama: "mangga nyuwun pirsa", "krama-inggil": "mangga ndangu" },
  },
  {
    aliases: { id: ["silakan dahulu"], en: ["please go first"], zh: ["您先请"] },
    translation: { ngoko: "kowe dhisik wae", krama: "mangga sampeyan rumiyin", "krama-inggil": "mangga panjenengan rumiyin" },
  },
  {
    aliases: { id: ["silakan duduk"], en: ["please sit down"], zh: ["请坐"] },
    translation: { ngoko: "ayo lungguh", krama: "mangga lenggah", "krama-inggil": "mangga lenggah" },
  },
  {
    aliases: { id: ["silakan makan"], en: ["please eat"], zh: ["请用餐"] },
    translation: { ngoko: "ayo mangan", krama: "mangga dhahar", "krama-inggil": "mangga dhahar" },
  },
  {
    aliases: { id: ["silakan mampir"], en: ["please stop by"], zh: ["请来坐坐"] },
    translation: { ngoko: "ayo mampir", krama: "mangga pinarak", "krama-inggil": "mangga pinarak" },
  },
  {
    aliases: { id: ["silakan masuk"], en: ["please come in"], zh: ["请进"] },
    translation: { ngoko: "ayo mlebu", krama: "mangga mlebet", "krama-inggil": "mangga mlebet" },
  },
  {
    aliases: { id: ["silakan minum"], en: ["please have a drink"], zh: ["请喝"] },
    translation: { ngoko: "ayo ngombe", krama: "mangga ngunjuk", "krama-inggil": "mangga ngunjuk" },
  },
  {
    aliases: { id: ["silsilah"], en: ["genealogy"], zh: ["家谱"] },
    translation: { ngoko: "silsilah", krama: "silsilah", "krama-inggil": "silsilah" },
  },
  {
    aliases: { id: ["simak"], en: ["listen attentively"], zh: ["仔细听"] },
    translation: { ngoko: "nyemak", krama: "nyemak", "krama-inggil": "nyemak" },
  },
  {
    aliases: { id: ["simpan"], en: ["store"], zh: ["存放"] },
    translation: { ngoko: "nyimpen", krama: "nyimpen", "krama-inggil": "nyimpen" },
  },
  {
    aliases: { id: ["simpati"], en: ["sympathy"], zh: ["同情心"] },
    translation: { ngoko: "simpati", krama: "simpati", "krama-inggil": "simpati" },
  },
  {
    aliases: { id: ["simpulkan"], en: ["conclude"], zh: ["总结"] },
    translation: { ngoko: "nyimpulake", krama: "nyimpulaken", "krama-inggil": "nyimpulaken" },
  },
  {
    aliases: { id: ["sinden"], en: ["female gamelan singer"], zh: ["甘美兰女歌手"] },
    translation: { ngoko: "sindhèn", krama: "sindhèn", "krama-inggil": "sindhèn" },
  },
  {
    aliases: { id: ["sindir"], en: ["make a sarcastic remark"], zh: ["讽刺"] },
    translation: { ngoko: "nyindir", krama: "nyindir", "krama-inggil": "nyindir" },
  },
  {
    aliases: { id: ["singa"], en: ["lion"], zh: ["狮子"] },
    translation: { ngoko: "singa", krama: "singa", "krama-inggil": "singa" },
  },
  {
    aliases: { id: ["singgah"], en: ["stop by"], zh: ["顺道停留"] },
    translation: { ngoko: "mampir", krama: "mampir", "krama-inggil": "pinarak" },
  },
  {
    aliases: { id: ["singkir"], en: ["move aside"], zh: ["闪开"] },
    translation: { ngoko: "nyingkir", krama: "nyingkir", "krama-inggil": "nyingkir" },
  },
  {
    aliases: { id: ["singkong"], en: ["cassava"], zh: ["木薯"] },
    translation: { ngoko: "pohung", krama: "pohung", "krama-inggil": "pohung" },
  },
  {
    aliases: { id: ["singlet"], en: ["sleeveless undershirt"], zh: ["背心"] },
    translation: { ngoko: "singlet", krama: "singlet", "krama-inggil": "singlet" },
  },
  {
    aliases: { id: ["sinom"], en: ["sinom poetic meter"], zh: ["西诺姆诗律"] },
    translation: { ngoko: "sinom", krama: "sinom", "krama-inggil": "sinom" },
  },
  {
    aliases: { id: ["sinyal"], en: ["signal"], zh: ["信号"] },
    translation: { ngoko: "sinyal", krama: "sinyal", "krama-inggil": "sinyal" },
  },
  {
    aliases: { id: ["siram"], en: ["water plants"], zh: ["浇水"] },
    translation: { ngoko: "nyiram", krama: "nyiram", "krama-inggil": "nyiram" },
  },
  {
    aliases: { id: ["siraman"], en: ["ceremonial bathing"], zh: ["净身沐浴仪式"] },
    translation: { ngoko: "siraman", krama: "siraman", "krama-inggil": "siraman" },
  },
  {
    aliases: { id: ["sirih"], en: ["betel"], zh: ["蒌叶"] },
    translation: { ngoko: "suruh", krama: "sedhah", "krama-inggil": "sedhah" },
  },
  {
    aliases: { id: ["sirsak"], en: ["soursop"], zh: ["刺果番荔枝"] },
    translation: { ngoko: "nangka sabrang", krama: "nangka sabrang", "krama-inggil": "nangka sabrang" },
  },
  {
    aliases: { id: ["sirup"], en: ["syrup"], zh: ["糖浆"] },
    translation: { ngoko: "sirup", krama: "sirup", "krama-inggil": "sirup" },
  },
  {
    aliases: { id: ["sisi"], en: ["side"], zh: ["一侧"] },
    translation: { ngoko: "sisih", krama: "sisih", "krama-inggil": "sisih" },
  },
  {
    aliases: { id: ["sisir"], en: ["comb"], zh: ["梳子"] },
    translation: { ngoko: "sisir", krama: "sisir", "krama-inggil": "sisir" },
  },
  {
    aliases: { id: ["sisir rambut"], en: ["hair comb"], zh: ["梳子"] },
    translation: { ngoko: "sisir", krama: "sisir", "krama-inggil": "sisir" },
  },
  {
    aliases: { id: ["siswa"], en: ["student"], zh: ["学生"] },
    translation: { ngoko: "murid", krama: "siswa", "krama-inggil": "siswa" },
  },
  {
    aliases: { id: ["siter"], en: ["small Javanese zither"], zh: ["爪哇小型齐特琴"] },
    translation: { ngoko: "siter", krama: "siter", "krama-inggil": "siter" },
  },
  {
    aliases: { id: ["situs web"], en: ["website"], zh: ["网站"] },
    translation: { ngoko: "website", krama: "website", "krama-inggil": "website" },
  },
  {
    aliases: { id: ["siul"], en: ["whistle"], zh: ["吹口哨"] },
    translation: { ngoko: "singsot", krama: "singsot", "krama-inggil": "singsot" },
  },
  {
    aliases: { id: ["skuter"], en: ["motor scooter"], zh: ["踏板摩托车"] },
    translation: { ngoko: "skuter", krama: "skuter", "krama-inggil": "skuter" },
  },
  {
    aliases: { id: ["slendro"], en: ["slendro five-tone tuning system"], zh: ["斯连德罗五声音阶"] },
    translation: { ngoko: "sléndro", krama: "sléndro", "krama-inggil": "sléndro" },
  },
  {
    aliases: { id: ["slentem"], en: ["low metallophone with tube resonators"], zh: ["管共鸣低音金属排琴"] },
    translation: { ngoko: "slenthem", krama: "slenthem", "krama-inggil": "slenthem" },
  },
  {
    aliases: { id: ["soal"], en: ["test question"], zh: ["试题"] },
    translation: { ngoko: "soal", krama: "soal", "krama-inggil": "soal" },
  },
  {
    aliases: { id: ["sobek"], en: ["torn"], zh: ["撕裂的"] },
    translation: { ngoko: "suwek", krama: "suwek", "krama-inggil": "suwek" },
  },
  {
    aliases: { id: ["sofa"], en: ["sofa"], zh: ["沙发"] },
    translation: { ngoko: "sofa", krama: "sofa", "krama-inggil": "sofa" },
  },
  {
    aliases: { id: ["solar"], en: ["diesel fuel"], zh: ["柴油"] },
    translation: { ngoko: "solar", krama: "solar", "krama-inggil": "solar" },
  },
  {
    aliases: { id: ["solder"], en: ["soldering iron"], zh: ["电烙铁"] },
    translation: { ngoko: "solder", krama: "solder", "krama-inggil": "solder" },
  },
  {
    aliases: { id: ["sombong"], en: ["arrogant"], zh: ["傲慢"] },
    translation: { ngoko: "gumedhe", krama: "gumedhe", "krama-inggil": "gumedhe" },
  },
  {
    aliases: { id: ["sompek"], en: ["chipped"], zh: ["崩掉一小块的"] },
    translation: { ngoko: "cuwil", krama: "cuwil", "krama-inggil": "cuwil" },
  },
  {
    aliases: { id: ["sopan"], en: ["polite"], zh: ["有礼貌"] },
    translation: { ngoko: "trapsila", krama: "trapsila", "krama-inggil": "trapsila" },
  },
  {
    aliases: { id: ["sopir"], en: ["driver"], zh: ["司机"] },
    translation: { ngoko: "sopir", krama: "sopir", "krama-inggil": "sopir" },
  },
  {
    aliases: { id: ["sore"], en: ["afternoon","late afternoon"], zh: ["下午；傍晚"] },
    translation: { ngoko: "sore", krama: "sonten", "krama-inggil": "sonten" },
  },
  {
    aliases: { id: ["sosial"], en: ["social"], zh: ["社会"] },
    translation: { ngoko: "sosial", krama: "sosial", "krama-inggil": "sosial" },
  },
  {
    aliases: { id: ["sosis"], en: ["sausage"], zh: ["香肠"] },
    translation: { ngoko: "sosis", krama: "sosis", "krama-inggil": "sosis" },
  },
  {
    aliases: { id: ["soto"], en: ["Indonesian spiced meat soup"], zh: ["印尼香料肉汤"] },
    translation: { ngoko: "soto", krama: "soto", "krama-inggil": "soto" },
  },
  {
    aliases: { id: ["soun"], en: ["glass noodles"], zh: ["粉丝"] },
    translation: { ngoko: "soun", krama: "soun", "krama-inggil": "soun" },
  },
  {
    aliases: { id: ["spatula"], en: ["cooking spatula"], zh: ["锅铲"] },
    translation: { ngoko: "suthil", krama: "suthil", "krama-inggil": "suthil" },
  },
  {
    aliases: { id: ["spidol"], en: ["marker"], zh: ["记号笔"] },
    translation: { ngoko: "spidol", krama: "spidol", "krama-inggil": "spidol" },
  },
  {
    aliases: { id: ["spion"], en: ["rearview mirror"], zh: ["后视镜"] },
    translation: { ngoko: "spion", krama: "spion", "krama-inggil": "spion" },
  },
  {
    aliases: { id: ["srikaya"], en: ["sugar apple"], zh: ["番荔枝"] },
    translation: { ngoko: "srikaya", krama: "srikaya", "krama-inggil": "srikaya" },
  },
  {
    aliases: { id: ["stadion"], en: ["stadium"], zh: ["体育场"] },
    translation: { ngoko: "stadion", krama: "stadion", "krama-inggil": "stadion" },
  },
  {
    aliases: { id: ["staf"], en: ["staff"], zh: ["工作人员"] },
    translation: { ngoko: "staf", krama: "staf", "krama-inggil": "staf" },
  },
  {
    aliases: { id: ["stagen"], en: ["traditional cloth waist binder"], zh: ["传统束腰布"] },
    translation: { ngoko: "setagen", krama: "setagen", "krama-inggil": "setagen" },
  },
  {
    aliases: { id: ["stasiun"], en: ["railway station"], zh: ["火车站"] },
    translation: { ngoko: "stasiun", krama: "stasiun", "krama-inggil": "stasiun" },
  },
  {
    aliases: { id: ["steker"], en: ["electrical plug"], zh: ["插头"] },
    translation: { ngoko: "steker", krama: "steker", "krama-inggil": "steker" },
  },
  {
    aliases: { id: ["stempel"], en: ["stamp"], zh: ["印章"] },
    translation: { ngoko: "stempel", krama: "stempel", "krama-inggil": "stempel" },
  },
  {
    aliases: { id: ["stetoskop"], en: ["stethoscope"], zh: ["听诊器"] },
    translation: { ngoko: "stetoskop", krama: "stetoskop", "krama-inggil": "stetoskop" },
  },
  {
    aliases: { id: ["stok"], en: ["stock"], zh: ["库存"] },
    translation: { ngoko: "stok", krama: "stok", "krama-inggil": "stok" },
  },
  {
    aliases: { id: ["stopkontak"], en: ["electrical socket"], zh: ["电源插座"] },
    translation: { ngoko: "stopkontak", krama: "stopkontak", "krama-inggil": "stopkontak" },
  },
  {
    aliases: { id: ["stroberi"], en: ["strawberry"], zh: ["草莓"] },
    translation: { ngoko: "stroberi", krama: "stroberi", "krama-inggil": "stroberi" },
  },
  {
    aliases: { id: ["struk"], en: ["till receipt"], zh: ["购物小票"] },
    translation: { ngoko: "struk", krama: "struk", "krama-inggil": "struk" },
  },
  {
    aliases: { id: ["suami"], en: ["husband"], zh: ["丈夫"] },
    translation: { ngoko: "bojo lanang", krama: "semah jaler", "krama-inggil": "garwa kakung" },
  },
  {
    aliases: { id: ["suap"], en: ["feed someone by hand or spoon"], zh: ["喂饭"] },
    translation: { ngoko: "ndulang", krama: "ndulang", "krama-inggil": "ndulang" },
  },
  {
    aliases: { id: ["suara"], en: ["voice"], zh: ["嗓音"] },
    translation: { ngoko: "swara", krama: "swanten", "krama-inggil": "swanten" },
  },
  {
    aliases: { id: ["subuh"], en: ["daybreak"], zh: ["拂晓"] },
    translation: { ngoko: "subuh", krama: "subuh", "krama-inggil": "subuh" },
  },
  {
    aliases: { id: ["subur"], en: ["fertile"], zh: ["肥沃"] },
    translation: { ngoko: "subur", krama: "subur", "krama-inggil": "subur" },
  },
  {
    aliases: { id: ["suci"], en: ["holy or ritually pure"], zh: ["圣洁的"] },
    translation: { ngoko: "suci", krama: "suci", "krama-inggil": "suci" },
  },
  {
    aliases: { id: ["sudah"], en: ["already","have done"], zh: ["已经"] },
    translation: { ngoko: "wis", krama: "sampun", "krama-inggil": "sampun" },
  },
  {
    aliases: { id: ["sudah makan"], en: ["have you eaten"], zh: ["吃过饭了吗"] },
    translation: { ngoko: "wis mangan", krama: "sampun nedha", "krama-inggil": "sampun dhahar" },
  },
  {
    aliases: { id: ["sudip"], en: ["cooking spatula"], zh: ["锅铲"] },
    translation: { ngoko: "suthil", krama: "suthil", "krama-inggil": "suthil" },
  },
  {
    aliases: { id: ["sudut"], en: ["corner"], zh: ["角落"] },
    translation: { ngoko: "pojok", krama: "pojok", "krama-inggil": "pojok" },
  },
  {
    aliases: { id: ["suka"], en: ["like","enjoy"], zh: ["喜欢"] },
    translation: { ngoko: "seneng", krama: "remen", "krama-inggil": "remen" },
  },
  {
    aliases: { id: ["sukai"], en: ["like"], zh: ["喜欢"] },
    translation: { ngoko: "seneng karo", krama: "remen kaliyan", "krama-inggil": "remen kaliyan" },
  },
  {
    aliases: { id: ["sukar"], en: ["difficult"], zh: ["困难"] },
    translation: { ngoko: "angel", krama: "awrat", "krama-inggil": "awrat" },
  },
  {
    aliases: { id: ["suku"], en: ["foot/tribe"], zh: ["脚/族群"] },
    translation: { ngoko: "sikil", krama: "suku", "krama-inggil": "suku" },
  },
  {
    aliases: { id: ["sukun"], en: ["breadfruit"], zh: ["面包果"] },
    translation: { ngoko: "sukun", krama: "sukun", "krama-inggil": "sukun" },
  },
  {
    aliases: { id: ["sulam"], en: ["embroider"], zh: ["刺绣"] },
    translation: { ngoko: "nyulam", krama: "nyulam", "krama-inggil": "nyulam" },
  },
  {
    aliases: { id: ["sulaman"], en: ["embroidery"], zh: ["刺绣"] },
    translation: { ngoko: "sulaman", krama: "sulaman", "krama-inggil": "sulaman" },
  },
  {
    aliases: { id: ["sulit"], en: ["difficult"], zh: ["困难"] },
    translation: { ngoko: "angel", krama: "awrat", "krama-inggil": "awrat" },
  },
  {
    aliases: { id: ["sulut"], en: ["light a fire"], zh: ["点火"] },
    translation: { ngoko: "nyumet", krama: "nyumet", "krama-inggil": "nyumet" },
  },
  {
    aliases: { id: ["sumbang"], en: ["donate","contribute"], zh: ["捐助"] },
    translation: { ngoko: "nyumbang", krama: "nyumbang", "krama-inggil": "nyumbang" },
  },
  {
    aliases: { id: ["sumbat"], en: ["plug a hole"], zh: ["堵住"] },
    translation: { ngoko: "nyumpel", krama: "nyumpel", "krama-inggil": "nyumpel" },
  },
  {
    aliases: { id: ["sumber"], en: ["source"], zh: ["来源"] },
    translation: { ngoko: "sumber", krama: "sumber", "krama-inggil": "sumber" },
  },
  {
    aliases: { id: ["sumbing"], en: ["notched"], zh: ["有缺口的"] },
    translation: { ngoko: "gowang", krama: "gowang", "krama-inggil": "gowang" },
  },
  {
    aliases: { id: ["sumpah"], en: ["take an oath"], zh: ["发誓"] },
    translation: { ngoko: "sumpah", krama: "sumpah", "krama-inggil": "sumpah" },
  },
  {
    aliases: { id: ["sumsum"], en: ["marrow"], zh: ["骨髓"] },
    translation: { ngoko: "sungsum", krama: "sungsum", "krama-inggil": "sungsum" },
  },
  {
    aliases: { id: ["sumur"], en: ["well"], zh: ["水井"] },
    translation: { ngoko: "sumur", krama: "sumur", "krama-inggil": "sumur" },
  },
  {
    aliases: { id: ["sungai"], en: ["river"], zh: ["河流"] },
    translation: { ngoko: "kali", krama: "lepen", "krama-inggil": "lepen" },
  },
  {
    aliases: { id: ["sungguh"], en: ["truly"], zh: ["真的"] },
    translation: { ngoko: "temen", krama: "estu", "krama-inggil": "estu" },
  },
  {
    aliases: { id: ["sungkan"], en: ["reluctant out of politeness"], zh: ["不好意思"] },
    translation: { ngoko: "pakewuh", krama: "pakewuh", "krama-inggil": "pakewuh" },
  },
  {
    aliases: { id: ["sungkem"], en: ["pay respects"], zh: ["叩拜问安"] },
    translation: { ngoko: "sungkem", krama: "sungkem", "krama-inggil": "sungkem" },
  },
  {
    aliases: { id: ["sungkeman"], en: ["ritual kneeling to seek elders' blessings"], zh: ["跪拜长辈求祝福的仪式"] },
    translation: { ngoko: "sungkeman", krama: "sungkeman", "krama-inggil": "sungkeman" },
  },
  {
    aliases: { id: ["suntik"], en: ["inject"], zh: ["注射"] },
    translation: { ngoko: "nyuntik", krama: "nyuntik", "krama-inggil": "nyuntik" },
  },
  {
    aliases: { id: ["suntikan"], en: ["injection"], zh: ["注射"] },
    translation: { ngoko: "suntikan", krama: "suntikan", "krama-inggil": "suntikan" },
  },
  {
    aliases: { id: ["sup"], en: ["soup"], zh: ["汤"] },
    translation: { ngoko: "sop", krama: "sop", "krama-inggil": "sop" },
  },
  {
    aliases: { id: ["supermarket"], en: ["supermarket"], zh: ["超市"] },
    translation: { ngoko: "supermarket", krama: "supermarket", "krama-inggil": "supermarket" },
  },
  {
    aliases: { id: ["surat"], en: ["letter"], zh: ["信件"] },
    translation: { ngoko: "layang", krama: "serat", "krama-inggil": "serat" },
  },
  {
    aliases: { id: ["surel"], en: ["email"], zh: ["电子邮件"] },
    translation: { ngoko: "email", krama: "email", "krama-inggil": "email" },
  },
  {
    aliases: { id: ["surga"], en: ["heaven"], zh: ["天堂"] },
    translation: { ngoko: "swarga", krama: "swarga", "krama-inggil": "swarga" },
  },
  {
    aliases: { id: ["surjan"], en: ["traditional Javanese men's shirt"], zh: ["爪哇传统男式上衣"] },
    translation: { ngoko: "surjan", krama: "surjan", "krama-inggil": "surjan" },
  },
  {
    aliases: { id: ["suruh"], en: ["tell/order"], zh: ["吩咐"] },
    translation: { ngoko: "kongkon", krama: "dhawuh", "krama-inggil": "ndhawuhi" },
  },
  {
    aliases: { id: ["surut"], en: ["recede"], zh: ["退水"] },
    translation: { ngoko: "sat", krama: "sat", "krama-inggil": "sat" },
  },
  {
    aliases: { id: ["susah"], en: ["troubled"], zh: ["苦恼"] },
    translation: { ngoko: "susah", krama: "sisah", "krama-inggil": "sisah" },
  },
  {
    aliases: { id: ["susu"], en: ["milk"], zh: ["牛奶"] },
    translation: { ngoko: "susu", krama: "susu", "krama-inggil": "susu" },
  },
  {
    aliases: { id: ["susui"], en: ["breastfeed"], zh: ["哺乳"] },
    translation: { ngoko: "nusoni", krama: "nusoni", "krama-inggil": "nusoni" },
  },
  {
    aliases: { id: ["susuk"], en: ["implant/insert"], zh: ["植入物"] },
    translation: { ngoko: "susuk", krama: "susuk", "krama-inggil": "susuk" },
  },
  {
    aliases: { id: ["susun"], en: ["stack"], zh: ["堆放"] },
    translation: { ngoko: "numpuk", krama: "numpuk", "krama-inggil": "numpuk" },
  },
  {
    aliases: { id: ["susunan"], en: ["arrangement"], zh: ["排列"] },
    translation: { ngoko: "susunan", krama: "reroncèn", "krama-inggil": "reroncèn" },
  },
  {
    aliases: { id: ["susut"], en: ["diminished"], zh: ["缩小的"] },
    translation: { ngoko: "suda", krama: "suda", "krama-inggil": "suda" },
  },
  {
    aliases: { id: ["sutra"], en: ["silk"], zh: ["丝绸"] },
    translation: { ngoko: "sutra", krama: "sutra", "krama-inggil": "sutra" },
  },
  {
    aliases: { id: ["sutradara"], en: ["film director"], zh: ["导演"] },
    translation: { ngoko: "sutradara", krama: "sutradara", "krama-inggil": "sutradara" },
  },
  {
    aliases: { id: ["sweter"], en: ["sweater"], zh: ["毛衣"] },
    translation: { ngoko: "sweter", krama: "sweter", "krama-inggil": "sweter" },
  },
  {
    aliases: { id: ["syal"], en: ["scarf"], zh: ["围巾"] },
    translation: { ngoko: "syal", krama: "syal", "krama-inggil": "syal" },
  },
  {
    aliases: { id: ["syukur"], en: ["gratitude"], zh: ["感恩"] },
    translation: { ngoko: "sukur", krama: "sukur", "krama-inggil": "sukur" },
  },
  {
    aliases: { id: ["syukuri"], en: ["be grateful for"], zh: ["感恩"] },
    translation: { ngoko: "nyukuri", krama: "nyukuri", "krama-inggil": "nyukuri" },
  },
  {
    aliases: { id: ["tabah"], en: ["steadfast"], zh: ["坚强"] },
    translation: { ngoko: "tatag", krama: "tatag", "krama-inggil": "tatag" },
  },
  {
    aliases: { id: ["tablet"], en: ["tablet"], zh: ["药片"] },
    translation: { ngoko: "tablet", krama: "tablet", "krama-inggil": "tablet" },
  },
  {
    aliases: { id: ["tabuhan"], en: ["instrumental playing"], zh: ["器乐演奏"] },
    translation: { ngoko: "tabuhan", krama: "tabuhan", "krama-inggil": "tabuhan" },
  },
  {
    aliases: { id: ["tabung"], en: ["save money"], zh: ["储蓄"] },
    translation: { ngoko: "nabung", krama: "nabung", "krama-inggil": "nabung" },
  },
  {
    aliases: { id: ["tabungan"], en: ["savings"], zh: ["储蓄"] },
    translation: { ngoko: "tabungan", krama: "tabungan", "krama-inggil": "tabungan" },
  },
  {
    aliases: { id: ["tabur"], en: ["sprinkle"], zh: ["撒"] },
    translation: { ngoko: "nabur", krama: "nabur", "krama-inggil": "nabur" },
  },
  {
    aliases: { id: ["tadi"], en: ["earlier"], zh: ["刚才"] },
    translation: { ngoko: "mau", krama: "wau", "krama-inggil": "wau" },
  },
  {
    aliases: { id: ["tadi malam"], en: ["last night"], zh: ["昨晚"] },
    translation: { ngoko: "mau bengi", krama: "wau dalu", "krama-inggil": "wau dalu" },
  },
  {
    aliases: { id: ["taekwondo"], en: ["taekwondo"], zh: ["跆拳道"] },
    translation: { ngoko: "taekwondo", krama: "taekwondo", "krama-inggil": "taekwondo" },
  },
  {
    aliases: { id: ["tafsirkan"], en: ["interpret"], zh: ["阐释"] },
    translation: { ngoko: "nafsirake", krama: "nafsiraken", "krama-inggil": "nafsiraken" },
  },
  {
    aliases: { id: ["tagih"], en: ["collect payment"], zh: ["催款"] },
    translation: { ngoko: "nagih", krama: "nagih", "krama-inggil": "nagih" },
  },
  {
    aliases: { id: ["tahi lalat"], en: ["mole"], zh: ["痣"] },
    translation: { ngoko: "andheng-andheng", krama: "andheng-andheng", "krama-inggil": "andheng-andheng" },
  },
  {
    aliases: { id: ["tahlil"], en: ["recitation of the declaration of God's oneness"], zh: ["诵念认主独一词"] },
    translation: { ngoko: "tahlil", krama: "tahlil", "krama-inggil": "tahlil" },
  },
  {
    aliases: { id: ["tahu"], en: ["know","tofu (context-dependent)"], zh: ["知道；豆腐（视语境）"] },
    translation: { ngoko: "ngerti", krama: "mangertos", "krama-inggil": "mangertos" },
  },
  {
    aliases: { id: ["tahu goreng"], en: ["fried tofu"], zh: ["炸豆腐"] },
    translation: { ngoko: "tahu goreng", krama: "tahu goreng", "krama-inggil": "tahu goreng" },
  },
  {
    aliases: { id: ["tahun"], en: ["year"], zh: ["年"] },
    translation: { ngoko: "taun", krama: "taun", "krama-inggil": "taun" },
  },
  {
    aliases: { id: ["tajam"], en: ["sharp"], zh: ["锋利的"] },
    translation: { ngoko: "landhep", krama: "landhep", "krama-inggil": "landhep" },
  },
  {
    aliases: { id: ["takar"], en: ["measure out"], zh: ["量取"] },
    translation: { ngoko: "nakar", krama: "nakar", "krama-inggil": "nakar" },
  },
  {
    aliases: { id: ["takdir"], en: ["divine destiny"], zh: ["天命"] },
    translation: { ngoko: "takdir", krama: "takdir", "krama-inggil": "takdir" },
  },
  {
    aliases: { id: ["taksi"], en: ["taxi"], zh: ["出租车"] },
    translation: { ngoko: "taksi", krama: "taksi", "krama-inggil": "taksi" },
  },
  {
    aliases: { id: ["takut"], en: ["afraid","fear"], zh: ["害怕"] },
    translation: { ngoko: "wedi", krama: "ajrih", "krama-inggil": "ajrih" },
  },
  {
    aliases: { id: ["takuti"], en: ["fear"], zh: ["惧怕"] },
    translation: { ngoko: "wedi marang", krama: "ajrih dhateng", "krama-inggil": "ajrih dhateng" },
  },
  {
    aliases: { id: ["takut-takuti"], en: ["frighten"], zh: ["吓唬"] },
    translation: { ngoko: "meden-medeni", krama: "ngajrih-ajrihi", "krama-inggil": "ngajrih-ajrihi" },
  },
  {
    aliases: { id: ["takziah"], en: ["to pay a condolence visit"], zh: ["吊唁"] },
    translation: { ngoko: "layat", krama: "layat", "krama-inggil": "layat" },
  },
  {
    aliases: { id: ["talas"], en: ["taro"], zh: ["芋头"] },
    translation: { ngoko: "tales", krama: "tales", "krama-inggil": "tales" },
  },
  {
    aliases: { id: ["talenan"], en: ["cutting board"], zh: ["砧板"] },
    translation: { ngoko: "telenan", krama: "telenan", "krama-inggil": "telenan" },
  },
  {
    aliases: { id: ["tali"], en: ["rope"], zh: ["绳子"] },
    translation: { ngoko: "tali", krama: "tangsul", "krama-inggil": "tangsul" },
  },
  {
    aliases: { id: ["tali pusat"], en: ["umbilical cord"], zh: ["脐带"] },
    translation: { ngoko: "tali puser", krama: "tali puser", "krama-inggil": "tali puser" },
  },
  {
    aliases: { id: ["tali sepatu"], en: ["shoelace"], zh: ["鞋带"] },
    translation: { ngoko: "tali sepatu", krama: "tali sepatu", "krama-inggil": "tali sepatu" },
  },
  {
    aliases: { id: ["taman"], en: ["park"], zh: ["公园"] },
    translation: { ngoko: "taman", krama: "taman", "krama-inggil": "taman" },
  },
  {
    aliases: { id: ["taman bermain"], en: ["playground"], zh: ["儿童游乐场"] },
    translation: { ngoko: "taman dolanan", krama: "taman dolanan", "krama-inggil": "taman dolanan" },
  },
  {
    aliases: { id: ["tambah"], en: ["add"], zh: ["增加"] },
    translation: { ngoko: "nambah", krama: "nambah", "krama-inggil": "nambah" },
  },
  {
    aliases: { id: ["tambal"], en: ["patch"], zh: ["修补"] },
    translation: { ngoko: "nambal", krama: "nambal", "krama-inggil": "nambal" },
  },
  {
    aliases: { id: ["tambalan"], en: ["patch"], zh: ["补丁"] },
    translation: { ngoko: "tambalan", krama: "tambalan", "krama-inggil": "tambalan" },
  },
  {
    aliases: { id: ["tambang"], en: ["mine"], zh: ["矿场"] },
    translation: { ngoko: "tambang", krama: "tambang", "krama-inggil": "tambang" },
  },
  {
    aliases: { id: ["tambun"], en: ["corpulent"], zh: ["肥硕的"] },
    translation: { ngoko: "lemu gedhe", krama: "lemu ageng", "krama-inggil": "lemu ageng" },
  },
  {
    aliases: { id: ["tampah"], en: ["winnowing tray"], zh: ["簸箕"] },
    translation: { ngoko: "tampah", krama: "tampah", "krama-inggil": "tampah" },
  },
  {
    aliases: { id: ["tampan"], en: ["handsome"], zh: ["英俊"] },
    translation: { ngoko: "bagus", krama: "bagus", "krama-inggil": "bagus" },
  },
  {
    aliases: { id: ["tampar"], en: ["slap"], zh: ["扇耳光"] },
    translation: { ngoko: "nampar", krama: "nampar", "krama-inggil": "nampar" },
  },
  {
    aliases: { id: ["tamu"], en: ["guest"], zh: ["客人"] },
    translation: { ngoko: "tamu", krama: "tamu", "krama-inggil": "tamu" },
  },
  {
    aliases: { id: ["tanah"], en: ["land","soil","ground"], zh: ["土地；土壤；地面"] },
    translation: { ngoko: "lemah", krama: "siti", "krama-inggil": "siti" },
  },
  {
    aliases: { id: ["tanak"], en: ["cook rice"], zh: ["煮饭"] },
    translation: { ngoko: "ngliwet", krama: "ngliwet", "krama-inggil": "ngliwet" },
  },
  {
    aliases: { id: ["tanam"], en: ["plant"], zh: ["种植"] },
    translation: { ngoko: "nandur", krama: "nanem", "krama-inggil": "nanem" },
  },
  {
    aliases: { id: ["tanda"], en: ["sign"], zh: ["标志"] },
    translation: { ngoko: "tandha", krama: "tandha", "krama-inggil": "tandha" },
  },
  {
    aliases: { id: ["tandus"], en: ["barren"], zh: ["贫瘠"] },
    translation: { ngoko: "cengkar", krama: "cengkar", "krama-inggil": "cengkar" },
  },
  {
    aliases: { id: ["tang"], en: ["pliers"], zh: ["钳子"] },
    translation: { ngoko: "tang", krama: "tang", "krama-inggil": "tang" },
  },
  {
    aliases: { id: ["tangan"], en: ["hand"], zh: ["手"] },
    translation: { ngoko: "tangan", krama: "asta", "krama-inggil": "asta" },
  },
  {
    aliases: { id: ["tangga"], en: ["ladder"], zh: ["梯子"] },
    translation: { ngoko: "andha", krama: "andha", "krama-inggil": "andha" },
  },
  {
    aliases: { id: ["tanggal"], en: ["date"], zh: ["日期"] },
    translation: { ngoko: "tanggal", krama: "tanggal", "krama-inggil": "tanggal" },
  },
  {
    aliases: { id: ["tanggap"], en: ["responsive"], zh: ["反应敏锐"] },
    translation: { ngoko: "tanggap", krama: "tanggap", "krama-inggil": "tanggap" },
  },
  {
    aliases: { id: ["tangguh"], en: ["resilient"], zh: ["坚韧"] },
    translation: { ngoko: "tangguh", krama: "tangguh", "krama-inggil": "tangguh" },
  },
  {
    aliases: { id: ["tanggul"], en: ["embankment"], zh: ["堤坝"] },
    translation: { ngoko: "tanggul", krama: "tanggul", "krama-inggil": "tanggul" },
  },
  {
    aliases: { id: ["tanggung"], en: ["bear a cost"], zh: ["承担费用"] },
    translation: { ngoko: "nanggung", krama: "nanggung", "krama-inggil": "nanggung" },
  },
  {
    aliases: { id: ["tanggung jawab"], en: ["responsibility"], zh: ["责任"] },
    translation: { ngoko: "tanggung jawab", krama: "tanggung jawab", "krama-inggil": "tanggung jawab" },
  },
  {
    aliases: { id: ["tangis"], en: ["cry"], zh: ["哭"] },
    translation: { ngoko: "nangis", krama: "muwun", "krama-inggil": "muwun" },
  },
  {
    aliases: { id: ["tangkas"], en: ["agile"], zh: ["敏捷"] },
    translation: { ngoko: "trengginas", krama: "trengginas", "krama-inggil": "trengginas" },
  },
  {
    aliases: { id: ["tangki"], en: ["tank"], zh: ["罐"] },
    translation: { ngoko: "tangki", krama: "tangki", "krama-inggil": "tangki" },
  },
  {
    aliases: { id: ["tangkis"], en: ["parry"], zh: ["格挡"] },
    translation: { ngoko: "nangkis", krama: "nangkis", "krama-inggil": "nangkis" },
  },
  {
    aliases: { id: ["tani"], en: ["farming"], zh: ["农业"] },
    translation: { ngoko: "tani", krama: "tani", "krama-inggil": "tani" },
  },
  {
    aliases: { id: ["tanpa"], en: ["without"], zh: ["没有"] },
    translation: { ngoko: "tanpa", krama: "tanpa", "krama-inggil": "tanpa" },
  },
  {
    aliases: { id: ["tantang"], en: ["challenge"], zh: ["挑战"] },
    translation: { ngoko: "nantang", krama: "nantang", "krama-inggil": "nantang" },
  },
  {
    aliases: { id: ["tanya"], en: ["ask"], zh: ["问"] },
    translation: { ngoko: "takon", krama: "taken", "krama-inggil": "ndangu" },
  },
  {
    aliases: { id: ["tapai"], en: ["sweet fermented cassava or glutinous rice"], zh: ["发酵木薯或糯米"] },
    translation: { ngoko: "tape", krama: "tape", "krama-inggil": "tape" },
  },
  {
    aliases: { id: ["tapak"], en: ["set one's foot down"], zh: ["落脚"] },
    translation: { ngoko: "napak", krama: "napak", "krama-inggil": "napak" },
  },
  {
    aliases: { id: ["taplak"], en: ["tablecloth"], zh: ["桌布"] },
    translation: { ngoko: "taplak", krama: "taplak", "krama-inggil": "taplak" },
  },
  {
    aliases: { id: ["tari"], en: ["dance"], zh: ["舞蹈"] },
    translation: { ngoko: "jogèd", krama: "beksa", "krama-inggil": "beksa" },
  },
  {
    aliases: { id: ["tarian"], en: ["dance"], zh: ["舞蹈"] },
    translation: { ngoko: "tarian", krama: "tarian", "krama-inggil": "tarian" },
  },
  {
    aliases: { id: ["tarif"], en: ["rate"], zh: ["收费标准"] },
    translation: { ngoko: "tarif", krama: "tarif", "krama-inggil": "tarif" },
  },
  {
    aliases: { id: ["terserah"], en: ["up to","whatever"], zh: ["随便"] },
    translation: { ngoko: "sakarep", krama: "sadeksana", "krama-inggil": "sakarsanipun" },
  },
  {
    aliases: { id: ["tarik"], en: ["pull"], zh: ["拉"] },
    translation: { ngoko: "narik", krama: "narik", "krama-inggil": "narik" },
  },
  {
    aliases: { id: ["tarik tambang"], en: ["tug-of-war"], zh: ["拔河"] },
    translation: { ngoko: "tarik tambang", krama: "tarik tambang", "krama-inggil": "tarik tambang" },
  },
  {
    aliases: { id: ["tart"], en: ["tart"], zh: ["馅饼"] },
    translation: { ngoko: "tart", krama: "tart", "krama-inggil": "tart" },
  },
  {
    aliases: { id: ["taruh"], en: ["put down"], zh: ["放下"] },
    translation: { ngoko: "ndokok", krama: "nyelehaken", "krama-inggil": "nyelehaken" },
  },
  {
    aliases: { id: ["tas"], en: ["bag"], zh: ["包"] },
    translation: { ngoko: "tas", krama: "tas", "krama-inggil": "tas" },
  },
  {
    aliases: { id: ["tas tangan"], en: ["handbag"], zh: ["手提包"] },
    translation: { ngoko: "tas tangan", krama: "tas tangan", "krama-inggil": "tas tangan" },
  },
  {
    aliases: { id: ["tasbih"], en: ["prayer beads"], zh: ["念珠"] },
    translation: { ngoko: "tasbih", krama: "tasbih", "krama-inggil": "tasbih" },
  },
  {
    aliases: { id: ["tata"], en: ["arrange"], zh: ["摆放"] },
    translation: { ngoko: "nata", krama: "nata", "krama-inggil": "nata" },
  },
  {
    aliases: { id: ["tatanan"], en: ["order/system"], zh: ["秩序"] },
    translation: { ngoko: "tatanan", krama: "tatanan", "krama-inggil": "tatanan" },
  },
  {
    aliases: { id: ["tauge"], en: ["bean sprouts"], zh: ["豆芽"] },
    translation: { ngoko: "thokolan", krama: "thokolan", "krama-inggil": "thokolan" },
  },
  {
    aliases: { id: ["tawa"], en: ["laughter"], zh: ["笑声"] },
    translation: { ngoko: "guyu", krama: "gujeng", "krama-inggil": "gujeng" },
  },
  {
    aliases: { id: ["tawakal"], en: ["trusting in God"], zh: ["信赖真主"] },
    translation: { ngoko: "tawakal", krama: "tawakal", "krama-inggil": "tawakal" },
  },
  {
    aliases: { id: ["tawar"], en: ["bargain"], zh: ["讨价还价"] },
    translation: { ngoko: "ngenyang", krama: "ngenyang", "krama-inggil": "ngenyang" },
  },
  {
    aliases: { id: ["tawarkan"], en: ["offer"], zh: ["提出供选择"] },
    translation: { ngoko: "nawakake", krama: "nawakaken", "krama-inggil": "nawakaken" },
  },
  {
    aliases: { id: ["tayamum"], en: ["dry ritual ablution"], zh: ["土净"] },
    translation: { ngoko: "tayamum", krama: "tayamum", "krama-inggil": "tayamum" },
  },
  {
    aliases: { id: ["teater"], en: ["theater"], zh: ["剧院"] },
    translation: { ngoko: "teater", krama: "teater", "krama-inggil": "teater" },
  },
  {
    aliases: { id: ["tebak"], en: ["guess"], zh: ["猜测"] },
    translation: { ngoko: "mbedhek", krama: "mbedhek", "krama-inggil": "mbedhek" },
  },
  {
    aliases: { id: ["tebal"], en: ["thick"], zh: ["厚的"] },
    translation: { ngoko: "kandel", krama: "kandel", "krama-inggil": "kandel" },
  },
  {
    aliases: { id: ["tebing"], en: ["cliff"], zh: ["悬崖"] },
    translation: { ngoko: "tebing", krama: "tebing", "krama-inggil": "tebing" },
  },
  {
    aliases: { id: ["tebu"], en: ["sugarcane"], zh: ["甘蔗"] },
    translation: { ngoko: "tebu", krama: "tebu", "krama-inggil": "tebu" },
  },
  {
    aliases: { id: ["tedak siten"], en: ["child's first-earth-stepping ceremony"], zh: ["婴儿首次踏地仪式"] },
    translation: { ngoko: "tedhak sitèn", krama: "tedhak sitèn", "krama-inggil": "tedhak sitèn" },
  },
  {
    aliases: { id: ["teduh"], en: ["shady"], zh: ["荫凉"] },
    translation: { ngoko: "ayom", krama: "ayom", "krama-inggil": "ayom" },
  },
  {
    aliases: { id: ["tega"], en: ["hard-hearted"], zh: ["狠心"] },
    translation: { ngoko: "tegel", krama: "tegel", "krama-inggil": "tegel" },
  },
  {
    aliases: { id: ["tegak"], en: ["upright"], zh: ["直立的"] },
    translation: { ngoko: "jejeg", krama: "jejeg", "krama-inggil": "jejeg" },
  },
  {
    aliases: { id: ["tegang"], en: ["tense"], zh: ["紧张"] },
    translation: { ngoko: "kaku", krama: "tegang", "krama-inggil": "tegang" },
  },
  {
    aliases: { id: ["tegar"], en: ["steadfast"], zh: ["坚定"] },
    translation: { ngoko: "teguh", krama: "teguh", "krama-inggil": "teguh" },
  },
  {
    aliases: { id: ["tegas"], en: ["firm"], zh: ["坚定"] },
    translation: { ngoko: "teges", krama: "teges", "krama-inggil": "teges" },
  },
  {
    aliases: { id: ["tegur"], en: ["reprimand"], zh: ["责备"] },
    translation: { ngoko: "ngelingake lupute", krama: "ngemutaken lepatipun", "krama-inggil": "ngemutaken lepatipun" },
  },
  {
    aliases: { id: ["teh"], en: ["tea"], zh: ["茶"] },
    translation: { ngoko: "teh", krama: "teh", "krama-inggil": "teh" },
  },
  {
    aliases: { id: ["teka-teki"], en: ["riddle"], zh: ["谜语"] },
    translation: { ngoko: "cangkriman", krama: "cangkriman", "krama-inggil": "cangkriman" },
  },
  {
    aliases: { id: ["teknisi"], en: ["technician"], zh: ["技术员"] },
    translation: { ngoko: "tèknisi", krama: "tèknisi", "krama-inggil": "tèknisi" },
  },
  {
    aliases: { id: ["teknologi"], en: ["technology"], zh: ["技术"] },
    translation: { ngoko: "teknologi", krama: "teknologi", "krama-inggil": "teknologi" },
  },
  {
    aliases: { id: ["teko"], en: ["teapot"], zh: ["茶壶"] },
    translation: { ngoko: "teko", krama: "teko", "krama-inggil": "teko" },
  },
  {
    aliases: { id: ["tekun"], en: ["diligent"], zh: ["勤奋"] },
    translation: { ngoko: "tekun", krama: "tekun", "krama-inggil": "tekun" },
  },
  {
    aliases: { id: ["teladan"], en: ["example/role model"], zh: ["榜样"] },
    translation: { ngoko: "tuladha", krama: "tuladha", "krama-inggil": "tuladha" },
  },
  {
    aliases: { id: ["telaga"], en: ["lake/pond"], zh: ["湖"] },
    translation: { ngoko: "tlaga", krama: "tlaga", "krama-inggil": "tlaga" },
  },
  {
    aliases: { id: ["telan"], en: ["swallow"], zh: ["吞咽"] },
    translation: { ngoko: "ngulu", krama: "ngulu", "krama-inggil": "ngulu" },
  },
  {
    aliases: { id: ["telanjang"], en: ["naked"], zh: ["裸体"] },
    translation: { ngoko: "wuda", krama: "wuda", "krama-inggil": "wuda" },
  },
  {
    aliases: { id: ["telapak"], en: ["sole/palm"], zh: ["脚掌/手掌"] },
    translation: { ngoko: "tlapakan", krama: "tlapakan", "krama-inggil": "tlapakan" },
  },
  {
    aliases: { id: ["telapak kaki"], en: ["sole"], zh: ["脚底"] },
    translation: { ngoko: "tlapakan sikil", krama: "tlapakan suku", "krama-inggil": "tlapakan suku" },
  },
  {
    aliases: { id: ["telapak tangan"], en: ["palm"], zh: ["手掌"] },
    translation: { ngoko: "epek-epek", krama: "epek-epek", "krama-inggil": "epek-epek" },
  },
  {
    aliases: { id: ["telaten"], en: ["painstaking"], zh: ["细心耐心"] },
    translation: { ngoko: "tlaten", krama: "tlaten", "krama-inggil": "tlaten" },
  },
  {
    aliases: { id: ["telentang"], en: ["lie face up"], zh: ["仰卧"] },
    translation: { ngoko: "mlumah", krama: "mlumah", "krama-inggil": "mlumah" },
  },
  {
    aliases: { id: ["telepon"], en: ["telephone"], zh: ["电话"] },
    translation: { ngoko: "telpon", krama: "telpon", "krama-inggil": "telpon" },
  },
  {
    aliases: { id: ["teler bank"], en: ["bank teller"], zh: ["银行柜员"] },
    translation: { ngoko: "teller bank", krama: "teller bank", "krama-inggil": "teller bank" },
  },
  {
    aliases: { id: ["televisi"], en: ["television"], zh: ["电视机"] },
    translation: { ngoko: "télévisi", krama: "télévisi", "krama-inggil": "télévisi" },
  },
  {
    aliases: { id: ["telinga"], en: ["ear"], zh: ["耳朵"] },
    translation: { ngoko: "kuping", krama: "talingan", "krama-inggil": "talingan" },
  },
  {
    aliases: { id: ["teliti"], en: ["examine carefully"], zh: ["仔细研究"] },
    translation: { ngoko: "nliti", krama: "nliti", "krama-inggil": "nliti" },
  },
  {
    aliases: { id: ["telunjuk"], en: ["index finger"], zh: ["食指"] },
    translation: { ngoko: "panuding", krama: "panuding", "krama-inggil": "panuding" },
  },
  {
    aliases: { id: ["telur"], en: ["egg"], zh: ["鸡蛋"] },
    translation: { ngoko: "endhog", krama: "tigan", "krama-inggil": "tigan" },
  },
  {
    aliases: { id: ["telur asin"], en: ["salted egg"], zh: ["咸蛋"] },
    translation: { ngoko: "endhog asin", krama: "tigan asin", "krama-inggil": "tigan asin" },
  },
  {
    aliases: { id: ["teman"], en: ["friend"], zh: ["朋友"] },
    translation: { ngoko: "kanca", krama: "rencang", "krama-inggil": "rencang" },
  },
  {
    aliases: { id: ["temani"], en: ["keep company"], zh: ["陪伴"] },
    translation: { ngoko: "ngancani", krama: "ngancani", "krama-inggil": "ndherekaken" },
  },
  {
    aliases: { id: ["teman-teman"], en: ["friends"], zh: ["朋友们"] },
    translation: { ngoko: "kanca-kanca", krama: "rencang-rencang", "krama-inggil": "rencang-rencang" },
  },
  {
    aliases: { id: ["tembak"], en: ["shoot"], zh: ["射击"] },
    translation: { ngoko: "nembak", krama: "nembak", "krama-inggil": "nembak" },
  },
  {
    aliases: { id: ["tembakau"], en: ["tobacco"], zh: ["烟草"] },
    translation: { ngoko: "mbako", krama: "sata", "krama-inggil": "sata" },
  },
  {
    aliases: { id: ["tembang"], en: ["traditional Javanese song"], zh: ["爪哇传统诗歌"] },
    translation: { ngoko: "tembang", krama: "sekar", "krama-inggil": "sekar" },
  },
  {
    aliases: { id: ["tembok"], en: ["wall"], zh: ["墙"] },
    translation: { ngoko: "tembok", krama: "tembok", "krama-inggil": "tembok" },
  },
  {
    aliases: { id: ["tempat"], en: ["place"], zh: ["地方"] },
    translation: { ngoko: "panggonan", krama: "panggenan", "krama-inggil": "panggenan" },
  },
  {
    aliases: { id: ["tempat parkir"], en: ["parking area"], zh: ["停车场"] },
    translation: { ngoko: "panggonan parkir", krama: "panggenan parkir", "krama-inggil": "panggenan parkir" },
  },
  {
    aliases: { id: ["tempat sampah"], en: ["rubbish bin"], zh: ["垃圾桶"] },
    translation: { ngoko: "wadhah uwuh", krama: "wadhah uwuh", "krama-inggil": "wadhah uwuh" },
  },
  {
    aliases: { id: ["tempat tidur"], en: ["bed"], zh: ["床"] },
    translation: { ngoko: "paturon", krama: "paturon", "krama-inggil": "paturon" },
  },
  {
    aliases: { id: ["tempe"], en: ["tempeh"], zh: ["天贝"] },
    translation: { ngoko: "tempe", krama: "tempe", "krama-inggil": "tempe" },
  },
  {
    aliases: { id: ["tempe goreng"], en: ["fried tempeh"], zh: ["炸天贝"] },
    translation: { ngoko: "tempe goreng", krama: "tempe goreng", "krama-inggil": "tempe goreng" },
  },
  {
    aliases: { id: ["tempel"], en: ["stick something on"], zh: ["贴上"] },
    translation: { ngoko: "nempelake", krama: "nempelaken", "krama-inggil": "nempelaken" },
  },
  {
    aliases: { id: ["tempelek"], en: ["patch"], zh: ["补丁"] },
    translation: { ngoko: "tempelek", krama: "tempelek", "krama-inggil": "tempelek" },
  },
  {
    aliases: { id: ["temu"], en: ["meet"], zh: ["见面"] },
    translation: { ngoko: "ketemu", krama: "kepanggih", "krama-inggil": "kepanggih" },
  },
  {
    aliases: { id: ["tenang"], en: ["calm"], zh: ["安静"] },
    translation: { ngoko: "anteng", krama: "anteng", "krama-inggil": "anteng" },
  },
  {
    aliases: { id: ["tenangkan"], en: ["reassure"], zh: ["安抚"] },
    translation: { ngoko: "nenangake", krama: "nenangaken", "krama-inggil": "nenangaken" },
  },
  {
    aliases: { id: ["tendang"], en: ["kick"], zh: ["踢"] },
    translation: { ngoko: "nendhang", krama: "nendhang", "krama-inggil": "nendhang" },
  },
  {
    aliases: { id: ["tengadah"], en: ["tilt one's head upward"], zh: ["仰头"] },
    translation: { ngoko: "ndengengek", krama: "ndengengek", "krama-inggil": "ndengengek" },
  },
  {
    aliases: { id: ["tengah"], en: ["middle"], zh: ["中间"] },
    translation: { ngoko: "tengah", krama: "tengah", "krama-inggil": "tengah" },
  },
  {
    aliases: { id: ["tengah hari"], en: ["midday"], zh: ["正午"] },
    translation: { ngoko: "tengah awan", krama: "tengah siyang", "krama-inggil": "tengah siyang" },
  },
  {
    aliases: { id: ["tengah malam"], en: ["midnight"], zh: ["午夜"] },
    translation: { ngoko: "tengah wengi", krama: "tengah dalu", "krama-inggil": "tengah dalu" },
  },
  {
    aliases: { id: ["tenggara"], en: ["southeast"], zh: ["东南"] },
    translation: { ngoko: "kidul wetan", krama: "kidul wetan", "krama-inggil": "kidul wetan" },
  },
  {
    aliases: { id: ["tenggorokan"], en: ["throat"], zh: ["喉咙"] },
    translation: { ngoko: "gorokan", krama: "jangga", "krama-inggil": "jangga" },
  },
  {
    aliases: { id: ["tengik"], en: ["rancid"], zh: ["酸败"] },
    translation: { ngoko: "tengik", krama: "tengik", "krama-inggil": "tengik" },
  },
  {
    aliases: { id: ["tengkar"], en: ["quarrel"], zh: ["争吵"] },
    translation: { ngoko: "padudon", krama: "padudon", "krama-inggil": "padudon" },
  },
  {
    aliases: { id: ["tengkorak"], en: ["skull"], zh: ["头骨"] },
    translation: { ngoko: "bathok sirah", krama: "bathok sirah", "krama-inggil": "bathok mustaka" },
  },
  {
    aliases: { id: ["tengkuk"], en: ["nape"], zh: ["后颈"] },
    translation: { ngoko: "githok", krama: "githok", "krama-inggil": "griwa" },
  },
  {
    aliases: { id: ["tengkulak"], en: ["middleman"], zh: ["中间商"] },
    translation: { ngoko: "tengkulak", krama: "tengkulak", "krama-inggil": "tengkulak" },
  },
  {
    aliases: { id: ["tengkurap"], en: ["lie face down"], zh: ["俯卧"] },
    translation: { ngoko: "tengkurep", krama: "tengkurep", "krama-inggil": "tengkurep" },
  },
  {
    aliases: { id: ["tengok"], en: ["check on","visit"], zh: ["探望"] },
    translation: { ngoko: "niliki", krama: "nilingi", "krama-inggil": "nilingi" },
  },
  {
    aliases: { id: ["tenis"], en: ["tennis"], zh: ["网球"] },
    translation: { ngoko: "tenis", krama: "tenis", "krama-inggil": "tenis" },
  },
  {
    aliases: { id: ["tenis meja"], en: ["table tennis"], zh: ["乒乓球"] },
    translation: { ngoko: "tenis meja", krama: "tenis meja", "krama-inggil": "tenis meja" },
  },
  {
    aliases: { id: ["tentang"], en: ["about"], zh: ["关于"] },
    translation: { ngoko: "bab", krama: "bab", "krama-inggil": "bab" },
  },
  {
    aliases: { id: ["tentang apa"], en: ["about what"], zh: ["关于什么"] },
    translation: { ngoko: "bab apa", krama: "bab menapa", "krama-inggil": "bab menapa" },
  },
  {
    aliases: { id: ["tentara"], en: ["soldier"], zh: ["士兵"] },
    translation: { ngoko: "prajurit", krama: "prajurit", "krama-inggil": "prajurit" },
  },
  {
    aliases: { id: ["tenteram"], en: ["peaceful"], zh: ["安宁"] },
    translation: { ngoko: "tentrem", krama: "tentrem", "krama-inggil": "tentrem" },
  },
  {
    aliases: { id: ["tentu"], en: ["certainly","of course"], zh: ["当然"] },
    translation: { ngoko: "mesthi", krama: "tamtu", "krama-inggil": "tamtu" },
  },
  {
    aliases: { id: ["tentukan"], en: ["determine"], zh: ["确定"] },
    translation: { ngoko: "nemtokake", krama: "nemtokaken", "krama-inggil": "nemtokaken" },
  },
  {
    aliases: { id: ["tepat"], en: ["exact"], zh: ["准确"] },
    translation: { ngoko: "pas", krama: "trep", "krama-inggil": "trep" },
  },
  {
    aliases: { id: ["tepat waktu"], en: ["on time"], zh: ["准时"] },
    translation: { ngoko: "trep wektu", krama: "trep wekdal", "krama-inggil": "trep wekdal" },
  },
  {
    aliases: { id: ["tepi"], en: ["edge"], zh: ["边缘"] },
    translation: { ngoko: "pinggir", krama: "pinggir", "krama-inggil": "pinggir" },
  },
  {
    aliases: { id: ["tepuk"], en: ["pat"], zh: ["轻拍"] },
    translation: { ngoko: "nepuk", krama: "nepuk", "krama-inggil": "nepuk" },
  },
  {
    aliases: { id: ["tepuk tangan"], en: ["clap one's hands"], zh: ["拍手"] },
    translation: { ngoko: "keplok", krama: "keplok", "krama-inggil": "keplok" },
  },
  {
    aliases: { id: ["tepung"], en: ["flour"], zh: ["粉"] },
    translation: { ngoko: "glepung", krama: "glepung", "krama-inggil": "glepung" },
  },
  {
    aliases: { id: ["tepung beras"], en: ["rice flour"], zh: ["大米粉"] },
    translation: { ngoko: "glepung beras", krama: "glepung wos", "krama-inggil": "glepung wos" },
  },
  {
    aliases: { id: ["tepung terigu"], en: ["wheat flour"], zh: ["小麦面粉"] },
    translation: { ngoko: "glepung terigu", krama: "glepung terigu", "krama-inggil": "glepung terigu" },
  },
  {
    aliases: { id: ["terampil"], en: ["skilled"], zh: ["熟练"] },
    translation: { ngoko: "trampil", krama: "trampil", "krama-inggil": "trampil" },
  },
  {
    aliases: { id: ["terang"], en: ["bright"], zh: ["明亮"] },
    translation: { ngoko: "padhang", krama: "padhang", "krama-inggil": "padhang" },
  },
  {
    aliases: { id: ["terangkan"], en: ["clarify"], zh: ["说明"] },
    translation: { ngoko: "nerangake", krama: "nerangaken", "krama-inggil": "nerangaken" },
  },
  {
    aliases: { id: ["terang-terangan"], en: ["openly"], zh: ["公开地"] },
    translation: { ngoko: "blak-blakan", krama: "blak-blakan", "krama-inggil": "blak-blakan" },
  },
  {
    aliases: { id: ["teras"], en: ["porch"], zh: ["门廊"] },
    translation: { ngoko: "teras", krama: "teras", "krama-inggil": "teras" },
  },
  {
    aliases: { id: ["terasi"], en: ["shrimp paste"], zh: ["虾酱"] },
    translation: { ngoko: "trasi", krama: "trasi", "krama-inggil": "trasi" },
  },
  {
    aliases: { id: ["teratai"], en: ["water lily"], zh: ["睡莲"] },
    translation: { ngoko: "trate", krama: "trate", "krama-inggil": "trate" },
  },
  {
    aliases: { id: ["terbalik"], en: ["upside down","reversed"], zh: ["颠倒"] },
    translation: { ngoko: "kuwalik", krama: "kuwalik", "krama-inggil": "kuwalik" },
  },
  {
    aliases: { id: ["terbang"], en: ["fly"], zh: ["飞"] },
    translation: { ngoko: "mabur", krama: "mabur", "krama-inggil": "mabur" },
  },
  {
    aliases: { id: ["terbit"], en: ["rise/publish"], zh: ["升起/出版"] },
    translation: { ngoko: "metu", krama: "mijil", "krama-inggil": "mijil" },
  },
  {
    aliases: { id: ["terbuka"], en: ["frank"], zh: ["坦率"] },
    translation: { ngoko: "blaka", krama: "blaka", "krama-inggil": "blaka" },
  },
  {
    aliases: { id: ["teri"], en: ["anchovy"], zh: ["鳀鱼"] },
    translation: { ngoko: "teri", krama: "teri", "krama-inggil": "teri" },
  },
  {
    aliases: { id: ["teriak"], en: ["shout"], zh: ["喊叫"] },
    translation: { ngoko: "bengok", krama: "bengok", "krama-inggil": "bengok" },
  },
  {
    aliases: { id: ["terima"], en: ["receive"], zh: ["接受"] },
    translation: { ngoko: "nampa", krama: "nampi", "krama-inggil": "nampi" },
  },
  {
    aliases: { id: ["terima kasih"], en: ["thank you"], zh: ["谢谢"] },
    translation: { ngoko: "matur nuwun", krama: "matur nuwun", "krama-inggil": "matur nuwun" },
  },
  {
    aliases: { id: ["terima kasih banyak"], en: ["thank you very much"], zh: ["非常感谢"] },
    translation: { ngoko: "matur nuwun banget", krama: "matur nuwun sanget", "krama-inggil": "matur nuwun sanget" },
  },
   {
    aliases: { id: ["yang sedang terjadi"], en: ["happened"], zh: ["非常感谢"] },
    translation: { ngoko: "matur nuwun banget", krama: "matur nuwun sanget", "krama-inggil": "matur nuwun sanget" },
  },
  {
    aliases: { id: ["terjemahkan"], en: ["translate"], zh: ["翻译"] },
    translation: { ngoko: "nerjemahake", krama: "nerjemahaken", "krama-inggil": "nerjemahaken" },
  },
  {
    aliases: { id: ["terjun"], en: ["dive/jump"], zh: ["跳入"] },
    translation: { ngoko: "nyemplung", krama: "nyemplung", "krama-inggil": "nyemplung" },
  },
  {
    aliases: { id: ["terkejut"], en: ["startled"], zh: ["吃惊"] },
    translation: { ngoko: "kaget", krama: "kaget", "krama-inggil": "kejot" },
  },
  {
    aliases: { id: ["terlalu"], en: ["too much"], zh: ["太"] },
    translation: { ngoko: "kakehan", krama: "keladuk", "krama-inggil": "keladuk" },
  },
  {
    aliases: { id: ["terlalu banyak"], en: ["too much"], zh: ["太多"] },
    translation: { ngoko: "kakehan", krama: "kathahen", "krama-inggil": "kathahen" },
  },
  {
    aliases: { id: ["terlambat"], en: ["late"], zh: ["迟到"] },
    translation: { ngoko: "kasep", krama: "kasep", "krama-inggil": "kasep" },
  },
  {
    aliases: { id: ["terlihat"], en: ["visible"], zh: ["可见"] },
    translation: { ngoko: "katon", krama: "katingal", "krama-inggil": "katingal" },
  },
  {
    aliases: { id: ["terminal"], en: ["bus terminal"], zh: ["汽车总站"] },
    translation: { ngoko: "terminal", krama: "terminal", "krama-inggil": "terminal" },
  },
  {
    aliases: { id: ["termometer"], en: ["thermometer"], zh: ["体温计"] },
    translation: { ngoko: "termometer", krama: "termometer", "krama-inggil": "termometer" },
  },
  {
    aliases: { id: ["termos"], en: ["thermos"], zh: ["保温瓶"] },
    translation: { ngoko: "termos", krama: "termos", "krama-inggil": "termos" },
  },
  {
    aliases: { id: ["ternyata"], en: ["as it turns out"], zh: ["事实证明"] },
    translation: { ngoko: "nyatane", krama: "nyatanipun", "krama-inggil": "nyatanipun" },
  },
  {
    aliases: { id: ["terong"], en: ["eggplant"], zh: ["茄子"] },
    translation: { ngoko: "terong", krama: "terong", "krama-inggil": "terong" },
  },
  {
    aliases: { id: ["terowongan"], en: ["tunnel"], zh: ["隧道"] },
    translation: { ngoko: "trowongan", krama: "trowongan", "krama-inggil": "trowongan" },
  },
  {
    aliases: { id: ["terpeleset"], en: ["slip"], zh: ["滑倒"] },
    translation: { ngoko: "kepleset", krama: "kepleset", "krama-inggil": "kepleset" },
  },
  {
    aliases: { id: ["terpesona"], en: ["enthralled"], zh: ["神魂颠倒"] },
    translation: { ngoko: "kedanan", krama: "kedanan", "krama-inggil": "kedanan" },
  },
  {
    aliases: { id: ["terpikat"], en: ["captivated"], zh: ["倾心"] },
    translation: { ngoko: "kepincut", krama: "kepincut", "krama-inggil": "kepincut" },
  },
  {
    aliases: { id: ["terpisah"], en: ["separated"], zh: ["分开"] },
    translation: { ngoko: "pisah", krama: "pisah", "krama-inggil": "pisah" },
  },
  {
    aliases: { id: ["tersandung"], en: ["trip over something"], zh: ["绊倒"] },
    translation: { ngoko: "kesandhung", krama: "kesandhung", "krama-inggil": "kesandhung" },
  },
  {
    aliases: { id: ["tersebar"], en: ["scattered"], zh: ["散布"] },
    translation: { ngoko: "sumebar", krama: "sumebar", "krama-inggil": "sumebar" },
  },
  {
    aliases: { id: ["tersenyum"], en: ["smile"], zh: ["微笑"] },
    translation: { ngoko: "mesem", krama: "mesem", "krama-inggil": "mesem" },
  },
  {
    aliases: { id: ["tersesat"], en: ["get lost"], zh: ["迷路"] },
    translation: { ngoko: "kesasar", krama: "kesasar", "krama-inggil": "kesasar" },
  },
  {
    aliases: { id: ["tertarik"], en: ["attracted"], zh: ["着迷"] },
    translation: { ngoko: "kesengsem", krama: "kesengsem", "krama-inggil": "kesengsem" },
  },
  {
    aliases: { id: ["tertawa"], en: ["laugh"], zh: ["笑"] },
    translation: { ngoko: "ngguyu", krama: "nggujeng", "krama-inggil": "nggujeng" },
  },
  {
    aliases: { id: ["terung"], en: ["eggplant"], zh: ["茄子"] },
    translation: { ngoko: "terong", krama: "terong", "krama-inggil": "terong" },
  },
  {
    aliases: { id: ["terus"], en: ["onward"], zh: ["继续"] },
    translation: { ngoko: "terus", krama: "lajeng", "krama-inggil": "lajeng" },
  },
  {
    aliases: { id: ["terus terang"], en: ["frank"], zh: ["坦率"] },
    translation: { ngoko: "terus terang", krama: "terus terang", "krama-inggil": "terus terang" },
  },
  {
    aliases: { id: ["terus-menerus"], en: ["continuously"], zh: ["不断地"] },
    translation: { ngoko: "terus-terusan", krama: "terus-terusan", "krama-inggil": "terus-terusan" },
  },
  {
    aliases: { id: ["terutama"], en: ["especially"], zh: ["尤其"] },
    translation: { ngoko: "utamane", krama: "utaminipun", "krama-inggil": "utaminipun" },
  },
  {
    aliases: { id: ["terutama jika"], en: ["especially if"], zh: ["尤其是如果"] },
    translation: { ngoko: "luwih-luwih yen", krama: "langkung-langkung menawi", "krama-inggil": "langkung-langkung menawi" },
  },
  {
    aliases: { id: ["testis"], en: ["testicle"], zh: ["睾丸"] },
    translation: { ngoko: "planangan", krama: "planangan", "krama-inggil": "planangan" },
  },
  {
    aliases: { id: ["tetangga"], en: ["neighbor"], zh: ["邻居"] },
    translation: { ngoko: "tangga", krama: "tanggi", "krama-inggil": "tanggi" },
  },
  {
    aliases: { id: ["tetap"], en: ["remain"], zh: ["保持"] },
    translation: { ngoko: "tetep", krama: "tetep", "krama-inggil": "tetep" },
  },
  {
    aliases: { id: ["tetapi"], en: ["but"], zh: ["但是"] },
    translation: { ngoko: "nanging", krama: "nanging", "krama-inggil": "nanging" },
  },
  {
    aliases: { id: ["tetapi juga"], en: ["but also"], zh: ["而且也"] },
    translation: { ngoko: "nanging uga", krama: "nanging ugi", "krama-inggil": "nanging ugi" },
  },
  {
    aliases: { id: ["tetes"], en: ["administer drops"], zh: ["滴入"] },
    translation: { ngoko: "netesake", krama: "netesaken", "krama-inggil": "netesaken" },
  },
  {
    aliases: { id: ["tetikus"], en: ["computer mouse"], zh: ["鼠标"] },
    translation: { ngoko: "mouse", krama: "mouse", "krama-inggil": "mouse" },
  },
  {
    aliases: { id: ["tewas"], en: ["die"], zh: ["死亡"] },
    translation: { ngoko: "mati", krama: "seda", "krama-inggil": "seda" },
  },
  {
    aliases: { id: ["tiang"], en: ["post"], zh: ["柱子"] },
    translation: { ngoko: "cagak", krama: "cagak", "krama-inggil": "cagak" },
  },
  {
    aliases: { id: ["tiba"], en: ["arrive/fall"], zh: ["到达/落下"] },
    translation: { ngoko: "tiba", krama: "dawah", "krama-inggil": "dawah" },
  },
  {
    aliases: { id: ["tiba-tiba"], en: ["suddenly"], zh: ["突然"] },
    translation: { ngoko: "dumadakan", krama: "dumadakan", "krama-inggil": "dumadakan" },
  },
  {
    aliases: { id: ["tidak"], en: ["no","not","dont","don't","doesn't"], zh: ["不；没有"] },
    translation: { ngoko: "ora", krama: "mboten", "krama-inggil": "mboten" },
  },
  {
    aliases: { id: ["tidak ada"], en: ["there is none","there isn't"], zh: ["没有"] },
    translation: { ngoko: "ora ana", krama: "mboten wonten", "krama-inggil": "mboten wonten" },
  },
  {
    aliases: { id: ["tidak apa-apa"], en: ["it is all right"], zh: ["没关系"] },
    translation: { ngoko: "ora apa-apa", krama: "boten menapa-menapa", "krama-inggil": "boten menapa-menapa" },
  },
  {
    aliases: { id: ["tidak sengaja"], en: ["unintentionally"], zh: ["无意中"] },
    translation: { ngoko: "ora sengaja", krama: "boten sengaja", "krama-inggil": "boten sengaja" },
  },
  {
    aliases: { id: ["tidur"], en: ["sleep"], zh: ["睡觉"] },
    translation: { ngoko: "turu", krama: "tilem", "krama-inggil": "sare" },
  },
  {
    aliases: { id: ["tidurkan"], en: ["put someone to bed"], zh: ["哄睡"] },
    translation: { ngoko: "nurokake", krama: "nilemaken", "krama-inggil": "nyarekaken" },
  },
  {
    aliases: { id: ["tifus"], en: ["typhoid fever"], zh: ["伤寒"] },
    translation: { ngoko: "tipus", krama: "tipus", "krama-inggil": "tipus" },
  },
  {
    aliases: { id: ["tikar"], en: ["woven mat"], zh: ["席子"] },
    translation: { ngoko: "klasa", krama: "klasa", "krama-inggil": "klasa" },
  },
  {
    aliases: { id: ["tiket"], en: ["ticket"], zh: ["车票"] },
    translation: { ngoko: "karcis", krama: "karcis", "krama-inggil": "karcis" },
  },
  {
    aliases: { id: ["tikungan"], en: ["road bend"], zh: ["弯道"] },
    translation: { ngoko: "recodan", krama: "recodan", "krama-inggil": "recodan" },
  },
  {
    aliases: { id: ["tikus"], en: ["rat"], zh: ["老鼠"] },
    translation: { ngoko: "tikus", krama: "tikus", "krama-inggil": "tikus" },
  },
  {
    aliases: { id: ["tim"], en: ["team"], zh: ["团队"] },
    translation: { ngoko: "tim", krama: "tim", "krama-inggil": "tim" },
  },
  {
    aliases: { id: ["timah"], en: ["tin"], zh: ["锡"] },
    translation: { ngoko: "timah", krama: "timah", "krama-inggil": "timah" },
  },
  {
    aliases: { id: ["timang"], en: ["rock or hold a baby affectionately"], zh: ["轻摇婴儿"] },
    translation: { ngoko: "nimang", krama: "nimang", "krama-inggil": "nimang" },
  },
  {
    aliases: { id: ["timbang"], en: ["weigh"], zh: ["称重"] },
    translation: { ngoko: "nimbang", krama: "nimbang", "krama-inggil": "nimbang" },
  },
  {
    aliases: { id: ["timbangan"], en: ["weighing scale"], zh: ["秤"] },
    translation: { ngoko: "timbangan", krama: "timbangan", "krama-inggil": "timbangan" },
  },
  {
    aliases: { id: ["timbun"], en: ["fill with earth"], zh: ["填土"] },
    translation: { ngoko: "ngurug", krama: "ngurug", "krama-inggil": "ngurug" },
  },
  {
    aliases: { id: ["timur"], en: ["east"], zh: ["东"] },
    translation: { ngoko: "wetan", krama: "wetan", "krama-inggil": "wetan" },
  },
  {
    aliases: { id: ["timur laut"], en: ["northeast"], zh: ["东北"] },
    translation: { ngoko: "lor wetan", krama: "ler wetan", "krama-inggil": "ler wetan" },
  },
  {
    aliases: { id: ["tinggal"], en: ["reside"], zh: ["居住"] },
    translation: { ngoko: "manggon", krama: "manggen", "krama-inggil": "dedalem" },
  },
  {
    aliases: { id: ["tinggal di mana"], en: ["where do you live"], zh: ["你住在哪里"] },
    translation: { ngoko: "manggon ing ngendi", krama: "manggen wonten pundi", "krama-inggil": "pidalem wonten pundi" },
  },
  {
    aliases: { id: ["tinggi"], en: ["tall","high"], zh: ["高"] },
    translation: { ngoko: "dhuwur", krama: "inggil", "krama-inggil": "inggil" },
  },
  {
    aliases: { id: ["tingkap"], en: ["window"], zh: ["窗户"] },
    translation: { ngoko: "jendhela", krama: "jendhela", "krama-inggil": "jendhela" },
  },
  {
    aliases: { id: ["tingkat"], en: ["level"], zh: ["级别"] },
    translation: { ngoko: "undhak", krama: "undhak", "krama-inggil": "undhak" },
  },
  {
    aliases: { id: ["tinja"], en: ["feces"], zh: ["粪便"] },
    translation: { ngoko: "tai", krama: "tinja", "krama-inggil": "tinja" },
  },
  {
    aliases: { id: ["tinju"], en: ["punch"], zh: ["用拳打"] },
    translation: { ngoko: "nonjok", krama: "nonjok", "krama-inggil": "nonjok" },
  },
  {
    aliases: { id: ["tipis"], en: ["thin"], zh: ["薄的"] },
    translation: { ngoko: "tipis", krama: "tipis", "krama-inggil": "tipis" },
  },
  {
    aliases: { id: ["tipu"], en: ["deceive"], zh: ["欺骗"] },
    translation: { ngoko: "ngapusi", krama: "ngapusi", "krama-inggil": "ngapusi" },
  },
  {
    aliases: { id: ["tirai"], en: ["curtain"], zh: ["窗帘"] },
    translation: { ngoko: "gorden", krama: "gorden", "krama-inggil": "gorden" },
  },
  {
    aliases: { id: ["tiram"], en: ["oyster"], zh: ["牡蛎"] },
    translation: { ngoko: "tiram", krama: "tiram", "krama-inggil": "tiram" },
  },
  {
    aliases: { id: ["tiriskan"], en: ["drain food"], zh: ["沥干"] },
    translation: { ngoko: "nirisake", krama: "nirisaken", "krama-inggil": "nirisaken" },
  },
  {
    aliases: { id: ["tiru"], en: ["imitate"], zh: ["模仿"] },
    translation: { ngoko: "niru", krama: "niru", "krama-inggil": "niru" },
  },
  {
    aliases: { id: ["tirus"], en: ["tapered"], zh: ["逐渐变细的"] },
    translation: { ngoko: "lancip", krama: "lancip", "krama-inggil": "lancip" },
  },
  {
    aliases: { id: ["tisu"], en: ["tissue"], zh: ["纸巾"] },
    translation: { ngoko: "tisu", krama: "tisu", "krama-inggil": "tisu" },
  },
  {
    aliases: { id: ["titip"], en: ["entrust"], zh: ["托付"] },
    translation: { ngoko: "nitip", krama: "nitip", "krama-inggil": "nitip" },
  },
  {
    aliases: { id: ["tiup"], en: ["blow"], zh: ["吹"] },
    translation: { ngoko: "nyebul", krama: "nyebul", "krama-inggil": "nyebul" },
  },
  {
    aliases: { id: ["tobat"], en: ["to repent"], zh: ["忏悔"] },
    translation: { ngoko: "tobat", krama: "tobat", "krama-inggil": "tobat" },
  },
  {
    aliases: { id: ["toilet"], en: ["toilet"], zh: ["厕所"] },
    translation: { ngoko: "kakus", krama: "kakus", "krama-inggil": "kakus" },
  },
  {
    aliases: { id: ["tokek"], en: ["tokay gecko"], zh: ["大壁虎"] },
    translation: { ngoko: "tekek", krama: "tekek", "krama-inggil": "tekek" },
  },
  {
    aliases: { id: ["toko"], en: ["shop","store"], zh: ["商店"] },
    translation: { ngoko: "toko", krama: "toko", "krama-inggil": "toko" },
  },
  {
    aliases: { id: ["tolak"], en: ["reject"], zh: ["拒绝"] },
    translation: { ngoko: "nolak", krama: "nampik", "krama-inggil": "nampik" },
  },
  {
    aliases: { id: ["tolak peluru"], en: ["shot put"], zh: ["推铅球"] },
    translation: { ngoko: "tolak peluru", krama: "tolak peluru", "krama-inggil": "tolak peluru" },
  },
  {
    aliases: { id: ["toleh"], en: ["turn one's head"], zh: ["转头"] },
    translation: { ngoko: "noleh", krama: "noleh", "krama-inggil": "noleh" },
  },
  {
    aliases: { id: ["tolong"], en: ["please","help"], zh: ["请；帮忙"] },
    translation: { ngoko: "tulung", krama: "nyuwun tulung", "krama-inggil": "nyuwun tulung" },
  },
  {
    aliases: { id: ["tomat"], en: ["tomato"], zh: ["番茄"] },
    translation: { ngoko: "tomat", krama: "tomat", "krama-inggil": "tomat" },
  },
  {
    aliases: { id: ["tongkat"], en: ["stick"], zh: ["手杖"] },
    translation: { ngoko: "teken", krama: "teken", "krama-inggil": "lantaran" },
  },
  {
    aliases: { id: ["tonton"], en: ["watch"], zh: ["观看"] },
    translation: { ngoko: "nonton", krama: "nonton", "krama-inggil": "mirsani" },
  },
  {
    aliases: { id: ["topan"], en: ["typhoon"], zh: ["台风"] },
    translation: { ngoko: "angin topan", krama: "angin topan", "krama-inggil": "angin topan" },
  },
  {
    aliases: { id: ["topang"], en: ["support physically"], zh: ["支撑"] },
    translation: { ngoko: "nyangga", krama: "nyanggi", "krama-inggil": "nyanggi" },
  },
  {
    aliases: { id: ["topeng"], en: ["mask"], zh: ["面具"] },
    translation: { ngoko: "topèng", krama: "topèng", "krama-inggil": "topèng" },
  },
  {
    aliases: { id: ["topi"], en: ["hat"], zh: ["帽子"] },
    translation: { ngoko: "topi", krama: "topi", "krama-inggil": "topi" },
  },
  {
    aliases: { id: ["toples"], en: ["storage jar"], zh: ["储物罐"] },
    translation: { ngoko: "toples", krama: "toples", "krama-inggil": "toples" },
  },
  {
    aliases: { id: ["toska"], en: ["turquoise"], zh: ["绿松石色"] },
    translation: { ngoko: "toska", krama: "toska", "krama-inggil": "toska" },
  },
  {
    aliases: { id: ["tradisi"], en: ["tradition"], zh: ["传统"] },
    translation: { ngoko: "adat", krama: "adat", "krama-inggil": "adat" },
  },
  {
    aliases: { id: ["traktor"], en: ["tractor"], zh: ["拖拉机"] },
    translation: { ngoko: "traktor", krama: "traktor", "krama-inggil": "traktor" },
  },
  {
    aliases: { id: ["transaksi"], en: ["transaction"], zh: ["交易"] },
    translation: { ngoko: "transaksi", krama: "transaksi", "krama-inggil": "transaksi" },
  },
  {
    aliases: { id: ["transfer"], en: ["transfer money"], zh: ["转账"] },
    translation: { ngoko: "nransfer", krama: "nransfer", "krama-inggil": "nransfer" },
  },
  {
    aliases: { id: ["transformator"], en: ["transformer"], zh: ["变压器"] },
    translation: { ngoko: "trafo", krama: "trafo", "krama-inggil": "trafo" },
  },
  {
    aliases: { id: ["transportasi"], en: ["transportation"], zh: ["交通"] },
    translation: { ngoko: "transportasi", krama: "transportasi", "krama-inggil": "transportasi" },
  },
  {
    aliases: { id: ["trapesium"], en: ["trapezoid"], zh: ["梯形"] },
    translation: { ngoko: "trapesium", krama: "trapesium", "krama-inggil": "trapesium" },
  },
  {
    aliases: { id: ["trenggiling"], en: ["pangolin"], zh: ["穿山甲"] },
    translation: { ngoko: "trenggiling", krama: "trenggiling", "krama-inggil": "trenggiling" },
  },
  {
    aliases: { id: ["trotoar"], en: ["sidewalk"], zh: ["人行道"] },
    translation: { ngoko: "trotoar", krama: "trotoar", "krama-inggil": "trotoar" },
  },
  {
    aliases: { id: ["truk"], en: ["truck"], zh: ["卡车"] },
    translation: { ngoko: "truk", krama: "truk", "krama-inggil": "truk" },
  },
  {
    aliases: { id: ["tua"], en: ["old"], zh: ["年老"] },
    translation: { ngoko: "tuwa", krama: "sepuh", "krama-inggil": "sepuh" },
  },
  {
    aliases: { id: ["tuan"], en: ["sir","master"], zh: ["先生；主人"] },
    translation: { ngoko: "bendara", krama: "bendara", "krama-inggil": "bendara" },
  },
  {
    aliases: { id: ["tuan rumah"], en: ["host"], zh: ["主人"] },
    translation: { ngoko: "sing duwe omah", krama: "ingkang gadhah griya", "krama-inggil": "ingkang kagungan dalem" },
  },
  {
    aliases: { id: ["tuang"], en: ["pour"], zh: ["倒"] },
    translation: { ngoko: "ngesok", krama: "ngesok", "krama-inggil": "ngesok" },
  },
  {
    aliases: { id: ["tuberkulosis"], en: ["tuberculosis"], zh: ["结核病"] },
    translation: { ngoko: "TBC", krama: "TBC", "krama-inggil": "TBC" },
  },
  {
    aliases: { id: ["tubuh"], en: ["body"], zh: ["身体"] },
    translation: { ngoko: "awak", krama: "badan", "krama-inggil": "salira" },
  },
  {
    aliases: { id: ["tuduh"], en: ["accuse"], zh: ["指责"] },
    translation: { ngoko: "nuduh", krama: "nuduh", "krama-inggil": "nuduh" },
  },
  {
    aliases: { id: ["tugas"], en: ["task"], zh: ["任务"] },
    translation: { ngoko: "tugas", krama: "jejibahan", "krama-inggil": "jejibahan" },
  },
  {
    aliases: { id: ["Tuhan"], en: ["God"], zh: ["上帝"] },
    translation: { ngoko: "Gusti", krama: "Gusti", "krama-inggil": "Gusti" },
  },
  {
    aliases: { id: ["tujuan"], en: ["destination"], zh: ["目的地"] },
    translation: { ngoko: "tujuwan", krama: "ancas", "krama-inggil": "ancas" },
  },
  {
    aliases: { id: ["tukang"], en: ["craftsperson"], zh: ["工匠"] },
    translation: { ngoko: "tukang", krama: "tukang", "krama-inggil": "tukang" },
  },
  {
    aliases: { id: ["tukang bangunan"], en: ["construction worker"], zh: ["建筑工人"] },
    translation: { ngoko: "tukang bangunan", krama: "tukang bangunan", "krama-inggil": "tukang bangunan" },
  },
  {
    aliases: { id: ["tukang batu"], en: ["mason"], zh: ["石匠"] },
    translation: { ngoko: "tukang watu", krama: "tukang séla", "krama-inggil": "tukang séla" },
  },
  {
    aliases: { id: ["tukang cat"], en: ["house painter"], zh: ["油漆工"] },
    translation: { ngoko: "tukang cèt", krama: "tukang cèt", "krama-inggil": "tukang cèt" },
  },
  {
    aliases: { id: ["tukang cukur"], en: ["barber"], zh: ["剃头师傅"] },
    translation: { ngoko: "tukang cukur", krama: "tukang cukur", "krama-inggil": "tukang cukur" },
  },
  {
    aliases: { id: ["tukang kayu"], en: ["carpenter"], zh: ["木匠"] },
    translation: { ngoko: "tukang kayu", krama: "tukang kajeng", "krama-inggil": "tukang kajeng" },
  },
  {
    aliases: { id: ["tukang kebun"], en: ["gardener"], zh: ["园丁"] },
    translation: { ngoko: "tukang kebon", krama: "tukang kebon", "krama-inggil": "tukang kebon" },
  },
  {
    aliases: { id: ["tukang las"], en: ["welder"], zh: ["焊工"] },
    translation: { ngoko: "tukang las", krama: "tukang las", "krama-inggil": "tukang las" },
  },
  {
    aliases: { id: ["tukang ledeng"], en: ["plumber"], zh: ["管道工"] },
    translation: { ngoko: "tukang ledheng", krama: "tukang ledheng", "krama-inggil": "tukang ledheng" },
  },
  {
    aliases: { id: ["tukang listrik"], en: ["electrician"], zh: ["电工"] },
    translation: { ngoko: "tukang listrik", krama: "tukang listrik", "krama-inggil": "tukang listrik" },
  },
  {
    aliases: { id: ["tukang parkir"], en: ["parking attendant"], zh: ["停车管理员"] },
    translation: { ngoko: "tukang parkir", krama: "tukang parkir", "krama-inggil": "tukang parkir" },
  },
  {
    aliases: { id: ["tukang pijat"], en: ["massage therapist"], zh: ["按摩师"] },
    translation: { ngoko: "tukang pijet", krama: "tukang pijet", "krama-inggil": "tukang pijet" },
  },
  {
    aliases: { id: ["tukang pos"], en: ["postal worker"], zh: ["邮递员"] },
    translation: { ngoko: "tukang pos", krama: "tukang pos", "krama-inggil": "tukang pos" },
  },
  {
    aliases: { id: ["tukang roti"], en: ["baker"], zh: ["面包师"] },
    translation: { ngoko: "tukang roti", krama: "tukang roti", "krama-inggil": "tukang roti" },
  },
  {
    aliases: { id: ["tukar"], en: ["exchange"], zh: ["交换"] },
    translation: { ngoko: "ngijoli", krama: "ngijoli", "krama-inggil": "ngijoli" },
  },
  {
    aliases: { id: ["tulang"], en: ["bone"], zh: ["骨头"] },
    translation: { ngoko: "balung", krama: "balung", "krama-inggil": "tosan" },
  },
  {
    aliases: { id: ["tulang kering"], en: ["shinbone"], zh: ["胫骨"] },
    translation: { ngoko: "balung kempol", krama: "balung kempol", "krama-inggil": "tosan kempol" },
  },
  {
    aliases: { id: ["tuli"], en: ["deaf"], zh: ["耳聋"] },
    translation: { ngoko: "budheg", krama: "budheg", "krama-inggil": "budheg" },
  },
  {
    aliases: { id: ["tulis"], en: ["write"], zh: ["写"] },
    translation: { ngoko: "nulis", krama: "nyerat", "krama-inggil": "nyerat" },
  },
  {
    aliases: { id: ["tulisan"], en: ["writing"], zh: ["文字"] },
    translation: { ngoko: "tulisan", krama: "seratan", "krama-inggil": "seratan" },
  },
  {
    aliases: { id: ["tulus"], en: ["sincere"], zh: ["真诚"] },
    translation: { ngoko: "tulus", krama: "tulus", "krama-inggil": "tulus" },
  },
  {
    aliases: { id: ["tumbuh"], en: ["grow"], zh: ["生长"] },
    translation: { ngoko: "tuwuh", krama: "tuwuh", "krama-inggil": "tuwuh" },
  },
  {
    aliases: { id: ["tumbuhan"], en: ["plant"], zh: ["植物"] },
    translation: { ngoko: "tetuwuhan", krama: "tetuwuhan", "krama-inggil": "tetuwuhan" },
  },
  {
    aliases: { id: ["tumbuk"], en: ["pound"], zh: ["舂"] },
    translation: { ngoko: "nutu", krama: "nutu", "krama-inggil": "nutu" },
  },
  {
    aliases: { id: ["tumis"], en: ["stir-fry"], zh: ["炒"] },
    translation: { ngoko: "numis", krama: "numis", "krama-inggil": "numis" },
  },
  {
    aliases: { id: ["tumit"], en: ["heel"], zh: ["脚后跟"] },
    translation: { ngoko: "tungkak", krama: "tungkak", "krama-inggil": "tungkak" },
  },
  {
    aliases: { id: ["tumor"], en: ["tumor"], zh: ["肿瘤"] },
    translation: { ngoko: "tumor", krama: "tumor", "krama-inggil": "tumor" },
  },
  {
    aliases: { id: ["tumpah"], en: ["spill"], zh: ["洒出"] },
    translation: { ngoko: "mbludag", krama: "mbludag", "krama-inggil": "mbludag" },
  },
  {
    aliases: { id: ["tumpeng"], en: ["ceremonial rice cone"], zh: ["仪式用锥形米饭"] },
    translation: { ngoko: "tumpeng", krama: "tumpeng", "krama-inggil": "tumpeng" },
  },
  {
    aliases: { id: ["tumpu"], en: ["rest one's weight on"], zh: ["支撑身体"] },
    translation: { ngoko: "numpu", krama: "numpu", "krama-inggil": "numpu" },
  },
  {
    aliases: { id: ["tumpul"], en: ["blunt-tipped"], zh: ["钝头的"] },
    translation: { ngoko: "papak", krama: "papak", "krama-inggil": "papak" },
  },
  {
    aliases: { id: ["tuna"], en: ["tuna"], zh: ["金枪鱼"] },
    translation: { ngoko: "tuna", krama: "tuna", "krama-inggil": "tuna" },
  },
  {
    aliases: { id: ["tunai"], en: ["in cash"], zh: ["现金支付"] },
    translation: { ngoko: "kontan", krama: "kontan", "krama-inggil": "kontan" },
  },
  {
    aliases: { id: ["tunas"], en: ["shoot"], zh: ["嫩芽"] },
    translation: { ngoko: "thukul", krama: "thukul", "krama-inggil": "thukul" },
  },
  {
    aliases: { id: ["tunduk"], en: ["bow one's head"], zh: ["低头"] },
    translation: { ngoko: "ndhungkluk", krama: "ndhungkluk", "krama-inggil": "ndhungkluk" },
  },
  {
    aliases: { id: ["tunggu"], en: ["wait"], zh: ["等待"] },
    translation: { ngoko: "ngenteni", krama: "ngentosi", "krama-inggil": "ngentosi" },
  },
  {
    aliases: { id: ["tunggu sebentar"], en: ["wait a moment"], zh: ["请稍等"] },
    translation: { ngoko: "enteni sedhela", krama: "ngentosi sekedhap", "krama-inggil": "ngentosi sekedhap" },
  },
  {
    aliases: { id: ["tungku"], en: ["stove/hearth"], zh: ["炉灶"] },
    translation: { ngoko: "pawon", krama: "pawon", "krama-inggil": "pawon" },
  },
  {
    aliases: { id: ["tunjuk"], en: ["point with a finger"], zh: ["指"] },
    translation: { ngoko: "nuding", krama: "nuding", "krama-inggil": "nuding" },
  },
  {
    aliases: { id: ["tupai"], en: ["treeshrew"], zh: ["树鼩"] },
    translation: { ngoko: "tupai", krama: "tupai", "krama-inggil": "tupai" },
  },
  {
    aliases: { id: ["turun"], en: ["go down"], zh: ["下去"] },
    translation: { ngoko: "mudhun", krama: "mandhap", "krama-inggil": "mandhap" },
  },
  {
    aliases: { id: ["turun tanah"], en: ["baby's first ground-stepping ceremony"], zh: ["婴儿首次踏地仪式"] },
    translation: { ngoko: "tedhak siten", krama: "tedhak siten", "krama-inggil": "tedhak siten" },
  },
  {
    aliases: { id: ["turut"], en: ["follow/join"], zh: ["跟随"] },
    translation: { ngoko: "melu", krama: "ndherek", "krama-inggil": "ndherek" },
  },
  {
    aliases: { id: ["turut berduka cita"], en: ["my condolences"], zh: ["谨致哀悼"] },
    translation: { ngoko: "melu bela sungkawa", krama: "ndherek bela sungkawa", "krama-inggil": "ndherek bela sungkawa" },
  },
  {
    aliases: { id: ["tutor"], en: ["tutor"], zh: ["辅导老师"] },
    translation: { ngoko: "guru les", krama: "guru les", "krama-inggil": "guru les" },
  },
  {
    aliases: { id: ["tutup"], en: ["lid"], zh: ["盖子"] },
    translation: { ngoko: "tutup", krama: "tutup", "krama-inggil": "tutup" },
  },
  {
    aliases: { id: ["tutup botol"], en: ["bottle cap"], zh: ["瓶盖"] },
    translation: { ngoko: "tutup botol", krama: "tutup botol", "krama-inggil": "tutup botol" },
  },
  {
    aliases: { id: ["uang"], en: ["money"], zh: ["钱"] },
    translation: { ngoko: "dhuwit", krama: "arta", "krama-inggil": "arta" },
  },
  {
    aliases: { id: ["uang elektronik"], en: ["electronic money"], zh: ["电子货币"] },
    translation: { ngoko: "dhuwit elektronik", krama: "arta elektronik", "krama-inggil": "arta elektronik" },
  },
  {
    aliases: { id: ["uang kembalian"], en: ["change"], zh: ["找零"] },
    translation: { ngoko: "dhuwit susuk", krama: "arta susuk", "krama-inggil": "arta susuk" },
  },
  {
    aliases: { id: ["uang kertas"], en: ["banknote"], zh: ["纸币"] },
    translation: { ngoko: "dhuwit kertas", krama: "arta kertas", "krama-inggil": "arta kertas" },
  },
  {
    aliases: { id: ["uang logam"], en: ["coin"], zh: ["硬币"] },
    translation: { ngoko: "dhuwit logam", krama: "arta logam", "krama-inggil": "arta logam" },
  },
  {
    aliases: { id: ["uang muka"], en: ["down payment"], zh: ["首付款"] },
    translation: { ngoko: "panjer", krama: "panjer", "krama-inggil": "panjer" },
  },
  {
    aliases: { id: ["uap"], en: ["vapor"], zh: ["蒸气"] },
    translation: { ngoko: "uwab", krama: "uwab", "krama-inggil": "uwab" },
  },
  {
    aliases: { id: ["ubi jalar"], en: ["sweet potato"], zh: ["红薯"] },
    translation: { ngoko: "tela", krama: "tela", "krama-inggil": "tela" },
  },
  {
    aliases: { id: ["ucap"], en: ["utter"], zh: ["说出"] },
    translation: { ngoko: "ngucap", krama: "ngucap", "krama-inggil": "ngucap" },
  },
  {
    aliases: { id: ["udang"], en: ["shrimp"], zh: ["虾"] },
    translation: { ngoko: "urang", krama: "urang", "krama-inggil": "urang" },
  },
  {
    aliases: { id: ["udara"], en: ["air"], zh: ["空气"] },
    translation: { ngoko: "hawa", krama: "hawa", "krama-inggil": "hawa" },
  },
  {
    aliases: { id: ["udik"], en: ["rural/backwater"], zh: ["乡下"] },
    translation: { ngoko: "ndesa", krama: "ndesa", "krama-inggil": "ndesa" },
  },
  {
    aliases: { id: ["ujian"], en: ["examination"], zh: ["考试"] },
    translation: { ngoko: "ujian", krama: "ujian", "krama-inggil": "ujian" },
  },
  {
    aliases: { id: ["ujung"], en: ["tip","end"], zh: ["末端"] },
    translation: { ngoko: "pucuk", krama: "pucuk", "krama-inggil": "pucuk" },
  },
  {
    aliases: { id: ["ukur"], en: ["measure"], zh: ["测量"] },
    translation: { ngoko: "ngukur", krama: "ngukur", "krama-inggil": "ngukur" },
  },
  {
    aliases: { id: ["ukuran"], en: ["size"], zh: ["尺码"] },
    translation: { ngoko: "ukuran", krama: "ukuran", "krama-inggil": "ukuran" },
  },
  {
    aliases: { id: ["ulang"], en: ["repeat"], zh: ["重复"] },
    translation: { ngoko: "mbaleni", krama: "ngambali", "krama-inggil": "ngambali" },
  },
  {
    aliases: { id: ["ulang tahun"], en: ["birthday","anniversary"], zh: ["生日；周年纪念"] },
    translation: { ngoko: "dina lair", krama: "ambal warsa", "krama-inggil": "ambal warsa" },
  },
  {
    aliases: { id: ["ulangan"], en: ["class test"], zh: ["测验"] },
    translation: { ngoko: "ulangan", krama: "ulangan", "krama-inggil": "ulangan" },
  },
  {
    aliases: { id: ["ulangi"], en: ["repeat"], zh: ["重复"] },
    translation: { ngoko: "mbaleni", krama: "mbaleni", "krama-inggil": "mbaleni" },
  },
  {
    aliases: { id: ["ular"], en: ["snake"], zh: ["蛇"] },
    translation: { ngoko: "ula", krama: "ula", "krama-inggil": "ula" },
  },
  {
    aliases: { id: ["ular tangga"], en: ["snakes and ladders"], zh: ["蛇梯棋"] },
    translation: { ngoko: "ular tangga", krama: "ular tangga", "krama-inggil": "ular tangga" },
  },
  {
    aliases: { id: ["ulas"], en: ["review"], zh: ["评论"] },
    translation: { ngoko: "ulas", krama: "ulas", "krama-inggil": "ulas" },
  },
  {
    aliases: { id: ["ulat"], en: ["caterpillar"], zh: ["毛毛虫"] },
    translation: { ngoko: "uler", krama: "uler", "krama-inggil": "uler" },
  },
  {
    aliases: { id: ["ulek"], en: ["grind with a pestle"], zh: ["研磨"] },
    translation: { ngoko: "uleg", krama: "uleg", "krama-inggil": "uleg" },
  },
  {
    aliases: { id: ["ulekan"], en: ["pestle"], zh: ["研杵"] },
    translation: { ngoko: "munthu", krama: "munthu", "krama-inggil": "munthu" },
  },
  {
    aliases: { id: ["uleni"], en: ["knead"], zh: ["揉面"] },
    translation: { ngoko: "nguleni", krama: "nguleni", "krama-inggil": "nguleni" },
  },
  {
    aliases: { id: ["umbi"], en: ["tuber"], zh: ["块茎"] },
    translation: { ngoko: "umbi", krama: "umbi", "krama-inggil": "umbi" },
  },
  {
    aliases: { id: ["umpat"], en: ["swear"], zh: ["说脏话"] },
    translation: { ngoko: "misuh", krama: "misuh", "krama-inggil": "misuh" },
  },
  {
    aliases: { id: ["umrah"], en: ["minor pilgrimage to Mecca"], zh: ["副朝"] },
    translation: { ngoko: "umrah", krama: "umrah", "krama-inggil": "umrah" },
  },
  {
    aliases: { id: ["umum"], en: ["general/public"], zh: ["一般/公共"] },
    translation: { ngoko: "umum", krama: "umum", "krama-inggil": "umum" },
  },
  {
    aliases: { id: ["umumkan"], en: ["announce"], zh: ["宣布"] },
    translation: { ngoko: "ngumumake", krama: "ngumumaken", "krama-inggil": "ngumumaken" },
  },
  {
    aliases: { id: ["umur"], en: ["age"], zh: ["年龄"] },
    translation: { ngoko: "umur", krama: "umur", "krama-inggil": "yuswa" },
  },
  {
    aliases: { id: ["undang"], en: ["invite"], zh: ["邀请"] },
    translation: { ngoko: "ngundang", krama: "ngundang", "krama-inggil": "ngundang" },
  },
  {
    aliases: { id: ["undangan"], en: ["invitation"], zh: ["邀请函"] },
    translation: { ngoko: "undangan", krama: "undangan", "krama-inggil": "undangan" },
  },
  {
    aliases: { id: ["unduh"], en: ["download/harvest"], zh: ["下载/收获"] },
    translation: { ngoko: "ngundhuh", krama: "ngundhuh", "krama-inggil": "ngundhuh" },
  },
  {
    aliases: { id: ["unggah"], en: ["upload"], zh: ["上传"] },
    translation: { ngoko: "unggah", krama: "unggah", "krama-inggil": "unggah" },
  },
  {
    aliases: { id: ["unggul"], en: ["superior"], zh: ["优秀"] },
    translation: { ngoko: "unggul", krama: "unggul", "krama-inggil": "unggul" },
  },
  {
    aliases: { id: ["unggun"], en: ["pile"], zh: ["堆"] },
    translation: { ngoko: "unggung", krama: "unggung", "krama-inggil": "unggung" },
  },
  {
    aliases: { id: ["ungkap"], en: ["reveal/express"], zh: ["表达/揭示"] },
    translation: { ngoko: "ngandharake", krama: "ngandharaken", "krama-inggil": "ngandharaken" },
  },
  {
    aliases: { id: ["ungsi"], en: ["evacuate"], zh: ["撤离"] },
    translation: { ngoko: "ngungsi", krama: "ngungsi", "krama-inggil": "ngungsi" },
  },
  {
    aliases: { id: ["ungu"], en: ["purple"], zh: ["紫色"] },
    translation: { ngoko: "wungu", krama: "wungu", "krama-inggil": "wungu" },
  },
  {
    aliases: { id: ["ungu kemerahan"], en: ["reddish purple"], zh: ["红紫色"] },
    translation: { ngoko: "wungu semu abang", krama: "wungu semu abrit", "krama-inggil": "wungu semu abrit" },
  },
  {
    aliases: { id: ["ungu lavender"], en: ["lavender purple"], zh: ["薰衣草紫"] },
    translation: { ngoko: "wungu lavender", krama: "wungu lavender", "krama-inggil": "wungu lavender" },
  },
  {
    aliases: { id: ["ungu muda"], en: ["light purple"], zh: ["浅紫色"] },
    translation: { ngoko: "wungu enom", krama: "wungu anem", "krama-inggil": "wungu anem" },
  },
  {
    aliases: { id: ["ungu pastel"], en: ["pastel purple"], zh: ["柔紫色"] },
    translation: { ngoko: "wungu pastel", krama: "wungu pastel", "krama-inggil": "wungu pastel" },
  },
  {
    aliases: { id: ["ungu pucat"], en: ["pale purple"], zh: ["淡紫色"] },
    translation: { ngoko: "wungu pucet", krama: "wungu pucet", "krama-inggil": "wungu pucet" },
  },
  {
    aliases: { id: ["ungu terang"], en: ["bright purple"], zh: ["亮紫色"] },
    translation: { ngoko: "wungu padhang", krama: "wungu padhang", "krama-inggil": "wungu padhang" },
  },
  {
    aliases: { id: ["ungu terung"], en: ["eggplant purple"], zh: ["茄紫色"] },
    translation: { ngoko: "wungu terong", krama: "wungu terong", "krama-inggil": "wungu terong" },
  },
  {
    aliases: { id: ["ungu tua"], en: ["dark purple"], zh: ["深紫色"] },
    translation: { ngoko: "wungu tuwa", krama: "wungu sepuh", "krama-inggil": "wungu sepuh" },
  },
  {
    aliases: { id: ["unik"], en: ["unique"], zh: ["独特"] },
    translation: { ngoko: "unik", krama: "unik", "krama-inggil": "unik" },
  },
  {
    aliases: { id: ["unit"], en: ["unit"], zh: ["单位"] },
    translation: { ngoko: "unit", krama: "unit", "krama-inggil": "unit" },
  },
  {
    aliases: { id: ["universal"], en: ["universal"], zh: ["普遍"] },
    translation: { ngoko: "universal", krama: "universal", "krama-inggil": "universal" },
  },
  {
    aliases: { id: ["unta"], en: ["camel"], zh: ["骆驼"] },
    translation: { ngoko: "unta", krama: "unta", "krama-inggil": "unta" },
  },
  {
    aliases: { id: ["untai"], en: ["strand"], zh: ["串"] },
    translation: { ngoko: "untai", krama: "untai", "krama-inggil": "untai" },
  },
  {
    aliases: { id: ["untuk"], en: ["for","to"], zh: ["为了；给"] },
    translation: { ngoko: "kanggo", krama: "kangge", "krama-inggil": "kangge" },
  },
  {
    aliases: { id: ["untuk apa"], en: ["what for"], zh: ["做什么用"] },
    translation: { ngoko: "kanggo apa", krama: "kangge menapa", "krama-inggil": "kangge menapa" },
  },
  {
    aliases: { id: ["untuk siapa"], en: ["for whom"], zh: ["给谁"] },
    translation: { ngoko: "kanggo sapa", krama: "kangge sinten", "krama-inggil": "kangge sinten" },
  },
  {
    aliases: { id: ["untung"], en: ["make a profit"], zh: ["获利"] },
    translation: { ngoko: "entuk bathi", krama: "angsal bathi", "krama-inggil": "angsal bathi" },
  },
  {
    aliases: { id: ["untungnya"], en: ["fortunately"], zh: ["幸好"] },
    translation: { ngoko: "begjane", krama: "begjanipun", "krama-inggil": "begjanipun" },
  },
  {
    aliases: { id: ["upacara"], en: ["ceremony"], zh: ["仪式"] },
    translation: { ngoko: "upacara", krama: "upacara", "krama-inggil": "upacara" },
  },
  {
    aliases: { id: ["upah"], en: ["wages"], zh: ["工钱"] },
    translation: { ngoko: "opah", krama: "epah", "krama-inggil": "epah" },
  },
  {
    aliases: { id: ["upaya"], en: ["effort"], zh: ["努力"] },
    translation: { ngoko: "upaya", krama: "upaya", "krama-inggil": "upaya" },
  },
  {
    aliases: { id: ["urap"], en: ["vegetables with seasoned grated coconut"], zh: ["椰丝拌蔬菜"] },
    translation: { ngoko: "gudhang", krama: "gudhang", "krama-inggil": "gudhang" },
  },
  {
    aliases: { id: ["urat"], en: ["sinew"], zh: ["筋"] },
    translation: { ngoko: "urat", krama: "urat", "krama-inggil": "urat" },
  },
  {
    aliases: { id: ["urban"], en: ["urban"], zh: ["城市的"] },
    translation: { ngoko: "urban", krama: "urban", "krama-inggil": "urban" },
  },
  {
    aliases: { id: ["urine"], en: ["urine"], zh: ["尿液"] },
    translation: { ngoko: "uyuh", krama: "toya seni", "krama-inggil": "toya seni" },
  },
  {
    aliases: { id: ["urus"], en: ["attend to","manage"], zh: ["照管"] },
    translation: { ngoko: "ngurus", krama: "ngurus", "krama-inggil": "ngurus" },
  },
  {
    aliases: { id: ["urut"], en: ["massage with stroking pressure"], zh: ["推拿"] },
    translation: { ngoko: "ngurut", krama: "ngurut", "krama-inggil": "ngurut" },
  },
  {
    aliases: { id: ["urutan"], en: ["sequence"], zh: ["顺序"] },
    translation: { ngoko: "urut-urutan", krama: "urut-urutan", "krama-inggil": "urut-urutan" },
  },
  {
    aliases: { id: ["usaha"], en: ["business/effort"], zh: ["生意/努力"] },
    translation: { ngoko: "usaha", krama: "usaha", "krama-inggil": "usaha" },
  },
  {
    aliases: { id: ["usap"], en: ["wipe with the hand"], zh: ["擦拭"] },
    translation: { ngoko: "ngusap", krama: "ngusap", "krama-inggil": "ngusap" },
  },
  {
    aliases: { id: ["usia"], en: ["age"], zh: ["年龄"] },
    translation: { ngoko: "umur", krama: "yuswa", "krama-inggil": "yuswa" },
  },
  {
    aliases: { id: ["ustaz"], en: ["Islamic religious teacher"], zh: ["伊斯兰教教师"] },
    translation: { ngoko: "ustaz", krama: "ustaz", "krama-inggil": "ustaz" },
  },
  {
    aliases: { id: ["usus"], en: ["intestine"], zh: ["肠"] },
    translation: { ngoko: "usus", krama: "usus", "krama-inggil": "usus" },
  },
  {
    aliases: { id: ["utama"], en: ["main"], zh: ["主要"] },
    translation: { ngoko: "utama", krama: "utami", "krama-inggil": "utami" },
  },
  {
    aliases: { id: ["utamakan"], en: ["prioritize"], zh: ["优先考虑"] },
    translation: { ngoko: "ngutamakake", krama: "ngutamakaken", "krama-inggil": "ngutamakaken" },
  },
  {
    aliases: { id: ["utang"], en: ["borrow money"], zh: ["借钱"] },
    translation: { ngoko: "utang", krama: "nyambut", "krama-inggil": "nyambut" },
  },
  {
    aliases: { id: ["utara"], en: ["north"], zh: ["北"] },
    translation: { ngoko: "lor", krama: "ler", "krama-inggil": "ler" },
  },
  {
    aliases: { id: ["utuh"], en: ["intact"], zh: ["完整的"] },
    translation: { ngoko: "wutuh", krama: "wetah", "krama-inggil": "wetah" },
  },
  {
    aliases: { id: ["vagina"], en: ["vagina"], zh: ["阴道"] },
    translation: { ngoko: "tempek", krama: "tempek", "krama-inggil": "badhong" },
  },
  {
    aliases: { id: ["vaksin"], en: ["vaccine"], zh: ["疫苗"] },
    translation: { ngoko: "vaksin", krama: "vaksin", "krama-inggil": "vaksin" },
  },
  {
    aliases: { id: ["vaksinasi"], en: ["vaccination"], zh: ["接种疫苗"] },
    translation: { ngoko: "vaksinasi", krama: "vaksinasi", "krama-inggil": "vaksinasi" },
  },
  {
    aliases: { id: ["valid"], en: ["valid"], zh: ["有效"] },
    translation: { ngoko: "valid", krama: "valid", "krama-inggil": "valid" },
  },
  {
    aliases: { id: ["validasi"], en: ["validation"], zh: ["验证"] },
    translation: { ngoko: "validasi", krama: "validasi", "krama-inggil": "validasi" },
  },
  {
    aliases: { id: ["vanili"], en: ["vanilla"], zh: ["香草"] },
    translation: { ngoko: "panili", krama: "panili", "krama-inggil": "panili" },
  },
  {
    aliases: { id: ["variabel"], en: ["variable"], zh: ["变量"] },
    translation: { ngoko: "variabel", krama: "variabel", "krama-inggil": "variabel" },
  },
  {
    aliases: { id: ["varian"], en: ["variant"], zh: ["变体"] },
    translation: { ngoko: "varian", krama: "varian", "krama-inggil": "varian" },
  },
  {
    aliases: { id: ["variasi"], en: ["variation"], zh: ["变化"] },
    translation: { ngoko: "variasi", krama: "variasi", "krama-inggil": "variasi" },
  },
  {
    aliases: { id: ["vas"], en: ["vase"], zh: ["花瓶"] },
    translation: { ngoko: "vas", krama: "vas", "krama-inggil": "vas" },
  },
  {
    aliases: { id: ["vegetarian"], en: ["vegetarian"], zh: ["素食者"] },
    translation: { ngoko: "vegetarian", krama: "vegetarian", "krama-inggil": "vegetarian" },
  },
  {
    aliases: { id: ["vegetasi"], en: ["vegetation"], zh: ["植被"] },
    translation: { ngoko: "tetuwuhan", krama: "tetuwuhan", "krama-inggil": "tetuwuhan" },
  },
  {
    aliases: { id: ["vektor"], en: ["vector"], zh: ["向量"] },
    translation: { ngoko: "vektor", krama: "vektor", "krama-inggil": "vektor" },
  },
  {
    aliases: { id: ["vena"], en: ["vein"], zh: ["静脉"] },
    translation: { ngoko: "vena", krama: "vena", "krama-inggil": "vena" },
  },
  {
    aliases: { id: ["ventilasi"], en: ["ventilation"], zh: ["通风"] },
    translation: { ngoko: "ventilasi", krama: "ventilasi", "krama-inggil": "ventilasi" },
  },
  {
    aliases: { id: ["verifikasi"], en: ["verification"], zh: ["核实"] },
    translation: { ngoko: "verifikasi", krama: "verifikasi", "krama-inggil": "verifikasi" },
  },
  {
    aliases: { id: ["versi"], en: ["version"], zh: ["版本"] },
    translation: { ngoko: "versi", krama: "versi", "krama-inggil": "versi" },
  },
  {
    aliases: { id: ["vertikal"], en: ["vertical"], zh: ["垂直"] },
    translation: { ngoko: "jejeg", krama: "vertikal", "krama-inggil": "vertikal" },
  },
  {
    aliases: { id: ["vespa"], en: ["scooter"], zh: ["踏板摩托车"] },
    translation: { ngoko: "vespa", krama: "vespa", "krama-inggil": "vespa" },
  },
  {
    aliases: { id: ["veteran"], en: ["veteran"], zh: ["老兵"] },
    translation: { ngoko: "veteran", krama: "veteran", "krama-inggil": "veteran" },
  },
  {
    aliases: { id: ["veteriner"], en: ["veterinary"], zh: ["兽医"] },
    translation: { ngoko: "kedokteran hewan", krama: "kedokteran hewan", "krama-inggil": "kedokteran hewan" },
  },
  {
    aliases: { id: ["video"], en: ["video"], zh: ["视频"] },
    translation: { ngoko: "video", krama: "video", "krama-inggil": "video" },
  },
  {
    aliases: { id: ["video game"], en: ["video game"], zh: ["电子游戏"] },
    translation: { ngoko: "dolanan video", krama: "dolanan video", "krama-inggil": "dolanan video" },
  },
  {
    aliases: { id: ["villa"], en: ["villa"], zh: ["别墅"] },
    translation: { ngoko: "vila", krama: "vila", "krama-inggil": "vila" },
  },
  {
    aliases: { id: ["virus"], en: ["virus"], zh: ["病毒"] },
    translation: { ngoko: "virus", krama: "virus", "krama-inggil": "virus" },
  },
  {
    aliases: { id: ["vitamin"], en: ["vitamin"], zh: ["维生素"] },
    translation: { ngoko: "vitamin", krama: "vitamin", "krama-inggil": "vitamin" },
  },
  {
    aliases: { id: ["vitamin C"], en: ["vitamin C"], zh: ["维生素C"] },
    translation: { ngoko: "vitamin C", krama: "vitamin C", "krama-inggil": "vitamin C" },
  },
  {
    aliases: { id: ["volume"], en: ["volume"], zh: ["体积/音量"] },
    translation: { ngoko: "volume", krama: "volume", "krama-inggil": "volume" },
  },
  {
    aliases: { id: ["vulkanik"], en: ["volcanic"], zh: ["火山的"] },
    translation: { ngoko: "vulkanik", krama: "vulkanik", "krama-inggil": "vulkanik" },
  },
  {
    aliases: { id: ["wabah"], en: ["outbreak"], zh: ["疫情"] },
    translation: { ngoko: "pageblug", krama: "wabah", "krama-inggil": "wabah" },
  },
  {
    aliases: { id: ["Wage"], en: ["Wage, a Javanese five-day-cycle day"], zh: ["爪哇五日历的瓦盖日"] },
    translation: { ngoko: "Wage", krama: "Wage", "krama-inggil": "Wage" },
  },
  {
    aliases: { id: ["wajah"], en: ["face"], zh: ["脸"] },
    translation: { ngoko: "rai", krama: "rai", "krama-inggil": "pasuryan" },
  },
  {
    aliases: { id: ["wajan"], en: ["wok"], zh: ["炒锅"] },
    translation: { ngoko: "wajan", krama: "wajan", "krama-inggil": "wajan" },
  },
  {
    aliases: { id: ["wajib"], en: ["mandatory"], zh: ["必须"] },
    translation: { ngoko: "kudu", krama: "kedah", "krama-inggil": "kedah" },
  },
  {
    aliases: { id: ["wajik"], en: ["palm-sugar glutinous rice cake"], zh: ["棕榈糖糯米糕"] },
    translation: { ngoko: "wajik", krama: "wajik", "krama-inggil": "wajik" },
  },
  {
    aliases: { id: ["wakil"], en: ["representative"], zh: ["代表"] },
    translation: { ngoko: "wakil", krama: "wakil", "krama-inggil": "wakil" },
  },
  {
    aliases: { id: ["waktu"], en: ["time"], zh: ["时间"] },
    translation: { ngoko: "wektu", krama: "wekdal", "krama-inggil": "wekdal" },
  },
  {
    aliases: { id: ["walau"], en: ["although"], zh: ["虽然"] },
    translation: { ngoko: "senajan", krama: "sanajan", "krama-inggil": "sanajan" },
  },
  {
    aliases: { id: ["walaupun"], en: ["although"], zh: ["虽然"] },
    translation: { ngoko: "senajan", krama: "sanajan", "krama-inggil": "sanajan" },
  },
  {
    aliases: { id: ["walet"], en: ["swiftlet"], zh: ["金丝燕"] },
    translation: { ngoko: "walet", krama: "walet", "krama-inggil": "walet" },
  },
  {
    aliases: { id: ["wali"], en: ["guardian"], zh: ["监护人"] },
    translation: { ngoko: "wali", krama: "wali", "krama-inggil": "wali" },
  },
  {
    aliases: { id: ["wali kota"], en: ["mayor"], zh: ["市长"] },
    translation: { ngoko: "walikota", krama: "walikota", "krama-inggil": "walikota" },
  },
  {
    aliases: { id: ["warangka"], en: ["kris sheath"], zh: ["克里斯剑鞘"] },
    translation: { ngoko: "warangka", krama: "warangka", "krama-inggil": "warangka" },
  },
  {
    aliases: { id: ["warga"], en: ["resident"], zh: ["居民"] },
    translation: { ngoko: "warga", krama: "warga", "krama-inggil": "warga" },
  },
  {
    aliases: { id: ["warisan"], en: ["inheritance"], zh: ["遗产"] },
    translation: { ngoko: "warisan", krama: "warisan", "krama-inggil": "warisan" },
  },
  {
    aliases: { id: ["warna"], en: ["color"], zh: ["颜色"] },
    translation: { ngoko: "werna", krama: "werna", "krama-inggil": "werna" },
  },
  {
    aliases: { id: ["wartawan"], en: ["journalist"], zh: ["记者"] },
    translation: { ngoko: "wartawan", krama: "wartawan", "krama-inggil": "wartawan" },
  },
  {
    aliases: { id: ["warung"], en: ["small shop or food stall"], zh: ["小店"] },
    translation: { ngoko: "warung", krama: "warung", "krama-inggil": "warung" },
  },
  {
    aliases: { id: ["wasiat"], en: ["give last instructions"], zh: ["留下遗嘱"] },
    translation: { ngoko: "menehi wasiat", krama: "nyukani wasiat", "krama-inggil": "paring wasiat" },
  },
  {
    aliases: { id: ["wasir"], en: ["hemorrhoids"], zh: ["痔疮"] },
    translation: { ngoko: "ambeien", krama: "ambeien", "krama-inggil": "ambeien" },
  },
  {
    aliases: { id: ["wasit"], en: ["referee"], zh: ["裁判员"] },
    translation: { ngoko: "wasit", krama: "wasit", "krama-inggil": "wasit" },
  },
  {
    aliases: { id: ["waspada"], en: ["alert"], zh: ["警惕"] },
    translation: { ngoko: "waspada", krama: "waspada", "krama-inggil": "waspada" },
  },
  {
    aliases: { id: ["wastafel"], en: ["washbasin"], zh: ["洗手盆"] },
    translation: { ngoko: "wastafel", krama: "wastafel", "krama-inggil": "wastafel" },
  },
  {
    aliases: { id: ["waswas"], en: ["apprehensive"], zh: ["惴惴不安"] },
    translation: { ngoko: "was-was", krama: "was-was", "krama-inggil": "was-was" },
  },
  {
    aliases: { id: ["watak"], en: ["character"], zh: ["性格"] },
    translation: { ngoko: "watak", krama: "watak", "krama-inggil": "watak" },
  },
  {
    aliases: { id: ["wawancara"], en: ["interview"], zh: ["面试/采访"] },
    translation: { ngoko: "wawancara", krama: "wawancara", "krama-inggil": "wawancara" },
  },
  {
    aliases: { id: ["wawancarai"], en: ["interview"], zh: ["采访"] },
    translation: { ngoko: "mewawancarai", krama: "mewawancarai", "krama-inggil": "mewawancarai" },
  },
  {
    aliases: { id: ["wayang"], en: ["wayang puppet"], zh: ["哇扬木偶"] },
    translation: { ngoko: "wayang", krama: "ringgit", "krama-inggil": "ringgit" },
  },
  {
    aliases: { id: ["wedang"], en: ["hot drink"], zh: ["热饮"] },
    translation: { ngoko: "wedang", krama: "wedang", "krama-inggil": "wedang" },
  },
  {
    aliases: { id: ["wedhus"], en: ["goat"], zh: ["山羊"] },
    translation: { ngoko: "wedhus", krama: "wedhus", "krama-inggil": "wedhus" },
  },
  {
    aliases: { id: ["wektu"], en: ["time"], zh: ["时间"] },
    translation: { ngoko: "wektu", krama: "wekdal", "krama-inggil": "wekdal" },
  },
  {
    aliases: { id: ["wewenang"], en: ["authority"], zh: ["权限"] },
    translation: { ngoko: "wewenang", krama: "wewenang", "krama-inggil": "wewenang" },
  },
  {
    aliases: { id: ["wibawa"], en: ["authority/prestige"], zh: ["威望"] },
    translation: { ngoko: "wibawa", krama: "wibawa", "krama-inggil": "wibawa" },
  },
  {
    aliases: { id: ["Wi-Fi"], en: ["Wi-Fi"], zh: ["无线网络"] },
    translation: { ngoko: "Wi-Fi", krama: "Wi-Fi", "krama-inggil": "Wi-Fi" },
  },
  {
    aliases: { id: ["wihara"], en: ["Buddhist temple"], zh: ["佛寺"] },
    translation: { ngoko: "wihara", krama: "wihara", "krama-inggil": "wihara" },
  },
  {
    aliases: { id: ["wilayah"], en: ["region"], zh: ["地区"] },
    translation: { ngoko: "wilayah", krama: "wilayah", "krama-inggil": "wilayah" },
  },
  {
    aliases: { id: ["windu"], en: ["eight-year period"], zh: ["八年周期"] },
    translation: { ngoko: "windu", krama: "windu", "krama-inggil": "windu" },
  },
  {
    aliases: { id: ["wisata"], en: ["tourism"], zh: ["旅游"] },
    translation: { ngoko: "wisata", krama: "wisata", "krama-inggil": "wisata" },
  },
  {
    aliases: { id: ["wisatawan"], en: ["tourist"], zh: ["游客"] },
    translation: { ngoko: "wisatawan", krama: "wisatawan", "krama-inggil": "wisatawan" },
  },
  {
    aliases: { id: ["wisuda"], en: ["graduation"], zh: ["毕业典礼"] },
    translation: { ngoko: "wisuda", krama: "wisuda", "krama-inggil": "wisuda" },
  },
  {
    aliases: { id: ["wisuh"], en: ["ablution"], zh: ["小净"] },
    translation: { ngoko: "wudhu", krama: "wudhu", "krama-inggil": "wudhu" },
  },
  {
    aliases: { id: ["wit"], en: ["tree"], zh: ["树"] },
    translation: { ngoko: "wit", krama: "wit", "krama-inggil": "wit" },
  },
  {
    aliases: { id: ["wol"], en: ["wool"], zh: ["羊毛"] },
    translation: { ngoko: "wol", krama: "wol", "krama-inggil": "wol" },
  },
  {
    aliases: { id: ["wong"], en: ["person"], zh: ["人"] },
    translation: { ngoko: "wong", krama: "tiyang", "krama-inggil": "tiyang" },
  },
  {
    aliases: { id: ["wong lanang"], en: ["man"], zh: ["男人"] },
    translation: { ngoko: "wong lanang", krama: "tiyang kakung", "krama-inggil": "tiyang kakung" },
  },
  {
    aliases: { id: ["wong wadon"], en: ["woman"], zh: ["女人"] },
    translation: { ngoko: "wong wadon", krama: "tiyang estri", "krama-inggil": "tiyang estri" },
  },
  {
    aliases: { id: ["wonten"], en: ["there is"], zh: ["有"] },
    translation: { ngoko: "ana", krama: "wonten", "krama-inggil": "wonten" },
  },
  {
    aliases: { id: ["wortel"], en: ["carrot"], zh: ["胡萝卜"] },
    translation: { ngoko: "wortel", krama: "wortel", "krama-inggil": "wortel" },
  },
  {
    aliases: { id: ["wuda"], en: ["naked"], zh: ["裸体"] },
    translation: { ngoko: "wuda", krama: "wuda", "krama-inggil": "wuda" },
  },
  {
    aliases: { id: ["wudu"], en: ["ritual ablution"], zh: ["小净"] },
    translation: { ngoko: "wudu", krama: "wudu", "krama-inggil": "wudu" },
  },
  {
    aliases: { id: ["wulan"], en: ["moon/month"], zh: ["月亮/月"] },
    translation: { ngoko: "rembulan", krama: "wulan", "krama-inggil": "wulan" },
  },
  {
    aliases: { id: ["wulan purnama"], en: ["full moon"], zh: ["满月"] },
    translation: { ngoko: "rembulan purnama", krama: "wulan purnama", "krama-inggil": "wulan purnama" },
  },
  {
    aliases: { id: ["wutah"], en: ["spill"], zh: ["洒出"] },
    translation: { ngoko: "tumpah", krama: "wutah", "krama-inggil": "wutah" },
  },
  {
    aliases: { id: ["xenon"], en: ["xenon"], zh: ["氙"] },
    translation: { ngoko: "xenon", krama: "xenon", "krama-inggil": "xenon" },
  },
  {
    aliases: { id: ["xilem"], en: ["xylem"], zh: ["木质部"] },
    translation: { ngoko: "xilem", krama: "xilem", "krama-inggil": "xilem" },
  },
  {
    aliases: { id: ["xilena"], en: ["xylene"], zh: ["二甲苯"] },
    translation: { ngoko: "xilena", krama: "xilena", "krama-inggil": "xilena" },
  },
  {
    aliases: { id: ["xilofagus"], en: ["xylophagous"], zh: ["食木的"] },
    translation: { ngoko: "xilofagus", krama: "xilofagus", "krama-inggil": "xilofagus" },
  },
  {
    aliases: { id: ["xilofon"], en: ["xylophone"], zh: ["木琴"] },
    translation: { ngoko: "xilofon", krama: "xilofon", "krama-inggil": "xilofon" },
  },
  {
    aliases: { id: ["xilografi"], en: ["xylography"], zh: ["木版雕刻"] },
    translation: { ngoko: "xilografi", krama: "xilografi", "krama-inggil": "xilografi" },
  },
  {
    aliases: { id: ["ya"], en: ["yes"], zh: ["是的"] },
    translation: { ngoko: "iya", krama: "inggih", "krama-inggil": "inggih" },
  },
  {
    aliases: { id: ["yaitu"], en: ["namely","that is"], zh: ["即"] },
    translation: { ngoko: "yaiku", krama: "inggih punika", "krama-inggil": "inggih punika" },
  },
  {
    aliases: { id: ["yakin"], en: ["certain"], zh: ["确信"] },
    translation: { ngoko: "yakin", krama: "yakin", "krama-inggil": "yakin" },
  },
  {
    aliases: { id: ["yakinkan"], en: ["convince"], zh: ["使信服"] },
    translation: { ngoko: "ngyakinake", krama: "ngyakinaken", "krama-inggil": "ngyakinaken" },
  },
  {
    aliases: { id: ["yakni"], en: ["namely"], zh: ["即"] },
    translation: { ngoko: "yaiku", krama: "inggih punika", "krama-inggil": "inggih punika" },
  },
  {
    aliases: { id: ["yang"], en: ["who","which","that"], zh: ["的"] },
    translation: { ngoko: "sing", krama: "ingkang", "krama-inggil": "ingkang" },
  },
  {
    aliases: { id: ["yang mana"], en: ["which one"], zh: ["哪一个"] },
    translation: { ngoko: "sing endi", krama: "ingkang pundi", "krama-inggil": "ingkang pundi" },
  },
  {
    aliases: { id: ["yatim"], en: ["orphan"], zh: ["孤儿"] },
    translation: { ngoko: "yatim", krama: "yatim", "krama-inggil": "yatim" },
  },
  {
    aliases: { id: ["yatim piatu"], en: ["orphan"], zh: ["孤儿"] },
    translation: { ngoko: "yatim piatu", krama: "yatim piatu", "krama-inggil": "yatim piatu" },
  },
  {
    aliases: { id: ["yayasan"], en: ["foundation"], zh: ["基金会"] },
    translation: { ngoko: "yayasan", krama: "yayasan", "krama-inggil": "yayasan" },
  },
  {
    aliases: { id: ["yodium"], en: ["iodine"], zh: ["碘"] },
    translation: { ngoko: "yodium", krama: "yodium", "krama-inggil": "yodium" },
  },
  {
    aliases: { id: ["yodium tincture"], en: ["iodine tincture"], zh: ["碘酊"] },
    translation: { ngoko: "tincture yodium", krama: "tincture yodium", "krama-inggil": "tincture yodium" },
  },
  {
    aliases: { id: ["yoga"], en: ["yoga"], zh: ["瑜伽"] },
    translation: { ngoko: "yoga", krama: "yoga", "krama-inggil": "yoga" },
  },
  {
    aliases: { id: ["yogurt"], en: ["yogurt"], zh: ["酸奶"] },
    translation: { ngoko: "yogurt", krama: "yogurt", "krama-inggil": "yogurt" },
  },
  {
    aliases: { id: ["yudikatif"], en: ["judiciary"], zh: ["司法机关"] },
    translation: { ngoko: "yudikatif", krama: "yudikatif", "krama-inggil": "yudikatif" },
  },
  {
    aliases: { id: ["yudisial"], en: ["judicial"], zh: ["司法的"] },
    translation: { ngoko: "yudisial", krama: "yudisial", "krama-inggil": "yudisial" },
  },
  {
    aliases: { id: ["yudisialisasi"], en: ["judicialization"], zh: ["司法化"] },
    translation: { ngoko: "yudisialisasi", krama: "yudisialisasi", "krama-inggil": "yudisialisasi" },
  },
  {
    aliases: { id: ["yudisium"], en: ["academic graduation assessment"], zh: ["毕业审核"] },
    translation: { ngoko: "yudisium", krama: "yudisium", "krama-inggil": "yudisium" },
  },
  {
    aliases: { id: ["yuk"], en: ["let's"], zh: ["走吧"] },
    translation: { ngoko: "ayo", krama: "mangga", "krama-inggil": "mangga" },
  },
  {
    aliases: { id: ["yurisdiksi"], en: ["jurisdiction"], zh: ["司法管辖权"] },
    translation: { ngoko: "yurisdiksi", krama: "yurisdiksi", "krama-inggil": "yurisdiksi" },
  },
  {
    aliases: { id: ["yurisprudensi"], en: ["jurisprudence"], zh: ["判例法"] },
    translation: { ngoko: "yurisprudensi", krama: "yurisprudensi", "krama-inggil": "yurisprudensi" },
  },
  {
    aliases: { id: ["zaitun"], en: ["olive"], zh: ["橄榄"] },
    translation: { ngoko: "zaitun", krama: "zaitun", "krama-inggil": "zaitun" },
  },
  {
    aliases: { id: ["zakat"], en: ["obligatory alms"], zh: ["天课"] },
    translation: { ngoko: "zakat", krama: "zakat", "krama-inggil": "zakat" },
  },
  {
    aliases: { id: ["zakat fitrah"], en: ["zakat al-fitr"], zh: ["开斋捐"] },
    translation: { ngoko: "zakat fitrah", krama: "zakat fitrah", "krama-inggil": "zakat fitrah" },
  },
  {
    aliases: { id: ["zalim"], en: ["cruel"], zh: ["残忍"] },
    translation: { ngoko: "kejem", krama: "kejem", "krama-inggil": "kejem" },
  },
  {
    aliases: { id: ["zaman"], en: ["era"], zh: ["时代"] },
    translation: { ngoko: "jaman", krama: "jaman", "krama-inggil": "jaman" },
  },
  {
    aliases: { id: ["zaman dahulu"], en: ["olden days"], zh: ["古时候"] },
    translation: { ngoko: "jaman biyen", krama: "jaman rumiyin", "krama-inggil": "jaman rumiyin" },
  },
  {
    aliases: { id: ["zamrud"], en: ["emerald"], zh: ["祖母绿"] },
    translation: { ngoko: "zamrud", krama: "zamrud", "krama-inggil": "zamrud" },
  },
  {
    aliases: { id: ["zat"], en: ["substance"], zh: ["物质"] },
    translation: { ngoko: "zat", krama: "zat", "krama-inggil": "zat" },
  },
  {
    aliases: { id: ["zat aditif"], en: ["additive"], zh: ["添加剂"] },
    translation: { ngoko: "zat aditif", krama: "zat aditif", "krama-inggil": "zat aditif" },
  },
  {
    aliases: { id: ["zat besi"], en: ["iron"], zh: ["铁"] },
    translation: { ngoko: "wesi", krama: "wesi", "krama-inggil": "wesi" },
  },
  {
    aliases: { id: ["zat cair"], en: ["liquid"], zh: ["液体"] },
    translation: { ngoko: "zat cair", krama: "zat cair", "krama-inggil": "zat cair" },
  },
  {
    aliases: { id: ["zat kimia"], en: ["chemical"], zh: ["化学物质"] },
    translation: { ngoko: "zat kimia", krama: "zat kimia", "krama-inggil": "zat kimia" },
  },
  {
    aliases: { id: ["zat padat"], en: ["solid"], zh: ["固体"] },
    translation: { ngoko: "zat padat", krama: "zat padat", "krama-inggil": "zat padat" },
  },
  {
    aliases: { id: ["zebra"], en: ["zebra"], zh: ["斑马"] },
    translation: { ngoko: "zebra", krama: "zebra", "krama-inggil": "zebra" },
  },
  {
    aliases: { id: ["zebra cross"], en: ["pedestrian crossing"], zh: ["人行横道"] },
    translation: { ngoko: "papan panyebrangan", krama: "papan panyebrangan", "krama-inggil": "papan panyebrangan" },
  },
  {
    aliases: { id: ["ziarah"], en: ["visit to a grave or holy site"], zh: ["谒墓或朝圣"] },
    translation: { ngoko: "ziarah", krama: "ziarah", "krama-inggil": "ziarah" },
  },
  {
    aliases: { id: ["zikir"], en: ["remembrance of God"], zh: ["记念真主"] },
    translation: { ngoko: "zikir", krama: "zikir", "krama-inggil": "zikir" },
  },
  {
    aliases: { id: ["zodiak"], en: ["zodiac"], zh: ["黄道十二宫"] },
    translation: { ngoko: "zodiak", krama: "zodiak", "krama-inggil": "zodiak" },
  },
  {
    aliases: { id: ["zona"], en: ["zone"], zh: ["区域"] },
    translation: { ngoko: "zona", krama: "zona", "krama-inggil": "zona" },
  },
  {
    aliases: { id: ["zona waktu"], en: ["time zone"], zh: ["时区"] },
    translation: { ngoko: "zona wektu", krama: "zona wekdal", "krama-inggil": "zona wekdal" },
  },
  {
    aliases: { id: ["zoologi"], en: ["zoology"], zh: ["动物学"] },
    translation: { ngoko: "zoologi", krama: "zoologi", "krama-inggil": "zoologi" },
  },
  {
    aliases: { id: ["zoologis"], en: ["zoologist"], zh: ["动物学家"] },
    translation: { ngoko: "ahli zoologi", krama: "ahli zoologi", "krama-inggil": "ahli zoologi" },
  },
  {
    aliases: { id: ["zoom"], en: ["zoom"], zh: ["缩放/视频会议"] },
    translation: { ngoko: "zoom", krama: "zoom", "krama-inggil": "zoom" },
  },
  {
    aliases: { id: ["zoom digital"], en: ["digital zoom"], zh: ["数码变焦"] },
    translation: { ngoko: "zoom digital", krama: "zoom digital", "krama-inggil": "zoom digital" },
  },

  {
    aliases: { id: ["ke"], en: ["to"], zh: ["到"],},
    translation: { ngoko: "menyang", krama: "dhateng", "krama-inggil": "dhateng",},
  },
  
  //angka
  {
    aliases: { id: ["nol", "0"], en: ["zero", "0"], zh: ["零"] },
    translation: { ngoko: "nol", krama: "nol", "krama-inggil": "nol" },
  },
  {
    aliases: { id: ["satu", "1"], en: ["one", "1"], zh: ["一"] },
    translation: { ngoko: "siji", krama: "setunggal", "krama-inggil": "setunggal" },
  },
  {
    aliases: { id: ["dua", "2"], en: ["two", "2"], zh: ["二"] },
    translation: { ngoko: "loro", krama: "kalih", "krama-inggil": "kalih" },
  },
  {
    aliases: { id: ["tiga", "3"], en: ["three", "3"], zh: ["三"] },
    translation: { ngoko: "telu", krama: "tiga", "krama-inggil": "tiga" },
  },
  {
    aliases: { id: ["empat", "4"], en: ["four", "4"], zh: ["四"] },
    translation: { ngoko: "papat", krama: "sekawan", "krama-inggil": "sekawan" },
  },
  {
    aliases: { id: ["lima", "5"], en: ["five", "5"], zh: ["五"] },
    translation: { ngoko: "lima", krama: "gangsal", "krama-inggil": "gangsal" },
  },
  {
    aliases: { id: ["enam", "6"], en: ["six", "6"], zh: ["六"] },
    translation: { ngoko: "enem", krama: "enem", "krama-inggil": "enem" },
  },
  {
    aliases: { id: ["tujuh", "7"], en: ["seven", "7"], zh: ["七"] },
    translation: { ngoko: "pitu", krama: "pitu", "krama-inggil": "pitu" },
  },
  {
    aliases: { id: ["delapan", "8"], en: ["eight", "8"], zh: ["八"] },
    translation: { ngoko: "wolu", krama: "wolu", "krama-inggil": "wolu" },
  },
  {
    aliases: { id: ["sembilan", "9"], en: ["nine", "9"], zh: ["九"] },
    translation: { ngoko: "sanga", krama: "sanga", "krama-inggil": "sanga" },
  },
  {
    aliases: { id: ["sepuluh", "10"], en: ["ten", "10"], zh: ["十"] },
    translation: { ngoko: "sepuluh", krama: "sedasa", "krama-inggil": "sedasa" },
  },
  {
    aliases: { id: ["sebelas", "11"], en: ["eleven", "11"], zh: ["十一"] },
    translation: { ngoko: "sewelas", krama: "sewelas", "krama-inggil": "sewelas" },
  },
  {
    aliases: { id: ["dua belas", "12"], en: ["twelve", "12"], zh: ["十二"] },
    translation: { ngoko: "rolas", krama: "kalih welas", "krama-inggil": "kalih welas" },
  },
  {
    aliases: { id: ["tiga belas", "13"], en: ["thirteen", "13"], zh: ["十三"] },
    translation: { ngoko: "telulas", krama: "tiga welas", "krama-inggil": "tiga welas" },
  },
  {
    aliases: { id: ["empat belas", "14"], en: ["fourteen", "14"], zh: ["十四"] },
    translation: { ngoko: "patbelas", krama: "sekawan welas", "krama-inggil": "sekawan welas" },
  },
  {
    aliases: { id: ["lima belas", "15"], en: ["fifteen", "15"], zh: ["十五"] },
    translation: { ngoko: "limolas", krama: "gangsal welas", "krama-inggil": "gangsal welas" },
  },
  {
    aliases: { id: ["enam belas", "16"], en: ["sixteen", "16"], zh: ["十六"] },
    translation: { ngoko: "nembelas", krama: "enem welas", "krama-inggil": "enem welas" },
  },
  {
    aliases: { id: ["tujuh belas", "17"], en: ["seventeen", "17"], zh: ["十七"] },
    translation: { ngoko: "pitulas", krama: "pitulas", "krama-inggil": "pitulas" },
  },
  {
    aliases: { id: ["delapan belas", "18"], en: ["eighteen", "18"], zh: ["十八"] },
    translation: { ngoko: "wolulas", krama: "wolulas", "krama-inggil": "wolulas" },
  },
  {
    aliases: { id: ["sembilan belas", "19"], en: ["nineteen", "19"], zh: ["十九"] },
    translation: { ngoko: "sangalas", krama: "sangalas", "krama-inggil": "sangalas" },
  },
  {
    aliases: { id: ["dua puluh", "20"], en: ["twenty", "20"], zh: ["二十"] },
    translation: { ngoko: "rong puluh", krama: "kalih dasa", "krama-inggil": "kalih dasa" },
  },
  {
    aliases: { id: ["dua puluh satu", "21"], en: ["twenty-one", "21"], zh: ["二十一"] },
    translation: { ngoko: "selikur", krama: "kalih dasa setunggal", "krama-inggil": "kalih dasa setunggal" },
  },
  {
    aliases: { id: ["dua puluh dua", "22"], en: ["twenty-two", "22"], zh: ["二十二"] },
    translation: { ngoko: "rolikur", krama: "kalih dasa kalih", "krama-inggil": "kalih dasa kalih" },
  },
  {
    aliases: { id: ["dua puluh tiga", "23"], en: ["twenty-three", "23"], zh: ["二十三"] },
    translation: { ngoko: "telulikur", krama: "kalih dasa tiga", "krama-inggil": "kalih dasa tiga" },
  },
  {
    aliases: { id: ["dua puluh empat", "24"], en: ["twenty-four", "24"], zh: ["二十四"] },
    translation: { ngoko: "patlikur", krama: "kalih dasa sekawan", "krama-inggil": "kalih dasa sekawan" },
  },
  {
    aliases: { id: ["dua puluh lima", "25"], en: ["twenty-five", "25"], zh: ["二十五"] },
    translation: { ngoko: "selawe", krama: "selangkung", "krama-inggil": "selangkung" },
  },
  {
    aliases: { id: ["dua puluh enam", "26"], en: ["twenty-six", "26"], zh: ["二十六"] },
    translation: { ngoko: "nemlikur", krama: "kalih dasa enem", "krama-inggil": "kalih dasa enem" },
  },
  {
    aliases: { id: ["dua puluh tujuh", "27"], en: ["twenty-seven", "27"], zh: ["二十七"] },
    translation: { ngoko: "pitulikur", krama: "kalih dasa pitu", "krama-inggil": "kalih dasa pitu" },
  },
  {
    aliases: { id: ["dua puluh delapan", "28"], en: ["twenty-eight", "28"], zh: ["二十八"] },
    translation: { ngoko: "wolulikur", krama: "kalih dasa wolu", "krama-inggil": "kalih dasa wolu" },
  },
  {
    aliases: { id: ["dua puluh sembilan", "29"], en: ["twenty-nine", "29"], zh: ["二十九"] },
    translation: { ngoko: "sangalikur", krama: "kalih dasa sanga", "krama-inggil": "kalih dasa sanga" },
  },
  {
    aliases: { id: ["tiga puluh", "30"], en: ["thirty", "30"], zh: ["三十"] },
    translation: { ngoko: "telung puluh", krama: "tigang dasa", "krama-inggil": "tigang dasa" },
  },
  {
    aliases: { id: ["tiga puluh satu", "31"], en: ["thirty-one", "31"], zh: ["三十一"] },
    translation: { ngoko: "telung puluh siji", krama: "tigang dasa setunggal", "krama-inggil": "tigang dasa setunggal" },
  },
  {
    aliases: { id: ["tiga puluh dua", "32"], en: ["thirty-two", "32"], zh: ["三十二"] },
    translation: { ngoko: "telung puluh loro", krama: "tigang dasa kalih", "krama-inggil": "tigang dasa kalih" },
  },
  {
    aliases: { id: ["tiga puluh tiga", "33"], en: ["thirty-three", "33"], zh: ["三十三"] },
    translation: { ngoko: "telung puluh telu", krama: "tigang dasa tiga", "krama-inggil": "tigang dasa tiga" },
  },
  {
    aliases: { id: ["tiga puluh empat", "34"], en: ["thirty-four", "34"], zh: ["三十四"] },
    translation: { ngoko: "telung puluh papat", krama: "tigang dasa sekawan", "krama-inggil": "tigang dasa sekawan" },
  },
  {
    aliases: { id: ["tiga puluh lima", "35"], en: ["thirty-five", "35"], zh: ["三十五"] },
    translation: { ngoko: "telung puluh lima", krama: "tigang dasa gangsal", "krama-inggil": "tigang dasa gangsal" },
  },
  {
    aliases: { id: ["tiga puluh enam", "36"], en: ["thirty-six", "36"], zh: ["三十六"] },
    translation: { ngoko: "telung puluh enem", krama: "tigang dasa enem", "krama-inggil": "tigang dasa enem" },
  },
  {
    aliases: { id: ["tiga puluh tujuh", "37"], en: ["thirty-seven", "37"], zh: ["三十七"] },
    translation: { ngoko: "telung puluh pitu", krama: "tigang dasa pitu", "krama-inggil": "tigang dasa pitu" },
  },
  {
    aliases: { id: ["tiga puluh delapan", "38"], en: ["thirty-eight", "38"], zh: ["三十八"] },
    translation: { ngoko: "telung puluh wolu", krama: "tigang dasa wolu", "krama-inggil": "tigang dasa wolu" },
  },
  {
    aliases: { id: ["tiga puluh sembilan", "39"], en: ["thirty-nine", "39"], zh: ["三十九"] },
    translation: { ngoko: "telung puluh sanga", krama: "tigang dasa sanga", "krama-inggil": "tigang dasa sanga" },
  },
  {
    aliases: { id: ["empat puluh", "40"], en: ["forty", "40"], zh: ["四十"] },
    translation: { ngoko: "patang puluh", krama: "sekawan dasa", "krama-inggil": "sekawan dasa" },
  },
  {
    aliases: { id: ["empat puluh satu", "41"], en: ["forty-one", "41"], zh: ["四十一"] },
    translation: { ngoko: "patang puluh siji", krama: "sekawan dasa setunggal", "krama-inggil": "sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["empat puluh dua", "42"], en: ["forty-two", "42"], zh: ["四十二"] },
    translation: { ngoko: "patang puluh loro", krama: "sekawan dasa kalih", "krama-inggil": "sekawan dasa kalih" },
  },
  {
    aliases: { id: ["empat puluh tiga", "43"], en: ["forty-three", "43"], zh: ["四十三"] },
    translation: { ngoko: "patang puluh telu", krama: "sekawan dasa tiga", "krama-inggil": "sekawan dasa tiga" },
  },
  {
    aliases: { id: ["empat puluh empat", "44"], en: ["forty-four", "44"], zh: ["四十四"] },
    translation: { ngoko: "patang puluh papat", krama: "sekawan dasa sekawan", "krama-inggil": "sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["empat puluh lima", "45"], en: ["forty-five", "45"], zh: ["四十五"] },
    translation: { ngoko: "patang puluh lima", krama: "sekawan dasa gangsal", "krama-inggil": "sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["empat puluh enam", "46"], en: ["forty-six", "46"], zh: ["四十六"] },
    translation: { ngoko: "patang puluh enem", krama: "sekawan dasa enem", "krama-inggil": "sekawan dasa enem" },
  },
  {
    aliases: { id: ["empat puluh tujuh", "47"], en: ["forty-seven", "47"], zh: ["四十七"] },
    translation: { ngoko: "patang puluh pitu", krama: "sekawan dasa pitu", "krama-inggil": "sekawan dasa pitu" },
  },
  {
    aliases: { id: ["empat puluh delapan", "48"], en: ["forty-eight", "48"], zh: ["四十八"] },
    translation: { ngoko: "patang puluh wolu", krama: "sekawan dasa wolu", "krama-inggil": "sekawan dasa wolu" },
  },
  {
    aliases: { id: ["empat puluh sembilan", "49"], en: ["forty-nine", "49"], zh: ["四十九"] },
    translation: { ngoko: "patang puluh sanga", krama: "sekawan dasa sanga", "krama-inggil": "sekawan dasa sanga" },
  },
  {
    aliases: { id: ["lima puluh", "50"], en: ["fifty", "50"], zh: ["五十"] },
    translation: { ngoko: "seket", krama: "seket", "krama-inggil": "seket" },
  },
  {
    aliases: { id: ["lima puluh satu", "51"], en: ["fifty-one", "51"], zh: ["五十一"] },
    translation: { ngoko: "seket siji", krama: "seket setunggal", "krama-inggil": "seket setunggal" },
  },
  {
    aliases: { id: ["lima puluh dua", "52"], en: ["fifty-two", "52"], zh: ["五十二"] },
    translation: { ngoko: "seket loro", krama: "seket kalih", "krama-inggil": "seket kalih" },
  },
  {
    aliases: { id: ["lima puluh tiga", "53"], en: ["fifty-three", "53"], zh: ["五十三"] },
    translation: { ngoko: "seket telu", krama: "seket tiga", "krama-inggil": "seket tiga" },
  },
  {
    aliases: { id: ["lima puluh empat", "54"], en: ["fifty-four", "54"], zh: ["五十四"] },
    translation: { ngoko: "seket papat", krama: "seket sekawan", "krama-inggil": "seket sekawan" },
  },
  {
    aliases: { id: ["lima puluh lima", "55"], en: ["fifty-five", "55"], zh: ["五十五"] },
    translation: { ngoko: "seket lima", krama: "seket gangsal", "krama-inggil": "seket gangsal" },
  },
  {
    aliases: { id: ["lima puluh enam", "56"], en: ["fifty-six", "56"], zh: ["五十六"] },
    translation: { ngoko: "seket enem", krama: "seket enem", "krama-inggil": "seket enem" },
  },
  {
    aliases: { id: ["lima puluh tujuh", "57"], en: ["fifty-seven", "57"], zh: ["五十七"] },
    translation: { ngoko: "seket pitu", krama: "seket pitu", "krama-inggil": "seket pitu" },
  },
  {
    aliases: { id: ["lima puluh delapan", "58"], en: ["fifty-eight", "58"], zh: ["五十八"] },
    translation: { ngoko: "seket wolu", krama: "seket wolu", "krama-inggil": "seket wolu" },
  },
  {
    aliases: { id: ["lima puluh sembilan", "59"], en: ["fifty-nine", "59"], zh: ["五十九"] },
    translation: { ngoko: "seket sanga", krama: "seket sanga", "krama-inggil": "seket sanga" },
  },
  {
    aliases: { id: ["enam puluh", "60"], en: ["sixty", "60"], zh: ["六十"] },
    translation: { ngoko: "sewidak", krama: "sewidak", "krama-inggil": "sewidak" },
  },
  {
    aliases: { id: ["enam puluh satu", "61"], en: ["sixty-one", "61"], zh: ["六十一"] },
    translation: { ngoko: "sewidak siji", krama: "sewidak setunggal", "krama-inggil": "sewidak setunggal" },
  },
  {
    aliases: { id: ["enam puluh dua", "62"], en: ["sixty-two", "62"], zh: ["六十二"] },
    translation: { ngoko: "sewidak loro", krama: "sewidak kalih", "krama-inggil": "sewidak kalih" },
  },
  {
    aliases: { id: ["enam puluh tiga", "63"], en: ["sixty-three", "63"], zh: ["六十三"] },
    translation: { ngoko: "sewidak telu", krama: "sewidak tiga", "krama-inggil": "sewidak tiga" },
  },
  {
    aliases: { id: ["enam puluh empat", "64"], en: ["sixty-four", "64"], zh: ["六十四"] },
    translation: { ngoko: "sewidak papat", krama: "sewidak sekawan", "krama-inggil": "sewidak sekawan" },
  },
  {
    aliases: { id: ["enam puluh lima", "65"], en: ["sixty-five", "65"], zh: ["六十五"] },
    translation: { ngoko: "sewidak lima", krama: "sewidak gangsal", "krama-inggil": "sewidak gangsal" },
  },
  {
    aliases: { id: ["enam puluh enam", "66"], en: ["sixty-six", "66"], zh: ["六十六"] },
    translation: { ngoko: "sewidak enem", krama: "sewidak enem", "krama-inggil": "sewidak enem" },
  },
  {
    aliases: { id: ["enam puluh tujuh", "67"], en: ["sixty-seven", "67"], zh: ["六十七"] },
    translation: { ngoko: "sewidak pitu", krama: "sewidak pitu", "krama-inggil": "sewidak pitu" },
  },
  {
    aliases: { id: ["enam puluh delapan", "68"], en: ["sixty-eight", "68"], zh: ["六十八"] },
    translation: { ngoko: "sewidak wolu", krama: "sewidak wolu", "krama-inggil": "sewidak wolu" },
  },
  {
    aliases: { id: ["enam puluh sembilan", "69"], en: ["sixty-nine", "69"], zh: ["六十九"] },
    translation: { ngoko: "sewidak sanga", krama: "sewidak sanga", "krama-inggil": "sewidak sanga" },
  },
  {
    aliases: { id: ["tujuh puluh", "70"], en: ["seventy", "70"], zh: ["七十"] },
    translation: { ngoko: "pitung puluh", krama: "pitung dasa", "krama-inggil": "pitung dasa" },
  },
  {
    aliases: { id: ["tujuh puluh satu", "71"], en: ["seventy-one", "71"], zh: ["七十一"] },
    translation: { ngoko: "pitung puluh siji", krama: "pitung dasa setunggal", "krama-inggil": "pitung dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh puluh dua", "72"], en: ["seventy-two", "72"], zh: ["七十二"] },
    translation: { ngoko: "pitung puluh loro", krama: "pitung dasa kalih", "krama-inggil": "pitung dasa kalih" },
  },
  {
    aliases: { id: ["tujuh puluh tiga", "73"], en: ["seventy-three", "73"], zh: ["七十三"] },
    translation: { ngoko: "pitung puluh telu", krama: "pitung dasa tiga", "krama-inggil": "pitung dasa tiga" },
  },
  {
    aliases: { id: ["tujuh puluh empat", "74"], en: ["seventy-four", "74"], zh: ["七十四"] },
    translation: { ngoko: "pitung puluh papat", krama: "pitung dasa sekawan", "krama-inggil": "pitung dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh puluh lima", "75"], en: ["seventy-five", "75"], zh: ["七十五"] },
    translation: { ngoko: "pitung puluh lima", krama: "pitung dasa gangsal", "krama-inggil": "pitung dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh puluh enam", "76"], en: ["seventy-six", "76"], zh: ["七十六"] },
    translation: { ngoko: "pitung puluh enem", krama: "pitung dasa enem", "krama-inggil": "pitung dasa enem" },
  },
  {
    aliases: { id: ["tujuh puluh tujuh", "77"], en: ["seventy-seven", "77"], zh: ["七十七"] },
    translation: { ngoko: "pitung puluh pitu", krama: "pitung dasa pitu", "krama-inggil": "pitung dasa pitu" },
  },
  {
    aliases: { id: ["tujuh puluh delapan", "78"], en: ["seventy-eight", "78"], zh: ["七十八"] },
    translation: { ngoko: "pitung puluh wolu", krama: "pitung dasa wolu", "krama-inggil": "pitung dasa wolu" },
  },
  {
    aliases: { id: ["tujuh puluh sembilan", "79"], en: ["seventy-nine", "79"], zh: ["七十九"] },
    translation: { ngoko: "pitung puluh sanga", krama: "pitung dasa sanga", "krama-inggil": "pitung dasa sanga" },
  },
  {
    aliases: { id: ["delapan puluh", "80"], en: ["eighty", "80"], zh: ["八十"] },
    translation: { ngoko: "wolung puluh", krama: "wolung dasa", "krama-inggil": "wolung dasa" },
  },
  {
    aliases: { id: ["delapan puluh satu", "81"], en: ["eighty-one", "81"], zh: ["八十一"] },
    translation: { ngoko: "wolung puluh siji", krama: "wolung dasa setunggal", "krama-inggil": "wolung dasa setunggal" },
  },
  {
    aliases: { id: ["delapan puluh dua", "82"], en: ["eighty-two", "82"], zh: ["八十二"] },
    translation: { ngoko: "wolung puluh loro", krama: "wolung dasa kalih", "krama-inggil": "wolung dasa kalih" },
  },
  {
    aliases: { id: ["delapan puluh tiga", "83"], en: ["eighty-three", "83"], zh: ["八十三"] },
    translation: { ngoko: "wolung puluh telu", krama: "wolung dasa tiga", "krama-inggil": "wolung dasa tiga" },
  },
  {
    aliases: { id: ["delapan puluh empat", "84"], en: ["eighty-four", "84"], zh: ["八十四"] },
    translation: { ngoko: "wolung puluh papat", krama: "wolung dasa sekawan", "krama-inggil": "wolung dasa sekawan" },
  },
  {
    aliases: { id: ["delapan puluh lima", "85"], en: ["eighty-five", "85"], zh: ["八十五"] },
    translation: { ngoko: "wolung puluh lima", krama: "wolung dasa gangsal", "krama-inggil": "wolung dasa gangsal" },
  },
  {
    aliases: { id: ["delapan puluh enam", "86"], en: ["eighty-six", "86"], zh: ["八十六"] },
    translation: { ngoko: "wolung puluh enem", krama: "wolung dasa enem", "krama-inggil": "wolung dasa enem" },
  },
  {
    aliases: { id: ["delapan puluh tujuh", "87"], en: ["eighty-seven", "87"], zh: ["八十七"] },
    translation: { ngoko: "wolung puluh pitu", krama: "wolung dasa pitu", "krama-inggil": "wolung dasa pitu" },
  },
  {
    aliases: { id: ["delapan puluh delapan", "88"], en: ["eighty-eight", "88"], zh: ["八十八"] },
    translation: { ngoko: "wolung puluh wolu", krama: "wolung dasa wolu", "krama-inggil": "wolung dasa wolu" },
  },
  {
    aliases: { id: ["delapan puluh sembilan", "89"], en: ["eighty-nine", "89"], zh: ["八十九"] },
    translation: { ngoko: "wolung puluh sanga", krama: "wolung dasa sanga", "krama-inggil": "wolung dasa sanga" },
  },
  {
    aliases: { id: ["sembilan puluh", "90"], en: ["ninety", "90"], zh: ["九十"] },
    translation: { ngoko: "sangang puluh", krama: "sangang dasa", "krama-inggil": "sangang dasa" },
  },
  {
    aliases: { id: ["sembilan puluh satu", "91"], en: ["ninety-one", "91"], zh: ["九十一"] },
    translation: { ngoko: "sangang puluh siji", krama: "sangang dasa setunggal", "krama-inggil": "sangang dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan puluh dua", "92"], en: ["ninety-two", "92"], zh: ["九十二"] },
    translation: { ngoko: "sangang puluh loro", krama: "sangang dasa kalih", "krama-inggil": "sangang dasa kalih" },
  },
  {
    aliases: { id: ["sembilan puluh tiga", "93"], en: ["ninety-three", "93"], zh: ["九十三"] },
    translation: { ngoko: "sangang puluh telu", krama: "sangang dasa tiga", "krama-inggil": "sangang dasa tiga" },
  },
  {
    aliases: { id: ["sembilan puluh empat", "94"], en: ["ninety-four", "94"], zh: ["九十四"] },
    translation: { ngoko: "sangang puluh papat", krama: "sangang dasa sekawan", "krama-inggil": "sangang dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan puluh lima", "95"], en: ["ninety-five", "95"], zh: ["九十五"] },
    translation: { ngoko: "sangang puluh lima", krama: "sangang dasa gangsal", "krama-inggil": "sangang dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan puluh enam", "96"], en: ["ninety-six", "96"], zh: ["九十六"] },
    translation: { ngoko: "sangang puluh enem", krama: "sangang dasa enem", "krama-inggil": "sangang dasa enem" },
  },
  {
    aliases: { id: ["sembilan puluh tujuh", "97"], en: ["ninety-seven", "97"], zh: ["九十七"] },
    translation: { ngoko: "sangang puluh pitu", krama: "sangang dasa pitu", "krama-inggil": "sangang dasa pitu" },
  },
  {
    aliases: { id: ["sembilan puluh delapan", "98"], en: ["ninety-eight", "98"], zh: ["九十八"] },
    translation: { ngoko: "sangang puluh wolu", krama: "sangang dasa wolu", "krama-inggil": "sangang dasa wolu" },
  },
  {
    aliases: { id: ["sembilan puluh sembilan", "99"], en: ["ninety-nine", "99"], zh: ["九十九"] },
    translation: { ngoko: "sangang puluh sanga", krama: "sangang dasa sanga", "krama-inggil": "sangang dasa sanga" },
  },
  {
    aliases: { id: ["seratus", "100"], en: ["one hundred", "100"], zh: ["一百"] },
    translation: { ngoko: "satus", krama: "setunggal atus", "krama-inggil": "setunggal atus" },
  },
  {
    aliases: { id: ["seratus satu", "101"], en: ["one hundred one", "101"], zh: ["一百零一"] },
    translation: { ngoko: "satus siji", krama: "setunggal atus setunggal", "krama-inggil": "setunggal atus setunggal" },
  },
  {
    aliases: { id: ["seratus dua", "102"], en: ["one hundred two", "102"], zh: ["一百零二"] },
    translation: { ngoko: "satus loro", krama: "setunggal atus kalih", "krama-inggil": "setunggal atus kalih" },
  },
  {
    aliases: { id: ["seratus tiga", "103"], en: ["one hundred three", "103"], zh: ["一百零三"] },
    translation: { ngoko: "satus telu", krama: "setunggal atus tiga", "krama-inggil": "setunggal atus tiga" },
  },
  {
    aliases: { id: ["seratus empat", "104"], en: ["one hundred four", "104"], zh: ["一百零四"] },
    translation: { ngoko: "satus papat", krama: "setunggal atus sekawan", "krama-inggil": "setunggal atus sekawan" },
  },
  {
    aliases: { id: ["seratus lima", "105"], en: ["one hundred five", "105"], zh: ["一百零五"] },
    translation: { ngoko: "satus lima", krama: "setunggal atus gangsal", "krama-inggil": "setunggal atus gangsal" },
  },
  {
    aliases: { id: ["seratus enam", "106"], en: ["one hundred six", "106"], zh: ["一百零六"] },
    translation: { ngoko: "satus enem", krama: "setunggal atus enem", "krama-inggil": "setunggal atus enem" },
  },
  {
    aliases: { id: ["seratus tujuh", "107"], en: ["one hundred seven", "107"], zh: ["一百零七"] },
    translation: { ngoko: "satus pitu", krama: "setunggal atus pitu", "krama-inggil": "setunggal atus pitu" },
  },
  {
    aliases: { id: ["seratus delapan", "108"], en: ["one hundred eight", "108"], zh: ["一百零八"] },
    translation: { ngoko: "satus wolu", krama: "setunggal atus wolu", "krama-inggil": "setunggal atus wolu" },
  },
  {
    aliases: { id: ["seratus sembilan", "109"], en: ["one hundred nine", "109"], zh: ["一百零九"] },
    translation: { ngoko: "satus sanga", krama: "setunggal atus sanga", "krama-inggil": "setunggal atus sanga" },
  },
  {
    aliases: { id: ["seratus sepuluh", "110"], en: ["one hundred ten", "110"], zh: ["一百十"] },
    translation: { ngoko: "satus sepuluh", krama: "setunggal atus sedasa", "krama-inggil": "setunggal atus sedasa" },
  },
  {
    aliases: { id: ["seratus sebelas", "111"], en: ["one hundred eleven", "111"], zh: ["一百十一"] },
    translation: { ngoko: "satus sewelas", krama: "setunggal atus sewelas", "krama-inggil": "setunggal atus sewelas" },
  },
  {
    aliases: { id: ["seratus dua belas", "112"], en: ["one hundred twelve", "112"], zh: ["一百十二"] },
    translation: { ngoko: "satus rolas", krama: "setunggal atus kalih welas", "krama-inggil": "setunggal atus kalih welas" },
  },
  {
    aliases: { id: ["seratus tiga belas", "113"], en: ["one hundred thirteen", "113"], zh: ["一百十三"] },
    translation: { ngoko: "satus telulas", krama: "setunggal atus tiga welas", "krama-inggil": "setunggal atus tiga welas" },
  },
  {
    aliases: { id: ["seratus empat belas", "114"], en: ["one hundred fourteen", "114"], zh: ["一百十四"] },
    translation: { ngoko: "satus patbelas", krama: "setunggal atus sekawan welas", "krama-inggil": "setunggal atus sekawan welas" },
  },
  {
    aliases: { id: ["seratus lima belas", "115"], en: ["one hundred fifteen", "115"], zh: ["一百十五"] },
    translation: { ngoko: "satus limolas", krama: "setunggal atus gangsal welas", "krama-inggil": "setunggal atus gangsal welas" },
  },
  {
    aliases: { id: ["seratus enam belas", "116"], en: ["one hundred sixteen", "116"], zh: ["一百十六"] },
    translation: { ngoko: "satus nembelas", krama: "setunggal atus enem welas", "krama-inggil": "setunggal atus enem welas" },
  },
  {
    aliases: { id: ["seratus tujuh belas", "117"], en: ["one hundred seventeen", "117"], zh: ["一百十七"] },
    translation: { ngoko: "satus pitulas", krama: "setunggal atus pitulas", "krama-inggil": "setunggal atus pitulas" },
  },
  {
    aliases: { id: ["seratus delapan belas", "118"], en: ["one hundred eighteen", "118"], zh: ["一百十八"] },
    translation: { ngoko: "satus wolulas", krama: "setunggal atus wolulas", "krama-inggil": "setunggal atus wolulas" },
  },
  {
    aliases: { id: ["seratus sembilan belas", "119"], en: ["one hundred nineteen", "119"], zh: ["一百十九"] },
    translation: { ngoko: "satus sangalas", krama: "setunggal atus sangalas", "krama-inggil": "setunggal atus sangalas" },
  },
  {
    aliases: { id: ["seratus dua puluh", "120"], en: ["one hundred twenty", "120"], zh: ["一百二十"] },
    translation: { ngoko: "satus rong puluh", krama: "setunggal atus kalih dasa", "krama-inggil": "setunggal atus kalih dasa" },
  },
  {
    aliases: { id: ["seratus dua puluh satu", "121"], en: ["one hundred twenty-one", "121"], zh: ["一百二十一"] },
    translation: { ngoko: "satus selikur", krama: "setunggal atus kalih dasa setunggal", "krama-inggil": "setunggal atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["seratus dua puluh dua", "122"], en: ["one hundred twenty-two", "122"], zh: ["一百二十二"] },
    translation: { ngoko: "satus rolikur", krama: "setunggal atus kalih dasa kalih", "krama-inggil": "setunggal atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["seratus dua puluh tiga", "123"], en: ["one hundred twenty-three", "123"], zh: ["一百二十三"] },
    translation: { ngoko: "satus telulikur", krama: "setunggal atus kalih dasa tiga", "krama-inggil": "setunggal atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["seratus dua puluh empat", "124"], en: ["one hundred twenty-four", "124"], zh: ["一百二十四"] },
    translation: { ngoko: "satus patlikur", krama: "setunggal atus kalih dasa sekawan", "krama-inggil": "setunggal atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["seratus dua puluh lima", "125"], en: ["one hundred twenty-five", "125"], zh: ["一百二十五"] },
    translation: { ngoko: "satus selawe", krama: "setunggal atus selangkung", "krama-inggil": "setunggal atus selangkung" },
  },
  {
    aliases: { id: ["seratus dua puluh enam", "126"], en: ["one hundred twenty-six", "126"], zh: ["一百二十六"] },
    translation: { ngoko: "satus nemlikur", krama: "setunggal atus kalih dasa enem", "krama-inggil": "setunggal atus kalih dasa enem" },
  },
  {
    aliases: { id: ["seratus dua puluh tujuh", "127"], en: ["one hundred twenty-seven", "127"], zh: ["一百二十七"] },
    translation: { ngoko: "satus pitulikur", krama: "setunggal atus kalih dasa pitu", "krama-inggil": "setunggal atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["seratus dua puluh delapan", "128"], en: ["one hundred twenty-eight", "128"], zh: ["一百二十八"] },
    translation: { ngoko: "satus wolulikur", krama: "setunggal atus kalih dasa wolu", "krama-inggil": "setunggal atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["seratus dua puluh sembilan", "129"], en: ["one hundred twenty-nine", "129"], zh: ["一百二十九"] },
    translation: { ngoko: "satus sangalikur", krama: "setunggal atus kalih dasa sanga", "krama-inggil": "setunggal atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["seratus tiga puluh", "130"], en: ["one hundred thirty", "130"], zh: ["一百三十"] },
    translation: { ngoko: "satus telung puluh", krama: "setunggal atus tigang dasa", "krama-inggil": "setunggal atus tigang dasa" },
  },
  {
    aliases: { id: ["seratus tiga puluh satu", "131"], en: ["one hundred thirty-one", "131"], zh: ["一百三十一"] },
    translation: { ngoko: "satus telung puluh siji", krama: "setunggal atus tigang dasa setunggal", "krama-inggil": "setunggal atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["seratus tiga puluh dua", "132"], en: ["one hundred thirty-two", "132"], zh: ["一百三十二"] },
    translation: { ngoko: "satus telung puluh loro", krama: "setunggal atus tigang dasa kalih", "krama-inggil": "setunggal atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["seratus tiga puluh tiga", "133"], en: ["one hundred thirty-three", "133"], zh: ["一百三十三"] },
    translation: { ngoko: "satus telung puluh telu", krama: "setunggal atus tigang dasa tiga", "krama-inggil": "setunggal atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["seratus tiga puluh empat", "134"], en: ["one hundred thirty-four", "134"], zh: ["一百三十四"] },
    translation: { ngoko: "satus telung puluh papat", krama: "setunggal atus tigang dasa sekawan", "krama-inggil": "setunggal atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["seratus tiga puluh lima", "135"], en: ["one hundred thirty-five", "135"], zh: ["一百三十五"] },
    translation: { ngoko: "satus telung puluh lima", krama: "setunggal atus tigang dasa gangsal", "krama-inggil": "setunggal atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["seratus tiga puluh enam", "136"], en: ["one hundred thirty-six", "136"], zh: ["一百三十六"] },
    translation: { ngoko: "satus telung puluh enem", krama: "setunggal atus tigang dasa enem", "krama-inggil": "setunggal atus tigang dasa enem" },
  },
  {
    aliases: { id: ["seratus tiga puluh tujuh", "137"], en: ["one hundred thirty-seven", "137"], zh: ["一百三十七"] },
    translation: { ngoko: "satus telung puluh pitu", krama: "setunggal atus tigang dasa pitu", "krama-inggil": "setunggal atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["seratus tiga puluh delapan", "138"], en: ["one hundred thirty-eight", "138"], zh: ["一百三十八"] },
    translation: { ngoko: "satus telung puluh wolu", krama: "setunggal atus tigang dasa wolu", "krama-inggil": "setunggal atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["seratus tiga puluh sembilan", "139"], en: ["one hundred thirty-nine", "139"], zh: ["一百三十九"] },
    translation: { ngoko: "satus telung puluh sanga", krama: "setunggal atus tigang dasa sanga", "krama-inggil": "setunggal atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["seratus empat puluh", "140"], en: ["one hundred forty", "140"], zh: ["一百四十"] },
    translation: { ngoko: "satus patang puluh", krama: "setunggal atus sekawan dasa", "krama-inggil": "setunggal atus sekawan dasa" },
  },
  {
    aliases: { id: ["seratus empat puluh satu", "141"], en: ["one hundred forty-one", "141"], zh: ["一百四十一"] },
    translation: { ngoko: "satus patang puluh siji", krama: "setunggal atus sekawan dasa setunggal", "krama-inggil": "setunggal atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["seratus empat puluh dua", "142"], en: ["one hundred forty-two", "142"], zh: ["一百四十二"] },
    translation: { ngoko: "satus patang puluh loro", krama: "setunggal atus sekawan dasa kalih", "krama-inggil": "setunggal atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["seratus empat puluh tiga", "143"], en: ["one hundred forty-three", "143"], zh: ["一百四十三"] },
    translation: { ngoko: "satus patang puluh telu", krama: "setunggal atus sekawan dasa tiga", "krama-inggil": "setunggal atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["seratus empat puluh empat", "144"], en: ["one hundred forty-four", "144"], zh: ["一百四十四"] },
    translation: { ngoko: "satus patang puluh papat", krama: "setunggal atus sekawan dasa sekawan", "krama-inggil": "setunggal atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["seratus empat puluh lima", "145"], en: ["one hundred forty-five", "145"], zh: ["一百四十五"] },
    translation: { ngoko: "satus patang puluh lima", krama: "setunggal atus sekawan dasa gangsal", "krama-inggil": "setunggal atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["seratus empat puluh enam", "146"], en: ["one hundred forty-six", "146"], zh: ["一百四十六"] },
    translation: { ngoko: "satus patang puluh enem", krama: "setunggal atus sekawan dasa enem", "krama-inggil": "setunggal atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["seratus empat puluh tujuh", "147"], en: ["one hundred forty-seven", "147"], zh: ["一百四十七"] },
    translation: { ngoko: "satus patang puluh pitu", krama: "setunggal atus sekawan dasa pitu", "krama-inggil": "setunggal atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["seratus empat puluh delapan", "148"], en: ["one hundred forty-eight", "148"], zh: ["一百四十八"] },
    translation: { ngoko: "satus patang puluh wolu", krama: "setunggal atus sekawan dasa wolu", "krama-inggil": "setunggal atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["seratus empat puluh sembilan", "149"], en: ["one hundred forty-nine", "149"], zh: ["一百四十九"] },
    translation: { ngoko: "satus patang puluh sanga", krama: "setunggal atus sekawan dasa sanga", "krama-inggil": "setunggal atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["seratus lima puluh", "150"], en: ["one hundred fifty", "150"], zh: ["一百五十"] },
    translation: { ngoko: "satus seket", krama: "setunggal atus seket", "krama-inggil": "setunggal atus seket" },
  },
  {
    aliases: { id: ["seratus lima puluh satu", "151"], en: ["one hundred fifty-one", "151"], zh: ["一百五十一"] },
    translation: { ngoko: "satus seket siji", krama: "setunggal atus seket setunggal", "krama-inggil": "setunggal atus seket setunggal" },
  },
  {
    aliases: { id: ["seratus lima puluh dua", "152"], en: ["one hundred fifty-two", "152"], zh: ["一百五十二"] },
    translation: { ngoko: "satus seket loro", krama: "setunggal atus seket kalih", "krama-inggil": "setunggal atus seket kalih" },
  },
  {
    aliases: { id: ["seratus lima puluh tiga", "153"], en: ["one hundred fifty-three", "153"], zh: ["一百五十三"] },
    translation: { ngoko: "satus seket telu", krama: "setunggal atus seket tiga", "krama-inggil": "setunggal atus seket tiga" },
  },
  {
    aliases: { id: ["seratus lima puluh empat", "154"], en: ["one hundred fifty-four", "154"], zh: ["一百五十四"] },
    translation: { ngoko: "satus seket papat", krama: "setunggal atus seket sekawan", "krama-inggil": "setunggal atus seket sekawan" },
  },
  {
    aliases: { id: ["seratus lima puluh lima", "155"], en: ["one hundred fifty-five", "155"], zh: ["一百五十五"] },
    translation: { ngoko: "satus seket lima", krama: "setunggal atus seket gangsal", "krama-inggil": "setunggal atus seket gangsal" },
  },
  {
    aliases: { id: ["seratus lima puluh enam", "156"], en: ["one hundred fifty-six", "156"], zh: ["一百五十六"] },
    translation: { ngoko: "satus seket enem", krama: "setunggal atus seket enem", "krama-inggil": "setunggal atus seket enem" },
  },
  {
    aliases: { id: ["seratus lima puluh tujuh", "157"], en: ["one hundred fifty-seven", "157"], zh: ["一百五十七"] },
    translation: { ngoko: "satus seket pitu", krama: "setunggal atus seket pitu", "krama-inggil": "setunggal atus seket pitu" },
  },
  {
    aliases: { id: ["seratus lima puluh delapan", "158"], en: ["one hundred fifty-eight", "158"], zh: ["一百五十八"] },
    translation: { ngoko: "satus seket wolu", krama: "setunggal atus seket wolu", "krama-inggil": "setunggal atus seket wolu" },
  },
  {
    aliases: { id: ["seratus lima puluh sembilan", "159"], en: ["one hundred fifty-nine", "159"], zh: ["一百五十九"] },
    translation: { ngoko: "satus seket sanga", krama: "setunggal atus seket sanga", "krama-inggil": "setunggal atus seket sanga" },
  },
  {
    aliases: { id: ["seratus enam puluh", "160"], en: ["one hundred sixty", "160"], zh: ["一百六十"] },
    translation: { ngoko: "satus sewidak", krama: "setunggal atus sewidak", "krama-inggil": "setunggal atus sewidak" },
  },
  {
    aliases: { id: ["seratus enam puluh satu", "161"], en: ["one hundred sixty-one", "161"], zh: ["一百六十一"] },
    translation: { ngoko: "satus sewidak siji", krama: "setunggal atus sewidak setunggal", "krama-inggil": "setunggal atus sewidak setunggal" },
  },
  {
    aliases: { id: ["seratus enam puluh dua", "162"], en: ["one hundred sixty-two", "162"], zh: ["一百六十二"] },
    translation: { ngoko: "satus sewidak loro", krama: "setunggal atus sewidak kalih", "krama-inggil": "setunggal atus sewidak kalih" },
  },
  {
    aliases: { id: ["seratus enam puluh tiga", "163"], en: ["one hundred sixty-three", "163"], zh: ["一百六十三"] },
    translation: { ngoko: "satus sewidak telu", krama: "setunggal atus sewidak tiga", "krama-inggil": "setunggal atus sewidak tiga" },
  },
  {
    aliases: { id: ["seratus enam puluh empat", "164"], en: ["one hundred sixty-four", "164"], zh: ["一百六十四"] },
    translation: { ngoko: "satus sewidak papat", krama: "setunggal atus sewidak sekawan", "krama-inggil": "setunggal atus sewidak sekawan" },
  },
  {
    aliases: { id: ["seratus enam puluh lima", "165"], en: ["one hundred sixty-five", "165"], zh: ["一百六十五"] },
    translation: { ngoko: "satus sewidak lima", krama: "setunggal atus sewidak gangsal", "krama-inggil": "setunggal atus sewidak gangsal" },
  },
  {
    aliases: { id: ["seratus enam puluh enam", "166"], en: ["one hundred sixty-six", "166"], zh: ["一百六十六"] },
    translation: { ngoko: "satus sewidak enem", krama: "setunggal atus sewidak enem", "krama-inggil": "setunggal atus sewidak enem" },
  },
  {
    aliases: { id: ["seratus enam puluh tujuh", "167"], en: ["one hundred sixty-seven", "167"], zh: ["一百六十七"] },
    translation: { ngoko: "satus sewidak pitu", krama: "setunggal atus sewidak pitu", "krama-inggil": "setunggal atus sewidak pitu" },
  },
  {
    aliases: { id: ["seratus enam puluh delapan", "168"], en: ["one hundred sixty-eight", "168"], zh: ["一百六十八"] },
    translation: { ngoko: "satus sewidak wolu", krama: "setunggal atus sewidak wolu", "krama-inggil": "setunggal atus sewidak wolu" },
  },
  {
    aliases: { id: ["seratus enam puluh sembilan", "169"], en: ["one hundred sixty-nine", "169"], zh: ["一百六十九"] },
    translation: { ngoko: "satus sewidak sanga", krama: "setunggal atus sewidak sanga", "krama-inggil": "setunggal atus sewidak sanga" },
  },
  {
    aliases: { id: ["seratus tujuh puluh", "170"], en: ["one hundred seventy", "170"], zh: ["一百七十"] },
    translation: { ngoko: "satus pitung puluh", krama: "setunggal atus pitung dasa", "krama-inggil": "setunggal atus pitung dasa" },
  },
  {
    aliases: { id: ["seratus tujuh puluh satu", "171"], en: ["one hundred seventy-one", "171"], zh: ["一百七十一"] },
    translation: { ngoko: "satus pitung puluh siji", krama: "setunggal atus pitung dasa setunggal", "krama-inggil": "setunggal atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["seratus tujuh puluh dua", "172"], en: ["one hundred seventy-two", "172"], zh: ["一百七十二"] },
    translation: { ngoko: "satus pitung puluh loro", krama: "setunggal atus pitung dasa kalih", "krama-inggil": "setunggal atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["seratus tujuh puluh tiga", "173"], en: ["one hundred seventy-three", "173"], zh: ["一百七十三"] },
    translation: { ngoko: "satus pitung puluh telu", krama: "setunggal atus pitung dasa tiga", "krama-inggil": "setunggal atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["seratus tujuh puluh empat", "174"], en: ["one hundred seventy-four", "174"], zh: ["一百七十四"] },
    translation: { ngoko: "satus pitung puluh papat", krama: "setunggal atus pitung dasa sekawan", "krama-inggil": "setunggal atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["seratus tujuh puluh lima", "175"], en: ["one hundred seventy-five", "175"], zh: ["一百七十五"] },
    translation: { ngoko: "satus pitung puluh lima", krama: "setunggal atus pitung dasa gangsal", "krama-inggil": "setunggal atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["seratus tujuh puluh enam", "176"], en: ["one hundred seventy-six", "176"], zh: ["一百七十六"] },
    translation: { ngoko: "satus pitung puluh enem", krama: "setunggal atus pitung dasa enem", "krama-inggil": "setunggal atus pitung dasa enem" },
  },
  {
    aliases: { id: ["seratus tujuh puluh tujuh", "177"], en: ["one hundred seventy-seven", "177"], zh: ["一百七十七"] },
    translation: { ngoko: "satus pitung puluh pitu", krama: "setunggal atus pitung dasa pitu", "krama-inggil": "setunggal atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["seratus tujuh puluh delapan", "178"], en: ["one hundred seventy-eight", "178"], zh: ["一百七十八"] },
    translation: { ngoko: "satus pitung puluh wolu", krama: "setunggal atus pitung dasa wolu", "krama-inggil": "setunggal atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["seratus tujuh puluh sembilan", "179"], en: ["one hundred seventy-nine", "179"], zh: ["一百七十九"] },
    translation: { ngoko: "satus pitung puluh sanga", krama: "setunggal atus pitung dasa sanga", "krama-inggil": "setunggal atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["seratus delapan puluh", "180"], en: ["one hundred eighty", "180"], zh: ["一百八十"] },
    translation: { ngoko: "satus wolung puluh", krama: "setunggal atus wolung dasa", "krama-inggil": "setunggal atus wolung dasa" },
  },
  {
    aliases: { id: ["seratus delapan puluh satu", "181"], en: ["one hundred eighty-one", "181"], zh: ["一百八十一"] },
    translation: { ngoko: "satus wolung puluh siji", krama: "setunggal atus wolung dasa setunggal", "krama-inggil": "setunggal atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["seratus delapan puluh dua", "182"], en: ["one hundred eighty-two", "182"], zh: ["一百八十二"] },
    translation: { ngoko: "satus wolung puluh loro", krama: "setunggal atus wolung dasa kalih", "krama-inggil": "setunggal atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["seratus delapan puluh tiga", "183"], en: ["one hundred eighty-three", "183"], zh: ["一百八十三"] },
    translation: { ngoko: "satus wolung puluh telu", krama: "setunggal atus wolung dasa tiga", "krama-inggil": "setunggal atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["seratus delapan puluh empat", "184"], en: ["one hundred eighty-four", "184"], zh: ["一百八十四"] },
    translation: { ngoko: "satus wolung puluh papat", krama: "setunggal atus wolung dasa sekawan", "krama-inggil": "setunggal atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["seratus delapan puluh lima", "185"], en: ["one hundred eighty-five", "185"], zh: ["一百八十五"] },
    translation: { ngoko: "satus wolung puluh lima", krama: "setunggal atus wolung dasa gangsal", "krama-inggil": "setunggal atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["seratus delapan puluh enam", "186"], en: ["one hundred eighty-six", "186"], zh: ["一百八十六"] },
    translation: { ngoko: "satus wolung puluh enem", krama: "setunggal atus wolung dasa enem", "krama-inggil": "setunggal atus wolung dasa enem" },
  },
  {
    aliases: { id: ["seratus delapan puluh tujuh", "187"], en: ["one hundred eighty-seven", "187"], zh: ["一百八十七"] },
    translation: { ngoko: "satus wolung puluh pitu", krama: "setunggal atus wolung dasa pitu", "krama-inggil": "setunggal atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["seratus delapan puluh delapan", "188"], en: ["one hundred eighty-eight", "188"], zh: ["一百八十八"] },
    translation: { ngoko: "satus wolung puluh wolu", krama: "setunggal atus wolung dasa wolu", "krama-inggil": "setunggal atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["seratus delapan puluh sembilan", "189"], en: ["one hundred eighty-nine", "189"], zh: ["一百八十九"] },
    translation: { ngoko: "satus wolung puluh sanga", krama: "setunggal atus wolung dasa sanga", "krama-inggil": "setunggal atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["seratus sembilan puluh", "190"], en: ["one hundred ninety", "190"], zh: ["一百九十"] },
    translation: { ngoko: "satus sangang puluh", krama: "setunggal atus sangang dasa", "krama-inggil": "setunggal atus sangang dasa" },
  },
  {
    aliases: { id: ["seratus sembilan puluh satu", "191"], en: ["one hundred ninety-one", "191"], zh: ["一百九十一"] },
    translation: { ngoko: "satus sangang puluh siji", krama: "setunggal atus sangang dasa setunggal", "krama-inggil": "setunggal atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["seratus sembilan puluh dua", "192"], en: ["one hundred ninety-two", "192"], zh: ["一百九十二"] },
    translation: { ngoko: "satus sangang puluh loro", krama: "setunggal atus sangang dasa kalih", "krama-inggil": "setunggal atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["seratus sembilan puluh tiga", "193"], en: ["one hundred ninety-three", "193"], zh: ["一百九十三"] },
    translation: { ngoko: "satus sangang puluh telu", krama: "setunggal atus sangang dasa tiga", "krama-inggil": "setunggal atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["seratus sembilan puluh empat", "194"], en: ["one hundred ninety-four", "194"], zh: ["一百九十四"] },
    translation: { ngoko: "satus sangang puluh papat", krama: "setunggal atus sangang dasa sekawan", "krama-inggil": "setunggal atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["seratus sembilan puluh lima", "195"], en: ["one hundred ninety-five", "195"], zh: ["一百九十五"] },
    translation: { ngoko: "satus sangang puluh lima", krama: "setunggal atus sangang dasa gangsal", "krama-inggil": "setunggal atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["seratus sembilan puluh enam", "196"], en: ["one hundred ninety-six", "196"], zh: ["一百九十六"] },
    translation: { ngoko: "satus sangang puluh enem", krama: "setunggal atus sangang dasa enem", "krama-inggil": "setunggal atus sangang dasa enem" },
  },
  {
    aliases: { id: ["seratus sembilan puluh tujuh", "197"], en: ["one hundred ninety-seven", "197"], zh: ["一百九十七"] },
    translation: { ngoko: "satus sangang puluh pitu", krama: "setunggal atus sangang dasa pitu", "krama-inggil": "setunggal atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["seratus sembilan puluh delapan", "198"], en: ["one hundred ninety-eight", "198"], zh: ["一百九十八"] },
    translation: { ngoko: "satus sangang puluh wolu", krama: "setunggal atus sangang dasa wolu", "krama-inggil": "setunggal atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["seratus sembilan puluh sembilan", "199"], en: ["one hundred ninety-nine", "199"], zh: ["一百九十九"] },
    translation: { ngoko: "satus sangang puluh sanga", krama: "setunggal atus sangang dasa sanga", "krama-inggil": "setunggal atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus", "200"], en: ["two hundred", "200"], zh: ["二百"] },
    translation: { ngoko: "rong atus", krama: "kalih atus", "krama-inggil": "kalih atus" },
  },
  {
    aliases: { id: ["dua ratus satu", "201"], en: ["two hundred one", "201"], zh: ["二百零一"] },
    translation: { ngoko: "rong atus siji", krama: "kalih atus setunggal", "krama-inggil": "kalih atus setunggal" },
  },
  {
    aliases: { id: ["dua ratus dua", "202"], en: ["two hundred two", "202"], zh: ["二百零二"] },
    translation: { ngoko: "rong atus loro", krama: "kalih atus kalih", "krama-inggil": "kalih atus kalih" },
  },
  {
    aliases: { id: ["dua ratus tiga", "203"], en: ["two hundred three", "203"], zh: ["二百零三"] },
    translation: { ngoko: "rong atus telu", krama: "kalih atus tiga", "krama-inggil": "kalih atus tiga" },
  },
  {
    aliases: { id: ["dua ratus empat", "204"], en: ["two hundred four", "204"], zh: ["二百零四"] },
    translation: { ngoko: "rong atus papat", krama: "kalih atus sekawan", "krama-inggil": "kalih atus sekawan" },
  },
  {
    aliases: { id: ["dua ratus lima", "205"], en: ["two hundred five", "205"], zh: ["二百零五"] },
    translation: { ngoko: "rong atus lima", krama: "kalih atus gangsal", "krama-inggil": "kalih atus gangsal" },
  },
  {
    aliases: { id: ["dua ratus enam", "206"], en: ["two hundred six", "206"], zh: ["二百零六"] },
    translation: { ngoko: "rong atus enem", krama: "kalih atus enem", "krama-inggil": "kalih atus enem" },
  },
  {
    aliases: { id: ["dua ratus tujuh", "207"], en: ["two hundred seven", "207"], zh: ["二百零七"] },
    translation: { ngoko: "rong atus pitu", krama: "kalih atus pitu", "krama-inggil": "kalih atus pitu" },
  },
  {
    aliases: { id: ["dua ratus delapan", "208"], en: ["two hundred eight", "208"], zh: ["二百零八"] },
    translation: { ngoko: "rong atus wolu", krama: "kalih atus wolu", "krama-inggil": "kalih atus wolu" },
  },
  {
    aliases: { id: ["dua ratus sembilan", "209"], en: ["two hundred nine", "209"], zh: ["二百零九"] },
    translation: { ngoko: "rong atus sanga", krama: "kalih atus sanga", "krama-inggil": "kalih atus sanga" },
  },
  {
    aliases: { id: ["dua ratus sepuluh", "210"], en: ["two hundred ten", "210"], zh: ["二百十"] },
    translation: { ngoko: "rong atus sepuluh", krama: "kalih atus sedasa", "krama-inggil": "kalih atus sedasa" },
  },
  {
    aliases: { id: ["dua ratus sebelas", "211"], en: ["two hundred eleven", "211"], zh: ["二百十一"] },
    translation: { ngoko: "rong atus sewelas", krama: "kalih atus sewelas", "krama-inggil": "kalih atus sewelas" },
  },
  {
    aliases: { id: ["dua ratus dua belas", "212"], en: ["two hundred twelve", "212"], zh: ["二百十二"] },
    translation: { ngoko: "rong atus rolas", krama: "kalih atus kalih welas", "krama-inggil": "kalih atus kalih welas" },
  },
  {
    aliases: { id: ["dua ratus tiga belas", "213"], en: ["two hundred thirteen", "213"], zh: ["二百十三"] },
    translation: { ngoko: "rong atus telulas", krama: "kalih atus tiga welas", "krama-inggil": "kalih atus tiga welas" },
  },
  {
    aliases: { id: ["dua ratus empat belas", "214"], en: ["two hundred fourteen", "214"], zh: ["二百十四"] },
    translation: { ngoko: "rong atus patbelas", krama: "kalih atus sekawan welas", "krama-inggil": "kalih atus sekawan welas" },
  },
  {
    aliases: { id: ["dua ratus lima belas", "215"], en: ["two hundred fifteen", "215"], zh: ["二百十五"] },
    translation: { ngoko: "rong atus limolas", krama: "kalih atus gangsal welas", "krama-inggil": "kalih atus gangsal welas" },
  },
  {
    aliases: { id: ["dua ratus enam belas", "216"], en: ["two hundred sixteen", "216"], zh: ["二百十六"] },
    translation: { ngoko: "rong atus nembelas", krama: "kalih atus enem welas", "krama-inggil": "kalih atus enem welas" },
  },
  {
    aliases: { id: ["dua ratus tujuh belas", "217"], en: ["two hundred seventeen", "217"], zh: ["二百十七"] },
    translation: { ngoko: "rong atus pitulas", krama: "kalih atus pitulas", "krama-inggil": "kalih atus pitulas" },
  },
  {
    aliases: { id: ["dua ratus delapan belas", "218"], en: ["two hundred eighteen", "218"], zh: ["二百十八"] },
    translation: { ngoko: "rong atus wolulas", krama: "kalih atus wolulas", "krama-inggil": "kalih atus wolulas" },
  },
  {
    aliases: { id: ["dua ratus sembilan belas", "219"], en: ["two hundred nineteen", "219"], zh: ["二百十九"] },
    translation: { ngoko: "rong atus sangalas", krama: "kalih atus sangalas", "krama-inggil": "kalih atus sangalas" },
  },
  {
    aliases: { id: ["dua ratus dua puluh", "220"], en: ["two hundred twenty", "220"], zh: ["二百二十"] },
    translation: { ngoko: "rong atus rong puluh", krama: "kalih atus kalih dasa", "krama-inggil": "kalih atus kalih dasa" },
  },
  {
    aliases: { id: ["dua ratus dua puluh satu", "221"], en: ["two hundred twenty-one", "221"], zh: ["二百二十一"] },
    translation: { ngoko: "rong atus selikur", krama: "kalih atus kalih dasa setunggal", "krama-inggil": "kalih atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus dua puluh dua", "222"], en: ["two hundred twenty-two", "222"], zh: ["二百二十二"] },
    translation: { ngoko: "rong atus rolikur", krama: "kalih atus kalih dasa kalih", "krama-inggil": "kalih atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus dua puluh tiga", "223"], en: ["two hundred twenty-three", "223"], zh: ["二百二十三"] },
    translation: { ngoko: "rong atus telulikur", krama: "kalih atus kalih dasa tiga", "krama-inggil": "kalih atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus dua puluh empat", "224"], en: ["two hundred twenty-four", "224"], zh: ["二百二十四"] },
    translation: { ngoko: "rong atus patlikur", krama: "kalih atus kalih dasa sekawan", "krama-inggil": "kalih atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus dua puluh lima", "225"], en: ["two hundred twenty-five", "225"], zh: ["二百二十五"] },
    translation: { ngoko: "rong atus selawe", krama: "kalih atus selangkung", "krama-inggil": "kalih atus selangkung" },
  },
  {
    aliases: { id: ["dua ratus dua puluh enam", "226"], en: ["two hundred twenty-six", "226"], zh: ["二百二十六"] },
    translation: { ngoko: "rong atus nemlikur", krama: "kalih atus kalih dasa enem", "krama-inggil": "kalih atus kalih dasa enem" },
  },
  {
    aliases: { id: ["dua ratus dua puluh tujuh", "227"], en: ["two hundred twenty-seven", "227"], zh: ["二百二十七"] },
    translation: { ngoko: "rong atus pitulikur", krama: "kalih atus kalih dasa pitu", "krama-inggil": "kalih atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus dua puluh delapan", "228"], en: ["two hundred twenty-eight", "228"], zh: ["二百二十八"] },
    translation: { ngoko: "rong atus wolulikur", krama: "kalih atus kalih dasa wolu", "krama-inggil": "kalih atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus dua puluh sembilan", "229"], en: ["two hundred twenty-nine", "229"], zh: ["二百二十九"] },
    translation: { ngoko: "rong atus sangalikur", krama: "kalih atus kalih dasa sanga", "krama-inggil": "kalih atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh", "230"], en: ["two hundred thirty", "230"], zh: ["二百三十"] },
    translation: { ngoko: "rong atus telung puluh", krama: "kalih atus tigang dasa", "krama-inggil": "kalih atus tigang dasa" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh satu", "231"], en: ["two hundred thirty-one", "231"], zh: ["二百三十一"] },
    translation: { ngoko: "rong atus telung puluh siji", krama: "kalih atus tigang dasa setunggal", "krama-inggil": "kalih atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh dua", "232"], en: ["two hundred thirty-two", "232"], zh: ["二百三十二"] },
    translation: { ngoko: "rong atus telung puluh loro", krama: "kalih atus tigang dasa kalih", "krama-inggil": "kalih atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh tiga", "233"], en: ["two hundred thirty-three", "233"], zh: ["二百三十三"] },
    translation: { ngoko: "rong atus telung puluh telu", krama: "kalih atus tigang dasa tiga", "krama-inggil": "kalih atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh empat", "234"], en: ["two hundred thirty-four", "234"], zh: ["二百三十四"] },
    translation: { ngoko: "rong atus telung puluh papat", krama: "kalih atus tigang dasa sekawan", "krama-inggil": "kalih atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh lima", "235"], en: ["two hundred thirty-five", "235"], zh: ["二百三十五"] },
    translation: { ngoko: "rong atus telung puluh lima", krama: "kalih atus tigang dasa gangsal", "krama-inggil": "kalih atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh enam", "236"], en: ["two hundred thirty-six", "236"], zh: ["二百三十六"] },
    translation: { ngoko: "rong atus telung puluh enem", krama: "kalih atus tigang dasa enem", "krama-inggil": "kalih atus tigang dasa enem" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh tujuh", "237"], en: ["two hundred thirty-seven", "237"], zh: ["二百三十七"] },
    translation: { ngoko: "rong atus telung puluh pitu", krama: "kalih atus tigang dasa pitu", "krama-inggil": "kalih atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh delapan", "238"], en: ["two hundred thirty-eight", "238"], zh: ["二百三十八"] },
    translation: { ngoko: "rong atus telung puluh wolu", krama: "kalih atus tigang dasa wolu", "krama-inggil": "kalih atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus tiga puluh sembilan", "239"], en: ["two hundred thirty-nine", "239"], zh: ["二百三十九"] },
    translation: { ngoko: "rong atus telung puluh sanga", krama: "kalih atus tigang dasa sanga", "krama-inggil": "kalih atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus empat puluh", "240"], en: ["two hundred forty", "240"], zh: ["二百四十"] },
    translation: { ngoko: "rong atus patang puluh", krama: "kalih atus sekawan dasa", "krama-inggil": "kalih atus sekawan dasa" },
  },
  {
    aliases: { id: ["dua ratus empat puluh satu", "241"], en: ["two hundred forty-one", "241"], zh: ["二百四十一"] },
    translation: { ngoko: "rong atus patang puluh siji", krama: "kalih atus sekawan dasa setunggal", "krama-inggil": "kalih atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus empat puluh dua", "242"], en: ["two hundred forty-two", "242"], zh: ["二百四十二"] },
    translation: { ngoko: "rong atus patang puluh loro", krama: "kalih atus sekawan dasa kalih", "krama-inggil": "kalih atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus empat puluh tiga", "243"], en: ["two hundred forty-three", "243"], zh: ["二百四十三"] },
    translation: { ngoko: "rong atus patang puluh telu", krama: "kalih atus sekawan dasa tiga", "krama-inggil": "kalih atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus empat puluh empat", "244"], en: ["two hundred forty-four", "244"], zh: ["二百四十四"] },
    translation: { ngoko: "rong atus patang puluh papat", krama: "kalih atus sekawan dasa sekawan", "krama-inggil": "kalih atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus empat puluh lima", "245"], en: ["two hundred forty-five", "245"], zh: ["二百四十五"] },
    translation: { ngoko: "rong atus patang puluh lima", krama: "kalih atus sekawan dasa gangsal", "krama-inggil": "kalih atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["dua ratus empat puluh enam", "246"], en: ["two hundred forty-six", "246"], zh: ["二百四十六"] },
    translation: { ngoko: "rong atus patang puluh enem", krama: "kalih atus sekawan dasa enem", "krama-inggil": "kalih atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["dua ratus empat puluh tujuh", "247"], en: ["two hundred forty-seven", "247"], zh: ["二百四十七"] },
    translation: { ngoko: "rong atus patang puluh pitu", krama: "kalih atus sekawan dasa pitu", "krama-inggil": "kalih atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus empat puluh delapan", "248"], en: ["two hundred forty-eight", "248"], zh: ["二百四十八"] },
    translation: { ngoko: "rong atus patang puluh wolu", krama: "kalih atus sekawan dasa wolu", "krama-inggil": "kalih atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus empat puluh sembilan", "249"], en: ["two hundred forty-nine", "249"], zh: ["二百四十九"] },
    translation: { ngoko: "rong atus patang puluh sanga", krama: "kalih atus sekawan dasa sanga", "krama-inggil": "kalih atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus lima puluh", "250"], en: ["two hundred fifty", "250"], zh: ["二百五十"] },
    translation: { ngoko: "rong atus seket", krama: "kalih atus seket", "krama-inggil": "kalih atus seket" },
  },
  {
    aliases: { id: ["dua ratus lima puluh satu", "251"], en: ["two hundred fifty-one", "251"], zh: ["二百五十一"] },
    translation: { ngoko: "rong atus seket siji", krama: "kalih atus seket setunggal", "krama-inggil": "kalih atus seket setunggal" },
  },
  {
    aliases: { id: ["dua ratus lima puluh dua", "252"], en: ["two hundred fifty-two", "252"], zh: ["二百五十二"] },
    translation: { ngoko: "rong atus seket loro", krama: "kalih atus seket kalih", "krama-inggil": "kalih atus seket kalih" },
  },
  {
    aliases: { id: ["dua ratus lima puluh tiga", "253"], en: ["two hundred fifty-three", "253"], zh: ["二百五十三"] },
    translation: { ngoko: "rong atus seket telu", krama: "kalih atus seket tiga", "krama-inggil": "kalih atus seket tiga" },
  },
  {
    aliases: { id: ["dua ratus lima puluh empat", "254"], en: ["two hundred fifty-four", "254"], zh: ["二百五十四"] },
    translation: { ngoko: "rong atus seket papat", krama: "kalih atus seket sekawan", "krama-inggil": "kalih atus seket sekawan" },
  },
  {
    aliases: { id: ["dua ratus lima puluh lima", "255"], en: ["two hundred fifty-five", "255"], zh: ["二百五十五"] },
    translation: { ngoko: "rong atus seket lima", krama: "kalih atus seket gangsal", "krama-inggil": "kalih atus seket gangsal" },
  },
  {
    aliases: { id: ["dua ratus lima puluh enam", "256"], en: ["two hundred fifty-six", "256"], zh: ["二百五十六"] },
    translation: { ngoko: "rong atus seket enem", krama: "kalih atus seket enem", "krama-inggil": "kalih atus seket enem" },
  },
  {
    aliases: { id: ["dua ratus lima puluh tujuh", "257"], en: ["two hundred fifty-seven", "257"], zh: ["二百五十七"] },
    translation: { ngoko: "rong atus seket pitu", krama: "kalih atus seket pitu", "krama-inggil": "kalih atus seket pitu" },
  },
  {
    aliases: { id: ["dua ratus lima puluh delapan", "258"], en: ["two hundred fifty-eight", "258"], zh: ["二百五十八"] },
    translation: { ngoko: "rong atus seket wolu", krama: "kalih atus seket wolu", "krama-inggil": "kalih atus seket wolu" },
  },
  {
    aliases: { id: ["dua ratus lima puluh sembilan", "259"], en: ["two hundred fifty-nine", "259"], zh: ["二百五十九"] },
    translation: { ngoko: "rong atus seket sanga", krama: "kalih atus seket sanga", "krama-inggil": "kalih atus seket sanga" },
  },
  {
    aliases: { id: ["dua ratus enam puluh", "260"], en: ["two hundred sixty", "260"], zh: ["二百六十"] },
    translation: { ngoko: "rong atus sewidak", krama: "kalih atus sewidak", "krama-inggil": "kalih atus sewidak" },
  },
  {
    aliases: { id: ["dua ratus enam puluh satu", "261"], en: ["two hundred sixty-one", "261"], zh: ["二百六十一"] },
    translation: { ngoko: "rong atus sewidak siji", krama: "kalih atus sewidak setunggal", "krama-inggil": "kalih atus sewidak setunggal" },
  },
  {
    aliases: { id: ["dua ratus enam puluh dua", "262"], en: ["two hundred sixty-two", "262"], zh: ["二百六十二"] },
    translation: { ngoko: "rong atus sewidak loro", krama: "kalih atus sewidak kalih", "krama-inggil": "kalih atus sewidak kalih" },
  },
  {
    aliases: { id: ["dua ratus enam puluh tiga", "263"], en: ["two hundred sixty-three", "263"], zh: ["二百六十三"] },
    translation: { ngoko: "rong atus sewidak telu", krama: "kalih atus sewidak tiga", "krama-inggil": "kalih atus sewidak tiga" },
  },
  {
    aliases: { id: ["dua ratus enam puluh empat", "264"], en: ["two hundred sixty-four", "264"], zh: ["二百六十四"] },
    translation: { ngoko: "rong atus sewidak papat", krama: "kalih atus sewidak sekawan", "krama-inggil": "kalih atus sewidak sekawan" },
  },
  {
    aliases: { id: ["dua ratus enam puluh lima", "265"], en: ["two hundred sixty-five", "265"], zh: ["二百六十五"] },
    translation: { ngoko: "rong atus sewidak lima", krama: "kalih atus sewidak gangsal", "krama-inggil": "kalih atus sewidak gangsal" },
  },
  {
    aliases: { id: ["dua ratus enam puluh enam", "266"], en: ["two hundred sixty-six", "266"], zh: ["二百六十六"] },
    translation: { ngoko: "rong atus sewidak enem", krama: "kalih atus sewidak enem", "krama-inggil": "kalih atus sewidak enem" },
  },
  {
    aliases: { id: ["dua ratus enam puluh tujuh", "267"], en: ["two hundred sixty-seven", "267"], zh: ["二百六十七"] },
    translation: { ngoko: "rong atus sewidak pitu", krama: "kalih atus sewidak pitu", "krama-inggil": "kalih atus sewidak pitu" },
  },
  {
    aliases: { id: ["dua ratus enam puluh delapan", "268"], en: ["two hundred sixty-eight", "268"], zh: ["二百六十八"] },
    translation: { ngoko: "rong atus sewidak wolu", krama: "kalih atus sewidak wolu", "krama-inggil": "kalih atus sewidak wolu" },
  },
  {
    aliases: { id: ["dua ratus enam puluh sembilan", "269"], en: ["two hundred sixty-nine", "269"], zh: ["二百六十九"] },
    translation: { ngoko: "rong atus sewidak sanga", krama: "kalih atus sewidak sanga", "krama-inggil": "kalih atus sewidak sanga" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh", "270"], en: ["two hundred seventy", "270"], zh: ["二百七十"] },
    translation: { ngoko: "rong atus pitung puluh", krama: "kalih atus pitung dasa", "krama-inggil": "kalih atus pitung dasa" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh satu", "271"], en: ["two hundred seventy-one", "271"], zh: ["二百七十一"] },
    translation: { ngoko: "rong atus pitung puluh siji", krama: "kalih atus pitung dasa setunggal", "krama-inggil": "kalih atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh dua", "272"], en: ["two hundred seventy-two", "272"], zh: ["二百七十二"] },
    translation: { ngoko: "rong atus pitung puluh loro", krama: "kalih atus pitung dasa kalih", "krama-inggil": "kalih atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh tiga", "273"], en: ["two hundred seventy-three", "273"], zh: ["二百七十三"] },
    translation: { ngoko: "rong atus pitung puluh telu", krama: "kalih atus pitung dasa tiga", "krama-inggil": "kalih atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh empat", "274"], en: ["two hundred seventy-four", "274"], zh: ["二百七十四"] },
    translation: { ngoko: "rong atus pitung puluh papat", krama: "kalih atus pitung dasa sekawan", "krama-inggil": "kalih atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh lima", "275"], en: ["two hundred seventy-five", "275"], zh: ["二百七十五"] },
    translation: { ngoko: "rong atus pitung puluh lima", krama: "kalih atus pitung dasa gangsal", "krama-inggil": "kalih atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh enam", "276"], en: ["two hundred seventy-six", "276"], zh: ["二百七十六"] },
    translation: { ngoko: "rong atus pitung puluh enem", krama: "kalih atus pitung dasa enem", "krama-inggil": "kalih atus pitung dasa enem" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh tujuh", "277"], en: ["two hundred seventy-seven", "277"], zh: ["二百七十七"] },
    translation: { ngoko: "rong atus pitung puluh pitu", krama: "kalih atus pitung dasa pitu", "krama-inggil": "kalih atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh delapan", "278"], en: ["two hundred seventy-eight", "278"], zh: ["二百七十八"] },
    translation: { ngoko: "rong atus pitung puluh wolu", krama: "kalih atus pitung dasa wolu", "krama-inggil": "kalih atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus tujuh puluh sembilan", "279"], en: ["two hundred seventy-nine", "279"], zh: ["二百七十九"] },
    translation: { ngoko: "rong atus pitung puluh sanga", krama: "kalih atus pitung dasa sanga", "krama-inggil": "kalih atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh", "280"], en: ["two hundred eighty", "280"], zh: ["二百八十"] },
    translation: { ngoko: "rong atus wolung puluh", krama: "kalih atus wolung dasa", "krama-inggil": "kalih atus wolung dasa" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh satu", "281"], en: ["two hundred eighty-one", "281"], zh: ["二百八十一"] },
    translation: { ngoko: "rong atus wolung puluh siji", krama: "kalih atus wolung dasa setunggal", "krama-inggil": "kalih atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh dua", "282"], en: ["two hundred eighty-two", "282"], zh: ["二百八十二"] },
    translation: { ngoko: "rong atus wolung puluh loro", krama: "kalih atus wolung dasa kalih", "krama-inggil": "kalih atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh tiga", "283"], en: ["two hundred eighty-three", "283"], zh: ["二百八十三"] },
    translation: { ngoko: "rong atus wolung puluh telu", krama: "kalih atus wolung dasa tiga", "krama-inggil": "kalih atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh empat", "284"], en: ["two hundred eighty-four", "284"], zh: ["二百八十四"] },
    translation: { ngoko: "rong atus wolung puluh papat", krama: "kalih atus wolung dasa sekawan", "krama-inggil": "kalih atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh lima", "285"], en: ["two hundred eighty-five", "285"], zh: ["二百八十五"] },
    translation: { ngoko: "rong atus wolung puluh lima", krama: "kalih atus wolung dasa gangsal", "krama-inggil": "kalih atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh enam", "286"], en: ["two hundred eighty-six", "286"], zh: ["二百八十六"] },
    translation: { ngoko: "rong atus wolung puluh enem", krama: "kalih atus wolung dasa enem", "krama-inggil": "kalih atus wolung dasa enem" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh tujuh", "287"], en: ["two hundred eighty-seven", "287"], zh: ["二百八十七"] },
    translation: { ngoko: "rong atus wolung puluh pitu", krama: "kalih atus wolung dasa pitu", "krama-inggil": "kalih atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh delapan", "288"], en: ["two hundred eighty-eight", "288"], zh: ["二百八十八"] },
    translation: { ngoko: "rong atus wolung puluh wolu", krama: "kalih atus wolung dasa wolu", "krama-inggil": "kalih atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus delapan puluh sembilan", "289"], en: ["two hundred eighty-nine", "289"], zh: ["二百八十九"] },
    translation: { ngoko: "rong atus wolung puluh sanga", krama: "kalih atus wolung dasa sanga", "krama-inggil": "kalih atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh", "290"], en: ["two hundred ninety", "290"], zh: ["二百九十"] },
    translation: { ngoko: "rong atus sangang puluh", krama: "kalih atus sangang dasa", "krama-inggil": "kalih atus sangang dasa" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh satu", "291"], en: ["two hundred ninety-one", "291"], zh: ["二百九十一"] },
    translation: { ngoko: "rong atus sangang puluh siji", krama: "kalih atus sangang dasa setunggal", "krama-inggil": "kalih atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh dua", "292"], en: ["two hundred ninety-two", "292"], zh: ["二百九十二"] },
    translation: { ngoko: "rong atus sangang puluh loro", krama: "kalih atus sangang dasa kalih", "krama-inggil": "kalih atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh tiga", "293"], en: ["two hundred ninety-three", "293"], zh: ["二百九十三"] },
    translation: { ngoko: "rong atus sangang puluh telu", krama: "kalih atus sangang dasa tiga", "krama-inggil": "kalih atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh empat", "294"], en: ["two hundred ninety-four", "294"], zh: ["二百九十四"] },
    translation: { ngoko: "rong atus sangang puluh papat", krama: "kalih atus sangang dasa sekawan", "krama-inggil": "kalih atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh lima", "295"], en: ["two hundred ninety-five", "295"], zh: ["二百九十五"] },
    translation: { ngoko: "rong atus sangang puluh lima", krama: "kalih atus sangang dasa gangsal", "krama-inggil": "kalih atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh enam", "296"], en: ["two hundred ninety-six", "296"], zh: ["二百九十六"] },
    translation: { ngoko: "rong atus sangang puluh enem", krama: "kalih atus sangang dasa enem", "krama-inggil": "kalih atus sangang dasa enem" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh tujuh", "297"], en: ["two hundred ninety-seven", "297"], zh: ["二百九十七"] },
    translation: { ngoko: "rong atus sangang puluh pitu", krama: "kalih atus sangang dasa pitu", "krama-inggil": "kalih atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh delapan", "298"], en: ["two hundred ninety-eight", "298"], zh: ["二百九十八"] },
    translation: { ngoko: "rong atus sangang puluh wolu", krama: "kalih atus sangang dasa wolu", "krama-inggil": "kalih atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["dua ratus sembilan puluh sembilan", "299"], en: ["two hundred ninety-nine", "299"], zh: ["二百九十九"] },
    translation: { ngoko: "rong atus sangang puluh sanga", krama: "kalih atus sangang dasa sanga", "krama-inggil": "kalih atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus", "300"], en: ["three hundred", "300"], zh: ["三百"] },
    translation: { ngoko: "telung atus", krama: "tigang atus", "krama-inggil": "tigang atus" },
  },
  {
    aliases: { id: ["tiga ratus satu", "301"], en: ["three hundred one", "301"], zh: ["三百零一"] },
    translation: { ngoko: "telung atus siji", krama: "tigang atus setunggal", "krama-inggil": "tigang atus setunggal" },
  },
  {
    aliases: { id: ["tiga ratus dua", "302"], en: ["three hundred two", "302"], zh: ["三百零二"] },
    translation: { ngoko: "telung atus loro", krama: "tigang atus kalih", "krama-inggil": "tigang atus kalih" },
  },
  {
    aliases: { id: ["tiga ratus tiga", "303"], en: ["three hundred three", "303"], zh: ["三百零三"] },
    translation: { ngoko: "telung atus telu", krama: "tigang atus tiga", "krama-inggil": "tigang atus tiga" },
  },
  {
    aliases: { id: ["tiga ratus empat", "304"], en: ["three hundred four", "304"], zh: ["三百零四"] },
    translation: { ngoko: "telung atus papat", krama: "tigang atus sekawan", "krama-inggil": "tigang atus sekawan" },
  },
  {
    aliases: { id: ["tiga ratus lima", "305"], en: ["three hundred five", "305"], zh: ["三百零五"] },
    translation: { ngoko: "telung atus lima", krama: "tigang atus gangsal", "krama-inggil": "tigang atus gangsal" },
  },
  {
    aliases: { id: ["tiga ratus enam", "306"], en: ["three hundred six", "306"], zh: ["三百零六"] },
    translation: { ngoko: "telung atus enem", krama: "tigang atus enem", "krama-inggil": "tigang atus enem" },
  },
  {
    aliases: { id: ["tiga ratus tujuh", "307"], en: ["three hundred seven", "307"], zh: ["三百零七"] },
    translation: { ngoko: "telung atus pitu", krama: "tigang atus pitu", "krama-inggil": "tigang atus pitu" },
  },
  {
    aliases: { id: ["tiga ratus delapan", "308"], en: ["three hundred eight", "308"], zh: ["三百零八"] },
    translation: { ngoko: "telung atus wolu", krama: "tigang atus wolu", "krama-inggil": "tigang atus wolu" },
  },
  {
    aliases: { id: ["tiga ratus sembilan", "309"], en: ["three hundred nine", "309"], zh: ["三百零九"] },
    translation: { ngoko: "telung atus sanga", krama: "tigang atus sanga", "krama-inggil": "tigang atus sanga" },
  },
  {
    aliases: { id: ["tiga ratus sepuluh", "310"], en: ["three hundred ten", "310"], zh: ["三百十"] },
    translation: { ngoko: "telung atus sepuluh", krama: "tigang atus sedasa", "krama-inggil": "tigang atus sedasa" },
  },
  {
    aliases: { id: ["tiga ratus sebelas", "311"], en: ["three hundred eleven", "311"], zh: ["三百十一"] },
    translation: { ngoko: "telung atus sewelas", krama: "tigang atus sewelas", "krama-inggil": "tigang atus sewelas" },
  },
  {
    aliases: { id: ["tiga ratus dua belas", "312"], en: ["three hundred twelve", "312"], zh: ["三百十二"] },
    translation: { ngoko: "telung atus rolas", krama: "tigang atus kalih welas", "krama-inggil": "tigang atus kalih welas" },
  },
  {
    aliases: { id: ["tiga ratus tiga belas", "313"], en: ["three hundred thirteen", "313"], zh: ["三百十三"] },
    translation: { ngoko: "telung atus telulas", krama: "tigang atus tiga welas", "krama-inggil": "tigang atus tiga welas" },
  },
  {
    aliases: { id: ["tiga ratus empat belas", "314"], en: ["three hundred fourteen", "314"], zh: ["三百十四"] },
    translation: { ngoko: "telung atus patbelas", krama: "tigang atus sekawan welas", "krama-inggil": "tigang atus sekawan welas" },
  },
  {
    aliases: { id: ["tiga ratus lima belas", "315"], en: ["three hundred fifteen", "315"], zh: ["三百十五"] },
    translation: { ngoko: "telung atus limolas", krama: "tigang atus gangsal welas", "krama-inggil": "tigang atus gangsal welas" },
  },
  {
    aliases: { id: ["tiga ratus enam belas", "316"], en: ["three hundred sixteen", "316"], zh: ["三百十六"] },
    translation: { ngoko: "telung atus nembelas", krama: "tigang atus enem welas", "krama-inggil": "tigang atus enem welas" },
  },
  {
    aliases: { id: ["tiga ratus tujuh belas", "317"], en: ["three hundred seventeen", "317"], zh: ["三百十七"] },
    translation: { ngoko: "telung atus pitulas", krama: "tigang atus pitulas", "krama-inggil": "tigang atus pitulas" },
  },
  {
    aliases: { id: ["tiga ratus delapan belas", "318"], en: ["three hundred eighteen", "318"], zh: ["三百十八"] },
    translation: { ngoko: "telung atus wolulas", krama: "tigang atus wolulas", "krama-inggil": "tigang atus wolulas" },
  },
  {
    aliases: { id: ["tiga ratus sembilan belas", "319"], en: ["three hundred nineteen", "319"], zh: ["三百十九"] },
    translation: { ngoko: "telung atus sangalas", krama: "tigang atus sangalas", "krama-inggil": "tigang atus sangalas" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh", "320"], en: ["three hundred twenty", "320"], zh: ["三百二十"] },
    translation: { ngoko: "telung atus rong puluh", krama: "tigang atus kalih dasa", "krama-inggil": "tigang atus kalih dasa" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh satu", "321"], en: ["three hundred twenty-one", "321"], zh: ["三百二十一"] },
    translation: { ngoko: "telung atus selikur", krama: "tigang atus kalih dasa setunggal", "krama-inggil": "tigang atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh dua", "322"], en: ["three hundred twenty-two", "322"], zh: ["三百二十二"] },
    translation: { ngoko: "telung atus rolikur", krama: "tigang atus kalih dasa kalih", "krama-inggil": "tigang atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh tiga", "323"], en: ["three hundred twenty-three", "323"], zh: ["三百二十三"] },
    translation: { ngoko: "telung atus telulikur", krama: "tigang atus kalih dasa tiga", "krama-inggil": "tigang atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh empat", "324"], en: ["three hundred twenty-four", "324"], zh: ["三百二十四"] },
    translation: { ngoko: "telung atus patlikur", krama: "tigang atus kalih dasa sekawan", "krama-inggil": "tigang atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh lima", "325"], en: ["three hundred twenty-five", "325"], zh: ["三百二十五"] },
    translation: { ngoko: "telung atus selawe", krama: "tigang atus selangkung", "krama-inggil": "tigang atus selangkung" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh enam", "326"], en: ["three hundred twenty-six", "326"], zh: ["三百二十六"] },
    translation: { ngoko: "telung atus nemlikur", krama: "tigang atus kalih dasa enem", "krama-inggil": "tigang atus kalih dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh tujuh", "327"], en: ["three hundred twenty-seven", "327"], zh: ["三百二十七"] },
    translation: { ngoko: "telung atus pitulikur", krama: "tigang atus kalih dasa pitu", "krama-inggil": "tigang atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh delapan", "328"], en: ["three hundred twenty-eight", "328"], zh: ["三百二十八"] },
    translation: { ngoko: "telung atus wolulikur", krama: "tigang atus kalih dasa wolu", "krama-inggil": "tigang atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus dua puluh sembilan", "329"], en: ["three hundred twenty-nine", "329"], zh: ["三百二十九"] },
    translation: { ngoko: "telung atus sangalikur", krama: "tigang atus kalih dasa sanga", "krama-inggil": "tigang atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh", "330"], en: ["three hundred thirty", "330"], zh: ["三百三十"] },
    translation: { ngoko: "telung atus telung puluh", krama: "tigang atus tigang dasa", "krama-inggil": "tigang atus tigang dasa" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh satu", "331"], en: ["three hundred thirty-one", "331"], zh: ["三百三十一"] },
    translation: { ngoko: "telung atus telung puluh siji", krama: "tigang atus tigang dasa setunggal", "krama-inggil": "tigang atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh dua", "332"], en: ["three hundred thirty-two", "332"], zh: ["三百三十二"] },
    translation: { ngoko: "telung atus telung puluh loro", krama: "tigang atus tigang dasa kalih", "krama-inggil": "tigang atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh tiga", "333"], en: ["three hundred thirty-three", "333"], zh: ["三百三十三"] },
    translation: { ngoko: "telung atus telung puluh telu", krama: "tigang atus tigang dasa tiga", "krama-inggil": "tigang atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh empat", "334"], en: ["three hundred thirty-four", "334"], zh: ["三百三十四"] },
    translation: { ngoko: "telung atus telung puluh papat", krama: "tigang atus tigang dasa sekawan", "krama-inggil": "tigang atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh lima", "335"], en: ["three hundred thirty-five", "335"], zh: ["三百三十五"] },
    translation: { ngoko: "telung atus telung puluh lima", krama: "tigang atus tigang dasa gangsal", "krama-inggil": "tigang atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh enam", "336"], en: ["three hundred thirty-six", "336"], zh: ["三百三十六"] },
    translation: { ngoko: "telung atus telung puluh enem", krama: "tigang atus tigang dasa enem", "krama-inggil": "tigang atus tigang dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh tujuh", "337"], en: ["three hundred thirty-seven", "337"], zh: ["三百三十七"] },
    translation: { ngoko: "telung atus telung puluh pitu", krama: "tigang atus tigang dasa pitu", "krama-inggil": "tigang atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh delapan", "338"], en: ["three hundred thirty-eight", "338"], zh: ["三百三十八"] },
    translation: { ngoko: "telung atus telung puluh wolu", krama: "tigang atus tigang dasa wolu", "krama-inggil": "tigang atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus tiga puluh sembilan", "339"], en: ["three hundred thirty-nine", "339"], zh: ["三百三十九"] },
    translation: { ngoko: "telung atus telung puluh sanga", krama: "tigang atus tigang dasa sanga", "krama-inggil": "tigang atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh", "340"], en: ["three hundred forty", "340"], zh: ["三百四十"] },
    translation: { ngoko: "telung atus patang puluh", krama: "tigang atus sekawan dasa", "krama-inggil": "tigang atus sekawan dasa" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh satu", "341"], en: ["three hundred forty-one", "341"], zh: ["三百四十一"] },
    translation: { ngoko: "telung atus patang puluh siji", krama: "tigang atus sekawan dasa setunggal", "krama-inggil": "tigang atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh dua", "342"], en: ["three hundred forty-two", "342"], zh: ["三百四十二"] },
    translation: { ngoko: "telung atus patang puluh loro", krama: "tigang atus sekawan dasa kalih", "krama-inggil": "tigang atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh tiga", "343"], en: ["three hundred forty-three", "343"], zh: ["三百四十三"] },
    translation: { ngoko: "telung atus patang puluh telu", krama: "tigang atus sekawan dasa tiga", "krama-inggil": "tigang atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh empat", "344"], en: ["three hundred forty-four", "344"], zh: ["三百四十四"] },
    translation: { ngoko: "telung atus patang puluh papat", krama: "tigang atus sekawan dasa sekawan", "krama-inggil": "tigang atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh lima", "345"], en: ["three hundred forty-five", "345"], zh: ["三百四十五"] },
    translation: { ngoko: "telung atus patang puluh lima", krama: "tigang atus sekawan dasa gangsal", "krama-inggil": "tigang atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh enam", "346"], en: ["three hundred forty-six", "346"], zh: ["三百四十六"] },
    translation: { ngoko: "telung atus patang puluh enem", krama: "tigang atus sekawan dasa enem", "krama-inggil": "tigang atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh tujuh", "347"], en: ["three hundred forty-seven", "347"], zh: ["三百四十七"] },
    translation: { ngoko: "telung atus patang puluh pitu", krama: "tigang atus sekawan dasa pitu", "krama-inggil": "tigang atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh delapan", "348"], en: ["three hundred forty-eight", "348"], zh: ["三百四十八"] },
    translation: { ngoko: "telung atus patang puluh wolu", krama: "tigang atus sekawan dasa wolu", "krama-inggil": "tigang atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus empat puluh sembilan", "349"], en: ["three hundred forty-nine", "349"], zh: ["三百四十九"] },
    translation: { ngoko: "telung atus patang puluh sanga", krama: "tigang atus sekawan dasa sanga", "krama-inggil": "tigang atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh", "350"], en: ["three hundred fifty", "350"], zh: ["三百五十"] },
    translation: { ngoko: "telung atus seket", krama: "tigang atus seket", "krama-inggil": "tigang atus seket" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh satu", "351"], en: ["three hundred fifty-one", "351"], zh: ["三百五十一"] },
    translation: { ngoko: "telung atus seket siji", krama: "tigang atus seket setunggal", "krama-inggil": "tigang atus seket setunggal" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh dua", "352"], en: ["three hundred fifty-two", "352"], zh: ["三百五十二"] },
    translation: { ngoko: "telung atus seket loro", krama: "tigang atus seket kalih", "krama-inggil": "tigang atus seket kalih" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh tiga", "353"], en: ["three hundred fifty-three", "353"], zh: ["三百五十三"] },
    translation: { ngoko: "telung atus seket telu", krama: "tigang atus seket tiga", "krama-inggil": "tigang atus seket tiga" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh empat", "354"], en: ["three hundred fifty-four", "354"], zh: ["三百五十四"] },
    translation: { ngoko: "telung atus seket papat", krama: "tigang atus seket sekawan", "krama-inggil": "tigang atus seket sekawan" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh lima", "355"], en: ["three hundred fifty-five", "355"], zh: ["三百五十五"] },
    translation: { ngoko: "telung atus seket lima", krama: "tigang atus seket gangsal", "krama-inggil": "tigang atus seket gangsal" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh enam", "356"], en: ["three hundred fifty-six", "356"], zh: ["三百五十六"] },
    translation: { ngoko: "telung atus seket enem", krama: "tigang atus seket enem", "krama-inggil": "tigang atus seket enem" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh tujuh", "357"], en: ["three hundred fifty-seven", "357"], zh: ["三百五十七"] },
    translation: { ngoko: "telung atus seket pitu", krama: "tigang atus seket pitu", "krama-inggil": "tigang atus seket pitu" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh delapan", "358"], en: ["three hundred fifty-eight", "358"], zh: ["三百五十八"] },
    translation: { ngoko: "telung atus seket wolu", krama: "tigang atus seket wolu", "krama-inggil": "tigang atus seket wolu" },
  },
  {
    aliases: { id: ["tiga ratus lima puluh sembilan", "359"], en: ["three hundred fifty-nine", "359"], zh: ["三百五十九"] },
    translation: { ngoko: "telung atus seket sanga", krama: "tigang atus seket sanga", "krama-inggil": "tigang atus seket sanga" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh", "360"], en: ["three hundred sixty", "360"], zh: ["三百六十"] },
    translation: { ngoko: "telung atus sewidak", krama: "tigang atus sewidak", "krama-inggil": "tigang atus sewidak" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh satu", "361"], en: ["three hundred sixty-one", "361"], zh: ["三百六十一"] },
    translation: { ngoko: "telung atus sewidak siji", krama: "tigang atus sewidak setunggal", "krama-inggil": "tigang atus sewidak setunggal" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh dua", "362"], en: ["three hundred sixty-two", "362"], zh: ["三百六十二"] },
    translation: { ngoko: "telung atus sewidak loro", krama: "tigang atus sewidak kalih", "krama-inggil": "tigang atus sewidak kalih" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh tiga", "363"], en: ["three hundred sixty-three", "363"], zh: ["三百六十三"] },
    translation: { ngoko: "telung atus sewidak telu", krama: "tigang atus sewidak tiga", "krama-inggil": "tigang atus sewidak tiga" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh empat", "364"], en: ["three hundred sixty-four", "364"], zh: ["三百六十四"] },
    translation: { ngoko: "telung atus sewidak papat", krama: "tigang atus sewidak sekawan", "krama-inggil": "tigang atus sewidak sekawan" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh lima", "365"], en: ["three hundred sixty-five", "365"], zh: ["三百六十五"] },
    translation: { ngoko: "telung atus sewidak lima", krama: "tigang atus sewidak gangsal", "krama-inggil": "tigang atus sewidak gangsal" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh enam", "366"], en: ["three hundred sixty-six", "366"], zh: ["三百六十六"] },
    translation: { ngoko: "telung atus sewidak enem", krama: "tigang atus sewidak enem", "krama-inggil": "tigang atus sewidak enem" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh tujuh", "367"], en: ["three hundred sixty-seven", "367"], zh: ["三百六十七"] },
    translation: { ngoko: "telung atus sewidak pitu", krama: "tigang atus sewidak pitu", "krama-inggil": "tigang atus sewidak pitu" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh delapan", "368"], en: ["three hundred sixty-eight", "368"], zh: ["三百六十八"] },
    translation: { ngoko: "telung atus sewidak wolu", krama: "tigang atus sewidak wolu", "krama-inggil": "tigang atus sewidak wolu" },
  },
  {
    aliases: { id: ["tiga ratus enam puluh sembilan", "369"], en: ["three hundred sixty-nine", "369"], zh: ["三百六十九"] },
    translation: { ngoko: "telung atus sewidak sanga", krama: "tigang atus sewidak sanga", "krama-inggil": "tigang atus sewidak sanga" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh", "370"], en: ["three hundred seventy", "370"], zh: ["三百七十"] },
    translation: { ngoko: "telung atus pitung puluh", krama: "tigang atus pitung dasa", "krama-inggil": "tigang atus pitung dasa" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh satu", "371"], en: ["three hundred seventy-one", "371"], zh: ["三百七十一"] },
    translation: { ngoko: "telung atus pitung puluh siji", krama: "tigang atus pitung dasa setunggal", "krama-inggil": "tigang atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh dua", "372"], en: ["three hundred seventy-two", "372"], zh: ["三百七十二"] },
    translation: { ngoko: "telung atus pitung puluh loro", krama: "tigang atus pitung dasa kalih", "krama-inggil": "tigang atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh tiga", "373"], en: ["three hundred seventy-three", "373"], zh: ["三百七十三"] },
    translation: { ngoko: "telung atus pitung puluh telu", krama: "tigang atus pitung dasa tiga", "krama-inggil": "tigang atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh empat", "374"], en: ["three hundred seventy-four", "374"], zh: ["三百七十四"] },
    translation: { ngoko: "telung atus pitung puluh papat", krama: "tigang atus pitung dasa sekawan", "krama-inggil": "tigang atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh lima", "375"], en: ["three hundred seventy-five", "375"], zh: ["三百七十五"] },
    translation: { ngoko: "telung atus pitung puluh lima", krama: "tigang atus pitung dasa gangsal", "krama-inggil": "tigang atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh enam", "376"], en: ["three hundred seventy-six", "376"], zh: ["三百七十六"] },
    translation: { ngoko: "telung atus pitung puluh enem", krama: "tigang atus pitung dasa enem", "krama-inggil": "tigang atus pitung dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh tujuh", "377"], en: ["three hundred seventy-seven", "377"], zh: ["三百七十七"] },
    translation: { ngoko: "telung atus pitung puluh pitu", krama: "tigang atus pitung dasa pitu", "krama-inggil": "tigang atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh delapan", "378"], en: ["three hundred seventy-eight", "378"], zh: ["三百七十八"] },
    translation: { ngoko: "telung atus pitung puluh wolu", krama: "tigang atus pitung dasa wolu", "krama-inggil": "tigang atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus tujuh puluh sembilan", "379"], en: ["three hundred seventy-nine", "379"], zh: ["三百七十九"] },
    translation: { ngoko: "telung atus pitung puluh sanga", krama: "tigang atus pitung dasa sanga", "krama-inggil": "tigang atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh", "380"], en: ["three hundred eighty", "380"], zh: ["三百八十"] },
    translation: { ngoko: "telung atus wolung puluh", krama: "tigang atus wolung dasa", "krama-inggil": "tigang atus wolung dasa" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh satu", "381"], en: ["three hundred eighty-one", "381"], zh: ["三百八十一"] },
    translation: { ngoko: "telung atus wolung puluh siji", krama: "tigang atus wolung dasa setunggal", "krama-inggil": "tigang atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh dua", "382"], en: ["three hundred eighty-two", "382"], zh: ["三百八十二"] },
    translation: { ngoko: "telung atus wolung puluh loro", krama: "tigang atus wolung dasa kalih", "krama-inggil": "tigang atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh tiga", "383"], en: ["three hundred eighty-three", "383"], zh: ["三百八十三"] },
    translation: { ngoko: "telung atus wolung puluh telu", krama: "tigang atus wolung dasa tiga", "krama-inggil": "tigang atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh empat", "384"], en: ["three hundred eighty-four", "384"], zh: ["三百八十四"] },
    translation: { ngoko: "telung atus wolung puluh papat", krama: "tigang atus wolung dasa sekawan", "krama-inggil": "tigang atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh lima", "385"], en: ["three hundred eighty-five", "385"], zh: ["三百八十五"] },
    translation: { ngoko: "telung atus wolung puluh lima", krama: "tigang atus wolung dasa gangsal", "krama-inggil": "tigang atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh enam", "386"], en: ["three hundred eighty-six", "386"], zh: ["三百八十六"] },
    translation: { ngoko: "telung atus wolung puluh enem", krama: "tigang atus wolung dasa enem", "krama-inggil": "tigang atus wolung dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh tujuh", "387"], en: ["three hundred eighty-seven", "387"], zh: ["三百八十七"] },
    translation: { ngoko: "telung atus wolung puluh pitu", krama: "tigang atus wolung dasa pitu", "krama-inggil": "tigang atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh delapan", "388"], en: ["three hundred eighty-eight", "388"], zh: ["三百八十八"] },
    translation: { ngoko: "telung atus wolung puluh wolu", krama: "tigang atus wolung dasa wolu", "krama-inggil": "tigang atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus delapan puluh sembilan", "389"], en: ["three hundred eighty-nine", "389"], zh: ["三百八十九"] },
    translation: { ngoko: "telung atus wolung puluh sanga", krama: "tigang atus wolung dasa sanga", "krama-inggil": "tigang atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh", "390"], en: ["three hundred ninety", "390"], zh: ["三百九十"] },
    translation: { ngoko: "telung atus sangang puluh", krama: "tigang atus sangang dasa", "krama-inggil": "tigang atus sangang dasa" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh satu", "391"], en: ["three hundred ninety-one", "391"], zh: ["三百九十一"] },
    translation: { ngoko: "telung atus sangang puluh siji", krama: "tigang atus sangang dasa setunggal", "krama-inggil": "tigang atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh dua", "392"], en: ["three hundred ninety-two", "392"], zh: ["三百九十二"] },
    translation: { ngoko: "telung atus sangang puluh loro", krama: "tigang atus sangang dasa kalih", "krama-inggil": "tigang atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh tiga", "393"], en: ["three hundred ninety-three", "393"], zh: ["三百九十三"] },
    translation: { ngoko: "telung atus sangang puluh telu", krama: "tigang atus sangang dasa tiga", "krama-inggil": "tigang atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh empat", "394"], en: ["three hundred ninety-four", "394"], zh: ["三百九十四"] },
    translation: { ngoko: "telung atus sangang puluh papat", krama: "tigang atus sangang dasa sekawan", "krama-inggil": "tigang atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh lima", "395"], en: ["three hundred ninety-five", "395"], zh: ["三百九十五"] },
    translation: { ngoko: "telung atus sangang puluh lima", krama: "tigang atus sangang dasa gangsal", "krama-inggil": "tigang atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh enam", "396"], en: ["three hundred ninety-six", "396"], zh: ["三百九十六"] },
    translation: { ngoko: "telung atus sangang puluh enem", krama: "tigang atus sangang dasa enem", "krama-inggil": "tigang atus sangang dasa enem" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh tujuh", "397"], en: ["three hundred ninety-seven", "397"], zh: ["三百九十七"] },
    translation: { ngoko: "telung atus sangang puluh pitu", krama: "tigang atus sangang dasa pitu", "krama-inggil": "tigang atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh delapan", "398"], en: ["three hundred ninety-eight", "398"], zh: ["三百九十八"] },
    translation: { ngoko: "telung atus sangang puluh wolu", krama: "tigang atus sangang dasa wolu", "krama-inggil": "tigang atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["tiga ratus sembilan puluh sembilan", "399"], en: ["three hundred ninety-nine", "399"], zh: ["三百九十九"] },
    translation: { ngoko: "telung atus sangang puluh sanga", krama: "tigang atus sangang dasa sanga", "krama-inggil": "tigang atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus", "400"], en: ["four hundred", "400"], zh: ["四百"] },
    translation: { ngoko: "patang atus", krama: "sekawan atus", "krama-inggil": "sekawan atus" },
  },
  {
    aliases: { id: ["empat ratus satu", "401"], en: ["four hundred one", "401"], zh: ["四百零一"] },
    translation: { ngoko: "patang atus siji", krama: "sekawan atus setunggal", "krama-inggil": "sekawan atus setunggal" },
  },
  {
    aliases: { id: ["empat ratus dua", "402"], en: ["four hundred two", "402"], zh: ["四百零二"] },
    translation: { ngoko: "patang atus loro", krama: "sekawan atus kalih", "krama-inggil": "sekawan atus kalih" },
  },
  {
    aliases: { id: ["empat ratus tiga", "403"], en: ["four hundred three", "403"], zh: ["四百零三"] },
    translation: { ngoko: "patang atus telu", krama: "sekawan atus tiga", "krama-inggil": "sekawan atus tiga" },
  },
  {
    aliases: { id: ["empat ratus empat", "404"], en: ["four hundred four", "404"], zh: ["四百零四"] },
    translation: { ngoko: "patang atus papat", krama: "sekawan atus sekawan", "krama-inggil": "sekawan atus sekawan" },
  },
  {
    aliases: { id: ["empat ratus lima", "405"], en: ["four hundred five", "405"], zh: ["四百零五"] },
    translation: { ngoko: "patang atus lima", krama: "sekawan atus gangsal", "krama-inggil": "sekawan atus gangsal" },
  },
  {
    aliases: { id: ["empat ratus enam", "406"], en: ["four hundred six", "406"], zh: ["四百零六"] },
    translation: { ngoko: "patang atus enem", krama: "sekawan atus enem", "krama-inggil": "sekawan atus enem" },
  },
  {
    aliases: { id: ["empat ratus tujuh", "407"], en: ["four hundred seven", "407"], zh: ["四百零七"] },
    translation: { ngoko: "patang atus pitu", krama: "sekawan atus pitu", "krama-inggil": "sekawan atus pitu" },
  },
  {
    aliases: { id: ["empat ratus delapan", "408"], en: ["four hundred eight", "408"], zh: ["四百零八"] },
    translation: { ngoko: "patang atus wolu", krama: "sekawan atus wolu", "krama-inggil": "sekawan atus wolu" },
  },
  {
    aliases: { id: ["empat ratus sembilan", "409"], en: ["four hundred nine", "409"], zh: ["四百零九"] },
    translation: { ngoko: "patang atus sanga", krama: "sekawan atus sanga", "krama-inggil": "sekawan atus sanga" },
  },
  {
    aliases: { id: ["empat ratus sepuluh", "410"], en: ["four hundred ten", "410"], zh: ["四百十"] },
    translation: { ngoko: "patang atus sepuluh", krama: "sekawan atus sedasa", "krama-inggil": "sekawan atus sedasa" },
  },
  {
    aliases: { id: ["empat ratus sebelas", "411"], en: ["four hundred eleven", "411"], zh: ["四百十一"] },
    translation: { ngoko: "patang atus sewelas", krama: "sekawan atus sewelas", "krama-inggil": "sekawan atus sewelas" },
  },
  {
    aliases: { id: ["empat ratus dua belas", "412"], en: ["four hundred twelve", "412"], zh: ["四百十二"] },
    translation: { ngoko: "patang atus rolas", krama: "sekawan atus kalih welas", "krama-inggil": "sekawan atus kalih welas" },
  },
  {
    aliases: { id: ["empat ratus tiga belas", "413"], en: ["four hundred thirteen", "413"], zh: ["四百十三"] },
    translation: { ngoko: "patang atus telulas", krama: "sekawan atus tiga welas", "krama-inggil": "sekawan atus tiga welas" },
  },
  {
    aliases: { id: ["empat ratus empat belas", "414"], en: ["four hundred fourteen", "414"], zh: ["四百十四"] },
    translation: { ngoko: "patang atus patbelas", krama: "sekawan atus sekawan welas", "krama-inggil": "sekawan atus sekawan welas" },
  },
  {
    aliases: { id: ["empat ratus lima belas", "415"], en: ["four hundred fifteen", "415"], zh: ["四百十五"] },
    translation: { ngoko: "patang atus limolas", krama: "sekawan atus gangsal welas", "krama-inggil": "sekawan atus gangsal welas" },
  },
  {
    aliases: { id: ["empat ratus enam belas", "416"], en: ["four hundred sixteen", "416"], zh: ["四百十六"] },
    translation: { ngoko: "patang atus nembelas", krama: "sekawan atus enem welas", "krama-inggil": "sekawan atus enem welas" },
  },
  {
    aliases: { id: ["empat ratus tujuh belas", "417"], en: ["four hundred seventeen", "417"], zh: ["四百十七"] },
    translation: { ngoko: "patang atus pitulas", krama: "sekawan atus pitulas", "krama-inggil": "sekawan atus pitulas" },
  },
  {
    aliases: { id: ["empat ratus delapan belas", "418"], en: ["four hundred eighteen", "418"], zh: ["四百十八"] },
    translation: { ngoko: "patang atus wolulas", krama: "sekawan atus wolulas", "krama-inggil": "sekawan atus wolulas" },
  },
  {
    aliases: { id: ["empat ratus sembilan belas", "419"], en: ["four hundred nineteen", "419"], zh: ["四百十九"] },
    translation: { ngoko: "patang atus sangalas", krama: "sekawan atus sangalas", "krama-inggil": "sekawan atus sangalas" },
  },
  {
    aliases: { id: ["empat ratus dua puluh", "420"], en: ["four hundred twenty", "420"], zh: ["四百二十"] },
    translation: { ngoko: "patang atus rong puluh", krama: "sekawan atus kalih dasa", "krama-inggil": "sekawan atus kalih dasa" },
  },
  {
    aliases: { id: ["empat ratus dua puluh satu", "421"], en: ["four hundred twenty-one", "421"], zh: ["四百二十一"] },
    translation: { ngoko: "patang atus selikur", krama: "sekawan atus kalih dasa setunggal", "krama-inggil": "sekawan atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus dua puluh dua", "422"], en: ["four hundred twenty-two", "422"], zh: ["四百二十二"] },
    translation: { ngoko: "patang atus rolikur", krama: "sekawan atus kalih dasa kalih", "krama-inggil": "sekawan atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus dua puluh tiga", "423"], en: ["four hundred twenty-three", "423"], zh: ["四百二十三"] },
    translation: { ngoko: "patang atus telulikur", krama: "sekawan atus kalih dasa tiga", "krama-inggil": "sekawan atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus dua puluh empat", "424"], en: ["four hundred twenty-four", "424"], zh: ["四百二十四"] },
    translation: { ngoko: "patang atus patlikur", krama: "sekawan atus kalih dasa sekawan", "krama-inggil": "sekawan atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus dua puluh lima", "425"], en: ["four hundred twenty-five", "425"], zh: ["四百二十五"] },
    translation: { ngoko: "patang atus selawe", krama: "sekawan atus selangkung", "krama-inggil": "sekawan atus selangkung" },
  },
  {
    aliases: { id: ["empat ratus dua puluh enam", "426"], en: ["four hundred twenty-six", "426"], zh: ["四百二十六"] },
    translation: { ngoko: "patang atus nemlikur", krama: "sekawan atus kalih dasa enem", "krama-inggil": "sekawan atus kalih dasa enem" },
  },
  {
    aliases: { id: ["empat ratus dua puluh tujuh", "427"], en: ["four hundred twenty-seven", "427"], zh: ["四百二十七"] },
    translation: { ngoko: "patang atus pitulikur", krama: "sekawan atus kalih dasa pitu", "krama-inggil": "sekawan atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus dua puluh delapan", "428"], en: ["four hundred twenty-eight", "428"], zh: ["四百二十八"] },
    translation: { ngoko: "patang atus wolulikur", krama: "sekawan atus kalih dasa wolu", "krama-inggil": "sekawan atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus dua puluh sembilan", "429"], en: ["four hundred twenty-nine", "429"], zh: ["四百二十九"] },
    translation: { ngoko: "patang atus sangalikur", krama: "sekawan atus kalih dasa sanga", "krama-inggil": "sekawan atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh", "430"], en: ["four hundred thirty", "430"], zh: ["四百三十"] },
    translation: { ngoko: "patang atus telung puluh", krama: "sekawan atus tigang dasa", "krama-inggil": "sekawan atus tigang dasa" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh satu", "431"], en: ["four hundred thirty-one", "431"], zh: ["四百三十一"] },
    translation: { ngoko: "patang atus telung puluh siji", krama: "sekawan atus tigang dasa setunggal", "krama-inggil": "sekawan atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh dua", "432"], en: ["four hundred thirty-two", "432"], zh: ["四百三十二"] },
    translation: { ngoko: "patang atus telung puluh loro", krama: "sekawan atus tigang dasa kalih", "krama-inggil": "sekawan atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh tiga", "433"], en: ["four hundred thirty-three", "433"], zh: ["四百三十三"] },
    translation: { ngoko: "patang atus telung puluh telu", krama: "sekawan atus tigang dasa tiga", "krama-inggil": "sekawan atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh empat", "434"], en: ["four hundred thirty-four", "434"], zh: ["四百三十四"] },
    translation: { ngoko: "patang atus telung puluh papat", krama: "sekawan atus tigang dasa sekawan", "krama-inggil": "sekawan atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh lima", "435"], en: ["four hundred thirty-five", "435"], zh: ["四百三十五"] },
    translation: { ngoko: "patang atus telung puluh lima", krama: "sekawan atus tigang dasa gangsal", "krama-inggil": "sekawan atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh enam", "436"], en: ["four hundred thirty-six", "436"], zh: ["四百三十六"] },
    translation: { ngoko: "patang atus telung puluh enem", krama: "sekawan atus tigang dasa enem", "krama-inggil": "sekawan atus tigang dasa enem" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh tujuh", "437"], en: ["four hundred thirty-seven", "437"], zh: ["四百三十七"] },
    translation: { ngoko: "patang atus telung puluh pitu", krama: "sekawan atus tigang dasa pitu", "krama-inggil": "sekawan atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh delapan", "438"], en: ["four hundred thirty-eight", "438"], zh: ["四百三十八"] },
    translation: { ngoko: "patang atus telung puluh wolu", krama: "sekawan atus tigang dasa wolu", "krama-inggil": "sekawan atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus tiga puluh sembilan", "439"], en: ["four hundred thirty-nine", "439"], zh: ["四百三十九"] },
    translation: { ngoko: "patang atus telung puluh sanga", krama: "sekawan atus tigang dasa sanga", "krama-inggil": "sekawan atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus empat puluh", "440"], en: ["four hundred forty", "440"], zh: ["四百四十"] },
    translation: { ngoko: "patang atus patang puluh", krama: "sekawan atus sekawan dasa", "krama-inggil": "sekawan atus sekawan dasa" },
  },
  {
    aliases: { id: ["empat ratus empat puluh satu", "441"], en: ["four hundred forty-one", "441"], zh: ["四百四十一"] },
    translation: { ngoko: "patang atus patang puluh siji", krama: "sekawan atus sekawan dasa setunggal", "krama-inggil": "sekawan atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus empat puluh dua", "442"], en: ["four hundred forty-two", "442"], zh: ["四百四十二"] },
    translation: { ngoko: "patang atus patang puluh loro", krama: "sekawan atus sekawan dasa kalih", "krama-inggil": "sekawan atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus empat puluh tiga", "443"], en: ["four hundred forty-three", "443"], zh: ["四百四十三"] },
    translation: { ngoko: "patang atus patang puluh telu", krama: "sekawan atus sekawan dasa tiga", "krama-inggil": "sekawan atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus empat puluh empat", "444"], en: ["four hundred forty-four", "444"], zh: ["四百四十四"] },
    translation: { ngoko: "patang atus patang puluh papat", krama: "sekawan atus sekawan dasa sekawan", "krama-inggil": "sekawan atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus empat puluh lima", "445"], en: ["four hundred forty-five", "445"], zh: ["四百四十五"] },
    translation: { ngoko: "patang atus patang puluh lima", krama: "sekawan atus sekawan dasa gangsal", "krama-inggil": "sekawan atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["empat ratus empat puluh enam", "446"], en: ["four hundred forty-six", "446"], zh: ["四百四十六"] },
    translation: { ngoko: "patang atus patang puluh enem", krama: "sekawan atus sekawan dasa enem", "krama-inggil": "sekawan atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["empat ratus empat puluh tujuh", "447"], en: ["four hundred forty-seven", "447"], zh: ["四百四十七"] },
    translation: { ngoko: "patang atus patang puluh pitu", krama: "sekawan atus sekawan dasa pitu", "krama-inggil": "sekawan atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus empat puluh delapan", "448"], en: ["four hundred forty-eight", "448"], zh: ["四百四十八"] },
    translation: { ngoko: "patang atus patang puluh wolu", krama: "sekawan atus sekawan dasa wolu", "krama-inggil": "sekawan atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus empat puluh sembilan", "449"], en: ["four hundred forty-nine", "449"], zh: ["四百四十九"] },
    translation: { ngoko: "patang atus patang puluh sanga", krama: "sekawan atus sekawan dasa sanga", "krama-inggil": "sekawan atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus lima puluh", "450"], en: ["four hundred fifty", "450"], zh: ["四百五十"] },
    translation: { ngoko: "patang atus seket", krama: "sekawan atus seket", "krama-inggil": "sekawan atus seket" },
  },
  {
    aliases: { id: ["empat ratus lima puluh satu", "451"], en: ["four hundred fifty-one", "451"], zh: ["四百五十一"] },
    translation: { ngoko: "patang atus seket siji", krama: "sekawan atus seket setunggal", "krama-inggil": "sekawan atus seket setunggal" },
  },
  {
    aliases: { id: ["empat ratus lima puluh dua", "452"], en: ["four hundred fifty-two", "452"], zh: ["四百五十二"] },
    translation: { ngoko: "patang atus seket loro", krama: "sekawan atus seket kalih", "krama-inggil": "sekawan atus seket kalih" },
  },
  {
    aliases: { id: ["empat ratus lima puluh tiga", "453"], en: ["four hundred fifty-three", "453"], zh: ["四百五十三"] },
    translation: { ngoko: "patang atus seket telu", krama: "sekawan atus seket tiga", "krama-inggil": "sekawan atus seket tiga" },
  },
  {
    aliases: { id: ["empat ratus lima puluh empat", "454"], en: ["four hundred fifty-four", "454"], zh: ["四百五十四"] },
    translation: { ngoko: "patang atus seket papat", krama: "sekawan atus seket sekawan", "krama-inggil": "sekawan atus seket sekawan" },
  },
  {
    aliases: { id: ["empat ratus lima puluh lima", "455"], en: ["four hundred fifty-five", "455"], zh: ["四百五十五"] },
    translation: { ngoko: "patang atus seket lima", krama: "sekawan atus seket gangsal", "krama-inggil": "sekawan atus seket gangsal" },
  },
  {
    aliases: { id: ["empat ratus lima puluh enam", "456"], en: ["four hundred fifty-six", "456"], zh: ["四百五十六"] },
    translation: { ngoko: "patang atus seket enem", krama: "sekawan atus seket enem", "krama-inggil": "sekawan atus seket enem" },
  },
  {
    aliases: { id: ["empat ratus lima puluh tujuh", "457"], en: ["four hundred fifty-seven", "457"], zh: ["四百五十七"] },
    translation: { ngoko: "patang atus seket pitu", krama: "sekawan atus seket pitu", "krama-inggil": "sekawan atus seket pitu" },
  },
  {
    aliases: { id: ["empat ratus lima puluh delapan", "458"], en: ["four hundred fifty-eight", "458"], zh: ["四百五十八"] },
    translation: { ngoko: "patang atus seket wolu", krama: "sekawan atus seket wolu", "krama-inggil": "sekawan atus seket wolu" },
  },
  {
    aliases: { id: ["empat ratus lima puluh sembilan", "459"], en: ["four hundred fifty-nine", "459"], zh: ["四百五十九"] },
    translation: { ngoko: "patang atus seket sanga", krama: "sekawan atus seket sanga", "krama-inggil": "sekawan atus seket sanga" },
  },
  {
    aliases: { id: ["empat ratus enam puluh", "460"], en: ["four hundred sixty", "460"], zh: ["四百六十"] },
    translation: { ngoko: "patang atus sewidak", krama: "sekawan atus sewidak", "krama-inggil": "sekawan atus sewidak" },
  },
  {
    aliases: { id: ["empat ratus enam puluh satu", "461"], en: ["four hundred sixty-one", "461"], zh: ["四百六十一"] },
    translation: { ngoko: "patang atus sewidak siji", krama: "sekawan atus sewidak setunggal", "krama-inggil": "sekawan atus sewidak setunggal" },
  },
  {
    aliases: { id: ["empat ratus enam puluh dua", "462"], en: ["four hundred sixty-two", "462"], zh: ["四百六十二"] },
    translation: { ngoko: "patang atus sewidak loro", krama: "sekawan atus sewidak kalih", "krama-inggil": "sekawan atus sewidak kalih" },
  },
  {
    aliases: { id: ["empat ratus enam puluh tiga", "463"], en: ["four hundred sixty-three", "463"], zh: ["四百六十三"] },
    translation: { ngoko: "patang atus sewidak telu", krama: "sekawan atus sewidak tiga", "krama-inggil": "sekawan atus sewidak tiga" },
  },
  {
    aliases: { id: ["empat ratus enam puluh empat", "464"], en: ["four hundred sixty-four", "464"], zh: ["四百六十四"] },
    translation: { ngoko: "patang atus sewidak papat", krama: "sekawan atus sewidak sekawan", "krama-inggil": "sekawan atus sewidak sekawan" },
  },
  {
    aliases: { id: ["empat ratus enam puluh lima", "465"], en: ["four hundred sixty-five", "465"], zh: ["四百六十五"] },
    translation: { ngoko: "patang atus sewidak lima", krama: "sekawan atus sewidak gangsal", "krama-inggil": "sekawan atus sewidak gangsal" },
  },
  {
    aliases: { id: ["empat ratus enam puluh enam", "466"], en: ["four hundred sixty-six", "466"], zh: ["四百六十六"] },
    translation: { ngoko: "patang atus sewidak enem", krama: "sekawan atus sewidak enem", "krama-inggil": "sekawan atus sewidak enem" },
  },
  {
    aliases: { id: ["empat ratus enam puluh tujuh", "467"], en: ["four hundred sixty-seven", "467"], zh: ["四百六十七"] },
    translation: { ngoko: "patang atus sewidak pitu", krama: "sekawan atus sewidak pitu", "krama-inggil": "sekawan atus sewidak pitu" },
  },
  {
    aliases: { id: ["empat ratus enam puluh delapan", "468"], en: ["four hundred sixty-eight", "468"], zh: ["四百六十八"] },
    translation: { ngoko: "patang atus sewidak wolu", krama: "sekawan atus sewidak wolu", "krama-inggil": "sekawan atus sewidak wolu" },
  },
  {
    aliases: { id: ["empat ratus enam puluh sembilan", "469"], en: ["four hundred sixty-nine", "469"], zh: ["四百六十九"] },
    translation: { ngoko: "patang atus sewidak sanga", krama: "sekawan atus sewidak sanga", "krama-inggil": "sekawan atus sewidak sanga" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh", "470"], en: ["four hundred seventy", "470"], zh: ["四百七十"] },
    translation: { ngoko: "patang atus pitung puluh", krama: "sekawan atus pitung dasa", "krama-inggil": "sekawan atus pitung dasa" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh satu", "471"], en: ["four hundred seventy-one", "471"], zh: ["四百七十一"] },
    translation: { ngoko: "patang atus pitung puluh siji", krama: "sekawan atus pitung dasa setunggal", "krama-inggil": "sekawan atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh dua", "472"], en: ["four hundred seventy-two", "472"], zh: ["四百七十二"] },
    translation: { ngoko: "patang atus pitung puluh loro", krama: "sekawan atus pitung dasa kalih", "krama-inggil": "sekawan atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh tiga", "473"], en: ["four hundred seventy-three", "473"], zh: ["四百七十三"] },
    translation: { ngoko: "patang atus pitung puluh telu", krama: "sekawan atus pitung dasa tiga", "krama-inggil": "sekawan atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh empat", "474"], en: ["four hundred seventy-four", "474"], zh: ["四百七十四"] },
    translation: { ngoko: "patang atus pitung puluh papat", krama: "sekawan atus pitung dasa sekawan", "krama-inggil": "sekawan atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh lima", "475"], en: ["four hundred seventy-five", "475"], zh: ["四百七十五"] },
    translation: { ngoko: "patang atus pitung puluh lima", krama: "sekawan atus pitung dasa gangsal", "krama-inggil": "sekawan atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh enam", "476"], en: ["four hundred seventy-six", "476"], zh: ["四百七十六"] },
    translation: { ngoko: "patang atus pitung puluh enem", krama: "sekawan atus pitung dasa enem", "krama-inggil": "sekawan atus pitung dasa enem" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh tujuh", "477"], en: ["four hundred seventy-seven", "477"], zh: ["四百七十七"] },
    translation: { ngoko: "patang atus pitung puluh pitu", krama: "sekawan atus pitung dasa pitu", "krama-inggil": "sekawan atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh delapan", "478"], en: ["four hundred seventy-eight", "478"], zh: ["四百七十八"] },
    translation: { ngoko: "patang atus pitung puluh wolu", krama: "sekawan atus pitung dasa wolu", "krama-inggil": "sekawan atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus tujuh puluh sembilan", "479"], en: ["four hundred seventy-nine", "479"], zh: ["四百七十九"] },
    translation: { ngoko: "patang atus pitung puluh sanga", krama: "sekawan atus pitung dasa sanga", "krama-inggil": "sekawan atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh", "480"], en: ["four hundred eighty", "480"], zh: ["四百八十"] },
    translation: { ngoko: "patang atus wolung puluh", krama: "sekawan atus wolung dasa", "krama-inggil": "sekawan atus wolung dasa" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh satu", "481"], en: ["four hundred eighty-one", "481"], zh: ["四百八十一"] },
    translation: { ngoko: "patang atus wolung puluh siji", krama: "sekawan atus wolung dasa setunggal", "krama-inggil": "sekawan atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh dua", "482"], en: ["four hundred eighty-two", "482"], zh: ["四百八十二"] },
    translation: { ngoko: "patang atus wolung puluh loro", krama: "sekawan atus wolung dasa kalih", "krama-inggil": "sekawan atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh tiga", "483"], en: ["four hundred eighty-three", "483"], zh: ["四百八十三"] },
    translation: { ngoko: "patang atus wolung puluh telu", krama: "sekawan atus wolung dasa tiga", "krama-inggil": "sekawan atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh empat", "484"], en: ["four hundred eighty-four", "484"], zh: ["四百八十四"] },
    translation: { ngoko: "patang atus wolung puluh papat", krama: "sekawan atus wolung dasa sekawan", "krama-inggil": "sekawan atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh lima", "485"], en: ["four hundred eighty-five", "485"], zh: ["四百八十五"] },
    translation: { ngoko: "patang atus wolung puluh lima", krama: "sekawan atus wolung dasa gangsal", "krama-inggil": "sekawan atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh enam", "486"], en: ["four hundred eighty-six", "486"], zh: ["四百八十六"] },
    translation: { ngoko: "patang atus wolung puluh enem", krama: "sekawan atus wolung dasa enem", "krama-inggil": "sekawan atus wolung dasa enem" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh tujuh", "487"], en: ["four hundred eighty-seven", "487"], zh: ["四百八十七"] },
    translation: { ngoko: "patang atus wolung puluh pitu", krama: "sekawan atus wolung dasa pitu", "krama-inggil": "sekawan atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh delapan", "488"], en: ["four hundred eighty-eight", "488"], zh: ["四百八十八"] },
    translation: { ngoko: "patang atus wolung puluh wolu", krama: "sekawan atus wolung dasa wolu", "krama-inggil": "sekawan atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus delapan puluh sembilan", "489"], en: ["four hundred eighty-nine", "489"], zh: ["四百八十九"] },
    translation: { ngoko: "patang atus wolung puluh sanga", krama: "sekawan atus wolung dasa sanga", "krama-inggil": "sekawan atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh", "490"], en: ["four hundred ninety", "490"], zh: ["四百九十"] },
    translation: { ngoko: "patang atus sangang puluh", krama: "sekawan atus sangang dasa", "krama-inggil": "sekawan atus sangang dasa" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh satu", "491"], en: ["four hundred ninety-one", "491"], zh: ["四百九十一"] },
    translation: { ngoko: "patang atus sangang puluh siji", krama: "sekawan atus sangang dasa setunggal", "krama-inggil": "sekawan atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh dua", "492"], en: ["four hundred ninety-two", "492"], zh: ["四百九十二"] },
    translation: { ngoko: "patang atus sangang puluh loro", krama: "sekawan atus sangang dasa kalih", "krama-inggil": "sekawan atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh tiga", "493"], en: ["four hundred ninety-three", "493"], zh: ["四百九十三"] },
    translation: { ngoko: "patang atus sangang puluh telu", krama: "sekawan atus sangang dasa tiga", "krama-inggil": "sekawan atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh empat", "494"], en: ["four hundred ninety-four", "494"], zh: ["四百九十四"] },
    translation: { ngoko: "patang atus sangang puluh papat", krama: "sekawan atus sangang dasa sekawan", "krama-inggil": "sekawan atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh lima", "495"], en: ["four hundred ninety-five", "495"], zh: ["四百九十五"] },
    translation: { ngoko: "patang atus sangang puluh lima", krama: "sekawan atus sangang dasa gangsal", "krama-inggil": "sekawan atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh enam", "496"], en: ["four hundred ninety-six", "496"], zh: ["四百九十六"] },
    translation: { ngoko: "patang atus sangang puluh enem", krama: "sekawan atus sangang dasa enem", "krama-inggil": "sekawan atus sangang dasa enem" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh tujuh", "497"], en: ["four hundred ninety-seven", "497"], zh: ["四百九十七"] },
    translation: { ngoko: "patang atus sangang puluh pitu", krama: "sekawan atus sangang dasa pitu", "krama-inggil": "sekawan atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh delapan", "498"], en: ["four hundred ninety-eight", "498"], zh: ["四百九十八"] },
    translation: { ngoko: "patang atus sangang puluh wolu", krama: "sekawan atus sangang dasa wolu", "krama-inggil": "sekawan atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["empat ratus sembilan puluh sembilan", "499"], en: ["four hundred ninety-nine", "499"], zh: ["四百九十九"] },
    translation: { ngoko: "patang atus sangang puluh sanga", krama: "sekawan atus sangang dasa sanga", "krama-inggil": "sekawan atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus", "500"], en: ["five hundred", "500"], zh: ["五百"] },
    translation: { ngoko: "limang atus", krama: "gangsal atus", "krama-inggil": "gangsal atus" },
  },
  {
    aliases: { id: ["lima ratus satu", "501"], en: ["five hundred one", "501"], zh: ["五百零一"] },
    translation: { ngoko: "limang atus siji", krama: "gangsal atus setunggal", "krama-inggil": "gangsal atus setunggal" },
  },
  {
    aliases: { id: ["lima ratus dua", "502"], en: ["five hundred two", "502"], zh: ["五百零二"] },
    translation: { ngoko: "limang atus loro", krama: "gangsal atus kalih", "krama-inggil": "gangsal atus kalih" },
  },
  {
    aliases: { id: ["lima ratus tiga", "503"], en: ["five hundred three", "503"], zh: ["五百零三"] },
    translation: { ngoko: "limang atus telu", krama: "gangsal atus tiga", "krama-inggil": "gangsal atus tiga" },
  },
  {
    aliases: { id: ["lima ratus empat", "504"], en: ["five hundred four", "504"], zh: ["五百零四"] },
    translation: { ngoko: "limang atus papat", krama: "gangsal atus sekawan", "krama-inggil": "gangsal atus sekawan" },
  },
  {
    aliases: { id: ["lima ratus lima", "505"], en: ["five hundred five", "505"], zh: ["五百零五"] },
    translation: { ngoko: "limang atus lima", krama: "gangsal atus gangsal", "krama-inggil": "gangsal atus gangsal" },
  },
  {
    aliases: { id: ["lima ratus enam", "506"], en: ["five hundred six", "506"], zh: ["五百零六"] },
    translation: { ngoko: "limang atus enem", krama: "gangsal atus enem", "krama-inggil": "gangsal atus enem" },
  },
  {
    aliases: { id: ["lima ratus tujuh", "507"], en: ["five hundred seven", "507"], zh: ["五百零七"] },
    translation: { ngoko: "limang atus pitu", krama: "gangsal atus pitu", "krama-inggil": "gangsal atus pitu" },
  },
  {
    aliases: { id: ["lima ratus delapan", "508"], en: ["five hundred eight", "508"], zh: ["五百零八"] },
    translation: { ngoko: "limang atus wolu", krama: "gangsal atus wolu", "krama-inggil": "gangsal atus wolu" },
  },
  {
    aliases: { id: ["lima ratus sembilan", "509"], en: ["five hundred nine", "509"], zh: ["五百零九"] },
    translation: { ngoko: "limang atus sanga", krama: "gangsal atus sanga", "krama-inggil": "gangsal atus sanga" },
  },
  {
    aliases: { id: ["lima ratus sepuluh", "510"], en: ["five hundred ten", "510"], zh: ["五百十"] },
    translation: { ngoko: "limang atus sepuluh", krama: "gangsal atus sedasa", "krama-inggil": "gangsal atus sedasa" },
  },
  {
    aliases: { id: ["lima ratus sebelas", "511"], en: ["five hundred eleven", "511"], zh: ["五百十一"] },
    translation: { ngoko: "limang atus sewelas", krama: "gangsal atus sewelas", "krama-inggil": "gangsal atus sewelas" },
  },
  {
    aliases: { id: ["lima ratus dua belas", "512"], en: ["five hundred twelve", "512"], zh: ["五百十二"] },
    translation: { ngoko: "limang atus rolas", krama: "gangsal atus kalih welas", "krama-inggil": "gangsal atus kalih welas" },
  },
  {
    aliases: { id: ["lima ratus tiga belas", "513"], en: ["five hundred thirteen", "513"], zh: ["五百十三"] },
    translation: { ngoko: "limang atus telulas", krama: "gangsal atus tiga welas", "krama-inggil": "gangsal atus tiga welas" },
  },
  {
    aliases: { id: ["lima ratus empat belas", "514"], en: ["five hundred fourteen", "514"], zh: ["五百十四"] },
    translation: { ngoko: "limang atus patbelas", krama: "gangsal atus sekawan welas", "krama-inggil": "gangsal atus sekawan welas" },
  },
  {
    aliases: { id: ["lima ratus lima belas", "515"], en: ["five hundred fifteen", "515"], zh: ["五百十五"] },
    translation: { ngoko: "limang atus limolas", krama: "gangsal atus gangsal welas", "krama-inggil": "gangsal atus gangsal welas" },
  },
  {
    aliases: { id: ["lima ratus enam belas", "516"], en: ["five hundred sixteen", "516"], zh: ["五百十六"] },
    translation: { ngoko: "limang atus nembelas", krama: "gangsal atus enem welas", "krama-inggil": "gangsal atus enem welas" },
  },
  {
    aliases: { id: ["lima ratus tujuh belas", "517"], en: ["five hundred seventeen", "517"], zh: ["五百十七"] },
    translation: { ngoko: "limang atus pitulas", krama: "gangsal atus pitulas", "krama-inggil": "gangsal atus pitulas" },
  },
  {
    aliases: { id: ["lima ratus delapan belas", "518"], en: ["five hundred eighteen", "518"], zh: ["五百十八"] },
    translation: { ngoko: "limang atus wolulas", krama: "gangsal atus wolulas", "krama-inggil": "gangsal atus wolulas" },
  },
  {
    aliases: { id: ["lima ratus sembilan belas", "519"], en: ["five hundred nineteen", "519"], zh: ["五百十九"] },
    translation: { ngoko: "limang atus sangalas", krama: "gangsal atus sangalas", "krama-inggil": "gangsal atus sangalas" },
  },
  {
    aliases: { id: ["lima ratus dua puluh", "520"], en: ["five hundred twenty", "520"], zh: ["五百二十"] },
    translation: { ngoko: "limang atus rong puluh", krama: "gangsal atus kalih dasa", "krama-inggil": "gangsal atus kalih dasa" },
  },
  {
    aliases: { id: ["lima ratus dua puluh satu", "521"], en: ["five hundred twenty-one", "521"], zh: ["五百二十一"] },
    translation: { ngoko: "limang atus selikur", krama: "gangsal atus kalih dasa setunggal", "krama-inggil": "gangsal atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus dua puluh dua", "522"], en: ["five hundred twenty-two", "522"], zh: ["五百二十二"] },
    translation: { ngoko: "limang atus rolikur", krama: "gangsal atus kalih dasa kalih", "krama-inggil": "gangsal atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus dua puluh tiga", "523"], en: ["five hundred twenty-three", "523"], zh: ["五百二十三"] },
    translation: { ngoko: "limang atus telulikur", krama: "gangsal atus kalih dasa tiga", "krama-inggil": "gangsal atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus dua puluh empat", "524"], en: ["five hundred twenty-four", "524"], zh: ["五百二十四"] },
    translation: { ngoko: "limang atus patlikur", krama: "gangsal atus kalih dasa sekawan", "krama-inggil": "gangsal atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus dua puluh lima", "525"], en: ["five hundred twenty-five", "525"], zh: ["五百二十五"] },
    translation: { ngoko: "limang atus selawe", krama: "gangsal atus selangkung", "krama-inggil": "gangsal atus selangkung" },
  },
  {
    aliases: { id: ["lima ratus dua puluh enam", "526"], en: ["five hundred twenty-six", "526"], zh: ["五百二十六"] },
    translation: { ngoko: "limang atus nemlikur", krama: "gangsal atus kalih dasa enem", "krama-inggil": "gangsal atus kalih dasa enem" },
  },
  {
    aliases: { id: ["lima ratus dua puluh tujuh", "527"], en: ["five hundred twenty-seven", "527"], zh: ["五百二十七"] },
    translation: { ngoko: "limang atus pitulikur", krama: "gangsal atus kalih dasa pitu", "krama-inggil": "gangsal atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus dua puluh delapan", "528"], en: ["five hundred twenty-eight", "528"], zh: ["五百二十八"] },
    translation: { ngoko: "limang atus wolulikur", krama: "gangsal atus kalih dasa wolu", "krama-inggil": "gangsal atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus dua puluh sembilan", "529"], en: ["five hundred twenty-nine", "529"], zh: ["五百二十九"] },
    translation: { ngoko: "limang atus sangalikur", krama: "gangsal atus kalih dasa sanga", "krama-inggil": "gangsal atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh", "530"], en: ["five hundred thirty", "530"], zh: ["五百三十"] },
    translation: { ngoko: "limang atus telung puluh", krama: "gangsal atus tigang dasa", "krama-inggil": "gangsal atus tigang dasa" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh satu", "531"], en: ["five hundred thirty-one", "531"], zh: ["五百三十一"] },
    translation: { ngoko: "limang atus telung puluh siji", krama: "gangsal atus tigang dasa setunggal", "krama-inggil": "gangsal atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh dua", "532"], en: ["five hundred thirty-two", "532"], zh: ["五百三十二"] },
    translation: { ngoko: "limang atus telung puluh loro", krama: "gangsal atus tigang dasa kalih", "krama-inggil": "gangsal atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh tiga", "533"], en: ["five hundred thirty-three", "533"], zh: ["五百三十三"] },
    translation: { ngoko: "limang atus telung puluh telu", krama: "gangsal atus tigang dasa tiga", "krama-inggil": "gangsal atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh empat", "534"], en: ["five hundred thirty-four", "534"], zh: ["五百三十四"] },
    translation: { ngoko: "limang atus telung puluh papat", krama: "gangsal atus tigang dasa sekawan", "krama-inggil": "gangsal atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh lima", "535"], en: ["five hundred thirty-five", "535"], zh: ["五百三十五"] },
    translation: { ngoko: "limang atus telung puluh lima", krama: "gangsal atus tigang dasa gangsal", "krama-inggil": "gangsal atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh enam", "536"], en: ["five hundred thirty-six", "536"], zh: ["五百三十六"] },
    translation: { ngoko: "limang atus telung puluh enem", krama: "gangsal atus tigang dasa enem", "krama-inggil": "gangsal atus tigang dasa enem" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh tujuh", "537"], en: ["five hundred thirty-seven", "537"], zh: ["五百三十七"] },
    translation: { ngoko: "limang atus telung puluh pitu", krama: "gangsal atus tigang dasa pitu", "krama-inggil": "gangsal atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh delapan", "538"], en: ["five hundred thirty-eight", "538"], zh: ["五百三十八"] },
    translation: { ngoko: "limang atus telung puluh wolu", krama: "gangsal atus tigang dasa wolu", "krama-inggil": "gangsal atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus tiga puluh sembilan", "539"], en: ["five hundred thirty-nine", "539"], zh: ["五百三十九"] },
    translation: { ngoko: "limang atus telung puluh sanga", krama: "gangsal atus tigang dasa sanga", "krama-inggil": "gangsal atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus empat puluh", "540"], en: ["five hundred forty", "540"], zh: ["五百四十"] },
    translation: { ngoko: "limang atus patang puluh", krama: "gangsal atus sekawan dasa", "krama-inggil": "gangsal atus sekawan dasa" },
  },
  {
    aliases: { id: ["lima ratus empat puluh satu", "541"], en: ["five hundred forty-one", "541"], zh: ["五百四十一"] },
    translation: { ngoko: "limang atus patang puluh siji", krama: "gangsal atus sekawan dasa setunggal", "krama-inggil": "gangsal atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus empat puluh dua", "542"], en: ["five hundred forty-two", "542"], zh: ["五百四十二"] },
    translation: { ngoko: "limang atus patang puluh loro", krama: "gangsal atus sekawan dasa kalih", "krama-inggil": "gangsal atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus empat puluh tiga", "543"], en: ["five hundred forty-three", "543"], zh: ["五百四十三"] },
    translation: { ngoko: "limang atus patang puluh telu", krama: "gangsal atus sekawan dasa tiga", "krama-inggil": "gangsal atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus empat puluh empat", "544"], en: ["five hundred forty-four", "544"], zh: ["五百四十四"] },
    translation: { ngoko: "limang atus patang puluh papat", krama: "gangsal atus sekawan dasa sekawan", "krama-inggil": "gangsal atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus empat puluh lima", "545"], en: ["five hundred forty-five", "545"], zh: ["五百四十五"] },
    translation: { ngoko: "limang atus patang puluh lima", krama: "gangsal atus sekawan dasa gangsal", "krama-inggil": "gangsal atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["lima ratus empat puluh enam", "546"], en: ["five hundred forty-six", "546"], zh: ["五百四十六"] },
    translation: { ngoko: "limang atus patang puluh enem", krama: "gangsal atus sekawan dasa enem", "krama-inggil": "gangsal atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["lima ratus empat puluh tujuh", "547"], en: ["five hundred forty-seven", "547"], zh: ["五百四十七"] },
    translation: { ngoko: "limang atus patang puluh pitu", krama: "gangsal atus sekawan dasa pitu", "krama-inggil": "gangsal atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus empat puluh delapan", "548"], en: ["five hundred forty-eight", "548"], zh: ["五百四十八"] },
    translation: { ngoko: "limang atus patang puluh wolu", krama: "gangsal atus sekawan dasa wolu", "krama-inggil": "gangsal atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus empat puluh sembilan", "549"], en: ["five hundred forty-nine", "549"], zh: ["五百四十九"] },
    translation: { ngoko: "limang atus patang puluh sanga", krama: "gangsal atus sekawan dasa sanga", "krama-inggil": "gangsal atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus lima puluh", "550"], en: ["five hundred fifty", "550"], zh: ["五百五十"] },
    translation: { ngoko: "limang atus seket", krama: "gangsal atus seket", "krama-inggil": "gangsal atus seket" },
  },
  {
    aliases: { id: ["lima ratus lima puluh satu", "551"], en: ["five hundred fifty-one", "551"], zh: ["五百五十一"] },
    translation: { ngoko: "limang atus seket siji", krama: "gangsal atus seket setunggal", "krama-inggil": "gangsal atus seket setunggal" },
  },
  {
    aliases: { id: ["lima ratus lima puluh dua", "552"], en: ["five hundred fifty-two", "552"], zh: ["五百五十二"] },
    translation: { ngoko: "limang atus seket loro", krama: "gangsal atus seket kalih", "krama-inggil": "gangsal atus seket kalih" },
  },
  {
    aliases: { id: ["lima ratus lima puluh tiga", "553"], en: ["five hundred fifty-three", "553"], zh: ["五百五十三"] },
    translation: { ngoko: "limang atus seket telu", krama: "gangsal atus seket tiga", "krama-inggil": "gangsal atus seket tiga" },
  },
  {
    aliases: { id: ["lima ratus lima puluh empat", "554"], en: ["five hundred fifty-four", "554"], zh: ["五百五十四"] },
    translation: { ngoko: "limang atus seket papat", krama: "gangsal atus seket sekawan", "krama-inggil": "gangsal atus seket sekawan" },
  },
  {
    aliases: { id: ["lima ratus lima puluh lima", "555"], en: ["five hundred fifty-five", "555"], zh: ["五百五十五"] },
    translation: { ngoko: "limang atus seket lima", krama: "gangsal atus seket gangsal", "krama-inggil": "gangsal atus seket gangsal" },
  },
  {
    aliases: { id: ["lima ratus lima puluh enam", "556"], en: ["five hundred fifty-six", "556"], zh: ["五百五十六"] },
    translation: { ngoko: "limang atus seket enem", krama: "gangsal atus seket enem", "krama-inggil": "gangsal atus seket enem" },
  },
  {
    aliases: { id: ["lima ratus lima puluh tujuh", "557"], en: ["five hundred fifty-seven", "557"], zh: ["五百五十七"] },
    translation: { ngoko: "limang atus seket pitu", krama: "gangsal atus seket pitu", "krama-inggil": "gangsal atus seket pitu" },
  },
  {
    aliases: { id: ["lima ratus lima puluh delapan", "558"], en: ["five hundred fifty-eight", "558"], zh: ["五百五十八"] },
    translation: { ngoko: "limang atus seket wolu", krama: "gangsal atus seket wolu", "krama-inggil": "gangsal atus seket wolu" },
  },
  {
    aliases: { id: ["lima ratus lima puluh sembilan", "559"], en: ["five hundred fifty-nine", "559"], zh: ["五百五十九"] },
    translation: { ngoko: "limang atus seket sanga", krama: "gangsal atus seket sanga", "krama-inggil": "gangsal atus seket sanga" },
  },
  {
    aliases: { id: ["lima ratus enam puluh", "560"], en: ["five hundred sixty", "560"], zh: ["五百六十"] },
    translation: { ngoko: "limang atus sewidak", krama: "gangsal atus sewidak", "krama-inggil": "gangsal atus sewidak" },
  },
  {
    aliases: { id: ["lima ratus enam puluh satu", "561"], en: ["five hundred sixty-one", "561"], zh: ["五百六十一"] },
    translation: { ngoko: "limang atus sewidak siji", krama: "gangsal atus sewidak setunggal", "krama-inggil": "gangsal atus sewidak setunggal" },
  },
  {
    aliases: { id: ["lima ratus enam puluh dua", "562"], en: ["five hundred sixty-two", "562"], zh: ["五百六十二"] },
    translation: { ngoko: "limang atus sewidak loro", krama: "gangsal atus sewidak kalih", "krama-inggil": "gangsal atus sewidak kalih" },
  },
  {
    aliases: { id: ["lima ratus enam puluh tiga", "563"], en: ["five hundred sixty-three", "563"], zh: ["五百六十三"] },
    translation: { ngoko: "limang atus sewidak telu", krama: "gangsal atus sewidak tiga", "krama-inggil": "gangsal atus sewidak tiga" },
  },
  {
    aliases: { id: ["lima ratus enam puluh empat", "564"], en: ["five hundred sixty-four", "564"], zh: ["五百六十四"] },
    translation: { ngoko: "limang atus sewidak papat", krama: "gangsal atus sewidak sekawan", "krama-inggil": "gangsal atus sewidak sekawan" },
  },
  {
    aliases: { id: ["lima ratus enam puluh lima", "565"], en: ["five hundred sixty-five", "565"], zh: ["五百六十五"] },
    translation: { ngoko: "limang atus sewidak lima", krama: "gangsal atus sewidak gangsal", "krama-inggil": "gangsal atus sewidak gangsal" },
  },
  {
    aliases: { id: ["lima ratus enam puluh enam", "566"], en: ["five hundred sixty-six", "566"], zh: ["五百六十六"] },
    translation: { ngoko: "limang atus sewidak enem", krama: "gangsal atus sewidak enem", "krama-inggil": "gangsal atus sewidak enem" },
  },
  {
    aliases: { id: ["lima ratus enam puluh tujuh", "567"], en: ["five hundred sixty-seven", "567"], zh: ["五百六十七"] },
    translation: { ngoko: "limang atus sewidak pitu", krama: "gangsal atus sewidak pitu", "krama-inggil": "gangsal atus sewidak pitu" },
  },
  {
    aliases: { id: ["lima ratus enam puluh delapan", "568"], en: ["five hundred sixty-eight", "568"], zh: ["五百六十八"] },
    translation: { ngoko: "limang atus sewidak wolu", krama: "gangsal atus sewidak wolu", "krama-inggil": "gangsal atus sewidak wolu" },
  },
  {
    aliases: { id: ["lima ratus enam puluh sembilan", "569"], en: ["five hundred sixty-nine", "569"], zh: ["五百六十九"] },
    translation: { ngoko: "limang atus sewidak sanga", krama: "gangsal atus sewidak sanga", "krama-inggil": "gangsal atus sewidak sanga" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh", "570"], en: ["five hundred seventy", "570"], zh: ["五百七十"] },
    translation: { ngoko: "limang atus pitung puluh", krama: "gangsal atus pitung dasa", "krama-inggil": "gangsal atus pitung dasa" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh satu", "571"], en: ["five hundred seventy-one", "571"], zh: ["五百七十一"] },
    translation: { ngoko: "limang atus pitung puluh siji", krama: "gangsal atus pitung dasa setunggal", "krama-inggil": "gangsal atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh dua", "572"], en: ["five hundred seventy-two", "572"], zh: ["五百七十二"] },
    translation: { ngoko: "limang atus pitung puluh loro", krama: "gangsal atus pitung dasa kalih", "krama-inggil": "gangsal atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh tiga", "573"], en: ["five hundred seventy-three", "573"], zh: ["五百七十三"] },
    translation: { ngoko: "limang atus pitung puluh telu", krama: "gangsal atus pitung dasa tiga", "krama-inggil": "gangsal atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh empat", "574"], en: ["five hundred seventy-four", "574"], zh: ["五百七十四"] },
    translation: { ngoko: "limang atus pitung puluh papat", krama: "gangsal atus pitung dasa sekawan", "krama-inggil": "gangsal atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh lima", "575"], en: ["five hundred seventy-five", "575"], zh: ["五百七十五"] },
    translation: { ngoko: "limang atus pitung puluh lima", krama: "gangsal atus pitung dasa gangsal", "krama-inggil": "gangsal atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh enam", "576"], en: ["five hundred seventy-six", "576"], zh: ["五百七十六"] },
    translation: { ngoko: "limang atus pitung puluh enem", krama: "gangsal atus pitung dasa enem", "krama-inggil": "gangsal atus pitung dasa enem" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh tujuh", "577"], en: ["five hundred seventy-seven", "577"], zh: ["五百七十七"] },
    translation: { ngoko: "limang atus pitung puluh pitu", krama: "gangsal atus pitung dasa pitu", "krama-inggil": "gangsal atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh delapan", "578"], en: ["five hundred seventy-eight", "578"], zh: ["五百七十八"] },
    translation: { ngoko: "limang atus pitung puluh wolu", krama: "gangsal atus pitung dasa wolu", "krama-inggil": "gangsal atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus tujuh puluh sembilan", "579"], en: ["five hundred seventy-nine", "579"], zh: ["五百七十九"] },
    translation: { ngoko: "limang atus pitung puluh sanga", krama: "gangsal atus pitung dasa sanga", "krama-inggil": "gangsal atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh", "580"], en: ["five hundred eighty", "580"], zh: ["五百八十"] },
    translation: { ngoko: "limang atus wolung puluh", krama: "gangsal atus wolung dasa", "krama-inggil": "gangsal atus wolung dasa" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh satu", "581"], en: ["five hundred eighty-one", "581"], zh: ["五百八十一"] },
    translation: { ngoko: "limang atus wolung puluh siji", krama: "gangsal atus wolung dasa setunggal", "krama-inggil": "gangsal atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh dua", "582"], en: ["five hundred eighty-two", "582"], zh: ["五百八十二"] },
    translation: { ngoko: "limang atus wolung puluh loro", krama: "gangsal atus wolung dasa kalih", "krama-inggil": "gangsal atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh tiga", "583"], en: ["five hundred eighty-three", "583"], zh: ["五百八十三"] },
    translation: { ngoko: "limang atus wolung puluh telu", krama: "gangsal atus wolung dasa tiga", "krama-inggil": "gangsal atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh empat", "584"], en: ["five hundred eighty-four", "584"], zh: ["五百八十四"] },
    translation: { ngoko: "limang atus wolung puluh papat", krama: "gangsal atus wolung dasa sekawan", "krama-inggil": "gangsal atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh lima", "585"], en: ["five hundred eighty-five", "585"], zh: ["五百八十五"] },
    translation: { ngoko: "limang atus wolung puluh lima", krama: "gangsal atus wolung dasa gangsal", "krama-inggil": "gangsal atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh enam", "586"], en: ["five hundred eighty-six", "586"], zh: ["五百八十六"] },
    translation: { ngoko: "limang atus wolung puluh enem", krama: "gangsal atus wolung dasa enem", "krama-inggil": "gangsal atus wolung dasa enem" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh tujuh", "587"], en: ["five hundred eighty-seven", "587"], zh: ["五百八十七"] },
    translation: { ngoko: "limang atus wolung puluh pitu", krama: "gangsal atus wolung dasa pitu", "krama-inggil": "gangsal atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh delapan", "588"], en: ["five hundred eighty-eight", "588"], zh: ["五百八十八"] },
    translation: { ngoko: "limang atus wolung puluh wolu", krama: "gangsal atus wolung dasa wolu", "krama-inggil": "gangsal atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus delapan puluh sembilan", "589"], en: ["five hundred eighty-nine", "589"], zh: ["五百八十九"] },
    translation: { ngoko: "limang atus wolung puluh sanga", krama: "gangsal atus wolung dasa sanga", "krama-inggil": "gangsal atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh", "590"], en: ["five hundred ninety", "590"], zh: ["五百九十"] },
    translation: { ngoko: "limang atus sangang puluh", krama: "gangsal atus sangang dasa", "krama-inggil": "gangsal atus sangang dasa" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh satu", "591"], en: ["five hundred ninety-one", "591"], zh: ["五百九十一"] },
    translation: { ngoko: "limang atus sangang puluh siji", krama: "gangsal atus sangang dasa setunggal", "krama-inggil": "gangsal atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh dua", "592"], en: ["five hundred ninety-two", "592"], zh: ["五百九十二"] },
    translation: { ngoko: "limang atus sangang puluh loro", krama: "gangsal atus sangang dasa kalih", "krama-inggil": "gangsal atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh tiga", "593"], en: ["five hundred ninety-three", "593"], zh: ["五百九十三"] },
    translation: { ngoko: "limang atus sangang puluh telu", krama: "gangsal atus sangang dasa tiga", "krama-inggil": "gangsal atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh empat", "594"], en: ["five hundred ninety-four", "594"], zh: ["五百九十四"] },
    translation: { ngoko: "limang atus sangang puluh papat", krama: "gangsal atus sangang dasa sekawan", "krama-inggil": "gangsal atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh lima", "595"], en: ["five hundred ninety-five", "595"], zh: ["五百九十五"] },
    translation: { ngoko: "limang atus sangang puluh lima", krama: "gangsal atus sangang dasa gangsal", "krama-inggil": "gangsal atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh enam", "596"], en: ["five hundred ninety-six", "596"], zh: ["五百九十六"] },
    translation: { ngoko: "limang atus sangang puluh enem", krama: "gangsal atus sangang dasa enem", "krama-inggil": "gangsal atus sangang dasa enem" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh tujuh", "597"], en: ["five hundred ninety-seven", "597"], zh: ["五百九十七"] },
    translation: { ngoko: "limang atus sangang puluh pitu", krama: "gangsal atus sangang dasa pitu", "krama-inggil": "gangsal atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh delapan", "598"], en: ["five hundred ninety-eight", "598"], zh: ["五百九十八"] },
    translation: { ngoko: "limang atus sangang puluh wolu", krama: "gangsal atus sangang dasa wolu", "krama-inggil": "gangsal atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["lima ratus sembilan puluh sembilan", "599"], en: ["five hundred ninety-nine", "599"], zh: ["五百九十九"] },
    translation: { ngoko: "limang atus sangang puluh sanga", krama: "gangsal atus sangang dasa sanga", "krama-inggil": "gangsal atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus", "600"], en: ["six hundred", "600"], zh: ["六百"] },
    translation: { ngoko: "enem atus", krama: "enem atus", "krama-inggil": "enem atus" },
  },
  {
    aliases: { id: ["enam ratus satu", "601"], en: ["six hundred one", "601"], zh: ["六百零一"] },
    translation: { ngoko: "enem atus siji", krama: "enem atus setunggal", "krama-inggil": "enem atus setunggal" },
  },
  {
    aliases: { id: ["enam ratus dua", "602"], en: ["six hundred two", "602"], zh: ["六百零二"] },
    translation: { ngoko: "enem atus loro", krama: "enem atus kalih", "krama-inggil": "enem atus kalih" },
  },
  {
    aliases: { id: ["enam ratus tiga", "603"], en: ["six hundred three", "603"], zh: ["六百零三"] },
    translation: { ngoko: "enem atus telu", krama: "enem atus tiga", "krama-inggil": "enem atus tiga" },
  },
  {
    aliases: { id: ["enam ratus empat", "604"], en: ["six hundred four", "604"], zh: ["六百零四"] },
    translation: { ngoko: "enem atus papat", krama: "enem atus sekawan", "krama-inggil": "enem atus sekawan" },
  },
  {
    aliases: { id: ["enam ratus lima", "605"], en: ["six hundred five", "605"], zh: ["六百零五"] },
    translation: { ngoko: "enem atus lima", krama: "enem atus gangsal", "krama-inggil": "enem atus gangsal" },
  },
  {
    aliases: { id: ["enam ratus enam", "606"], en: ["six hundred six", "606"], zh: ["六百零六"] },
    translation: { ngoko: "enem atus enem", krama: "enem atus enem", "krama-inggil": "enem atus enem" },
  },
  {
    aliases: { id: ["enam ratus tujuh", "607"], en: ["six hundred seven", "607"], zh: ["六百零七"] },
    translation: { ngoko: "enem atus pitu", krama: "enem atus pitu", "krama-inggil": "enem atus pitu" },
  },
  {
    aliases: { id: ["enam ratus delapan", "608"], en: ["six hundred eight", "608"], zh: ["六百零八"] },
    translation: { ngoko: "enem atus wolu", krama: "enem atus wolu", "krama-inggil": "enem atus wolu" },
  },
  {
    aliases: { id: ["enam ratus sembilan", "609"], en: ["six hundred nine", "609"], zh: ["六百零九"] },
    translation: { ngoko: "enem atus sanga", krama: "enem atus sanga", "krama-inggil": "enem atus sanga" },
  },
  {
    aliases: { id: ["enam ratus sepuluh", "610"], en: ["six hundred ten", "610"], zh: ["六百十"] },
    translation: { ngoko: "enem atus sepuluh", krama: "enem atus sedasa", "krama-inggil": "enem atus sedasa" },
  },
  {
    aliases: { id: ["enam ratus sebelas", "611"], en: ["six hundred eleven", "611"], zh: ["六百十一"] },
    translation: { ngoko: "enem atus sewelas", krama: "enem atus sewelas", "krama-inggil": "enem atus sewelas" },
  },
  {
    aliases: { id: ["enam ratus dua belas", "612"], en: ["six hundred twelve", "612"], zh: ["六百十二"] },
    translation: { ngoko: "enem atus rolas", krama: "enem atus kalih welas", "krama-inggil": "enem atus kalih welas" },
  },
  {
    aliases: { id: ["enam ratus tiga belas", "613"], en: ["six hundred thirteen", "613"], zh: ["六百十三"] },
    translation: { ngoko: "enem atus telulas", krama: "enem atus tiga welas", "krama-inggil": "enem atus tiga welas" },
  },
  {
    aliases: { id: ["enam ratus empat belas", "614"], en: ["six hundred fourteen", "614"], zh: ["六百十四"] },
    translation: { ngoko: "enem atus patbelas", krama: "enem atus sekawan welas", "krama-inggil": "enem atus sekawan welas" },
  },
  {
    aliases: { id: ["enam ratus lima belas", "615"], en: ["six hundred fifteen", "615"], zh: ["六百十五"] },
    translation: { ngoko: "enem atus limolas", krama: "enem atus gangsal welas", "krama-inggil": "enem atus gangsal welas" },
  },
  {
    aliases: { id: ["enam ratus enam belas", "616"], en: ["six hundred sixteen", "616"], zh: ["六百十六"] },
    translation: { ngoko: "enem atus nembelas", krama: "enem atus enem welas", "krama-inggil": "enem atus enem welas" },
  },
  {
    aliases: { id: ["enam ratus tujuh belas", "617"], en: ["six hundred seventeen", "617"], zh: ["六百十七"] },
    translation: { ngoko: "enem atus pitulas", krama: "enem atus pitulas", "krama-inggil": "enem atus pitulas" },
  },
  {
    aliases: { id: ["enam ratus delapan belas", "618"], en: ["six hundred eighteen", "618"], zh: ["六百十八"] },
    translation: { ngoko: "enem atus wolulas", krama: "enem atus wolulas", "krama-inggil": "enem atus wolulas" },
  },
  {
    aliases: { id: ["enam ratus sembilan belas", "619"], en: ["six hundred nineteen", "619"], zh: ["六百十九"] },
    translation: { ngoko: "enem atus sangalas", krama: "enem atus sangalas", "krama-inggil": "enem atus sangalas" },
  },
  {
    aliases: { id: ["enam ratus dua puluh", "620"], en: ["six hundred twenty", "620"], zh: ["六百二十"] },
    translation: { ngoko: "enem atus rong puluh", krama: "enem atus kalih dasa", "krama-inggil": "enem atus kalih dasa" },
  },
  {
    aliases: { id: ["enam ratus dua puluh satu", "621"], en: ["six hundred twenty-one", "621"], zh: ["六百二十一"] },
    translation: { ngoko: "enem atus selikur", krama: "enem atus kalih dasa setunggal", "krama-inggil": "enem atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus dua puluh dua", "622"], en: ["six hundred twenty-two", "622"], zh: ["六百二十二"] },
    translation: { ngoko: "enem atus rolikur", krama: "enem atus kalih dasa kalih", "krama-inggil": "enem atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus dua puluh tiga", "623"], en: ["six hundred twenty-three", "623"], zh: ["六百二十三"] },
    translation: { ngoko: "enem atus telulikur", krama: "enem atus kalih dasa tiga", "krama-inggil": "enem atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus dua puluh empat", "624"], en: ["six hundred twenty-four", "624"], zh: ["六百二十四"] },
    translation: { ngoko: "enem atus patlikur", krama: "enem atus kalih dasa sekawan", "krama-inggil": "enem atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus dua puluh lima", "625"], en: ["six hundred twenty-five", "625"], zh: ["六百二十五"] },
    translation: { ngoko: "enem atus selawe", krama: "enem atus selangkung", "krama-inggil": "enem atus selangkung" },
  },
  {
    aliases: { id: ["enam ratus dua puluh enam", "626"], en: ["six hundred twenty-six", "626"], zh: ["六百二十六"] },
    translation: { ngoko: "enem atus nemlikur", krama: "enem atus kalih dasa enem", "krama-inggil": "enem atus kalih dasa enem" },
  },
  {
    aliases: { id: ["enam ratus dua puluh tujuh", "627"], en: ["six hundred twenty-seven", "627"], zh: ["六百二十七"] },
    translation: { ngoko: "enem atus pitulikur", krama: "enem atus kalih dasa pitu", "krama-inggil": "enem atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus dua puluh delapan", "628"], en: ["six hundred twenty-eight", "628"], zh: ["六百二十八"] },
    translation: { ngoko: "enem atus wolulikur", krama: "enem atus kalih dasa wolu", "krama-inggil": "enem atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus dua puluh sembilan", "629"], en: ["six hundred twenty-nine", "629"], zh: ["六百二十九"] },
    translation: { ngoko: "enem atus sangalikur", krama: "enem atus kalih dasa sanga", "krama-inggil": "enem atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh", "630"], en: ["six hundred thirty", "630"], zh: ["六百三十"] },
    translation: { ngoko: "enem atus telung puluh", krama: "enem atus tigang dasa", "krama-inggil": "enem atus tigang dasa" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh satu", "631"], en: ["six hundred thirty-one", "631"], zh: ["六百三十一"] },
    translation: { ngoko: "enem atus telung puluh siji", krama: "enem atus tigang dasa setunggal", "krama-inggil": "enem atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh dua", "632"], en: ["six hundred thirty-two", "632"], zh: ["六百三十二"] },
    translation: { ngoko: "enem atus telung puluh loro", krama: "enem atus tigang dasa kalih", "krama-inggil": "enem atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh tiga", "633"], en: ["six hundred thirty-three", "633"], zh: ["六百三十三"] },
    translation: { ngoko: "enem atus telung puluh telu", krama: "enem atus tigang dasa tiga", "krama-inggil": "enem atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh empat", "634"], en: ["six hundred thirty-four", "634"], zh: ["六百三十四"] },
    translation: { ngoko: "enem atus telung puluh papat", krama: "enem atus tigang dasa sekawan", "krama-inggil": "enem atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh lima", "635"], en: ["six hundred thirty-five", "635"], zh: ["六百三十五"] },
    translation: { ngoko: "enem atus telung puluh lima", krama: "enem atus tigang dasa gangsal", "krama-inggil": "enem atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh enam", "636"], en: ["six hundred thirty-six", "636"], zh: ["六百三十六"] },
    translation: { ngoko: "enem atus telung puluh enem", krama: "enem atus tigang dasa enem", "krama-inggil": "enem atus tigang dasa enem" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh tujuh", "637"], en: ["six hundred thirty-seven", "637"], zh: ["六百三十七"] },
    translation: { ngoko: "enem atus telung puluh pitu", krama: "enem atus tigang dasa pitu", "krama-inggil": "enem atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh delapan", "638"], en: ["six hundred thirty-eight", "638"], zh: ["六百三十八"] },
    translation: { ngoko: "enem atus telung puluh wolu", krama: "enem atus tigang dasa wolu", "krama-inggil": "enem atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus tiga puluh sembilan", "639"], en: ["six hundred thirty-nine", "639"], zh: ["六百三十九"] },
    translation: { ngoko: "enem atus telung puluh sanga", krama: "enem atus tigang dasa sanga", "krama-inggil": "enem atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus empat puluh", "640"], en: ["six hundred forty", "640"], zh: ["六百四十"] },
    translation: { ngoko: "enem atus patang puluh", krama: "enem atus sekawan dasa", "krama-inggil": "enem atus sekawan dasa" },
  },
  {
    aliases: { id: ["enam ratus empat puluh satu", "641"], en: ["six hundred forty-one", "641"], zh: ["六百四十一"] },
    translation: { ngoko: "enem atus patang puluh siji", krama: "enem atus sekawan dasa setunggal", "krama-inggil": "enem atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus empat puluh dua", "642"], en: ["six hundred forty-two", "642"], zh: ["六百四十二"] },
    translation: { ngoko: "enem atus patang puluh loro", krama: "enem atus sekawan dasa kalih", "krama-inggil": "enem atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus empat puluh tiga", "643"], en: ["six hundred forty-three", "643"], zh: ["六百四十三"] },
    translation: { ngoko: "enem atus patang puluh telu", krama: "enem atus sekawan dasa tiga", "krama-inggil": "enem atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus empat puluh empat", "644"], en: ["six hundred forty-four", "644"], zh: ["六百四十四"] },
    translation: { ngoko: "enem atus patang puluh papat", krama: "enem atus sekawan dasa sekawan", "krama-inggil": "enem atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus empat puluh lima", "645"], en: ["six hundred forty-five", "645"], zh: ["六百四十五"] },
    translation: { ngoko: "enem atus patang puluh lima", krama: "enem atus sekawan dasa gangsal", "krama-inggil": "enem atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["enam ratus empat puluh enam", "646"], en: ["six hundred forty-six", "646"], zh: ["六百四十六"] },
    translation: { ngoko: "enem atus patang puluh enem", krama: "enem atus sekawan dasa enem", "krama-inggil": "enem atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["enam ratus empat puluh tujuh", "647"], en: ["six hundred forty-seven", "647"], zh: ["六百四十七"] },
    translation: { ngoko: "enem atus patang puluh pitu", krama: "enem atus sekawan dasa pitu", "krama-inggil": "enem atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus empat puluh delapan", "648"], en: ["six hundred forty-eight", "648"], zh: ["六百四十八"] },
    translation: { ngoko: "enem atus patang puluh wolu", krama: "enem atus sekawan dasa wolu", "krama-inggil": "enem atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus empat puluh sembilan", "649"], en: ["six hundred forty-nine", "649"], zh: ["六百四十九"] },
    translation: { ngoko: "enem atus patang puluh sanga", krama: "enem atus sekawan dasa sanga", "krama-inggil": "enem atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus lima puluh", "650"], en: ["six hundred fifty", "650"], zh: ["六百五十"] },
    translation: { ngoko: "enem atus seket", krama: "enem atus seket", "krama-inggil": "enem atus seket" },
  },
  {
    aliases: { id: ["enam ratus lima puluh satu", "651"], en: ["six hundred fifty-one", "651"], zh: ["六百五十一"] },
    translation: { ngoko: "enem atus seket siji", krama: "enem atus seket setunggal", "krama-inggil": "enem atus seket setunggal" },
  },
  {
    aliases: { id: ["enam ratus lima puluh dua", "652"], en: ["six hundred fifty-two", "652"], zh: ["六百五十二"] },
    translation: { ngoko: "enem atus seket loro", krama: "enem atus seket kalih", "krama-inggil": "enem atus seket kalih" },
  },
  {
    aliases: { id: ["enam ratus lima puluh tiga", "653"], en: ["six hundred fifty-three", "653"], zh: ["六百五十三"] },
    translation: { ngoko: "enem atus seket telu", krama: "enem atus seket tiga", "krama-inggil": "enem atus seket tiga" },
  },
  {
    aliases: { id: ["enam ratus lima puluh empat", "654"], en: ["six hundred fifty-four", "654"], zh: ["六百五十四"] },
    translation: { ngoko: "enem atus seket papat", krama: "enem atus seket sekawan", "krama-inggil": "enem atus seket sekawan" },
  },
  {
    aliases: { id: ["enam ratus lima puluh lima", "655"], en: ["six hundred fifty-five", "655"], zh: ["六百五十五"] },
    translation: { ngoko: "enem atus seket lima", krama: "enem atus seket gangsal", "krama-inggil": "enem atus seket gangsal" },
  },
  {
    aliases: { id: ["enam ratus lima puluh enam", "656"], en: ["six hundred fifty-six", "656"], zh: ["六百五十六"] },
    translation: { ngoko: "enem atus seket enem", krama: "enem atus seket enem", "krama-inggil": "enem atus seket enem" },
  },
  {
    aliases: { id: ["enam ratus lima puluh tujuh", "657"], en: ["six hundred fifty-seven", "657"], zh: ["六百五十七"] },
    translation: { ngoko: "enem atus seket pitu", krama: "enem atus seket pitu", "krama-inggil": "enem atus seket pitu" },
  },
  {
    aliases: { id: ["enam ratus lima puluh delapan", "658"], en: ["six hundred fifty-eight", "658"], zh: ["六百五十八"] },
    translation: { ngoko: "enem atus seket wolu", krama: "enem atus seket wolu", "krama-inggil": "enem atus seket wolu" },
  },
  {
    aliases: { id: ["enam ratus lima puluh sembilan", "659"], en: ["six hundred fifty-nine", "659"], zh: ["六百五十九"] },
    translation: { ngoko: "enem atus seket sanga", krama: "enem atus seket sanga", "krama-inggil": "enem atus seket sanga" },
  },
  {
    aliases: { id: ["enam ratus enam puluh", "660"], en: ["six hundred sixty", "660"], zh: ["六百六十"] },
    translation: { ngoko: "enem atus sewidak", krama: "enem atus sewidak", "krama-inggil": "enem atus sewidak" },
  },
  {
    aliases: { id: ["enam ratus enam puluh satu", "661"], en: ["six hundred sixty-one", "661"], zh: ["六百六十一"] },
    translation: { ngoko: "enem atus sewidak siji", krama: "enem atus sewidak setunggal", "krama-inggil": "enem atus sewidak setunggal" },
  },
  {
    aliases: { id: ["enam ratus enam puluh dua", "662"], en: ["six hundred sixty-two", "662"], zh: ["六百六十二"] },
    translation: { ngoko: "enem atus sewidak loro", krama: "enem atus sewidak kalih", "krama-inggil": "enem atus sewidak kalih" },
  },
  {
    aliases: { id: ["enam ratus enam puluh tiga", "663"], en: ["six hundred sixty-three", "663"], zh: ["六百六十三"] },
    translation: { ngoko: "enem atus sewidak telu", krama: "enem atus sewidak tiga", "krama-inggil": "enem atus sewidak tiga" },
  },
  {
    aliases: { id: ["enam ratus enam puluh empat", "664"], en: ["six hundred sixty-four", "664"], zh: ["六百六十四"] },
    translation: { ngoko: "enem atus sewidak papat", krama: "enem atus sewidak sekawan", "krama-inggil": "enem atus sewidak sekawan" },
  },
  {
    aliases: { id: ["enam ratus enam puluh lima", "665"], en: ["six hundred sixty-five", "665"], zh: ["六百六十五"] },
    translation: { ngoko: "enem atus sewidak lima", krama: "enem atus sewidak gangsal", "krama-inggil": "enem atus sewidak gangsal" },
  },
  {
    aliases: { id: ["enam ratus enam puluh enam", "666"], en: ["six hundred sixty-six", "666"], zh: ["六百六十六"] },
    translation: { ngoko: "enem atus sewidak enem", krama: "enem atus sewidak enem", "krama-inggil": "enem atus sewidak enem" },
  },
  {
    aliases: { id: ["enam ratus enam puluh tujuh", "667"], en: ["six hundred sixty-seven", "667"], zh: ["六百六十七"] },
    translation: { ngoko: "enem atus sewidak pitu", krama: "enem atus sewidak pitu", "krama-inggil": "enem atus sewidak pitu" },
  },
  {
    aliases: { id: ["enam ratus enam puluh delapan", "668"], en: ["six hundred sixty-eight", "668"], zh: ["六百六十八"] },
    translation: { ngoko: "enem atus sewidak wolu", krama: "enem atus sewidak wolu", "krama-inggil": "enem atus sewidak wolu" },
  },
  {
    aliases: { id: ["enam ratus enam puluh sembilan", "669"], en: ["six hundred sixty-nine", "669"], zh: ["六百六十九"] },
    translation: { ngoko: "enem atus sewidak sanga", krama: "enem atus sewidak sanga", "krama-inggil": "enem atus sewidak sanga" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh", "670"], en: ["six hundred seventy", "670"], zh: ["六百七十"] },
    translation: { ngoko: "enem atus pitung puluh", krama: "enem atus pitung dasa", "krama-inggil": "enem atus pitung dasa" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh satu", "671"], en: ["six hundred seventy-one", "671"], zh: ["六百七十一"] },
    translation: { ngoko: "enem atus pitung puluh siji", krama: "enem atus pitung dasa setunggal", "krama-inggil": "enem atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh dua", "672"], en: ["six hundred seventy-two", "672"], zh: ["六百七十二"] },
    translation: { ngoko: "enem atus pitung puluh loro", krama: "enem atus pitung dasa kalih", "krama-inggil": "enem atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh tiga", "673"], en: ["six hundred seventy-three", "673"], zh: ["六百七十三"] },
    translation: { ngoko: "enem atus pitung puluh telu", krama: "enem atus pitung dasa tiga", "krama-inggil": "enem atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh empat", "674"], en: ["six hundred seventy-four", "674"], zh: ["六百七十四"] },
    translation: { ngoko: "enem atus pitung puluh papat", krama: "enem atus pitung dasa sekawan", "krama-inggil": "enem atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh lima", "675"], en: ["six hundred seventy-five", "675"], zh: ["六百七十五"] },
    translation: { ngoko: "enem atus pitung puluh lima", krama: "enem atus pitung dasa gangsal", "krama-inggil": "enem atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh enam", "676"], en: ["six hundred seventy-six", "676"], zh: ["六百七十六"] },
    translation: { ngoko: "enem atus pitung puluh enem", krama: "enem atus pitung dasa enem", "krama-inggil": "enem atus pitung dasa enem" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh tujuh", "677"], en: ["six hundred seventy-seven", "677"], zh: ["六百七十七"] },
    translation: { ngoko: "enem atus pitung puluh pitu", krama: "enem atus pitung dasa pitu", "krama-inggil": "enem atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh delapan", "678"], en: ["six hundred seventy-eight", "678"], zh: ["六百七十八"] },
    translation: { ngoko: "enem atus pitung puluh wolu", krama: "enem atus pitung dasa wolu", "krama-inggil": "enem atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus tujuh puluh sembilan", "679"], en: ["six hundred seventy-nine", "679"], zh: ["六百七十九"] },
    translation: { ngoko: "enem atus pitung puluh sanga", krama: "enem atus pitung dasa sanga", "krama-inggil": "enem atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh", "680"], en: ["six hundred eighty", "680"], zh: ["六百八十"] },
    translation: { ngoko: "enem atus wolung puluh", krama: "enem atus wolung dasa", "krama-inggil": "enem atus wolung dasa" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh satu", "681"], en: ["six hundred eighty-one", "681"], zh: ["六百八十一"] },
    translation: { ngoko: "enem atus wolung puluh siji", krama: "enem atus wolung dasa setunggal", "krama-inggil": "enem atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh dua", "682"], en: ["six hundred eighty-two", "682"], zh: ["六百八十二"] },
    translation: { ngoko: "enem atus wolung puluh loro", krama: "enem atus wolung dasa kalih", "krama-inggil": "enem atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh tiga", "683"], en: ["six hundred eighty-three", "683"], zh: ["六百八十三"] },
    translation: { ngoko: "enem atus wolung puluh telu", krama: "enem atus wolung dasa tiga", "krama-inggil": "enem atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh empat", "684"], en: ["six hundred eighty-four", "684"], zh: ["六百八十四"] },
    translation: { ngoko: "enem atus wolung puluh papat", krama: "enem atus wolung dasa sekawan", "krama-inggil": "enem atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh lima", "685"], en: ["six hundred eighty-five", "685"], zh: ["六百八十五"] },
    translation: { ngoko: "enem atus wolung puluh lima", krama: "enem atus wolung dasa gangsal", "krama-inggil": "enem atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh enam", "686"], en: ["six hundred eighty-six", "686"], zh: ["六百八十六"] },
    translation: { ngoko: "enem atus wolung puluh enem", krama: "enem atus wolung dasa enem", "krama-inggil": "enem atus wolung dasa enem" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh tujuh", "687"], en: ["six hundred eighty-seven", "687"], zh: ["六百八十七"] },
    translation: { ngoko: "enem atus wolung puluh pitu", krama: "enem atus wolung dasa pitu", "krama-inggil": "enem atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh delapan", "688"], en: ["six hundred eighty-eight", "688"], zh: ["六百八十八"] },
    translation: { ngoko: "enem atus wolung puluh wolu", krama: "enem atus wolung dasa wolu", "krama-inggil": "enem atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus delapan puluh sembilan", "689"], en: ["six hundred eighty-nine", "689"], zh: ["六百八十九"] },
    translation: { ngoko: "enem atus wolung puluh sanga", krama: "enem atus wolung dasa sanga", "krama-inggil": "enem atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh", "690"], en: ["six hundred ninety", "690"], zh: ["六百九十"] },
    translation: { ngoko: "enem atus sangang puluh", krama: "enem atus sangang dasa", "krama-inggil": "enem atus sangang dasa" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh satu", "691"], en: ["six hundred ninety-one", "691"], zh: ["六百九十一"] },
    translation: { ngoko: "enem atus sangang puluh siji", krama: "enem atus sangang dasa setunggal", "krama-inggil": "enem atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh dua", "692"], en: ["six hundred ninety-two", "692"], zh: ["六百九十二"] },
    translation: { ngoko: "enem atus sangang puluh loro", krama: "enem atus sangang dasa kalih", "krama-inggil": "enem atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh tiga", "693"], en: ["six hundred ninety-three", "693"], zh: ["六百九十三"] },
    translation: { ngoko: "enem atus sangang puluh telu", krama: "enem atus sangang dasa tiga", "krama-inggil": "enem atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh empat", "694"], en: ["six hundred ninety-four", "694"], zh: ["六百九十四"] },
    translation: { ngoko: "enem atus sangang puluh papat", krama: "enem atus sangang dasa sekawan", "krama-inggil": "enem atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh lima", "695"], en: ["six hundred ninety-five", "695"], zh: ["六百九十五"] },
    translation: { ngoko: "enem atus sangang puluh lima", krama: "enem atus sangang dasa gangsal", "krama-inggil": "enem atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh enam", "696"], en: ["six hundred ninety-six", "696"], zh: ["六百九十六"] },
    translation: { ngoko: "enem atus sangang puluh enem", krama: "enem atus sangang dasa enem", "krama-inggil": "enem atus sangang dasa enem" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh tujuh", "697"], en: ["six hundred ninety-seven", "697"], zh: ["六百九十七"] },
    translation: { ngoko: "enem atus sangang puluh pitu", krama: "enem atus sangang dasa pitu", "krama-inggil": "enem atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh delapan", "698"], en: ["six hundred ninety-eight", "698"], zh: ["六百九十八"] },
    translation: { ngoko: "enem atus sangang puluh wolu", krama: "enem atus sangang dasa wolu", "krama-inggil": "enem atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["enam ratus sembilan puluh sembilan", "699"], en: ["six hundred ninety-nine", "699"], zh: ["六百九十九"] },
    translation: { ngoko: "enem atus sangang puluh sanga", krama: "enem atus sangang dasa sanga", "krama-inggil": "enem atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus", "700"], en: ["seven hundred", "700"], zh: ["七百"] },
    translation: { ngoko: "pitung atus", krama: "pitu atus", "krama-inggil": "pitu atus" },
  },
  {
    aliases: { id: ["tujuh ratus satu", "701"], en: ["seven hundred one", "701"], zh: ["七百零一"] },
    translation: { ngoko: "pitung atus siji", krama: "pitu atus setunggal", "krama-inggil": "pitu atus setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus dua", "702"], en: ["seven hundred two", "702"], zh: ["七百零二"] },
    translation: { ngoko: "pitung atus loro", krama: "pitu atus kalih", "krama-inggil": "pitu atus kalih" },
  },
  {
    aliases: { id: ["tujuh ratus tiga", "703"], en: ["seven hundred three", "703"], zh: ["七百零三"] },
    translation: { ngoko: "pitung atus telu", krama: "pitu atus tiga", "krama-inggil": "pitu atus tiga" },
  },
  {
    aliases: { id: ["tujuh ratus empat", "704"], en: ["seven hundred four", "704"], zh: ["七百零四"] },
    translation: { ngoko: "pitung atus papat", krama: "pitu atus sekawan", "krama-inggil": "pitu atus sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus lima", "705"], en: ["seven hundred five", "705"], zh: ["七百零五"] },
    translation: { ngoko: "pitung atus lima", krama: "pitu atus gangsal", "krama-inggil": "pitu atus gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus enam", "706"], en: ["seven hundred six", "706"], zh: ["七百零六"] },
    translation: { ngoko: "pitung atus enem", krama: "pitu atus enem", "krama-inggil": "pitu atus enem" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh", "707"], en: ["seven hundred seven", "707"], zh: ["七百零七"] },
    translation: { ngoko: "pitung atus pitu", krama: "pitu atus pitu", "krama-inggil": "pitu atus pitu" },
  },
  {
    aliases: { id: ["tujuh ratus delapan", "708"], en: ["seven hundred eight", "708"], zh: ["七百零八"] },
    translation: { ngoko: "pitung atus wolu", krama: "pitu atus wolu", "krama-inggil": "pitu atus wolu" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan", "709"], en: ["seven hundred nine", "709"], zh: ["七百零九"] },
    translation: { ngoko: "pitung atus sanga", krama: "pitu atus sanga", "krama-inggil": "pitu atus sanga" },
  },
  {
    aliases: { id: ["tujuh ratus sepuluh", "710"], en: ["seven hundred ten", "710"], zh: ["七百十"] },
    translation: { ngoko: "pitung atus sepuluh", krama: "pitu atus sedasa", "krama-inggil": "pitu atus sedasa" },
  },
  {
    aliases: { id: ["tujuh ratus sebelas", "711"], en: ["seven hundred eleven", "711"], zh: ["七百十一"] },
    translation: { ngoko: "pitung atus sewelas", krama: "pitu atus sewelas", "krama-inggil": "pitu atus sewelas" },
  },
  {
    aliases: { id: ["tujuh ratus dua belas", "712"], en: ["seven hundred twelve", "712"], zh: ["七百十二"] },
    translation: { ngoko: "pitung atus rolas", krama: "pitu atus kalih welas", "krama-inggil": "pitu atus kalih welas" },
  },
  {
    aliases: { id: ["tujuh ratus tiga belas", "713"], en: ["seven hundred thirteen", "713"], zh: ["七百十三"] },
    translation: { ngoko: "pitung atus telulas", krama: "pitu atus tiga welas", "krama-inggil": "pitu atus tiga welas" },
  },
  {
    aliases: { id: ["tujuh ratus empat belas", "714"], en: ["seven hundred fourteen", "714"], zh: ["七百十四"] },
    translation: { ngoko: "pitung atus patbelas", krama: "pitu atus sekawan welas", "krama-inggil": "pitu atus sekawan welas" },
  },
  {
    aliases: { id: ["tujuh ratus lima belas", "715"], en: ["seven hundred fifteen", "715"], zh: ["七百十五"] },
    translation: { ngoko: "pitung atus limolas", krama: "pitu atus gangsal welas", "krama-inggil": "pitu atus gangsal welas" },
  },
  {
    aliases: { id: ["tujuh ratus enam belas", "716"], en: ["seven hundred sixteen", "716"], zh: ["七百十六"] },
    translation: { ngoko: "pitung atus nembelas", krama: "pitu atus enem welas", "krama-inggil": "pitu atus enem welas" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh belas", "717"], en: ["seven hundred seventeen", "717"], zh: ["七百十七"] },
    translation: { ngoko: "pitung atus pitulas", krama: "pitu atus pitulas", "krama-inggil": "pitu atus pitulas" },
  },
  {
    aliases: { id: ["tujuh ratus delapan belas", "718"], en: ["seven hundred eighteen", "718"], zh: ["七百十八"] },
    translation: { ngoko: "pitung atus wolulas", krama: "pitu atus wolulas", "krama-inggil": "pitu atus wolulas" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan belas", "719"], en: ["seven hundred nineteen", "719"], zh: ["七百十九"] },
    translation: { ngoko: "pitung atus sangalas", krama: "pitu atus sangalas", "krama-inggil": "pitu atus sangalas" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh", "720"], en: ["seven hundred twenty", "720"], zh: ["七百二十"] },
    translation: { ngoko: "pitung atus rong puluh", krama: "pitu atus kalih dasa", "krama-inggil": "pitu atus kalih dasa" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh satu", "721"], en: ["seven hundred twenty-one", "721"], zh: ["七百二十一"] },
    translation: { ngoko: "pitung atus selikur", krama: "pitu atus kalih dasa setunggal", "krama-inggil": "pitu atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh dua", "722"], en: ["seven hundred twenty-two", "722"], zh: ["七百二十二"] },
    translation: { ngoko: "pitung atus rolikur", krama: "pitu atus kalih dasa kalih", "krama-inggil": "pitu atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh tiga", "723"], en: ["seven hundred twenty-three", "723"], zh: ["七百二十三"] },
    translation: { ngoko: "pitung atus telulikur", krama: "pitu atus kalih dasa tiga", "krama-inggil": "pitu atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh empat", "724"], en: ["seven hundred twenty-four", "724"], zh: ["七百二十四"] },
    translation: { ngoko: "pitung atus patlikur", krama: "pitu atus kalih dasa sekawan", "krama-inggil": "pitu atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh lima", "725"], en: ["seven hundred twenty-five", "725"], zh: ["七百二十五"] },
    translation: { ngoko: "pitung atus selawe", krama: "pitu atus selangkung", "krama-inggil": "pitu atus selangkung" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh enam", "726"], en: ["seven hundred twenty-six", "726"], zh: ["七百二十六"] },
    translation: { ngoko: "pitung atus nemlikur", krama: "pitu atus kalih dasa enem", "krama-inggil": "pitu atus kalih dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh tujuh", "727"], en: ["seven hundred twenty-seven", "727"], zh: ["七百二十七"] },
    translation: { ngoko: "pitung atus pitulikur", krama: "pitu atus kalih dasa pitu", "krama-inggil": "pitu atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh delapan", "728"], en: ["seven hundred twenty-eight", "728"], zh: ["七百二十八"] },
    translation: { ngoko: "pitung atus wolulikur", krama: "pitu atus kalih dasa wolu", "krama-inggil": "pitu atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus dua puluh sembilan", "729"], en: ["seven hundred twenty-nine", "729"], zh: ["七百二十九"] },
    translation: { ngoko: "pitung atus sangalikur", krama: "pitu atus kalih dasa sanga", "krama-inggil": "pitu atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh", "730"], en: ["seven hundred thirty", "730"], zh: ["七百三十"] },
    translation: { ngoko: "pitung atus telung puluh", krama: "pitu atus tigang dasa", "krama-inggil": "pitu atus tigang dasa" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh satu", "731"], en: ["seven hundred thirty-one", "731"], zh: ["七百三十一"] },
    translation: { ngoko: "pitung atus telung puluh siji", krama: "pitu atus tigang dasa setunggal", "krama-inggil": "pitu atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh dua", "732"], en: ["seven hundred thirty-two", "732"], zh: ["七百三十二"] },
    translation: { ngoko: "pitung atus telung puluh loro", krama: "pitu atus tigang dasa kalih", "krama-inggil": "pitu atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh tiga", "733"], en: ["seven hundred thirty-three", "733"], zh: ["七百三十三"] },
    translation: { ngoko: "pitung atus telung puluh telu", krama: "pitu atus tigang dasa tiga", "krama-inggil": "pitu atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh empat", "734"], en: ["seven hundred thirty-four", "734"], zh: ["七百三十四"] },
    translation: { ngoko: "pitung atus telung puluh papat", krama: "pitu atus tigang dasa sekawan", "krama-inggil": "pitu atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh lima", "735"], en: ["seven hundred thirty-five", "735"], zh: ["七百三十五"] },
    translation: { ngoko: "pitung atus telung puluh lima", krama: "pitu atus tigang dasa gangsal", "krama-inggil": "pitu atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh enam", "736"], en: ["seven hundred thirty-six", "736"], zh: ["七百三十六"] },
    translation: { ngoko: "pitung atus telung puluh enem", krama: "pitu atus tigang dasa enem", "krama-inggil": "pitu atus tigang dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh tujuh", "737"], en: ["seven hundred thirty-seven", "737"], zh: ["七百三十七"] },
    translation: { ngoko: "pitung atus telung puluh pitu", krama: "pitu atus tigang dasa pitu", "krama-inggil": "pitu atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh delapan", "738"], en: ["seven hundred thirty-eight", "738"], zh: ["七百三十八"] },
    translation: { ngoko: "pitung atus telung puluh wolu", krama: "pitu atus tigang dasa wolu", "krama-inggil": "pitu atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus tiga puluh sembilan", "739"], en: ["seven hundred thirty-nine", "739"], zh: ["七百三十九"] },
    translation: { ngoko: "pitung atus telung puluh sanga", krama: "pitu atus tigang dasa sanga", "krama-inggil": "pitu atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh", "740"], en: ["seven hundred forty", "740"], zh: ["七百四十"] },
    translation: { ngoko: "pitung atus patang puluh", krama: "pitu atus sekawan dasa", "krama-inggil": "pitu atus sekawan dasa" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh satu", "741"], en: ["seven hundred forty-one", "741"], zh: ["七百四十一"] },
    translation: { ngoko: "pitung atus patang puluh siji", krama: "pitu atus sekawan dasa setunggal", "krama-inggil": "pitu atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh dua", "742"], en: ["seven hundred forty-two", "742"], zh: ["七百四十二"] },
    translation: { ngoko: "pitung atus patang puluh loro", krama: "pitu atus sekawan dasa kalih", "krama-inggil": "pitu atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh tiga", "743"], en: ["seven hundred forty-three", "743"], zh: ["七百四十三"] },
    translation: { ngoko: "pitung atus patang puluh telu", krama: "pitu atus sekawan dasa tiga", "krama-inggil": "pitu atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh empat", "744"], en: ["seven hundred forty-four", "744"], zh: ["七百四十四"] },
    translation: { ngoko: "pitung atus patang puluh papat", krama: "pitu atus sekawan dasa sekawan", "krama-inggil": "pitu atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh lima", "745"], en: ["seven hundred forty-five", "745"], zh: ["七百四十五"] },
    translation: { ngoko: "pitung atus patang puluh lima", krama: "pitu atus sekawan dasa gangsal", "krama-inggil": "pitu atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh enam", "746"], en: ["seven hundred forty-six", "746"], zh: ["七百四十六"] },
    translation: { ngoko: "pitung atus patang puluh enem", krama: "pitu atus sekawan dasa enem", "krama-inggil": "pitu atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh tujuh", "747"], en: ["seven hundred forty-seven", "747"], zh: ["七百四十七"] },
    translation: { ngoko: "pitung atus patang puluh pitu", krama: "pitu atus sekawan dasa pitu", "krama-inggil": "pitu atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh delapan", "748"], en: ["seven hundred forty-eight", "748"], zh: ["七百四十八"] },
    translation: { ngoko: "pitung atus patang puluh wolu", krama: "pitu atus sekawan dasa wolu", "krama-inggil": "pitu atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus empat puluh sembilan", "749"], en: ["seven hundred forty-nine", "749"], zh: ["七百四十九"] },
    translation: { ngoko: "pitung atus patang puluh sanga", krama: "pitu atus sekawan dasa sanga", "krama-inggil": "pitu atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh", "750"], en: ["seven hundred fifty", "750"], zh: ["七百五十"] },
    translation: { ngoko: "pitung atus seket", krama: "pitu atus seket", "krama-inggil": "pitu atus seket" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh satu", "751"], en: ["seven hundred fifty-one", "751"], zh: ["七百五十一"] },
    translation: { ngoko: "pitung atus seket siji", krama: "pitu atus seket setunggal", "krama-inggil": "pitu atus seket setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh dua", "752"], en: ["seven hundred fifty-two", "752"], zh: ["七百五十二"] },
    translation: { ngoko: "pitung atus seket loro", krama: "pitu atus seket kalih", "krama-inggil": "pitu atus seket kalih" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh tiga", "753"], en: ["seven hundred fifty-three", "753"], zh: ["七百五十三"] },
    translation: { ngoko: "pitung atus seket telu", krama: "pitu atus seket tiga", "krama-inggil": "pitu atus seket tiga" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh empat", "754"], en: ["seven hundred fifty-four", "754"], zh: ["七百五十四"] },
    translation: { ngoko: "pitung atus seket papat", krama: "pitu atus seket sekawan", "krama-inggil": "pitu atus seket sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh lima", "755"], en: ["seven hundred fifty-five", "755"], zh: ["七百五十五"] },
    translation: { ngoko: "pitung atus seket lima", krama: "pitu atus seket gangsal", "krama-inggil": "pitu atus seket gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh enam", "756"], en: ["seven hundred fifty-six", "756"], zh: ["七百五十六"] },
    translation: { ngoko: "pitung atus seket enem", krama: "pitu atus seket enem", "krama-inggil": "pitu atus seket enem" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh tujuh", "757"], en: ["seven hundred fifty-seven", "757"], zh: ["七百五十七"] },
    translation: { ngoko: "pitung atus seket pitu", krama: "pitu atus seket pitu", "krama-inggil": "pitu atus seket pitu" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh delapan", "758"], en: ["seven hundred fifty-eight", "758"], zh: ["七百五十八"] },
    translation: { ngoko: "pitung atus seket wolu", krama: "pitu atus seket wolu", "krama-inggil": "pitu atus seket wolu" },
  },
  {
    aliases: { id: ["tujuh ratus lima puluh sembilan", "759"], en: ["seven hundred fifty-nine", "759"], zh: ["七百五十九"] },
    translation: { ngoko: "pitung atus seket sanga", krama: "pitu atus seket sanga", "krama-inggil": "pitu atus seket sanga" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh", "760"], en: ["seven hundred sixty", "760"], zh: ["七百六十"] },
    translation: { ngoko: "pitung atus sewidak", krama: "pitu atus sewidak", "krama-inggil": "pitu atus sewidak" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh satu", "761"], en: ["seven hundred sixty-one", "761"], zh: ["七百六十一"] },
    translation: { ngoko: "pitung atus sewidak siji", krama: "pitu atus sewidak setunggal", "krama-inggil": "pitu atus sewidak setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh dua", "762"], en: ["seven hundred sixty-two", "762"], zh: ["七百六十二"] },
    translation: { ngoko: "pitung atus sewidak loro", krama: "pitu atus sewidak kalih", "krama-inggil": "pitu atus sewidak kalih" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh tiga", "763"], en: ["seven hundred sixty-three", "763"], zh: ["七百六十三"] },
    translation: { ngoko: "pitung atus sewidak telu", krama: "pitu atus sewidak tiga", "krama-inggil": "pitu atus sewidak tiga" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh empat", "764"], en: ["seven hundred sixty-four", "764"], zh: ["七百六十四"] },
    translation: { ngoko: "pitung atus sewidak papat", krama: "pitu atus sewidak sekawan", "krama-inggil": "pitu atus sewidak sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh lima", "765"], en: ["seven hundred sixty-five", "765"], zh: ["七百六十五"] },
    translation: { ngoko: "pitung atus sewidak lima", krama: "pitu atus sewidak gangsal", "krama-inggil": "pitu atus sewidak gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh enam", "766"], en: ["seven hundred sixty-six", "766"], zh: ["七百六十六"] },
    translation: { ngoko: "pitung atus sewidak enem", krama: "pitu atus sewidak enem", "krama-inggil": "pitu atus sewidak enem" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh tujuh", "767"], en: ["seven hundred sixty-seven", "767"], zh: ["七百六十七"] },
    translation: { ngoko: "pitung atus sewidak pitu", krama: "pitu atus sewidak pitu", "krama-inggil": "pitu atus sewidak pitu" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh delapan", "768"], en: ["seven hundred sixty-eight", "768"], zh: ["七百六十八"] },
    translation: { ngoko: "pitung atus sewidak wolu", krama: "pitu atus sewidak wolu", "krama-inggil": "pitu atus sewidak wolu" },
  },
  {
    aliases: { id: ["tujuh ratus enam puluh sembilan", "769"], en: ["seven hundred sixty-nine", "769"], zh: ["七百六十九"] },
    translation: { ngoko: "pitung atus sewidak sanga", krama: "pitu atus sewidak sanga", "krama-inggil": "pitu atus sewidak sanga" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh", "770"], en: ["seven hundred seventy", "770"], zh: ["七百七十"] },
    translation: { ngoko: "pitung atus pitung puluh", krama: "pitu atus pitung dasa", "krama-inggil": "pitu atus pitung dasa" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh satu", "771"], en: ["seven hundred seventy-one", "771"], zh: ["七百七十一"] },
    translation: { ngoko: "pitung atus pitung puluh siji", krama: "pitu atus pitung dasa setunggal", "krama-inggil": "pitu atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh dua", "772"], en: ["seven hundred seventy-two", "772"], zh: ["七百七十二"] },
    translation: { ngoko: "pitung atus pitung puluh loro", krama: "pitu atus pitung dasa kalih", "krama-inggil": "pitu atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh tiga", "773"], en: ["seven hundred seventy-three", "773"], zh: ["七百七十三"] },
    translation: { ngoko: "pitung atus pitung puluh telu", krama: "pitu atus pitung dasa tiga", "krama-inggil": "pitu atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh empat", "774"], en: ["seven hundred seventy-four", "774"], zh: ["七百七十四"] },
    translation: { ngoko: "pitung atus pitung puluh papat", krama: "pitu atus pitung dasa sekawan", "krama-inggil": "pitu atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh lima", "775"], en: ["seven hundred seventy-five", "775"], zh: ["七百七十五"] },
    translation: { ngoko: "pitung atus pitung puluh lima", krama: "pitu atus pitung dasa gangsal", "krama-inggil": "pitu atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh enam", "776"], en: ["seven hundred seventy-six", "776"], zh: ["七百七十六"] },
    translation: { ngoko: "pitung atus pitung puluh enem", krama: "pitu atus pitung dasa enem", "krama-inggil": "pitu atus pitung dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh tujuh", "777"], en: ["seven hundred seventy-seven", "777"], zh: ["七百七十七"] },
    translation: { ngoko: "pitung atus pitung puluh pitu", krama: "pitu atus pitung dasa pitu", "krama-inggil": "pitu atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh delapan", "778"], en: ["seven hundred seventy-eight", "778"], zh: ["七百七十八"] },
    translation: { ngoko: "pitung atus pitung puluh wolu", krama: "pitu atus pitung dasa wolu", "krama-inggil": "pitu atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus tujuh puluh sembilan", "779"], en: ["seven hundred seventy-nine", "779"], zh: ["七百七十九"] },
    translation: { ngoko: "pitung atus pitung puluh sanga", krama: "pitu atus pitung dasa sanga", "krama-inggil": "pitu atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh", "780"], en: ["seven hundred eighty", "780"], zh: ["七百八十"] },
    translation: { ngoko: "pitung atus wolung puluh", krama: "pitu atus wolung dasa", "krama-inggil": "pitu atus wolung dasa" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh satu", "781"], en: ["seven hundred eighty-one", "781"], zh: ["七百八十一"] },
    translation: { ngoko: "pitung atus wolung puluh siji", krama: "pitu atus wolung dasa setunggal", "krama-inggil": "pitu atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh dua", "782"], en: ["seven hundred eighty-two", "782"], zh: ["七百八十二"] },
    translation: { ngoko: "pitung atus wolung puluh loro", krama: "pitu atus wolung dasa kalih", "krama-inggil": "pitu atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh tiga", "783"], en: ["seven hundred eighty-three", "783"], zh: ["七百八十三"] },
    translation: { ngoko: "pitung atus wolung puluh telu", krama: "pitu atus wolung dasa tiga", "krama-inggil": "pitu atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh empat", "784"], en: ["seven hundred eighty-four", "784"], zh: ["七百八十四"] },
    translation: { ngoko: "pitung atus wolung puluh papat", krama: "pitu atus wolung dasa sekawan", "krama-inggil": "pitu atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh lima", "785"], en: ["seven hundred eighty-five", "785"], zh: ["七百八十五"] },
    translation: { ngoko: "pitung atus wolung puluh lima", krama: "pitu atus wolung dasa gangsal", "krama-inggil": "pitu atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh enam", "786"], en: ["seven hundred eighty-six", "786"], zh: ["七百八十六"] },
    translation: { ngoko: "pitung atus wolung puluh enem", krama: "pitu atus wolung dasa enem", "krama-inggil": "pitu atus wolung dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh tujuh", "787"], en: ["seven hundred eighty-seven", "787"], zh: ["七百八十七"] },
    translation: { ngoko: "pitung atus wolung puluh pitu", krama: "pitu atus wolung dasa pitu", "krama-inggil": "pitu atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh delapan", "788"], en: ["seven hundred eighty-eight", "788"], zh: ["七百八十八"] },
    translation: { ngoko: "pitung atus wolung puluh wolu", krama: "pitu atus wolung dasa wolu", "krama-inggil": "pitu atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus delapan puluh sembilan", "789"], en: ["seven hundred eighty-nine", "789"], zh: ["七百八十九"] },
    translation: { ngoko: "pitung atus wolung puluh sanga", krama: "pitu atus wolung dasa sanga", "krama-inggil": "pitu atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh", "790"], en: ["seven hundred ninety", "790"], zh: ["七百九十"] },
    translation: { ngoko: "pitung atus sangang puluh", krama: "pitu atus sangang dasa", "krama-inggil": "pitu atus sangang dasa" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh satu", "791"], en: ["seven hundred ninety-one", "791"], zh: ["七百九十一"] },
    translation: { ngoko: "pitung atus sangang puluh siji", krama: "pitu atus sangang dasa setunggal", "krama-inggil": "pitu atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh dua", "792"], en: ["seven hundred ninety-two", "792"], zh: ["七百九十二"] },
    translation: { ngoko: "pitung atus sangang puluh loro", krama: "pitu atus sangang dasa kalih", "krama-inggil": "pitu atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh tiga", "793"], en: ["seven hundred ninety-three", "793"], zh: ["七百九十三"] },
    translation: { ngoko: "pitung atus sangang puluh telu", krama: "pitu atus sangang dasa tiga", "krama-inggil": "pitu atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh empat", "794"], en: ["seven hundred ninety-four", "794"], zh: ["七百九十四"] },
    translation: { ngoko: "pitung atus sangang puluh papat", krama: "pitu atus sangang dasa sekawan", "krama-inggil": "pitu atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh lima", "795"], en: ["seven hundred ninety-five", "795"], zh: ["七百九十五"] },
    translation: { ngoko: "pitung atus sangang puluh lima", krama: "pitu atus sangang dasa gangsal", "krama-inggil": "pitu atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh enam", "796"], en: ["seven hundred ninety-six", "796"], zh: ["七百九十六"] },
    translation: { ngoko: "pitung atus sangang puluh enem", krama: "pitu atus sangang dasa enem", "krama-inggil": "pitu atus sangang dasa enem" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh tujuh", "797"], en: ["seven hundred ninety-seven", "797"], zh: ["七百九十七"] },
    translation: { ngoko: "pitung atus sangang puluh pitu", krama: "pitu atus sangang dasa pitu", "krama-inggil": "pitu atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh delapan", "798"], en: ["seven hundred ninety-eight", "798"], zh: ["七百九十八"] },
    translation: { ngoko: "pitung atus sangang puluh wolu", krama: "pitu atus sangang dasa wolu", "krama-inggil": "pitu atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["tujuh ratus sembilan puluh sembilan", "799"], en: ["seven hundred ninety-nine", "799"], zh: ["七百九十九"] },
    translation: { ngoko: "pitung atus sangang puluh sanga", krama: "pitu atus sangang dasa sanga", "krama-inggil": "pitu atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus", "800"], en: ["eight hundred", "800"], zh: ["八百"] },
    translation: { ngoko: "wolung atus", krama: "wolu atus", "krama-inggil": "wolu atus" },
  },
  {
    aliases: { id: ["delapan ratus satu", "801"], en: ["eight hundred one", "801"], zh: ["八百零一"] },
    translation: { ngoko: "wolung atus siji", krama: "wolu atus setunggal", "krama-inggil": "wolu atus setunggal" },
  },
  {
    aliases: { id: ["delapan ratus dua", "802"], en: ["eight hundred two", "802"], zh: ["八百零二"] },
    translation: { ngoko: "wolung atus loro", krama: "wolu atus kalih", "krama-inggil": "wolu atus kalih" },
  },
  {
    aliases: { id: ["delapan ratus tiga", "803"], en: ["eight hundred three", "803"], zh: ["八百零三"] },
    translation: { ngoko: "wolung atus telu", krama: "wolu atus tiga", "krama-inggil": "wolu atus tiga" },
  },
  {
    aliases: { id: ["delapan ratus empat", "804"], en: ["eight hundred four", "804"], zh: ["八百零四"] },
    translation: { ngoko: "wolung atus papat", krama: "wolu atus sekawan", "krama-inggil": "wolu atus sekawan" },
  },
  {
    aliases: { id: ["delapan ratus lima", "805"], en: ["eight hundred five", "805"], zh: ["八百零五"] },
    translation: { ngoko: "wolung atus lima", krama: "wolu atus gangsal", "krama-inggil": "wolu atus gangsal" },
  },
  {
    aliases: { id: ["delapan ratus enam", "806"], en: ["eight hundred six", "806"], zh: ["八百零六"] },
    translation: { ngoko: "wolung atus enem", krama: "wolu atus enem", "krama-inggil": "wolu atus enem" },
  },
  {
    aliases: { id: ["delapan ratus tujuh", "807"], en: ["eight hundred seven", "807"], zh: ["八百零七"] },
    translation: { ngoko: "wolung atus pitu", krama: "wolu atus pitu", "krama-inggil": "wolu atus pitu" },
  },
  {
    aliases: { id: ["delapan ratus delapan", "808"], en: ["eight hundred eight", "808"], zh: ["八百零八"] },
    translation: { ngoko: "wolung atus wolu", krama: "wolu atus wolu", "krama-inggil": "wolu atus wolu" },
  },
  {
    aliases: { id: ["delapan ratus sembilan", "809"], en: ["eight hundred nine", "809"], zh: ["八百零九"] },
    translation: { ngoko: "wolung atus sanga", krama: "wolu atus sanga", "krama-inggil": "wolu atus sanga" },
  },
  {
    aliases: { id: ["delapan ratus sepuluh", "810"], en: ["eight hundred ten", "810"], zh: ["八百十"] },
    translation: { ngoko: "wolung atus sepuluh", krama: "wolu atus sedasa", "krama-inggil": "wolu atus sedasa" },
  },
  {
    aliases: { id: ["delapan ratus sebelas", "811"], en: ["eight hundred eleven", "811"], zh: ["八百十一"] },
    translation: { ngoko: "wolung atus sewelas", krama: "wolu atus sewelas", "krama-inggil": "wolu atus sewelas" },
  },
  {
    aliases: { id: ["delapan ratus dua belas", "812"], en: ["eight hundred twelve", "812"], zh: ["八百十二"] },
    translation: { ngoko: "wolung atus rolas", krama: "wolu atus kalih welas", "krama-inggil": "wolu atus kalih welas" },
  },
  {
    aliases: { id: ["delapan ratus tiga belas", "813"], en: ["eight hundred thirteen", "813"], zh: ["八百十三"] },
    translation: { ngoko: "wolung atus telulas", krama: "wolu atus tiga welas", "krama-inggil": "wolu atus tiga welas" },
  },
  {
    aliases: { id: ["delapan ratus empat belas", "814"], en: ["eight hundred fourteen", "814"], zh: ["八百十四"] },
    translation: { ngoko: "wolung atus patbelas", krama: "wolu atus sekawan welas", "krama-inggil": "wolu atus sekawan welas" },
  },
  {
    aliases: { id: ["delapan ratus lima belas", "815"], en: ["eight hundred fifteen", "815"], zh: ["八百十五"] },
    translation: { ngoko: "wolung atus limolas", krama: "wolu atus gangsal welas", "krama-inggil": "wolu atus gangsal welas" },
  },
  {
    aliases: { id: ["delapan ratus enam belas", "816"], en: ["eight hundred sixteen", "816"], zh: ["八百十六"] },
    translation: { ngoko: "wolung atus nembelas", krama: "wolu atus enem welas", "krama-inggil": "wolu atus enem welas" },
  },
  {
    aliases: { id: ["delapan ratus tujuh belas", "817"], en: ["eight hundred seventeen", "817"], zh: ["八百十七"] },
    translation: { ngoko: "wolung atus pitulas", krama: "wolu atus pitulas", "krama-inggil": "wolu atus pitulas" },
  },
  {
    aliases: { id: ["delapan ratus delapan belas", "818"], en: ["eight hundred eighteen", "818"], zh: ["八百十八"] },
    translation: { ngoko: "wolung atus wolulas", krama: "wolu atus wolulas", "krama-inggil": "wolu atus wolulas" },
  },
  {
    aliases: { id: ["delapan ratus sembilan belas", "819"], en: ["eight hundred nineteen", "819"], zh: ["八百十九"] },
    translation: { ngoko: "wolung atus sangalas", krama: "wolu atus sangalas", "krama-inggil": "wolu atus sangalas" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh", "820"], en: ["eight hundred twenty", "820"], zh: ["八百二十"] },
    translation: { ngoko: "wolung atus rong puluh", krama: "wolu atus kalih dasa", "krama-inggil": "wolu atus kalih dasa" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh satu", "821"], en: ["eight hundred twenty-one", "821"], zh: ["八百二十一"] },
    translation: { ngoko: "wolung atus selikur", krama: "wolu atus kalih dasa setunggal", "krama-inggil": "wolu atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh dua", "822"], en: ["eight hundred twenty-two", "822"], zh: ["八百二十二"] },
    translation: { ngoko: "wolung atus rolikur", krama: "wolu atus kalih dasa kalih", "krama-inggil": "wolu atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh tiga", "823"], en: ["eight hundred twenty-three", "823"], zh: ["八百二十三"] },
    translation: { ngoko: "wolung atus telulikur", krama: "wolu atus kalih dasa tiga", "krama-inggil": "wolu atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh empat", "824"], en: ["eight hundred twenty-four", "824"], zh: ["八百二十四"] },
    translation: { ngoko: "wolung atus patlikur", krama: "wolu atus kalih dasa sekawan", "krama-inggil": "wolu atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh lima", "825"], en: ["eight hundred twenty-five", "825"], zh: ["八百二十五"] },
    translation: { ngoko: "wolung atus selawe", krama: "wolu atus selangkung", "krama-inggil": "wolu atus selangkung" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh enam", "826"], en: ["eight hundred twenty-six", "826"], zh: ["八百二十六"] },
    translation: { ngoko: "wolung atus nemlikur", krama: "wolu atus kalih dasa enem", "krama-inggil": "wolu atus kalih dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh tujuh", "827"], en: ["eight hundred twenty-seven", "827"], zh: ["八百二十七"] },
    translation: { ngoko: "wolung atus pitulikur", krama: "wolu atus kalih dasa pitu", "krama-inggil": "wolu atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh delapan", "828"], en: ["eight hundred twenty-eight", "828"], zh: ["八百二十八"] },
    translation: { ngoko: "wolung atus wolulikur", krama: "wolu atus kalih dasa wolu", "krama-inggil": "wolu atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus dua puluh sembilan", "829"], en: ["eight hundred twenty-nine", "829"], zh: ["八百二十九"] },
    translation: { ngoko: "wolung atus sangalikur", krama: "wolu atus kalih dasa sanga", "krama-inggil": "wolu atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh", "830"], en: ["eight hundred thirty", "830"], zh: ["八百三十"] },
    translation: { ngoko: "wolung atus telung puluh", krama: "wolu atus tigang dasa", "krama-inggil": "wolu atus tigang dasa" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh satu", "831"], en: ["eight hundred thirty-one", "831"], zh: ["八百三十一"] },
    translation: { ngoko: "wolung atus telung puluh siji", krama: "wolu atus tigang dasa setunggal", "krama-inggil": "wolu atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh dua", "832"], en: ["eight hundred thirty-two", "832"], zh: ["八百三十二"] },
    translation: { ngoko: "wolung atus telung puluh loro", krama: "wolu atus tigang dasa kalih", "krama-inggil": "wolu atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh tiga", "833"], en: ["eight hundred thirty-three", "833"], zh: ["八百三十三"] },
    translation: { ngoko: "wolung atus telung puluh telu", krama: "wolu atus tigang dasa tiga", "krama-inggil": "wolu atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh empat", "834"], en: ["eight hundred thirty-four", "834"], zh: ["八百三十四"] },
    translation: { ngoko: "wolung atus telung puluh papat", krama: "wolu atus tigang dasa sekawan", "krama-inggil": "wolu atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh lima", "835"], en: ["eight hundred thirty-five", "835"], zh: ["八百三十五"] },
    translation: { ngoko: "wolung atus telung puluh lima", krama: "wolu atus tigang dasa gangsal", "krama-inggil": "wolu atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh enam", "836"], en: ["eight hundred thirty-six", "836"], zh: ["八百三十六"] },
    translation: { ngoko: "wolung atus telung puluh enem", krama: "wolu atus tigang dasa enem", "krama-inggil": "wolu atus tigang dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh tujuh", "837"], en: ["eight hundred thirty-seven", "837"], zh: ["八百三十七"] },
    translation: { ngoko: "wolung atus telung puluh pitu", krama: "wolu atus tigang dasa pitu", "krama-inggil": "wolu atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh delapan", "838"], en: ["eight hundred thirty-eight", "838"], zh: ["八百三十八"] },
    translation: { ngoko: "wolung atus telung puluh wolu", krama: "wolu atus tigang dasa wolu", "krama-inggil": "wolu atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus tiga puluh sembilan", "839"], en: ["eight hundred thirty-nine", "839"], zh: ["八百三十九"] },
    translation: { ngoko: "wolung atus telung puluh sanga", krama: "wolu atus tigang dasa sanga", "krama-inggil": "wolu atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh", "840"], en: ["eight hundred forty", "840"], zh: ["八百四十"] },
    translation: { ngoko: "wolung atus patang puluh", krama: "wolu atus sekawan dasa", "krama-inggil": "wolu atus sekawan dasa" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh satu", "841"], en: ["eight hundred forty-one", "841"], zh: ["八百四十一"] },
    translation: { ngoko: "wolung atus patang puluh siji", krama: "wolu atus sekawan dasa setunggal", "krama-inggil": "wolu atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh dua", "842"], en: ["eight hundred forty-two", "842"], zh: ["八百四十二"] },
    translation: { ngoko: "wolung atus patang puluh loro", krama: "wolu atus sekawan dasa kalih", "krama-inggil": "wolu atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh tiga", "843"], en: ["eight hundred forty-three", "843"], zh: ["八百四十三"] },
    translation: { ngoko: "wolung atus patang puluh telu", krama: "wolu atus sekawan dasa tiga", "krama-inggil": "wolu atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh empat", "844"], en: ["eight hundred forty-four", "844"], zh: ["八百四十四"] },
    translation: { ngoko: "wolung atus patang puluh papat", krama: "wolu atus sekawan dasa sekawan", "krama-inggil": "wolu atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh lima", "845"], en: ["eight hundred forty-five", "845"], zh: ["八百四十五"] },
    translation: { ngoko: "wolung atus patang puluh lima", krama: "wolu atus sekawan dasa gangsal", "krama-inggil": "wolu atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh enam", "846"], en: ["eight hundred forty-six", "846"], zh: ["八百四十六"] },
    translation: { ngoko: "wolung atus patang puluh enem", krama: "wolu atus sekawan dasa enem", "krama-inggil": "wolu atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh tujuh", "847"], en: ["eight hundred forty-seven", "847"], zh: ["八百四十七"] },
    translation: { ngoko: "wolung atus patang puluh pitu", krama: "wolu atus sekawan dasa pitu", "krama-inggil": "wolu atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh delapan", "848"], en: ["eight hundred forty-eight", "848"], zh: ["八百四十八"] },
    translation: { ngoko: "wolung atus patang puluh wolu", krama: "wolu atus sekawan dasa wolu", "krama-inggil": "wolu atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus empat puluh sembilan", "849"], en: ["eight hundred forty-nine", "849"], zh: ["八百四十九"] },
    translation: { ngoko: "wolung atus patang puluh sanga", krama: "wolu atus sekawan dasa sanga", "krama-inggil": "wolu atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh", "850"], en: ["eight hundred fifty", "850"], zh: ["八百五十"] },
    translation: { ngoko: "wolung atus seket", krama: "wolu atus seket", "krama-inggil": "wolu atus seket" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh satu", "851"], en: ["eight hundred fifty-one", "851"], zh: ["八百五十一"] },
    translation: { ngoko: "wolung atus seket siji", krama: "wolu atus seket setunggal", "krama-inggil": "wolu atus seket setunggal" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh dua", "852"], en: ["eight hundred fifty-two", "852"], zh: ["八百五十二"] },
    translation: { ngoko: "wolung atus seket loro", krama: "wolu atus seket kalih", "krama-inggil": "wolu atus seket kalih" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh tiga", "853"], en: ["eight hundred fifty-three", "853"], zh: ["八百五十三"] },
    translation: { ngoko: "wolung atus seket telu", krama: "wolu atus seket tiga", "krama-inggil": "wolu atus seket tiga" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh empat", "854"], en: ["eight hundred fifty-four", "854"], zh: ["八百五十四"] },
    translation: { ngoko: "wolung atus seket papat", krama: "wolu atus seket sekawan", "krama-inggil": "wolu atus seket sekawan" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh lima", "855"], en: ["eight hundred fifty-five", "855"], zh: ["八百五十五"] },
    translation: { ngoko: "wolung atus seket lima", krama: "wolu atus seket gangsal", "krama-inggil": "wolu atus seket gangsal" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh enam", "856"], en: ["eight hundred fifty-six", "856"], zh: ["八百五十六"] },
    translation: { ngoko: "wolung atus seket enem", krama: "wolu atus seket enem", "krama-inggil": "wolu atus seket enem" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh tujuh", "857"], en: ["eight hundred fifty-seven", "857"], zh: ["八百五十七"] },
    translation: { ngoko: "wolung atus seket pitu", krama: "wolu atus seket pitu", "krama-inggil": "wolu atus seket pitu" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh delapan", "858"], en: ["eight hundred fifty-eight", "858"], zh: ["八百五十八"] },
    translation: { ngoko: "wolung atus seket wolu", krama: "wolu atus seket wolu", "krama-inggil": "wolu atus seket wolu" },
  },
  {
    aliases: { id: ["delapan ratus lima puluh sembilan", "859"], en: ["eight hundred fifty-nine", "859"], zh: ["八百五十九"] },
    translation: { ngoko: "wolung atus seket sanga", krama: "wolu atus seket sanga", "krama-inggil": "wolu atus seket sanga" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh", "860"], en: ["eight hundred sixty", "860"], zh: ["八百六十"] },
    translation: { ngoko: "wolung atus sewidak", krama: "wolu atus sewidak", "krama-inggil": "wolu atus sewidak" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh satu", "861"], en: ["eight hundred sixty-one", "861"], zh: ["八百六十一"] },
    translation: { ngoko: "wolung atus sewidak siji", krama: "wolu atus sewidak setunggal", "krama-inggil": "wolu atus sewidak setunggal" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh dua", "862"], en: ["eight hundred sixty-two", "862"], zh: ["八百六十二"] },
    translation: { ngoko: "wolung atus sewidak loro", krama: "wolu atus sewidak kalih", "krama-inggil": "wolu atus sewidak kalih" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh tiga", "863"], en: ["eight hundred sixty-three", "863"], zh: ["八百六十三"] },
    translation: { ngoko: "wolung atus sewidak telu", krama: "wolu atus sewidak tiga", "krama-inggil": "wolu atus sewidak tiga" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh empat", "864"], en: ["eight hundred sixty-four", "864"], zh: ["八百六十四"] },
    translation: { ngoko: "wolung atus sewidak papat", krama: "wolu atus sewidak sekawan", "krama-inggil": "wolu atus sewidak sekawan" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh lima", "865"], en: ["eight hundred sixty-five", "865"], zh: ["八百六十五"] },
    translation: { ngoko: "wolung atus sewidak lima", krama: "wolu atus sewidak gangsal", "krama-inggil": "wolu atus sewidak gangsal" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh enam", "866"], en: ["eight hundred sixty-six", "866"], zh: ["八百六十六"] },
    translation: { ngoko: "wolung atus sewidak enem", krama: "wolu atus sewidak enem", "krama-inggil": "wolu atus sewidak enem" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh tujuh", "867"], en: ["eight hundred sixty-seven", "867"], zh: ["八百六十七"] },
    translation: { ngoko: "wolung atus sewidak pitu", krama: "wolu atus sewidak pitu", "krama-inggil": "wolu atus sewidak pitu" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh delapan", "868"], en: ["eight hundred sixty-eight", "868"], zh: ["八百六十八"] },
    translation: { ngoko: "wolung atus sewidak wolu", krama: "wolu atus sewidak wolu", "krama-inggil": "wolu atus sewidak wolu" },
  },
  {
    aliases: { id: ["delapan ratus enam puluh sembilan", "869"], en: ["eight hundred sixty-nine", "869"], zh: ["八百六十九"] },
    translation: { ngoko: "wolung atus sewidak sanga", krama: "wolu atus sewidak sanga", "krama-inggil": "wolu atus sewidak sanga" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh", "870"], en: ["eight hundred seventy", "870"], zh: ["八百七十"] },
    translation: { ngoko: "wolung atus pitung puluh", krama: "wolu atus pitung dasa", "krama-inggil": "wolu atus pitung dasa" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh satu", "871"], en: ["eight hundred seventy-one", "871"], zh: ["八百七十一"] },
    translation: { ngoko: "wolung atus pitung puluh siji", krama: "wolu atus pitung dasa setunggal", "krama-inggil": "wolu atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh dua", "872"], en: ["eight hundred seventy-two", "872"], zh: ["八百七十二"] },
    translation: { ngoko: "wolung atus pitung puluh loro", krama: "wolu atus pitung dasa kalih", "krama-inggil": "wolu atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh tiga", "873"], en: ["eight hundred seventy-three", "873"], zh: ["八百七十三"] },
    translation: { ngoko: "wolung atus pitung puluh telu", krama: "wolu atus pitung dasa tiga", "krama-inggil": "wolu atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh empat", "874"], en: ["eight hundred seventy-four", "874"], zh: ["八百七十四"] },
    translation: { ngoko: "wolung atus pitung puluh papat", krama: "wolu atus pitung dasa sekawan", "krama-inggil": "wolu atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh lima", "875"], en: ["eight hundred seventy-five", "875"], zh: ["八百七十五"] },
    translation: { ngoko: "wolung atus pitung puluh lima", krama: "wolu atus pitung dasa gangsal", "krama-inggil": "wolu atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh enam", "876"], en: ["eight hundred seventy-six", "876"], zh: ["八百七十六"] },
    translation: { ngoko: "wolung atus pitung puluh enem", krama: "wolu atus pitung dasa enem", "krama-inggil": "wolu atus pitung dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh tujuh", "877"], en: ["eight hundred seventy-seven", "877"], zh: ["八百七十七"] },
    translation: { ngoko: "wolung atus pitung puluh pitu", krama: "wolu atus pitung dasa pitu", "krama-inggil": "wolu atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh delapan", "878"], en: ["eight hundred seventy-eight", "878"], zh: ["八百七十八"] },
    translation: { ngoko: "wolung atus pitung puluh wolu", krama: "wolu atus pitung dasa wolu", "krama-inggil": "wolu atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus tujuh puluh sembilan", "879"], en: ["eight hundred seventy-nine", "879"], zh: ["八百七十九"] },
    translation: { ngoko: "wolung atus pitung puluh sanga", krama: "wolu atus pitung dasa sanga", "krama-inggil": "wolu atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh", "880"], en: ["eight hundred eighty", "880"], zh: ["八百八十"] },
    translation: { ngoko: "wolung atus wolung puluh", krama: "wolu atus wolung dasa", "krama-inggil": "wolu atus wolung dasa" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh satu", "881"], en: ["eight hundred eighty-one", "881"], zh: ["八百八十一"] },
    translation: { ngoko: "wolung atus wolung puluh siji", krama: "wolu atus wolung dasa setunggal", "krama-inggil": "wolu atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh dua", "882"], en: ["eight hundred eighty-two", "882"], zh: ["八百八十二"] },
    translation: { ngoko: "wolung atus wolung puluh loro", krama: "wolu atus wolung dasa kalih", "krama-inggil": "wolu atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh tiga", "883"], en: ["eight hundred eighty-three", "883"], zh: ["八百八十三"] },
    translation: { ngoko: "wolung atus wolung puluh telu", krama: "wolu atus wolung dasa tiga", "krama-inggil": "wolu atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh empat", "884"], en: ["eight hundred eighty-four", "884"], zh: ["八百八十四"] },
    translation: { ngoko: "wolung atus wolung puluh papat", krama: "wolu atus wolung dasa sekawan", "krama-inggil": "wolu atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh lima", "885"], en: ["eight hundred eighty-five", "885"], zh: ["八百八十五"] },
    translation: { ngoko: "wolung atus wolung puluh lima", krama: "wolu atus wolung dasa gangsal", "krama-inggil": "wolu atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh enam", "886"], en: ["eight hundred eighty-six", "886"], zh: ["八百八十六"] },
    translation: { ngoko: "wolung atus wolung puluh enem", krama: "wolu atus wolung dasa enem", "krama-inggil": "wolu atus wolung dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh tujuh", "887"], en: ["eight hundred eighty-seven", "887"], zh: ["八百八十七"] },
    translation: { ngoko: "wolung atus wolung puluh pitu", krama: "wolu atus wolung dasa pitu", "krama-inggil": "wolu atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh delapan", "888"], en: ["eight hundred eighty-eight", "888"], zh: ["八百八十八"] },
    translation: { ngoko: "wolung atus wolung puluh wolu", krama: "wolu atus wolung dasa wolu", "krama-inggil": "wolu atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus delapan puluh sembilan", "889"], en: ["eight hundred eighty-nine", "889"], zh: ["八百八十九"] },
    translation: { ngoko: "wolung atus wolung puluh sanga", krama: "wolu atus wolung dasa sanga", "krama-inggil": "wolu atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh", "890"], en: ["eight hundred ninety", "890"], zh: ["八百九十"] },
    translation: { ngoko: "wolung atus sangang puluh", krama: "wolu atus sangang dasa", "krama-inggil": "wolu atus sangang dasa" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh satu", "891"], en: ["eight hundred ninety-one", "891"], zh: ["八百九十一"] },
    translation: { ngoko: "wolung atus sangang puluh siji", krama: "wolu atus sangang dasa setunggal", "krama-inggil": "wolu atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh dua", "892"], en: ["eight hundred ninety-two", "892"], zh: ["八百九十二"] },
    translation: { ngoko: "wolung atus sangang puluh loro", krama: "wolu atus sangang dasa kalih", "krama-inggil": "wolu atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh tiga", "893"], en: ["eight hundred ninety-three", "893"], zh: ["八百九十三"] },
    translation: { ngoko: "wolung atus sangang puluh telu", krama: "wolu atus sangang dasa tiga", "krama-inggil": "wolu atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh empat", "894"], en: ["eight hundred ninety-four", "894"], zh: ["八百九十四"] },
    translation: { ngoko: "wolung atus sangang puluh papat", krama: "wolu atus sangang dasa sekawan", "krama-inggil": "wolu atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh lima", "895"], en: ["eight hundred ninety-five", "895"], zh: ["八百九十五"] },
    translation: { ngoko: "wolung atus sangang puluh lima", krama: "wolu atus sangang dasa gangsal", "krama-inggil": "wolu atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh enam", "896"], en: ["eight hundred ninety-six", "896"], zh: ["八百九十六"] },
    translation: { ngoko: "wolung atus sangang puluh enem", krama: "wolu atus sangang dasa enem", "krama-inggil": "wolu atus sangang dasa enem" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh tujuh", "897"], en: ["eight hundred ninety-seven", "897"], zh: ["八百九十七"] },
    translation: { ngoko: "wolung atus sangang puluh pitu", krama: "wolu atus sangang dasa pitu", "krama-inggil": "wolu atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh delapan", "898"], en: ["eight hundred ninety-eight", "898"], zh: ["八百九十八"] },
    translation: { ngoko: "wolung atus sangang puluh wolu", krama: "wolu atus sangang dasa wolu", "krama-inggil": "wolu atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["delapan ratus sembilan puluh sembilan", "899"], en: ["eight hundred ninety-nine", "899"], zh: ["八百九十九"] },
    translation: { ngoko: "wolung atus sangang puluh sanga", krama: "wolu atus sangang dasa sanga", "krama-inggil": "wolu atus sangang dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus", "900"], en: ["nine hundred", "900"], zh: ["九百"] },
    translation: { ngoko: "sangang atus", krama: "sangang atus", "krama-inggil": "sangang atus" },
  },
  {
    aliases: { id: ["sembilan ratus satu", "901"], en: ["nine hundred one", "901"], zh: ["九百零一"] },
    translation: { ngoko: "sangang atus siji", krama: "sangang atus setunggal", "krama-inggil": "sangang atus setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus dua", "902"], en: ["nine hundred two", "902"], zh: ["九百零二"] },
    translation: { ngoko: "sangang atus loro", krama: "sangang atus kalih", "krama-inggil": "sangang atus kalih" },
  },
  {
    aliases: { id: ["sembilan ratus tiga", "903"], en: ["nine hundred three", "903"], zh: ["九百零三"] },
    translation: { ngoko: "sangang atus telu", krama: "sangang atus tiga", "krama-inggil": "sangang atus tiga" },
  },
  {
    aliases: { id: ["sembilan ratus empat", "904"], en: ["nine hundred four", "904"], zh: ["九百零四"] },
    translation: { ngoko: "sangang atus papat", krama: "sangang atus sekawan", "krama-inggil": "sangang atus sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus lima", "905"], en: ["nine hundred five", "905"], zh: ["九百零五"] },
    translation: { ngoko: "sangang atus lima", krama: "sangang atus gangsal", "krama-inggil": "sangang atus gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus enam", "906"], en: ["nine hundred six", "906"], zh: ["九百零六"] },
    translation: { ngoko: "sangang atus enem", krama: "sangang atus enem", "krama-inggil": "sangang atus enem" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh", "907"], en: ["nine hundred seven", "907"], zh: ["九百零七"] },
    translation: { ngoko: "sangang atus pitu", krama: "sangang atus pitu", "krama-inggil": "sangang atus pitu" },
  },
  {
    aliases: { id: ["sembilan ratus delapan", "908"], en: ["nine hundred eight", "908"], zh: ["九百零八"] },
    translation: { ngoko: "sangang atus wolu", krama: "sangang atus wolu", "krama-inggil": "sangang atus wolu" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan", "909"], en: ["nine hundred nine", "909"], zh: ["九百零九"] },
    translation: { ngoko: "sangang atus sanga", krama: "sangang atus sanga", "krama-inggil": "sangang atus sanga" },
  },
  {
    aliases: { id: ["sembilan ratus sepuluh", "910"], en: ["nine hundred ten", "910"], zh: ["九百十"] },
    translation: { ngoko: "sangang atus sepuluh", krama: "sangang atus sedasa", "krama-inggil": "sangang atus sedasa" },
  },
  {
    aliases: { id: ["sembilan ratus sebelas", "911"], en: ["nine hundred eleven", "911"], zh: ["九百十一"] },
    translation: { ngoko: "sangang atus sewelas", krama: "sangang atus sewelas", "krama-inggil": "sangang atus sewelas" },
  },
  {
    aliases: { id: ["sembilan ratus dua belas", "912"], en: ["nine hundred twelve", "912"], zh: ["九百十二"] },
    translation: { ngoko: "sangang atus rolas", krama: "sangang atus kalih welas", "krama-inggil": "sangang atus kalih welas" },
  },
  {
    aliases: { id: ["sembilan ratus tiga belas", "913"], en: ["nine hundred thirteen", "913"], zh: ["九百十三"] },
    translation: { ngoko: "sangang atus telulas", krama: "sangang atus tiga welas", "krama-inggil": "sangang atus tiga welas" },
  },
  {
    aliases: { id: ["sembilan ratus empat belas", "914"], en: ["nine hundred fourteen", "914"], zh: ["九百十四"] },
    translation: { ngoko: "sangang atus patbelas", krama: "sangang atus sekawan welas", "krama-inggil": "sangang atus sekawan welas" },
  },
  {
    aliases: { id: ["sembilan ratus lima belas", "915"], en: ["nine hundred fifteen", "915"], zh: ["九百十五"] },
    translation: { ngoko: "sangang atus limolas", krama: "sangang atus gangsal welas", "krama-inggil": "sangang atus gangsal welas" },
  },
  {
    aliases: { id: ["sembilan ratus enam belas", "916"], en: ["nine hundred sixteen", "916"], zh: ["九百十六"] },
    translation: { ngoko: "sangang atus nembelas", krama: "sangang atus enem welas", "krama-inggil": "sangang atus enem welas" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh belas", "917"], en: ["nine hundred seventeen", "917"], zh: ["九百十七"] },
    translation: { ngoko: "sangang atus pitulas", krama: "sangang atus pitulas", "krama-inggil": "sangang atus pitulas" },
  },
  {
    aliases: { id: ["sembilan ratus delapan belas", "918"], en: ["nine hundred eighteen", "918"], zh: ["九百十八"] },
    translation: { ngoko: "sangang atus wolulas", krama: "sangang atus wolulas", "krama-inggil": "sangang atus wolulas" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan belas", "919"], en: ["nine hundred nineteen", "919"], zh: ["九百十九"] },
    translation: { ngoko: "sangang atus sangalas", krama: "sangang atus sangalas", "krama-inggil": "sangang atus sangalas" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh", "920"], en: ["nine hundred twenty", "920"], zh: ["九百二十"] },
    translation: { ngoko: "sangang atus rong puluh", krama: "sangang atus kalih dasa", "krama-inggil": "sangang atus kalih dasa" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh satu", "921"], en: ["nine hundred twenty-one", "921"], zh: ["九百二十一"] },
    translation: { ngoko: "sangang atus selikur", krama: "sangang atus kalih dasa setunggal", "krama-inggil": "sangang atus kalih dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh dua", "922"], en: ["nine hundred twenty-two", "922"], zh: ["九百二十二"] },
    translation: { ngoko: "sangang atus rolikur", krama: "sangang atus kalih dasa kalih", "krama-inggil": "sangang atus kalih dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh tiga", "923"], en: ["nine hundred twenty-three", "923"], zh: ["九百二十三"] },
    translation: { ngoko: "sangang atus telulikur", krama: "sangang atus kalih dasa tiga", "krama-inggil": "sangang atus kalih dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh empat", "924"], en: ["nine hundred twenty-four", "924"], zh: ["九百二十四"] },
    translation: { ngoko: "sangang atus patlikur", krama: "sangang atus kalih dasa sekawan", "krama-inggil": "sangang atus kalih dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh lima", "925"], en: ["nine hundred twenty-five", "925"], zh: ["九百二十五"] },
    translation: { ngoko: "sangang atus selawe", krama: "sangang atus selangkung", "krama-inggil": "sangang atus selangkung" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh enam", "926"], en: ["nine hundred twenty-six", "926"], zh: ["九百二十六"] },
    translation: { ngoko: "sangang atus nemlikur", krama: "sangang atus kalih dasa enem", "krama-inggil": "sangang atus kalih dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh tujuh", "927"], en: ["nine hundred twenty-seven", "927"], zh: ["九百二十七"] },
    translation: { ngoko: "sangang atus pitulikur", krama: "sangang atus kalih dasa pitu", "krama-inggil": "sangang atus kalih dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh delapan", "928"], en: ["nine hundred twenty-eight", "928"], zh: ["九百二十八"] },
    translation: { ngoko: "sangang atus wolulikur", krama: "sangang atus kalih dasa wolu", "krama-inggil": "sangang atus kalih dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus dua puluh sembilan", "929"], en: ["nine hundred twenty-nine", "929"], zh: ["九百二十九"] },
    translation: { ngoko: "sangang atus sangalikur", krama: "sangang atus kalih dasa sanga", "krama-inggil": "sangang atus kalih dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh", "930"], en: ["nine hundred thirty", "930"], zh: ["九百三十"] },
    translation: { ngoko: "sangang atus telung puluh", krama: "sangang atus tigang dasa", "krama-inggil": "sangang atus tigang dasa" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh satu", "931"], en: ["nine hundred thirty-one", "931"], zh: ["九百三十一"] },
    translation: { ngoko: "sangang atus telung puluh siji", krama: "sangang atus tigang dasa setunggal", "krama-inggil": "sangang atus tigang dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh dua", "932"], en: ["nine hundred thirty-two", "932"], zh: ["九百三十二"] },
    translation: { ngoko: "sangang atus telung puluh loro", krama: "sangang atus tigang dasa kalih", "krama-inggil": "sangang atus tigang dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh tiga", "933"], en: ["nine hundred thirty-three", "933"], zh: ["九百三十三"] },
    translation: { ngoko: "sangang atus telung puluh telu", krama: "sangang atus tigang dasa tiga", "krama-inggil": "sangang atus tigang dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh empat", "934"], en: ["nine hundred thirty-four", "934"], zh: ["九百三十四"] },
    translation: { ngoko: "sangang atus telung puluh papat", krama: "sangang atus tigang dasa sekawan", "krama-inggil": "sangang atus tigang dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh lima", "935"], en: ["nine hundred thirty-five", "935"], zh: ["九百三十五"] },
    translation: { ngoko: "sangang atus telung puluh lima", krama: "sangang atus tigang dasa gangsal", "krama-inggil": "sangang atus tigang dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh enam", "936"], en: ["nine hundred thirty-six", "936"], zh: ["九百三十六"] },
    translation: { ngoko: "sangang atus telung puluh enem", krama: "sangang atus tigang dasa enem", "krama-inggil": "sangang atus tigang dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh tujuh", "937"], en: ["nine hundred thirty-seven", "937"], zh: ["九百三十七"] },
    translation: { ngoko: "sangang atus telung puluh pitu", krama: "sangang atus tigang dasa pitu", "krama-inggil": "sangang atus tigang dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh delapan", "938"], en: ["nine hundred thirty-eight", "938"], zh: ["九百三十八"] },
    translation: { ngoko: "sangang atus telung puluh wolu", krama: "sangang atus tigang dasa wolu", "krama-inggil": "sangang atus tigang dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus tiga puluh sembilan", "939"], en: ["nine hundred thirty-nine", "939"], zh: ["九百三十九"] },
    translation: { ngoko: "sangang atus telung puluh sanga", krama: "sangang atus tigang dasa sanga", "krama-inggil": "sangang atus tigang dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh", "940"], en: ["nine hundred forty", "940"], zh: ["九百四十"] },
    translation: { ngoko: "sangang atus patang puluh", krama: "sangang atus sekawan dasa", "krama-inggil": "sangang atus sekawan dasa" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh satu", "941"], en: ["nine hundred forty-one", "941"], zh: ["九百四十一"] },
    translation: { ngoko: "sangang atus patang puluh siji", krama: "sangang atus sekawan dasa setunggal", "krama-inggil": "sangang atus sekawan dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh dua", "942"], en: ["nine hundred forty-two", "942"], zh: ["九百四十二"] },
    translation: { ngoko: "sangang atus patang puluh loro", krama: "sangang atus sekawan dasa kalih", "krama-inggil": "sangang atus sekawan dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh tiga", "943"], en: ["nine hundred forty-three", "943"], zh: ["九百四十三"] },
    translation: { ngoko: "sangang atus patang puluh telu", krama: "sangang atus sekawan dasa tiga", "krama-inggil": "sangang atus sekawan dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh empat", "944"], en: ["nine hundred forty-four", "944"], zh: ["九百四十四"] },
    translation: { ngoko: "sangang atus patang puluh papat", krama: "sangang atus sekawan dasa sekawan", "krama-inggil": "sangang atus sekawan dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh lima", "945"], en: ["nine hundred forty-five", "945"], zh: ["九百四十五"] },
    translation: { ngoko: "sangang atus patang puluh lima", krama: "sangang atus sekawan dasa gangsal", "krama-inggil": "sangang atus sekawan dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh enam", "946"], en: ["nine hundred forty-six", "946"], zh: ["九百四十六"] },
    translation: { ngoko: "sangang atus patang puluh enem", krama: "sangang atus sekawan dasa enem", "krama-inggil": "sangang atus sekawan dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh tujuh", "947"], en: ["nine hundred forty-seven", "947"], zh: ["九百四十七"] },
    translation: { ngoko: "sangang atus patang puluh pitu", krama: "sangang atus sekawan dasa pitu", "krama-inggil": "sangang atus sekawan dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh delapan", "948"], en: ["nine hundred forty-eight", "948"], zh: ["九百四十八"] },
    translation: { ngoko: "sangang atus patang puluh wolu", krama: "sangang atus sekawan dasa wolu", "krama-inggil": "sangang atus sekawan dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus empat puluh sembilan", "949"], en: ["nine hundred forty-nine", "949"], zh: ["九百四十九"] },
    translation: { ngoko: "sangang atus patang puluh sanga", krama: "sangang atus sekawan dasa sanga", "krama-inggil": "sangang atus sekawan dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh", "950"], en: ["nine hundred fifty", "950"], zh: ["九百五十"] },
    translation: { ngoko: "sangang atus seket", krama: "sangang atus seket", "krama-inggil": "sangang atus seket" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh satu", "951"], en: ["nine hundred fifty-one", "951"], zh: ["九百五十一"] },
    translation: { ngoko: "sangang atus seket siji", krama: "sangang atus seket setunggal", "krama-inggil": "sangang atus seket setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh dua", "952"], en: ["nine hundred fifty-two", "952"], zh: ["九百五十二"] },
    translation: { ngoko: "sangang atus seket loro", krama: "sangang atus seket kalih", "krama-inggil": "sangang atus seket kalih" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh tiga", "953"], en: ["nine hundred fifty-three", "953"], zh: ["九百五十三"] },
    translation: { ngoko: "sangang atus seket telu", krama: "sangang atus seket tiga", "krama-inggil": "sangang atus seket tiga" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh empat", "954"], en: ["nine hundred fifty-four", "954"], zh: ["九百五十四"] },
    translation: { ngoko: "sangang atus seket papat", krama: "sangang atus seket sekawan", "krama-inggil": "sangang atus seket sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh lima", "955"], en: ["nine hundred fifty-five", "955"], zh: ["九百五十五"] },
    translation: { ngoko: "sangang atus seket lima", krama: "sangang atus seket gangsal", "krama-inggil": "sangang atus seket gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh enam", "956"], en: ["nine hundred fifty-six", "956"], zh: ["九百五十六"] },
    translation: { ngoko: "sangang atus seket enem", krama: "sangang atus seket enem", "krama-inggil": "sangang atus seket enem" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh tujuh", "957"], en: ["nine hundred fifty-seven", "957"], zh: ["九百五十七"] },
    translation: { ngoko: "sangang atus seket pitu", krama: "sangang atus seket pitu", "krama-inggil": "sangang atus seket pitu" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh delapan", "958"], en: ["nine hundred fifty-eight", "958"], zh: ["九百五十八"] },
    translation: { ngoko: "sangang atus seket wolu", krama: "sangang atus seket wolu", "krama-inggil": "sangang atus seket wolu" },
  },
  {
    aliases: { id: ["sembilan ratus lima puluh sembilan", "959"], en: ["nine hundred fifty-nine", "959"], zh: ["九百五十九"] },
    translation: { ngoko: "sangang atus seket sanga", krama: "sangang atus seket sanga", "krama-inggil": "sangang atus seket sanga" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh", "960"], en: ["nine hundred sixty", "960"], zh: ["九百六十"] },
    translation: { ngoko: "sangang atus sewidak", krama: "sangang atus sewidak", "krama-inggil": "sangang atus sewidak" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh satu", "961"], en: ["nine hundred sixty-one", "961"], zh: ["九百六十一"] },
    translation: { ngoko: "sangang atus sewidak siji", krama: "sangang atus sewidak setunggal", "krama-inggil": "sangang atus sewidak setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh dua", "962"], en: ["nine hundred sixty-two", "962"], zh: ["九百六十二"] },
    translation: { ngoko: "sangang atus sewidak loro", krama: "sangang atus sewidak kalih", "krama-inggil": "sangang atus sewidak kalih" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh tiga", "963"], en: ["nine hundred sixty-three", "963"], zh: ["九百六十三"] },
    translation: { ngoko: "sangang atus sewidak telu", krama: "sangang atus sewidak tiga", "krama-inggil": "sangang atus sewidak tiga" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh empat", "964"], en: ["nine hundred sixty-four", "964"], zh: ["九百六十四"] },
    translation: { ngoko: "sangang atus sewidak papat", krama: "sangang atus sewidak sekawan", "krama-inggil": "sangang atus sewidak sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh lima", "965"], en: ["nine hundred sixty-five", "965"], zh: ["九百六十五"] },
    translation: { ngoko: "sangang atus sewidak lima", krama: "sangang atus sewidak gangsal", "krama-inggil": "sangang atus sewidak gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh enam", "966"], en: ["nine hundred sixty-six", "966"], zh: ["九百六十六"] },
    translation: { ngoko: "sangang atus sewidak enem", krama: "sangang atus sewidak enem", "krama-inggil": "sangang atus sewidak enem" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh tujuh", "967"], en: ["nine hundred sixty-seven", "967"], zh: ["九百六十七"] },
    translation: { ngoko: "sangang atus sewidak pitu", krama: "sangang atus sewidak pitu", "krama-inggil": "sangang atus sewidak pitu" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh delapan", "968"], en: ["nine hundred sixty-eight", "968"], zh: ["九百六十八"] },
    translation: { ngoko: "sangang atus sewidak wolu", krama: "sangang atus sewidak wolu", "krama-inggil": "sangang atus sewidak wolu" },
  },
  {
    aliases: { id: ["sembilan ratus enam puluh sembilan", "969"], en: ["nine hundred sixty-nine", "969"], zh: ["九百六十九"] },
    translation: { ngoko: "sangang atus sewidak sanga", krama: "sangang atus sewidak sanga", "krama-inggil": "sangang atus sewidak sanga" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh", "970"], en: ["nine hundred seventy", "970"], zh: ["九百七十"] },
    translation: { ngoko: "sangang atus pitung puluh", krama: "sangang atus pitung dasa", "krama-inggil": "sangang atus pitung dasa" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh satu", "971"], en: ["nine hundred seventy-one", "971"], zh: ["九百七十一"] },
    translation: { ngoko: "sangang atus pitung puluh siji", krama: "sangang atus pitung dasa setunggal", "krama-inggil": "sangang atus pitung dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh dua", "972"], en: ["nine hundred seventy-two", "972"], zh: ["九百七十二"] },
    translation: { ngoko: "sangang atus pitung puluh loro", krama: "sangang atus pitung dasa kalih", "krama-inggil": "sangang atus pitung dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh tiga", "973"], en: ["nine hundred seventy-three", "973"], zh: ["九百七十三"] },
    translation: { ngoko: "sangang atus pitung puluh telu", krama: "sangang atus pitung dasa tiga", "krama-inggil": "sangang atus pitung dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh empat", "974"], en: ["nine hundred seventy-four", "974"], zh: ["九百七十四"] },
    translation: { ngoko: "sangang atus pitung puluh papat", krama: "sangang atus pitung dasa sekawan", "krama-inggil": "sangang atus pitung dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh lima", "975"], en: ["nine hundred seventy-five", "975"], zh: ["九百七十五"] },
    translation: { ngoko: "sangang atus pitung puluh lima", krama: "sangang atus pitung dasa gangsal", "krama-inggil": "sangang atus pitung dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh enam", "976"], en: ["nine hundred seventy-six", "976"], zh: ["九百七十六"] },
    translation: { ngoko: "sangang atus pitung puluh enem", krama: "sangang atus pitung dasa enem", "krama-inggil": "sangang atus pitung dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh tujuh", "977"], en: ["nine hundred seventy-seven", "977"], zh: ["九百七十七"] },
    translation: { ngoko: "sangang atus pitung puluh pitu", krama: "sangang atus pitung dasa pitu", "krama-inggil": "sangang atus pitung dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh delapan", "978"], en: ["nine hundred seventy-eight", "978"], zh: ["九百七十八"] },
    translation: { ngoko: "sangang atus pitung puluh wolu", krama: "sangang atus pitung dasa wolu", "krama-inggil": "sangang atus pitung dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus tujuh puluh sembilan", "979"], en: ["nine hundred seventy-nine", "979"], zh: ["九百七十九"] },
    translation: { ngoko: "sangang atus pitung puluh sanga", krama: "sangang atus pitung dasa sanga", "krama-inggil": "sangang atus pitung dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh", "980"], en: ["nine hundred eighty", "980"], zh: ["九百八十"] },
    translation: { ngoko: "sangang atus wolung puluh", krama: "sangang atus wolung dasa", "krama-inggil": "sangang atus wolung dasa" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh satu", "981"], en: ["nine hundred eighty-one", "981"], zh: ["九百八十一"] },
    translation: { ngoko: "sangang atus wolung puluh siji", krama: "sangang atus wolung dasa setunggal", "krama-inggil": "sangang atus wolung dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh dua", "982"], en: ["nine hundred eighty-two", "982"], zh: ["九百八十二"] },
    translation: { ngoko: "sangang atus wolung puluh loro", krama: "sangang atus wolung dasa kalih", "krama-inggil": "sangang atus wolung dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh tiga", "983"], en: ["nine hundred eighty-three", "983"], zh: ["九百八十三"] },
    translation: { ngoko: "sangang atus wolung puluh telu", krama: "sangang atus wolung dasa tiga", "krama-inggil": "sangang atus wolung dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh empat", "984"], en: ["nine hundred eighty-four", "984"], zh: ["九百八十四"] },
    translation: { ngoko: "sangang atus wolung puluh papat", krama: "sangang atus wolung dasa sekawan", "krama-inggil": "sangang atus wolung dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh lima", "985"], en: ["nine hundred eighty-five", "985"], zh: ["九百八十五"] },
    translation: { ngoko: "sangang atus wolung puluh lima", krama: "sangang atus wolung dasa gangsal", "krama-inggil": "sangang atus wolung dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh enam", "986"], en: ["nine hundred eighty-six", "986"], zh: ["九百八十六"] },
    translation: { ngoko: "sangang atus wolung puluh enem", krama: "sangang atus wolung dasa enem", "krama-inggil": "sangang atus wolung dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh tujuh", "987"], en: ["nine hundred eighty-seven", "987"], zh: ["九百八十七"] },
    translation: { ngoko: "sangang atus wolung puluh pitu", krama: "sangang atus wolung dasa pitu", "krama-inggil": "sangang atus wolung dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh delapan", "988"], en: ["nine hundred eighty-eight", "988"], zh: ["九百八十八"] },
    translation: { ngoko: "sangang atus wolung puluh wolu", krama: "sangang atus wolung dasa wolu", "krama-inggil": "sangang atus wolung dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus delapan puluh sembilan", "989"], en: ["nine hundred eighty-nine", "989"], zh: ["九百八十九"] },
    translation: { ngoko: "sangang atus wolung puluh sanga", krama: "sangang atus wolung dasa sanga", "krama-inggil": "sangang atus wolung dasa sanga" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh", "990"], en: ["nine hundred ninety", "990"], zh: ["九百九十"] },
    translation: { ngoko: "sangang atus sangang puluh", krama: "sangang atus sangang dasa", "krama-inggil": "sangang atus sangang dasa" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh satu", "991"], en: ["nine hundred ninety-one", "991"], zh: ["九百九十一"] },
    translation: { ngoko: "sangang atus sangang puluh siji", krama: "sangang atus sangang dasa setunggal", "krama-inggil": "sangang atus sangang dasa setunggal" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh dua", "992"], en: ["nine hundred ninety-two", "992"], zh: ["九百九十二"] },
    translation: { ngoko: "sangang atus sangang puluh loro", krama: "sangang atus sangang dasa kalih", "krama-inggil": "sangang atus sangang dasa kalih" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh tiga", "993"], en: ["nine hundred ninety-three", "993"], zh: ["九百九十三"] },
    translation: { ngoko: "sangang atus sangang puluh telu", krama: "sangang atus sangang dasa tiga", "krama-inggil": "sangang atus sangang dasa tiga" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh empat", "994"], en: ["nine hundred ninety-four", "994"], zh: ["九百九十四"] },
    translation: { ngoko: "sangang atus sangang puluh papat", krama: "sangang atus sangang dasa sekawan", "krama-inggil": "sangang atus sangang dasa sekawan" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh lima", "995"], en: ["nine hundred ninety-five", "995"], zh: ["九百九十五"] },
    translation: { ngoko: "sangang atus sangang puluh lima", krama: "sangang atus sangang dasa gangsal", "krama-inggil": "sangang atus sangang dasa gangsal" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh enam", "996"], en: ["nine hundred ninety-six", "996"], zh: ["九百九十六"] },
    translation: { ngoko: "sangang atus sangang puluh enem", krama: "sangang atus sangang dasa enem", "krama-inggil": "sangang atus sangang dasa enem" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh tujuh", "997"], en: ["nine hundred ninety-seven", "997"], zh: ["九百九十七"] },
    translation: { ngoko: "sangang atus sangang puluh pitu", krama: "sangang atus sangang dasa pitu", "krama-inggil": "sangang atus sangang dasa pitu" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh delapan", "998"], en: ["nine hundred ninety-eight", "998"], zh: ["九百九十八"] },
    translation: { ngoko: "sangang atus sangang puluh wolu", krama: "sangang atus sangang dasa wolu", "krama-inggil": "sangang atus sangang dasa wolu" },
  },
  {
    aliases: { id: ["sembilan ratus sembilan puluh sembilan", "999"], en: ["nine hundred ninety-nine", "999"], zh: ["九百九十九"] },
    translation: { ngoko: "sangang atus sangang puluh sanga", krama: "sangang atus sangang dasa sanga", "krama-inggil": "sangang atus sangang dasa sanga" },
  },
  {
    aliases: { id:["ribu","000"], en:["thousand"], zh:["千"]},
    translation: { ngoko: "ewu", krama: "ewu", "krama-inggil": "ewu",},
  },
  {
    aliases: { id: ["seribu", "1000"], en: ["one thousand", "1000"], zh: ["一千"] },
    translation: { ngoko: "sewu", krama: "setunggal ewu", "krama-inggil": "setunggal ewu" },
  },
  {
    aliases: { id: ["sepuluh ribu", "10000"], en: ["ten thousand", "10000"], zh: ["一万"] },
    translation: { ngoko: "sepuluh ewu", krama: "sedasa ewu", "krama-inggil": "sedasa ewu" },
  },
  {
    aliases: { id: ["seratus ribu", "100000"], en: ["one hundred thousand", "100000"], zh: ["十万"] },
    translation: { ngoko: "satus ewu", krama: "setunggal atus ewu", "krama-inggil": "setunggal atus ewu" },
  },
  {
    aliases: { id: ["satu juta", "1000000"], en: ["one million", "1000000"], zh: ["一百万"] },
    translation: { ngoko: "sayuta", krama: "setunggal yuta", "krama-inggil": "setunggal yuta" },
  },
  {
    aliases: { id: ["sepuluh juta", "10000000"], en: ["ten million", "10000000"], zh: ["一千万"] },
    translation: { ngoko: "sepuluh yuta", krama: "sedasa yuta", "krama-inggil": "sedasa yuta" },
  },
  {
    aliases: { id: ["seratus juta", "100000000"], en: ["one hundred million", "100000000"], zh: ["一亿"] },
    translation: { ngoko: "satus yuta", krama: "setunggal atus yuta", "krama-inggil": "setunggal atus yuta" },
  },
  {
    aliases: { id: ["satu miliar", "1000000000"], en: ["one billion", "1000000000"], zh: ["十亿"] },
    translation: { ngoko: "sak miliar", krama: "setunggal miliar", "krama-inggil": "setunggal miliar" },
  },
  {
    aliases: { id: ["sepuluh miliar", "10000000000"], en: ["ten billion", "10000000000"], zh: ["一百亿"] },
    translation: { ngoko: "sepuluh miliar", krama: "sedasa miliar", "krama-inggil": "sedasa miliar" },
  },
  {
    aliases: { id: ["seratus miliar", "100000000000"], en: ["one hundred billion", "100000000000"], zh: ["一千亿"] },
    translation: { ngoko: "satus miliar", krama: "setunggal atus miliar", "krama-inggil": "setunggal atus miliar" },
  },
  {
    aliases: { id: ["satu triliun", "1000000000000"], en: ["one trillion", "1000000000000"], zh: ["一万亿"] },
    translation: { ngoko: "sak triliun", krama: "setunggal triliun", "krama-inggil": "setunggal triliun" },
  },

  {
    aliases: { id:["adalah"], en:["is"], zh:["是"]},
    translation: { ngoko: "", krama: "", "krama-inggil": "",},
  },

  {
  aliases: {id: ["nama saya","namaku"],en: ["my name"],zh: ["我的名字"]},
  translation: {ngoko: "jenengku",krama: "asma kula","krama-inggil": "asma kula"},
  },

  {
  aliases: {id: ["nama saya"],en: ["my name"],zh: ["我的名字"]},
  translation: {ngoko: "jenengku",krama: "asma kula","krama-inggil": "asma kula"},
  },
  {
  aliases: {
    id: ["tidak masalah", "tidak jadi soal"],
    en: ["it doesn't matter", "it does not matter"],
    zh: ["没关系"]
  },
  translation: {
    ngoko: "ora masalah",
    krama: "mboten dados masalah",
    "krama-inggil": "mboten dados masalah"
  },
},
];

// Bentuk yang umum dipakai tidak selalu bisa diterjemahkan kata demi kata.
// Aturan ini menangani beberapa kalimat yang sudah dikenal.
const sentenceRules: Record<
  SourceLanguage,
  Record<string, Record<JavaneseLevel, string>>
> = {
  id: {
    "saya pergi ke pasar": {
      ngoko: "Aku lunga menyang pasar",
      krama: "Kula kesah dhateng pasar",
      "krama-inggil": "Kula tindak dhateng pasar",
    },
    "saya makan nasi": {
      ngoko: "Aku mangan sega",
      krama: "Kula nedha sekul",
      "krama-inggil": "Kula dhahar sekul",
    },
  },
  en: {
    "i go to the market": {
      ngoko: "Aku lunga menyang pasar",
      krama: "Kula kesah dhateng pasar",
      "krama-inggil": "Kula tindak dhateng pasar",
    },
    "i eat rice": {
      ngoko: "Aku mangan sega",
      krama: "Kula nedha sekul",
      "krama-inggil": "Kula dhahar sekul",
    },
  },
  zh: {
    "我去市场": {
      ngoko: "Aku lunga menyang pasar",
      krama: "Kula kesah dhateng pasar",
      "krama-inggil": "Kula tindak dhateng pasar",
    },
    "我吃米饭": {
      ngoko: "Aku mangan sega",
      krama: "Kula nedha sekul",
      "krama-inggil": "Kula dhahar sekul",
    },
  },
  
};

const aliasMaps: Record<
  SourceLanguage,
  Map<string, DictionaryEntry>
> = {
  id: new Map(),
  en: new Map(),
  zh: new Map(),
};

for (const entry of dictionary) {
  for (const language of ["id", "en", "zh"] as const) {
    for (const alias of entry.aliases[language]) {
      aliasMaps[language].set(alias.toLocaleLowerCase(), entry);
    }
  }
}

function translateWord(
  word: string,
  level: JavaneseLevel,
  language: SourceLanguage
): string {
  const entry = aliasMaps[language].get(word.toLocaleLowerCase());
  return entry ? entry.translation[level] : word;
}

function translateWords(
  text: string,
  level: JavaneseLevel,
  language: SourceLanguage
): string {
  // Alias terpanjang diprioritaskan.
  // Contoh: "dua puluh" sebelum "dua".
  const aliases = [...aliasMaps[language].keys()].sort(
    (a, b) => b.length - a.length
  );

  // Pisahkan kata, spasi, dan tanda baca.
  const tokens =
    text.match(
      /[\p{L}\p{M}\p{N}]+(?:['’][\p{L}\p{M}]+)*|[^\p{L}\p{M}\p{N}\s]+|\s+/gu
    ) ?? [];

  const result: string[] = [];
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    // Pertahankan spasi dan tanda baca.
    if (/^\s+$/u.test(token) || /^[^\p{L}\p{M}\p{N}\s]+$/u.test(token)) {
      result.push(token);
      i++;
      continue;
    }

    let matchedEntry: DictionaryEntry | undefined;
    let matchedEnd = i;

    // Cari alias yang cocok, dimulai dari yang terpanjang.
    for (const alias of aliases) {
      const aliasWords = alias.trim().split(/\s+/u);

      let j = i;
      const candidateWords: string[] = [];

      while (j < tokens.length && candidateWords.length < aliasWords.length) {
        if (/^\s+$/u.test(tokens[j])) {
          j++;
          continue;
        }

        if (/^[^\p{L}\p{M}\p{N}\s]+$/u.test(tokens[j])) {
          break;
        }

        candidateWords.push(tokens[j].toLocaleLowerCase());
        j++;
      }

      if (
        candidateWords.length === aliasWords.length &&
        candidateWords.every((word, index) => word === aliasWords[index])
      ) {
        matchedEntry = aliasMaps[language].get(alias);
        matchedEnd = j;
        break;
      }
    }

    if (matchedEntry) {
      result.push(matchedEntry.translation[level]);
      i = matchedEnd;
    } else {
      result.push(translateWord(token, level, language));
      i++;
    }
  }

  return result.join("");
}

function translateChinese(
  text: string,
  level: JavaneseLevel
): string {
  // Cocokkan alias Mandarin terpanjang lebih dahulu,
  // misalnya "睡觉" sebelum "睡".
  const aliases = [...aliasMaps.zh.keys()].sort(
    (a, b) => b.length - a.length
  );

  const output: string[] = [];
  let position = 0;

  while (position < text.length) {
    const remaining = text.slice(position);
    const matched = aliases.find((alias) => remaining.startsWith(alias));

    if (matched) {
      output.push(aliasMaps.zh.get(matched)!.translation[level]);
      position += matched.length;
      continue;
    }

    const character = String.fromCodePoint(text.codePointAt(position)!);
    output.push(character);
    position += character.length;
  }

  // Spasi ditambahkan di antara kata Jawa yang dikenali.
  // Tanda baca Mandarin dipertahankan.
  return output
    .join(" ")
    .replace(/\s+([，。！？、；：,.!?;:])/gu, "$1")
    .replace(/([（(])\s+/gu, "$1")
    .replace(/\s+([）)])/gu, "$1")
    .trim();
}

export function translateToJavanese(
  text: string,
  level: JavaneseLevel,
  sourceLanguage: SourceLanguage = "id"
): string {
  const input = text.trim();
  if (!input) return "";

  const normalized = input
    .toLocaleLowerCase()
    .replace(/[.!?。！？]+$/u, "")
    .trim();

  const exactRule = sentenceRules[sourceLanguage][normalized];

  if (exactRule) {
    const result = exactRule[level];
    const punctuation = input.match(/[.!?。！？]+$/u)?.[0] ?? "";
    return result + punctuation;
  }

  if (sourceLanguage === "zh") {
    return translateChinese(input, level);
  }

  return translateWords(input, level, sourceLanguage);
}

/**
 * Menerjemahkan Bahasa Jawa ke bahasa tujuan
 * berdasarkan dataset SpeakJawa yang sudah tersedia.
 *
 * targetLanguage:
 * "id" = Indonesia
 * "en" = English
 * "zh" = Mandarin
 */
export function translateJavaneseToLanguage(
  text: string,
  level: JavaneseLevel,
  targetLanguage: SourceLanguage = "id"
): string {
  const input = text.trim();

  if (!input) return "";

  // Normalisasi untuk pencocokan kosakata.
const normalize = (value: string) =>
  value
    .normalize("NFC")
    .toLocaleLowerCase("id-ID")
    .trim();

const normalizeForLookup = (value: string) =>
  normalize(value)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .normalize("NFC");

  /**
   * Buat indeks terbalik dari terjemahan Jawa.
   * Jika satu kata memiliki beberapa arti, entri pertama
   * dalam dataset akan menjadi padanan default.
   */
  const reverseMap = new Map<string, DictionaryEntry>();

  for (const entry of dictionary) {
    const javanese = normalize(entry.translation[level]);

    if (javanese && !reverseMap.has(javanese)) {
      reverseMap.set(javanese, entry);
    }
  }
  // Indeks cadangan untuk kata yang memiliki perbedaan diakritik,
// misalnya é yang dicocokkan sebagai e.
  const fallbackReverseMap = new Map<string, DictionaryEntry>();

  for (const entry of dictionary) {
    const key = normalizeForLookup(entry.translation[level]);

    if (key && !fallbackReverseMap.has(key)) {
      fallbackReverseMap.set(key, entry);
    }
  }

  // Dahulukan frasa panjang, misalnya "ora masalah"
  // sebelum mencocokkan kata-kata yang lebih pendek.
  const reverseAliases = [...reverseMap.keys()].sort(
    (a, b) => b.length - a.length
  );

  // Pisahkan kata, spasi, dan tanda baca agar format
  // input dapat dipertahankan.
  const tokens =
    input.match(
      /[\p{L}\p{M}\p{N}]+(?:['’][\p{L}\p{M}]+)*|[^\p{L}\p{M}\p{N}\s]+|\s+/gu
    ) ?? [];

  const result: string[] = [];
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    // Pertahankan spasi dan tanda baca.
    if (
      /^\s+$/u.test(token) ||
      /^[^\p{L}\p{M}\p{N}\s]+$/u.test(token)
    ) {
      result.push(token);
      i++;
      continue;
    }

    let matchedEntry: DictionaryEntry | undefined;
    let matchedEnd = i;

    for (const phrase of reverseAliases) {
      const phraseWords = phrase.split(/\s+/u);
      const candidateWords: string[] = [];
      let j = i;

      while (
        j < tokens.length &&
        candidateWords.length < phraseWords.length
      ) {
        if (/^\s+$/u.test(tokens[j])) {
          j++;
          continue;
        }

        if (
          /^[^\p{L}\p{M}\p{N}\s]+$/u.test(tokens[j])
        ) {
          break;
        }

        candidateWords.push(normalize(tokens[j]));
        j++;
      }
      
    const exactMatch =
      candidateWords.length === phraseWords.length &&
      candidateWords.every(
        (word, index) => word === phraseWords[index]
      );

    const fallbackMatch =
      candidateWords.length === phraseWords.length &&
      candidateWords.every(
        (word, index) =>
          normalizeForLookup(word) ===
          normalizeForLookup(phraseWords[index])
      );

    if (exactMatch || fallbackMatch) {
      matchedEntry = exactMatch
        ? reverseMap.get(phrase)
        : fallbackReverseMap.get(
            normalizeForLookup(phrase)
          );

      matchedEnd = j;
      break;
    }

    }

    if (matchedEntry) {
      // Ambil padanan bahasa tujuan dari dataset.
      const aliases = matchedEntry.aliases[targetLanguage];
      const translated = aliases.find(
        (alias) => alias.trim().length > 0
      );

      result.push(translated ?? tokens[i]);
      i = matchedEnd;
    } else {
      // Jika kata tidak ditemukan, pertahankan kata aslinya.
      result.push(token);
      i++;
    }
  }

  return result.join("");
}
