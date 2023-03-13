import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://www.freepnglogos.com/uploads/youtube-logo-red-hd-13.png"
                    alt="logo"
                />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
