import { X, SlidersHorizontal } from 'lucide-react'
import { categories, sizes, colors } from '../data/products'

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({ category: 'All', size: '', color: '', minPrice: 0, maxPrice: 500 })
  }

  const hasActiveFilters = filters.category !== 'All' || filters.size || filters.color || filters.minPrice > 0 || filters.maxPrice < 500

  const sidebarContent = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-sm text-brand-600 hover:text-brand-800 underline">
            Clear all
          </button>
        )}
        <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-100 rounded">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => updateFilter('category', cat)}
                className="w-4 h-4 text-brand-800 focus:ring-brand-600"
              />
              <span className={`text-sm ${filters.category === cat ? 'text-brand-800 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">Price Range</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => updateFilter('minPrice', Number(e.target.value))}
            className="w-20 px-3 py-2 border rounded-lg text-sm"
            placeholder="Min"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
            className="w-20 px-3 py-2 border rounded-lg text-sm"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Size */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => updateFilter('size', filters.size === size ? '' : size)}
              className={`w-10 h-10 rounded-lg text-sm font-medium border transition-all ${
                filters.size === size
                  ? 'bg-brand-800 text-white border-brand-800'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-brand-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">Color</h4>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => updateFilter('color', filters.color === color.name ? '' : color.name)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                filters.color === color.name ? 'border-brand-800 scale-110' : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      {/* Mobile drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto p-6
      `}>
        {sidebarContent}
      </div>
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white p-6 rounded-xl border border-gray-100">
          {sidebarContent}
        </div>
      </div>
    </>
  )
}