import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ReactContext from '../../Context/ReactContext'
import {
  HomeSideView,
  IconContainer,
  CategoryText,
  BottomHead,
  BottomContent,
  BrandContainer,
  BrandLogo,
  BottomSection,
} from './StyledComponents'

import './index.css'

const categories = [
  {name: 'Home', path: '/', icon: <IoMdHome />},
  {name: 'Trending', path: '/trending', icon: <FaFire />},
  {name: 'Gaming', path: '/gaming', icon: <SiYoutubegaming />},
  {name: 'Saved videos', path: '/saved', icon: <RiPlayListAddFill />},
]

const DesktopSideView = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode, changeActiveCategory, activeCategory} = value

      const setActiveCategory = name => {
        changeActiveCategory(name)
      }
      return (
        <HomeSideView isDarkMode={isDarkMode}>
          <div>
            {categories.map(cat => (
              <Link
                to={cat.path}
                key={cat.name}
                className="link-text"
                onClick={() => setActiveCategory(cat.name)}
              >
                <IconContainer active={activeCategory === cat.name}>
                  {cat.icon}
                  <CategoryText
                    active={activeCategory === cat.name}
                    isDarkMode={isDarkMode}
                  >
                    {cat.name}
                  </CategoryText>
                </IconContainer>
              </Link>
            ))}
          </div>
          <BottomSection>
            <BottomHead isDarkMode={isDarkMode}>CONTACT US</BottomHead>
            <BrandContainer>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <BrandLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </a>
            </BrandContainer>
            <BottomContent isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </BottomContent>
          </BottomSection>
        </HomeSideView>
      )
    }}
  </ReactContext.Consumer>
)

export default DesktopSideView
