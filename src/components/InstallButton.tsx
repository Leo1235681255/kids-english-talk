import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { InstallPlatform, useInstall } from '../hooks/useInstall';
import { playPopSound } from '../utils/audio';

const STEPS: Record<InstallPlatform, { intro: string; steps: string[] }> = {
  ios: {
    intro: 'Trên iPhone/iPad, hãy thêm app bằng Safari:',
    steps: [
      'Mở trang này bằng Safari.',
      'Bấm nút Chia sẻ ở thanh dưới.',
      'Chọn "Thêm vào Màn hình chính".',
      'Bấm "Thêm" — biểu tượng sư tử vàng sẽ hiện trên màn hình.',
    ],
  },
  android: {
    intro: 'Trên Android, hãy cài qua Chrome:',
    steps: ['Bấm menu ⋮ ở góc trên bên phải.', 'Chọn "Cài đặt ứng dụng" hoặc "Thêm vào Màn hình chính".', 'Xác nhận "Cài đặt".'],
  },
  desktop: {
    intro: 'Trên máy tính, hãy cài qua Chrome hoặc Edge:',
    steps: [
      'Bấm biểu tượng Cài đặt ở cuối thanh địa chỉ (hoặc menu ⋮ → "Cài đặt Kids English Talk").',
      'Xác nhận "Cài đặt" — app mở thành cửa sổ riêng.',
      'Safari (Mac): Chia sẻ → Thêm vào Dock.',
    ],
  },
};

/** Gold "Tải app" pill for the home screen; hidden once the app runs installed. */
export const InstallButton: React.FC = () => {
  const { installed, install, platform } = useInstall();
  const [help, setHelp] = useState(false);

  if (installed) return null;
  const { intro, steps } = STEPS[platform];

  return (
    <>
      <button
        onClick={async () => {
          playPopSound();
          if (!(await install())) setHelp(true);
        }}
        className="flex items-center gap-1.5 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 px-3 py-1.5 text-sm font-black text-[#3b2400] shadow active:scale-95"
      >
        <Download className="w-4 h-4" strokeWidth={3} />
        Tải app
      </button>

      {help && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setHelp(false)}
        >
          <div
            className="relative w-full max-w-[360px] rounded-3xl bg-[#fffaf0] px-6 pb-6 pt-7 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setHelp(false)} aria-label="Đóng" className="absolute right-3 top-3 text-slate-400">
              <X className="w-6 h-6" />
            </button>
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-[#080600]">
              <img src="/icons/logo-leo-256.png" alt="LeoEnglishPro" className="h-20 w-20 object-contain" />
            </div>
            <h3 className="mt-3 text-xl font-black text-[#0f3a8a]">Cài Kids English Talk về máy</h3>
            <p className="mt-1 text-sm font-semibold text-slate-600">{intro}</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-left text-sm font-semibold text-slate-700">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};
