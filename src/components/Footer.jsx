import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">Etzyarchive</h3>
            <p className="text-sm text-brand-200 leading-relaxed">
              Curated modern fashion for the discerning individual. 
              Timeless designs, sustainable materials, impeccable craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Dresses</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Outerwear</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/purchase-guide" className="hover:text-white transition-colors">Purchase Guide</Link></li>
              <li><Link to="/payment-guide" className="hover:text-white transition-colors">Payment Guide</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm text-brand-200 mb-4">Subscribe for exclusive offers and early access to new collections.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-brand-800 border border-brand-700 rounded-lg text-sm focus:outline-none focus:border-brand-400 text-white placeholder-brand-400"
              />
              <button className="px-4 py-2 bg-white text-brand-900 rounded-lg text-sm font-medium hover:bg-brand-100 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-300">
          <p>&copy; 2026 Etzyarchive Official. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}