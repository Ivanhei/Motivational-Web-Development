
interface QuizStrings {
    "hint_button": string,
    "answer_button": string,
    "instruction_spelling_audio": string,
    "instruction_mc_audio": string,
    "instruction_spelling_translate": string,
    "instruction_mc_translate": string,
    "instruction_speech": string,
}

const en: QuizStrings = {
    "hint_button": "Hint",
    "answer_button": "Answer",
    "instruction_spelling_audio": "Spell the word you heard.",
    "instruction_mc_audio": "Select the word you heard.",
    "instruction_spelling_translate": 'Write "[]" in English.',
    "instruction_mc_translate": "Translate the underlined word.",
    "instruction_speech": 'Read the word "[]".',
}

const jp: QuizStrings = {
    "hint_button": "ヒント",
    "answer_button": "次へ",
    "instruction_spelling_audio": "聞こえた単語を書いてください",
    "instruction_mc_audio": "聞こえた単語を選んでください",
    "instruction_spelling_translate": "「[]」を英語で書いてください",
    "instruction_mc_translate": "下線付き文字を翻訳してください",
    "instruction_speech": "「勉強」を英語で読み上げてください",
}

const quizStringsPack = { en, jp }

export { quizStringsPack, en, jp };
export type { QuizStrings };
