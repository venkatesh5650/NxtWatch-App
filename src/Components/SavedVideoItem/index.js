import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ReactContext from '../../Context/ReactContext'

import {
  TrendingVideoContainer,
  ThumbnailImg,
  Content,
  ProfileImg,
  MainContent,
  AllTinyDetailsContainer,
  ChannelName,
  ListContainer,
  ListItem,
  ViewCount,
} from './StyledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, channel, title, viewCount, publishedAt, id} =
    videoDetails
  const {profileImgUrl, name} = channel

  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-text">
            <TrendingVideoContainer isDarkMode={isDarkMode}>
              <ThumbnailImg src={thumbnailUrl} />

              <Content>
                <ProfileImg src={profileImgUrl} />
                <div>
                  <MainContent isDarkMode={isDarkMode}>{title}</MainContent>

                  <AllTinyDetailsContainer>
                    <ChannelName isDarkMode={isDarkMode}>{name}</ChannelName>
                    <ListContainer>
                      <ViewCount isDarkMode={isDarkMode}>
                        {viewCount} views
                      </ViewCount>
                      <ListItem isDarkMode={isDarkMode}>
                        {formatDistanceToNow(new Date(publishedAt), {
                          addSuffix: true,
                        }).replace(/^(about|over|almost)\s/, '')}
                      </ListItem>
                    </ListContainer>
                  </AllTinyDetailsContainer>
                </div>
              </Content>
            </TrendingVideoContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default SavedVideoItem
