
// challenge types
export type ProblemType = 'mc' | 'spelling' | 'speech'; // required actions are different
export type ProblemSubType = 'translate' | 'audio' | 'abbrv'; // provided info is different

export interface Problem {
  type: ProblemType
  subtype?: ProblemSubType

  hint?: string // TODO: remove `?`
  answer: string
}

export interface MultipleChoiceProblem extends Problem {
  type: 'mc'

  options: Array<string>
}

export interface SpellingProblem extends Problem {
  type: 'spelling'
}

export interface SpeechProblem extends Problem {
  type: 'speech'

  audio?: string
  audio_url?: string
  question: string // japanese meaning
  //word: string // english word // Use answer and captialize the first character.
}

export interface TranslateProblem extends Problem {
  subtype: 'translate'

  question: string
  sentence?: {
    english: string,
    japanese: string
  }
  image?: string
  image_url?: string
}

export interface AudioProblem extends Problem {
  subtype: 'audio'

  audio: string
  audio_url?: string
}

export interface AbbreviationProblem extends Problem {
  subtype: 'abbrv'

  question: string
}

export type MultipleChoiceTranslateProblem = TranslateProblem & MultipleChoiceProblem;
export type MultipleChoiceAudioProblem = AudioProblem & MultipleChoiceProblem;
export type MultipleChoiceAbbreviationProblem = AbbreviationProblem & MultipleChoiceProblem;

export type SpellingTranslateProblem = TranslateProblem & SpellingProblem;
export type SpellingAudioProblem = AudioProblem & SpellingProblem;
