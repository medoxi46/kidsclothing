export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #bae6fd 100%)',
      }}
    >

      <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content (RTL — text on right side) */}
          <div className="text-right order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              🔥 عرض خاص: شحن مجاني
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              ملابس أطفال{' '}
              <span className="text-sky-500">بجودة عالية</span>{' '}
              وأسعار مناسبة
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              اكتشف مجموعتنا الحصرية من ملابس الأطفال المصنوعة بأفضل الخامات
              مع توصيل مجاني لجميع أنحاء المملكة
            </p>
            <a
              href="#products"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              تسوق الآن قبل انتهاء العرض 🛍️
            </a>
          </div>

          {/* Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="ملابس أطفال"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
