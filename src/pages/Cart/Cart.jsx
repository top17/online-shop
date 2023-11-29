import { useCart } from '../../context/CartContext'
import {
  StyledButton,
  StyledDiv,
  StyledDivCart,
  StyledDivProducts,
  StyledLink,
} from './Cart.styled'
import noImage from '../../assets/noimage.jpg'

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
  }

  return (
    <StyledDiv className="StyledDiv">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <StyledDivCart className="StyledDivProducts">
          {cart.map((item) => (
            <StyledDivProducts className="StyledDivProducts" key={item.id}>
              <StyledLink to={`/products/${item.id}`}>
                <img
                  src={item.images ? item.images[0] : noImage}
                  style={{ width: '100px', height: '100px' }}
                />
                {item.name}
              </StyledLink>
              <div>{item.price}$</div>
              Quantity: {item.quantity}
              <StyledButton
                className="StyledButton"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </StyledButton>
            </StyledDivProducts>
          ))}
        </StyledDivCart>
      )}
    </StyledDiv>
  )
}

export default Cart
