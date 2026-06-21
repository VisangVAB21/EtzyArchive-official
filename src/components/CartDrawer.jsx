import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsCartOpen(false)} />
      )}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({cartItems.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button onClick={() => setIsCartOpen(false)} className="btn-primary mt-4">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.cartId} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg bg-gray-100" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.color} / {item.size}</p>
                    <p className="font-semibold text-brand-800 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1 hover:bg-gray-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1 hover:bg-gray-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-brand-800">${totalPrice.toFixed(2)}</span>
            </div>
            <Link 
              to="/cart" 
              onClick={() => setIsCartOpen(false)}
              className="btn-primary w-full text-center block"
            >
              Checkout
            </Link>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-800"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}