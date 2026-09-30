// Speech Recognition for Say It and Talk Time

interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export const isSpeechRecognitionSupported = (): boolean => {
  const win = window as unknown as IWindow;
  return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
};

export const startListening = (
  targetPhrase: string,
  onResult: (score: number, spokenText: string, isCorrect: boolean) => void,
  onError: (errorMsg: string) => void,
  onStart?: () => void
): (() => void) => {
  const win = window as unknown as IWindow;
  const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

  if (!SpeechRec) {
    onError('Microphone not supported on this browser');
    return () => {};
  }

  try {
    const recognition = new SpeechRec();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
      onStart?.();
    };

    recognition.onresult = (event: any) => {
      let matched = false;
      let spokenText = '';
      const targetClean = targetPhrase.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();

      for (let i = 0; i < event.results[0].length; i++) {
        const transcript = event.results[0][i].transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
        spokenText = transcript;

        // Check if target phrase is spoken or contained
        if (transcript === targetClean || transcript.includes(targetClean) || targetClean.includes(transcript)) {
          matched = true;
          break;
        }
      }

      // Calculate star rating: 3 stars for great match, 2 stars for partial match, 1 star for attempt
      let stars = 3;
      if (!matched) {
        // check similarity
        if (spokenText.length > 0) {
          stars = 2;
          matched = true; // forgiving for young children!
        } else {
          stars = 1;
        }
      }

      onResult(stars, spokenText, matched);
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error', event.error);
      onError(event.error || 'Speech error');
    };

    recognition.start();

    return () => {
      try {
        recognition.stop();
      } catch (e) {
        // ignore
      }
    };
  } catch (err: any) {
    onError(err.message || 'Microphone error');
    return () => {};
  }
};
