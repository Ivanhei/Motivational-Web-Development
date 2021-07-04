
export function SpeechQuestionArea({
  question,
}: {
  question: string,
}) {
  return <div className={`question_area speech`}>
    <div className="primary">{question}</div>
  </div>
}
