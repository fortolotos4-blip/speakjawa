
export type JavaneseLevel = "ngoko" | "krama" | "krama-inggil";
export type SourceLanguage = "id" | "en" | "zh";

type DictionaryEntry = {
  aliases: Record<SourceLanguage, string[]>;
  translation: Record<JavaneseLevel, string>;
};

// Satu konsep memiliki padanan dari tiga bahasa sumber.
const dictionary: DictionaryEntry[] = [
  {
    aliases: { id:["ada", "tersedia"], en:["available","exist","There is"], zh:["有"]},
    translation: { ngoko: "ana", krama: "wonten", "krama-inggil": "wonten",},
  },

  {
    aliases: { id:["adik"], en:["brother"], zh:["弟弟"]},
    translation: { ngoko: "adhi", krama: "adhi", "krama-inggil": "adhi",},
  },
 
  {
    aliases: { id:["air"], en:["water"], zh:["水"]},
    translation: { ngoko: "banyu", krama: "toya", "krama-inggil": "toya",},
  },
 
  {
    aliases: { id:["api"], en:["fire"], zh:["火"]},
    translation: { ngoko: "geni", krama: "latu", "krama-inggil": "latu",},
  },
 
  {
    aliases: { id:["akan"], en:["will","going to"], zh:["将"]},
    translation: { ngoko: "arep", krama: "badhe", "krama-inggil": "badhe",},
  },
 
  {
    aliases: { id:["anak"], en:["children","child"], zh:["孩子"]},
    translation: { ngoko: "bocah", krama: "lare", "krama-inggil": "putra",},
  },
 
  {
    aliases: { id:["anda"], en:["you"], zh:["您"]},
    translation: { ngoko: "sampeyan", krama: "panjenengan", "krama-inggil": "panjenengan",},
  },
 
  {
    aliases: { id:["angin"], en:["wind"], zh:["风"]},
    translation: { ngoko: "angin", krama: "angin", "krama-inggil": "angin",},
  },
 
  {
    aliases: { id:["anjing"], en:["dog"], zh:["狗"]},
    translation: { ngoko: "asu", krama: "segawon", "krama-inggil": "segawon",},
  },
 
  {
    aliases: { id:["apa"], en:["what"], zh:["什么"]},
    translation: { ngoko: "apa", krama: "menapa", "krama-inggil": "menapa",},
  },
 
  {
    aliases: { id:["atas"], en:["above","on top"], zh:["上面"]},
    translation: { ngoko: "ndhuwur", krama: "nginggil", "krama-inggil": "nginggil",},
  },
 
  {
    aliases: { id:["atau"], en:["or"], zh:["或者"]},
    translation: { ngoko: "apa", krama: "utawi", "krama-inggil": "utawi",},
  },
 
  {
    aliases: { id:["ayah", "bapak", "papa", "papi"], en:["father"], zh:["父亲"]},
    translation: { ngoko: "bapak", krama: "rama", "krama-inggil": "rama",},
  },
 
  {
    aliases: { id:["ayam"], en:["hen","chicken"], zh:["鸡"]},
    translation: { ngoko: "pitik", krama: "ayam", "krama-inggil": "ayam",},
  },
 
  {
    aliases: { id:["bagaimana"], en:["how"], zh:["怎样"]},
    translation: { ngoko: "piye", krama: "kepripun", "krama-inggil": "kepripun",},
  },
 
  {
    aliases: { id:["bagus"], en:["good","nice"], zh:["好","不错"]},
    translation: { ngoko: "apik", krama: "sae", "krama-inggil": "sae",},
  },
 
  {
    aliases: { id:["bahasa"], en:["language"], zh:["语言"]},
    translation: { ngoko: "basa", krama: "basa", "krama-inggil": "basa",},
  },
 
  {
    aliases: { id:["baik"], en:["good","well"], zh:["好","良好"]},
    translation: { ngoko: "apik", krama: "sae", "krama-inggil": "sae",},
  },
 
  {
    aliases: { id:["baju"], en:["clothes","shirt"], zh:["衣服"]},
    translation: { ngoko: "klambi", krama: "rasukan", "krama-inggil": "rasukan",},
  },
 
  {
    aliases: { id:["bangun"], en:["woke","wake up","build"], zh:["起床"]},
    translation: { ngoko: "tangi", krama: "wungu", "krama-inggil": "wungu",},
  },
 
  {
    aliases: { id:["banyak"], en:["many","much"], zh:["很多"]},
    translation: { ngoko: "akeh", krama: "kathah", "krama-inggil": "kathah",},
  },
 
  {
    aliases: { id:["baru"], en:["new"], zh:["新"]},
    translation: { ngoko: "anyar", krama: "enggal", "krama-inggil": "enggal",},
  },
 
  {
    aliases: { id:["beli","membeli"], en:["buy"], zh:["买"]},
    translation: { ngoko: "tuku", krama: "tumbas", "krama-inggil": "mundhut",},
  },
  {
    aliases: { id:["bawah"], en:["below","under"], zh:["下面","之下"]},
    translation: { ngoko: "ngisor", krama: "andhap", "krama-inggil": "andhap",},
  },
 
  {
    aliases: { id:["beberapa"], en:["some","several"], zh:["一些","几个"]},
    translation: { ngoko: "sawetara", krama: "sawetawis", "krama-inggil": "sawetawis",},
  },
 
  {
    aliases: { id:["bekerja"], en:["work"], zh:["工作"]},
    translation: { ngoko: "nyambut gawe", krama: "nyambut damel", "krama-inggil": "nyambut damel",},
  },
 
  {
    aliases: { id:["belajar"], en:["study","learn"], zh:["学习"]},
    translation: { ngoko: "sinau", krama: "sinau", "krama-inggil": "sinau",},
  },
  
  {
    aliases: { id:["belakang"], en:["behind","back"], zh:["后面","背后"]},
    translation: { ngoko: "mburi", krama: "wingking", "krama-inggil": "wingking",},
  },
  
  {
    aliases: { id:["belum"], en:["not yet"], zh:["还没有"]},
    translation: { ngoko: "durung", krama: "dereng", "krama-inggil": "dereng",},
  },
  
  {
    aliases: { id:["berangkat"], en:["leave","depart"], zh:["出发","离开"]},
    translation: { ngoko: "budhal", krama: "budhal", "krama-inggil": "tindak",},
  },
  
  {
    aliases: { id:["berapa"], en:["how many","how much"], zh:["多少"]},
    translation: { ngoko: "pira", krama: "pinten", "krama-inggil": "pinten",},
  },
  
  {
    aliases: { id:["berbicara","bicara"], en:["speak","talk"], zh:["说话","交谈"]},
    translation: { ngoko: "omong", krama: "wicanten", "krama-inggil": "ngendika",},
  },
  
  {
    aliases: { id:["berdiri"], en:["stand"], zh:["站立"]},
    translation: { ngoko: "ngadeg", krama: "jumeneng", "krama-inggil": "jumeneng",},
  },
  
  {
    aliases: { id:["berjalan","jalan"], en:["walk","proceed"], zh:["走路","进行"]},
    translation: { ngoko: "mlaku", krama: "mlampah", "krama-inggil": "mlampah",},
  },
  
  {
    aliases: { id:["berlari","lari"], en:["run"], zh:["跑"]},
    translation: { ngoko: "mlayu", krama: "mlajeng", "krama-inggil": "mlajeng",},
  },
  
  {
    aliases: { id:["bersama"], en:["together","with"], zh:["一起","和"]},
    translation: { ngoko: "bareng", krama: "sesarengan", "krama-inggil": "sesarengan",},
  },
  
  {
    aliases: { id:["bersih"], en:["clean"], zh:["干净"]},
    translation: { ngoko: "resik", krama: "resik", "krama-inggil": "resik",},
  },
  
  {
    aliases: { id:["besar"], en:["big","large"], zh:["大"]},
    translation: { ngoko: "gedhe", krama: "ageng", "krama-inggil": "ageng",},
  },
  
  {
    aliases: { id:["besok"], en:["tomorrow"], zh:["明天"]},
    translation: { ngoko: "sesuk", krama: "benjing", "krama-inggil": "benjing",},
  },
  
  {
    aliases: { id:["bintang"], en:["star"], zh:["星星"]},
    translation: { ngoko: "lintang", krama: "lintang", "krama-inggil": "lintang",},
  },
  
  {
    aliases: { id:["bisa"], en:["can", "be able to"], zh:["能","会"]},
    translation: { ngoko: "isa", krama: "saged", "krama-inggil": "saged",},
  },
     
  {
    aliases: { id:["berbohong","bohong"], en:["lying","deceive"], zh:["欺骗"]},
    translation: { ngoko: "ngapusi", krama: "ngapusi", "krama-inggil": "ngapusi",},
  },
   
  {
    aliases: { id:["boleh"], en:["may","allowed"], zh:["可以"]},
    translation: { ngoko: "oleh", krama: "kepareng", "krama-inggil": "kepareng",},
  },
  
  {
    aliases: { id:["buah"], en:["fruit"], zh:["水果"]},
    translation: { ngoko: "woh", krama: "woh-wohan", "krama-inggil": "woh-wohan",},
  },
  
  {
    aliases: { id:["bukan"], en:["is not","not"], zh:["不是"]},
    translation: { ngoko: "dudu", krama: "mboten", "krama-inggil": "mboten",},
  },
  
  {
    aliases: { id:["buku"], en:["book"], zh:["书"]},
    translation: { ngoko: "buku", krama: "buku", "krama-inggil": "buku",},
  },
  
  {
    aliases: { id:["bulan"], en:["month","moon"], zh:["月","月亮"]},
    translation: { ngoko: "wulan", krama: "wulan", "krama-inggil": "wulan",},
  },
   
  {
    aliases: { id:["bumi"], en:["earth"], zh:["地球"]},
    translation: { ngoko: "bumi", krama: "bumi", "krama-inggil": "bumi",},
  },
   
  {
    aliases: { id:["bunga"], en:["flower"], zh:["花"]},
    translation: { ngoko: "kembang", krama: "sekar", "krama-inggil": "sekar",},
  },
   
  {
    aliases: { id:["buruk"], en:["bad","poor"], zh:["坏","差"]},
    translation: { ngoko: "elek", krama: "awon", "krama-inggil": "awon",},
  },
   
  {
    aliases: { id:["burung"], en:["bird"], zh:["鸟"]},
    translation: { ngoko: "manuk", krama: "peksi", "krama-inggil": "peksi",},
  },
   
  {
    aliases: { id:["cantik"], en:["beautiful"], zh:["漂亮","美丽"]},
    translation: { ngoko: "ayu", krama: "ayu", "krama-inggil": "ayu",},
  },
   
  {
    aliases: { id:["celana"], en:["pants","trousers"], zh:["裤子"]},
    translation: { ngoko: "sruwal", krama: "sruwal", "krama-inggil": "sruwal",},
  },
   
  {
    aliases: { id:["cepat"], en:["fast","quick"], zh:["快"]},
    translation: { ngoko: "cepet", krama: "enggal", "krama-inggil": "enggal",},
  },
   
  {
    aliases: { id:["cabe","cabai"], en:["chili","chili pepper"], zh:["辣椒"]},
    translation: { ngoko: "lombok", krama: "lombok", "krama-inggil": "lombok",},
  },
   
  {
    aliases: { id:["cahaya"], en:["light","radiance"], zh:["光","光芒"]},
    translation: { ngoko: "cahya", krama: "cahya", "krama-inggil": "cahya",},
  },
   
  {
    aliases: { id:["cair"], en:["liquid","fluid"], zh:["液体"]},
    translation: { ngoko: "encer", krama: "encer", "krama-inggil": "encer",},
  },
   
  {
    aliases: { id:["cari"], en:["find","search","look for"], zh:["寻找"]},
    translation: { ngoko: "golek", krama: "pados", "krama-inggil": "pados",},
  },
   
  {
    aliases: { id:["cat"], en:["paint"], zh:["油漆"]},
    translation: { ngoko: "cet", krama: "cet", "krama-inggil": "cet",},
  },
   
  {
    aliases: { id:["catat"], en:["note down","record"], zh:["记录"]},
    translation: { ngoko: "nyathet", krama: "nyathet", "krama-inggil": "nyathet",},
  },
   
  {
    aliases: { id:["catatan"], en:["note"], zh:["笔记"]},
    translation: { ngoko: "cathetan", krama: "cathetan", "krama-inggil": "chatetan",},
  },
   
  {
    aliases: { id:["cemas"], en:["anxious","worried"], zh:["焦虑","担心"]},
    translation: { ngoko: "kuwatir", krama: "sumelang", "krama-inggil": "sumelang",},
  },
   
  {
    aliases: { id:["cemburu"], en:["jealous"], zh:["嫉妒"]},
    translation: { ngoko: "meri", krama: "meri", "krama-inggil": "meri",},
  },
   
  {
    aliases: { id:["cerah"], en:["bright","clear"], zh:["明亮"]},
    translation: { ngoko: "padhang", krama: "padhang", "krama-inggil": "padhang",},
  },
   
  {
    aliases: { id:["cerita"], en:["story"], zh:["故事"]},
    translation: { ngoko: "crita", krama: "criyos", "krama-inggil": "criyos",},
  },
   
  {
    aliases: { id:["cerdas"], en:["intelligent","smart"], zh:["聪明"]},
    translation: { ngoko: "pinter", krama: "pinter", "krama-inggil": "pinter",},
  },
   
  {
    aliases: { id:["cermin"], en:["mirror"], zh:["镜子"]},
    translation: { ngoko: "pangilon", krama: "pangilon", "krama-inggil": "pangilon",},
  },
   
  {
    aliases: { id:["cetak"], en:["print","mold"], zh:["打印","印制"]},
    translation: { ngoko: "nyetak", krama: "nyithak", "krama-inggil": "nyithak",},
  },
   
  {
    aliases: { id:["cicak"], en:["lizard","gecko"], zh:["壁虎"]},
    translation: { ngoko: "cecak", krama: "cecak", "krama-inggil": "cecak",},
  },
   
  {
    aliases: { id:["cingcang"], en:["chop"], zh:["剁碎"]},
    translation: { ngoko: "cacah", krama: "cacah", "krama-inggil": "cacah",},
  },
   
  {
    aliases: { id:["cincin"], en:["ring"], zh:["戒指"]},
    translation: { ngoko: "ali-ali", krama: "ali-ali", "krama-inggil": "ali-ali",},
  },
   
  {
    aliases: { id:["cinta"], en:["love"], zh:["爱","爱情"]},
    translation: { ngoko: "tresna", krama: "tresna", "krama-inggil": "tresna",},
  },
   
  {
    aliases: { id:["cita-cita", "cita cita"], en:["ambition","aspiration"], zh:["理想","志向"]},
    translation: { ngoko: "gegayuhan", krama: "gegayuhan", "krama-inggil": "gegayuhan",},
  },
   
  {
    aliases: { id:["coba"], en:["try","attempt"], zh:["尝试"]},
    translation: { ngoko: "nyoba", krama: "nyobi", "krama-inggil": "nyobi",},
  },
   
  {
    aliases: { id:["contoh"], en:["example","sample"], zh:["例子","样本"]},
    translation: { ngoko: "tuladha", krama: "tuladha", "krama-inggil": "tuladha",},
  },
   
  {
    aliases: { id:["cuci"], en:["wash"], zh:["洗"]},
    translation: { ngoko: "umbah", krama: "umbah", "krama-inggil": "umbah",},
  },
   
  {
    aliases: { id:["cucian"], en:["laundry"], zh:["待洗衣物"]},
    translation: { ngoko: "umbahan", krama: "umbahan", "krama-inggil": "umbahan",},
  },
   
  {
    aliases: { id:["cukup"], en:["enough","sufficient"], zh:["足够"]},
    translation: { ngoko: "cukup", krama: "cekap", "krama-inggil": "cekap",},
  },
   
  {
    aliases: { id:["cukur"], en:["shave","haircut"], zh:["剃","理发"]},
    translation: { ngoko: "nyukur", krama: "nyukur", "krama-inggil": "nyukur",},
  },
   
  {
    aliases: { id:["cuma"], en:["only","just"], zh:["只是","仅仅"]},
    translation: { ngoko: "mung", krama: "namung", "krama-inggil": "namung",},
  },
   
  {
    aliases: { id:["curiga"], en:["suspicious"], zh:["怀疑"]},
    translation: { ngoko: "curiga", krama: "sumelang", "krama-inggil": "sumelang",},
  },
   
  {
    aliases: { id:["dada"], en:["chest"], zh:["胸部"]},
    translation: { ngoko: "dhadha", krama: "dhadha", "krama-inggil": "dhadha",},
  },
   
  {
    aliases: { id:["dadah"], en:["goodbye","take leave"], zh:["告别"]},
    translation: { ngoko: "pamit", krama: "pamit", "krama-inggil": "pamit",},
  },
   
  {
    aliases: { id:["dahan"], en:["branch of tree"], zh:["树枝"]},
    translation: { ngoko: "pang", krama: "pang", "krama-inggil": "pang",},
  },
   
  {
    aliases: { id:["dahi"], en:["forehead"], zh:["额头"]},
    translation: { ngoko: "bathuk", krama: "bathuk", "krama-inggil": "bathuk",},
  },
   
  {
    aliases: { id:["dahulu"], en:["formerly","before"], zh:["以前","从前"]},
    translation: { ngoko: "biyen", krama: "rumiyin", "krama-inggil": "rumiyin",},
  },
   
  {
    aliases: { id:["dalam"], en:["inside","deep"], zh:["里面","深"]},
    translation: { ngoko: "jero", krama: "lebet", "krama-inggil": "lebet",},
  },
   
  {
    aliases: { id:["damai"], en:["peace","peaceful"], zh:["和平","安宁"]},
    translation: { ngoko: "tentrem", krama: "tentrem", "krama-inggil": "tentrem",},
  },
   
  {
    aliases: { id:["dan"], en:["and"], zh:["和","与"]},
    translation: { ngoko: "lan", krama: "lan", "krama-inggil": "lan",},
  },
   
  {
    aliases: { id:["danau"], en:["lake"], zh:["湖"]},
    translation: { ngoko: "telaga", krama: "telaga", "krama-inggil": "telaga",},
  },
   
  {
    aliases: { id:["dapat"], en:["can","obtain"], zh:["能够","得到"]},
    translation: { ngoko: "bisa", krama: "saged", "krama-inggil": "saged",},
  },
   
  {
    aliases: { id:["dapur"], en:["kitchen"], zh:["厨房"]},
    translation: { ngoko: "pawon", krama: "pawon", "krama-inggil": "pawon",},
  },
   
  {
    aliases: { id:["darah"], en:["blood"], zh:["血"]},
    translation: { ngoko: "getih", krama: "rah", "krama-inggil": "rah",},
  },
     
  {
    aliases: { id:["dangkal"], en:["shallow"], zh:["浅"]},
    translation: { ngoko: "cethek", krama: "cethek", "krama-inggil": "cethek",},
  },
   
  {
    aliases: { id:["dari"], en:["from"], zh:["从"]},
    translation: { ngoko: "saka", krama: "saking", "krama-inggil": "saking",},
  },
   
  {
    aliases: { id:["dasar"], en:["base","foundation"], zh:["基础"]},
    translation: { ngoko: "dhasar", krama: "dhasar", "krama-inggil": "dhasar",},
  },
   
  {
    aliases: { id:["datang"], en:["come","arrive"], zh:["来","到达"]},
    translation: { ngoko: "teka", krama: "dugi", "krama-inggil": "rawuh",},
  },
   
  {
    aliases: { id:["daun"], en:["leaf"], zh:["叶子"]},
    translation: { ngoko: "godhong", krama: "ron", "krama-inggil": "ron",},
  },
    
  {
    aliases: { id:["debu"], en:["dust"], zh:["灰尘"]},
    translation: { ngoko: "bledug", krama: "lebu", "krama-inggil": "lebu",},
  },
     
  {
    aliases: { id:["dekat"], en:["near","close"], zh:["近"]},
    translation: { ngoko: "cedhak", krama: "celak", "krama-inggil": "celak",},
  },
     
  {
    aliases: { id:["dekat sekali"], en:["very close"], zh:["非常近"]},
    translation: { ngoko: "chedak banget", krama: "chedak sanget", "krama-inggil": "chedak sanget",},
  },
     
  {
    aliases: { id:["delapan","8"], en:["eight"], zh:["八"]},
    translation: { ngoko: "wolu", krama: "wolu", "krama-inggil": "wolu",},
  },
     
  {
    aliases: { id:["demam"], en:["fever"], zh:["发烧"]},
    translation: { ngoko: "meriang", krama: "mriyang", "krama-inggil": "mriyang",},
  },
     
  {
    aliases: { id:["demi"], en:["for the sake of"], zh:["为了"]},
    translation: { ngoko: "kanggo", krama: "kagem", "krama-inggil": "kagem",},
  },
     
  {
    aliases: { id:["demikian"], en:["thus","like that"], zh:["如此","那样"]},
    translation: { ngoko: "mangkono", krama: "mekaten", "krama-inggil": "mekaten",},
  },
     
  {
    aliases: { id:["dengan"], en:["with","by"], zh:["和","用"]},
    translation: { ngoko: "karo", krama: "kaliyan", "krama-inggil": "kaliyan",},
  },
     
  {
    aliases: { id:["dengar"], en:["hear"], zh:["听见"]},
    translation: { ngoko: "krungu", krama: "mireng", "krama-inggil": "mireng",},
  },
     
  {
    aliases: { id:["dengarkan"], en:["listen"], zh:["听"]},
    translation: { ngoko: "rungokna", krama: "mirengaken", "krama-inggil": "mirengaken",},
  },
     
  {
    aliases: { id:["depan"], en:["front","in front"], zh:["前面"]},
    translation: { ngoko: "ngarep", krama: "ngajeng", "krama-inggil": "ngajeng",},
  },
     
  {
    aliases: { id:["derajat"], en:["degree","rank"], zh:["度","等级"]},
    translation: { ngoko: "drajat", krama: "drajat", "krama-inggil": "drajat",},
  },
     
  {
    aliases: { id:["deras"], en:["fast-flowing"], zh:["急"]},
    translation: { ngoko: "banter", krama: "deres", "krama-inggil": "deres",},
  },
     
  {
    aliases: { id:["derita"], en:["suffering"], zh:["苦难"]},
    translation: { ngoko: "sangsara", krama: "sangsara", "krama-inggil": "sangsara",},
  },
     
  {
    aliases: { id:["dermawan"], en:["generous"], zh:["慷慨"]},
    translation: { ngoko: "loman", krama: "loman", "krama-inggil": "loman",},
  },
     
  {
    aliases: { id:["desa"], en:["village"], zh:["村庄"]},
    translation: { ngoko: "desa", krama: "dhusun", "krama-inggil": "dhusun",},
  },
     
  {
    aliases: { id:["dewasa"], en:["adult"], zh:["成年人"]},
    translation: { ngoko: "diwasa", krama: "diwasa", "krama-inggil": "diwasa",},
  },
     
  {
    aliases: { id:["di"], en:["at","in","on"], zh:["在"]},
    translation: { ngoko: "ing", krama: "wonten", "krama-inggil": "wonten",},
  },
     
  {
    aliases: { id:["di mana","dimana"], en:["where"], zh:["哪里"]},
    translation: { ngoko: "endi", krama: "wonten pundi", "krama-inggil": "wonten pundi",},
  },
     
  {
    aliases: { id:["dia"], en:["he","she","they"], zh:["他"]},
    translation: { ngoko: "dheweke", krama: "piyambakipun", "krama-inggil": "piyambakipun",},
  },
     
  {
    aliases: { id:["diam"], en:["silent","quiet"], zh:["安静","沉默"]},
    translation: { ngoko: "meneng", krama: "meneng", "krama-inggil": "meneng",},
  },
     
  {
    aliases: { id:["didikan","pendidikan"], en:["education","upbringing"], zh:["教育","教养"]},
    translation: { ngoko: "pendhidhikan", krama: "pendhidhikan", "krama-inggil": "pendhidhikan",},
  },
     
  {
    aliases: { id:["dingin"], en:["cold"], zh:["冷"]},
    translation: { ngoko: "adhem", krama: "asrep", "krama-inggil": "asrep",},
  },
     
  {
    aliases: { id:["diskusi"], en:["discussion"], zh:["讨论"]},
    translation: { ngoko: "rembugan", krama: "rembagan", "krama-inggil": "rembagan",},
  },
     
  {
    aliases: { id:["doa"], en:["prayer"], zh:["祷告","祈祷"]},
    translation: { ngoko: "donga", krama: "donga", "krama-inggil": "donga",},
  },
     
  {
    aliases: { id:["domba"], en:["sheep"], zh:["绵羊"]},
    translation: { ngoko: "wedhus", krama: "wedhus", "krama-inggil": "wedhus",},
  },
     
  {
    aliases: { id:["donasi"], en:["donation"], zh:["捐赠"]},
    translation: { ngoko: "sumbangan", krama: "sumbangan", "krama-inggil": "sumbangan",},
  },
     
  {
    aliases: { id:["doyan"], en:["like","fond of"], zh:["喜欢"]},
    translation: { ngoko: "seneng", krama: "remen", "krama-inggil": "remen",},
  },
     
  {
    aliases: { id:["dua"], en:["two"], zh:["二","两"]},
    translation: { ngoko: "loro", krama: "kalih", "krama-inggil": "kalih",},
  },
     
  {
    aliases: { id:["dua kali"], en:["twice"], zh:["两次"]},
    translation: { ngoko: "kaping pindho", krama: "kaping kalih", "krama-inggil": "kaping kalih",},
  },
     
  {
    aliases: { id:["duduk"], en:["sit"], zh:["坐"]},
    translation: { ngoko: "lungguh", krama: "lenggah", "krama-inggil": "lenggah",},
  },
     
  {
    aliases: { id:["dunia"], en:["world"], zh:["世界"]},
    translation: { ngoko: "donya", krama: "donya", "krama-inggil": "donya",},
  },
     
  {
    aliases: { id:["durasi"], en:["duration"], zh:["时长"]},
    translation: { ngoko: "dawane wektu", krama: "dangu wektu", "krama-inggil": "dangu wektu",},
  },
     
  {
    aliases: { id:["durhaka"], en:["disobedient","treacherous"], zh:["忤逆","背叛"]},
    translation: { ngoko: "duraka", krama: "duraka", "krama-inggil": "duraka",},
  },
     
  {
    aliases: { id:["duri"], en:["thorn"], zh:["刺"]},
    translation: { ngoko: "eri", krama: "eri", "krama-inggil": "eri",},
  },
     
  {
    aliases: { id:["durian"], en:["durian"], zh:["榴莲"]},
    translation: { ngoko: "duren", krama: "duren", "krama-inggil": "duren",},
  },
     
  {
    aliases: { id:["dusta"], en:["lie","falsehood"], zh:["谎言"]},
    translation: { ngoko: "goroh", krama: "dusta", "krama-inggil": "dusta",},
  },

  {
    aliases: { id:["empat puluh","40"], en:["forty","40"], zh:["四十"]},
    translation: { ngoko: "patang puluh", krama: "sekawan dasa", "krama-inggil": "sekawan dasa",},
  },
     
  {
    aliases: { id:["enak"], en:["delicious"], zh:["好吃","舒服"]},
    translation: { ngoko: "enak", krama: "eca", "krama-inggil": "eca",},
  },
     
  {
    aliases: { id:["fakta"], en:["fact"], zh:["事实"]},
    translation: { ngoko: "kasunyatan", krama: "kasunyatan", "krama-inggil": "kasunyatan",},
  },
     
  {
    aliases: { id:["filter"], en:["filter"], zh:["过滤器"]},
    translation: { ngoko: "saringan", krama: "saringan", "krama-inggil": "saringan",},
  },
     
  {
    aliases: { id:["finansial"], en:["financial"], zh:["财务的"]},
    translation: { ngoko: "babagan dhuwit", krama: "babagan arta", "krama-inggil": "babagan arta",},
  },
     
  {
    aliases: { id:["frustasi"], en:["frustrated"], zh:["沮丧"]},
    translation: { ngoko: "kuciwa", krama: "kuciwa", "krama-inggil": "kuciwa",},
  },
     
  {
    aliases: { id:["fundamental"], en:["fundamental"], zh:["基础的","根本的"]},
    translation: { ngoko: "dhasar", krama: "dhasar", "krama-inggil": "dhasar",},
  },
     
  {
    aliases: { id:["fungsi"], en:["function","use"], zh:["功能","用途"]},
    translation: { ngoko: "guna", krama: "guna", "krama-inggil": "guna",},
  },
     
  {
    aliases: { id:["garam"], en:["salt"], zh:["盐"]},
    translation: { ngoko: "uyah", krama: "uyah", "krama-inggil": "uyah",},
  },
     
  {
    aliases: { id:["gatal"], en:["itchy"], zh:["痒"]},
    translation: { ngoko: "gatel", krama: "gatel", "krama-inggil": "gatel",},
  },
     
  {
    aliases: { id:["gelap"], en:["dark"], zh:["黑暗"]},
    translation: { ngoko: "peteng", krama: "peteng", "krama-inggil": "peteng",},
  },
     
  {
    aliases: { id:["gempa"], en:["earthquake"], zh:["地震"]},
    translation: { ngoko: "lindhu", krama: "lindhu", "krama-inggil": "lindhu",},
  },
     
  {
    aliases: { id:["gemuk"], en:["fat","plump"], zh:["胖"]},
    translation: { ngoko: "lemu", krama: "lemu", "krama-inggil": "lemu",},
  },
     
  {
    aliases: { id:["gerak"], en:["movement"], zh:["运动","动作"]},
    translation: { ngoko: "obah", krama: "obah", "krama-inggil": "obah",},
  },
     
  {
    aliases: { id:["gerbang"], en:["gate","gateway"], zh:["大门","入口"]},
    translation: { ngoko: "gapura", krama: "gapura", "krama-inggil": "gapura",},
  },
     
  {
    aliases: { id:["getah"], en:["sap","latex"], zh:["树液","乳胶"]},
    translation: { ngoko: "pulut", krama: "pulut", "krama-inggil": "pulut",},
  },
     
  {
    aliases: { id:["gigi"], en:["tooth","teeth"], zh:["牙齿"]},
    translation: { ngoko: "untu", krama: "waos", "krama-inggil": "waos",},
  },
     
  {
    aliases: { id:["gila"], en:["crazy","insane"], zh:["疯狂"]},
    translation: { ngoko: "edan", krama: "edan", "krama-inggil": "edan",},
  },
     
  {
    aliases: { id:["gilir"], en:["turn"], zh:["轮次","轮换"]},
    translation: { ngoko: "gilir", krama: "gentos", "krama-inggil": "gentos",},
  },
     
  {
    aliases: { id:["gugur"], en:["fall","drop","die in battle"], zh:["落下","阵亡"]},
    translation: { ngoko: "tiba", krama: "dhawah", "krama-inggil": "dhawah",},
  },
     
  {
    aliases: { id:["gunung"], en:["mountain"], zh:["山"]},
    translation: { ngoko: "gunung", krama: "redi", "krama-inggil": "redi",},
  },
     
  {
    aliases: { id:["guruh","petir"], en:["thunder"], zh:["雷声"]},
    translation: { ngoko: "gludhug", krama: "gludhug", "krama-inggil": "gludhug",},
  },
     
  {
    aliases: { id:["gurun","padang gurun"], en:["desert"], zh:["沙漠"]},
    translation: { ngoko: "ara ara garing", krama: "ara ara garing", "krama-inggil": "ara ara garing",},
  },
     
  {
    aliases: { id:["hangat"], en:["warm"], zh:["温暖"]},
    translation: { ngoko: "anget", krama: "anget", "krama-inggil": "anget",},
  },
     
  {
    aliases: { id:["hanya"], en:["only"], zh:["只","仅仅"]},
    translation: { ngoko: "mung", krama: "namung", "krama-inggil": "namung",},
  },
     
  {
    aliases: { id:["harga"], en:["price"], zh:["价格"]},
    translation: { ngoko: "rega", krama: "regi", "krama-inggil": "regi",},
  },
     
  {
    aliases: { id:["hari"], en:["day"], zh:["天"]},
    translation: { ngoko: "dina", krama: "dinten", "krama-inggil": "dinten",},
  },
     
  {
    aliases: { id:["hari ini"], en:["today"], zh:["今天"]},
    translation: { ngoko: "dina iki", krama: "dinten menika", "krama-inggil": "dinten menika",},
  },
     
  {
    aliases: { id:["hari kemarin"], en:["yesterday"], zh:["昨天"]},
    translation: { ngoko: "wingi", krama: "wingi", "krama-inggil": "wingi",},
  },
     
  {
    aliases: { id:["harus"], en:["must","have"], zh:["必须","应该"]},
    translation: { ngoko: "kudu", krama: "kedah", "krama-inggil": "kedah",},
  },
     
  {
    aliases: { id:["hati"], en:["heart","liver"], zh:["心","肝"]},
    translation: { ngoko: "ati", krama: "kedah", "krama-inggil": "kedah",},
  },
     
  {
    aliases: { id:["haus"], en:["thirsty"], zh:["口渴"]},
    translation: { ngoko: "ngelak", krama: "ngelak", "krama-inggil": "ngelak",},
  },
     
  {
    aliases: { id:["hewan"], en:["animal"], zh:["动物"]},
    translation: { ngoko: "kewan", krama: "sato", "krama-inggil": "sato",},
  },
     
  {
    aliases: { id:["hujan"], en:["rain"], zh:["雨"]},
    translation: { ngoko: "udan", krama: "jawah", "krama-inggil": "jawah",},
  },
     
  {
    aliases: { id:["ikan"], en:["fish"], zh:["鱼"]},
    translation: { ngoko: "iwak", krama: "ulam", "krama-inggil": "ulam",},
  },
     
  {
    aliases: { id:["ingat"], en:["remember"], zh:["记得"]},
    translation: { ngoko: "eling", krama: "emut", "krama-inggil": "emut",},
  },
     
  {
    aliases: { id:["ingin"], en:["want","wish"], zh:["想","希望"]},
    translation: { ngoko: "pengin", krama: "kersa", "krama-inggil": "badhe",},
  },
     
  {
    aliases: { id:["ini"], en:["this"], zh:["这","这个"]},
    translation: { ngoko: "iki", krama: "menika", "krama-inggil": "menika",},
  },
     
  {
    aliases: { id:["itu"], en:["that"], zh:["那","那个"]},
    translation: { ngoko: "kuwi", krama: "niku", "krama-inggil": "punika",},
  },
     
  {
    aliases: { id:["iya"], en:["yes"], zh:["是"]},
    translation: { ngoko: "iya", krama: "inggih", "krama-inggil": "inggih",},
  },
     
  {
    aliases: { id:["jahat"], en:["evil","mean"], zh:["坏","邪恶"]},
    translation: { ngoko: "ala", krama: "awon", "krama-inggil": "awon",},
  },
     
  {
    aliases: { id:["jalan"], en:["road","walk"], zh:["路","走"]},
    translation: { ngoko: "dalan", krama: "margi", "krama-inggil": "margi",},
  },
     
  {
    aliases: { id:["jauh"], en:["far"], zh:["远"]},
    translation: { ngoko: "adoh", krama: "tebih", "krama-inggil": "tebih",},
  },
     
  {
    aliases: { id:["jawa"], en:["java","javanese"], zh:["爪哇","爪哇语"]},
    translation: { ngoko: "jawa", krama: "jawi", "krama-inggil": "jawi",},
  },
     
  {
    aliases: { id:["jika"], en:["if"], zh:["如果"]},
    translation: { ngoko: "yen", krama: "menawi", "krama-inggil": "menawi",},
  },
     
  {
    aliases: { id:["kanan"], en:["right"], zh:["右边"]},
    translation: { ngoko: "tengen", krama: "tengen", "krama-inggil": "tengen",},
  },
     
  {
    aliases: { id:["kiri"], en:["left"], zh:["左边"]},
    translation: { ngoko: "kiwa", krama: "kiwa", "krama-inggil": "kiwa",},
  },
     
  {
    aliases: { id:["kemarin"], en:["yesterday"], zh:["昨天"]},
    translation: { ngoko: "wingi", krama: "wingi", "krama-inggil": "wingi",},
  },
     
  {
    aliases: { id:["kenyang"], en:["full"], zh:["饱"]},
    translation: { ngoko: "wareg", krama: "tuwuk", "krama-inggil": "tuwuk",},
  },
     
  {
    aliases: { id:["kota"], en:["city"], zh:["城市"]},
    translation: { ngoko: "kutha", krama: "kitha", "krama-inggil": "kitha",},
  },
     
  {
    aliases: { id:["kotor"], en:["dirty"], zh:["脏"]},
    translation: { ngoko: "reged", krama: "reged", "krama-inggil": "reged",},
  },
     
  {
    aliases: { id:["lagi"], en:["again","still"], zh:["再","还"]},
    translation: { ngoko: "maneh", krama: "malih", "krama-inggil": "malih",},
  },
     
  {
    aliases: { id:["lama"], en:["old","long"], zh:["久","旧"]},
    translation: { ngoko: "lawas", krama: "dangu", "krama-inggil": "dangu",},
  },
     
  {
    aliases: { id:["lambat"], en:["slow"], zh:["慢"]},
    translation: { ngoko: "alon", krama: "alon", "krama-inggil": "alon",},
  },
     
  {
    aliases: { id:["lapar"], en:["hungry"], zh:["饿"]},
    translation: { ngoko: "luwe", krama: "luwe", "krama-inggil": "luwe",},
  },
     
  {
    aliases: { id:["lebih"], en:["more","over"], zh:["更","超过"]},
    translation: { ngoko: "luwih", krama: "langkung", "krama-inggil": "langkung",},
  },
     
  {
    aliases: { id:["lelah"], en:["tired"], zh:["累"]},
    translation: { ngoko: "kesel", krama: "sayah", "krama-inggil": "sayah",},
  },
     
  {
    aliases: { id:["lemah"], en:["weak"], zh:["弱"]},
    translation: { ngoko: "lemes", krama: "lemes", "krama-inggil": "lemes",},
  },
     
  {
    aliases: { id:["lupa"], en:["forget"], zh:["忘记"]},
    translation: { ngoko: "lali", krama: "kesupen", "krama-inggil": "kesupen",},
  },
     
  {
    aliases: { id:["maaf"], en:["sorry"], zh:["对不起","抱歉"]},
    translation: { ngoko: "ngapura", krama: "nyuwun pangapunten", "krama-inggil": "nyuwun pangapunten",},
  },
     
  {
    aliases: { id:["mahal"], en:["expensive"], zh:["贵"]},
    translation: { ngoko: "larang", krama: "awis", "krama-inggil": "awis",},
  },
     
  {
    aliases: { id:["mana"], en:["which","where"], zh:["哪一个","哪里"]},
    translation: { ngoko: "endi", krama: "pundi", "krama-inggil": "pundi",},
  },
     
  {
    aliases: { id:["malam"], en:["night","evening"], zh:["晚上","夜晚"]},
    translation: { ngoko: "bengi", krama: "dalu", "krama-inggil": "dalu",},
  },
     
  {
    aliases: { id:["marah"], en:["angry"], zh:["生气"]},
    translation: { ngoko: "nesu", krama: "duka", "krama-inggil": "duka",},
  },
     
  {
    aliases: { id:["melihat"], en:["see","look at"], zh:["看见","看"]},
    translation: { ngoko: "ndelok", krama: "ningali", "krama-inggil": "mirsani",},
  },

  {
    aliases: { id: ["saya", "aku"], en: ["i", "me"], zh: ["我"] },
    translation: { ngoko: "aku", krama: "kula", "krama-inggil": "kula", },
  },

  {
    aliases: { id: ["kamu", "anda"], en: ["you"], zh: ["你", "您"] },
    translation: { ngoko: "kowe", krama: "sampeyan", "krama-inggil": "panjenengan",},
  },

  {
    aliases: { id: ["makan"], en: ["eat", "eats", "ate", "eating"], zh: ["吃"] },
    translation: { ngoko: "mangan", krama: "nedha", "krama-inggil": "dhahar"},
  },
   
  {
    aliases: { id:["motor"], en:["motorcyle"], zh:["摩托车"]},
    translation: { ngoko: "montor", krama: "montor", "krama-inggil": "montor",},
  },
     
  {
    aliases: { id:["menemukan"], en:["find","discover"], zh:["找到","发现"]},
    translation: { ngoko: "nemokake", krama: "manggih", "krama-inggil": "manggih",},
  },
    
  {
    aliases: { id:["menerima"], en:["receive","accept"], zh:["收到","接受"]},
    translation: { ngoko: "nampa", krama: "nampi", "krama-inggil": "nampi",},
  },
    
  {
    aliases: { id:["mengatakan"], en:["say","tell"], zh:["说","告诉"]},
    translation: { ngoko: "ngomong", krama: "matur", "krama-inggil": "ngendika",},
  },
    
  {
    aliases: { id:["menjual"], en:["sell"], zh:["卖"]},
    translation: { ngoko: "dodol", krama: "sade", "krama-inggil": "sade",},
  },
    
  {
    aliases: { id:["menulis"], en:["write"], zh:["写"]},
    translation: { ngoko: "nulis", krama: "nyerat", "krama-inggil": "nyerat",},
  },
    
  {
    aliases: { id:["menunggu"], en:["wait","waiting"], zh:["等"]},
    translation: { ngoko: "ngenteni", krama: "ngentosi", "krama-inggil": "ngentosi",},
  },
    
  {
    aliases: { id:["mudah"], en:["easy"], zh:["容易"]},
    translation: { ngoko: "gampang", krama: "gampil", "krama-inggil": "gampil",},
  },
    
  {
    aliases: { id:["mungkin"], en:["maybe","possible"], zh:["可能"]},
    translation: { ngoko: "mbokmenawa", krama: "bokmenawi", "krama-inggil": "bokmenawi",},
  },
    
  {
    aliases: { id:["murah"], en:["cheap"], zh:["便宜"]},
    translation: { ngoko: "murah", krama: "mirah", "krama-inggil": "mirah",},
  },
    
  {
    aliases: { id:["nama"], en:["name"], zh:["名字"]},
    translation: { ngoko: "jeneng", krama: "nama", "krama-inggil": "asma",},
  },
    
  {
    aliases: { id:["nanti"], en:["later"], zh:["稍后","以后"]},
    translation: { ngoko: "mengko", krama: "mangke", "krama-inggil": "mangke",},
  },
    
  {
    aliases: { id:["orang"], en:["person","people"], zh:["人","人们"]},
    translation: { ngoko: "wong", krama: "tiyang", "krama-inggil": "tiyang",},
  },
    
  {
    aliases: { id:["pagi"], en:["morning"], zh:["早上"]},
    translation: { ngoko: "esuk", krama: "enjing", "krama-inggil": "enjing",},
  },
    
  {
    aliases: { id:["paham"], en:["understand"], zh:["明白"]},
    translation: { ngoko: "paham", krama: "mangertos", "krama-inggil": "mangertos",},
  },
    
  {
    aliases: { id:["panjang"], en:["long"], zh:["长"]},
    translation: { ngoko: "dawa", krama: "dangu", "krama-inggil": "dangu",},
  },
    
  {
    aliases: { id:["pendek"], en:["short"], zh:["短"]},
    translation: { ngoko: "cendhak", krama: "cendhak", "krama-inggil": "cendhak",},
  },
    
  {
    aliases: { id:["percaya"], en:["believe","trust"], zh:["相信"]},
    translation: { ngoko: "percaya", krama: "pitados", "krama-inggil": "pitados",},
  },
    
  {
    aliases: {
      id: ["minum"],
      en: ["drink", "drinks", "drank", "drinking"],
      zh: ["喝"],
    },
    translation: {
      ngoko: "ngombe",
      krama: "unjuk",
      "krama-inggil": "unjuk",
    },
  },
  {
    aliases: {
      id: ["tidur"],
      en: ["sleep", "sleeps", "slept", "sleeping"],
      zh: ["睡觉", "睡"],
    },
    translation: {
      ngoko: "turu",
      krama: "tilem",
      "krama-inggil": "sare",
    },
  },
  {
    aliases: {
      id: ["pergi"],
      en: ["go", "goes", "went", "going"],
      zh: ["去"],
    },
    translation: {
      ngoko: "lunga",
      krama: "kesah",
      "krama-inggil": "tindak",
    },
  },
  {
    aliases: {
      id: ["datang"],
      en: ["come", "comes", "came", "coming"],
      zh: ["来", "來"],
    },
    translation: {
      ngoko: "teka",
      krama: "rawuh",
      "krama-inggil": "rawuh",
    },
  },
  {
    aliases: {
      id: ["rumah"],
      en: ["house", "home"],
      zh: ["家", "房子"],
    },
    translation: {
      ngoko: "omah",
      krama: "griya",
      "krama-inggil": "dalem",
    },
  },
  {
    aliases: {
      id: ["nasi"],
      en: ["rice"],
      zh: ["米饭", "米飯"],
    },
    translation: {
      ngoko: "sega",
      krama: "sekul",
      "krama-inggil": "sekul",
    },
  },
  {
    aliases: {
      id: ["pasar"],
      en: ["market"],
      zh: ["市场", "市場"],
    },
    translation: {
      ngoko: "pasar",
      krama: "pasar",
      "krama-inggil": "pasar",
    },
  },
  {
    aliases: {
      id: ["ke"],
      en: ["to"],
      zh: ["到"],
    },
    translation: {
      ngoko: "menyang",
      krama: "dhateng",
      "krama-inggil": "dhateng",
    },
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
  // Silsilah Keluarga

  {
    aliases: { id:["ibu","mama","mami","emak"], en:["mother","mom"], zh:["母亲"]},
    translation: { ngoko: "ibu", krama: "ibu", "krama-inggil": "ibu",},
  },
   
  {
    aliases: { id:["anak laki laki","anak laki-laki","anak cowo","anak cowok"], en:["son"], zh:["儿子"]},
    translation: { ngoko: "anak lanang", krama: "anak jaler", "krama-inggil": "putra",},
  },
   
  {
    aliases: { id:["anak perempuan"," anak cewe","anak cewek"], en:["daughter"], zh:["女儿"]},
    translation: { ngoko: "anak wadon", krama: "anak estri", "krama-inggil": "putri",},
  },
   
  {
    aliases: { id:["suami"], en:["husband"], zh:["丈夫"]},
    translation: { ngoko: "bojo lanang", krama: "garwa kakung", "krama-inggil": "garwa kakung",},
  },
   
  {
    aliases: { id:["istri"], en:["wife"], zh:["妻子"]},
    translation: { ngoko: "bojo wadon", krama: "garwa estri", "krama-inggil": "garwa estri",},
  },
   
  {
    aliases: { id:["pasangan"], en:["spouse"], zh:["配偶"]},
    translation: { ngoko: "bojo", krama: "garwa", "krama-inggil": "garwa",},
  },
   
  {
    aliases: { id:["kakak laki-laki","kakak cowok"], en:["older brother"], zh:["哥哥"]},
    translation: { ngoko: "mas", krama: "raka", "krama-inggil": "raka",},
  },
   
  {
    aliases: { id:["kakak perempuan","kakak cewek"], en:["older sister"], zh:["姐姐"]},
    translation: { ngoko: "mbak", krama: "mbakyu", "krama-inggil": "mbakyu",},
  },
   
  {
    aliases: { id:["adik"], en:["younger sibling"], zh:[""]},
    translation: { ngoko: "adhi", krama: "adhi", "krama-inggil": "adhi",},
  },
   
  {
    aliases: { id:["adik laki-laki","adik cowok"], en:["younger brother"], zh:["弟弟"]},
    translation: { ngoko: "adhi lanang", krama: "adhi jaler", "krama-inggil": "adhi jaler",},
  },
   
  {
    aliases: { id:["adik perempuan","adik cewek"], en:["younger sister"], zh:["妹妹"]},
    translation: { ngoko: "adhi wadon", krama: "adhi estri", "krama-inggil": "adhi estri",},
  },
   
  {
    aliases: { id:["saudara kandung"], en:["sibling"], zh:["兄弟姐妹"]},
    translation: { ngoko: "sedulur", krama: "sedherek", "krama-inggil": "sedherek",},
  },
   
  {
    aliases: { id:["kakek","opah"], en:["grandfather"], zh:["爷爷","外公"]},
    translation: { ngoko: "mbah kakung", krama: "eyang kakung", "krama-inggil": "eyang kakung",},
  },
   
  {
    aliases: { id:["nenek","omah"], en:["grandmother"], zh:["奶奶","外婆"]},
    translation: { ngoko: "mbah putri", krama: "eyang putri", "krama-inggil": "eyang putri",},
  },
   
  {
    aliases: { id:["buyut"], en:["great grandparent"], zh:["曾祖父母"]},
    translation: { ngoko: "mbah buyut", krama: "eyang buyut", "krama-inggil": "eyang buyut",},
  },
   
  {
    aliases: { id:["cucu"], en:["grandchild"], zh:[""]},
    translation: { ngoko: "putu", krama: "putu", "krama-inggil": "putu",},
  },
   
  {
    aliases: { id:["laki-laki","cowok","pria"], en:["man","male","men"], zh:["男"]},
    translation: { ngoko: "lanang", krama: "jaler", "krama-inggil": "jaler",},
  },
   
  {
    aliases: { id:["perempuan","cewek","wanita"], en:["women","female","woman"], zh:["女"]},
    translation: { ngoko: "wadon", krama: "estri", "krama-inggil": "estri",},
  },
   
  {
    aliases: { id:["paman"], en:["uncle"], zh:["叔叔"]},
    translation: { ngoko: "pakdhe", krama: "pakdhe", "krama-inggil": "pakdhe",},
  },
   
  {
    aliases: { id:["bibi"], en:["aunt"], zh:["姑姑"]},
    translation: { ngoko: "budhe", krama: "budhe", "krama-inggil": "budhe",},
  },
   
  {
    aliases: { id:["sepupu"], en:["cousin"], zh:["堂兄弟姐妹"]},
    translation: { ngoko: "misan", krama: "misan", "krama-inggil": "misan",},
  },
   
  {
    aliases: { id:["mertua"], en:["parent in law"], zh:["岳父母"]},
    translation: { ngoko: "maratuwa", krama: "marasepuh", "krama-inggil": "marasepuh",},
  },
   
  {
    aliases: { id:["menantu"], en:["daughter in law"], zh:["女婿","儿媳"]},
    translation: { ngoko: "mantu", krama: "mantu", "krama-inggil": "mantu",},
  },
   
  {
    aliases: { id:["kerabat"], en:["relatives"], zh:["亲戚"]},
    translation: { ngoko: "sanak kadang", krama: "sanak kadang", "krama-inggil": "sanak kadang",},
  },
   
  {
    aliases: { id:["janda"], en:["widow"], zh:["寡妇"]},
    translation: { ngoko: "randha", krama: "randha", "krama-inggil": "randha",},
  },
   
  // Alat Makan
  {
    aliases: { id:["botol minum"], en:["water bottle"], zh:["水瓶"]},
    translation: { ngoko: "botol ngombe", krama: "botol ngunjuk", "krama-inggil": "botol ngunjuk",},
  },
   
  {
    aliases: { id:["tempat"], en:["container"], zh:["盒"]},
    translation: { ngoko: "wadah", krama: "wadah", "krama-inggil": "wadah",},
  },
   
  {
    aliases: { id:["pisau"], en:["knife"], zh:["餐刀"]},
    translation: { ngoko: "peso", krama: "peso", "krama-inggil": "peso",},
  },
   
  {
    aliases: { id:["tusuk gigi"], en:["toothpick"], zh:["牙签"]},
    translation: { ngoko: "sujen untu", krama: "sujen untu", "krama-inggil": "sujen untu",},
  },
   
  {
    aliases: { id:["sendok sayur"], en:["ladle"], zh:["汤勺"]},
    translation: { ngoko: "irus", krama: "irus", "krama-inggil": "irus",},
  },
   
  {
    aliases: { id:["spatula"], en:["spatula"], zh:["锅铲"]},
    translation: { ngoko: "sutil", krama: "sutil", "krama-inggil": "sutil",},
  },
  
  // Hewan 

  {
    aliases: { id: ["anjing"], en: ["dog"], zh: ["狗"] },
    translation: {
      ngoko: "asu",
      krama: "segawon",
      "krama-inggil": "segawon",
    },
  },
  {
    aliases: { id: ["angsa"], en: ["goose"], zh: ["鹅"] },
    translation: {
      ngoko: "angsa",
      krama: "angsa",
      "krama-inggil": "angsa",
    },
  },
  {
    aliases: { id: ["ayam"], en: ["chicken"], zh: ["鸡"] },
    translation: {
      ngoko: "pitik",
      krama: "ayam",
      "krama-inggil": "ayam",
    },
  },
  {
    aliases: { id: ["alpaka"], en: ["alpaca"], zh: ["羊驼"] },
    translation: {
      ngoko: "alpaka",
      krama: "alpaka",
      "krama-inggil": "alpaka",
    },
  },
  {
    aliases: { id: ["aligator"], en: ["alligator"], zh: ["短吻鳄"] },
    translation: {
      ngoko: "aligator",
      krama: "aligator",
      "krama-inggil": "aligator",
    },
  },
  {
    aliases: { id: ["babi"], en: ["pig"], zh: ["猪"] },
    translation: {
      ngoko: "babi",
      krama: "babi",
      "krama-inggil": "babi",
    },
  },
  {
    aliases: { id: ["badak"], en: ["rhinoceros"], zh: ["犀牛"] },
    translation: {
      ngoko: "warak",
      krama: "warak",
      "krama-inggil": "warak",
    },
  },
  {
    aliases: { id: ["bajing"], en: ["squirrel"], zh: ["松鼠"] },
    translation: {
      ngoko: "bajing",
      krama: "bajing",
      "krama-inggil": "bajing",
    },
  },
  {
    aliases: { id: ["belalang"], en: ["grasshopper"], zh: ["蚱蜢"] },
    translation: {
      ngoko: "walang",
      krama: "walang",
      "krama-inggil": "walang",
    },
  },
  {
    aliases: { id: ["belut"], en: ["eel"], zh: ["鳗鱼"] },
    translation: {
      ngoko: "welut",
      krama: "welut",
      "krama-inggil": "welut",
    },
  },
  {
    aliases: { id: ["berang-berang"], en: ["otter"], zh: ["水獭"] },
    translation: {
      ngoko: "berang-berang",
      krama: "berang-berang",
      "krama-inggil": "berang-berang",
    },
  },
  {
    aliases: { id: ["beruang"], en: ["bear"], zh: ["熊"] },
    translation: {
      ngoko: "beruang",
      krama: "beruang",
      "krama-inggil": "beruang",
    },
  },
  {
    aliases: { id: ["biawak"], en: ["monitor lizard"], zh: ["巨蜥"] },
    translation: {
      ngoko: "bayawak",
      krama: "bayawak",
      "krama-inggil": "bayawak",
    },
  },
  {
    aliases: { id: ["bintang laut"], en: ["starfish"], zh: ["海星"] },
    translation: {
      ngoko: "lintang laut",
      krama: "lintang laut",
      "krama-inggil": "lintang laut",
    },
  },
  {
    aliases: { id: ["buaya"], en: ["crocodile"], zh: ["鳄鱼"] },
    translation: {
      ngoko: "baya",
      krama: "baya",
      "krama-inggil": "baya",
    },
  },
  {
    aliases: { id: ["burung hantu"], en: ["owl"], zh: ["猫头鹰"] },
    translation: {
      ngoko: "manuk dares",
      krama: "manuk dares",
      "krama-inggil": "manuk dares",
    },
  },
  {
    aliases: { id: ["cacing"], en: ["worm"], zh: ["蠕虫"] },
    translation: {
      ngoko: "cacing",
      krama: "cacing",
      "krama-inggil": "cacing",
    },
  },
  {
    aliases: { id: ["capung"], en: ["dragonfly"], zh: ["蜻蜓"] },
    translation: {
      ngoko: "kinjeng",
      krama: "kinjeng",
      "krama-inggil": "kinjeng",
    },
  },
  {
    aliases: { id: ["cicak"], en: ["gecko"], zh: ["壁虎"] },
    translation: {
      ngoko: "cicak",
      krama: "cicak",
      "krama-inggil": "cicak",
    },
  },
  {
    aliases: { id: ["cumi-cumi"], en: ["squid"], zh: ["鱿鱼"] },
    translation: {
      ngoko: "cumi-cumi",
      krama: "cumi-cumi",
      "krama-inggil": "cumi-cumi",
    },
  },
  {
    aliases: { id: ["camar"], en: ["seagull"], zh: ["海鸥"] },
    translation: {
      ngoko: "manuk camar",
      krama: "manuk camar",
      "krama-inggil": "manuk camar",
    },
  },
  {
    aliases: { id: ["domba"], en: ["sheep"], zh: ["绵羊"] },
    translation: {
      ngoko: "wedhus",
      krama: "wedhus",
      "krama-inggil": "wedhus",
    },
  },
  {
    aliases: { id: ["dugong"], en: ["dugong"], zh: ["儒艮"] },
    translation: {
      ngoko: "dugong",
      krama: "dugong",
      "krama-inggil": "dugong",
    },
  },
  {
    aliases: { id: ["dinosaurus"], en: ["dinosaur"], zh: ["恐龙"] },
    translation: {
      ngoko: "dinosaurus",
      krama: "dinosaurus",
      "krama-inggil": "dinosaurus",
    },
  },
  {
    aliases: { id: ["dara"], en: ["dove"], zh: ["鸽子"] },
    translation: {
      ngoko: "manuk dara",
      krama: "manuk dara",
      "krama-inggil": "manuk dara",
    },
  },
  {
    aliases: { id: ["elang"], en: ["eagle"], zh: ["鹰"] },
    translation: {
      ngoko: "manuk garudha",
      krama: "manuk garudha",
      "krama-inggil": "manuk garudha",
    },
  },
  {
    aliases: { id: ["ekidna"], en: ["echidna"], zh: ["针鼹"] },
    translation: {
      ngoko: "ekidna",
      krama: "ekidna",
      "krama-inggil": "ekidna",
    },
  },
  {
    aliases: { id: ["entok"], en: ["muscovy duck"], zh: ["番鸭"] },
    translation: {
      ngoko: "menthok",
      krama: "menthok",
      "krama-inggil": "menthok",
    },
  },
  {
    aliases: { id: ["emu"], en: ["emu"], zh: ["鸸鹋"] },
    translation: {
      ngoko: "emu",
      krama: "emu",
      "krama-inggil": "emu",
    },
  },
  {
    aliases: { id: ["flamingo"], en: ["flamingo"], zh: ["火烈鸟"] },
    translation: {
      ngoko: "flamingo",
      krama: "flamingo",
      "krama-inggil": "flamingo",
    },
  },
  {
    aliases: { id: ["fossa"], en: ["fossa"], zh: ["马岛獴"] },
    translation: {
      ngoko: "fossa",
      krama: "fossa",
      "krama-inggil": "fossa",
    },
  },
  {
    aliases: { id: ["feret"], en: ["ferret"], zh: ["雪貂"] },
    translation: {
      ngoko: "feret",
      krama: "feret",
      "krama-inggil": "feret",
    },
  },
  {
    aliases: { id: ["gajah"], en: ["elephant"], zh: ["大象"] },
    translation: {
      ngoko: "gajah",
      krama: "gajah",
      "krama-inggil": "gajah",
    },
  },
  {
    aliases: { id: ["gagak"], en: ["crow"], zh: ["乌鸦"] },
    translation: {
      ngoko: "manuk gagak",
      krama: "manuk gagak",
      "krama-inggil": "manuk gagak",
    },
  },
  {
    aliases: { id: ["gurita"], en: ["octopus"], zh: ["章鱼"] },
    translation: {
      ngoko: "gurita",
      krama: "gurita",
      "krama-inggil": "gurita",
    },
  },
  {
    aliases: { id: ["gabus"], en: ["snakehead fish"], zh: ["乌鳢"] },
    translation: {
      ngoko: "iwak gabus",
      krama: "iwak gabus",
      "krama-inggil": "iwak gabus",
    },
  },
  {
    aliases: { id: ["harimau"], en: ["tiger"], zh: ["老虎"] },
    translation: {
      ngoko: "macan",
      krama: "macan",
      "krama-inggil": "macan",
    },
  },
  {
    aliases: { id: ["hiu"], en: ["shark"], zh: ["鲨鱼"] },
    translation: {
      ngoko: "iwak hiu",
      krama: "iwak hiu",
      "krama-inggil": "iwak hiu",
    },
  },
  {
    aliases: { id: ["hamster"], en: ["hamster"], zh: ["仓鼠"] },
    translation: {
      ngoko: "hamster",
      krama: "hamster",
      "krama-inggil": "hamster",
    },
  },
  {
    aliases: { id: ["hering"], en: ["vulture"], zh: ["秃鹫"] },
    translation: {
      ngoko: "manuk hering",
      krama: "manuk hering",
      "krama-inggil": "manuk hering",
    },
  },
  {
    aliases: { id: ["ikan"], en: ["fish"], zh: ["鱼"] },
    translation: {
      ngoko: "iwak",
      krama: "iwak",
      "krama-inggil": "iwak",
    },
  },
  {
    aliases: { id: ["ikan lele"], en: ["catfish"], zh: ["鲶鱼"] },
    translation: {
      ngoko: "iwak lele",
      krama: "iwak lele",
      "krama-inggil": "iwak lele",
    },
  },
  {
    aliases: { id: ["iguana"], en: ["iguana"], zh: ["鬣蜥"] },
    translation: {
      ngoko: "iguana",
      krama: "iguana",
      "krama-inggil": "iguana",
    },
  },
  {
    aliases: { id: ["itik"], en: ["duck"], zh: ["鸭子"] },
    translation: {
      ngoko: "itik",
      krama: "itik",
      "krama-inggil": "itik",
    },
  },
  {
    aliases: { id: ["jangkrik"], en: ["cricket"], zh: ["蟋蟀"] },
    translation: {
      ngoko: "jangkrik",
      krama: "jangkrik",
      "krama-inggil": "jangkrik",
    },
  },
  {
    aliases: { id: ["jaguar"], en: ["jaguar"], zh: ["美洲豹"] },
    translation: {
      ngoko: "jaguar",
      krama: "jaguar",
      "krama-inggil": "jaguar",
    },
  },
  {
    aliases: { id: ["jalak"], en: ["starling"], zh: ["椋鸟"] },
    translation: {
      ngoko: "manuk jalak",
      krama: "manuk jalak",
      "krama-inggil": "manuk jalak",
    },
  },
  {
    aliases: { id: ["jerapah"], en: ["giraffe"], zh: ["长颈鹿"] },
    translation: {
      ngoko: "jerapah",
      krama: "jerapah",
      "krama-inggil": "jerapah",
    },
  },
  {
    aliases: { id: ["kambing"], en: ["goat"], zh: ["山羊"] },
    translation: {
      ngoko: "wedhus",
      krama: "wedhus",
      "krama-inggil": "wedhus",
    },
  },
  {
    aliases: { id: ["kangguru"], en: ["kangaroo"], zh: ["袋鼠"] },
    translation: {
      ngoko: "kangguru",
      krama: "kangguru",
      "krama-inggil": "kangguru",
    },
  },
  {
    aliases: { id: ["kucing"], en: ["cat"], zh: ["猫"] },
    translation: {
      ngoko: "kucing",
      krama: "kucing",
      "krama-inggil": "kucing",
    },
  },
  {
    aliases: { id: ["kuda"], en: ["horse"], zh: ["马"] },
    translation: {
      ngoko: "jaran",
      krama: "jaran",
      "krama-inggil": "jaran",
    },
  },
  {
    aliases: { id: ["kura-kura"], en: ["turtle"], zh: ["龟"] },
    translation: {
      ngoko: "kura-kura",
      krama: "kura-kura",
      "krama-inggil": "kura-kura",
    },
  },
  {
    aliases: { id: ["kepiting"], en: ["crab"], zh: ["螃蟹"] },
    translation: {
      ngoko: "yuyu",
      krama: "yuyu",
      "krama-inggil": "yuyu",
    },
  },
  {
    aliases: { id: ["kupu-kupu"], en: ["butterfly"], zh: ["蝴蝶"] },
    translation: {
      ngoko: "kupu-kupu",
      krama: "kupu-kupu",
      "krama-inggil": "kupu-kupu",
    },
  },
  {
    aliases: { id: ["kelelawar"], en: ["bat"], zh: ["蝙蝠"] },
    translation: {
      ngoko: "kalong",
      krama: "kalong",
      "krama-inggil": "kalong",
    },
  },
  {
    aliases: { id: ["koala"], en: ["koala"], zh: ["考拉"] },
    translation: {
      ngoko: "koala",
      krama: "koala",
      "krama-inggil": "koala",
    },
  },
  {
    aliases: { id: ["komodo"], en: ["Komodo dragon"], zh: ["科莫多巨蜥"] },
    translation: {
      ngoko: "komodo",
      krama: "komodo",
      "krama-inggil": "komodo",
    },
  },
  {
    aliases: { id: ["lalat"], en: ["fly"], zh: ["苍蝇"] },
    translation: {
      ngoko: "laler",
      krama: "laler",
      "krama-inggil": "laler",
    },
  },
  {
    aliases: { id: ["lebah"], en: ["bee"], zh: ["蜜蜂"] },
    translation: {
      ngoko: "tawon",
      krama: "tawon",
      "krama-inggil": "tawon",
    },
  },
  {
    aliases: { id: ["laba-laba"], en: ["spider"], zh: ["蜘蛛"] },
    translation: {
      ngoko: "lawa-lawa",
      krama: "lawa-lawa",
      "krama-inggil": "lawa-lawa",
    },
  },
  {
    aliases: { id: ["landak"], en: ["porcupine"], zh: ["豪猪"] },
    translation: {
      ngoko: "landak",
      krama: "landak",
      "krama-inggil": "landak",
    },
  },
  {
    aliases: { id: ["lumba-lumba"], en: ["dolphin"], zh: ["海豚"] },
    translation: {
      ngoko: "lumba-lumba",
      krama: "lumba-lumba",
      "krama-inggil": "lumba-lumba",
    },
  },
  {
    aliases: { id: ["luwak"], en: ["civet"], zh: ["麝香猫"] },
    translation: {
      ngoko: "luwak",
      krama: "luwak",
      "krama-inggil": "luwak",
    },
  },
  {
    aliases: { id: ["monyet"], en: ["monkey"], zh: ["猴子"] },
    translation: {
      ngoko: "kethek",
      krama: "kethek",
      "krama-inggil": "kethek",
    },
  },
  {
    aliases: { id: ["macan tutul"], en: ["leopard"], zh: ["豹"] },
    translation: {
      ngoko: "macan tutul",
      krama: "macan tutul",
      "krama-inggil": "macan tutul",
    },
  },
  {
    aliases: { id: ["merpati"], en: ["pigeon"], zh: ["鸽子"] },
    translation: {
      ngoko: "dara",
      krama: "dara",
      "krama-inggil": "dara",
    },
  },
  {
    aliases: { id: ["musang"], en: ["civet"], zh: ["果子狸"] },
    translation: {
      ngoko: "musang",
      krama: "musang",
      "krama-inggil": "musang",
    },
  },
  {
    aliases: { id: ["marmut"], en: ["guinea pig"], zh: ["豚鼠"] },
    translation: {
      ngoko: "marmut",
      krama: "marmut",
      "krama-inggil": "marmut",
    },
  },
  {
    aliases: { id: ["nila"], en: ["tilapia"], zh: ["罗非鱼"] },
    translation: {
      ngoko: "iwak nila",
      krama: "iwak nila",
      "krama-inggil": "iwak nila",
    },
  },
  {
    aliases: { id: ["nyamuk"], en: ["mosquito"], zh: ["蚊子"] },
    translation: {
      ngoko: "nyamuk",
      krama: "nyamuk",
      "krama-inggil": "nyamuk",
    },
  },
  {
    aliases: { id: ["ngengat"], en: ["moth"], zh: ["飞蛾"] },
    translation: {
      ngoko: "ngengat",
      krama: "ngengat",
      "krama-inggil": "ngengat",
    },
  },
  {
    aliases: { id: ["narwhal"], en: ["narwhal"], zh: ["独角鲸"] },
    translation: {
      ngoko: "narwhal",
      krama: "narwhal",
      "krama-inggil": "narwhal",
    },
  },
  {
    aliases: { id: ["orangutan"], en: ["orangutan"], zh: ["猩猩"] },
    translation: {
      ngoko: "orangutan",
      krama: "orangutan",
      "krama-inggil": "orangutan",
    },
  },
  {
    aliases: { id: ["onta"], en: ["camel"], zh: ["骆驼"] },
    translation: {
      ngoko: "unta",
      krama: "unta",
      "krama-inggil": "unta",
    },
  },
  {
    aliases: { id: ["orong-orong"], en: ["mole cricket"], zh: ["蝼蛄"] },
    translation: {
      ngoko: "orong-orong",
      krama: "orong-orong",
      "krama-inggil": "orong-orong",
    },
  },
  {
    aliases: { id: ["paus"], en: ["whale"], zh: ["鲸"] },
    translation: {
      ngoko: "paus",
      krama: "paus",
      "krama-inggil": "paus",
    },
  },
  {
    aliases: { id: ["panda"], en: ["panda"], zh: ["熊猫"] },
    translation: {
      ngoko: "panda",
      krama: "panda",
      "krama-inggil": "panda",
    },
  },
  {
    aliases: { id: ["pari"], en: ["stingray"], zh: ["鳐鱼"] },
    translation: {
      ngoko: "iwak pari",
      krama: "iwak pari",
      "krama-inggil": "iwak pari",
    },
  },
  {
    aliases: { id: ["penyu"], en: ["sea turtle"], zh: ["海龟"] },
    translation: {
      ngoko: "penyu",
      krama: "penyu",
      "krama-inggil": "penyu",
    },
  },
  {
    aliases: { id: ["platipus"], en: ["platypus"], zh: ["鸭嘴兽"] },
    translation: {
      ngoko: "platipus",
      krama: "platipus",
      "krama-inggil": "platipus",
    },
  },
  {
    aliases: { id: ["pelikan"], en: ["pelican"], zh: ["鹈鹕"] },
    translation: {
      ngoko: "pelikan",
      krama: "pelikan",
      "krama-inggil": "pelikan",
    },
  },
  {
    aliases: { id: ["quokka"], en: ["quokka"], zh: ["短尾矮袋鼠"] },
    translation: {
      ngoko: "quokka",
      krama: "quokka",
      "krama-inggil": "quokka",
    },
  },
  {
    aliases: { id: ["quoll"], en: ["quoll"], zh: ["袋鼬"] },
    translation: {
      ngoko: "quoll",
      krama: "quoll",
      "krama-inggil": "quoll",
    },
  },
  {
    aliases: { id: ["rusa"], en: ["deer"], zh: ["鹿"] },
    translation: {
      ngoko: "kidang",
      krama: "kidang",
      "krama-inggil": "kidang",
    },
  },
  {
    aliases: { id: ["rajawali"], en: ["eagle"], zh: ["鹰"] },
    translation: {
      ngoko: "garudha",
      krama: "garudha",
      "krama-inggil": "garudha",
    },
  },
  {
    aliases: { id: ["rayap"], en: ["termite"], zh: ["白蚁"] },
    translation: {
      ngoko: "rayap",
      krama: "rayap",
      "krama-inggil": "rayap",
    },
  },
  {
    aliases: { id: ["rubah"], en: ["fox"], zh: ["狐狸"] },
    translation: {
      ngoko: "rubah",
      krama: "rubah",
      "krama-inggil": "rubah",
    },
  },
  {
    aliases: { id: ["sapi"], en: ["cow","cattle"], zh: ["牛"] },
    translation: {
      ngoko: "sapi",
      krama: "sapi",
      "krama-inggil": "sapi",
    },
  },
  {
    aliases: { id: ["semut"], en: ["ant"], zh: ["蚂蚁"] },
    translation: {
      ngoko: "semut",
      krama: "semut",
      "krama-inggil": "semut",
    },
  },
  {
    aliases: { id: ["singa"], en: ["lion"], zh: ["狮子"] },
    translation: {
      ngoko: "singa",
      krama: "singa",
      "krama-inggil": "singa",
    },
  },
  {
    aliases: { id: ["serigala"], en: ["wolf"], zh: ["狼"] },
    translation: {
      ngoko: "serigala",
      krama: "serigala",
      "krama-inggil": "serigala",
    },
  },
  {
    aliases: { id: ["siput"], en: ["snail"], zh: ["蜗牛"] },
    translation: {
      ngoko: "siput",
      krama: "siput",
      "krama-inggil": "siput",
    },
  },
  {
    aliases: { id: ["salamander"], en: ["salamander"], zh: ["蝾螈"] },
    translation: {
      ngoko: "salamander",
      krama: "salamander",
      "krama-inggil": "salamander",
    },
  },
  {
    aliases: { id: ["sotong"], en: ["cuttlefish"], zh: ["乌贼"] },
    translation: {
      ngoko: "sotong",
      krama: "sotong",
      "krama-inggil": "sotong",
    },
  },
  {
    aliases: { id: ["tikus"], en: ["rat","mouse"], zh: ["老鼠"] },
    translation: {
      ngoko: "tikus",
      krama: "tikus",
      "krama-inggil": "tikus",
    },
  },
  {
    aliases: { id: ["trenggiling"], en: ["pangolin"], zh: ["穿山甲"] },
    translation: {
      ngoko: "trenggiling",
      krama: "trenggiling",
      "krama-inggil": "trenggiling",
    },
  },
  {
    aliases: { id: ["tawon"], en: ["wasp"], zh: ["黄蜂"] },
    translation: {
      ngoko: "tawon",
      krama: "tawon",
      "krama-inggil": "tawon",
    },
  },
  {
    aliases: { id: ["tapir"], en: ["tapir"], zh: ["貘"] },
    translation: {
      ngoko: "tapir",
      krama: "tapir",
      "krama-inggil": "tapir",
    },
  },
  {
    aliases: { id: ["ular"], en: ["snake"], zh: ["蛇"] },
    translation: {
      ngoko: "ula",
      krama: "ula",
      "krama-inggil": "ula",
    },
  },
  {
    aliases: { id: ["ubur-ubur"], en: ["jellyfish"], zh: ["水母"] },
    translation: {
      ngoko: "ubur-ubur",
      krama: "ubur-ubur",
      "krama-inggil": "ubur-ubur",
    },
  },
  {
    aliases: { id: ["udang"], en: ["shrimp"], zh: ["虾"] },
    translation: {
      ngoko: "urang",
      krama: "urang",
      "krama-inggil": "urang",
    },
  },
  {
    aliases: { id: ["undur-undur"], en: ["antlion"], zh: ["蚁蛉"] },
    translation: {
      ngoko: "undur-undur",
      krama: "undur-undur",
      "krama-inggil": "undur-undur",
    },
  },
  {
    aliases: { id: ["kelelawar vampir"], en: ["vampire bat"], zh: ["吸血蝠"] },
    translation: {
      ngoko: "kelelawar vampir",
      krama: "kelelawar vampir",
      "krama-inggil": "kelelawar vampir",
    },
  },
  {
    aliases: { id: ["vaquita"], en: ["vaquita"], zh: ["小头鼠海豚"] },
    translation: {
      ngoko: "vaquita",
      krama: "vaquita",
      "krama-inggil": "vaquita",
    },
  },
  {
    aliases: { id: ["walet"], en: ["swiftlet"], zh: ["雨燕"] },
    translation: {
      ngoko: "manuk walet",
      krama: "manuk walet",
      "krama-inggil": "manuk walet",
    },
  },
  {
    aliases: { id: ["wombat"], en: ["wombat"], zh: ["袋熊"] },
    translation: {
      ngoko: "wombat",
      krama: "wombat",
      "krama-inggil": "wombat",
    },
  },
  {
    aliases: { id: ["xerus"], en: ["xerus"], zh: ["非洲地松鼠"] },
    translation: {
      ngoko: "xerus",
      krama: "xerus",
      "krama-inggil": "xerus",
    },
  },
  {
    aliases: { id: ["xenopus"], en: ["African clawed frog"], zh: ["非洲爪蟾"] },
    translation: {
      ngoko: "xenopus",
      krama: "xenopus",
      "krama-inggil": "xenopus",
    },
  },
  {
    aliases: { id: ["yak"], en: ["yak"], zh: ["牦牛"] },
    translation: {
      ngoko: "yak",
      krama: "yak",
      "krama-inggil": "yak",
    },
  },
  {
    aliases: { id: ["yuyu"], en: ["freshwater crab"], zh: ["淡水蟹"] },
    translation: {
      ngoko: "yuyu",
      krama: "yuyu",
      "krama-inggil": "yuyu",
    },
  },
  {
    aliases: { id: ["zebra"], en: ["zebra"], zh: ["斑马"] },
    translation: {
      ngoko: "zebra",
      krama: "zebra",
      "krama-inggil": "zebra",
    },
  },
  {
    aliases: { id: ["zebu"], en: ["zebu"], zh: ["瘤牛"] },
    translation: {
      ngoko: "zebu",
      krama: "zebu",
      "krama-inggil": "zebu",
    },
  },
  {
    aliases: { id: ["zorila"], en: ["zorilla"], zh: ["非洲臭鼬"] },
    translation: {
      ngoko: "zorila",
      krama: "zorila",
      "krama-inggil": "zorila",
    },
  },

  // Tubuh Manusia
    {
    aliases: { id: ["kepala"], en: ["head"], zh: ["头部"] },
    translation: {
      ngoko: "sirah",
      krama: "sirah",
      "krama-inggil": "sirah",
    },
  },
  {
    aliases: { id: ["rambut"], en: ["hair"], zh: ["头发"] },
    translation: {
      ngoko: "rambut",
      krama: "rambut",
      "krama-inggil": "rambut",
    },
  },
  {
    aliases: { id: ["kulit kepala"], en: ["scalp"], zh: ["头皮"] },
    translation: {
      ngoko: "kulit sirah",
      krama: "kulit sirah",
      "krama-inggil": "kulit sirah",
    },
  },
  {
    aliases: { id: ["dahi"], en: ["forehead"], zh: ["额头"] },
    translation: {
      ngoko: "bathuk",
      krama: "bathuk",
      "krama-inggil": "bathuk",
    },
  },
  {
    aliases: { id: ["alis"], en: ["eyebrow"], zh: ["眉毛"] },
    translation: {
      ngoko: "alis",
      krama: "alis",
      "krama-inggil": "alis",
    },
  },
  {
    aliases: { id: ["mata"], en: ["eye"], zh: ["眼睛"] },
    translation: {
      ngoko: "mripat",
      krama: "mripat",
      "krama-inggil": "mripat",
    },
  },
  {
    aliases: { id: ["kelopak mata"], en: ["eyelid"], zh: ["眼睑"] },
    translation: {
      ngoko: "kelopak mripat",
      krama: "kelopak mripat",
      "krama-inggil": "kelopak mripat",
    },
  },
  {
    aliases: { id: ["bulu mata"], en: ["eyelashes"], zh: ["睫毛"] },
    translation: {
      ngoko: "bulu mata",
      krama: "bulu mata",
      "krama-inggil": "bulu mata",
    },
  },
  {
    aliases: { id: ["pupil"], en: ["pupil"], zh: ["瞳孔"] },
    translation: {
      ngoko: "pupil",
      krama: "pupil",
      "krama-inggil": "pupil",
    },
  },
  {
    aliases: { id: ["iris"], en: ["iris"], zh: ["虹膜"] },
    translation: {
      ngoko: "iris",
      krama: "iris",
      "krama-inggil": "iris",
    },
  },
  {
    aliases: { id: ["telinga"], en: ["ear"], zh: ["耳朵"] },
    translation: {
      ngoko: "kuping",
      krama: "talinga",
      "krama-inggil": "talinga",
    },
  },
  {
    aliases: { id: ["lubang telinga"], en: ["ear canal opening"], zh: ["耳孔"] },
    translation: {
      ngoko: "bolongan kuping",
      krama: "bolongan talinga",
      "krama-inggil": "bolongan talinga",
    },
  },
  {
    aliases: { id: ["hidung"], en: ["nose"], zh: ["鼻子"] },
    translation: {
      ngoko: "irung",
      krama: "irung",
      "krama-inggil": "irung",
    },
  },
  {
    aliases: { id: ["lubang hidung"], en: ["nostril"], zh: ["鼻孔"] },
    translation: {
      ngoko: "bolongan irung",
      krama: "bolongan irung",
      "krama-inggil": "bolongan irung",
    },
  },
  {
    aliases: { id: ["pipi"], en: ["cheek"], zh: ["脸颊"] },
    translation: {
      ngoko: "pipi",
      krama: "pipi",
      "krama-inggil": "pipi",
    },
  },
  {
    aliases: { id: ["mulut"], en: ["mouth"], zh: ["嘴巴"] },
    translation: {
      ngoko: "cangkem",
      krama: "tutuk",
      "krama-inggil": "tutuk",
    },
  },
  {
    aliases: { id: ["bibir"], en: ["lip"], zh: ["嘴唇"] },
    translation: {
      ngoko: "lambe",
      krama: "lathi",
      "krama-inggil": "lathi",
    },
  },
  {
    aliases: { id: ["gusi"], en: ["gums"], zh: ["牙龈"] },
    translation: {
      ngoko: "gusi",
      krama: "gusi",
      "krama-inggil": "gusi",
    },
  },
  {
    aliases: { id: ["lidah"], en: ["tongue"], zh: ["舌头"] },
    translation: {
      ngoko: "ilat",
      krama: "ilat",
      "krama-inggil": "ilat",
    },
  },
  {
    aliases: { id: ["langit-langit mulut"], en: ["palate"], zh: ["腭"] },
    translation: {
      ngoko: "langit-langit cangkem",
      krama: "langit-langit tutuk",
      "krama-inggil": "langit-langit tutuk",
    },
  },
  {
    aliases: { id: ["dagu"], en: ["chin"], zh: ["下巴"] },
    translation: {
      ngoko: "dagu",
      krama: "dagu",
      "krama-inggil": "dagu",
    },
  },
  {
    aliases: { id: ["rahang"], en: ["jaw"], zh: ["颌"] },
    translation: {
      ngoko: "rahang",
      krama: "rahang",
      "krama-inggil": "rahang",
    },
  },
  {
    aliases: { id: ["leher"], en: ["neck"], zh: ["脖子"] },
    translation: {
      ngoko: "gulu",
      krama: "jangga",
      "krama-inggil": "jangga",
    },
  },
  {
    aliases: { id: ["tenggorokan"], en: ["throat"], zh: ["喉咙"] },
    translation: {
      ngoko: "tenggorokan",
      krama: "tenggorokan",
      "krama-inggil": "tenggorokan",
    },
  },
  {
    aliases: { id: ["bahu"], en: ["shoulder"], zh: ["肩膀"] },
    translation: {
      ngoko: "pundhak",
      krama: "pundhak",
      "krama-inggil": "pundhak",
    },
  },
  {
    aliases: { id: ["dada"], en: ["chest"], zh: ["胸部"] },
    translation: {
      ngoko: "dodo",
      krama: "jaja",
      "krama-inggil": "jaja",
    },
  },
  {
    aliases: { id: ["payudara"], en: ["breast"], zh: ["乳房"] },
    translation: {
      ngoko: "payudara",
      krama: "payudara",
      "krama-inggil": "payudara",
    },
  },
  {
    aliases: { id: ["puting"], en: ["nipple"], zh: ["乳头"] },
    translation: {
      ngoko: "puting",
      krama: "puting",
      "krama-inggil": "puting",
    },
  },
  {
    aliases: { id: ["ketiak"], en: ["armpit"], zh: ["腋窝"] },
    translation: {
      ngoko: "kelek",
      krama: "kelek",
      "krama-inggil": "kelek",
    },
  },
  {
    aliases: { id: ["punggung"], en: ["back"], zh: ["背部"] },
    translation: {
      ngoko: "punggung",
      krama: "punggung",
      "krama-inggil": "punggung",
    },
  },
  {
    aliases: { id: ["tulang belakang"], en: ["spine"], zh: ["脊柱"] },
    translation: {
      ngoko: "balung geger",
      krama: "balung geger",
      "krama-inggil": "balung geger",
    },
  },
  {
    aliases: { id: ["perut"], en: ["abdomen","belly"], zh: ["腹部"] },
    translation: {
      ngoko: "weteng",
      krama: "padharan",
      "krama-inggil": "padharan",
    },
  },
  {
    aliases: { id: ["pusar"], en: ["navel"], zh: ["肚脐"] },
    translation: {
      ngoko: "udel",
      krama: "udel",
      "krama-inggil": "udel",
    },
  },
  {
    aliases: { id: ["pinggang"], en: ["waist"], zh: ["腰部"] },
    translation: {
      ngoko: "bangkekan",
      krama: "panggalih",
      "krama-inggil": "panggalih",
    },
  },
  {
    aliases: { id: ["panggul"], en: ["pelvis"], zh: ["骨盆"] },
    translation: {
      ngoko: "panggul",
      krama: "panggul",
      "krama-inggil": "panggul",
    },
  },
  {
    aliases: { id: ["bokong"], en: ["buttocks"], zh: ["臀部"] },
    translation: {
      ngoko: "bokong",
      krama: "bokong",
      "krama-inggil": "bokong",
    },
  },
  {
    aliases: { id: ["anus"], en: ["anus"], zh: ["肛门"] },
    translation: {
      ngoko: "dubur",
      krama: "tepas",
      "krama-inggil": "tepas",
    },
  },
  {
    aliases: { id: ["lengan"], en: ["arm"], zh: ["手臂"] },
    translation: {
      ngoko: "lengen",
      krama: "lengen",
      "krama-inggil": "lengen",
    },
  },
  {
    aliases: { id: ["siku"], en: ["elbow"], zh: ["肘部"] },
    translation: {
      ngoko: "sikut",
      krama: "sikut",
      "krama-inggil": "sikut",
    },
  },
  {
    aliases: { id: ["pergelangan tangan"], en: ["wrist"], zh: ["手腕"] },
    translation: {
      ngoko: "pergelangan tangan",
      krama: "pergelangan tangan",
      "krama-inggil": "pergelangan tangan",
    },
  },
  {
    aliases: { id: ["telapak tangan"], en: ["palm"], zh: ["手掌"] },
    translation: {
      ngoko: "tlapakan tangan",
      krama: "tlapakan tangan",
      "krama-inggil": "tlapakan tangan",
    },
  },
  {
    aliases: { id: ["jari tangan"], en: ["finger"], zh: ["手指"] },
    translation: {
      ngoko: "driji tangan",
      krama: "driji tangan",
      "krama-inggil": "driji tangan",
    },
  },
  {
    aliases: { id: ["ibu jari"], en: ["thumb"], zh: ["拇指"] },
    translation: {
      ngoko: "jempol",
      krama: "jempol",
      "krama-inggil": "jempol",
    },
  },
  {
    aliases: { id: ["kuku tangan"], en: ["fingernail"], zh: ["手指甲"] },
    translation: {
      ngoko: "kuku tangan",
      krama: "kuku tangan",
      "krama-inggil": "kuku tangan",
    },
  },
  {
    aliases: { id: ["paha"], en: ["thigh"], zh: ["大腿"] },
    translation: {
      ngoko: "pupu",
      krama: "pupu",
      "krama-inggil": "pupu",
    },
  },
  {
    aliases: { id: ["lutut"], en: ["knee"], zh: ["膝盖"] },
    translation: {
      ngoko: "dhengkul",
      krama: "dhengkul",
      "krama-inggil": "dhengkul",
    },
  },
  {
    aliases: { id: ["betis"], en: ["calf"], zh: ["小腿肚"] },
    translation: {
      ngoko: "betis",
      krama: "betis",
      "krama-inggil": "betis",
    },
  },
  {
    aliases: { id: ["pergelangan kaki"], en: ["ankle"], zh: ["脚踝"] },
    translation: {
      ngoko: "pergelangan sikil",
      krama: "pergelangan sikil",
      "krama-inggil": "pergelangan sikil",
    },
  },
  {
    aliases: { id: ["telapak kaki"], en: ["sole of foot"], zh: ["脚底"] },
    translation: {
      ngoko: "tlapakan sikil",
      krama: "tlapakan sikil",
      "krama-inggil": "tlapakan sikil",
    },
  },
  {
    aliases: { id: ["jari kaki"], en: ["toe"], zh: ["脚趾"] },
    translation: {
      ngoko: "driji sikil",
      krama: "driji sikil",
      "krama-inggil": "driji sikil",
    },
  },
  {
    aliases: { id: ["tumit"], en: ["heel"], zh: ["脚跟"] },
    translation: {
      ngoko: "tumit",
      krama: "tumit",
      "krama-inggil": "tumit",
    },
  },
  {
    aliases: { id: ["kulit"], en: ["skin"], zh: ["皮肤"] },
    translation: {
      ngoko: "kulit",
      krama: "kulit",
      "krama-inggil": "kulit",
    },
  },
  {
    aliases: { id: ["tulang"], en: ["bone"], zh: ["骨头"] },
    translation: {
      ngoko: "balung",
      krama: "balung",
      "krama-inggil": "balung",
    },
  },
  {
    aliases: { id: ["otot"], en: ["muscle"], zh: ["肌肉"] },
    translation: {
      ngoko: "otot",
      krama: "otot",
      "krama-inggil": "otot",
    },
  },
  {
    aliases: { id: ["otak"], en: ["brain"], zh: ["大脑"] },
    translation: {
      ngoko: "utek",
      krama: "utěg",
      "krama-inggil": "utěg",
    },
  },
  {
    aliases: { id: ["jantung"], en: ["heart"], zh: ["心脏"] },
    translation: {
      ngoko: "jantung",
      krama: "jantung",
      "krama-inggil": "jantung",
    },
  },
  {
    aliases: { id: ["paru-paru"], en: ["lungs"], zh: ["肺"] },
    translation: {
      ngoko: "paru-paru",
      krama: "paru-paru",
      "krama-inggil": "paru-paru",
    },
  },
  {
    aliases: { id: ["hati"], en: ["liver"], zh: ["肝脏"] },
    translation: {
      ngoko: "ati",
      krama: "manah",
      "krama-inggil": "manah",
    },
  },
  {
    aliases: { id: ["ginjal"], en: ["kidney"], zh: ["肾脏"] },
    translation: {
      ngoko: "ginjel",
      krama: "ginjel",
      "krama-inggil": "ginjel",
    },
  },
  {
    aliases: { id: ["lambung"], en: ["stomach"], zh: ["胃"] },
    translation: {
      ngoko: "weteng",
      krama: "padharan",
      "krama-inggil": "padharan",
    },
  },
  {
    aliases: { id: ["usus halus"], en: ["small intestine"], zh: ["小肠"] },
    translation: {
      ngoko: "usus alus",
      krama: "usus alit",
      "krama-inggil": "usus alit",
    },
  },
  {
    aliases: { id: ["usus besar"], en: ["large intestine"], zh: ["大肠"] },
    translation: {
      ngoko: "usus gedhe",
      krama: "usus ageng",
      "krama-inggil": "usus ageng",
    },
  },
  {
    aliases: { id: ["kandung kemih"], en: ["bladder"], zh: ["膀胱"] },
    translation: {
      ngoko: "kandung kemih",
      krama: "kandung kemih",
      "krama-inggil": "kandung kemih",
    },
  },
  {
    aliases: { id: ["pankreas"], en: ["pancreas"], zh: ["胰腺"] },
    translation: {
      ngoko: "pankreas",
      krama: "pankreas",
      "krama-inggil": "pankreas",
    },
  },
  {
    aliases: { id: ["limpa"], en: ["spleen"], zh: ["脾脏"] },
    translation: {
      ngoko: "limpa",
      krama: "limpa",
      "krama-inggil": "limpa",
    },
  },
  {
    aliases: { id: ["tengkorak"], en: ["skull"], zh: ["颅骨"] },
    translation: {
      ngoko: "tengkorak",
      krama: "tengkorak",
      "krama-inggil": "tengkorak",
    },
  },
  {
    aliases: { id: ["tulang rusuk"], en: ["rib"], zh: ["肋骨"] },
    translation: {
      ngoko: "iga",
      krama: "iga",
      "krama-inggil": "iga",
    },
  },
  {
    aliases: { id: ["diafragma"], en: ["diaphragm"], zh: ["膈肌"] },
    translation: {
      ngoko: "diafragma",
      krama: "diafragma",
      "krama-inggil": "diafragma",
    },
  },
  {
    aliases: { id: ["kerongkongan"], en: ["esophagus"], zh: ["食管"] },
    translation: {
      ngoko: "kerongkongan",
      krama: "kerongkongan",
      "krama-inggil": "kerongkongan",
    },
  },
  {
    aliases: { id: ["trakea"], en: ["trachea"], zh: ["气管"] },
    translation: {
      ngoko: "trakea",
      krama: "trakea",
      "krama-inggil": "trakea",
    },
  },
  {
    aliases: { id: ["laring"], en: ["larynx"], zh: ["喉"] },
    translation: {
      ngoko: "laring",
      krama: "laring",
      "krama-inggil": "laring",
    },
  },
  {
    aliases: { id: ["kelenjar tiroid"], en: ["thyroid gland"], zh: ["甲状腺"] },
    translation: {
      ngoko: "kelenjar tiroid",
      krama: "kelenjar tiroid",
      "krama-inggil": "kelenjar tiroid",
    },
  },
  {
    aliases: { id: ["pembuluh darah"], en: ["blood vessel"], zh: ["血管"] },
    translation: {
      ngoko: "pembuluh getih",
      krama: "pembuluh dara",
      "krama-inggil": "pembuluh dara",
    },
  },
  {
    aliases: { id: ["saraf"], en: ["nerve"], zh: ["神经"] },
    translation: {
      ngoko: "saraf",
      krama: "saraf",
      "krama-inggil": "saraf",
    },
  },
  {
    aliases: { id: ["sumsum tulang belakang"], en: ["spinal cord"], zh: ["脊髓"] },
    translation: {
      ngoko: "sumsum balung geger",
      krama: "sumsum balung geger",
      "krama-inggil": "sumsum balung geger",
    },
  },
  {
    aliases: { id: ["mata (organ)"], en: ["eye"], zh: ["眼睛"] },
    translation: {
      ngoko: "mripat",
      krama: "mripat",
      "krama-inggil": "mripat",
    },
  },
  {
    aliases: { id: ["telinga dalam"], en: ["inner ear"], zh: ["内耳"] },
    translation: {
      ngoko: "talinga njero",
      krama: "talinga njero",
      "krama-inggil": "talinga njero",
    },
  },
  {
    aliases: { id: ["pita suara"], en: ["vocal cords"], zh: ["声带"] },
    translation: {
      ngoko: "pita suara",
      krama: "pita suara",
      "krama-inggil": "pita suara",
    },
  },
  {
    aliases: { id: ["penis"], en: ["penis"], zh: ["阴茎"] },
    translation: {
      ngoko: "peli",
      krama: "planangan",
      "krama-inggil": "planangan",
    },
  },
  {
    aliases: { id: ["skrotum"], en: ["scrotum"], zh: ["阴囊"] },
    translation: {
      ngoko: "kantung testis",
      krama: "kantung testis",
      "krama-inggil": "kantung testis",
    },
  },
  {
    aliases: { id: ["testis"], en: ["testicle","testis"], zh: ["睾丸"] },
    translation: {
      ngoko: "testis",
      krama: "testis",
      "krama-inggil": "testis",
    },
  },
  {
    aliases: { id: ["epididimis"], en: ["epididymis"], zh: ["附睾"] },
    translation: {
      ngoko: "epididimis",
      krama: "epididimis",
      "krama-inggil": "epididimis",
    },
  },
  {
    aliases: { id: ["vas deferens"], en: ["vas deferens"], zh: ["输精管"] },
    translation: {
      ngoko: "vas deferens",
      krama: "vas deferens",
      "krama-inggil": "vas deferens",
    },
  },
  {
    aliases: { id: ["prostat"], en: ["prostate"], zh: ["前列腺"] },
    translation: {
      ngoko: "prostat",
      krama: "prostat",
      "krama-inggil": "prostat",
    },
  },
  {
    aliases: { id: ["vesikula seminalis"], en: ["seminal vesicle"], zh: ["精囊"] },
    translation: {
      ngoko: "vesikula seminalis",
      krama: "vesikula seminalis",
      "krama-inggil": "vesikula seminalis",
    },
  },
  {
    aliases: { id: ["uretra"], en: ["urethra"], zh: ["尿道"] },
    translation: {
      ngoko: "uretra",
      krama: "uretra",
      "krama-inggil": "uretra",
    },
  },
  {
    aliases: { id: ["vulva"], en: ["vulva"], zh: ["外阴"] },
    translation: {
      ngoko: "vulva",
      krama: "vulva",
      "krama-inggil": "vulva",
    },
  },
  {
    aliases: { id: ["labia"], en: ["labia"], zh: ["阴唇"] },
    translation: {
      ngoko: "labia",
      krama: "labia",
      "krama-inggil": "labia",
    },
  },
  {
    aliases: { id: ["klitoris"], en: ["clitoris"], zh: ["阴蒂"] },
    translation: {
      ngoko: "klitoris",
      krama: "klitoris",
      "krama-inggil": "klitoris",
    },
  },
  {
    aliases: { id: ["vagina"], en: ["vagina"], zh: ["阴道"] },
    translation: {
      ngoko: "turuk",
      krama: "wadonan",
      "krama-inggil": "wadonan",
    },
  },
  {
    aliases: { id: ["serviks (leher rahim)"], en: ["cervix"], zh: ["子宫颈"] },
    translation: {
      ngoko: "serviks",
      krama: "serviks",
      "krama-inggil": "serviks",
    },
  },
  {
    aliases: { id: ["rahim"], en: ["uterus"], zh: ["子宫"] },
    translation: {
      ngoko: "rahim",
      krama: "rahim",
      "krama-inggil": "rahim",
    },
  },
  {
    aliases: { id: ["ovarium"], en: ["ovary"], zh: ["卵巢"] },
    translation: {
      ngoko: "ovarium",
      krama: "ovarium",
      "krama-inggil": "ovarium",
    },
  },
  {
    aliases: { id: ["tuba falopi"], en: ["fallopian tube"], zh: ["输卵管"] },
    translation: {
      ngoko: "tuba falopi",
      krama: "tuba falopi",
      "krama-inggil": "tuba falopi",
    },
  },
  {
    aliases: { id: ["sel telur"], en: ["egg cell","ovum"], zh: ["卵细胞"] },
    translation: {
      ngoko: "sel telur",
      krama: "sel telur",
      "krama-inggil": "sel telur",
    },
  },
  {
    aliases: { id: ["sperma"], en: ["sperm"], zh: ["精子"] },
    translation: {
      ngoko: "sperma",
      krama: "sperma",
      "krama-inggil": "sperma",
    },
  },
  {
    aliases: { id: ["semen"], en: ["semen"], zh: ["精液"] },
    translation: {
      ngoko: "semen",
      krama: "semen",
      "krama-inggil": "semen",
    },
  },
  {
    aliases: { id: ["perineum"], en: ["perineum"], zh: ["会阴"] },
    translation: {
      ngoko: "perineum",
      krama: "perineum",
      "krama-inggil": "perineum",
    },
  },
  {
    aliases: { id: ["kelenjar Bartholin"], en: ["Bartholin gland"], zh: ["前庭大腺"] },
    translation: {
      ngoko: "kelenjar Bartholin",
      krama: "kelenjar Bartholin",
      "krama-inggil": "kelenjar Bartholin",
    },
  },
  {
    aliases: { id: ["kelenjar Cowper"], en: ["Cowper's gland"], zh: ["尿道球腺"] },
    translation: {
      ngoko: "kelenjar Cowper",
      krama: "kelenjar Cowper",
      "krama-inggil": "kelenjar Cowper",
    },
  },
  {
    aliases: { id: ["kelenjar susu"], en: ["mammary gland"], zh: ["乳腺"] },
    translation: {
      ngoko: "kelenjar susu",
      krama: "kelenjar susu",
      "krama-inggil": "kelenjar susu",
    },
  },
  {
    aliases: { id: ["plasenta"], en: ["placenta"], zh: ["胎盘"] },
    translation: {
      ngoko: "plasenta",
      krama: "plasenta",
      "krama-inggil": "plasenta",
    },
  },
  {
    aliases: { id: ["tali pusat"], en: ["umbilical cord"], zh: ["脐带"] },
    translation: {
      ngoko: "tali pusat",
      krama: "tali pusat",
      "krama-inggil": "tali pusat",
    },
  },


  {
    aliases: { id: ["pahit"], en: ["bitter"], zh: ["苦"] },
    translation: {
      ngoko: "pait",
      krama: "pait",
      "krama-inggil": "pait",
    },
  },
  {
    aliases: { id: ["pakai"], en: ["use", "wear"], zh: ["使用", "穿"] },
    translation: {
      ngoko: "nganggo",
      krama: "ngagem",
      "krama-inggil": "ngagem",
    },
  },
  {
    aliases: { id: ["pakaian"], en: ["clothing"], zh: ["衣服"] },
    translation: {
      ngoko: "klambi",
      krama: "rasukan",
      "krama-inggil": "ageman",
    },
  },
  {
    aliases: { id: ["paku"], en: ["nail"], zh: ["钉子"] },
    translation: {
      ngoko: "paku",
      krama: "paku",
      "krama-inggil": "paku",
    },
  },
  {
    aliases: { id: ["paman"], en: ["uncle"], zh: ["叔叔", "舅舅"] },
    translation: {
      ngoko: "paklik",
      krama: "paman",
      "krama-inggil": "paman",
    },
  },
  {
    aliases: { id: ["panas"], en: ["hot"], zh: ["热"] },
    translation: {
      ngoko: "panas",
      krama: "benter",
      "krama-inggil": "benter",
    },
  },
  {
    aliases: { id: ["pancing"], en: ["fishing rod"], zh: ["鱼竿"] },
    translation: {
      ngoko: "pancing",
      krama: "pancing",
      "krama-inggil": "pancing",
    },
  },
  {
    aliases: { id: ["pancuran"], en: ["shower", "fountain"], zh: ["喷泉", "淋浴"] },
    translation: {
      ngoko: "pancuran",
      krama: "pancuran",
      "krama-inggil": "pancuran",
    },
  },
  {
    aliases: { id: ["pandang"], en: ["look at"], zh: ["看"] },
    translation: {
      ngoko: "delok",
      krama: "ningali",
      "krama-inggil": "mirsani",
    },
  },
  {
    aliases: { id: ["panggil"], en: ["call"], zh: ["呼叫"] },
    translation: {
      ngoko: "ngundang",
      krama: "ngundang",
      "krama-inggil": "nimbali",
    },
  },
  {
    aliases: { id: ["panggilan"], en: ["call", "name"], zh: ["称呼"] },
    translation: {
      ngoko: "celukan",
      krama: "sesebatan",
      "krama-inggil": "sesebatan",
    },
  },
  {
    aliases: { id: ["panggung"], en: ["stage"], zh: ["舞台"] },
    translation: {
      ngoko: "panggung",
      krama: "panggung",
      "krama-inggil": "panggung",
    },
  },
  {
    aliases: { id: ["pangkalan"], en: ["base", "terminal"], zh: ["基地", "站点"] },
    translation: {
      ngoko: "pangkalan",
      krama: "pangkalan",
      "krama-inggil": "pangkalan",
    },
  },
  {
    aliases: { id: ["pangku"], en: ["hold on lap"], zh: ["抱在膝上"] },
    translation: {
      ngoko: "emong",
      krama: "pangku",
      "krama-inggil": "pangku",
    },
  },
  {
    aliases: { id: ["pantai"], en: ["beach"], zh: ["海滩"] },
    translation: {
      ngoko: "segara",
      krama: "pasir",
      "krama-inggil": "pasir",
    },
  },
  {
    aliases: { id: ["pantang"], en: ["taboo", "forbidden"], zh: ["禁忌"] },
    translation: {
      ngoko: "pamal",
      krama: "pamal",
      "krama-inggil": "pamal",
    },
  },
  {
    aliases: { id: ["papan"], en: ["board"], zh: ["木板"] },
    translation: {
      ngoko: "papan",
      krama: "papan",
      "krama-inggil": "papan",
    },
  },
  {
    aliases: { id: ["papar"], en: ["explain"], zh: ["说明"] },
    translation: {
      ngoko: "jlentreh",
      krama: "jlentreh",
      "krama-inggil": "jlentreh",
    },
  },
  {
    aliases: { id: ["parah"], en: ["severe"], zh: ["严重"] },
    translation: {
      ngoko: "abot",
      krama: "awrat",
      "krama-inggil": "awrat",
    },
  },
  {
    aliases: { id: ["parang"], en: ["machete"], zh: ["砍刀"] },
    translation: {
      ngoko: "parang",
      krama: "parang",
      "krama-inggil": "parang",
    },
  },
  {
    aliases: { id: ["parfum"], en: ["perfume"], zh: ["香水"] },
    translation: {
      ngoko: "wangi-wangian",
      krama: "arum-aruman",
      "krama-inggil": "arum-aruman",
    },
  },
  {
    aliases: { id: ["pasang"], en: ["install", "put on"], zh: ["安装", "穿戴"] },
    translation: {
      ngoko: "masang",
      krama: "masang",
      "krama-inggil": "masang",
    },
  },
  {
    aliases: { id: ["pasar"], en: ["market"], zh: ["市场"] },
    translation: {
      ngoko: "pasar",
      krama: "peken",
      "krama-inggil": "peken",
    },
  },
  {
    aliases: { id: ["pasir"], en: ["sand"], zh: ["沙子"] },
    translation: {
      ngoko: "wedhi",
      krama: "wedhi",
      "krama-inggil": "wedhi",
    },
  },
  {
    aliases: { id: ["pasti"], en: ["certain"], zh: ["肯定"] },
    translation: {
      ngoko: "mesthi",
      krama: "tamtu",
      "krama-inggil": "tamtu",
    },
  },
  {
    aliases: { id: ["pasukan"], en: ["troops"], zh: ["部队"] },
    translation: {
      ngoko: "prajurit",
      krama: "prajurit",
      "krama-inggil": "prajurit",
    },
  },
  {
    aliases: { id: ["patuh"], en: ["obedient"], zh: ["服从"] },
    translation: {
      ngoko: "manut",
      krama: "miturut",
      "krama-inggil": "miturut",
    },
  },
  {
    aliases: { id: ["patung"], en: ["statue"], zh: ["雕像"] },
    translation: {
      ngoko: "reca",
      krama: "reca",
      "krama-inggil": "reca",
    },
  },
  {
    aliases: { id: ["payung"], en: ["umbrella"], zh: ["雨伞"] },
    translation: {
      ngoko: "payung",
      krama: "payung",
      "krama-inggil": "payung",
    },
  },
  {
    aliases: { id: ["pecah"], en: ["broken"], zh: ["破碎"] },
    translation: {
      ngoko: "pecah",
      krama: "pecah",
      "krama-inggil": "pecah",
    },
  },
  {
    aliases: { id: ["peci"], en: ["cap"], zh: ["帽子"] },
    translation: {
      ngoko: "kopyah",
      krama: "kopyah",
      "krama-inggil": "kopyah",
    },
  },
  {
    aliases: { id: ["pedas"], en: ["spicy"], zh: ["辣"] },
    translation: {
      ngoko: "pedhes",
      krama: "pedhes",
      "krama-inggil": "pedhes",
    },
  },
  {
    aliases: { id: ["peduli"], en: ["care"], zh: ["关心"] },
    translation: {
      ngoko: "nggatekake",
      krama: "nggatosaken",
      "krama-inggil": "nggatosaken",
    },
  },
  {
    aliases: { id: ["pegang"], en: ["hold"], zh: ["拿", "握"] },
    translation: {
      ngoko: "nyekel",
      krama: "nyepeng",
      "krama-inggil": "ngasta",
    },
  },
  {
    aliases: { id: ["pekarangan"], en: ["yard"], zh: ["院子"] },
    translation: {
      ngoko: "pekarangan",
      krama: "pekarangan",
      "krama-inggil": "pekarangan",
    },
  },
  {
    aliases: { id: ["pekerja"], en: ["worker"], zh: ["工人"] },
    translation: {
      ngoko: "buruh",
      krama: "pegawe",
      "krama-inggil": "pegawe",
    },
  },
  {
    aliases: { id: ["pekerjaan"], en: ["work", "job"], zh: ["工作"] },
    translation: {
      ngoko: "gawean",
      krama: "pedamelan",
      "krama-inggil": "pedamelan",
    },
  },
  {
    aliases: { id: ["pelabuhan"], en: ["port"], zh: ["港口"] },
    translation: {
      ngoko: "plabuhan",
      krama: "plabuhan",
      "krama-inggil": "plabuhan",
    },
  },
  {
    aliases: { id: ["pelan"], en: ["slow"], zh: ["慢"] },
    translation: {
      ngoko: "alon",
      krama: "alon",
      "krama-inggil": "alon",
    },
  },
  {
    aliases: { id: ["pelanggan"], en: ["customer"], zh: ["顾客"] },
    translation: {
      ngoko: "langganan",
      krama: "pelanggan",
      "krama-inggil": "pelanggan",
    },
  },
  {
    aliases: { id: ["pelangi"], en: ["rainbow"], zh: ["彩虹"] },
    translation: {
      ngoko: "kluwung",
      krama: "kluwung",
      "krama-inggil": "kluwung",
    },
  },
  {
    aliases: { id: ["pelihara"], en: ["care for"], zh: ["照料"] },
    translation: {
      ngoko: "ngopeni",
      krama: "ngopeni",
      "krama-inggil": "ngopeni",
    },
  },
  {
    aliases: { id: ["pelit"], en: ["stingy"], zh: ["小气"] },
    translation: {
      ngoko: "cethil",
      krama: "cethil",
      "krama-inggil": "cethil",
    },
  },
  {
    aliases: { id: ["peluang"], en: ["opportunity"], zh: ["机会"] },
    translation: {
      ngoko: "kalodhangan",
      krama: "kalodhangan",
      "krama-inggil": "kalodhangan",
    },
  },
  {
    aliases: { id: ["peluk"], en: ["hug"], zh: ["拥抱"] },
    translation: {
      ngoko: "rangkul",
      krama: "rangkul",
      "krama-inggil": "rangkul",
    },
  },
  {
    aliases: { id: ["peluru"], en: ["bullet"], zh: ["子弹"] },
    translation: {
      ngoko: "pelor",
      krama: "pelor",
      "krama-inggil": "pelor",
    },
  },
  {
    aliases: { id: ["pemadam"], en: ["extinguisher"], zh: ["灭火器"] },
    translation: {
      ngoko: "pemadam",
      krama: "pemadam",
      "krama-inggil": "pemadam",
    },
  },
  {
    aliases: { id: ["pembantu"], en: ["helper"], zh: ["帮手"] },
    translation: {
      ngoko: "rewang",
      krama: "rewang",
      "krama-inggil": "rewang",
    },
  },
  {
    aliases: { id: ["pembeli"], en: ["buyer"], zh: ["买家"] },
    translation: {
      ngoko: "sing tuku",
      krama: "ingkang tumbas",
      "krama-inggil": "ingkang tumbas",
    },
  },
  {
    aliases: { id: ["pembuka"], en: ["opener", "opening"], zh: ["开口", "开启器"] },
    translation: {
      ngoko: "bukaan",
      krama: "pambuka",
      "krama-inggil": "pambuka",
    },
  },
  {
    aliases: { id: ["pemuda"], en: ["young man"], zh: ["青年男子"] },
    translation: {
      ngoko: "nom-noman",
      krama: "nem-neman",
      "krama-inggil": "nem-neman",
    },
  },
  {
    aliases: { id: ["pemudi"], en: ["young woman"], zh: ["青年女子"] },
    translation: {
      ngoko: "nom-noman wadon",
      krama: "nem-neman estri",
      "krama-inggil": "nem-neman estri",
    },
  },
  {
    aliases: { id: ["penakut"], en: ["cowardly"], zh: ["胆小"] },
    translation: {
      ngoko: "wedi-weden",
      krama: "ajrih",
      "krama-inggil": "ajrih",
    },
  },
  {
    aliases: { id: ["penari"], en: ["dancer"], zh: ["舞者"] },
    translation: {
      ngoko: "penari",
      krama: "penari",
      "krama-inggil": "penari",
    },
  },
  {
    aliases: { id: ["pendek"], en: ["short"], zh: ["矮", "短"] },
    translation: {
      ngoko: "cendhek",
      krama: "andhap",
      "krama-inggil": "andhap",
    },
  },
  {
    aliases: { id: ["pendidikan"], en: ["education"], zh: ["教育"] },
    translation: {
      ngoko: "pendhidhikan",
      krama: "pendhidhikan",
      "krama-inggil": "pendhidhikan",
    },
  },
  {
    aliases: { id: ["penduduk"], en: ["resident"], zh: ["居民"] },
    translation: {
      ngoko: "warga",
      krama: "warga",
      "krama-inggil": "warga",
    },
  },
  {
    aliases: { id: ["penerbangan"], en: ["flight"], zh: ["航班", "飞行"] },
    translation: {
      ngoko: "penerbangan",
      krama: "penerbangan",
      "krama-inggil": "penerbangan",
    },
  },
  {
    aliases: { id: ["pengalaman"], en: ["experience"], zh: ["经验"] },
    translation: {
      ngoko: "pengalaman",
      krama: "pengalaman",
      "krama-inggil": "pengalaman",
    },
  },
  {
    aliases: { id: ["pengantin"], en: ["bride", "groom"], zh: ["新郎新娘"] },
    translation: {
      ngoko: "manten",
      krama: "penganten",
      "krama-inggil": "penganten",
    },
  },
  {
    aliases: { id: ["penggaris"], en: ["ruler"], zh: ["尺子"] },
    translation: {
      ngoko: "mistar",
      krama: "mistar",
      "krama-inggil": "mistar",
    },
  },
  {
    aliases: { id: ["penghasilan"], en: ["income"], zh: ["收入"] },
    translation: {
      ngoko: "asil",
      krama: "pangasilan",
      "krama-inggil": "pangasilan",
    },
  },
  {
    aliases: { id: ["penginapan"], en: ["lodging"], zh: ["住宿"] },
    translation: {
      ngoko: "panggonan nginep",
      krama: "papan panginepan",
      "krama-inggil": "papan panginepan",
    },
  },
  {
    aliases: { id: ["pengunjung"], en: ["visitor"], zh: ["访客"] },
    translation: {
      ngoko: "tamu",
      krama: "tamu",
      "krama-inggil": "tamu",
    },
  },
  {
    aliases: { id: ["penjahit"], en: ["tailor"], zh: ["裁缝"] },
    translation: {
      ngoko: "tukang jahit",
      krama: "tukang jahit",
      "krama-inggil": "tukang jahit",
    },
  },
  {
    aliases: { id: ["penjara"], en: ["prison"], zh: ["监狱"] },
    translation: {
      ngoko: "pakunjaran",
      krama: "pakunjaran",
      "krama-inggil": "pakunjaran",
    },
  },
  {
    aliases: { id: ["penjual"], en: ["seller"], zh: ["卖家"] },
    translation: {
      ngoko: "bakul",
      krama: "bakul",
      "krama-inggil": "bakul",
    },
  },
  {
    aliases: { id: ["penyakit"], en: ["illness"], zh: ["疾病"] },
    translation: {
      ngoko: "lara",
      krama: "gerah",
      "krama-inggil": "gerah",
    },
  },
  {
    aliases: { id: ["penyapu"], en: ["broom"], zh: ["扫帚"] },
    translation: {
      ngoko: "sapu",
      krama: "sapu",
      "krama-inggil": "sapu",
    },
  },
  {
    aliases: { id: ["penyebab"], en: ["cause"], zh: ["原因"] },
    translation: {
      ngoko: "sebab",
      krama: "sebab",
      "krama-inggil": "sebab",
    },
  },
  {
    aliases: { id: ["penyeberangan"], en: ["crossing"], zh: ["人行横道", "渡口"] },
    translation: {
      ngoko: "panyebrangan",
      krama: "panyebrangan",
      "krama-inggil": "panyebrangan",
    },
  },
  {
    aliases: { id: ["penyiram"], en: ["watering can"], zh: ["洒水壶"] },
    translation: {
      ngoko: "gembor",
      krama: "gembor",
      "krama-inggil": "gembor",
    },
  },
  {
    aliases: { id: ["pepaya"], en: ["papaya"], zh: ["木瓜"] },
    translation: {
      ngoko: "kates",
      krama: "kates",
      "krama-inggil": "kates",
    },
  },
  {
    aliases: { id: ["perahu"], en: ["boat"], zh: ["船"] },
    translation: {
      ngoko: "prahu",
      krama: "prahu",
      "krama-inggil": "prahu",
    },
  },
  {
    aliases: { id: ["perak"], en: ["silver"], zh: ["银"] },
    translation: {
      ngoko: "salaka",
      krama: "salaka",
      "krama-inggil": "salaka",
    },
  },
  {
    aliases: { id: ["perang"], en: ["war"], zh: ["战争"] },
    translation: {
      ngoko: "perang",
      krama: "perang",
      "krama-inggil": "perang",
    },
  },
  {
    aliases: { id: ["perawat"], en: ["nurse"], zh: ["护士"] },
    translation: {
      ngoko: "juru rawat",
      krama: "juru rawat",
      "krama-inggil": "juru rawat",
    },
  },
  {
    aliases: { id: ["perban"], en: ["bandage"], zh: ["绷带"] },
    translation: {
      ngoko: "perban",
      krama: "perban",
      "krama-inggil": "perban",
    },
  },
  {
    aliases: { id: ["pergi"], en: ["go"], zh: ["去"] },
    translation: {
      ngoko: "lunga",
      krama: "kesah",
      "krama-inggil": "tindak",
    },
  },
  {
    aliases: { id: ["periksa"], en: ["check", "examine"], zh: ["检查"] },
    translation: {
      ngoko: "mriksa",
      krama: "mriksa",
      "krama-inggil": "mriksa",
    },
  },
  {
    aliases: { id: ["perjalanan"], en: ["journey"], zh: ["旅程"] },
    translation: {
      ngoko: "lelaku",
      krama: "lelampahan",
      "krama-inggil": "lelampahan",
    },
  },
  {
    aliases: { id: ["perjanjian"], en: ["agreement"], zh: ["协议"] },
    translation: {
      ngoko: "janjian",
      krama: "prasetyan",
      "krama-inggil": "prasetyan",
    },
  },
  {
    aliases: { id: ["perlu"], en: ["necessary"], zh: ["必要"] },
    translation: {
      ngoko: "perlu",
      krama: "prelu",
      "krama-inggil": "prelu",
    },
  },
  {
    aliases: { id: ["permata"], en: ["gem"], zh: ["宝石"] },
    translation: {
      ngoko: "inten",
      krama: "sesotya",
      "krama-inggil": "sesotya",
    },
  },
  {
    aliases: { id: ["permen"], en: ["candy"], zh: ["糖果"] },
    translation: {
      ngoko: "gulali",
      krama: "permen",
      "krama-inggil": "permen",
    },
  },
  {
    aliases: { id: ["pernah"], en: ["ever"], zh: ["曾经"] },
    translation: {
      ngoko: "tau",
      krama: "naté",
      "krama-inggil": "naté",
    },
  },
  {
    aliases: { id: ["pernikahan"], en: ["marriage"], zh: ["婚姻"] },
    translation: {
      ngoko: "mantenan",
      krama: "pawiwahan",
      "krama-inggil": "pawiwahan",
    },
  },
  {
    aliases: { id: ["perut"], en: ["stomach"], zh: ["腹部"] },
    translation: {
      ngoko: "weteng",
      krama: "padharan",
      "krama-inggil": "padharan",
    },
  },
  {
    aliases: { id: ["pesan"], en: ["order", "message"], zh: ["订单", "信息"] },
    translation: {
      ngoko: "pesen",
      krama: "pesen",
      "krama-inggil": "pesen",
    },
  },
  {
    aliases: { id: ["pesawat"], en: ["airplane"], zh: ["飞机"] },
    translation: {
      ngoko: "montor mabur",
      krama: "montor mabur",
      "krama-inggil": "montor mabur",
    },
  },
  {
    aliases: { id: ["peserta"], en: ["participant"], zh: ["参与者"] },
    translation: {
      ngoko: "peserta",
      krama: "peserta",
      "krama-inggil": "peserta",
    },
  },
  {
    aliases: { id: ["pesing"], en: ["pungent smell"], zh: ["刺鼻气味"] },
    translation: {
      ngoko: "pesing",
      krama: "pesing",
      "krama-inggil": "pesing",
    },
  },
  {
    aliases: { id: ["peta"], en: ["map"], zh: ["地图"] },
    translation: {
      ngoko: "peta",
      krama: "peta",
      "krama-inggil": "peta",
    },
  },
  {
    aliases: { id: ["petani"], en: ["farmer"], zh: ["农民"] },
    translation: {
      ngoko: "tani",
      krama: "petani",
      "krama-inggil": "petani",
    },
  },
  {
    aliases: { id: ["peti"], en: ["chest", "box"], zh: ["箱子"] },
    translation: {
      ngoko: "peti",
      krama: "peti",
      "krama-inggil": "peti",
    },
  },
  {
    aliases: { id: ["petunjuk"], en: ["instruction"], zh: ["指示"] },
    translation: {
      ngoko: "pituduh",
      krama: "pitedah",
      "krama-inggil": "pitedah",
    },
  },
  {
    aliases: { id: ["piagam"], en: ["certificate"], zh: ["证书"] },
    translation: {
      ngoko: "piagam",
      krama: "piagam",
      "krama-inggil": "piagam",
    },
  },
  {
    aliases: { id: ["pikir"], en: ["think"], zh: ["思考"] },
    translation: {
      ngoko: "mikir",
      krama: "manah",
      "krama-inggil": "nggalih",
    },
  },
  {
    aliases: { id: ["pikiran"], en: ["thought"], zh: ["思想"] },
    translation: {
      ngoko: "pikiran",
      krama: "penggalih",
      "krama-inggil": "penggalih",
    },
  },
  {
    aliases: { id: ["pikul"], en: ["carry"], zh: ["扛"] },
    translation: {
      ngoko: "nggotong",
      krama: "nggotong",
      "krama-inggil": "nggotong",
    },
  },
  {
    aliases: { id: ["pilih"], en: ["choose"], zh: ["选择"] },
    translation: {
      ngoko: "milih",
      krama: "milih",
      "krama-inggil": "milih",
    },
  },
  {
    aliases: { id: ["pimpinan"], en: ["leader"], zh: ["领导"] },
    translation: {
      ngoko: "pimpinan",
      krama: "pimpinan",
      "krama-inggil": "pimpinan",
    },
  },
  {
    aliases: { id: ["pintu"], en: ["door"], zh: ["门"] },
    translation: {
      ngoko: "lawang",
      krama: "konten",
      "krama-inggil": "konten",
    },
  },
  {
    aliases: { id: ["pisah"], en: ["separate"], zh: ["分开"] },
    translation: {
      ngoko: "pisah",
      krama: "pisah",
      "krama-inggil": "pisah",
    },
  },
  {
    aliases: { id: ["pisang"], en: ["banana"], zh: ["香蕉"] },
    translation: {
      ngoko: "gedhang",
      krama: "pisang",
      "krama-inggil": "pisang",
    },
  },
  {
    aliases: { id: ["pistol"], en: ["pistol"], zh: ["手枪"] },
    translation: {
      ngoko: "pistol",
      krama: "pistol",
      "krama-inggil": "pistol",
    },
  },
  {
    aliases: { id: ["pohon"], en: ["tree"], zh: ["树"] },
    translation: {
      ngoko: "wit",
      krama: "wit",
      "krama-inggil": "wit",
    },
  },
  {
    aliases: { id: ["pokok"], en: ["main", "essential"], zh: ["主要"] },
    translation: {
      ngoko: "pokok",
      krama: "pokok",
      "krama-inggil": "pokok",
    },
  },
  {
    aliases: { id: ["polisi"], en: ["police"], zh: ["警察"] },
    translation: {
      ngoko: "pulisi",
      krama: "pulisi",
      "krama-inggil": "pulisi",
    },
  },
  {
    aliases: { id: ["polisi tidur"], en: ["speed bump"], zh: ["减速带"] },
    translation: {
      ngoko: "polisi turu",
      krama: "polisi turu",
      "krama-inggil": "polisi turu",
    },
  },
  {
    aliases: { id: ["pondok"], en: ["hut"], zh: ["小屋"] },
    translation: {
      ngoko: "gubug",
      krama: "pondhok",
      "krama-inggil": "pondhok",
    },
  },
  {
    aliases: { id: ["potong"], en: ["cut"], zh: ["切"] },
    translation: {
      ngoko: "motong",
      krama: "motong",
      "krama-inggil": "motong",
    },
  },
  {
    aliases: { id: ["potongan"], en: ["piece", "cut"], zh: ["切片", "部分"] },
    translation: {
      ngoko: "potongan",
      krama: "potongan",
      "krama-inggil": "potongan",
    },
  },
  {
    aliases: { id: ["prajurit"], en: ["soldier"], zh: ["士兵"] },
    translation: {
      ngoko: "prajurit",
      krama: "prajurit",
      "krama-inggil": "prajurit",
    },
  },
  {
    aliases: { id: ["praktik"], en: ["practice"], zh: ["实践"] },
    translation: {
      ngoko: "praktik",
      krama: "praktik",
      "krama-inggil": "praktik",
    },
  },
  {
    aliases: { id: ["prestasi"], en: ["achievement"], zh: ["成就"] },
    translation: {
      ngoko: "prestasi",
      krama: "prestasi",
      "krama-inggil": "prestasi",
    },
  },
  {
    aliases: { id: ["produk"], en: ["product"], zh: ["产品"] },
    translation: {
      ngoko: "produk",
      krama: "produk",
      "krama-inggil": "produk",
    },
  },
  {
    aliases: { id: ["produksi"], en: ["production"], zh: ["生产"] },
    translation: {
      ngoko: "produksi",
      krama: "produksi",
      "krama-inggil": "produksi",
    },
  },
  {
    aliases: { id: ["program"], en: ["program"], zh: ["项目", "程序"] },
    translation: {
      ngoko: "program",
      krama: "program",
      "krama-inggil": "program",
    },
  },
  {
    aliases: { id: ["proyek"], en: ["project"], zh: ["项目"] },
    translation: {
      ngoko: "proyek",
      krama: "proyek",
      "krama-inggil": "proyek",
    },
  },
  {
    aliases: { id: ["pulang"], en: ["go home"], zh: ["回家"] },
    translation: {
      ngoko: "mulih",
      krama: "wangsul",
      "krama-inggil": "kondur",
    },
  },
  {
    aliases: { id: ["pulau"], en: ["island"], zh: ["岛"] },
    translation: {
      ngoko: "pulo",
      krama: "pulo",
      "krama-inggil": "pulo",
    },
  },
  {
    aliases: { id: ["pulpen"], en: ["pen"], zh: ["圆珠笔"] },
    translation: {
      ngoko: "bolpen",
      krama: "bolpen",
      "krama-inggil": "bolpen",
    },
  },
  {
    aliases: { id: ["puncak"], en: ["peak"], zh: ["顶峰"] },
    translation: {
      ngoko: "pucuk",
      krama: "puncak",
      "krama-inggil": "puncak",
    },
  },
  {
    aliases: { id: ["punggung"], en: ["back"], zh: ["背部"] },
    translation: {
      ngoko: "geger",
      krama: "pengkeran",
      "krama-inggil": "pengkeran",
    },
  },
  {
    aliases: { id: ["pupuk"], en: ["fertilizer"], zh: ["肥料"] },
    translation: {
      ngoko: "rabuk",
      krama: "rabuk",
      "krama-inggil": "rabuk",
    },
  },
  {
    aliases: { id: ["pura-pura"], en: ["pretend"], zh: ["假装"] },
    translation: {
      ngoko: "ethok-ethok",
      krama: "ethok-ethok",
      "krama-inggil": "ethok-ethok",
    },
  },
  {
    aliases: { id: ["putih"], en: ["white"], zh: ["白色"] },
    translation: {
      ngoko: "putih",
      krama: "pethak",
      "krama-inggil": "pethak",
    },
  },
  {
    aliases: { id: ["quorum"], en: ["quorum"], zh: ["法定人数"] },
    translation: {
      ngoko: "kuorum",
      krama: "kuorum",
      "krama-inggil": "kuorum",
    },
  },
  {
    aliases: { id: ["Quran"], en: ["Quran"], zh: ["古兰经"] },
    translation: {
      ngoko: "Al-Qur'an",
      krama: "Al-Qur'an",
      "krama-inggil": "Al-Qur'an",
    },
  },
  {
    aliases: { id: ["rabu"], en: ["Wednesday"], zh: ["星期三"] },
    translation: {
      ngoko: "Rebo",
      krama: "Rebo",
      "krama-inggil": "Rebo",
    },
  },
  {
    aliases: { id: ["rabun"], en: ["short-sighted"], zh: ["近视"] },
    translation: {
      ngoko: "rabun",
      krama: "rabun",
      "krama-inggil": "rabun",
    },
  },
  {
    aliases: { id: ["ragu"], en: ["doubtful"], zh: ["犹豫"] },
    translation: {
      ngoko: "mangu-mangu",
      krama: "mangu-mangu",
      "krama-inggil": "mangu-mangu",
    },
  },
  {
    aliases: { id: ["rahasia"], en: ["secret"], zh: ["秘密"] },
    translation: {
      ngoko: "rahasia",
      krama: "rahasia",
      "krama-inggil": "rahasia",
    },
  },
  {
    aliases: { id: ["rajin"], en: ["diligent"], zh: ["勤奋"] },
    translation: {
      ngoko: "sregep",
      krama: "rajin",
      "krama-inggil": "rajin",
    },
  },
  {
    aliases: { id: ["rak"], en: ["shelf"], zh: ["架子"] },
    translation: {
      ngoko: "rak",
      krama: "rak",
      "krama-inggil": "rak",
    },
  },
  {
    aliases: { id: ["rakit"], en: ["raft"], zh: ["木筏"] },
    translation: {
      ngoko: "rakit",
      krama: "rakit",
      "krama-inggil": "rakit",
    },
  },
  {
    aliases: { id: ["ramai"], en: ["crowded", "lively"], zh: ["热闹"] },
    translation: {
      ngoko: "rame",
      krama: "rame",
      "krama-inggil": "rame",
    },
  },
  {
    aliases: { id: ["rambut"], en: ["hair"], zh: ["头发"] },
    translation: {
      ngoko: "rambut",
      krama: "rikma",
      "krama-inggil": "rikma",
    },
  },
  {
    aliases: { id: ["rambutan"], en: ["rambutan"], zh: ["红毛丹"] },
    translation: {
      ngoko: "rambutan",
      krama: "rambutan",
      "krama-inggil": "rambutan",
    },
  },
  {
    aliases: { id: ["rasa"], en: ["taste", "feeling"], zh: ["味道", "感觉"] },
    translation: {
      ngoko: "rasa",
      krama: "raos",
      "krama-inggil": "raos",
    },
  },
  {
    aliases: { id: ["rata"], en: ["flat", "even"], zh: ["平坦"] },
    translation: {
      ngoko: "rata",
      krama: "rata",
      "krama-inggil": "rata",
    },
  },
  {
    aliases: { id: ["rawat"], en: ["care for"], zh: ["照顾"] },
    translation: {
      ngoko: "ngopeni",
      krama: "ngopeni",
      "krama-inggil": "ngopeni",
    },
  },
  {
    aliases: { id: ["raya"], en: ["great", "large"], zh: ["盛大"] },
    translation: {
      ngoko: "gedhe",
      krama: "ageng",
      "krama-inggil": "ageng",
    },
  },
  {
    aliases: { id: ["rebah"], en: ["fall down"], zh: ["倒下"] },
    translation: {
      ngoko: "ambruk",
      krama: "rebah",
      "krama-inggil": "rebah",
    },
  },
  {
    aliases: { id: ["rebus"], en: ["boil"], zh: ["煮"] },
    translation: {
      ngoko: "nggodhok",
      krama: "nggodhok",
      "krama-inggil": "nggodhok",
    },
  },
  {
    aliases: { id: ["rebusan"], en: ["boiled food"], zh: ["水煮食物"] },
    translation: {
      ngoko: "godhogan",
      krama: "godhogan",
      "krama-inggil": "godhogan",
    },
  },
  {
    aliases: { id: ["reda"], en: ["subside"], zh: ["减弱"] },
    translation: {
      ngoko: "suda",
      krama: "suda",
      "krama-inggil": "suda",
    },
  },
  {
    aliases: { id: ["redup"], en: ["dim"], zh: ["昏暗"] },
    translation: {
      ngoko: "remeng-remeng",
      krama: "remeng-remeng",
      "krama-inggil": "remeng-remeng",
    },
  },
  {
    aliases: { id: ["regu"], en: ["team", "squad"], zh: ["小组"] },
    translation: {
      ngoko: "regu",
      krama: "regu",
      "krama-inggil": "regu",
    },
  },
  {
    aliases: { id: ["rekening"], en: ["account"], zh: ["账户"] },
    translation: {
      ngoko: "rekening",
      krama: "rekening",
      "krama-inggil": "rekening",
    },
  },
  {
    aliases: { id: ["remaja"], en: ["teenager"], zh: ["青少年"] },
    translation: {
      ngoko: "nom-noman",
      krama: "nem-neman",
      "krama-inggil": "nem-neman",
    },
  },
  {
    aliases: { id: ["rembulan"], en: ["moon"], zh: ["月亮"] },
    translation: {
      ngoko: "rembulan",
      krama: "wulan",
      "krama-inggil": "wulan",
    },
  },
  {
    aliases: { id: ["rempah"], en: ["spice"], zh: ["香料"] },
    translation: {
      ngoko: "bumbu",
      krama: "bumbu",
      "krama-inggil": "bumbu",
    },
  },
  {
    aliases: { id: ["renang"], en: ["swim"], zh: ["游泳"] },
    translation: {
      ngoko: "nglangi",
      krama: "nglangi",
      "krama-inggil": "nglangi",
    },
  },
  {
    aliases: { id: ["rencana"], en: ["plan"], zh: ["计划"] },
    translation: {
      ngoko: "rencana",
      krama: "rencana",
      "krama-inggil": "rencana",
    },
  },
  {
    aliases: { id: ["rendah"], en: ["low"], zh: ["低"] },
    translation: {
      ngoko: "endhek",
      krama: "andhap",
      "krama-inggil": "andhap",
    },
  },
  {
    aliases: { id: ["rendang"], en: ["rendang"], zh: ["仁当咖喱"] },
    translation: {
      ngoko: "rendang",
      krama: "rendang",
      "krama-inggil": "rendang",
    },
  },
  {
    aliases: { id: ["renggang"], en: ["loose", "gap"], zh: ["松散"] },
    translation: {
      ngoko: "renggang",
      krama: "renggang",
      "krama-inggil": "renggang",
    },
  },
  {
    aliases: { id: ["renggut"], en: ["snatch"], zh: ["抢夺"] },
    translation: {
      ngoko: "ngrebut",
      krama: "ngrebut",
      "krama-inggil": "ngrebut",
    },
  },
  {
    aliases: { id: ["repot"], en: ["busy", "troublesome"], zh: ["麻烦"] },
    translation: {
      ngoko: "rekasa",
      krama: "rekasa",
      "krama-inggil": "rekasa",
    },
  },
  {
    aliases: { id: ["resep"], en: ["recipe", "prescription"], zh: ["食谱", "处方"] },
    translation: {
      ngoko: "resep",
      krama: "resep",
      "krama-inggil": "resep",
    },
  },
  {
    aliases: { id: ["resmi"], en: ["official"], zh: ["正式"] },
    translation: {
      ngoko: "resmi",
      krama: "resmi",
      "krama-inggil": "resmi",
    },
  },
  {
    aliases: { id: ["restoran"], en: ["restaurant"], zh: ["餐厅"] },
    translation: {
      ngoko: "restoran",
      krama: "restoran",
      "krama-inggil": "restoran",
    },
  },
  {
    aliases: { id: ["retak"], en: ["cracked"], zh: ["裂开"] },
    translation: {
      ngoko: "retak",
      krama: "retak",
      "krama-inggil": "retak",
    },
  },
  {
    aliases: { id: ["reuni"], en: ["reunion"], zh: ["团聚"] },
    translation: {
      ngoko: "reuni",
      krama: "reuni",
      "krama-inggil": "reuni",
    },
  },
  {
    aliases: { id: ["rewel"], en: ["fussy"], zh: ["爱闹"] },
    translation: {
      ngoko: "rewel",
      krama: "rewel",
      "krama-inggil": "rewel",
    },
  },
  {
    aliases: { id: ["rezeki"], en: ["sustenance", "livelihood"], zh: ["生计", "福分"] },
    translation: {
      ngoko: "rejeki",
      krama: "rejeki",
      "krama-inggil": "rejeki",
    },
  },
  {
    aliases: { id: ["riang"], en: ["cheerful"], zh: ["愉快"] },
    translation: {
      ngoko: "bungah",
      krama: "bingah",
      "krama-inggil": "bingah",
    },
  },
  {
    aliases: { id: ["ribut"], en: ["noisy"], zh: ["吵闹"] },
    translation: {
      ngoko: "rame",
      krama: "ribut",
      "krama-inggil": "ribut",
    },
  },
  {
    aliases: { id: ["rindu"], en: ["longing"], zh: ["思念"] },
    translation: {
      ngoko: "kangen",
      krama: "kangen",
      "krama-inggil": "kangen",
    },
  },
  {
    aliases: { id: ["ringan"], en: ["lightweight"], zh: ["轻"] },
    translation: {
      ngoko: "entheng",
      krama: "enteng",
      "krama-inggil": "enteng",
    },
  },
  {
    aliases: { id: ["ringkas"], en: ["concise"], zh: ["简洁"] },
    translation: {
      ngoko: "cekak",
      krama: "ringkes",
      "krama-inggil": "ringkes",
    },
  },
  {
    aliases: { id: ["ringsek"], en: ["crushed"], zh: ["压碎"] },
    translation: {
      ngoko: "remuk",
      krama: "remuk",
      "krama-inggil": "remuk",
    },
  },
  {
    aliases: { id: ["risau"], en: ["worried"], zh: ["担心"] },
    translation: {
      ngoko: "kuwatir",
      krama: "kuwatir",
      "krama-inggil": "kuwatir",
    },
  },
  {
    aliases: { id: ["risiko"], en: ["risk"], zh: ["风险"] },
    translation: {
      ngoko: "risiko",
      krama: "risiko",
      "krama-inggil": "risiko",
    },
  },
  {
    aliases: { id: ["roda"], en: ["wheel"], zh: ["车轮"] },
    translation: {
      ngoko: "rodha",
      krama: "rodha",
      "krama-inggil": "rodha",
    },
  },
  {
    aliases: { id: ["rohani"], en: ["spiritual"], zh: ["精神", "灵性"] },
    translation: {
      ngoko: "rohani",
      krama: "rohani",
      "krama-inggil": "rohani",
    },
  },
  {
    aliases: { id: ["rok"], en: ["skirt"], zh: ["裙子"] },
    translation: {
      ngoko: "rok",
      krama: "rok",
      "krama-inggil": "rok",
    },
  },
  {
    aliases: { id: ["roket"], en: ["rocket"], zh: ["火箭"] },
    translation: {
      ngoko: "roket",
      krama: "roket",
      "krama-inggil": "roket",
    },
  },
  {
    aliases: { id: ["rokok"], en: ["cigarette"], zh: ["香烟"] },
    translation: {
      ngoko: "udud",
      krama: "rokok",
      "krama-inggil": "rokok",
    },
  },
  {
    aliases: { id: ["rombongan"], en: ["group"], zh: ["一群"] },
    translation: {
      ngoko: "rombongan",
      krama: "rombongan",
      "krama-inggil": "rombongan",
    },
  },
  {
    aliases: { id: ["rumah"], en: ["house"], zh: ["房子"] },
    translation: {
      ngoko: "omah",
      krama: "griya",
      "krama-inggil": "dalem",
    },
  },
  {
    aliases: { id: ["rumah sakit"], en: ["hospital"], zh: ["医院"] },
    translation: {
      ngoko: "omah sakit",
      krama: "griya sakit",
      "krama-inggil": "griya sakit",
    },
  },
  {
    aliases: { id: ["rumput"], en: ["grass"], zh: ["草"] },
    translation: {
      ngoko: "suket",
      krama: "suket",
      "krama-inggil": "suket",
    },
  },
  {
    aliases: { id: ["runcing"], en: ["sharp-pointed"], zh: ["尖"] },
    translation: {
      ngoko: "lancip",
      krama: "lancip",
      "krama-inggil": "lancip",
    },
  },
  {
    aliases: { id: ["rusak"], en: ["damaged"], zh: ["损坏"] },
    translation: {
      ngoko: "rusak",
      krama: "risak",
      "krama-inggil": "risak",
    },
  },
  {
    aliases: { id: ["sabar"], en: ["patient"], zh: ["耐心"] },
    translation: {
      ngoko: "sabar",
      krama: "sabar",
      "krama-inggil": "sabar",
    },
  },
  {
    aliases: { id: ["sabun"], en: ["soap"], zh: ["肥皂"] },
    translation: {
      ngoko: "sabun",
      krama: "sabun",
      "krama-inggil": "sabun",
    },
  },
  {
    aliases: { id: ["sakit"], en: ["sick"], zh: ["生病"] },
    translation: {
      ngoko: "lara",
      krama: "gerah",
      "krama-inggil": "gerah",
    },
  },
  {
    aliases: { id: ["saku"], en: ["pocket"], zh: ["口袋"] },
    translation: {
      ngoko: "kanthong",
      krama: "kanthong",
      "krama-inggil": "kanthong",
    },
  },
  {
    aliases: { id: ["salah"], en: ["wrong"], zh: ["错误"] },
    translation: {
      ngoko: "salah",
      krama: "lepat",
      "krama-inggil": "lepat",
    },
  },
  {
    aliases: { id: ["salak"], en: ["snake fruit"], zh: ["蛇皮果"] },
    translation: {
      ngoko: "salak",
      krama: "salak",
      "krama-inggil": "salak",
    },
  },
  {
    aliases: { id: ["salam"], en: ["greeting"], zh: ["问候"] },
    translation: {
      ngoko: "salam",
      krama: "salam",
      "krama-inggil": "salam",
    },
  },
  {
    aliases: { id: ["sambal"], en: ["chili sauce"], zh: ["辣椒酱"] },
    translation: {
      ngoko: "sambel",
      krama: "sambel",
      "krama-inggil": "sambel",
    },
  },
  {
    aliases: { id: ["sambung"], en: ["connect"], zh: ["连接"] },
    translation: {
      ngoko: "nyambung",
      krama: "nyambung",
      "krama-inggil": "nyambung",
    },
  },
  {
    aliases: { id: ["sampah"], en: ["garbage"], zh: ["垃圾"] },
    translation: {
      ngoko: "uwuh",
      krama: "sampah",
      "krama-inggil": "sampah",
    },
  },
  {
    aliases: { id: ["sampai"], en: ["arrive", "until"], zh: ["到达", "直到"] },
    translation: {
      ngoko: "tekan",
      krama: "dumugi",
      "krama-inggil": "dumugi",
    },
  },
  {
    aliases: { id: ["samping"], en: ["side"], zh: ["旁边"] },
    translation: {
      ngoko: "pinggir",
      krama: "samping",
      "krama-inggil": "samping",
    },
  },
  {
    aliases: { id: ["sampul"], en: ["cover"], zh: ["封面"] },
    translation: {
      ngoko: "sampul",
      krama: "sampul",
      "krama-inggil": "sampul",
    },
  },
  {
    aliases: { id: ["samudra"], en: ["ocean"], zh: ["海洋"] },
    translation: {
      ngoko: "segara",
      krama: "samudra",
      "krama-inggil": "samudra",
    },
  },
  {
    aliases: { id: ["sandal"], en: ["sandals"], zh: ["凉鞋"] },
    translation: {
      ngoko: "sandal",
      krama: "sandal",
      "krama-inggil": "sandal",
    },
  },
  {
    aliases: { id: ["sangat"], en: ["very"], zh: ["非常"] },
    translation: {
      ngoko: "banget",
      krama: "sanget",
      "krama-inggil": "sanget",
    },
  },
  {
    aliases: { id: ["sanggup"], en: ["able"], zh: ["能够"] },
    translation: {
      ngoko: "kuwat",
      krama: "saged",
      "krama-inggil": "saged",
    },
  },
  {
    aliases: { id: ["sangka"], en: ["suspect", "think"], zh: ["猜想"] },
    translation: {
      ngoko: "nyana",
      krama: "nyana",
      "krama-inggil": "nyana",
    },
  },
  {
    aliases: { id: ["santai"], en: ["relaxed"], zh: ["放松"] },
    translation: {
      ngoko: "santai",
      krama: "santai",
      "krama-inggil": "santai",
    },
  },
  {
    aliases: { id: ["sapu"], en: ["broom"], zh: ["扫帚"] },
    translation: {
      ngoko: "sapu",
      krama: "sapu",
      "krama-inggil": "sapu",
    },
  },
  {
    aliases: { id: ["sapu tangan"], en: ["handkerchief"], zh: ["手帕"] },
    translation: {
      ngoko: "saputangan",
      krama: "saputangan",
      "krama-inggil": "saputangan",
    },
  },
  {
    aliases: { id: ["saran"], en: ["suggestion"], zh: ["建议"] },
    translation: {
      ngoko: "usul",
      krama: "usul",
      "krama-inggil": "usul",
    },
  },
  {
    aliases: { id: ["sarang"], en: ["nest"], zh: ["巢"] },
    translation: {
      ngoko: "susuh",
      krama: "susuh",
      "krama-inggil": "susuh",
    },
  },
  {
    aliases: { id: ["sarapan"], en: ["breakfast"], zh: ["早餐"] },
    translation: {
      ngoko: "sarapan",
      krama: "nedha enjing",
      "krama-inggil": "nedha enjing",
    },
  },
  {
    aliases: { id: ["saringan"], en: ["strainer"], zh: ["滤网"] },
    translation: {
      ngoko: "saringan",
      krama: "saringan",
      "krama-inggil": "saringan",
    },
  },
  {
    aliases: { id: ["sarung"], en: ["sarong"], zh: ["纱笼"] },
    translation: {
      ngoko: "sarung",
      krama: "sarung",
      "krama-inggil": "sarung",
    },
  },
  {
    aliases: { id: ["saudara"], en: ["sibling", "relative"], zh: ["兄弟姐妹", "亲属"] },
    translation: {
      ngoko: "sedulur",
      krama: "sedherek",
      "krama-inggil": "sedherek",
    },
  },
  {
    aliases: { id: ["sawah"], en: ["rice field"], zh: ["稻田"] },
    translation: {
      ngoko: "sawah",
      krama: "sawah",
      "krama-inggil": "sawah",
    },
  },
  {
    aliases: { id: ["sayang"], en: ["dear", "pity"], zh: ["亲爱的", "可惜"] },
    translation: {
      ngoko: "eman",
      krama: "eman",
      "krama-inggil": "eman",
    },
  },
  {
    aliases: { id: ["sayap"], en: ["wing"], zh: ["翅膀"] },
    translation: {
      ngoko: "swiwi",
      krama: "swiwi",
      "krama-inggil": "swiwi",
    },
  },
  {
    aliases: { id: ["sayur"], en: ["vegetable", "dish"], zh: ["蔬菜"] },
    translation: {
      ngoko: "jangan",
      krama: "jangan",
      "krama-inggil": "jangan",
    },
  },
  {
    aliases: { id: ["sebab"], en: ["because", "cause"], zh: ["因为", "原因"] },
    translation: {
      ngoko: "merga",
      krama: "amargi",
      "krama-inggil": "amargi",
    },
  },
  {
    aliases: { id: ["sebelah"], en: ["side"], zh: ["一边"] },
    translation: {
      ngoko: "sisih",
      krama: "sawijining sisih",
      "krama-inggil": "sawijining sisih",
    },
  },
  {
    aliases: { id: ["seberang"], en: ["opposite side"], zh: ["对面"] },
    translation: {
      ngoko: "sebrang",
      krama: "sebrang",
      "krama-inggil": "sebrang",
    },
  },
  {
    aliases: { id: ["sehat"], en: ["healthy"], zh: ["健康"] },
    translation: {
      ngoko: "waras",
      krama: "sehat",
      "krama-inggil": "sehat",
    },
  },
  {
    aliases: { id: ["sejuk"], en: ["cool"], zh: ["凉爽"] },
    translation: {
      ngoko: "adem",
      krama: "asrep",
      "krama-inggil": "asrep",
    },
  },
  {
    aliases: { id: ["sekolah"], en: ["school"], zh: ["学校"] },
    translation: {
      ngoko: "sekolah",
      krama: "sekolah",
      "krama-inggil": "sekolah",
    },
  },
  {
    aliases: { id: ["selalu"], en: ["always"], zh: ["总是"] },
    translation: {
      ngoko: "mesthi",
      krama: "tansah",
      "krama-inggil": "tansah",
    },
  },
  {
    aliases: { id: ["selamat"], en: ["safe", "congratulations"], zh: ["平安", "祝贺"] },
    translation: {
      ngoko: "slamet",
      krama: "wilujeng",
      "krama-inggil": "wilujeng",
    },
  },
  {
    aliases: { id: ["selesai"], en: ["finished"], zh: ["完成"] },
    translation: {
      ngoko: "rampung",
      krama: "sampun rampung",
      "krama-inggil": "sampun rampung",
    },
  },
  {
    aliases: { id: ["selimut"], en: ["blanket"], zh: ["毯子"] },
    translation: {
      ngoko: "kemul",
      krama: "kemul",
      "krama-inggil": "kemul",
    },
  },
  {
    aliases: { id: ["selingkuh"], en: ["cheat on partner"], zh: ["出轨"] },
    translation: {
      ngoko: "selingkuh",
      krama: "selingkuh",
      "krama-inggil": "selingkuh",
    },
  },
  {
    aliases: { id: ["selokan"], en: ["drain"], zh: ["排水沟"] },
    translation: {
      ngoko: "got",
      krama: "got",
      "krama-inggil": "got",
    },
  },
  {
    aliases: { id: ["seluruh"], en: ["all"], zh: ["全部"] },
    translation: {
      ngoko: "kabeh",
      krama: "sedaya",
      "krama-inggil": "sedaya",
    },
  },
  {
    aliases: { id: ["semangat"], en: ["spirit"], zh: ["精神"] },
    translation: {
      ngoko: "semangat",
      krama: "semangat",
      "krama-inggil": "semangat",
    },
  },
  {
    aliases: { id: ["semangka"], en: ["watermelon"], zh: ["西瓜"] },
    translation: {
      ngoko: "semangka",
      krama: "semangka",
      "krama-inggil": "semangka",
    },
  },

  {
    aliases: { id: ["sembuh"], en: ["recover"], zh: ["康复"] },
    translation: {
      ngoko: "waras",
      krama: "saras",
      "krama-inggil": "saras",
    },
  },
  {
    aliases: { id: ["sementara"], en: ["temporary", "while"], zh: ["暂时"] },
    translation: {
      ngoko: "sauntara",
      krama: "sawetawis",
      "krama-inggil": "sawetawis",
    },
  },
  {
    aliases: { id: ["sempit"], en: ["narrow"], zh: ["狭窄"] },
    translation: {
      ngoko: "ciyut",
      krama: "sempit",
      "krama-inggil": "sempit",
    },
  },
  {
    aliases: { id: ["semua"], en: ["all"], zh: ["全部"] },
    translation: {
      ngoko: "kabeh",
      krama: "sedaya",
      "krama-inggil": "sedaya",
    },
  },
  {
    aliases: { id: ["senang"], en: ["happy"], zh: ["开心"] },
    translation: {
      ngoko: "seneng",
      krama: "remen",
      "krama-inggil": "remen",
    },
  },
  {
    aliases: { id: ["sendiri"], en: ["alone", "self"], zh: ["自己"] },
    translation: {
      ngoko: "dhewe",
      krama: "piyambak",
      "krama-inggil": "piyambak",
    },
  },
  {
    aliases: { id: ["sendok"], en: ["spoon"], zh: ["勺子"] },
    translation: {
      ngoko: "sendhok",
      krama: "sendhok",
      "krama-inggil": "sendhok",
    },
  },
  {
    aliases: { id: ["sendok garpu"], en: ["cutlery"], zh: ["餐具"] },
    translation: {
      ngoko: "sendhok garpu",
      krama: "sendhok garpu",
      "krama-inggil": "sendhok garpu",
    },
  },
  {
    aliases: { id: ["senin"], en: ["Monday"], zh: ["星期一"] },
    translation: {
      ngoko: "Senen",
      krama: "Senen",
      "krama-inggil": "Senen",
    },
  },
  {
    aliases: { id: ["sepatu"], en: ["shoes"], zh: ["鞋子"] },
    translation: {
      ngoko: "sepatu",
      krama: "sepatu",
      "krama-inggil": "sepatu",
    },
  },
  {
    aliases: { id: ["sepeda"], en: ["bicycle"], zh: ["自行车"] },
    translation: {
      ngoko: "pit",
      krama: "sepeda",
      "krama-inggil": "sepeda",
    },
  },
  {
    aliases: { id: ["sepi"], en: ["quiet"], zh: ["安静"] },
    translation: {
      ngoko: "sepi",
      krama: "sepen",
      "krama-inggil": "sepen",
    },
  },
  {
    aliases: { id: ["seragam"], en: ["uniform"], zh: ["制服"] },
    translation: {
      ngoko: "seragam",
      krama: "seragam",
      "krama-inggil": "seragam",
    },
  },
  {
    aliases: { id: ["seram"], en: ["scary"], zh: ["可怕"] },
    translation: {
      ngoko: "medeni",
      krama: "medeni",
      "krama-inggil": "medeni",
    },
  },
  {
    aliases: { id: ["serangga"], en: ["insect"], zh: ["昆虫"] },
    translation: {
      ngoko: "gegremet",
      krama: "gegremet",
      "krama-inggil": "gegremet",
    },
  },
  {
    aliases: { id: ["sering"], en: ["often"], zh: ["经常"] },
    translation: {
      ngoko: "kerep",
      krama: "asring",
      "krama-inggil": "asring",
    },
  },
  {
    aliases: { id: ["seringai"], en: ["grin"], zh: ["咧嘴笑"] },
    translation: {
      ngoko: "mesem nyengir",
      krama: "mesem",
      "krama-inggil": "mesem",
    },
  },
  {
    aliases: { id: ["serius"], en: ["serious"], zh: ["认真"] },
    translation: {
      ngoko: "serius",
      krama: "serius",
      "krama-inggil": "serius",
    },
  },
  {
    aliases: { id: ["serpihan"], en: ["shard", "fragment"], zh: ["碎片"] },
    translation: {
      ngoko: "remukan",
      krama: "remukan",
      "krama-inggil": "remukan",
    },
  },
  {
    aliases: { id: ["sesak"], en: ["short of breath", "crowded"], zh: ["气促", "拥挤"] },
    translation: {
      ngoko: "sesek",
      krama: "sesek",
      "krama-inggil": "sesek",
    },
  },
  {
    aliases: { id: ["sesuai"], en: ["suitable"], zh: ["合适"] },
    translation: {
      ngoko: "cocog",
      krama: "trep",
      "krama-inggil": "trep",
    },
  },
  {
    aliases: { id: ["setan"], en: ["devil"], zh: ["恶魔"] },
    translation: {
      ngoko: "setan",
      krama: "setan",
      "krama-inggil": "setan",
    },
  },
  {
    aliases: { id: ["setengah"], en: ["half"], zh: ["一半"] },
    translation: {
      ngoko: "separo",
      krama: "sepalih",
      "krama-inggil": "sepalih",
    },
  },
  {
    aliases: { id: ["setia"], en: ["loyal"], zh: ["忠诚"] },
    translation: {
      ngoko: "setya",
      krama: "setya",
      "krama-inggil": "setya",
    },
  },
  {
    aliases: { id: ["setuju"], en: ["agree"], zh: ["同意"] },
    translation: {
      ngoko: "sarujuk",
      krama: "sarujuk",
      "krama-inggil": "sarujuk",
    },
  },
  {
    aliases: { id: ["setujuan"], en: ["agreement"], zh: ["同意"] },
    translation: {
      ngoko: "persetujuan",
      krama: "persetujuan",
      "krama-inggil": "persetujuan",
    },
  },
  {
    aliases: { id: ["siang"], en: ["daytime"], zh: ["白天"] },
    translation: {
      ngoko: "awan",
      krama: "siyang",
      "krama-inggil": "siyang",
    },
  },
  {
    aliases: { id: ["siap"], en: ["ready"], zh: ["准备好"] },
    translation: {
      ngoko: "siap",
      krama: "siyap",
      "krama-inggil": "siyap",
    },
  },
  {
    aliases: { id: ["siapa"], en: ["who"], zh: ["谁"] },
    translation: {
      ngoko: "sapa",
      krama: "sinten",
      "krama-inggil": "sinten",
    },
  },
  {
    aliases: { id: ["sikat"], en: ["brush"], zh: ["刷子"] },
    translation: {
      ngoko: "sikat",
      krama: "sikat",
      "krama-inggil": "sikat",
    },
  },
  {
    aliases: { id: ["sikat gigi"], en: ["toothbrush"], zh: ["牙刷"] },
    translation: {
      ngoko: "sikat untu",
      krama: "sikat waos",
      "krama-inggil": "sikat waos",
    },
  },
  {
    aliases: { id: ["siku"], en: ["elbow"], zh: ["肘部"] },
    translation: {
      ngoko: "sikut",
      krama: "siku",
      "krama-inggil": "siku",
    },
  },
  {
    aliases: { id: ["singkong"], en: ["cassava"], zh: ["木薯"] },
    translation: {
      ngoko: "tela",
      krama: "tela",
      "krama-inggil": "tela",
    },
  },
  {
    aliases: { id: ["siram"], en: ["pour water"], zh: ["浇水"] },
    translation: {
      ngoko: "nyiram",
      krama: "nyiram",
      "krama-inggil": "nyiram",
    },
  },
  {
    aliases: { id: ["sisi"], en: ["side"], zh: ["一侧"] },
    translation: {
      ngoko: "sisih",
      krama: "sisih",
      "krama-inggil": "sisih",
    },
  },
  {
    aliases: { id: ["sisir"], en: ["comb"], zh: ["梳子"] },
    translation: {
      ngoko: "sisir",
      krama: "sisir",
      "krama-inggil": "sisir",
    },
  },
  {
    aliases: { id: ["siswa"], en: ["student"], zh: ["学生"] },
    translation: {
      ngoko: "murid",
      krama: "siswa",
      "krama-inggil": "siswa",
    },
  },
  {
    aliases: { id: ["sombong"], en: ["arrogant"], zh: ["傲慢"] },
    translation: {
      ngoko: "kumalungkung",
      krama: "sombong",
      "krama-inggil": "sombong",
    },
  },
  {
    aliases: { id: ["sopir"], en: ["driver"], zh: ["司机"] },
    translation: {
      ngoko: "sopir",
      krama: "sopir",
      "krama-inggil": "sopir",
    },
  },
  {
    aliases: { id: ["sore"], en: ["afternoon", "evening"], zh: ["傍晚"] },
    translation: {
      ngoko: "sore",
      krama: "sonten",
      "krama-inggil": "sonten",
    },
  },
  {
    aliases: { id: ["sosial"], en: ["social"], zh: ["社会"] },
    translation: {
      ngoko: "sosial",
      krama: "sosial",
      "krama-inggil": "sosial",
    },
  },
  {
    aliases: { id: ["suap"], en: ["feed by spoon"], zh: ["喂饭"] },
    translation: {
      ngoko: "nyuap",
      krama: "nyuapi",
      "krama-inggil": "nyuapi",
    },
  },
  {
    aliases: { id: ["suara"], en: ["voice", "sound"], zh: ["声音"] },
    translation: {
      ngoko: "swara",
      krama: "swanten",
      "krama-inggil": "swanten",
    },
  },
  {
    aliases: { id: ["sudah"], en: ["already"], zh: ["已经"] },
    translation: {
      ngoko: "wis",
      krama: "sampun",
      "krama-inggil": "sampun",
    },
  },
  {
    aliases: { id: ["suka"], en: ["like"], zh: ["喜欢"] },
    translation: {
      ngoko: "seneng",
      krama: "remen",
      "krama-inggil": "remen",
    },
  },
  {
    aliases: { id: ["sukar"], en: ["difficult"], zh: ["困难"] },
    translation: {
      ngoko: "angel",
      krama: "awrat",
      "krama-inggil": "awrat",
    },
  },
  {
    aliases: { id: ["suku"], en: ["foot", "tribe"], zh: ["脚", "族群"] },
    translation: {
      ngoko: "sikil",
      krama: "suku",
      "krama-inggil": "suku",
    },
  },
  {
    aliases: { id: ["sulit"], en: ["difficult"], zh: ["困难"] },
    translation: {
      ngoko: "angel",
      krama: "awrat",
      "krama-inggil": "awrat",
    },
  },
  {
    aliases: { id: ["sumber"], en: ["source"], zh: ["来源"] },
    translation: {
      ngoko: "sumber",
      krama: "sumber",
      "krama-inggil": "sumber",
    },
  },
  {
    aliases: { id: ["sungai"], en: ["river"], zh: ["河流"] },
    translation: {
      ngoko: "kali",
      krama: "lepen",
      "krama-inggil": "lepen",
    },
  },
  {
    aliases: { id: ["sungguh"], en: ["truly"], zh: ["真的"] },
    translation: {
      ngoko: "tenan",
      krama: "saestu",
      "krama-inggil": "saestu",
    },
  },
  {
    aliases: { id: ["sungkem"], en: ["pay respects"], zh: ["叩拜问安"] },
    translation: {
      ngoko: "sungkem",
      krama: "sungkem",
      "krama-inggil": "sungkem",
    },
  },
  {
    aliases: { id: ["suntik"], en: ["inject"], zh: ["注射"] },
    translation: {
      ngoko: "nyuntik",
      krama: "nyuntik",
      "krama-inggil": "nyuntik",
    },
  },
  {
    aliases: { id: ["surat"], en: ["letter"], zh: ["信"] },
    translation: {
      ngoko: "layang",
      krama: "serat",
      "krama-inggil": "serat",
    },
  },
  {
    aliases: { id: ["surga"], en: ["heaven"], zh: ["天堂"] },
    translation: {
      ngoko: "swarga",
      krama: "swarga",
      "krama-inggil": "swarga",
    },
  },
  {
    aliases: { id: ["suruh"], en: ["tell", "order"], zh: ["吩咐"] },
    translation: {
      ngoko: "kongkon",
      krama: "dhawuh",
      "krama-inggil": "ndhawuhi",
    },
  },
  {
    aliases: { id: ["surut"], en: ["recede"], zh: ["退去"] },
    translation: {
      ngoko: "surut",
      krama: "surut",
      "krama-inggil": "surut",
    },
  },
  {
    aliases: { id: ["susu"], en: ["milk", "breast"], zh: ["牛奶", "乳房"] },
    translation: {
      ngoko: "susu",
      krama: "susu",
      "krama-inggil": "susu",
    },
  },
  {
    aliases: { id: ["susuk"], en: ["implant", "insert"], zh: ["植入物"] },
    translation: {
      ngoko: "susuk",
      krama: "susuk",
      "krama-inggil": "susuk",
    },
  },
  {
    aliases: { id: ["susun"], en: ["arrange"], zh: ["排列"] },
    translation: {
      ngoko: "nyusun",
      krama: "nyusun",
      "krama-inggil": "nyusun",
    },
  },
  {
    aliases: { id: ["susunan"], en: ["arrangement"], zh: ["排列"] },
    translation: {
      ngoko: "susunan",
      krama: "reroncen",
      "krama-inggil": "reroncen",
    },
  },
  {
    aliases: { id: ["tadi"], en: ["earlier"], zh: ["刚才"] },
    translation: {
      ngoko: "mau",
      krama: "wau",
      "krama-inggil": "wau",
    },
  },
  {
    aliases: { id: ["tau","mengerti"], en: ["know"], zh: ["知道"] },
    translation: {
      ngoko: "ngerti",
      krama: "mangertos",
      "krama-inggil": "mangertos",
    },
  },
  {
    aliases: { id: ["tahu"], en: ["tofu"], zh: ["豆腐"] },
    translation: {
      ngoko: "tahu",
      krama: "tahu",
      "krama-inggil": "tahu",
    },
  },
  {
    aliases: { id: ["tajam"], en: ["sharp"], zh: ["锋利"] },
    translation: {
      ngoko: "landhep",
      krama: "landhep",
      "krama-inggil": "landhep",
    },
  },
  {
    aliases: { id: ["takut"], en: ["afraid"], zh: ["害怕"] },
    translation: {
      ngoko: "wedi",
      krama: "ajrih",
      "krama-inggil": "ajrih",
    },
  },
  {
    aliases: { id: ["tali"], en: ["rope"], zh: ["绳子"] },
    translation: {
      ngoko: "tali",
      krama: "tali",
      "krama-inggil": "tali",
    },
  },
  {
    aliases: { id: ["taman"], en: ["park", "garden"], zh: ["公园"] },
    translation: {
      ngoko: "taman",
      krama: "taman",
      "krama-inggil": "taman",
    },
  },
  {
    aliases: { id: ["tambah"], en: ["add"], zh: ["增加"] },
    translation: {
      ngoko: "nambah",
      krama: "nambah",
      "krama-inggil": "nambah",
    },
  },
  {
    aliases: { id: ["tamu"], en: ["guest"], zh: ["客人"] },
    translation: {
      ngoko: "tamu",
      krama: "tamu",
      "krama-inggil": "tamu",
    },
  },
  {
    aliases: { id: ["tanah"], en: ["earth", "land"], zh: ["土地"] },
    translation: {
      ngoko: "lemah",
      krama: "siti",
      "krama-inggil": "siti",
    },
  },
  {
    aliases: { id: ["tanda"], en: ["sign"], zh: ["标志"] },
    translation: {
      ngoko: "tandha",
      krama: "tandha",
      "krama-inggil": "tandha",
    },
  },
  {
    aliases: { id: ["tangan"], en: ["hand"], zh: ["手"] },
    translation: {
      ngoko: "tangan",
      krama: "asta",
      "krama-inggil": "asta",
    },
  },
  {
    aliases: { id: ["tangga"], en: ["stairs"], zh: ["楼梯"] },
    translation: {
      ngoko: "tangga",
      krama: "andha",
      "krama-inggil": "andha",
    },
  },
  {
    aliases: { id: ["tanggal"], en: ["date"], zh: ["日期"] },
    translation: {
      ngoko: "tanggal",
      krama: "tanggal",
      "krama-inggil": "tanggal",
    },
  },
  {
    aliases: { id: ["tanggung jawab"], en: ["responsibility"], zh: ["责任"] },
    translation: {
      ngoko: "tanggung jawab",
      krama: "tanggung jawab",
      "krama-inggil": "tanggung jawab",
    },
  },
  {
    aliases: { id: ["tangis"], en: ["cry"], zh: ["哭"] },
    translation: {
      ngoko: "nangis",
      krama: "muwun",
      "krama-inggil": "muwun",
    },
  },
  {
    aliases: { id: ["tangki"], en: ["tank"], zh: ["罐"] },
    translation: {
      ngoko: "tangki",
      krama: "tangki",
      "krama-inggil": "tangki",
    },
  },
  {
    aliases: { id: ["tani"], en: ["farming"], zh: ["农业"] },
    translation: {
      ngoko: "tani",
      krama: "tani",
      "krama-inggil": "tani",
    },
  },
  {
    aliases: { id: ["tanpa"], en: ["without"], zh: ["没有"] },
    translation: {
      ngoko: "tanpa",
      krama: "tanpa",
      "krama-inggil": "tanpa",
    },
  },
  {
    aliases: { id: ["tanya"], en: ["ask"], zh: ["问"] },
    translation: {
      ngoko: "takon",
      krama: "taken",
      "krama-inggil": "ndangu",
    },
  },
  {
    aliases: { id: ["tarian"], en: ["dance"], zh: ["舞蹈"] },
    translation: {
      ngoko: "tarian",
      krama: "tarian",
      "krama-inggil": "tarian",
    },
  },
  {
    aliases: { id: ["tarik"], en: ["pull"], zh: ["拉"] },
    translation: {
      ngoko: "narik",
      krama: "narik",
      "krama-inggil": "narik",
    },
  },
  {
    aliases: { id: ["tas"], en: ["bag"], zh: ["包"] },
    translation: {
      ngoko: "tas",
      krama: "tas",
      "krama-inggil": "tas",
    },
  },
  {
    aliases: { id: ["tata"], en: ["arrange"], zh: ["安排"] },
    translation: {
      ngoko: "nata",
      krama: "nata",
      "krama-inggil": "nata",
    },
  },
  {
    aliases: { id: ["tatanan"], en: ["order", "system"], zh: ["秩序"] },
    translation: {
      ngoko: "tatanan",
      krama: "tatanan",
      "krama-inggil": "tatanan",
    },
  },
  {
    aliases: { id: ["tawar"], en: ["bland", "bargain"], zh: ["淡", "讨价还价"] },
    translation: {
      ngoko: "tawar",
      krama: "tawar",
      "krama-inggil": "tawar",
    },
  },
  {
    aliases: { id: ["tebal"], en: ["thick"], zh: ["厚"] },
    translation: {
      ngoko: "kandel",
      krama: "kandel",
      "krama-inggil": "kandel",
    },
  },
  {
    aliases: { id: ["tebing"], en: ["cliff"], zh: ["悬崖"] },
    translation: {
      ngoko: "tebing",
      krama: "tebing",
      "krama-inggil": "tebing",
    },
  },
  {
    aliases: { id: ["tebu"], en: ["sugarcane"], zh: ["甘蔗"] },
    translation: {
      ngoko: "tebu",
      krama: "tebu",
      "krama-inggil": "tebu",
    },
  },
  {
    aliases: { id: ["teduh"], en: ["shady"], zh: ["荫凉"] },
    translation: {
      ngoko: "ayom",
      krama: "ayom",
      "krama-inggil": "ayom",
    },
  },
  {
    aliases: { id: ["tegak"], en: ["stand upright"], zh: ["站立"] },
    translation: {
      ngoko: "ngadeg",
      krama: "jumeneng",
      "krama-inggil": "jumeneng",
    },
  },
  {
    aliases: { id: ["tegang"], en: ["tense"], zh: ["紧张"] },
    translation: {
      ngoko: "kaku",
      krama: "tegang",
      "krama-inggil": "tegang",
    },
  },
  {
    aliases: { id: ["tegas"], en: ["firm"], zh: ["坚定"] },
    translation: {
      ngoko: "teges",
      krama: "teges",
      "krama-inggil": "teges",
    },
  },
  {
    aliases: { id: ["teh"], en: ["tea"], zh: ["茶"] },
    translation: {
      ngoko: "teh",
      krama: "teh",
      "krama-inggil": "teh",
    },
  },
  {
    aliases: { id: ["teladan"], en: ["example", "role model"], zh: ["榜样"] },
    translation: {
      ngoko: "tuladha",
      krama: "tuladha",
      "krama-inggil": "tuladha",
    },
  },
  {
    aliases: { id: ["telaga"], en: ["lake", "pond"], zh: ["湖"] },
    translation: {
      ngoko: "tlaga",
      krama: "tlaga",
      "krama-inggil": "tlaga",
    },
  },
  {
    aliases: { id: ["telanjang"], en: ["naked"], zh: ["裸体"] },
    translation: {
      ngoko: "wuda",
      krama: "wuda",
      "krama-inggil": "wuda",
    },
  },
  {
    aliases: { id: ["telapak"], en: ["sole", "palm"], zh: ["脚掌", "手掌"] },
    translation: {
      ngoko: "tlapakan",
      krama: "tlapakan",
      "krama-inggil": "tlapakan",
    },
  },
  {
    aliases: { id: ["telepon"], en: ["telephone"], zh: ["电话"] },
    translation: {
      ngoko: "telpon",
      krama: "telpon",
      "krama-inggil": "telpon",
    },
  },
  {
    aliases: { id: ["telur"], en: ["egg"], zh: ["鸡蛋"] },
    translation: {
      ngoko: "endhog",
      krama: "tigan",
      "krama-inggil": "tigan",
    },
  },
  {
    aliases: { id: ["teman"], en: ["friend"], zh: ["朋友"] },
    translation: {
      ngoko: "kanca",
      krama: "rencang",
      "krama-inggil": "rencang",
    },
  },
  {
    aliases: { id: ["tembak"], en: ["shoot"], zh: ["射击"] },
    translation: {
      ngoko: "nembak",
      krama: "nembak",
      "krama-inggil": "nembak",
    },
  },
  {
    aliases: { id: ["tembakau"], en: ["tobacco"], zh: ["烟草"] },
    translation: {
      ngoko: "mbako",
      krama: "mbako",
      "krama-inggil": "mbako",
    },
  },
  {
    aliases: { id: ["tembok"], en: ["wall"], zh: ["墙"] },
    translation: {
      ngoko: "tembok",
      krama: "tembok",
      "krama-inggil": "tembok",
    },
  },
  {
    aliases: { id: ["tempat"], en: ["place"], zh: ["地方"] },
    translation: {
      ngoko: "panggonan",
      krama: "papan",
      "krama-inggil": "papan",
    },
  },
  {
    aliases: { id: ["tempat sampah"], en: ["trash can"], zh: ["垃圾桶"] },
    translation: {
      ngoko: "panggonan uwuh",
      krama: "panggonan sampah",
      "krama-inggil": "panggonan sampah",
    },
  },
  {
    aliases: { id: ["tempat tidur"], en: ["bed"], zh: ["床"] },
    translation: {
      ngoko: "paturon",
      krama: "paturon",
      "krama-inggil": "paturon",
    },
  },
  {
    aliases: { id: ["tempe"], en: ["tempeh"], zh: ["天贝"] },
    translation: {
      ngoko: "tempe",
      krama: "tempe",
      "krama-inggil": "tempe",
    },
  },
  {
    aliases: { id: ["tempel"], en: ["stick", "attach"], zh: ["粘贴"] },
    translation: {
      ngoko: "nempel",
      krama: "nempel",
      "krama-inggil": "nempel",
    },
  },
  {
    aliases: { id: ["temu"], en: ["meet"], zh: ["遇见"] },
    translation: {
      ngoko: "ketemu",
      krama: "kepanggih",
      "krama-inggil": "kepanggih",
    },
  },
  {
    aliases: { id: ["tenang"], en: ["calm"], zh: ["平静"] },
    translation: {
      ngoko: "meneng",
      krama: "tenang",
      "krama-inggil": "tenang",
    },
  },
  {
    aliases: { id: ["tengah"], en: ["middle"], zh: ["中间"] },
    translation: {
      ngoko: "tengah",
      krama: "tengah",
      "krama-inggil": "tengah",
    },
  },
  {
    aliases: { id: ["tenggorokan"], en: ["throat"], zh: ["喉咙"] },
    translation: {
      ngoko: "tenggorokan",
      krama: "jangga",
      "krama-inggil": "jangga",
    },
  },
  {
    aliases: { id: ["tengkar"], en: ["quarrel"], zh: ["争吵"] },
    translation: {
      ngoko: "padudon",
      krama: "padudon",
      "krama-inggil": "padudon",
    },
  },
  {
    aliases: { id: ["tentang"], en: ["about"], zh: ["关于"] },
    translation: {
      ngoko: "bab",
      krama: "bab",
      "krama-inggil": "bab",
    },
  },
  {
    aliases: { id: ["tentara"], en: ["soldier"], zh: ["士兵"] },
    translation: {
      ngoko: "prajurit",
      krama: "prajurit",
      "krama-inggil": "prajurit",
    },
  },
  {
    aliases: { id: ["tentu"], en: ["certainly"], zh: ["当然"] },
    translation: {
      ngoko: "mesthi",
      krama: "tamtu",
      "krama-inggil": "tamtu",
    },
  },
  {
    aliases: { id: ["tepat"], en: ["exact"], zh: ["准确"] },
    translation: {
      ngoko: "pas",
      krama: "trep",
      "krama-inggil": "trep",
    },
  },
  {
    aliases: { id: ["terang"], en: ["bright"], zh: ["明亮"] },
    translation: {
      ngoko: "padhang",
      krama: "padhang",
      "krama-inggil": "padhang",
    },
  },
  {
    aliases: { id: ["terbang"], en: ["fly"], zh: ["飞"] },
    translation: {
      ngoko: "mabur",
      krama: "mabur",
      "krama-inggil": "mabur",
    },
  },
  {
    aliases: { id: ["terbit"], en: ["rise", "publish"], zh: ["升起", "出版"] },
    translation: {
      ngoko: "metu",
      krama: "mijil",
      "krama-inggil": "mijil",
    },
  },
  {
    aliases: { id: ["terima"], en: ["receive"], zh: ["接收"] },
    translation: {
      ngoko: "nampa",
      krama: "nampi",
      "krama-inggil": "nampi",
    },
  },
  {
    aliases: { id: ["terima kasih"], en: ["thank you"], zh: ["谢谢"] },
    translation: {
      ngoko: "matur nuwun",
      krama: "matur nuwun",
      "krama-inggil": "matur nuwun",
    },
  },
  {
    aliases: { id: ["terjun"], en: ["dive", "jump"], zh: ["跳入"] },
    translation: {
      ngoko: "nyemplung",
      krama: "nyemplung",
      "krama-inggil": "nyemplung",
    },
  },
  {
    aliases: { id: ["terlalu"], en: ["too much"], zh: ["太"] },
    translation: {
      ngoko: "kakehan",
      krama: "keladuk",
      "krama-inggil": "keladuk",
    },
  },
  {
    aliases: { id: ["terlambat"], en: ["late"], zh: ["迟到"] },
    translation: {
      ngoko: "kasep",
      krama: "kasep",
      "krama-inggil": "kasep",
    },
  },
  {
    aliases: { id: ["terlihat"], en: ["visible"], zh: ["可见"] },
    translation: {
      ngoko: "katon",
      krama: "katingal",
      "krama-inggil": "katingal",
    },
  },
  {
    aliases: { id: ["terong"], en: ["eggplant"], zh: ["茄子"] },
    translation: {
      ngoko: "terong",
      krama: "terong",
      "krama-inggil": "terong",
    },
  },
  {
    aliases: { id: ["tersenyum"], en: ["smile"], zh: ["微笑"] },
    translation: {
      ngoko: "mesem",
      krama: "mesem",
      "krama-inggil": "mesem",
    },
  },
  {
    aliases: { id: ["terus"], en: ["continue"], zh: ["继续"] },
    translation: {
      ngoko: "terus",
      krama: "lajeng",
      "krama-inggil": "lajeng",
    },
  },
  {
    aliases: { id: ["terus terang"], en: ["frank"], zh: ["坦率"] },
    translation: {
      ngoko: "terus terang",
      krama: "terus terang",
      "krama-inggil": "terus terang",
    },
  },
  {
    aliases: { id: ["tetangga"], en: ["neighbor"], zh: ["邻居"] },
    translation: {
      ngoko: "tangga",
      krama: "tanggi",
      "krama-inggil": "tanggi",
    },
  },
  {
    aliases: { id: ["tetap"], en: ["remain"], zh: ["保持"] },
    translation: {
      ngoko: "tetep",
      krama: "tetep",
      "krama-inggil": "tetep",
    },
  },
  {
    aliases: { id: ["tetapi"], en: ["but"], zh: ["但是"] },
    translation: {
      ngoko: "nanging",
      krama: "nanging",
      "krama-inggil": "nanging",
    },
  },
  {
    aliases: { id: ["tetes"], en: ["drop"], zh: ["滴"] },
    translation: {
      ngoko: "tetes",
      krama: "tetes",
      "krama-inggil": "tetes",
    },
  },
  {
    aliases: { id: ["tewas"], en: ["die"], zh: ["死亡"] },
    translation: {
      ngoko: "mati",
      krama: "seda",
      "krama-inggil": "seda",
    },
  },
  {
    aliases: { id: ["tiang"], en: ["pillar"], zh: ["柱子"] },
    translation: {
      ngoko: "tiyang",
      krama: "tiyang",
      "krama-inggil": "tiyang",
    },
  },
  {
    aliases: { id: ["tiba"], en: ["arrive", "fall"], zh: ["到达", "落下"] },
    translation: {
      ngoko: "tiba",
      krama: "dawah",
      "krama-inggil": "dawah",
    },
  },
  {
    aliases: { id: ["tidak"], en: ["no", "not"], zh: ["不"] },
    translation: {
      ngoko: "ora",
      krama: "mboten",
      "krama-inggil": "mboten",
    },
  },
  {
    aliases: { id: ["tidur"], en: ["sleep"], zh: ["睡觉"] },
    translation: {
      ngoko: "turu",
      krama: "tilem",
      "krama-inggil": "sare",
    },
  },
  {
    aliases: { id: ["tim"], en: ["team"], zh: ["团队"] },
    translation: {
      ngoko: "tim",
      krama: "tim",
      "krama-inggil": "tim",
    },
  },
  {
    aliases: { id: ["timah"], en: ["tin"], zh: ["锡"] },
    translation: {
      ngoko: "timah",
      krama: "timah",
      "krama-inggil": "timah",
    },
  },
  {
    aliases: { id: ["timbangan"], en: ["scale"], zh: ["秤"] },
    translation: {
      ngoko: "timbangan",
      krama: "timbangan",
      "krama-inggil": "timbangan",
    },
  },
  {
    aliases: { id: ["timur"], en: ["east"], zh: ["东"] },
    translation: {
      ngoko: "wetan",
      krama: "wetan",
      "krama-inggil": "wetan",
    },
  },
  {
    aliases: { id: ["tinggal"], en: ["remain", "live"], zh: ["留下", "居住"] },
    translation: {
      ngoko: "kari",
      krama: "kantun",
      "krama-inggil": "kantun",
    },
  },
  {
    aliases: { id: ["tinggi"], en: ["high", "tall"], zh: ["高"] },
    translation: {
      ngoko: "dhuwur",
      krama: "inggil",
      "krama-inggil": "inggil",
    },
  },
  {
    aliases: { id: ["tingkap"], en: ["window"], zh: ["窗户"] },
    translation: {
      ngoko: "jendhela",
      krama: "jendhela",
      "krama-inggil": "jendhela",
    },
  },
  {
    aliases: { id: ["tingkat"], en: ["level"], zh: ["级别"] },
    translation: {
      ngoko: "undhak",
      krama: "undhak",
      "krama-inggil": "undhak",
    },
  },
  {
    aliases: { id: ["tipis"], en: ["thin"], zh: ["薄"] },
    translation: {
      ngoko: "tipis",
      krama: "tipis",
      "krama-inggil": "tipis",
    },
  },
  {
    aliases: { id: ["tiram"], en: ["oyster"], zh: ["牡蛎"] },
    translation: {
      ngoko: "tiram",
      krama: "tiram",
      "krama-inggil": "tiram",
    },
  },
  {
    aliases: { id: ["tisu"], en: ["tissue"], zh: ["纸巾"] },
    translation: {
      ngoko: "tisu",
      krama: "tisu",
      "krama-inggil": "tisu",
    },
  },
  {
    aliases: { id: ["toko"], en: ["shop"], zh: ["商店"] },
    translation: {
      ngoko: "toko",
      krama: "toko",
      "krama-inggil": "toko",
    },
  },
  {
    aliases: { id: ["tolak"], en: ["reject"], zh: ["拒绝"] },
    translation: {
      ngoko: "nolak",
      krama: "nampik",
      "krama-inggil": "nampik",
    },
  },
  {
    aliases: { id: ["tolong"], en: ["help"], zh: ["帮助"] },
    translation: {
      ngoko: "tulung",
      krama: "tulung",
      "krama-inggil": "tulung",
    },
  },
  {
    aliases: { id: ["tomat"], en: ["tomato"], zh: ["西红柿"] },
    translation: {
      ngoko: "tomat",
      krama: "tomat",
      "krama-inggil": "tomat",
    },
  },
  {
    aliases: { id: ["tongkat"], en: ["stick", "cane"], zh: ["手杖"] },
    translation: {
      ngoko: "teken",
      krama: "teken",
      "krama-inggil": "teken",
    },
  },
  {
    aliases: { id: ["topi"], en: ["hat"], zh: ["帽子"] },
    translation: {
      ngoko: "topi",
      krama: "topi",
      "krama-inggil": "topi",
    },
  },
  {
    aliases: { id: ["tradisi"], en: ["tradition"], zh: ["传统"] },
    translation: {
      ngoko: "adat",
      krama: "adat",
      "krama-inggil": "adat",
    },
  },
  {
    aliases: { id: ["traktor"], en: ["tractor"], zh: ["拖拉机"] },
    translation: {
      ngoko: "traktor",
      krama: "traktor",
      "krama-inggil": "traktor",
    },
  },
  {
    aliases: { id: ["transaksi"], en: ["transaction"], zh: ["交易"] },
    translation: {
      ngoko: "transaksi",
      krama: "transaksi",
      "krama-inggil": "transaksi",
    },
  },
  {
    aliases: { id: ["transportasi"], en: ["transportation"], zh: ["交通"] },
    translation: {
      ngoko: "transportasi",
      krama: "transportasi",
      "krama-inggil": "transportasi",
    },
  },
  {
    aliases: { id: ["trapesium"], en: ["trapezoid"], zh: ["梯形"] },
    translation: {
      ngoko: "trapesium",
      krama: "trapesium",
      "krama-inggil": "trapesium",
    },
  },
  {
    aliases: { id: ["tua"], en: ["old"], zh: ["老"] },
    translation: {
      ngoko: "tuwa",
      krama: "sepuh",
      "krama-inggil": "sepuh",
    },
  },
  {
    aliases: { id: ["tubuh"], en: ["body"], zh: ["身体"] },
    translation: {
      ngoko: "awak",
      krama: "badan",
      "krama-inggil": "badan",
    },
  },
  {
    aliases: { id: ["tugas"], en: ["task"], zh: ["任务"] },
    translation: {
      ngoko: "tugas",
      krama: "jejibahan",
      "krama-inggil": "jejibahan",
    },
  },
  {
    aliases: { id: ["tuhan"], en: ["God"], zh: ["上帝"] },
    translation: {
      ngoko: "Gusti",
      krama: "Gusti",
      "krama-inggil": "Gusti",
    },
  },
  {
    aliases: { id: ["tukang"], en: ["craftsperson"], zh: ["工匠"] },
    translation: {
      ngoko: "tukang",
      krama: "tukang",
      "krama-inggil": "tukang",
    },
  },
  {
    aliases: { id: ["tulang"], en: ["bone"], zh: ["骨头"] },
    translation: {
      ngoko: "balung",
      krama: "balung",
      "krama-inggil": "balung",
    },
  },

  {
    aliases: { id: ["tulisan"], en: ["writing"], zh: ["文字"] },
    translation: {
      ngoko: "tulisan",
      krama: "seratan",
      "krama-inggil": "seratan",
    },
  },
  {
    aliases: { id: ["tulus"], en: ["sincere"], zh: ["真诚"] },
    translation: {
      ngoko: "tulus",
      krama: "tulus",
      "krama-inggil": "tulus",
    },
  },
  {
    aliases: { id: ["tumbuh"], en: ["grow"], zh: ["生长"] },
    translation: {
      ngoko: "tuwuh",
      krama: "tuwuh",
      "krama-inggil": "tuwuh",
    },
  },
  {
    aliases: { id: ["tumpah"], en: ["spill"], zh: ["洒出"] },
    translation: {
      ngoko: "mbludag",
      krama: "mbludag",
      "krama-inggil": "mbludag",
    },
  },
  {
    aliases: { id: ["tumpul"], en: ["blunt"], zh: ["钝"] },
    translation: {
      ngoko: "tumpul",
      krama: "tumpul",
      "krama-inggil": "tumpul",
    },
  },
  {
    aliases: { id: ["tunggu"], en: ["wait"], zh: ["等待"] },
    translation: {
      ngoko: "ngenteni",
      krama: "ngentosi",
      "krama-inggil": "ngentosi",
    },
  },
  {
    aliases: { id: ["tungku"], en: ["stove", "hearth"], zh: ["炉灶"] },
    translation: {
      ngoko: "pawon",
      krama: "pawon",
      "krama-inggil": "pawon",
    },
  },
  {
    aliases: { id: ["tunjuk"], en: ["point", "show"], zh: ["指向", "展示"] },
    translation: {
      ngoko: "nuding",
      krama: "nedahake",
      "krama-inggil": "nedahake",
    },
  },
  {
    aliases: { id: ["turun"], en: ["descend"], zh: ["下降"] },
    translation: {
      ngoko: "mudhun",
      krama: "mandhap",
      "krama-inggil": "mandhap",
    },
  },
  {
    aliases: { id: ["turut"], en: ["follow", "join"], zh: ["跟随"] },
    translation: {
      ngoko: "melu",
      krama: "ndherek",
      "krama-inggil": "ndherek",
    },
  },
  {
    aliases: { id: ["tutup"], en: ["close"], zh: ["关闭"] },
    translation: {
      ngoko: "nutup",
      krama: "nutup",
      "krama-inggil": "nutup",
    },
  },
  {
    aliases: { id: ["tutup botol"], en: ["bottle cap"], zh: ["瓶盖"] },
    translation: {
      ngoko: "tutup botol",
      krama: "tutup botol",
      "krama-inggil": "tutup botol",
    },
  },
  {
    aliases: { id: ["uang"], en: ["money"], zh: ["钱"] },
    translation: {
      ngoko: "dhuwit",
      krama: "arta",
      "krama-inggil": "arta",
    },
  },
  {
    aliases: { id: ["udang"], en: ["shrimp"], zh: ["虾"] },
    translation: {
      ngoko: "urang",
      krama: "urang",
      "krama-inggil": "urang",
    },
  },
  {
    aliases: { id: ["udara"], en: ["air"], zh: ["空气"] },
    translation: {
      ngoko: "hawa",
      krama: "hawa",
      "krama-inggil": "hawa",
    },
  },
  {
    aliases: { id: ["udik"], en: ["rural", "backwater"], zh: ["乡下"] },
    translation: {
      ngoko: "ndesa",
      krama: "ndesa",
      "krama-inggil": "ndesa",
    },
  },
  {
    aliases: { id: ["ulang tahun"], en: ["birthday"], zh: ["生日"] },
    translation: {
      ngoko: "dina lair",
      krama: "dinten miyos",
      "krama-inggil": "dinten miyos",
    },
  },
  {
    aliases: { id: ["ulangan"], en: ["test", "review"], zh: ["测验"] },
    translation: {
      ngoko: "ulangan",
      krama: "ulangan",
      "krama-inggil": "ulangan",
    },
  },
  {
    aliases: { id: ["ulangi","ngulang","ulang"], en: ["repeat"], zh: ["重复"] },
    translation: {
      ngoko: "baleni",
      krama: "ambali",
      "krama-inggil": "ambali",
    },
  },
  {
    aliases: { id: ["ulas"], en: ["review"], zh: ["评论"] },
    translation: {
      ngoko: "ulas",
      krama: "ulas",
      "krama-inggil": "ulas",
    },
  },
  {
    aliases: { id: ["ulat"], en: ["caterpillar"], zh: ["毛毛虫"] },
    translation: {
      ngoko: "uler",
      krama: "uler",
      "krama-inggil": "uler",
    },
  },
  {
    aliases: { id: ["umbi"], en: ["tuber"], zh: ["块茎"] },
    translation: {
      ngoko: "umbi",
      krama: "umbi",
      "krama-inggil": "umbi",
    },
  },
  {
    aliases: { id: ["umum"], en: ["general", "public"], zh: ["一般", "公共"] },
    translation: {
      ngoko: "umum",
      krama: "umum",
      "krama-inggil": "umum",
    },
  },
  {
    aliases: { id: ["umur","usia"], en: ["age"], zh: ["年龄"] },
    translation: {
      ngoko: "umur",
      krama: "yuswa",
      "krama-inggil": "yuswa",
    },
  },
  {
    aliases: { id: ["undang"], en: ["invite"], zh: ["邀请"] },
    translation: {
      ngoko: "ngundang",
      krama: "ngundang",
      "krama-inggil": "nimbali",
    },
  },
  {
    aliases: { id: ["undangan"], en: ["invitation"], zh: ["邀请函"] },
    translation: {
      ngoko: "undangan",
      krama: "undangan",
      "krama-inggil": "undangan",
    },
  },
  {
    aliases: { id: ["unduh"], en: ["download", "harvest"], zh: ["下载", "收获"] },
    translation: {
      ngoko: "ngundhuh",
      krama: "ngundhuh",
      "krama-inggil": "ngundhuh",
    },
  },
  {
    aliases: { id: ["unggah"], en: ["upload"], zh: ["上传"] },
    translation: {
      ngoko: "unggah",
      krama: "unggah",
      "krama-inggil": "unggah",
    },
  },
  {
    aliases: { id: ["unggul"], en: ["superior"], zh: ["优秀"] },
    translation: {
      ngoko: "unggul",
      krama: "unggul",
      "krama-inggil": "unggul",
    },
  },
  {
    aliases: { id: ["ungkap"], en: ["reveal", "express"], zh: ["表达", "揭示"] },
    translation: {
      ngoko: "ngandharake",
      krama: "ngandharaken",
      "krama-inggil": "ngandharaken",
    },
  },
  {
    aliases: { id: ["ungsi"], en: ["evacuate"], zh: ["撤离"] },
    translation: {
      ngoko: "ngungsi",
      krama: "ngungsi",
      "krama-inggil": "ngungsi",
    },
  },
  {
    aliases: { id: ["ungu"], en: ["purple"], zh: ["紫色"] },
    translation: {
      ngoko: "ungu",
      krama: "ungu",
      "krama-inggil": "ungu",
    },
  },
  {
    aliases: { id: ["unik"], en: ["unique"], zh: ["独特"] },
    translation: {
      ngoko: "unik",
      krama: "unik",
      "krama-inggil": "unik",
    },
  },
  {
    aliases: { id: ["unit"], en: ["unit"], zh: ["单位"] },
    translation: {
      ngoko: "unit",
      krama: "unit",
      "krama-inggil": "unit",
    },
  },
  {
    aliases: { id: ["universal"], en: ["universal"], zh: ["普遍"] },
    translation: {
      ngoko: "universal",
      krama: "universal",
      "krama-inggil": "universal",
    },
  },
  {
    aliases: { id: ["untai"], en: ["strand"], zh: ["串"] },
    translation: {
      ngoko: "untai",
      krama: "untai",
      "krama-inggil": "untai",
    },
  },
  {
    aliases: { id: ["untuk"], en: ["for"], zh: ["为了"] },
    translation: {
      ngoko: "kanggo",
      krama: "kagem",
      "krama-inggil": "kagem",
    },
  },
  {
    aliases: { id: ["untung"], en: ["lucky", "profit"], zh: ["幸运", "利润"] },
    translation: {
      ngoko: "beja",
      krama: "begja",
      "krama-inggil": "begja",
    },
  },
  {
    aliases: { id: ["upacara"], en: ["ceremony"], zh: ["仪式"] },
    translation: {
      ngoko: "upacara",
      krama: "upacara",
      "krama-inggil": "upacara",
    },
  },
  {
    aliases: { id: ["upah"], en: ["wage"], zh: ["工资"] },
    translation: {
      ngoko: "bayaran",
      krama: "bayaran",
      "krama-inggil": "bayaran",
    },
  },
  {
    aliases: { id: ["upaya"], en: ["effort"], zh: ["努力"] },
    translation: {
      ngoko: "upaya",
      krama: "upaya",
      "krama-inggil": "upaya",
    },
  },
  {
    aliases: { id: ["urat"], en: ["vein", "tendon"], zh: ["血管", "肌腱"] },
    translation: {
      ngoko: "urat",
      krama: "urat",
      "krama-inggil": "urat",
    },
  },
  {
    aliases: { id: ["urban"], en: ["urban"], zh: ["城市的"] },
    translation: {
      ngoko: "urban",
      krama: "urban",
      "krama-inggil": "urban",
    },
  },
  {
    aliases: { id: ["urutan"], en: ["sequence"], zh: ["顺序"] },
    translation: {
      ngoko: "urut-urutan",
      krama: "urut-urutan",
      "krama-inggil": "urut-urutan",
    },
  },
  {
    aliases: { id: ["usaha"], en: ["business", "effort"], zh: ["生意", "努力"] },
    translation: {
      ngoko: "usaha",
      krama: "usaha",
      "krama-inggil": "usaha",
    },
  },
  {
    aliases: { id: ["utama"], en: ["main"], zh: ["主要"] },
    translation: {
      ngoko: "utama",
      krama: "utami",
      "krama-inggil": "utami",
    },
  },
  {
    aliases: { id: ["utara"], en: ["north"], zh: ["北"] },
    translation: {
      ngoko: "lor",
      krama: "ler",
      "krama-inggil": "ler",
    },
  },
  {
    aliases: { id: ["utuh"], en: ["whole", "intact"], zh: ["完整"] },
    translation: {
      ngoko: "wutuh",
      krama: "wetah",
      "krama-inggil": "wetah",
    },
  },
  {
    aliases: { id: ["vaksin"], en: ["vaccine"], zh: ["疫苗"] },
    translation: {
      ngoko: "vaksin",
      krama: "vaksin",
      "krama-inggil": "vaksin",
    },
  },
  {
    aliases: { id: ["vaksinasi"], en: ["vaccination"], zh: ["接种疫苗"] },
    translation: {
      ngoko: "vaksinasi",
      krama: "vaksinasi",
      "krama-inggil": "vaksinasi",
    },
  },
  {
    aliases: { id: ["valid"], en: ["valid"], zh: ["有效"] },
    translation: {
      ngoko: "valid",
      krama: "valid",
      "krama-inggil": "valid",
    },
  },
  {
    aliases: { id: ["validasi"], en: ["validation"], zh: ["验证"] },
    translation: {
      ngoko: "validasi",
      krama: "validasi",
      "krama-inggil": "validasi",
    },
  },
  {
    aliases: { id: ["vanili"], en: ["vanilla"], zh: ["香草"] },
    translation: {
      ngoko: "panili",
      krama: "panili",
      "krama-inggil": "panili",
    },
  },
  {
    aliases: { id: ["variabel"], en: ["variable"], zh: ["变量"] },
    translation: {
      ngoko: "variabel",
      krama: "variabel",
      "krama-inggil": "variabel",
    },
  },
  {
    aliases: { id: ["varian"], en: ["variant"], zh: ["变体"] },
    translation: {
      ngoko: "varian",
      krama: "varian",
      "krama-inggil": "varian",
    },
  },
  {
    aliases: { id: ["variasi"], en: ["variation"], zh: ["变化"] },
    translation: {
      ngoko: "variasi",
      krama: "variasi",
      "krama-inggil": "variasi",
    },
  },
  {
    aliases: { id: ["vas"], en: ["vase"], zh: ["花瓶"] },
    translation: {
      ngoko: "vas",
      krama: "vas",
      "krama-inggil": "vas",
    },
  },
  {
    aliases: { id: ["vegetarian"], en: ["vegetarian"], zh: ["素食者"] },
    translation: {
      ngoko: "vegetarian",
      krama: "vegetarian",
      "krama-inggil": "vegetarian",
    },
  },
  {
    aliases: { id: ["vegetasi"], en: ["vegetation"], zh: ["植被"] },
    translation: {
      ngoko: "tetuwuhan",
      krama: "tetuwuhan",
      "krama-inggil": "tetuwuhan",
    },
  },
  {
    aliases: { id: ["vektor"], en: ["vector"], zh: ["向量"] },
    translation: {
      ngoko: "vektor",
      krama: "vektor",
      "krama-inggil": "vektor",
    },
  },
  {
    aliases: { id: ["vena"], en: ["vein"], zh: ["静脉"] },
    translation: {
      ngoko: "vena",
      krama: "vena",
      "krama-inggil": "vena",
    },
  },
  {
    aliases: { id: ["ventilasi"], en: ["ventilation"], zh: ["通风"] },
    translation: {
      ngoko: "ventilasi",
      krama: "ventilasi",
      "krama-inggil": "ventilasi",
    },
  },
  {
    aliases: { id: ["verifikasi"], en: ["verification"], zh: ["核实"] },
    translation: {
      ngoko: "verifikasi",
      krama: "verifikasi",
      "krama-inggil": "verifikasi",
    },
  },
  {
    aliases: { id: ["versi"], en: ["version"], zh: ["版本"] },
    translation: {
      ngoko: "versi",
      krama: "versi",
      "krama-inggil": "versi",
    },
  },
  {
    aliases: { id: ["vertikal"], en: ["vertical"], zh: ["垂直"] },
    translation: {
      ngoko: "jejeg",
      krama: "vertikal",
      "krama-inggil": "vertikal",
    },
  },
  {
    aliases: { id: ["vespa"], en: ["scooter"], zh: ["踏板摩托车"] },
    translation: {
      ngoko: "vespa",
      krama: "vespa",
      "krama-inggil": "vespa",
    },
  },
  {
    aliases: { id: ["veteran"], en: ["veteran"], zh: ["老兵"] },
    translation: {
      ngoko: "veteran",
      krama: "veteran",
      "krama-inggil": "veteran",
    },
  },
  {
    aliases: { id: ["video"], en: ["video"], zh: ["视频"] },
    translation: {
      ngoko: "video",
      krama: "video",
      "krama-inggil": "video",
    },
  },
  {
    aliases: { id: ["video game"], en: ["video game"], zh: ["电子游戏"] },
    translation: {
      ngoko: "dolanan video",
      krama: "dolanan video",
      "krama-inggil": "dolanan video",
    },
  },
  {
    aliases: { id: ["villa"], en: ["villa"], zh: ["别墅"] },
    translation: {
      ngoko: "vila",
      krama: "vila",
      "krama-inggil": "vila",
    },
  },
  {
    aliases: { id: ["virus"], en: ["virus"], zh: ["病毒"] },
    translation: {
      ngoko: "virus",
      krama: "virus",
      "krama-inggil": "virus",
    },
  },
  {
    aliases: { id: ["vitamin"], en: ["vitamin"], zh: ["维生素"] },
    translation: {
      ngoko: "vitamin",
      krama: "vitamin",
      "krama-inggil": "vitamin",
    },
  },
  {
    aliases: { id: ["volume"], en: ["volume"], zh: ["体积", "音量"] },
    translation: {
      ngoko: "volume",
      krama: "volume",
      "krama-inggil": "volume",
    },
  },
  {
    aliases: { id: ["vulkanik"], en: ["volcanic"], zh: ["火山的"] },
    translation: {
      ngoko: "vulkanik",
      krama: "vulkanik",
      "krama-inggil": "vulkanik",
    },
  },
  {
    aliases: { id: ["wabah"], en: ["outbreak"], zh: ["疫情"] },
    translation: {
      ngoko: "pageblug",
      krama: "wabah",
      "krama-inggil": "wabah",
    },
  },
  {
    aliases: { id: ["wajan"], en: ["wok"], zh: ["炒锅"] },
    translation: {
      ngoko: "wajan",
      krama: "wajan",
      "krama-inggil": "wajan",
    },
  },
  {
    aliases: { id: ["wajib"], en: ["mandatory"], zh: ["必须"] },
    translation: {
      ngoko: "kudu",
      krama: "kedah",
      "krama-inggil": "kedah",
    },
  },
  {
    aliases: { id: ["wakil"], en: ["representative"], zh: ["代表"] },
    translation: {
      ngoko: "wakil",
      krama: "wakil",
      "krama-inggil": "wakil",
    },
  },
  {
    aliases: { id: ["waktu"], en: ["time"], zh: ["时间"] },
    translation: {
      ngoko: "wektu",
      krama: "wekdal",
      "krama-inggil": "wekdal",
    },
  },

  {
    aliases: { id: ["walaupun"], en: ["although"], zh: ["虽然"] },
    translation: {
      ngoko: "senajan",
      krama: "sanajan",
      "krama-inggil": "sanajan",
    },
  },
  {
    aliases: { id: ["wali"], en: ["guardian", "saint"], zh: ["监护人", "圣人"] },
    translation: {
      ngoko: "wali",
      krama: "wali",
      "krama-inggil": "wali",
    },
  },
  {
    aliases: { id: ["wali kota"], en: ["mayor"], zh: ["市长"] },
    translation: {
      ngoko: "walikota",
      krama: "walikota",
      "krama-inggil": "walikota",
    },
  },
  {
    aliases: { id: ["warna"], en: ["color"], zh: ["颜色"] },
    translation: {
      ngoko: "werna",
      krama: "werna",
      "krama-inggil": "werna",
    },
  },
  {
    aliases: { id: ["warung"], en: ["food stall"], zh: ["小吃店"] },
    translation: {
      ngoko: "warung",
      krama: "warung",
      "krama-inggil": "warung",
    },
  },
  {
    aliases: { id: ["wasit"], en: ["referee"], zh: ["裁判"] },
    translation: {
      ngoko: "wasit",
      krama: "wasit",
      "krama-inggil": "wasit",
    },
  },
  {
    aliases: { id: ["waspada"], en: ["alert"], zh: ["警惕"] },
    translation: {
      ngoko: "waspada",
      krama: "waspada",
      "krama-inggil": "waspada",
    },
  },
  {
    aliases: { id: ["watak"], en: ["character"], zh: ["性格"] },
    translation: {
      ngoko: "watak",
      krama: "watak",
      "krama-inggil": "watak",
    },
  },
  {
    aliases: { id: ["wawancara"], en: ["interview"], zh: ["面试", "采访"] },
    translation: {
      ngoko: "wawancara",
      krama: "wawancara",
      "krama-inggil": "wawancara",
    },
  },
 
  {
    aliases: { id: ["wayang"], en: ["shadow puppet"], zh: ["皮影戏"] },
    translation: {
      ngoko: "wayang",
      krama: "wayang",
      "krama-inggil": "wayang",
    },
  },

  {
    aliases: { id: ["yakni"], en: ["namely"], zh: ["即"] },
    translation: {
      ngoko: "yaiku",
      krama: "inggih punika",
      "krama-inggil": "inggih punika",
    },
  },

  {
    aliases: { id: ["yatim piatu"], en: ["orphan"], zh: ["孤儿"] },
    translation: {
      ngoko: "yatim piatu",
      krama: "yatim piatu",
      "krama-inggil": "yatim piatu",
    },
  },
  {
    aliases: { id: ["yayasan"], en: ["foundation"], zh: ["基金会"] },
    translation: {
      ngoko: "yayasan",
      krama: "yayasan",
      "krama-inggil": "yayasan",
    },
  },
  {
    aliases: { id: ["yodium"], en: ["iodine"], zh: ["碘"] },
    translation: {
      ngoko: "yodium",
      krama: "yodium",
      "krama-inggil": "yodium",
    },
  },

  {
    aliases: { id: ["yoga"], en: ["yoga"], zh: ["瑜伽"] },
    translation: {
      ngoko: "yoga",
      krama: "yoga",
      "krama-inggil": "yoga",
    },
  },
  {
    aliases: { id: ["yogurt"], en: ["yogurt"], zh: ["酸奶"] },
    translation: {
      ngoko: "yogurt",
      krama: "yogurt",
      "krama-inggil": "yogurt",
    },
  },
  {
    aliases: { id: ["yudisium"], en: ["academic graduation assessment"], zh: ["毕业审核"] },
    translation: {
      ngoko: "yudisium",
      krama: "yudisium",
      "krama-inggil": "yudisium",
    },
  },
  {
    aliases: { id: ["yuk"], en: ["let's"], zh: ["走吧"] },
    translation: {
      ngoko: "ayo",
      krama: "mangga",
      "krama-inggil": "mangga",
    },
  },

  {
    aliases: { id: ["zaitun"], en: ["olive"], zh: ["橄榄"] },
    translation: {
      ngoko: "zaitun",
      krama: "zaitun",
      "krama-inggil": "zaitun",
    },
  },
  {
    aliases: { id: ["zakat"], en: ["almsgiving"], zh: ["天课"] },
    translation: {
      ngoko: "zakat",
      krama: "zakat",
      "krama-inggil": "zakat",
    },
  },
  {
    aliases: { id: ["zalim"], en: ["cruel"], zh: ["残忍"] },
    translation: {
      ngoko: "kejem",
      krama: "kejem",
      "krama-inggil": "kejem",
    },
  },
  {
    aliases: { id: ["zaman"], en: ["era", "time"], zh: ["时代"] },
    translation: {
      ngoko: "jaman",
      krama: "jaman",
      "krama-inggil": "jaman",
    },
  },
  {
    aliases: { id: ["zaman dahulu"], en: ["olden days"], zh: ["古时候"] },
    translation: {
      ngoko: "jaman biyen",
      krama: "jaman rumiyin",
      "krama-inggil": "jaman rumiyin",
    },
  },
  {
    aliases: { id: ["zamrud"], en: ["emerald"], zh: ["祖母绿"] },
    translation: {
      ngoko: "zamrud",
      krama: "zamrud",
      "krama-inggil": "zamrud",
    },
  },
  {
    aliases: { id: ["zat"], en: ["substance"], zh: ["物质"] },
    translation: {
      ngoko: "zat",
      krama: "zat",
      "krama-inggil": "zat",
    },
  },
  {
    aliases: { id: ["zat aditif"], en: ["additive"], zh: ["添加剂"] },
    translation: {
      ngoko: "zat aditif",
      krama: "zat aditif",
      "krama-inggil": "zat aditif",
    },
  },
  {
    aliases: { id: ["zat besi"], en: ["iron"], zh: ["铁"] },
    translation: {
      ngoko: "wesi",
      krama: "wesi",
      "krama-inggil": "wesi",
    },
  },
  {
    aliases: { id: ["zat cair"], en: ["liquid"], zh: ["液体"] },
    translation: {
      ngoko: "zat cair",
      krama: "zat cair",
      "krama-inggil": "zat cair",
    },
  },
  {
    aliases: { id: ["zat kimia"], en: ["chemical"], zh: ["化学物质"] },
    translation: {
      ngoko: "zat kimia",
      krama: "zat kimia",
      "krama-inggil": "zat kimia",
    },
  },
  {
    aliases: { id: ["zat padat"], en: ["solid"], zh: ["固体"] },
    translation: {
      ngoko: "zat padat",
      krama: "zat padat",
      "krama-inggil": "zat padat",
    },
  },
  {
    aliases: { id: ["zebra"], en: ["zebra"], zh: ["斑马"] },
    translation: {
      ngoko: "zebra",
      krama: "zebra",
      "krama-inggil": "zebra",
    },
  },
  {
    aliases: { id: ["zebra cross"], en: ["pedestrian crossing"], zh: ["人行横道"] },
    translation: {
      ngoko: "papan panyebrangan",
      krama: "papan panyebrangan",
      "krama-inggil": "papan panyebrangan",
    },
  },
  {
    aliases: { id: ["zodiak"], en: ["zodiac"], zh: ["黄道十二宫"] },
    translation: {
      ngoko: "zodiak",
      krama: "zodiak",
      "krama-inggil": "zodiak",
    },
  },
  {
    aliases: { id: ["zona"], en: ["zone"], zh: ["区域"] },
    translation: {
      ngoko: "zona",
      krama: "zona",
      "krama-inggil": "zona",
    },
  },
  {
    aliases: { id: ["zona waktu"], en: ["time zone"], zh: ["时区"] },
    translation: {
      ngoko: "zona wektu",
      krama: "zona wekdal",
      "krama-inggil": "zona wekdal",
    },
  },
  {
    aliases: { id: ["zoologi"], en: ["zoology"], zh: ["动物学"] },
    translation: {
      ngoko: "zoologi",
      krama: "zoologi",
      "krama-inggil": "zoologi",
    },
  },
  {
    aliases: { id: ["zoologis"], en: ["zoologist"], zh: ["动物学家"] },
    translation: {
      ngoko: "ahli zoologi",
      krama: "ahli zoologi",
      "krama-inggil": "ahli zoologi",
    },
  },
  {
    aliases: { id: ["zoom"], en: ["zoom"], zh: ["缩放", "视频会议"] },
    translation: {
      ngoko: "zoom",
      krama: "zoom",
      "krama-inggil": "zoom",
    },
  },
  {
    aliases: { id: ["zoom digital"], en: ["digital zoom"], zh: ["数码变焦"] },
    translation: {
      ngoko: "zoom digital",
      krama: "zoom digital",
      "krama-inggil": "zoom digital",
    },
  },
   
  {
    aliases: { id:[""], en:[""], zh:[""]},
    translation: { ngoko: "", krama: "", "krama-inggil": "",},
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
