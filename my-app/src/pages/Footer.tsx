import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-100 py-6 text-center">
      <p className="text-sm text-gray-500">© 2025 Grill & Chill. All rights reserved.</p>
      <p className="mt-4">Follow us:</p>
      <ul className="flex justify-center space-x-6 mt-2">
        <li>
          <a
            href="https://instagram.com/"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@grillandchill.com"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}