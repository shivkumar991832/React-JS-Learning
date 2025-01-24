import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {store} from "./redux/store.js"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* rap our app by provider, so our "redux store" can be accessable in whole app */}
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
