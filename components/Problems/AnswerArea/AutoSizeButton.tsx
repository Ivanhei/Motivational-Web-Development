import styles from '@/styles/AutoSizeButton.module.css'

import { debounce_UI } from '@/common/utils';
import { useEffect, useRef, useState } from 'react';

export default function AutoSizeButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const outter = useRef<HTMLSpanElement>();
  const inner = useRef<HTMLSpanElement>();
  const [fontRatio, setFontRatio] = useState(1.0);

  useEffect(() => {
    /*const debouncedHandleResize = debounce_UI(*/function handleResize() {
      setFontRatio(fontRatio => {
        const newRatio = fontRatio * outter.current.clientWidth / inner.current.clientWidth 
        return newRatio < 1.0 ? newRatio : 1.0;
      })
    }//, 0);

    // run it once at the beginning
    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return <button {...props}>
    <span className={styles.outterSpan} ref={outter}>
      <span className={styles.innerSpan} ref={inner} style={{fontSize: fontRatio + "em"}}>
        {props.children}
      </span>
    </span>
  </button>
}
