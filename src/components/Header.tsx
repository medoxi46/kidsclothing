import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-sky-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-900 text-lg leading-tight">KidsClothing</div>
              <div className="text-sky-500 text-xs leading-tight">ملابس الأطفال</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">الرئيسية</a>
            <a href="#products" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">المنتجات</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">اتصل بنا</a>
          </nav>

          {/* Trust badge */}
          <div className="hidden md:flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5">
            <span className="text-sky-600 font-bold text-sm">+5,000</span>
            <span className="text-gray-600 text-sm">عميل راضٍ</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4 text-right">
            <a href="#home" className="text-gray-700 hover:text-sky-500 font-medium transition-colors" onClick={() => setMenuOpen(false)}>الرئيسية</a>
            <a href="#products" className="text-gray-700 hover:text-sky-500 font-medium transition-colors" onClick={() => setMenuOpen(false)}>المنتجات</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-500 font-medium transition-colors" onClick={() => setMenuOpen(false)}>اتصل بنا</a>
            <div className="flex items-center justify-end gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 w-fit self-end">
              <span className="text-sky-600 font-bold text-sm">+5,000</span>
              <span className="text-gray-600 text-sm">عميل راضٍ</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
