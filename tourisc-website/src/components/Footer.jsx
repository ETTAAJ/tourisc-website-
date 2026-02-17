import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange mb-4">Tourisc</h3>
            <p className="text-white/60 text-sm">
              Premium Morocco tourism experiences. Discover the magic of Morocco with luxury and elegance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/marrakech" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Marrakech
                </Link>
              </li>
              <li>
                <Link to="/rabat" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Rabat
                </Link>
              </li>
              <li>
                <Link to="/fes" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Fes
                </Link>
              </li>
              <li>
                <Link to="/agadir" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Agadir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-orange transition-all duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Email: info@tourisc.com</li>
              <li>Phone: +212 6XX XXX XXX</li>
              <li>WhatsApp: +212 6XX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; 2024 Tourisc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
