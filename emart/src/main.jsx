import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './CartRedux/Store.jsx'
import {Provider} from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-oeawj7o6lhq7owc6.us.auth0.com"
    clientId="oT0Q9TpnU9aIaQ0qk1NCZbKQS7EY7MXK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <Provider store={store}>
        <App/>
    </Provider>
  </Auth0Provider>
</React.StrictMode>

)
