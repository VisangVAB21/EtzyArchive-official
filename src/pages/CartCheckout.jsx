import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ChevronLeft, CreditCard, Truck, Shield } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartCheckout() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState('cart') // cart | shipping | payment | success
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', zip: '', country: 'US',
  })

  const shippingCost = totalPrice > 150 ? 0 : 12
  const tax = totalPrice * 0.08
  const finalTotal = totalPrice + shippingCost + tax

  const handleCheckout = () => {
    setStep('success')
    clearCart()
  }

  if (cartItems.length === 0 && step !== 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CreditCard className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/catalog" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  if (step === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-display text-3xl font-bold text-brand-900 mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => navigate('/home')} className="btn-primary">Continue Shopping</button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-8">
            {['Cart', 'Shipping', 'Payment'].map((s, idx) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${step === s.toLowerCase() || (step === 'cart' && idx === 0) || (step === 'shipping' && idx <= 1) || (step === 'payment' && idx <= 2)
                    ? 'bg-brand-800 text-white' 
                    : 'bg-gray-200 text-gray-500'}
                `}>
                  {idx + 1}
                </div>
                <span className={`text-sm font-medium ${step === s.toLowerCase() ? 'text-brand-900' : 'text-gray-400'}`}>{s}</span>
                {idx < 2 && <div className="w-8 h-px bg-gray-200 mx-2" />}
              </div>
            ))}
          </div>

          {step === 'cart' && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {cartItems.map(item => (
                <div key={item.cartId} className="flex gap-6 p-6 border-b border-gray-100 last:border-0">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-lg bg-gray-100" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-brand-900">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.color} / {item.size}</p>
                      </div>
                      <p className="font-semibold text-brand-800">${item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-2 hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-2 hover:bg-gray-50"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="p-2 text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-6 bg-gray-50">
                <button onClick={() => setStep('shipping')} className="btn-primary w-full">Proceed to Shipping</button>
              </div>
            </div>
          )}

          {step === 'shipping' && (
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-xl text-brand-900 mb-6">Shipping Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: 'firstName', label: 'First Name', type: 'text' },
                  { key: 'lastName', label: 'Last Name', type: 'text' },
                  { key: 'email', label: 'Email', type: 'email' },
                  { key: 'address', label: 'Address', type: 'text', col: 2 },
                  { key: 'city', label: 'City', type: 'text' },
                  { key: 'zip', label: 'ZIP Code', type: 'text' },
                ].map(field => (
                  <div key={field.key} className={field.col === 2 ? 'sm:col-span-2' : ''}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={shippingInfo[field.key]}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="input-field"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select 
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, country: e.target.value }))}
                    className="input-field"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep('cart')} className="btn-outline flex-1">Back</button>
                <button onClick={() => setStep('payment')} className="btn-primary flex-1">Continue to Payment</button>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-xl text-brand-900 mb-6">Payment Method</h3>
              <div className="space-y-4 mb-6">
                {['Credit Card', 'PayPal', 'Apple Pay'].map((method, idx) => (
                  <label key={method} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-brand-400 transition-colors">
                    <input type="radio" name="payment" defaultChecked={idx === 0} className="w-4 h-4 text-brand-800" />
                    <span className="font-medium">{method}</span>
                  </label>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="input-field" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                    <input type="text" placeholder="123" className="input-field" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep('shipping')} className="btn-outline flex-1">Back</button>
                <button onClick={handleCheckout} className="btn-primary flex-1">Place Order</button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-lg text-brand-900 mb-6">Order Summary</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between text-lg font-bold">
                <span className="text-brand-900">Total</span>
                <span className="text-brand-800">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4" />
              Secure checkout with SSL encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}