import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-orange-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Grill & Chill</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#schedule" className="hover:text-orange-500">Schedule</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-orange-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#schedule" className="hover:text-orange-500">Schedule</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}