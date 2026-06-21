import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { ArrowRight, Truck, Shield, RotateCcw, Headphones } from 'lucide-react'

export default function Home() {
  const featuredProducts = products.filter(p => p.isNew || p.rating >= 4.8).slice(0, 4)

  return (
    <div>
      <HeroBanner />

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $150' },
              { icon: Shield, title: 'Secure Payment', desc: '100% protected checkout' },
              { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
              { icon: Headphones, title: '24/7 Support', desc: 'Dedicated assistance' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">{feature.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-900">Featured Collection</h2>
              <p className="text-gray-500 mt-2">Handpicked pieces for this season</p>
            </div>
            <Link to="/catalog" className="hidden sm:flex items-center gap-2 text-brand-700 font-medium hover:text-brand-900">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/catalog" className="btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-900 text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
              { name: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop' },
              { name: 'Tops', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop' },
              { name: 'Accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop' },
            ].map(cat => (
              <Link key={cat.name} to="/catalog" className="group relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display text-xl font-semibold">{cat.name}</h3>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors">Shop Now &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Join the Archive</h2>
          <p className="text-brand-200 mb-8">Subscribe to receive exclusive early access to new collections, special offers, and style inspiration.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-3 bg-white text-brand-900 rounded-lg font-semibold hover:bg-brand-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}