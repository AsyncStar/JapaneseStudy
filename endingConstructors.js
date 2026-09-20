/*          verb: "",
            iAdjective: "",
            iiAdjective: "",
            naAdjective: "",
            noun: "",

            { front: "", ending: "", meaning:"", info: "",
    precedingInput: {
    }
    },

 */

export const stateConstructors = [
    { ending: "（て）いる",  meaning:"", info: "",
        precedingInput: {
        verb: "て-form",
        }
    },

    { ending: "ことがある", meaning:"", info: "",
        precedingInput: {
        }
    },

    { ending: "（て) みる", meaning:"Trying", info: "",
        precedingInput: {
            verb: "て-form",
        }
    }
]

export const uncertaintyConstructors = [
    { ending: "そうです(か)",  meaning:"It looks like...", info: "",
        precedingInput: {
            iAdjectives: "Drop い",
            iiAdjective: "よさ",
            naAdjectives: "Drop な",
        }
    },


    { ending: "", meaning:"", info: "",
    precedingInput: {
    }
    }
]

export const permissionConstructors = [
    { front: "（て）もいいです(か)", ending: "もいいです(か)", meaning:"You may do / May I?", info: "",
        precedingInput: {
        verb: "て-form",
        }
    },
    { front: "（て）ください", ending: "ください", meaning:"Please", info: "",
        precedingInput: {
            verb: "て-form",
        }
    },
    { front: "（ない）でください", ending: "でください", meaning:"", info: "",
        precedingInput: {
            verb: "ない-form",
        }
    },
    { front: "", ending: "", meaning:"", info: "",
        precedingInput: {
        }
    },
]

export const suggestionDemandConstructors = [
    { front: "ましょう（か)", ending: "", meaning:"Let's... / Let me do...", info: "",
        precedingInput: {
        verb: "verb stem",
        }
    },

    { front: "（だ）はうがいいです", ending: "", meaning:"It's better to do...", info: "",
        precedingInput: {
        verb: "だ-form",
        }
    },

    { front: "（ない）ほうがいです", ending: "", meaning:"It's better not to do...", info: "",
        precedingInput: {
            verb: "ない-form",

        }
    },

    { front: "（な）ければいきません", ending: "", meaning:"You must", info: "",
        precedingInput: {
            verb: "ない-form, drop い",
        }
    },

    { front: "（な）きゃけません", ending: "", meaning:"You must", info: "Polite",
        precedingInput: {
            verb: "ない-form, drop い",
        }
    },

]

