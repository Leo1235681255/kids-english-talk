// Web Audio API & Web Speech Synthesis for Kids English Talk

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const playPopSound = () => {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {
    console.warn('Audio not allowed yet', e);
  }
};

export const playSuccessSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0.25, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.25);
    });
  } catch (e) {
    console.warn(e);
  }
};

export const playErrorSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {
    console.warn(e);
  }
};

export const playStarSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [880, 1174.66, 1396.91, 1760];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);
      gain.gain.setValueAtTime(0.2, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.35);
    });
  } catch (e) {
    console.warn(e);
  }
};

export const playFanfareSound = () => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const melody = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.2 },
      { f: 1046.5, d: 0.4 },
    ];
    let offset = 0;
    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + offset);
      gain.gain.setValueAtTime(0.3, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + note.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + note.d);
      offset += note.d * 0.85;
    });
  } catch (e) {
    console.warn(e);
  }
};

// Web Speech Synthesis
export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const speakText = (
  text: string,
  options: {
    rate?: number;
    pitch?: number;
    speaker?: 'Mi' | 'Bin' | 'Pip' | 'Teacher' | 'Normal';
    onEnd?: () => void;
  } = {}
) => {
  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis not supported');
    options.onEnd?.();
    return;
  }

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';

  // Customize pitch & rate for cheerful kid characters
  let pitch = options.pitch ?? 1.1;
  let rate = options.rate ?? 0.95;

  if (options.speaker === 'Pip') {
    pitch = 1.45; // Pip the cheerful little sparrow
    rate = 1.05;
  } else if (options.speaker === 'Mi') {
    pitch = 1.3; // 6-year-old girl
    rate = 0.95;
  } else if (options.speaker === 'Bin') {
    pitch = 1.15; // 7-year-old boy
    rate = 1.0;
  } else if (options.speaker === 'Teacher') {
    pitch = 1.05;
    rate = 0.9;
  }

  utterance.pitch = pitch;
  utterance.rate = rate;

  // Prefer English US voices
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en-US') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Victoria'))) 
    || voices.find(v => v.lang.startsWith('en'));
  if (enVoice) {
    utterance.voice = enVoice;
  }

  if (options.onEnd) {
    utterance.onend = options.onEnd;
    utterance.onerror = options.onEnd;
  }

  window.speechSynthesis.speak(utterance);
};

export const speakSlow = (text: string, onEnd?: () => void) => {
  speakText(text, { rate: 0.65, pitch: 1.1, onEnd });
};
