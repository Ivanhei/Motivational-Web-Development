
import {
  useMemo,
} from "react";

import {
  ReplaceBraketWithUnderlinedText,
} from '@/common/utils'

export function TranslateQuestionArea({
  question,
  primary,
  secondary,
  image_url,
}: {
  question: string,
  primary?: string,
  secondary?: string,
  image_url?: string,
}) {
  // 1st
  const primary_text = useMemo(() => {
    if (!primary) return <></>;
    return <ReplaceBraketWithUnderlinedText sentence={primary} inside={question} />;
  }, [primary, question]);

  // 2nd
  const secondary_text = useMemo(() => {
    if (!secondary) return <></>;
    return <ReplaceBraketWithUnderlinedText sentence={secondary} inside="　　　" />;
  }, [secondary]);

  // result
  return <div className={`question_area ${secondary ? "multilingual" : ""} ${image_url ? "image_container" : ""}`}>
    {primary ? <div className="primary">{primary_text}</div> : null}
    {secondary ? <div className="secondary">{secondary_text}</div> : null}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {image_url ? <img src={image_url} alt={question}/> : null}
  </div>
}
