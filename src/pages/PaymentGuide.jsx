import { CreditCard, Shield, Wallet, Smartphone } from 'lucide-react'

export default function PaymentGuide() {
  const methods = [
    {
      icon: CreditCard,
      title: 'Credit & Debit Cards',
      desc: 'We accept Visa, Mastercard, American Express, and Discover. All transactions are processed securely with 256-bit SSL encryption.',
    },
    {
      icon: Wallet,
      title: 'PayPal',
      desc: 'Checkout quickly and securely using your PayPal account. No need to enter your card details on our site.',
    },
    {
      icon: Smartphone,
      title: 'Apple Pay & Google Pay',
      desc: 'For mobile and desktop users, enjoy one-tap checkout with your saved digital wallet credentials.',
    },
    {
      icon: Shield,
      title: 'Security Guarantee',
      desc: 'Your payment information is never stored on our servers. We use PCI-DSS compliant payment processors for maximum security.',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-brand-900 mb-4">Payment Guide</h1>
        <p className="text-gray-500 text-lg">Secure, flexible payment options for your convenience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {methods.map((method, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
              <method.icon className="w-6 h-6 text-brand-700" />
            </div>
            <h3 className="font-semibold text-lg text-brand-900 mb-2">{method.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="font-display text-2xl font-bold text-brand-900">Frequently Asked Questions</h2>
        {[
          { q: 'When will my card be charged?', a: 'Your card will be charged immediately upon order confirmation. You will receive an email receipt.' },
          { q: 'Can I use multiple payment methods?', a: 'Currently, we only support one payment method per order. Gift cards can be combined with a credit card.' },
          { q: 'Why was my payment declined?', a: 'Payments may be declined due to insufficient funds, incorrect card details, or bank security checks. Please contact your bank for more information.' },
          { q: 'Do you offer installment payments?', a: 'Yes! We partner with Klarna and Afterpay to offer interest-free installment options on orders over $50.' },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100">
            <h4 className="font-semibold text-brand-900 mb-2">{faq.q}</h4>
            <p className="text-gray-600 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}