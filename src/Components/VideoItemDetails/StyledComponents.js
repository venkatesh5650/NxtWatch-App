import styled from 'styled-components'
import {CgPlayListAdd} from 'react-icons/cg'

export const FullPage = styled.div`
min-height:100vh;
width:100vw;
`

export const AllVideoDetailsPage = styled.div`
display:flex;

`
export const DesktopView = styled.div`

margin:0;
@media(max-width:576px){
  display:none
}
`

export const VideoDetailsContainer = styled.div`
min-height:100vh;
width:100vw;
margin:0;
background-color:${props => (props.isDarkMode ? 'black' : '#f8fafc')};
@media(min-width:576px){
  
}
`

export const VideoPlayer = styled.div`
height:240px;
width:100vw;
@media(min-width:576px){
  height:600px;
  width:1050px;
}

`
export const VideoContent = styled.div`
padding:20px;
`

export const VideoDescription = styled.h1`
font-size:18px;
font-weight:500;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
width:350px;
display:block;
@media(min-width:576px){
  width:1000px;
}
`
export const ViewTimeContainer = styled.ul`
display:flex;
align-items:center;
justify-content:flex-start;
margin:0;
padding:0;
padding-left:20px;
`
export const Content = styled.li`
font-size:13px;
font-weight:400;
color:${props => (props.isDarkMode ? '#475569' : '#1e293b')};
list-style:disc;
width:80px;
margin:0;
text-align:start;
@media(min-width:576px){
  font-size:16px;
  font-weigh:500;
  width:110px;
}
`
export const IconsContainer = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
margin-top:20px;
@media(min-width:576px){
  margin-bottom:20px;
  margin-left:450px;
  }
`
export const IconButton = styled.button`
height:40px;
width:110px;
font-size:18px;
border:none;
outline:none;
background:transparent;
cursor:pointer;
font-weight:${props => (props.ActiveAction ? '600' : '400')};
color:${props => (props.ActiveAction ? '#3b82f6' : '#475569')};
svg {
    font-size: 18px;
    color:${props => (props.ActiveAction ? '#3b82f6' : '#475569')};
    margin-right:7px;
    cursor:pointer;
  }
`

export const SaveButton = styled.button`
height:50px;
width:50px;
border:none;
outline:none;
background:transparent;
color:#475569;
display:flex;
svg {
    font-size: 18px;
    color:#475569;
    
  }
`
export const SaveIcon = styled(CgPlayListAdd)`
  height:40px;
  width:50px;
  
`
export const LogoDetails = styled.div`
display:flex;
align-items:center;
`
export const Logo = styled.img`
height:55px;
width:55px;
margin-right:16px;
@media(min-width:576px){
   height:65px;
   width:65px;
  }
`
export const LogoHead = styled.h1`
font-size:15px;
font-weight:500;

color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
@media(min-width:576px){
 font-size:18px;
  }


`
export const LogoPara = styled.p`
font-size:12px;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
@media(min-width:576px){
  font-size:15px;

  }
`
export const DescriptionVideo = styled.p`
font-size:14px;
color:${props => (props.isDarkMode ? 'white' : '#475569')};
@media(min-width:576px){
   font-size:20px;
   width:1000px;
  }
`
export const AllViewIcon = styled.div`
@media(min-width:576px){
  display:flex;
  align-items:center;
  justify-content:space-beween;
  width:80vw;
}
`
