import { useEffect, useState } from 'react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownBanner() {
  const [time, setTime] = useState({ h: 5, m: 59, s: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-4xl mb-4">🔥</div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
          خصومات حصرية تنتهي اليوم
        </h2>
        <p className="text-sky-100 mb-8 text-lg">
          لا تفوت هذه الفرصة الذهبية — العرض لفترة محدودة فقط!
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[{ label: 'ساعة', val: time.h }, { label: 'دقيقة', val: time.m }, { label: 'ثانية', val: time.s }].map((unit, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4 min-w-[80px]">
                <div className="text-3xl md:text-4xl font-extrabold tabular-nums">{pad(unit.val)}</div>
                <div className="text-sky-100 text-xs mt-1">{unit.label}</div>
              </div>
              {i < 2 && <span className="text-3xl font-bold opacity-70">:</span>}
            </div>
          ))}
        </div>

        <a
          href="#products"
          className="inline-block bg-white text-sky-600 hover:bg-sky-50 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          تسوق الآن 🛍️
        </a>
      </div>
    </section>
  );
}
