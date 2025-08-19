import styled from 'styled-components'

export const MainContainer = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:${props => (props.isDarkMode ? '#212121' : 'white')};
`
export const LoginContainer = styled.div`
padding:25px;
width: 340px;
height: 450px;
background-color:${props => (props.isDarkMode ? '#000000' : 'white')};
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
@media(min-width:768px){
    width: 420px;
    height: 440px;
}

`

export const LogoContainer = styled.div`
text-align:center
`

export const WebsiteLogo = styled.img`
height:40px;
width:150px;
@media(min-width:768px){
    height:50px;
    width:180px;
}

`

export const InputContainer = styled.div`
display:flex;
flex-direction:column;

`

export const Label = styled.label`
font-size:17px;
color:${props => (props.isDarkMode ? 'white' : '#475569')};
font-weight:500;
margin-top:20px;
margin-bottom:8px;

`
export const Input = styled.input`
height:46px;
width:300px;
font-size:20px;
padding-left:15px;
color:${props => (props.isDarkMode ? 'white' : 'black')};
border-radius:5px;
border:solid #94a3b8 0.5px;
background:transparent;
@media(min-width:768px){
    height:46px;
    width:350px;
}
`
export const CheckBoxContainer = styled.div`
display:flex;
align-items:center

`
export const CheckBoxLabel = styled.label`
font-size:20px;
font-weight:400;
color:${props => (props.isDarkMode ? 'white' : 'black')};
margin-top:20px;
margin-bottom:27px;
cursor:pointer;
`
export const CheckboxInput = styled.input`
height:20px;
width:20px;
margin-right:10px;
margin-top:20px;
margin-bottom:27px;
cursor:pointer;
`
export const LoginBtn = styled.button`
height:48px;
width:300px;
background-color:#3b82f6;
color:white;
font-size:23px;
font-weight:600;
border-radius:8px;
border:none;
outline:none;
text-align:center;
cursor:pointer;
@media(min-width:768px){
    height:48px;
    width:350px;
}

`
export const ErrorMsg = styled.p`
color:red;
font-size:20px;
font-weight:500;
margin:0;

`
