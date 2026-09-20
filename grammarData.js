

export const particles = [
    { front: "を", meaning:"Object ", reading: "",  info: "",  note: ""},
    { front: "が", meaning:"Subject; emphasis", reading: "",  info: "",  note: ""},
    { front: "で", meaning:"1) By means of... 2) Direction ", reading: "",  info: "", note: ""},
    { front: "に", meaning:"1) Location 2) Time (can also be here)",reading: "",  info: "",  note: ""},
    { front: "へ", meaning:"Direction", reading: "", info: "",  note: ""},
    { front: "と", meaning:"Co-participant", reading: "", info: "",  note: ""},
    { front: "まで", meaning:"End-point", reading: "",  info: "", note: ""},
    { front: "から", meaning:"Origin", reading: "",  info: "", note: ""},
    { front: "なら", meaning:"Only", reading: "",  info: "", note: "X (noun)なら Y (predicate)"},

]


export const sentenceEndings = [
    { front: "んです",  meaning:"", info: "Explanation", note: "", reading: "", },
    { front: "すぎる", meaning:"", info: "Too much/excess", note: "(adj stem/verb masu stem) すぎる", reading: "",},
    { front: "だはうがいいです",  meaning:"", info: "It's better to do...", note: "", reading: "",},
    { front: "ないはういです",  meaning:"", info: "It's better not to do...", note: "", reading: "", },
    { front: "なけれはいけません",  meaning:"",  info: "You must", note: "", reading: "", },
    { front: "なきゃけません",   meaning:"", info: "You must (polite)", note: "", reading: "", },
]

export const sentenceEndingDesire = [
    { front: "ましょう（か）",  meaning:"", info: "Let's... / Let me do...", note: "", reading: "",},
    { front: "つもりです",  meaning:"", info: "Intend to do", note: "" , reading: "",},
    { front: "つもりでした",  meaning:"", info: "Intend not to do", note: "", reading: "", },
    { front: "たい",  meaning:"", info: "Want", note: "", reading: "",},
]

export const sentenceEndingProbability = [
    { front: "でしょう（か）",  meaning:"", info: "Probably / guessing", note: "", reading: "",},
]

export const sentenceEndingState = [
    { front: "ている",  meaning:"", info: "(verb) in progress or result of (verb) change", note: "", reading: "", },
    { front: "てだった",  meaning:"", info: "Have not... yet", note: "", reading: "", },
    { front: "ことがある",  meaning:"", info: "Did / Happened earlier", note: "", reading: "", },
    { front: "(て)みる",  meaning:"Trying", info: "", note: "て-form + みる ", reading: "", },

]

export const sentenceEndingPermission = [
    { front: "てもいいです（か）",  meaning:"", info: "You may do / May I?", note: "", reading: "", },
    { front: "てください",  meaning:"", info: "Please do...", note: "", reading: "", },
    { front: "ないでください", meaning:"", info: "Please don't...", note: "", reading: "", },

]

export const sentenceConnector = [
    { front: "〜たり、たり",  meaning:"", info: "I did this and that (examples)" , note:  "(verb short,past)り、(verb short, past)り (する or other helper verb to end or connect clause)。" },
    { front: "(て)、(ます)", meaning:"", info: "I did this and that (exclusively)", note: "...(Verbて)、(Verb end)。" },
    { front: "でも",  meaning:"",info: "Or; But", note: "Place at beginning of following sentence." },
    { front: "〜が、",  meaning:"", info: "But", note: "" },
    { front: "から・ので",  meaning:"", info: "Because", note: "(reason) short + から・ので、(because). " },
    { front: "だから",  meaning:"", info: "So; Therefore", note: "Place at beginning of following sentence." },
    { front: "そして",  meaning:"", info: "And", note: "Place at beginning of following sentence." },
    { front: "それに",  meaning:"",info: "In addition; moreover", note: "Place at beginning of following sentence." },
]

