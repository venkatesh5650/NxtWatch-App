import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import VideoItemDetails from './Components/VideoItemDetails'
import ReactContext from './Context/ReactContext'
import Trending from './Components/Trending'
import Gaming from './Components/Gaming'
import SavedVideos from './Components/SavedVideos'
import NotFoundRoute from './Components/NotFoundRoute'
import ProtectedRoute from './Components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    isDarkMode: true,
    activeCategory: 'Home',
    savedVideosList: [],
    isNavOpen: true,
  }

  ToggleMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  toggleNav = () => {
    this.setState(prev => ({isNavOpen: !prev.isNavOpen}))
  }

  setActivedCategory = category => {
    this.setState({activeCategory: category})
  }

  addOrRemoveSavedVideo = video => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideosList.some(
        each => each.id === video.id,
      )

      if (isAlreadySaved) {
        return {
          savedVideosList: prevState.savedVideosList.filter(
            each => each.id !== video.id,
          ),
        }
      }
      return {
        savedVideosList: [...prevState.savedVideosList, video],
      }
    })
  }

  render() {
    const {isDarkMode, activeCategory, savedVideosList, isNavOpen} = this.state
    console.log(savedVideosList)
    return (
      <ReactContext.Provider
        value={{
          isDarkMode,
          toggleDarkMode: this.ToggleMode,
          activeCategory,
          changeActiveCategory: this.setActivedCategory,
          savedVideosList,
          addOrRemoveSavedVideo: this.addOrRemoveSavedVideo,
          isNavOpen,
          toggleNav: this.toggleNav,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
