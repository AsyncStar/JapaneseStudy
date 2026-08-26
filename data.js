
export const structureAny = [
    { front: "を", back:"Object"},  { front: "が", back:"Subject; emphasis"},
    { front: "で", back:"1) By means of... 2) Direction "},  { front: "に", back:"1) Location 2) Time (can also be here)"},
    { front: "へ", back:"Direction"},  { front: "と", back:"Co-participant"},
    { front: "まで", back:"End-point"},  { front: "から", back:"Origin"},
    { front: "Adverb", back:""},
]

export const structureEnding = [
    { front: "〜たり、たり", meaning: "I did this and that (examples)" , guide:  "(verb short,past)り、(verb short, past)り (する or other helper verb to end or connect clause)" },
    { front: "て、ます", meaning: "I did this and that (exclusively)", guide: "...(Verbて)、(Verb end)" },
    { front: "でも", meaning: "Or; But", guide: "Place at beginning of following sentence" },
    { front: "〜が、", meaning: "", guide: "" },
    { front: "から・ので", meaning: "", guide: "" },
    { front: "たから", meaning: "", guide: "" },
    { front: "そして", meaning: "", guide: "" },
    { front: "それに", meaning: "", guide: "" },

    { front: "んです", meaning: "Explanation", guide: "" },
    { front: "でしょう（か）", meaning: "Probably / guessing", guide: "" },
    { front: "ましょう（か）", meaning: "Let's... / Let me do...", guide: "" },
    { front: "てもいいです（か）", meaning: "You may do / May I?", guide: "" },
    { front: "てください", meaning: "Please do...", guide: "" },
    { front: "ないでください", meaning: "Please don't...", guide: "" },
    { front: "つもりです", meaning: "Intend to do", guide: "" },
    { front: "つもりでした", meaning: "Intend not to do", guide: "" },
    { front: "ことがある", meaning: "Did / Happened earlier", guide: "" },
    { front: "たい", meaning: "Want", guide: "" },
    { front: "だはうがいいです", meaning: "It's better to do...", guide: "" },
    { front: "ないはういです", meaning: "It's better not to do...", guide: "" },
    { front: "なけれはいけません", meaning: "You must", guide: "" },
    { front: "なきゃけません", meaning: "You must (polite)", guide: "" },
    { front: "ている", meaning: "(verb) in progress or result of (verb) change", guide: "" },
    { front: "てだった", meaning: "Have not... yet", guide: "" },
]

export const sentencePatterns = [
    { front: "Where things are", back: "Xは(location word)のです" },
    { front: "Describing appearance", back: "Aさんは(body part)が(adjective)" },
    { front: "Contrasting like & dislike", back: "(Object)はlike/dislikeが(object)は..."},
    { front: "Neutral (like nor dislike)", back: "好きでもきらいないです"},
    { front: "I like doing... / I'm good at doing...", back: "(Verb short dictionary)のが(好き/上手)です。" },
    { front: "Counting people", back: "PlaceにはがX人(じん)います。"},
    { front: "To become...", back: "(Adverbial adjective)/(noun)なる"}
]

export const grammarNotes = [
    { front: "Counting", back: "(Item) (Number)(Counter)"},
    { front: "Adjective adverbial form", back: "な-adj replace　な with に |い-adj swap い with く"},
    { front: "Adjective noun modification", back: "(な-adj keep な) (noun) |(い-adj dictionary) (noun)"},
    { front: "Adjective verb modification", back: "(Adverbial adjective) (verb)"}
]

export const aSoKoSeries = [
    { front: "これ", back: ""},   { front: "それ", back: ""},   { front: "あれ", back: ""},
    { front: "この", back: ""},   { front: "その", back: ""},   { front: "あの", back: ""},
    { front: "ここ", back: ""},   { front: "そこ", back: ""},   { front: "あそこ", back: ""},
]

export const questionWords = [
    { front: "何", reading: "なに・なん", back: "なん - Before a counter or です ・　なに before a particle" , lesson: "1"},
    { front: "いくら", back: "How much?" , lesson: "2"},   { front: "どうですか", back: "How about?" , lesson: "10"},   { front: "どうして", back: "Why?", lesson: "4"},
    { front: "どんな", back: "What kind of?" , lesson: "5"},   { front: "ほんどうですか", back: "Really?", lesson: "6" },   { front: "どう", back: "How" , lesson: "8" },
    { front: "どっち・どちら", back: "Which" , lesson: "10"},   { front: "どうやって", back: "How; by what means", lesson: "10"},
    { front: "どのくらい", back: "How much; how long" , lesson: "10"}
]

