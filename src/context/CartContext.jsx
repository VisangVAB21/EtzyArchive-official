import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((product, size, color, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === size && item.color === color
      )
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, size, color, quantity, cartId: Date.now() }]
    })
    setIsCartOpen(true)
  }, [])

  const removeFromCart = useCallback((cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId))
  }, [])

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity < 1) return
    setCartItems(prev =>
      prev.map(item => (item.cartId === cartId ? { ...item, quantity } : item))
    )
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
