import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-orange-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Grill & Chill</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#schedule" className="hover:underline">Schedule</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2 px-4">
          <li><a href="#home" className="hover:underline" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="hover:underline" onClick={closeMenu}>About</a></li>
          <li><a href="#schedule" className="hover:underline" onClick={closeMenu}>Schedule</a></li>
          <li><a href="#contact" className="hover:underline" onClick={closeMenu}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}