export const aSoKoSeries = [
    { front: "これ",  meaning:"", info: "", note: "", reading: ""},
    { front: "それ", meaning:"", info: "", note: "", reading: ""},
    { front: "あれ",  meaning:"",info: "", note: "", reading: ""},
    { front: "この",  meaning:"",info: "", note: "", reading: ""},
    { front: "その", meaning:"", info: "", note: "", reading: ""},
    { front: "あの",  meaning:"",info: "", note: "", reading: ""},
    { front: "ここ", meaning:"", info: "", note: "", reading: "",},
    { front: "そこ",  meaning:"",info: "", note: "", reading: "",},
    { front: "あそこ",  meaning:"",info: "", note: "", reading: "",},
]

export const questionWords = [
    { front: "何", reading: "なに・なん", meaning: "What" , info: "なん - Before a counter or です ・　なに before a particle", note: "", lesson: "1"},
    { front: "いくら", meaning: "How much?" , info: "", note: "",  lesson: "2"},
    { front: "どうですか", meaning: "How about?" , info: "", note: "",  lesson: "10"},
    { front: "どうして", meaning: "Why?", info: "", note: "",  lesson: "4"},
    { front: "どんな", meaning: "What kind of?" ,  info: "", note: "", lesson: "5"},
    { front: "ほんどうですか", meaning: "Really?",  info: "", note: "", lesson: "6" },
    { front: "どう", meaning: "How" ,  info: "", note: "", lesson: "8" },
    { front: "どっち・どちら", meaning: "Which" , info: "", note: "",  lesson: "10"},
    { front: "どうやって", meaning: "How; by what means", info: "", note: "",  lesson: "10"},
    { front: "どのくらい", meaning: "How much; how long" ,  info: "", note: "", lesson: "10"}
]


export const somethingAnything = [
    { front: "何か", reading: "なにか", meaning: "Something" , info: "", note: "",  lesson: "10"},
    { front: "何も", reading: "なにも", meaning: "Not anything" , info: "", note: "",  lesson: "1"},
    { front: "だれか", reading: "", meaning: "Someone" , info: "", note: "",  lesson: "1"},
    { front: "だれも", reading: "", meaning: "Not anyone" ,   info: "", note: "", lesson: "1"},
    { front: "どこか", reading: "", meaning: "Somewhere" ,  info: "", note: "",  lesson: "1"},
    { front: "どこも", reading: "", meaning: "Not anywhere" , info: "", note: "",  lesson: "10"},
    { front: "どこかに", reading: "", meaning: "To somewhere" , info: "", note: "",  lesson: "10"},
    { front: "どこかへ", reading: "", meaning: "To somewhere" ,  info: "", note: "", lesson: "10"},
    { front: "どこへも", reading: "", meaning: "Not anywhere" ,  info: "", note: "", lesson: "10"}
]

export const locationWords = [
    { front: "右", reading: "みぎ", meaning: "right (〜の)",  info: "", note: "",  lesson: "4"},
    { front: "左", reading: "ひだり", meaning: "left (〜の)",  info: "", note: "",  lesson: "4"},
    { front: "前", reading: "まえ",  meaning: "front (〜の)",  info: "", note: "",  lesson: "4",},
    { front: "後ろ", reading: "うしろ",  meaning: "back; behind (〜の)",   info: "", note: "", lesson: "4" },
    { front: "中", reading: "なか",  meaning: "inside (〜の)",   info: "", note: "", lesson: "4"},
    { front: "上", reading: "うえ",  meaning: "on (〜の)",  info: "", note: "",  lesson: "4" },
    { front: "下", reading: "した",  meaning: "under (〜の)",  info: "", note: "",  lesson: "4"},
    { front: "近く", reading: "ちかく",  meaning: "near; nearby (〜の)",   info: "", note: "", lesson: "4" },
    { front: "となり", reading: "next (〜の)", meaning: "",  info: "", note: "",  lesson: "4"},
    { front: "間", reading: "あいだ",  meaning: "between (A と B の) ",  info: "", note: "", lesson: "4" },
    { front: "", reading: "", meaning: "", info: "", note: "",  lesson: ""},
    { front: "", reading: "",  meaning: "", info: "", note: "",  lesson: "4"},
]
