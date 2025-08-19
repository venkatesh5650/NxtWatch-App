import styled from 'styled-components'

export const HomeVideoContainer = styled.li`
height:320px;
width:90vw;
margin:0;
margin-bottom:20px;
padding:0;
list-style:none;
@media(min-width:576px){
    height:320px;
    width:340px;
    
}
@media(min-width:800px){
    height:320px;
    width:370px;
    
}
`
export const ThumbnailImg = styled.img`
height:200px;
width:100%;
margin:0;

`
export const Content = styled.div`
display:flex;
margin:0;
margin-top:8px;
margin-bottom:0;
padding-bottom:0;
`
export const ProfileImg = styled.img`
height:40px;
width:40px;
margin:0;
margin-right:8px;
`
export const MainContent = styled.p`
font-size:15px;
font-weight:400;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
text-align:start;
margin:0;

@media(min-width:576px){
    font-size:16px;
    }

`
export const AllTinyDetailsContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:0;
padding-top:0;
margin-left:8px;
@media(min-width:576px){
    display:block;
}
`
export const ChannelName = styled.p`
font-size:12px;
color:${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
width:80px;
@media(min-width:576px){
    font-size:15px;
    margin:0;
    padding:0;
    margin-top:6px;
    margin-bottom:6px;
    }
`
export const ListContainer = styled.div`
display:flex;
align-items:center;
margin:0;
padding:0;

`

export const ViewCount = styled.p`
display: list-item;
list-style-type: disc;
font-size:13px;
color:${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
width:80px;
list-style-type: disc;
@media(min-width:576px){
    font-size:14px;
    width:90px;
    margin:0;
    padding:0;
    list-style:none;
    }
`

export const ListItem = styled.p`
display: list-item;
list-style-type: disc; 
font-size:13px;
color:${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
width:80px;
list-style-type: disc;
@media(min-width:576px){
    font-size:14px;
    width:80px;
    margin:0;
    padding:0;
    }
`
