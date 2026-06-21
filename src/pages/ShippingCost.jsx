import { useState } from 'react'
import { Truck, MapPin, Package, Clock } from 'lucide-react'

export default function ShippingCost() {
  const [country, setCountry] = useState('US')
  const [zipCode, setZipCode] = useState('')
  const [weight, setWeight] = useState(1)
  const [calculated, setCalculated] = useState(null)

  const handleCalculate = (e) => {
    e.preventDefault()
    // Dummy calculation logic
    const baseRates = { US: 8, CA: 12, UK: 15, EU: 18, AU: 20, OTHER: 25 }
    const base = baseRates[country] || 25
    const weightCost = weight * 2
    const total = base + weightCost
    
    setCalculated({
      standard: total,
      express: total + 15,
      estimatedDays: country === 'US' ? '3-5' : '7-14',
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-brand-900 mb-4">Shipping Calculator</h1>
        <p className="text-gray-500 text-lg">Estimate shipping costs and delivery times</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Calculator */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100">
          <h2 className="font-semibold text-xl text-brand-900 mb-6 flex items-center gap-2">
            <Truck className="w-5 h-5" />
            Calculate Shipping
          </h2>
          
          <form onSubmit={handleCalculate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                className="input-field"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="EU">Europe</option>
                <option value="AU">Australia</option>
                <option value="OTHER">Rest of World</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal / ZIP Code</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="input-field pl-11"
                  placeholder="10001"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package Weight (kg)</label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Calculate Shipping
            </button>
          </form>

          {calculated && (
            <div className="mt-6 p-6 bg-brand-50 rounded-xl space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-brand-200">
                <span className="font-medium text-brand-900">Standard Shipping</span>
                <span className="text-xl font-bold text-brand-800">${calculated.standard.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-brand-200">
                <span className="font-medium text-brand-900">Express Shipping</span>
                <span className="text-xl font-bold text-brand-800">${calculated.express.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-700">
                <Clock className="w-4 h-4" />
                Estimated delivery: {calculated.estimatedDays} business days
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-lg text-brand-900 mb-4">Shipping Policy</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                Free standard shipping on all orders over $150
              </li>
              <li className="flex items-start gap-3">
                <Package className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                All orders are processed within 1-2 business days
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                Express shipping available for select countries
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-lg text-brand-900 mb-4">International Orders</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              International customers may be subject to import duties and taxes levied by the destination country. 
              These charges are the responsibility of the recipient and vary by country.
            </p>
          </div>

          <div className="bg-brand-900 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Need a Custom Quote?</h3>
            <p className="text-sm text-brand-200 mb-4">
              For bulk orders or special shipping requirements, contact our logistics team.
            </p>
            <a href="mailto:shipping@etzyarchive.com" className="text-sm font-medium underline hover:text-brand-200">
              shipping@etzyarchive.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}