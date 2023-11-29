import { useState } from 'react'
import { StyledDiv, StyledInput } from './SearchInput.styled'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    onSearch(query)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <StyledDiv className="StyledDiv">
      <StyledInput
        className="StyledInput"
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Search"
      />
      <FaSearch onClick={handleSearch} />
    </StyledDiv>
  )
}

export default SearchInput
