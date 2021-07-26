
interface QuizStrings {
    "hint_button": string,
    "answer_button": string,
    "next_button": string,
    "instruction_spelling_audio": string,
    "instruction_mc_audio": string,
    "instruction_mc_abbreviation": string,
    "instruction_spelling_translate": string,
    "instruction_mc_translate": string,
    "instruction_speech": string,
    "recording_button": string,
    "record_retry_button": string,
    "advice_primary": string[],
    "advice_secondary": string[],
}

const en: QuizStrings = {
    "hint_button": "Hint",
    "answer_button": "Answer",
    "next_button": "Next Question",
    "instruction_spelling_audio": "Spell the word you heard.",
    "instruction_mc_audio": "Select the word you heard.",
    "instruction_mc_abbreviation": "Select the correct abbreviation.",
    "instruction_spelling_translate": 'Write "[]" in English.',
    "instruction_mc_translate": "Translate the underlined word.",
    "instruction_speech": 'Read the word "[]".',
    "recording_button": "Press to Speak",
    "record_retry_button": "Please try again",
    "advice_primary": ["Excellent!", "Well Done!", "Perfect!", "Good!", "Great!", "Fabulous!", "Marvelous!", "Superb!", "Amazing!", "Wonderful!", "Bravo!"],
    "advice_secondary": [""],
}

const jp: QuizStrings = {
    "hint_button": "ヒント",
    "answer_button": "次へ",
    "next_button": "次へ",
    "instruction_spelling_audio": "聞こえた単語を書いてください",
    "instruction_mc_audio": "聞こえた単語を選んでください",
    "instruction_mc_abbreviation": "正しい略語を選んでください",
    "instruction_spelling_translate": "「[]」を英語で書いてください",
    "instruction_mc_translate": "下線付き文字を翻訳してください",
    "instruction_speech": "「[]」を英語で読み上げてください",
    "recording_button": "押して話す",
    "record_retry_button": "もう一度お試しください",
    "advice_primary": ["素晴らしい！", "よくやった！", "素敵！", "すごいね！", "よくできた！", "いい感じ！", "いいね！", "正解！", "頑張ったね！"],
    "advice_secondary": [],
}

const quizStringsPack = { en, jp }

export { quizStringsPack, en, jp };
export type { QuizStrings };
