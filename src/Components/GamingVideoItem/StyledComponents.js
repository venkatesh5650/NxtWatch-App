import styled from 'styled-components'

export const GamingVideoItemContainer = styled.div`
width:140px;
height:460px;
margin-right:20px;
margin-bottom:15px;
@media(min-width:576px){
    width:220px;
    
}
`
export const ThumbnailImg = styled.img`
height:300px;
width:100%;
margin-bottom:8px;
`

export const Watching = styled.p`
font-size:20px;
font-weight:400;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
@media(max-width:576px){
  font-size:17px;
}
`
export const GamingTitle = styled.p`
font-size:20px;
font-weight:600;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
`
