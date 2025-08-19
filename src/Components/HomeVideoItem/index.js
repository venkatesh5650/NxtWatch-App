import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ReactContext from '../../Context/ReactContext'
import {
  HomeVideoContainer,
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

const HomeVideoItem = props => {
  const {videoDetails} = props

  console.log(formatDistanceToNow(new Date(2021, 8, 20)))
  const {thumbnailUrl, channel, title, viewCount, publishedAt, id} =
    videoDetails
  const {name, profileImgUrl} = channel
  console.log(publishedAt)
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-text">
            <HomeVideoContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

              <Content>
                <ProfileImg src={profileImgUrl} alt="channel logo" />
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
                        }).replace(/^(about|over)\s/, '')}
                      </ListItem>
                    </ListContainer>
                  </AllTinyDetailsContainer>
                </div>
              </Content>
            </HomeVideoContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default HomeVideoItem
