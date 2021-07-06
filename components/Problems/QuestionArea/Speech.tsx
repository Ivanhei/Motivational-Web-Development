
export function SpeechQuestionArea({
  word,
}: {
  word: string,
}) {
  return <div className={`question_area speech`}>
    <div className="primary">{word}</div>
  </div>
}
