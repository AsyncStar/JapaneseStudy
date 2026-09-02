export const verbConjugations = {
    standard: {
        present: {
            polite: {
                affirmative: [
                    {endingKana: "る", result: "Ichidan: ます | Godan: ります"},
                    {endingKana: "む", result: "みます"}, {endingKana: "く", result: "きます"},
                    {endingKana: "ぐ", result: "ぎます"}, {endingKana: "ぶ", result: "びます"},
                    {endingKana: "ぬ", result: "にます"}, {endingKana: "う", result: "います"},
                    {endingKana: "つ", result: "ちます"},
                ],
                negative: [
                    {endingKana: "る", ichidanResult: "ません", godanResult: "りません"},
                    {endingKana: "む", result: "みません"}, {endingKana: "く", result: "きません"},
                    {endingKana: "ぐ", result: "ぎません"}, {endingKana: "ぶ", result: "びません"},
                    {endingKana: "ぬ", result: "にません"}, {endingKana: "う", result: "いません"},
                    {endingKana: "つ", result: "ちません"}],
            },

            short: {
                affirmative: [
                    {endingKana: "る", ichidanResult: "た　", godanResult: "った"},
                    {endingKana: "む", result: "した"}, {endingKana: "く", result: "いた"},
                    {endingKana: "ぐ", result: "いだ"}, {endingKana: "ぶ", result: "んだ"},
                    {endingKana: "ぬ", result: "んだ"}, {endingKana: "う", result: "った"},
                    {endingKana: "つ", result: "った"}],

                negative: [
                    {endingKana: "る", ichidanResult: "ない", godanResult: "らなかった"},
                    {endingKana: "む", result: "まなかった"}, {endingKana: "く", result: "かなかった"},
                    {endingKana: "ぐ", result: "がなかった"}, {endingKana: "ぶ", result: "ばなかった"},
                    {endingKana: "ぬ", result: "ななかった"}, {endingKana: "う", result: "わなかった"},
                    {endingKana: "つ", result: "たなかった"}]
            }
        },

        past: {
            polite: {
                affirmative: [
                    {endingKana: "る", ichidanResult: "ました", godanResult: "りました"},
                    {endingKana: "む", result: "みました"}, {endingKana: "く", result: "きました"},
                    {endingKana: "ぐ", result: "ぎました"}, {endingKana: "ぶ", result: "びました"},
                    {endingKana: "ぬ", result: "にました"}, {endingKana: "う", result: "いました"},
                    {endingKana: "つ", result: "ちました"},],

                negative: [
                    {endingKana: "る", ichidanResult: "ませんでした", godanResult: "りませんでした"},
                    {endingKana: "む", result: "みませんでした"}, {endingKana: "く", result: "きませんでした"},
                    {endingKana: "ぐ", result: "ぎませんでした"}, {endingKana: "ぶ", result: "びませんでした"},
                    {endingKana: "ぬ", result: "にませんでした"}, {endingKana: "う", result: "いませんでした"},
                    {endingKana: "つ", result: "ちませんでした"}],
            },

            short: {
                affirmative: [
                    {endingKana: "る", ichidanResult: "る", godanResult: "る"},
                    {endingKana: "む", result: "む"}, {endingKana: "く", result: "く"},
                    {endingKana: "ぐ", result: "ぐ"}, {endingKana: "ぶ", result: "ぶ"},
                    {endingKana: "ぬ", result: "ぬ"}, {endingKana: "う", result: "う"},
                    {endingKana: "つ", result: "つ"}],

                negative: [
                    {endingKana: "る", ichidanResult: "ない", godanResult: "らない"},
                    {endingKana: "む", result: "まない"}, {endingKana: "く", result: "かない"},
                    {endingKana: "ぐ", result: "がない"}, {endingKana: "ぶ", result: "ばない"},
                    {endingKana: "ぬ", result: "なない"}, {endingKana: "う", result: "わない"},
                    {endingKana: "つ", result: "たない"}]
            },
        },

        teForm: [
            {endingKana: "る", ichidanResult: "て", godanResult: "って"},
            {endingKana: "む", result: "んで"}, {endingKana: "く", result: "いて"},
            {endingKana: "ぐ", result: "いで"}, {endingKana: "ぶ", result: "んで"},
            {endingKana: "ぬ", result: "んで"}, {endingKana: "う", result: "って"},
            {endingKana: "つ", result: "って"}],
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
