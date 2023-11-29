import { createContext, useContext, useReducer } from 'react'
import Cookies from 'js-cookie'

const CartContext = createContext()

const cartItemsCookie = Cookies.get('cartItems')

let cartItems

try {
  cartItems = JSON.parse(cartItemsCookie) || []
} catch (error) {
  console.error('Error parsing cartItems from cookie:', error)
  cartItems = []
}

const initialState = {
  cartItems,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingItemIndex].quantity += 1

        Cookies.set('cartItems', JSON.stringify(updatedCartItems))

        return {
          ...state,
          cartItems: updatedCartItems,
        }
      } else {
        const newCartItem = { ...action.payload, quantity: 1 }
        Cookies.set(
          'cartItems',
          JSON.stringify([...state.cartItems, newCartItem])
        )
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        }
      }
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      Cookies.set('cartItems', JSON.stringify(updatedCart))
      return {
        ...state,
        cartItems: updatedCart,
      }
    default:
      return state
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  return (
    <CartContext.Provider
      value={{ cart: state.cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCart }
