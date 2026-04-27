import { Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12 text-right">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-end gap-2 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="text-right">
                <div className="font-bold text-white text-xl leading-tight">KidsClothing</div>
                <div className="text-sky-400 text-sm leading-tight">ملابس الأطفال</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              متجرك الأول لملابس الأطفال بجودة عالية وأسعار مناسبة.
              نوفر أفضل التصاميم مع ضمان الجودة وخدمة توصيل مجانية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">الرئيسية</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">المنتجات</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-end gap-3 text-gray-400 text-sm">
                <span>contact@kidsclothing.shop</span>
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-400 text-sm">
                <span dir="ltr">+212 672 492 366</span>
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-3 text-gray-400 text-sm">
                <span>المملكة المغربية</span>
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          متجر ملابس الأطفال 2026 © - جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