export const somethingAnythingSeries = [
    { front: "何か", reading: "なにか", back: "" , lesson: "10"}, { front: "何も", reading: "なにも", back: "" , edition: "1"},
    { front: "だれか", reading: "", back: "" , edition: "1"}, { front: "だれも", reading: "", back: "" , edition: "1"},
    { front: "どこか", reading: "", back: "" , edition: "1"}, { front: "どこも", reading: "", back: "" , lesson: "10"},
    { front: "どこかに", reading: "", back: "" , lesson: "10"}, { front: "どこかへ", reading: "", back: "" , lesson: "10"},
    { front: "どこへも", reading: "", back: "" , lesson: "10"}, { front: "", reading: "", back: "" , lesson: "10"},
    { front: "", reading: "", back: "" , lesson: "10"}, { front: "", reading: "", back: "" , lesson: "10"} ,
    { front: "", reading: "", back: "" , lesson: "10"}, { front: "", reading: "", back: "" , lesson: "10"},
]

export const locationWords = [
    { front: "右", reading: "みぎ", back: "", lesson: "4"}, { front: "左", reading: "ひだり", back: "", lesson: "4"},
    { front: "前", reading: "まえ",  back: "", lesson: "4",}, { front: "後ろ", reading: "うしろ",  back: "", lesson: "4" },
    { front: "中", reading: "なか",  back: "", lesson: "4"}, { front: "上", reading: "うえ",  back: "", lesson: "4" },
    { front: "下", reading: "した",  back: "", lesson: "4"}, { front: "近く", reading: "ちかく",  back: "", lesson: "4" },
    { front: "となり", reading: "", back: "", lesson: "4"}, { front: "間", reading: "あいだ",  back: "", lesson: "4" },
    { front: "", reading: "", back: "", lesson: ""}, { front: "", reading: "",  back: "", lesson: "4"},
]

export const timeCounters = [
    { front: "月", reading: "がつ", back: "", genki: "1"},
    { front: "時", reading: "じ", back: "", genki: "1"}, { front: "時間", reading: "じかん", back: "", genki: "1"},
    { front: "年", reading: "ねん", back: "", genki: "1"}, { front: "年間", reading: "ねんかん", back: "", genki: "1"},
]


// ================ VERB DATA ====================
export const functionVerbs = [
    { front: "来る", reading: "くる", back: "To come"}, { front: "する", reading: "", back: "To do"},
    { front: "やる", reading: "", back: "To do (rougher)"}, { front: "使う", reading: "つかう", back: "To use"},
    { front: "いる", reading: "", back: "To need"}, { front: "連れて来る", reading: "つれて くる", back: "To bring (a person)"},
    { front: "持って来る", reading: "もって くる", back: "To bring (a thing)"},　{ front: "作る", reading: "つくる", back: "To make"},
    { front: "見る", reading: "みる", back: "To see; watch; look at"},{ front: "持っていく", reading: "も・っていく", back: "To take (something)"},　{ front: "もちう", reading: "", back: "To get (from somebody)"},
    { front: "かかる", reading: "", back: "To take (amount of time/money)"},　{ front: "はじまる", reading: "", back: "To begin"},　{  front: "おわる", reading: "", back: "To end"},
]

export const communicationVerb = [
    { front: "聞く", reading: "きく", back: "To hear; listen; ask"}, { front: "話す", reading: "はなす", back: "To speak"},　{ front: "言う", reading: "いう", back: "To say"},
    { front: "わかる", reading: "", back: "To understand"},　{ front: "知る", reading: "しる", back: "To know"}, { front: "しょうかいする",  reading: "", back: "To introduce"},
    { front: "うそをうく", reading: "", back: "To tell a lie"}, { front: "電話する", reading: "でんわする", back: "To call"},
]

