import styled from 'styled-components'

export const HomeSideView = styled.div`
width:20vw;
height:160vh;
display:flex;
background-color:${props => (props.isDarkMode ? 'black' : 'white')};
flex-direction:column;
justify-content:space-between;
@media(max-width:576px){
  display:none;
  
  
}
`
export const IconContainer = styled.div`
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

export const BottomSection = styled.div`
 padding-left:25px;
`

export const BottomHead = styled.p`
font-size:20px;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
font-weight:700;

`

export const BottomContent = styled.p`
font-size:20px;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
font-weight:500;

`
export const BrandContainer = styled.div`
display:flex;
align-items:center;
`

export const BrandLogo = styled.img`
height:35px;
width:35px;
margin-right:16px;
`
