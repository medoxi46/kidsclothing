export default function PromoBanner() {
  const text = 'شحن مجاني في جميع أنحاء المملكة 🎉 شحن مجاني في جميع أنحاء المملكة 🎉 شحن مجاني في جميع أنحاء المملكة 🎉 شحن مجاني في جميع أنحاء المملكة 🎉 شحن مجاني في جميع أنحاء المملكة 🎉 ';

  return (
    <div className="promo-banner bg-sky-500 text-white py-2 overflow-hidden">
      <div className="promo-track whitespace-nowrap text-sm font-medium">
        <span>{text}{text}</span>
      </div>
    </div>
  );
}