export const movementVerb = [
    { front: "行く", reading: "いく", back: "To go"}, { front: "帰る", reading: "かえる", back: "To go back"}, { front: "出かける", reading: "でかける", back: "To go out"},
    { front: "ある", reading: "", back: "To walk"},　{ front: "はしる", reading: "", back: "To run"}, { front: "はいる", reading: "", back: "To enter"},
    { front: "出る", reading: "でる", back: "To exit"}, { front: "のる", reading: "", back: "To ride; board"},　{ front: "すわる", reading: "", back: "To sit down"},
    { front: "立つ", reading: "たつ", back: "To stand up"}, { front: "起きる", reading: "おきる", back: "To get up"}, { front: "おりる", reading: "", back: "To get off"}
]

export const dailyRoutineVerbs = [
    { front: "住む", reading: "すむ", back: "To live"}, { front: "働く", reading: "はたらく", back: "To work"},
    { front: "そうじする", reading: "", back: "To clean"}, { front: "シャワーおあびる", reading: "", back: "To take a shower"},
    { front: "おふろいはいる", reading: "", back: "To take a bathe"}, { front: "あらう", reading: "", back: "To wash"},
    { front: "せんたくする", reading: "", back: "To do laundry"}, { front: "おそくなる", reading: "", back: "To be late"},
    { front: "ねる", reading: "", back: "To sleep"}, { front: "かぶる", reading: "",back: "To put on (hat/headpiece)"},
    { front: "はく",reading: "", back: "To put on (items below waist)"}, { front: "めがねをかける", reading: "",back: "To put on (glasses)"},
    { front: "きる", back: "To put on (clothes above your waist)"}, { front: "食べる", reading: "た・べる", back: "To eat"},
    { front: "飲む", reading: "のむ", back: "To drink"}, { front: "くすりをのむ", reading: "",back: "To take medicine"},
    { front: "おなかがすく", reading: "",back: "To become hungry"}, { front: "のどがかわく", reading: "",back: "To become thirsty"},
    { front: "りょうりする",reading: "", back: "To cook"}
]

export const learningVerbs = [
    { front: "ならう", reading: "", back: "To learn"}, { front: "勉強する", reading: "べんきょうする", back: "To study"},
    { front: "れんしゅうする",reading: "", back: "To practice"}, { front: "おしえる", reading: "",back: "To teach; instruct"},
    { front: "とる", reading: "",back: "To take (a class); to get (a grade)"}, { front: "サボる",reading: "", back: "To cut (classes)"},

]

export const feelingVerb = [
    { front: "きんちょうする", reading: "", back: "To get nervous"}, { front: "しんぱいする", reading: "", back: "To worry"},
    { front: "きょうみがある", reading: "", back: "To be interested in"}

]

export const commonActionVerbs = [
    { front: "読む", reading: "よむ", back: "To read"}, { front: "買う", reading: "かう", back: "To buy"},
    { front: "書く", reading: "かく", back: "To write"}, { front: "働く", reading: "はたらく", back: "To work"},
    { front: "歌う", reading: "うたう", back: "To sing"}, { front: "とる", reading: "", back: "To take (a picture)"},
    { front: "会う", reading: "あう", back: "To meet; see (a person)"}, { front: "休む",　reading: "やすむ", back: "To rest; take a break; be absent"},
    { front: "まつ", reading: "", back: "To wait"}, { front: "でつたう",reading: "", back: "To help"},
    { front: "やめる",reading: "", back: "To quit"}, {front: "いそぐ", reading: "",back: "To hurry" }, { front: "わすれる", reading: "",back: "To forget; to leave behind"},
    { front: "ふとる", reading: "",back: "To gain weight"}, { front: "やせる", reading: "", back: "To lose weight"},
]

export const interactionVerbs = [
    { front: "かりる",reading: "",back: "To borrow"}, { front: "持つ", reading: "もつ", back: "To carry; hold"},
    { front: "かえす", reading: "", back: "To borrow"}, { front: "あける", reading: "", back: "To open (something)"},
    { front: "しめる", reading: "", back: "To close (something)"}, { front: "つける", reading: "", back: "To turn on"},
    { front: "けす", reading: "", back: "To turn off"}, { front: "すてる",reading: "", back: "To throw away"},
]

export const highFreqAdjectives = [
    { front: "いい",reading: "",back: "Good"}, { front: "わるい", reading: "", back: "Bad"},
    { front: "かんたんな",reading: "",back: "Easy; simple"}, { front: "むずかしい", reading: "", back: "Difficult"},
    { front: "はやい",reading: "",back: "Fast"}, { front: "おそい", reading: "", back: "Slow; late"},
    { front: "あまい",reading: "",back: "Sweet"}, { front: "すてきな", reading: "", back: "Nice"},
    { front: "たのしい",reading: "",back: "Fun"}, { front: "いたい", reading: "", back: "Hurt; painful"}
]

