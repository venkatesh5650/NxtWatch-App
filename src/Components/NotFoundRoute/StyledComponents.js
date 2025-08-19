import styled from 'styled-components'


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
