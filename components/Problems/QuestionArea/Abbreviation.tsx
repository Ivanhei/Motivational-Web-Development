export function AbbreviationQuestionArea({
  question,
}: {
  question: string,
}) {

  return <div className="question_area abbreviation">
    <div className="primary">{question}</div>
  </div>
}