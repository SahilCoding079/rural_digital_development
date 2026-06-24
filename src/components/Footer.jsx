import React from "react";
import { Link } from "react-router-dom";
import { FaHouseDamage, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full border-2 border-yellow-400 text-yellow-400 bg-white/5">
                <FaHouseDamage size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Suryapura Village</h3>
                <p className="text-sm text-white/90">Village Development Portal</p>
              </div>
            </div>
            <p className="text-sm text-white/80 max-w-xs">
              Empowering the community through sustainable development, education,
              and digital services tailored for Suryapura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-3 text-sm text-white/90 list-disc list-inside">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/schemes" className="hover:text-white">Schemes</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/updates" className="hover:text-white">Updates</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>

            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-md font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2"><FaPhone /> <a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a></li>
              <li className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:info@suryapura.example" className="hover:text-white">info@suryapura.example</a></li>
              <li className="text-sm text-white/80">Suryapura Village, District, State, PIN</li>
            </ul>
          </div>

          {/* Follow Us / Social */}
          <div>
            <h4 className="text-md font-semibold mb-3">Follow Us</h4>
            <p className="text-sm text-white/80 mb-3">Stay connected with our community updates and events.</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-center text-sm text-white/80">
          <h1 className="text-lg font-semibold">© {new Date().getFullYear()} Suryapura Village Development. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
