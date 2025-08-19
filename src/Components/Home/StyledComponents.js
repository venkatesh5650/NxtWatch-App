import styled from 'styled-components'
import {IoIosClose, IoIosSearch} from 'react-icons/io'

export const HomeContainer = styled.div`
width:100vw;
background-color:${props => (props.isDarkMode ? 'black' : 'white')};
padding-top:0;
margin-top:0;
@media(min-width:576px){
  display:flex;

}
`
export const ViewContainer = styled.div`
padding:1px;
width:78vw;
@media(max-width:576px){
  width:100vw;
}
`
export const WebsiteLogo = styled.img`
height:45px;
width:170px;
@media(min-width:768px){
    height:40px;
    width:240px;
}

`
export const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 0;
  background-color: white;
  padding-bottom: 20px;
  padding:25px;

  @media (min-width: 576px) {
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size: cover;
    background-color: transparent; /* Instead of background: transparent */
    width:78vw;
   
  }
`

export const CloseBtn = styled.button`
border:none;
outline:none;
background:transparent;
text-align:end;
margin-bottom:0;
cursor:pointer;

`
export const CloseIcon = styled(IoIosClose)`
height:37px;
width:37px;
align-self:flex-end;
 @media (min-width: 576px) {
    height:42px;
    width:42px;
    }
`
export const ADheader = styled.p`
font-size:22px;
font-weight:500;
color:#1e293b;
width:250px;
 @media (min-width: 576px) {
    width:350px;
    }
@media(min-width:768px){
  width:450px;
  font-size:25px;
}

`
export const ADbutton = styled.button`
font-size:20px;
height:45px;
width:150px;
font-weight:600;
color:#1e293b;
background:transparent;
border-radius:2px;
border:solid 1px #1e293b;
align-self:flex-start;
margin-top:20px;
cursor:pointer;
`

export const TotalHomeViewPage = styled.div`
display:flex;

`

export const SearchContainer = styled.div`
display:flex;
align-items:center;
margin-top:20px;
`

export const SearchInput = styled.input`
height:35px;
width:250px;
border:solid 2px #e2e8f0;
font-size:20px;
background:transparent;
font-weight:500;
color:${props => (props.isDarkMode ? 'white' : 'black')};
padding-left:15px;
@media(min-width:576px){
  height:35px;
  width:350px;

}
`
export const SearchIcon = styled(IoIosSearch)`
height:20px;
width:20px;
margin-top:6px;
cursor:pointer
`
export const SearchIconContainer = styled.button`
height:35px;
width:70px;
border:solid 2px #e2e8f0;
text-align:center;
cursor:pointer;
background-color:${props => (props.isDarkMode ? ' #383838' : '#f1f1f1')}
@media(min-width:576px){
  height:40px;
  width:110px;
}
`
export const MainCardContainer = styled.div`
padding:25px;
background-color:${props => (props.isDarkMode ? 'black' : '#f8fafc')};
`
export const AllHomeVideosContainer = styled.ul`
display:flex;
margin-top:6px;
flex-wrap:wrap;
justify-content:space-around;
margin-left:0;
padding-left:0;
margin-top:55px;
`
export const FailureContainer = styled.div`
text-align:center;
margin-top:30px;
`
export const FailureImg = styled.img`
height:320px;
width:320px;
`
export const FailureHead = styled.h1`
font-size:23px;
font-weight:600;
margin:0;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
`
export const FailureContent = styled.p`
font-size:20px;
font-weight:400;

color:${props => (props.isDarkMode ? '#475569' : '#1e293b')};
`
export const FailureRetry = styled.button`
font-size:18px;
color:white;
font-weight:600;
height:40px;
width:130px;
text-align:center;
background-color:#4f46e5;
border:none;
outline:none;
border-radius:4px;
cursor:pointer;
`
export const LoaderContainer = styled.div`
text-align:center;
`