export const feelingAdjectives = [
    { front: "おもしろい",reading: "",back: "Interesting; funny"}, { front: "つまらない", reading: "", back: "Boring"},
    { front: "ねむい",reading: "",back: "Sleepy"}, { front: "こわい", reading: "", back: "Frightening"},
    { front: "べんりな",reading: "",back: "Convenient"}, { front: "好きな", reading: "すきな", back: "To like"},
    { front: "きらい",reading: "",back: "To dislike"}, { front: "大好きな", reading: "だいすきな", back: "To love"},
    { front: "大きらい",reading: "",back: "To hate"}, { front: "たいへんな", reading: "", back: "Tough (situation)"},
    { front: "さびしい",reading: "",back: "Lonely"}
]

export const propertiesAdjectives = [
    { front: "あつい",reading: "",back: "Hot (weather; thing)"}, { front: "さむい", reading: "", back: "Cold (weather)"},
    { front: "すずしい",reading: "",back: "Cool (weather)"}, { front: "あたたかしい", reading: "もつ", back: "Warm"},
    { front: "つめたい",reading: "",back: "Cold (things; personality)"}, { front: "あたらし", reading: "", back: "New"},
    { front: "ふるい",reading: "",back: "Old (thing)"}, { front: "大", reading: "おおきい", back: "Large"},
    { front: "小さい",reading: "ちいさい",back: "Small"}, { front: "せまい", reading: "", back: "Narrow; not spacious"},
    { front: "ひろい",reading: "",back: "Wide; spacious"}, { front: "やすい", reading: "", back: "Inexpensive; cheap (thing)"},
    { front: "高い",reading: "たかい",back: "Expensive; high"}, { front: "いそがしい", reading: "", back: "Busy (people/day)"},
    { front: "ひま",reading: "",back: "Not busy; free (time)"}
]

export const opinionAdjectives = [
    { front: "はやい",reading: "",back: "Early"}, { front: "しずがな", reading: "", back: "Quiet"},
    { front: "にぎやかあ",reading: "",back: "Lively"}, { front: "元気", reading: "げんき", back: "Healthy; energetic; fine (mood/health)"},
    { front: "きれいな",reading: "",back: "Beautiful; clean"}, { front: "かわいい", reading: "", back: "Cute"},
    { front: "しんせつな",reading: "",back: "Kind"}, { front: "いじわるな", reading: "", back: "Mean-spirited"},
    { front: "わかい",reading: "",back: "Young"}, { front: "あたまがいい", reading: "", back: "Bright; smart; clever"}

]

// ================ NOUN DATA ================================

export const livingBeings = [
    { front: "自分",reading: "じぶん",back: "Oneself; myself"}, { front: "男の人", reading: "おとこのひと", back: "Man"},
    { front: "女の人",reading: "おんなのひと",back: "Woman"}, { front: "いめ", reading: "", back: "Dog"},
    { front: "人",reading: "ひと",back: "Person"}, { front: "子供", reading: "こども", back: "Child"}
]

export const commonPlaces = [
    { front: "ぎんこう",reading: "",back: "Bank"}, { front: "コンビニ", reading: "", back: "Convenience store"},
    { front: "としょかん",reading: "",back: "Library"}, { front: "ゆうびんきょうく", reading: "", back: "Post office"},
    { front: "こうえん",reading: "",back: "Park"}, { front: "スーパー", reading: "", back: "Supermarket"},
    { front: "ブスてい",reading: "",back: "Bus stop"}, { front: "病院", reading: "びょういん", back: "Hospital"},
    { front: "ホテル",reading: "",back: "Hotel"}, { front: "本や", reading: "ほんや", back: "Bookstore"},
    { front: "待ち",reading: "まち",back: "Town; city"}, { front: "道", reading: "みち", back: "Way; road"},
    { front: "レストラン",reading: "",back: "Restaurant"}, { front: "しょくどう", reading: "", back: "Cafeteria"},
    { front: "デパート",reading: "",back: "Department store"}, { front: "近所", reading: "きんじょう", back: "Neighborhood"},
    { front: "トイレ",reading: "",back: "Toilet; restroom"}
]

