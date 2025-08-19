import {Component} from 'react'
import ReactContext from '../../Context/ReactContext'
import SavedVideoItem from '../SavedVideoItem'
import Header from '../Header'
import DesktopSideView from '../DesktopSideView'

import {
  AllTrendingVideos,
  TrendingView,
  FireIcon,
  CategoryHead,
  TrendingContainer,
  TrendingRightBar,
  FailureContainer,
  FailureImg,
  FailureHead,
  FailureContent,
  FailureRetry,
} from './StyledComponents'

class SavedVideos extends Component {
  onClickRetry = () => {
    this.renderSavedView()
  }

  renderFailureView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHead isDarkMode={isDarkMode}>
              No saved videos found
            </FailureHead>
            <FailureContent isDarkMode={isDarkMode}>
              You can save your videos while watching them
            </FailureContent>
            <FailureRetry onClick={this.onClickRetry}>Retry</FailureRetry>
          </FailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSavedView = () => (
    <ReactContext.Consumer>
      {value => {
        const {savedVideosList} = value
        const savedPresent = savedVideosList.length > 0

        return (
          <div>
            {savedPresent ? (
              <AllTrendingVideos>
                {savedVideosList.map(eachItem => (
                  <SavedVideoItem key={eachItem.id} videoDetails={eachItem} />
                ))}
              </AllTrendingVideos>
            ) : (
              this.renderFailureView()
            )}
          </div>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div>
              <Header />
              <TrendingContainer isDarkMode={isDarkMode}>
                <DesktopSideView />
                <TrendingRightBar>
                  <TrendingView isDarkMode={isDarkMode}>
                    <FireIcon />
                    <CategoryHead isDarkMode={isDarkMode}>
                      Saved Videos
                    </CategoryHead>
                  </TrendingView>
                  {this.renderSavedView()}
                </TrendingRightBar>
              </TrendingContainer>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default SavedVideos
