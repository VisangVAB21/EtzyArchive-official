import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const isLoginPage = location.pathname === '/'

  if (isLoginPage) return null

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/catalog', label: 'Shop' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <span className="font-display text-2xl lg:text-3xl font-bold text-brand-900 tracking-tight">
              Etzyarchive
            </span>
            <span className="text-xs font-medium text-brand-600 uppercase tracking-widest mt-1">
              Official
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-600 ${
                  location.pathname === link.to ? 'text-brand-800' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link to="/purchase-guide" className="block py-2 text-sm text-gray-600">Purchase Guide</Link>
              <Link to="/payment-guide" className="block py-2 text-sm text-gray-600">Payment Guide</Link>
              <Link to="/shipping" className="block py-2 text-sm text-gray-600">Shipping</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}