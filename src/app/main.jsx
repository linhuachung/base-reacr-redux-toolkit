import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import '../Languages'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import { ThemeProviderChakra } from '../context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthContextProvider>
                    <ThemeProviderChakra>
                        <App/>
                    </ThemeProviderChakra>
            </AuthContextProvider>
        </BrowserRouter>
    </Provider>,
)
