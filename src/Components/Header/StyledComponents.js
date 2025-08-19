import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'

export const HeaderPage = styled.div`
background-color:${props => (props.isDarkMode ? 'black' : 'white')};
`

export const HeaderContainer = styled.div`
height:100px;
width:100vw;
display:flex;
align-items:center;
justify-content:space-between;
padding:15px;


`
export const WebsiteLogo = styled.img`
height:30px;
width:120px;
@media(min-width:768px){
    height:40px;
    width:180px;
}

`
export const IconContainerMobile = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:180px;
@media(min-width:768px){
    display:none;
}
`
export const IconContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:320px;
@media(max-width:576px){
    display:none;
}
`

export const HeaderBtn = styled.button`
border:none;
outline:none;
background:transparent;
cursor:pointer;
`
export const ProfileImg = styled.img`
 height:40px;
 width:40px;
 
`
export const LogoutBtn = styled.button`
height:40px;
width:100px;
background:transparent;
color: ${props => (props.isDarkMode ? 'white' : '#3b82f6')};
border: ${props =>
  props.isDarkMode ? 'solid 2px white' : 'solid 2px #3b82f6'};
text-align:center;
font-size:20px;
cursor:pointer;

`
export const NavBarContainer = styled.nav`

@media(min-width:576px){
    display:none;
}
`
export const IconsContainer = styled.div`
display:flex;
align-items:center;
width:100%;
background-color:${props => (props.active ? '#f1f1f1' : 'transparent')};
svg {
    font-size: 30px;
    color: ${props => (props.active ? 'red' : '#666')}; /* Icon color change */
    margin-right: 14px;
    margin-left:22px;
  }
`
export const CategoryText = styled.p`
font-size:20px;
color:${props => (props.isDarkMode ? '#64748b' : '#1e293b')};
font-weight:${props => (props.active ? '700' : '400')};
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px; /* slightly increased */
  width: 40px;  /* slightly increased */
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.isDarkMode ? '#333' : '#f1f1f1')};
  }
`

export const CloseIcon = styled(IoMdClose)`
  font-size: 22px;  /* larger for visibility */
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
`
