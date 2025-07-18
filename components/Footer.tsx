import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (

  <footer className="bg-gradient-to-b from-black via-blue-1000 to-blue-900 text-white px-6 py-10">

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo and Description */}
      <div>
        <img src="/assets/silanyas-logo.png" alt="Silanyas Logo" className="h-16 mb-6 ml-12" />
        <p className="text-sm text-gray-400">
          Silanyas brings you timeless silver jewelry — crafted with elegance and purpose.
          Explore modern designs rooted in tradition.
        </p>
      </div>

      {/* About Us */}
      <div>
        <h3 className="text-blue-200 font-semibold mb-2">ABOUT US</h3>
        <ul className="space-y-1 text-sm text-gray-300">
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press Kit</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-blue-200 font-semibold mb-2">RESOURCES</h3>
        <ul className="space-y-1 text-sm text-gray-300">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h3 className="text-blue-200 font-semibold mb-2">CONNECT</h3>
        <ul className="space-y-1 text-sm text-gray-300">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
        <div className="flex gap-3 mt-4 text-xl text-gray-300">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col items-center justify-center text-center gap-4">
  <p className="text-sm text-gray-400">
    © 2025 <span className="text-blue-200 font-medium">Silanyas</span>. Designed with ❤️ for elegance.
  </p>

    </div>
  </footer>
);
export default Footer;