export const commonObjects = [
    { front: "じてんしゃ",reading: "",back: "Bicycle"}, { front: "ノート", reading: "", back: "Notebook"},
    { front: "本",reading: "ほん",back: "Book"}, { front: "映画", reading: "えいが", back: "Movie"},
    { front: "おんがう",reading: "",back: "Music"}, { front: "お金", reading: "おかね", back: "Money"}

]

export const householdFurniture = [
    { front: "へや",reading: "",back: "Room"}, { front: "家", reading: "いえ・うち", back: "Home"},
    { front: "シャフー",reading: "",back: "Shower"}, { front: "まど", reading: "", back: "Window"},
    { front: "いす",reading: "",back: "Chair"}, { front: "つくえ", reading: "", back: "Desk"}
]

export const clothingAccessories = [
    { front: "ふく",reading: "",back: "Clothes"}, { front: "Tシャツ ", reading: "", back: "T-shirt"},
    { front: "ジーンス",reading: "",back: "Jeans"}, { front: "さいふ", reading: "", back: "Wallet"},
    { front: "くつ",reading: "",back: "Shoes"}, { front: "かばん", reading: "", back: "Bag"},
    { front: "かさ",reading: "",back: "Umbrella"}, { front: "ぼうし", reading: "", back: "Hat"},
    { front: "めがね",reading: "",back: "Glasses"}
]

export const Technology = [
    { front: "スマホ" ,reading: "",back: "Smartphone; mobile"}, { front: "パンコン", reading: "", back: "Personal computer"},
    { front: "テレビ",reading: "",back: "TV"}, { front: "とけい", reading: "", back: "Watch; clock"},
    { front: "アイコン",reading: "",back: "Air conditioner"}, { front: "電気", reading: "でんき", back: "Light; electricity"},
    { front: "メール",reading: "",back: "Email"}
]

export const Weather = [
    { front: "天気",reading: "てんき",back: "Weather"},{ front: "天気よまう", reading: "てんきよまう", back: "Weather forecast"},  { front: "はれ", reading: "", back: "Sunny weather"},
    { front: "雨",reading: "あめ",back: "Rain"}, { front: "くもり", reading: "", back: "Cloudy weather"},
    { front: "雪",reading: "ゆき",back: "Snow"}, { front: "きおん",reading: "",back: "Temperature"},
    { front: "きせつ", reading: "", back: "Season"}, { front: "なつ", reading: "", back: "Summer"},
    { front: "冬",reading: "ふゆ",back: "Winter"}, { front: "はる",reading: "Spring",back: ""},
    { front: "あき", reading: "", back: "Fall"}
]

export const Body = [
    { front: "かお",reading: "",back: "Face"}, { front: "くち", reading: "", back: "Mouth"},
    { front: "め",reading: "",back: "Eye"}, { front: "おなか", reading: "", back: "Stomach"},
    { front: "あし",reading: "",back: "Leg; foot"}, { front: "のど", reading: "", back: "Throat"},
    { front: "は",reading: "",back: "Tooth"}, { front: "かみ", reading: "", back: "Face"}
]

export const Transportation = [
    { front: "さかてつ",reading: "",back: "Subway"}, { front: "ふね", reading: "", back: "Ship; boat"},
    { front: "ひこうき",reading: "",back: "Airplane"}, { front: "ブス", reading: "", back: "Bus"}

]

export const Abstract = [
    { front: "しょうらい",reading: "",back: "Future (personal, subjective)"}, { front: "ゆめ", reading: "", back: "Dream"},
    { front: "せいがつ",reading: "",back: "Life; living"}, { front: "たんじょうび", reading: "", back: "Birthday"}

]

export const WorkSchool = [
    { front: "せいさき",reading: "",back: "Grade (on a test, ect)"}, { front: "じゅきょう", reading: "", back: "Class"},
    { front: "しごと",reading: "",back: "Job; work"}, { front: "アイルバイト>", reading: "", back: "Part-time job"},
]

export const Activities = [
    { front: "ゲーム",reading: "",back: "Game"}, { front: "かいもの", reading: "", back: "Shopping"},
    { front: "あさごはん",reading: "",back: "Breakfast"}, { front: "ひろごはん", reading: "", back: "Lunch"},
    { front: "ばんごはん",reading: "",back: "Dinner"}
]