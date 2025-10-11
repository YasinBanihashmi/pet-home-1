import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "صفحه اصلی", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "گالری", href: "/gallery" },
    { name: "وبلاگ", href: "/blog" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <header className="w-full border-b-gray-800">
      <div className="w-full h-2 bg-yellow-400"></div>

      <nav className="flex items-center justify-between px-3 lg:px-20 py-6 bg-white shadow-sm relative">
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="text-yellow-500 text-3xl">🐾</span>
          <span>Pet</span>
          <span className="text-gray-500">Home</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <ShoppingCart size={20} />
          </button>

          <button className="flex items-center gap-1 border rounded-full px-8 py-4 text-sm font-medium bg-[#292d32] text-white hover:bg-yellow-500 transition duration-300">
            <User size={18} />
            ثبت نام | ورود
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
