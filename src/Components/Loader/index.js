import Loader from 'react-loader-spinner'

import LoaderContainer from './StyledComponents'

const LoaderView = () => (
  <LoaderContainer className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="red" height="50" width="50" />
  </LoaderContainer>
)

export default LoaderView
