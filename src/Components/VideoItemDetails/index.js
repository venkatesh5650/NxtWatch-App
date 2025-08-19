import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

import Cookies from 'js-cookie'
import ReactContext from '../../Context/ReactContext'

import DesktopSideView from '../DesktopSideView'
import Header from '../Header'

import {
  FullPage,
  VideoDetailsContainer,
  VideoDescription,
  ViewTimeContainer,
  Content,
  VideoPlayer,
  VideoContent,
  IconsContainer,
  IconButton,
  LogoDetails,
  Logo,
  LogoHead,
  LogoPara,
  DescriptionVideo,
  AllVideoDetailsPage,
  DesktopView,
  AllViewIcon,
} from './StyledComponents'

import './index.css'

const actionsDetails = [
  {name: 'Like', icon: <AiOutlineLike />},
  {name: 'Dislike', icon: <BiDislike />},
]

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    channelObj: {},
    activeAction: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.video_details
      const updatedNew = {
        id: updatedData.id,
        title: updatedData.title,
        videoUrl: updatedData.video_url,
        thumbnailUrl: updatedData.thumbnail_url,
        channel: {
          name: updatedData.channel.name,
          profileImageUrl: updatedData.channel.profile_image_url,
          subscriberCount: updatedData.channel.subscriber_count,
        },
        viewCount: updatedData.view_count,
        publishedAt: updatedData.published_at,
        description: updatedData.description,
      }
      const updatedChannel = updatedData.channel
      const channelNew = {
        name: updatedChannel.name,
        profileImageUrl: updatedChannel.profile_image_url,
        subscriberCount: updatedChannel.subscriber_count,
      }
      this.setState({videoDetails: updatedNew, channelObj: channelNew})
      console.log(updatedNew)
    }
  }

  handleActionClick = actionName => {
    this.setState(prevState => ({
      activeAction: prevState.activeAction === actionName ? '' : actionName, // toggle logic
    }))
  }

  render() {
    const {videoDetails, channelObj, activeAction} = this.state
    const {title, videoUrl, viewCount, publishedAt, description} = videoDetails

    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode, addOrRemoveSavedVideo, savedVideosList} = value
          const isSaved = savedVideosList.some(
            each => each.id === videoDetails.id,
          )
          return (
            <FullPage>
              <Header />
              <AllVideoDetailsPage>
                <DesktopView>
                  <DesktopSideView />
                </DesktopView>
                <VideoDetailsContainer isDarkMode={isDarkMode}>
                  <VideoPlayer>
                    <ReactPlayer
                      url={videoUrl}
                      controls="true"
                      width="100%"
                      height="100%"
                    />
                  </VideoPlayer>
                  <VideoContent>
                    <VideoDescription isDarkMode={isDarkMode}>
                      {title}
                    </VideoDescription>
                    <AllViewIcon>
                      <ViewTimeContainer>
                        <Content isDarkMode={isDarkMode}>
                          {viewCount} views
                        </Content>
                        <Content isDarkMode={isDarkMode}>{publishedAt}</Content>
                      </ViewTimeContainer>
                      <IconsContainer>
                        {actionsDetails.map(eachAction => (
                          <IconButton
                            key={eachAction.name}
                            onClick={() =>
                              this.handleActionClick(eachAction.name)
                            }
                            ActiveAction={activeAction === eachAction.name}
                          >
                            {eachAction.icon}
                            {eachAction.name}
                          </IconButton>
                        ))}
                        <button
                          type="button"
                          className={isSaved ? 'savedBttn' : 'saveBtn'}
                          onClick={() => {
                            addOrRemoveSavedVideo(videoDetails)
                          }}
                        >
                          <CgPlayListAdd className="saveIcon" />
                          {isSaved ? 'Saved' : 'Save'}
                        </button>
                      </IconsContainer>
                    </AllViewIcon>
                    <hr className="horiLine" />
                    <LogoDetails>
                      <Logo src={channelObj.profileImageUrl} />
                      <div>
                        <LogoHead isDarkMode={isDarkMode}>
                          {channelObj.name}
                        </LogoHead>
                        <LogoPara isDarkMode={isDarkMode}>
                          {channelObj.subscriberCount} subscribers
                        </LogoPara>
                      </div>
                    </LogoDetails>
                    <DescriptionVideo isDarkMode={isDarkMode}>
                      {description}
                    </DescriptionVideo>
                  </VideoContent>
                </VideoDetailsContainer>
              </AllVideoDetailsPage>
            </FullPage>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default VideoItemDetails
