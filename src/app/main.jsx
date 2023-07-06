import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import 'src/Languages'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from 'src/context/AuthContext.jsx'
import { ThemeProviderChakra } from 'src/context/ThemeContext.jsx'
import { store } from 'src/store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProviderChakra>
                    <App />
                </ThemeProviderChakra>
            </AuthContextProvider>
        </BrowserRouter>
    </Provider>
)
