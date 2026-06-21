import { Award, Leaf, Heart, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-900 mb-6">Our Story</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Etzyarchive was born from a simple belief: fashion should be timeless, sustainable, and accessible. 
          Since 2018, we've been curating pieces that transcend seasons and trends.
        </p>
      </div>

      {/* Image + Text */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
            alt="Our atelier" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-bold text-brand-900">Crafted with Intention</h2>
          <p className="text-gray-600 leading-relaxed">
            Every piece in our collection is selected with meticulous attention to detail. We partner with 
            artisans and manufacturers who share our commitment to quality and ethical production practices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our design philosophy centers on versatility — creating garments that work seamlessly from day to night, 
            from office to evening, from season to season.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { icon: Leaf, title: 'Sustainable', desc: 'Eco-conscious materials and responsible sourcing' },
          { icon: Award, title: 'Quality First', desc: 'Premium fabrics and expert craftsmanship' },
          { icon: Heart, title: 'Timeless Design', desc: 'Pieces that outlast passing trends' },
          { icon: Users, title: 'Community', desc: 'Built by and for fashion-forward individuals' },
        ].map((value, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <value.icon className="w-7 h-7 text-brand-700" />
            </div>
            <h3 className="font-semibold text-lg text-brand-900 mb-2">{value.title}</h3>
            <p className="text-sm text-gray-500">{value.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-brand-900 rounded-2xl p-8 lg:p-12 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '12', label: 'Countries Served' },
            { value: '500+', label: 'Products Curated' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="font-display text-3xl lg:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-brand-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}