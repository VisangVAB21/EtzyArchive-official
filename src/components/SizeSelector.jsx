import { sizes } from '../data/products'

export default function SizeSelector({ selected, onSelect, availableSizes }) {
  return (
    <div>
      <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">Size</h4>
      <div className="flex flex-wrap gap-2">
        {sizes.map(size => {
          const isAvailable = availableSizes.includes(size)
          return (
            <button
              key={size}
              disabled={!isAvailable}
              onClick={() => isAvailable && onSelect(size)}
              className={`
                w-12 h-12 rounded-lg text-sm font-medium border-2 transition-all
                ${selected === size
                  ? 'bg-brand-800 text-white border-brand-800'
                  : isAvailable
                    ? 'bg-white text-gray-700 border-gray-200 hover:border-brand-400'
                    : 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed line-through'
                }
              `}
            >
              {size}
            </button>
          )
        })}
      </div>
    </div>
  )
}