export const particles = [
    { front: "を", meaning:"Object ",  note: ""},  { front: "が", meaning:"Subject; emphasis",  note: ""},
    { front: "で", meaning:"1) By means of... 2) Direction ", note: ""},  { front: "に", meaning:"1) Location 2) Time (can also be here)",  note: ""},
    { front: "へ", meaning:"Direction",  note: ""},  { front: "と", meaning:"Co-participant",  note: ""},
    { front: "まで", meaning:"End-point",  note: ""},  { front: "から", meaning:"Origin",  note: ""},

]


export const sentenceEndings = [
    { front: "んです", info: "Explanation", note: "", reading: "", },



    { front: "すぎる", info: "Too much/excess", note: "(adj stem/verb masu stem) すぎる", reading: "",},
    { front: "だはうがいいです", info: "It's better to do...", note: "", reading: "",},
    { front: "ないはういです", info: "It's better not to do...", note: "", reading: "", },
    { front: "なけれはいけません", info: "You must", note: "", reading: "", },
    { front: "なきゃけません", info: "You must (polite)", note: "", reading: "", },
]

export const sentenceEndingDesire = [
    { front: "ましょう（か）", info: "Let's... / Let me do...", note: "", reading: "",},
    { front: "つもりです", info: "Intend to do", note: "" , reading: "",},
    { front: "つもりでした", info: "Intend not to do", note: "", reading: "", },
    { front: "たい", info: "Want", note: "", reading: "",},
]

export const sentenceEndingProbability = [
    { front: "でしょう（か）", info: "Probably / guessing", note: "", reading: "",},
]

export const sentenceEndingState = [
    { front: "ている", info: "(verb) in progress or result of (verb) change", note: "", reading: "", },
    { front: "てだった", info: "Have not... yet", note: "", reading: "", },
    { front: "ことがある", info: "Did / Happened earlier", note: "", reading: "", },

]

export const sentenceEndingPermission = [
    { front: "てもいいです（か）", info: "You may do / May I?", note: "", reading: "", },
    { front: "てください", info: "Please do...", note: "", reading: "", },
    { front: "ないでください", info: "Please don't...", note: "", reading: "", },

]

export const sentenceConnector = [
    { front: "〜たり、たり", info: "I did this and that (examples)" , note:  "(verb short,past)り、(verb short, past)り (する or other helper verb to end or connect clause)。" },
    { front: "(て)、(ます)", info: "I did this and that (exclusively)", note: "...(Verbて)、(Verb end)。" },
    { front: "でも", info: "Or; But", note: "Place at beginning of following sentence." },
    { front: "〜が、", info: "But", note: "" },
    { front: "から・ので", info: "Because", note: "(reason) short + から・ので、(because). " },
    { front: "だから", info: "So; Therefore", note: "Place at beginning of following sentence." },
    { front: "そして", info: "And", note: "Place at beginning of following sentence." },
    { front: "それに", info: "In addition; moreover", note: "Place at beginning of following sentence." },
]

export const aSoKoSeries = [
    { front: "これ", info: "", note: "", reading: ""},   { front: "それ", info: "", note: "", reading: ""},
    { front: "あれ", info: "", note: "", reading: ""}, { front: "この", info: "", note: "", reading: ""},
    { front: "その", info: "", note: "", reading: ""},   { front: "あの", info: "", note: "", reading: ""},
    { front: "ここ", info: "", note: "", reading: "",},   { front: "そこ", info: "", note: "", reading: "",},
    { front: "あそこ", info: "", note: "", reading: "",},
]

export const questionWords = [
    { front: "何", reading: "なに・なん", back: "なん - Before a counter or です ・　なに before a particle" , lesson: "1"},
    { front: "いくら", back: "How much?" , lesson: "2"},   { front: "どうですか", back: "How about?" , lesson: "10"},   { front: "どうして", back: "Why?", lesson: "4"},
    { front: "どんな", back: "What kind of?" , lesson: "5"},   { front: "ほんどうですか", back: "Really?", lesson: "6" },   { front: "どう", back: "How" , lesson: "8" },
    { front: "どっち・どちら", back: "Which" , lesson: "10"},   { front: "どうやって", back: "How; by what means", lesson: "10"},
    { front: "どのくらい", back: "How much; how long" , lesson: "10"}
]


export const somethingAnything = [
    { front: "何か", reading: "なにか", back: "Something" , lesson: "10"}, { front: "何も", reading: "なにも", back: "Not anything" , edition: "1"},
    { front: "だれか", reading: "", back: "Someone" , edition: "1"}, { front: "だれも", reading: "", back: "Not anyone" , edition: "1"},
    { front: "どこか", reading: "", back: "Somewhere" , edition: "1"}, { front: "どこも", reading: "", back: "Not anywhere" , lesson: "10"},
    { front: "どこかに", reading: "", back: "To somewhere" , lesson: "10"}, { front: "どこかへ", reading: "", back: "To somewhere" , lesson: "10"},
    { front: "どこへも", reading: "", back: "Not anywhere" , lesson: "10"}
]

export const locationWords = [
    { front: "右", reading: "みぎ", back: "right (〜の)", lesson: "4"}, { front: "左", reading: "ひだり", back: "left (〜の)", lesson: "4"},
    { front: "前", reading: "まえ",  back: "front (〜の)", lesson: "4",}, { front: "後ろ", reading: "うしろ",  back: "back; behind (〜の)", lesson: "4" },
    { front: "中", reading: "なか",  back: "inside (〜の)", lesson: "4"}, { front: "上", reading: "うえ",  back: "on (〜の)", lesson: "4" },
    { front: "下", reading: "した",  back: "under (〜の)", lesson: "4"}, { front: "近く", reading: "ちかく",  back: "near; nearby (〜の)", lesson: "4" },
    { front: "となり", reading: "next (〜の)", back: "", lesson: "4"}, { front: "間", reading: "あいだ",  back: "between (A と B の) ", lesson: "4" },
    { front: "", reading: "", back: "", lesson: ""}, { front: "", reading: "",  back: "", lesson: "4"},
]
