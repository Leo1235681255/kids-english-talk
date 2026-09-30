import { useCallback, useEffect, useRef, useState } from 'react';
import { isSpeechRecognitionSupported, startListening } from '../utils/speechRecognition';

export type MicState = 'idle' | 'listening' | 'done' | 'error';

/**
 * Wraps browser speech recognition. When the browser has none (Firefox, some iOS versions) the
 * child still repeats aloud and we simply give full credit — "Say It" then works as listen-and-repeat.
 */
export const useMic = () => {
  const [state, setState] = useState<MicState>('idle');
  const [stars, setStars] = useState(0);
  const [heard, setHeard] = useState('');
  const stopRef = useRef<() => void>(() => {});
  const timer = useRef<number | undefined>(undefined);
  const supported = isSpeechRecognitionSupported();

  const reset = useCallback(() => {
    stopRef.current();
    window.clearTimeout(timer.current);
    setState('idle');
    setStars(0);
    setHeard('');
  }, []);

  const start = useCallback(
    (target: string, onDone?: (stars: number) => void) => {
      window.clearTimeout(timer.current);
      setHeard('');
      if (!supported) {
        setState('listening');
        timer.current = window.setTimeout(() => {
          setStars(3);
          setState('done');
          onDone?.(3);
        }, 1800);
        return;
      }
      stopRef.current = startListening(
        target,
        (s, text) => {
          setStars(s);
          setHeard(text);
          setState('done');
          onDone?.(s);
        },
        () => setState('error'),
        () => setState('listening')
      );
    },
    [supported]
  );

  useEffect(
    () => () => {
      stopRef.current();
      window.clearTimeout(timer.current);
    },
    []
  );

  return { state, stars, heard, supported, start, reset };
};
