import {Component} from 'react'
import {Redirect} from "react-router-dom"
import Cookies from 'js-cookie'
import ReactContext from '../../Context/ReactContext'

import {
  MainContainer,
  LoginContainer,
  WebsiteLogo,
  Label,
  Input,
  InputContainer,
  LogoContainer,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckboxInput,
  LoginBtn,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showpassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showpassword: !prevState.showpassword}))
  }

  redirectToHome = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 5})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.redirectToHome(data)
    }
    this.setState({errorMsg: data.error_msg})
  }

  render() {
    const {username, password, showpassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <MainContainer isDarkMode={isDarkMode}>
              <LoginContainer isDarkMode={isDarkMode}>
                <LogoContainer>
                  <WebsiteLogo
                    src={
                      isDarkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                    isDarkMode={isDarkMode}
                  />
                </LogoContainer>
                <form onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label htmlFor="userName" isDarkMode={isDarkMode}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="userName"
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                      value={username}
                      isDarkMode={isDarkMode}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input
                      type={showpassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                      isDarkMode={isDarkMode}
                    />
                  </InputContainer>
                  <CheckBoxContainer>
                    <CheckboxInput
                      type="checkbox"
                      checked={showpassword}
                      onChange={this.onToggleShowPassword}
                      id="checkBox"
                    />
                    <CheckBoxLabel htmlFor="checkBox" isDarkMode={isDarkMode}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckBoxContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {errorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </form>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Login
