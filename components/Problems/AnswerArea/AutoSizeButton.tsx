import styles from '@/styles/AutoSizeButton.module.css'

import { useEffect, useRef, useState } from 'react';

export default function AutoSizeButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const outter = useRef<HTMLSpanElement>();
  const inner = useRef<HTMLSpanElement>();
  const [fontRatio, setFontRatio] = useState(1.0);

  useEffect(() => {
    const outterEl = outter.current;
    const innerEl = inner.current;
    function doResize(outterWidth: number) {
      setFontRatio(fontRatio => {
        const newRatio = fontRatio * outterWidth / innerEl.clientWidth 
        return newRatio < 1.0 ? newRatio : 1.0;
      })
    }
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          doResize(entry.contentBoxSize[0].inlineSize)
          // doResize(entry.contentBoxSize.inlineSize)
        } else {
          doResize(entry.contentRect.width)
        }
      }
    });
    resizeObserver.observe(outterEl)

    return () => {
      resizeObserver.unobserve(outterEl)
      resizeObserver.disconnect()
    }
  }, [props.children]);

  return <button {...props}>
    <span className={styles.outterSpan} ref={outter}>
      <span className={styles.innerSpan} ref={inner} style={{fontSize: fontRatio + "em"}}>
        {props.children}
      </span>
    </span>
  </button>
}
