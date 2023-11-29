import { useLocation } from 'react-router-dom'
import { StyledBreadCrumbs, StyledLink } from './BreadCrumbs.styled'

const BreadCrumbs = () => {
  const location = useLocation()
  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div key={crumb}>
          <StyledLink className="StyledLink" to={currentLink}>
            {crumb}
          </StyledLink>
          <span>&#10132;</span>
        </div>
      )
    })

  return (
    <StyledBreadCrumbs className="StyledBreadCrumbs">
      {crumbs}
    </StyledBreadCrumbs>
  )
}

export default BreadCrumbs
