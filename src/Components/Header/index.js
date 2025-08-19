import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiMoon, FiLogOut} from 'react-icons/fi'
import {IoMdSunny, IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactContext from '../../Context/ReactContext'

import {
  HeaderPage,
  HeaderContainer,
  WebsiteLogo,
  IconContainerMobile,
  HeaderBtn,
  IconContainer,
  ProfileImg,
  LogoutBtn,
  NavBarContainer,
  IconsContainer,
  CategoryText,
} from './StyledComponents'

import './index.css'

const categories = [
  {name: 'Home', path: '/', icon: <IoMdHome />},
  {name: 'Trending', path: '/trending', icon: <FaFire />},
  {name: 'Gaming', path: '/gaming', icon: <SiYoutubegaming />},
  {name: 'Saved videos', path: '/saved', icon: <RiPlayListAddFill />},
]

class Header extends Component {
  state = {showLogoutPopup: false}

  onClickNavBar = () => {
    this.setState(prevState => ({isClickedNav: !prevState.isClickedNav}))
  }

  onClickLogoutRequest = () => {
    this.setState({showLogoutPopup: true})
  }

  onCancelLogout = () => {
    this.setState({showLogoutPopup: false})
  }

  onConfirmLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode, toggleDarkMode, isNavOpen, toggleNav} = value

          const {location} = this.props
          const currentPath = location.pathname
          const {showLogoutPopup} = this.state

          return (
            <HeaderPage isDarkMode={isDarkMode}>
              <HeaderContainer>
                <WebsiteLogo
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <IconContainerMobile>
                  <HeaderBtn type="button" onClick={toggleDarkMode}>
                    {isDarkMode ? (
                      <IoMdSunny className="headerLighticon" />
                    ) : (
                      <FiMoon
                        className={
                          isDarkMode ? 'headerLighticon' : 'headerDarkicon'
                        }
                      />
                    )}
                  </HeaderBtn>
                  <HeaderBtn onClick={toggleNav}>
                    <GiHamburgerMenu
                      className={
                        isDarkMode ? 'headerLighticon' : 'headerDarkicon'
                      }
                    />
                  </HeaderBtn>
                  <HeaderBtn>
                    <FiLogOut
                      className={
                        isDarkMode ? 'headerLighticon' : 'headerDarkicon'
                      }
                      onClick={this.onClickLogoutRequest}
                    />
                  </HeaderBtn>
                </IconContainerMobile>
                <IconContainer>
                  <HeaderBtn
                    type="button"
                    onClick={toggleDarkMode}
                    data-testid="theme"
                  >
                    {isDarkMode ? (
                      <IoMdSunny className="headerLighticon" />
                    ) : (
                      <FiMoon className="headerDarkicon" />
                    )}
                  </HeaderBtn>
                  <HeaderBtn>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </HeaderBtn>
                  <LogoutBtn
                    isDarkMode={isDarkMode}
                    onClick={this.onClickLogoutRequest}
                  >
                    Logout
                  </LogoutBtn>
                </IconContainer>
              </HeaderContainer>

              {isNavOpen ? (
                <NavBarContainer>
                  <div>
                    {categories.map(cat => (
                      <Link to={cat.path} key={cat.name} className="link-text">
                        <IconsContainer active={currentPath === cat.path}>
                          {cat.icon}
                          <CategoryText
                            active={currentPath === cat.path}
                            isDarkMode={isDarkMode}
                          >
                            {cat.name}
                          </CategoryText>
                        </IconsContainer>
                      </Link>
                    ))}
                  </div>
                </NavBarContainer>
              ) : null}

              {showLogoutPopup && (
                <div className="popup-overlay">
                  <div className="popup-container">
                    <p className="popup-message">
                      Are you sure you want to logout?
                    </p>
                    <div className="popup-actions">
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={this.onCancelLogout}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="confirm-btn"
                        onClick={this.onConfirmLogout}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </HeaderPage>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default withRouter(Header)
