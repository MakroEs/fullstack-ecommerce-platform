const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className=" py-1 rounded-md text-lg md:text-2xl cursor-pointer">
            Makro{" "}
            <span className=" bg-orange-700 py-1 rounded-md px-2 text-sm">
              .com
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Kaliteli ürünler, hızlı teslimat ve güvenli alışveriş deneyimi.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Kurumsal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Hakkımızda</li>
            <li className="hover:text-white cursor-pointer">İletişim</li>
            <li className="hover:text-white cursor-pointer">Kariyer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Yardım</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              Sıkça Sorulan Sorular
            </li>
            <li className="hover:text-white cursor-pointer">İade & Değişim</li>
            <li className="hover:text-white cursor-pointer">Kargo Bilgileri</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Bizi Takip Et</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Twitter / X</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Makro.com. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
