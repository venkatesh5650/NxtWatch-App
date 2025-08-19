import ReactContext from '../../Context/ReactContext'

import {
  FailureContainer,
  FailureImg,
  FailureHead,
  FailureContent,
} from './StyledComponents'

const NotFoundRoute = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <FailureContainer>
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="notfound"
          />
          <FailureHead isDarkMode={isDarkMode}>Page Not Found</FailureHead>
          <FailureContent isDarkMode={isDarkMode}>
            We are sorry, the page you requested could not be found.
          </FailureContent>
        </FailureContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default NotFoundRoute
