import styles from '@/styles/AutoSizeButton.module.css'

import { useCallback, useEffect, useRef, useState } from 'react';

export default function AutoSizeButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const outter = useRef<HTMLSpanElement>();
  const inner = useRef<HTMLSpanElement>();
  const fontRatio = useRef(1.);

  const doResize = useCallback((outterWidth: number) => {
    if (!inner.current) return;

    const newRatio = Math.max(Math.min(fontRatio.current * outterWidth / inner.current.clientWidth, 1.0), 0.1);

    if (fontRatio.current != newRatio) {
      fontRatio.current = newRatio;
      inner.current.style.fontSize = fontRatio.current + "em";
    }
  }, [])

  useEffect(() => {
    const outterEl = outter.current;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize && entry.contentBoxSize[0]) {
          doResize(entry.contentBoxSize[0].inlineSize)
        } else if (entry.contentBoxSize) {
          doResize((entry.contentBoxSize as any).inlineSize)
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
  }, [doResize]);

  useEffect(() => {
    doResize(outter.current.clientWidth)
  }, [doResize, props.children]);

  return <button {...props}>
    <span className={styles.outterSpan} ref={outter}>
      <span className={styles.innerSpan} ref={inner}>
        {props.children}
      </span>
    </span>
  </button>
}
