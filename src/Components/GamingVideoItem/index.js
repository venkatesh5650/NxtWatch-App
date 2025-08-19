import {Link} from 'react-router-dom'
import ReactContext from '../../Context/ReactContext'

import {
  GamingVideoItemContainer,
  ThumbnailImg,
  Watching,
  GamingTitle,
} from './StyledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, title, viewCount, id} = videoDetails
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-text">
            <GamingVideoItemContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle isDarkMode={isDarkMode}>{title}</GamingTitle>
              <Watching isDarkMode={isDarkMode}>
                {viewCount} Watching Worldwide
              </Watching>
            </GamingVideoItemContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default GamingVideoItem
