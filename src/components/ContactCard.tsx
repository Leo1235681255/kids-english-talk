import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ZALO_PHONE, ZALO_URL } from '../lib/config';

/** Call to action at the bottom of the home screen: chat with thầy LEO on Zalo to own the app. */
export const ContactCard: React.FC = () => (
  <section className="mt-7 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#1d6bff] to-[#0f3a8a] px-4 pb-5 pt-4 text-white shadow-[0_6px_0_rgba(15,58,138,0.35)]">
    <div className="flex items-start gap-3">
      <img src="/art/pip_heart.png" alt="Pip" className="w-16 shrink-0 a-bob drop-shadow-lg" draggable={false} />
      <div>
        <div className="text-xs font-black uppercase tracking-wide text-yellow-300">Thầy LEO · Leo English</div>
        <h2 className="text-xl font-black leading-tight">Muốn sở hữu các app tiếng Anh giao tiếp?</h2>
        <p className="mt-1 text-[13px] font-semibold leading-snug text-white/85">
          Nhắn thầy LEO để được tư vấn bộ app Kids English Talk và các app tiếng Anh giao tiếp khác dành cho bé.
        </p>
      </div>
    </div>
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-black text-[#0068ff] shadow-[0_4px_0_rgba(0,0,0,0.2)] active:scale-95"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.8} /> Liên hệ thầy LEO qua Zalo
    </a>
    <div className="mt-2 text-center text-xs font-bold text-white/80">Zalo: {ZALO_PHONE}</div>
  </section>
);
