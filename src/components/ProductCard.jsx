import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="group card-hover bg-white rounded-xl overflow-hidden border border-gray-100">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        <button className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-800 hover:text-white">
          <ShoppingBag className="w-4 h-4" />
        </button>
      </Link>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 group-hover:text-brand-700 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-brand-800">${product.price}</span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}