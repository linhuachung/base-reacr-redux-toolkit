import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'src/routes/routes.jsx'
import PropTypes from 'prop-types'
import { LocalStore } from 'src/utils/storage.js'

const AuthContext = createContext({
    signOut: () => {},
})

const { isExist, get, remove } = LocalStore

function AuthContextProvider({ children }) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(isExist('access_token'))

    useEffect(() => {
        if (isExist('access_token')) {
            setIsLogin(true)
        }
    }, [get('access_token', true)])

    const signIn = () => {
        setIsLogin(true)
        navigate(Routes.HOME.path)
    }
    const signOut = () => {
        remove('access_token')
        setIsLogin(false)
        navigate(Routes.AUTH.LOGIN)
    }

    const valueProps = {
        signIn,
        signOut,
        isLogin,
    }
    return <AuthContext.Provider value={valueProps}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.any,
}

export { AuthContext, AuthContextProvider }
