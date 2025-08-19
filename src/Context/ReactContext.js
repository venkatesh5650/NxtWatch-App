import React from 'react'

const ReactContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  activeCategory: 'Home',
  changeActiveCategory: () => {},
  savedVideosList: [],
  addOrRemoveSavedVideo: () => {},
  isNavOpen: false,
  toggleNav: () => {},
})

export default ReactContext
