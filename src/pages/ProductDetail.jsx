import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Heart, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ImageGallery from '../components/ImageGallery'
import SizeSelector from '../components/SizeSelector'
import ColorSelector from '../components/ColorSelector'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addToCart } = useCart()
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/catalog" className="btn-primary mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return
    addToCart(product, selectedSize, selectedColor, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const canAddToCart = selectedSize && selectedColor

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/home" className="hover:text-brand-800">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/catalog" className="hover:text-brand-800">Shop</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* Gallery */}
        <ImageGallery images={product.gallery} productName={product.name} />

        {/* Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-brand-600 font-medium uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-brand-900">{product.name}</h1>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-sm">{product.reviews} reviews</span>
            </div>
          </div>

          <p className="text-3xl font-bold text-brand-800">${product.price}</p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="space-y-6 pt-4">
            <ColorSelector 
              selected={selectedColor} 
              onSelect={setSelectedColor}
              availableColors={product.colors}
            />
            <SizeSelector 
              selected={selectedSize} 
              onSelect={setSelectedSize}
              availableSizes={product.sizes}
            />
          </div>

          {/* Quantity & Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-gray-50 font-medium"
              >-</button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-gray-50 font-medium"
              >+</button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!canAddToCart}
              className={`flex-1 min-w-[200px] py-3 rounded-lg font-semibold transition-all ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : canAddToCart
                    ? 'btn-primary'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-3 rounded-lg border-2 transition-all ${
                isWishlisted 
                  ? 'border-red-200 bg-red-50 text-red-500' 
                  : 'border-gray-200 hover:border-gray-300 text-gray-400'
              }`}
            >
              <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {!canAddToCart && (
            <p className="text-sm text-amber-600">Please select a size and color</p>
          )}

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: Shield, label: 'Secure Payment' },
              { icon: RotateCcw, label: '30-Day Returns' },
            ].map(badge => (
              <div key={badge.label} className="text-center">
                <badge.icon className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600 font-medium">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 pt-16">
          <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}