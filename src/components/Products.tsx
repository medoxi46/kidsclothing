import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'بدلة رياضية للأطفال',
    price: '199 ريال',
    oldPrice: '299 ريال',
    badge: 'الأكثر مبيعاً',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'فستان بنات أنيق',
    price: '179 ريال',
    oldPrice: '249 ريال',
    badge: 'جديد',
    image: 'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'طقم ولادي كاجوال',
    price: '149 ريال',
    oldPrice: '220 ريال',
    badge: 'خصم 30%',
    image: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    name: 'بيجامة قطنية للأطفال',
    price: '129 ريال',
    oldPrice: '189 ريال',
    badge: 'مميز',
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    name: 'معطف شتوي دافئ',
    price: '259 ريال',
    oldPrice: '380 ريال',
    badge: 'خصم 32%',
    image: 'https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 6,
    name: 'طقم صيفي ملون',
    price: '139 ريال',
    oldPrice: '199 ريال',
    badge: 'حصري',
    image: 'https://images.pexels.com/photos/3622612/pexels-photo-3622612.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const badgeColors: Record<string, string> = {
  'الأكثر مبيعاً': 'bg-sky-500',
  'جديد': 'bg-green-500',
  'خصم 30%': 'bg-red-500',
  'مميز': 'bg-sky-500',
  'خصم 32%': 'bg-red-500',
  'حصري': 'bg-blue-500',
};

export default function Products() {
  return (
    <section id="products" className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🔥 الأكثر طلباً
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            المنتجات الأكثر طلباً
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            اكتشف مجموعتنا المميزة من ملابس الأطفال بأفضل الأسعار وأعلى جودة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 md:h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute top-3 right-3 ${badgeColors[product.badge] ?? 'bg-sky-500'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </div>
              </div>
              <div className="p-4 text-right">
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{product.name}</h3>
                <div className="flex items-center justify-end gap-2 mb-4">
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                  <span className="text-sky-600 font-extrabold text-lg">{product.price}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl transition-colors duration-200">
                  <ShoppingCart className="w-4 h-4" />
                  <span>اطلب الآن</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#products"
            className="inline-block border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold px-8 py-3 rounded-2xl transition-colors duration-200"
          >
            عرض جميع المنتجات
          </a>
        </div>
      </div>
    </section>
  );
}
