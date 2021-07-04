
interface QuizStrings {
    "hint_button": string,
    "answer_button": string,
    "instruction_spelling_audio": string,
    "instruction_mc_audio": string,
}

const en: QuizStrings = {
    "hint_button": "Hint",
    "answer_button": "Answer",
    "instruction_spelling_audio": "Spell the word you heard.",
    "instruction_mc_audio": "Select the word you heard.",
}

const jp: QuizStrings = {
    "hint_button": "ヒント",
    "answer_button": "次へ",
    "instruction_spelling_audio": "聞こえた単語を書いてください",
    "instruction_mc_audio": "聞こえた単語を選んでください",
}

const quizStringsPack = { en, jp }

export { quizStringsPack, en, jp };
export type { QuizStrings };
