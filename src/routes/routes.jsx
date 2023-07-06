import { lazy, Suspense, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import Header from 'src/app/header/index.jsx'
import Page from 'src/components/page/index.jsx'
import { Loading } from 'src/components/Loading/index.jsx'
import { COLORS } from 'src/theme/colors.js'
import { AuthContext } from 'src/context/AuthContext.jsx'
import Footer from 'src/app/footer/index.jsx'

export const Login = lazy(() => import('src/pages/auth/login'))
export const Register = lazy(() => import('src/pages/auth/register'))
export const ForgetPassword = lazy(() => import('src/pages/auth/forget-password'))
export const Home = lazy(() => import('src/pages/home'))
export const ProductList = lazy(() => import('src/pages/product/product-list'))
export const ProductDetail = lazy(() => import('src/pages/product/product-detail'))
export const Cart = lazy(() => import('src/pages/cart/index.jsx'))

function ProtectedRoute() {
    const { isLogin } = useContext(AuthContext)
    return isLogin ? <Outlet /> : <Navigate to={Routes.AUTH.LOGIN.path} />
}

function RejectedRoute() {
    const { isLogin } = useContext(AuthContext)
    return !isLogin ? <Outlet /> : <Navigate to={Routes.HOME.path} />
}

function AppLayout({ children }) {
    return (
        <Box>
            <Header />
            <Page>
                <Suspense fallback={<Loading thickness='2px' speed='0.6s' emptyColor={COLORS.BLUE50} color={COLORS.BLUE900} size='lg' />}>{children}</Suspense>
            </Page>
            <Footer />
        </Box>
    )
}

const Routes = {
    AUTH: {
        path: '/auth',
        LOGIN: 'login',
        REGISTER: 'register',
        FORGET_PASSWORD: 'forget-password',
    },
    HOME: {
        path: '/',
    },
    PRODUCT: {
        path: '/product',
        PRODUCT_lIST: 'list',
        PRODUCT_DETAIL: 'detail/:productId',
    },
    CART: {
        path: '/cart/products',
    },
}

AppLayout.propTypes = {
    children: PropTypes.any,
}

export { Routes, ProtectedRoute, RejectedRoute, AppLayout }
