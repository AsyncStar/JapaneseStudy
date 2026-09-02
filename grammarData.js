export const verbVowelChanges = {
        dictionary: [
            {endingKana: "る", result: "る"},
            {endingKana: "む", result: "む"}, {endingKana: "く", result: "く"},
            {endingKana: "ぐ", result: "ぐ"}, {endingKana: "ぶ", result: "ぶ"},
            {endingKana: "ぬ", result: "ぬ"}, {endingKana: "う", result: "う"},
            {endingKana: "つ", result: "つ"}],
        iRow: [
            {endingKana: "む", result: "み"}, {endingKana: "く", result: "き"},
            {endingKana: "ぐ", result: "ぎ"}, {endingKana: "ぶ", result: "び"},
            {endingKana: "ぬ", result: "に"}, {endingKana: "う", result: "い"},
            {endingKana: "つ", result: "ち"},

        ],
        aRow: [
            {endingKana: "る", result: "ら"},
            {endingKana: "む", result: "ま"}, {endingKana: "く", result: "か"},
            {endingKana: "ぐ", result: "が"}, {endingKana: "ぶ", result: "ば"},
            {endingKana: "ぬ", result: "な"}, {endingKana: "う", result: "わ"},
            {endingKana: "つ", result: "た"}],

        eRow: [

            {endingKana: "る", result: "れ"},
            {endingKana: "む", result: "め"}, {endingKana: "く", result: "け"},
            {endingKana: "ぐ", result: "げ"}, {endingKana: "ぶ", result: "べ"},
            {endingKana: "ぬ", result: "ね"}, {endingKana: "う", result: "え"},
            {endingKana: "つ", result: "て"}],


        eRowTeForm: [
            {endingKana: "る", ichidanResult: "られて", result: "れて"},
            {endingKana: "む", result: "めて"}, {endingKana: "く", result: "けて"},
            {endingKana: "ぐ", result: "げて"}, {endingKana: "ぶ", result: "べて"},
            {endingKana: "ぬ", result: "ねて"}, {endingKana: "う", result: "えて"},
            {endingKana: "つ", result: "てて"}],

        teForm: [
            {endingKana: "る", result: "って"},
            {endingKana: "む", result: "んで"}, {endingKana: "く", result: "いて"},
            {endingKana: "ぐ", result: "いで"}, {endingKana: "ぶ", result: "んで"},
            {endingKana: "ぬ", result: "んで"}, {endingKana: "う", result: "って"},
            {endingKana: "つ", result: "って"}
        ],
}


export const masuChanges = {
    past: {
        affirmative: "ました",
        negative:  "ませんでした",
    },

    present: {
        affirmative: "ます",
        negative:  "ませせん",
    }
}



    export const adjConjugations = {

    adjectives: {
        present: {
            polite: {
                iAdj: {
                    affirmative: [{endingKana: "い", result: "いです"}], negative: [{endingKana: "な", result: "です"}],
                },
                naAdj: {
                    affirmative: [{endingKana: "", result: ""}], negative: [{endingKana: "", result: ""}], },
            },

            short: {
                iAdj: {
                    affirmative: [{endingKana: "い", result: "いです"}],  negative: [{endingKana: "な", result: "です"}],
                },
                naAdj: {
                    affirmative: [{endingKana: "", result: ""}], negative: [{endingKana: "", result: ""}], },
            }
        },

        past: {
            polite: {
                iAdj: {
                    affirmative: [{endingKana: "い", result: "いです"}], negative: [{endingKana: "な", result: "です"}],
                },
                naAdj: {
                    affirmative: [{endingKana: "", result: ""}], negative: [{endingKana: "", result: ""}], },
            },

            short: {
                iAdj: {
                    affirmative: [{endingKana: "い", result: "いです"}],  negative: [{endingKana: "な", result: "です"}],
                },
                naAdj: {
                    affirmative: [{endingKana: "", result: ""}], negative: [{endingKana: "", result: ""}], },
            }
        },

    }
};
