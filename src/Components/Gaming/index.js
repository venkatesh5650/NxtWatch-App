import {Component} from 'react'
import ReactContext from '../../Context/ReactContext'
import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import DesktopSideView from '../DesktopSideView'
import LoaderView from '../Loader'

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

const resultOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'INPROGRESS',
}

class Gaming extends Component {
  state = {gamingVideosList: [], resultStatus: 'INITIAL'}

  componentDidMount() {
    this.getAllGamingVideos()
  }

  onClickRetry = () => {
    this.getAllGamingVideos()
  }

  getAllGamingVideos = async () => {
    this.setState({resultStatus: resultOptions.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
        resultStatus: resultOptions.success,
      })
    } else {
      this.setState({resultStatus: resultOptions.failure})
    }
  }

  renderFailureView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImg
              src={
                isDarkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailureHead isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureHead>
            <FailureContent isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureContent>
            <FailureRetry onClick={this.onClickRetry}>Retry</FailureRetry>
          </FailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderGamingView = () => {
    const {gamingVideosList} = this.state
    return (
      <div>
        <AllTrendingVideos>
          {gamingVideosList.map(eachItem => (
            <GamingVideoItem key={eachItem.id} videoDetails={eachItem} />
          ))}
        </AllTrendingVideos>
      </div>
    )
  }

  renderTheResults = () => {
    const {resultStatus} = this.state

    switch (resultStatus) {
      case resultOptions.success:
        return this.renderGamingView()
      case resultOptions.failure:
        return this.renderFailureView()
      case resultOptions.loading:
        return <LoaderView />
      default:
        return null
    }
  }

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
                <div>
                  <TrendingView isDarkMode={isDarkMode}>
                    <FireIcon />
                    <CategoryHead isDarkMode={isDarkMode}>Gaming</CategoryHead>
                  </TrendingView>
                  <TrendingRightBar>{this.renderTheResults()}</TrendingRightBar>
                </div>
              </TrendingContainer>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Gaming
