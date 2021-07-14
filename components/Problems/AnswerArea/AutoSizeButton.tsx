import styles from '@/styles/AutoSizeButton.module.css'

import { useCallback, useEffect, useRef, useState } from 'react';

export default function AutoSizeButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const outter = useRef<HTMLSpanElement>();
  const inner = useRef<HTMLSpanElement>();
  const fontRatio = useRef(1.);

  const rawResize = useCallback((newRatio) => {
    fontRatio.current = newRatio;
    inner.current.style.fontSize = fontRatio.current + "em";
  }, [])

  useEffect(() => {
    const outterEl = outter.current;
    function doResize(outterWidth: number) {
      if (!inner.current) return;

      const newRatio = Math.min(fontRatio.current * outterWidth / inner.current.clientWidth, 1.0);

      if (fontRatio.current != newRatio)
        rawResize(newRatio);
    }
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize[0]) {
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
  }, [rawResize]);

  useEffect(() => {
    if (fontRatio.current != 1.0)
      rawResize(1.0);
  }, [props.children, rawResize]);

  return <button {...props}>
    <span className={styles.outterSpan} ref={outter}>
      <span className={styles.innerSpan} ref={inner}>
        {props.children}
      </span>
    </span>
  </button>
}
