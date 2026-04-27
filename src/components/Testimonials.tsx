const reviews = [
  {
    name: 'فاطمة الزهراء',
    location: 'الدار البيضاء',
    rating: 5,
    text: 'جودة الملابس رائعة جداً وتوصيل سريع جداً! طلبت لبنتي وجاء في أقل من 24 ساعة. سأطلب مرة أخرى بالتأكيد.',
    avatar: 'ف',
  },
  {
    name: 'أحمد الرحيمي',
    location: 'الرباط',
    rating: 5,
    text: 'خدمة ممتازة وأسعار في المتناول. الملابس تستحق كل ريال. شكراً جزيلاً على الاهتمام والجودة العالية.',
    avatar: 'أ',
  },
  {
    name: 'مريم بنعلي',
    location: 'مراكش',
    rating: 5,
    text: 'أفضل متجر لملابس الأطفال! الخامات ممتازة والألوان جميلة. ابني يحب ملابسه كثيراً والجميع يسأل من أين اشتريت.',
    avatar: 'م',
  },
  {
    name: 'يوسف الكمال',
    location: 'فاس',
    rating: 5,
    text: 'تعاملت معهم لأول مرة وكانت التجربة رائعة. الدفع عند الاستلام ميزة رائعة وتوفر الثقة. ننصح بهم بشدة.',
    avatar: 'ي',
  },
  {
    name: 'نادية الحسن',
    location: 'طنجة',
    rating: 5,
    text: 'المنتجات مطابقة تماماً للصور وحتى أجمل في الواقع. جودة عالية وأسعار منافسة. شكراً على الخدمة الرائعة!',
    avatar: 'ن',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            ⭐ آراء عملائنا
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            أكثر من 5,000 عميل راضٍ يثقون بجودتنا وخدمتنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-sky-50 border border-sky-100 rounded-3xl p-6 hover:shadow-md transition-shadow duration-200 text-right"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-end">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-sky-400 text-lg">⭐</span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                "{review.text}"
              </p>

              <div className="flex items-center justify-end gap-3">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.avatar}
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}