import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const TrendingPage = styled.div`
min-height:100vh;
max-width:100vw;

`

export const TrendingRightBar = styled.div`
padding:1px;
width:100vw;
@media(min-width:576px){
    width:78vw;
}

`
export const TrendingContainer = styled.div`
background-color:${props => (props.isDarkMode ? 'black' : 'white')};
width:100vw;
@media(min-width:576px){
    display:flex;
    
}

`

export const AllTrendingVideos = styled.div`
@media(min-width:576px){
    
}

`

export const TrendingView = styled.div`
display:flex;
align-items:center;
width:100%;
padding-left:25px;

background-color:${props => (props.isDarkMode ? '#1e293b' : '#f8fafc')};
@media(min-width:576px){
    background-color:${props => (props.isDarkMode ? 'black' : '#cccccc')};
    padding-top:15px;
    padding-bottom:15px;
    padding-left:40px;
}
`

export const FireIcon = styled(FaFire)`
height:50px;
width:50px;
padding:10px;
background-color:#e2e8f0;
border-radius:30px;
margin-right:15px;
color:red;
@media(min-width:576px){
  height:60px;
width:60px;
    }
`
export const CategoryHead = styled.h1`
font-size:30px;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
@media(min-width:576px){
    font-size:40px;
    }
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
