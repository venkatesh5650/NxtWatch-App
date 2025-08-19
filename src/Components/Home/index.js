import {Component} from 'react'

import Loader from 'react-loader-spinner'

import HomeVideoItem from '../HomeVideoItem'
import ReactContext from '../../Context/ReactContext'
import Header from '../Header'
import DesktopSideView from '../DesktopSideView'

import './index.css'

import {
  HomeContainer,
  WebsiteLogo,
  AdContainer,
  CloseBtn,
  CloseIcon,
  ADheader,
  ADbutton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon,
  MainCardContainer,
  AllHomeVideosContainer,
  FailureContainer,
  FailureImg,
  FailureHead,
  FailureContent,
  FailureRetry,
  LoaderContainer,
  ViewContainer,
} from './StyledComponents'

const resultOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'INPROGRESS',
}

class Home extends Component {
  state = {
    isAdClosed: false,
    homeVideosList: [],
    resultStatus: resultOptions.initial,
    searchValue: '',
    changedSearchValue: '',
  }

  componentDidMount() {
    this.getAllHomeVideos()
  }

  onClickClose = () => {
    this.setState({isAdClosed: true})
  }

  onClickRetry = () => {
    this.getAllHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearch = () => {
    const {searchValue} = this.state
    this.setState({changedSearchValue: searchValue}, this.getAllHomeVideos)
  }

  getAllHomeVideos = async () => {
    this.setState({resultStatus: resultOptions.loading})
    const {changedSearchValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${changedSearchValue}`
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
        channel: {
          name: eachVideo.channel.name,
          profileImgUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      this.setState({
        homeVideosList: updatedData,
        resultStatus: resultOptions.success,
      })
    } else {
      this.setState({resultStatus: resultOptions.failure})
    }
  }

  renderHomeVideos = () => {
    const {homeVideosList} = this.state
    return (
      <AllHomeVideosContainer>
        {homeVideosList.map(eachItem => (
          <HomeVideoItem videoDetails={eachItem} key={eachItem.id} />
        ))}
      </AllHomeVideosContainer>
    )
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
              alt="failure view"
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

  renderNoResultsView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHead isDarkMode={isDarkMode}>
              No Search results found
            </FailureHead>
            <FailureContent isDarkMode={isDarkMode}>
              Try different key words or remove search filter
            </FailureContent>
            <FailureRetry onClick={this.onClickRetry}>Retry</FailureRetry>
          </FailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSearchBasedView = () => {
    const {homeVideosList} = this.state
    if (homeVideosList.length === 0) {
      return this.renderNoResultsView()
    }
    return this.renderHomeVideos()
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderTheResults = () => {
    const {resultStatus} = this.state

    switch (resultStatus) {
      case resultOptions.success:
        return this.renderSearchBasedView()
      case resultOptions.failure:
        return this.renderFailureView()
      case resultOptions.loading:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const {isAdClosed, searchValue} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div>
              <Header />
              <HomeContainer isDarkMode={isDarkMode}>
                <DesktopSideView />
                <ViewContainer>
                  {!isAdClosed ? (
                    <AdContainer data-testid="banner">
                      <CloseBtn onClick={this.onClickClose} data-testid="close">
                        <CloseIcon />
                      </CloseBtn>
                      <WebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <ADheader>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </ADheader>
                      <ADbutton>GET IT NOW</ADbutton>
                    </AdContainer>
                  ) : null}
                  <MainCardContainer isDarkMode={isDarkMode}>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isDarkMode={isDarkMode}
                        value={searchValue}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchIconContainer
                        data-testid="searchButton"
                        isDarkMode={isDarkMode}
                        onClick={this.onClickSearch}
                      >
                        <SearchIcon />
                      </SearchIconContainer>
                    </SearchContainer>
                    {this.renderTheResults()}
                  </MainCardContainer>
                </ViewContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
