import { useState, useMemo } from 'react'
import { SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import { products } from '../data/products'

export default function Catalog() {
  const [filters, setFilters] = useState({
    category: 'All',
    size: '',
    color: '',
    minPrice: 0,
    maxPrice: 500,
  })
  const [sortBy, setSortBy] = useState('latest')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      if (filters.category !== 'All' && p.category !== filters.category) return false
      if (filters.size && !p.sizes.includes(filters.size)) return false
      if (filters.color && !p.colors.includes(filters.color)) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      return true
    })

    if (sortBy === 'cheapest') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'expensive') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }
    // 'latest' uses default order

    return result
  }, [filters, sortBy])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-brand-900">All Products</h1>
        <p className="text-gray-500 mt-2">Discover our curated collection of {filteredProducts.length} pieces</p>
      </div>

      <div className="flex gap-8">
        <FilterSidebar 
          filters={filters} 
          setFilters={setFilters} 
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:inline">{filteredProducts.length} items</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-400"
              >
                <option value="latest">Latest Arrivals</option>
                <option value="cheapest">Price: Low to High</option>
                <option value="expensive">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div className="hidden sm:flex border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-brand-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-brand-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products match your filters</p>
              <button 
                onClick={() => setFilters({ category: 'All', size: '', color: '', minPrice: 0, maxPrice: 500 })}
                className="btn-primary mt-4"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}