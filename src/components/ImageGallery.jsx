import { useState } from 'react'

export default function ImageGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                idx === selectedIndex ? 'border-brand-800' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`${productName} ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}