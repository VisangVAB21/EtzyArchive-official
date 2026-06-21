import { ShoppingBag, Search, CreditCard, CheckCircle } from 'lucide-react'

export default function PurchaseGuide() {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Discover',
      desc: 'Explore our curated collection using filters for category, size, color, and price. Click on any product to view detailed information, size guides, and multiple images.',
    },
    {
      icon: ShoppingBag,
      title: 'Select & Customize',
      desc: 'Choose your preferred size and color. Use our size guide to ensure the perfect fit. Add items to your cart — you can continue shopping or proceed to checkout.',
    },
    {
      icon: CreditCard,
      title: 'Review & Pay',
      desc: 'Review your cart, apply any discount codes, and select your preferred shipping method. We accept all major credit cards, PayPal, and Apple Pay.',
    },
    {
      icon: CheckCircle,
      title: 'Track & Receive',
      desc: 'Once your order is confirmed, you will receive a tracking number via email. Most orders arrive within 3-5 business days.',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-brand-900 mb-4">Purchase Guide</h1>
        <p className="text-gray-500 text-lg">Everything you need to know about shopping with us</p>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-brand-700" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-brand-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-xl text-brand-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-brand-50 p-8 rounded-2xl">
        <h3 className="font-semibold text-lg text-brand-900 mb-4">Need Help?</h3>
        <p className="text-gray-600 mb-4">
          Our customer service team is available Monday through Friday, 9 AM - 6 PM EST.
          Reach out via email at <a href="mailto:support@etzyarchive.com" className="text-brand-700 font-medium">support@etzyarchive.com</a>
        </p>
      </div>
    </div>
  )
}