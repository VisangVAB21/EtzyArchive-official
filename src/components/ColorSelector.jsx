import { colors } from '../data/products'

export default function ColorSelector({ selected, onSelect, availableColors }) {
  const availableColorObjs = colors.filter(c => availableColors.includes(c.name))

  return (
    <div>
      <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-3">
        Color {selected && <span className="text-gray-900 normal-case">- {selected}</span>}
      </h4>
      <div className="flex flex-wrap gap-3">
        {availableColorObjs.map(color => (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            className={`
              w-10 h-10 rounded-full border-2 transition-all
              ${selected === color.name ? 'border-brand-800 scale-110 ring-2 ring-brand-200' : 'border-gray-200 hover:border-gray-400'}
            `}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  )
}