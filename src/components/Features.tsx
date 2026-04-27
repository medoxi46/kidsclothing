const features = [
  {
    icon: '🚚',
    title: 'شحن مجاني في جميع أنحاء المملكة',
    desc: 'نوصل طلبك لأي مكان بدون رسوم شحن',
  },
  {
    icon: '💵',
    title: 'الدفع عند الاستلام',
    desc: 'ادفع نقداً عند وصول طلبك إلى بابك',
  },
  {
    icon: '⚡',
    title: 'توصيل سريع 24-48 ساعة',
    desc: 'نضمن وصول طلبك في أسرع وقت ممكن',
  },
  {
    icon: '🛡️',
    title: 'ضمان الجودة',
    desc: 'نضمن جودة كل قطعة مع ضمان استرداد كامل',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base leading-snug">{f.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
