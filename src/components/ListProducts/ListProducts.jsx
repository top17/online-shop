import { useEffect, useState } from 'react'
import Products from '../../../data/db.json'
import Carousel from 'react-bootstrap/Carousel'
import {
  StyledDiv,
  StyledDivBox,
  StyledDivContainer,
  StyledDivInfo,
  StyledDivText,
  StyledImg,
  StyledButton,
  StyledAlertContainer,
  StyledDivInput,
} from './ListProducts.styled'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import SearchInput from '../SearchInput/SearchInput'
import Alert from 'react-bootstrap/Alert'
import noImage from '../../assets/noimage.jpg'

const ListProducts = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const products = Products.products.data.items

  const categories = [
    ...new Set(Products.products.data.items.map((item) => item.category)),
  ]

  const [activeIndex, setActiveIndex] = useState(products.map(() => 0))
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [showAddedToCart, setShowAddedToCart] = useState(false)
  const [sortOrder, setSortOrder] = useState('default')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const productsSort = [...Products.products.data.items]

    if (sortOrder === 'ascending') {
      productsSort.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'descending') {
      productsSort.sort((a, b) => b.price - a.price)
    }

    const filtered = productsSort.filter(
      (product) =>
        selectedCategory === 'all' || product.category === selectedCategory
    )

    setFilteredProducts(filtered)
    setActiveIndex(filtered.map(() => 0))
  }, [sortOrder, selectedCategory, products])

  const handleSearch = (query) => {
    const filtered = products.filter(
      (product) =>
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(query.toLowerCase()) ||
          (product.description &&
            product.description.toLowerCase().includes(query.toLowerCase())))
    )
    setFilteredProducts(filtered)
  }

  const handleImageChange = (productIndex, imageIndex) => {
    const newIndexes = [...activeIndex]

    newIndexes[productIndex] = imageIndex

    setActiveIndex(newIndexes)
  }

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setShowAddedToCart(true)

    setTimeout(() => {
      setShowAddedToCart(false)
    }, 2000)
  }

  return (
    <StyledDiv className="StyledDiv">
      <StyledDivInput className="StyledDivInput">
        <label>
          Sort by Price:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">default</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </label>
        <label>
          Filter by Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <SearchInput onSearch={handleSearch} />
      </StyledDivInput>
      <StyledAlertContainer className="StyledAlertContainer">
        <Alert
          variant="light"
          show={showAddedToCart}
          onClose={() => setShowAddedToCart(false)}
        >
          <Alert.Heading style={{ textAlign: 'center' }}>
            Added to cart
          </Alert.Heading>
        </Alert>
      </StyledAlertContainer>
      <StyledDivContainer className="StyledDivContainer">
        {filteredProducts.map((product, productIndex) => (
          <StyledDivBox className="StyledDivBox" key={product.id}>
            <StyledDivText
              className="StyledDivText"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name}
            </StyledDivText>

            {product.images && product.images.length > 0 ? (
              <Carousel
                activeIndex={activeIndex[productIndex]}
                onSelect={(selectedIndex) =>
                  handleImageChange(productIndex, selectedIndex)
                }
                interval={null}
              >
                {product.images.map((image, imageIndex) => (
                  <Carousel.Item key={imageIndex}>
                    <StyledImg src={image} alt={`Image ${imageIndex + 1}`} />
                    <Carousel.Caption>
                      <h3>Image: {imageIndex + 1}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <StyledImg src={noImage} />
            )}
            <StyledDivInfo className="StyledDivInfo">
              <StyledButton
                className="StyledButton"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </StyledButton>
              Price: {product.price}$
            </StyledDivInfo>
          </StyledDivBox>
        ))}
      </StyledDivContainer>
    </StyledDiv>
  )
}

export default ListProducts
