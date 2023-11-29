import { useParams } from 'react-router-dom'
import Products from '../../../data/db.json'
import { StyledImg } from '../../components/ListProducts/ListProducts.styled'
import { StyledDiv } from './Description.page.styled'
import noImage from '../../assets/noimage.jpg'

const Description = () => {
  const { id } = useParams()

  const product = Products.products.data.items.find((p) => p.id === id)
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <StyledDiv className="StyledDiv">
      <h1>{product.name}</h1>
      <StyledImg
        className="StyledImg"
        src={product.images ? product.images[0] : noImage}
        alt={product.name}
        style={{ width: '300px', height: '200px' }}
      />
      <p>Price: {product.price}$</p>
      <p>{product.description}</p>
    </StyledDiv>
  )
}

export default Description
