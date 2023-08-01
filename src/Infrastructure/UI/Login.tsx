import { useState } from 'react'
import './Styles/Login.css'
import { type UserService } from '../../Application/UserService'
import { UserDTO } from '../../Application/UserDTO'
import { Container } from 'typedi'
import { StoreFacade } from '../Store/StoreFacade'

const Login: React.FC = () => {
  const container = Container.of('user')
  const service: UserService = container.get('UserService')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setAuth] = useState(false)
  const updateUsername = StoreFacade().updateUsername

  const handleLogin = (): void => {
    const credentials = new UserDTO(username, password)
    service.login(credentials).then(
      (response) => {
        setAuth(response)
        if (isAuth) {
          updateUsername(username)
          alert('Login successful')
        } else {
          alert('Login failed')
        }
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  return (
    <div className='parent-wrapper'>
      <div className='wrapper'>
        <h1 >
          Login
        </h1>
        <div className='input-box'>
          <input type="text" placeholder="Username"
            onChange={(e) => { setUsername(e.target.value) }} required />
          <i className='bx bxs-user'></i>
        </div>
        <div className='input-box'>
          <input type="password" placeholder="Password"
            onChange={(e) => { setPassword(e.target.value) }}
            required />
          <i className='bx bxs-lock-alt' ></i>
        </div>
        <button type="submit" className="btn-submit" onClick={handleLogin}>Login</button>
        <div className='register-link'>
          <p> {"Don't have an account? "}<a href="#">Sign up</a></p>
        </div>
      </div>

    </div>

  )
}

export default Login
