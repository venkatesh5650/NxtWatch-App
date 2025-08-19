import styled from 'styled-components'

export const TrendingVideoContainer = styled.div`
margin:0;
margin-bottom:14px;
margin-top:14px;
background-color:${props => (props.isDarkMode ? 'black' : 'white')};
@media(min-width:576px){
    width:900px;
    height:360px;
    margin-right:15px;
    display:flex;
    margin-left:50px;
    margin-bottom:0;
}
`

export const ThumbnailImg = styled.img`
height:200px;
width:100%;
margin:0;
@media(min-width:576px){
    height:300px;
    width:50%;
}

`
export const Content = styled.div`
display:flex;
margin:0;
margin-top:8px;
margin-bottom:0;
padding-bottom:0;
@media(min-width:576px){
    margin-left:20px;
}
`
export const ProfileImg = styled.img`
height:40px;
width:40px;
margin:0;
margin-right:8px;
@media(min-width:576px){
    display:none;
}
`
export const MainContent = styled.p`
font-size:15px;
font-weight:400;
color:${props => (props.isDarkMode ? 'white' : '#1e293b')};
text-align:start;
margin:0;

@media(min-width:576px){
    font-size:26px;
    
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
    font-size:20px;
    margin:0;
    padding:0;
    margin-top:6px;
    margin-bottom:6px;
    }
`
export const ListContainer = styled.ul`
display:flex;
align-items:center;
margin:0;
padding:0;

`

export const ViewCount = styled.li`
font-size:13px;
color:${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
width:80px;
list-style-type: disc;
@media(min-width:576px){
    font-size:17px;
    width:120px;
    margin:0;
    padding:0;
    list-style:none;
    }
`

export const ListItem = styled.li`
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
