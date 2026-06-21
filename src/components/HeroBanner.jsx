import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative bg-brand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="py-12 lg:py-0 z-10">
            <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
              Spring / Summer 2026
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight mb-6">
              Timeless Elegance, <br />
              <span className="text-brand-600">Modern Soul</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Discover our curated collection of sustainable, premium fashion pieces designed for the modern wardrobe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-primary inline-flex items-center gap-2">
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-100 via-transparent to-transparent lg:hidden z-10" />
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
              alt="Fashion model"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}