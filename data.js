export const sentencePatterns = [
    { front: "Where things are", back: "Xは(location word)のです" },
    { front: "Describing appearance", back: "Aさんは(body part)が(adjective)" },
    { front: "I did this and that (ordered & exclusive)", back:"...(Verbて)、(Verb end)" },
    { front: "I did this and that (examples)", back: "(verb short,past)り、(verb short, past)り (する or other helper verb) (end or connect clause)"},
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

export const functionVerbs = [
    ]

export default {sentencePatterns, grammarNotes};