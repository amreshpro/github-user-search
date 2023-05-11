import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// font
import './assets/fonts/font.css'

import SearchLogic from './controller/SearchLogic'

// Auth0
import { Auth0Provider } from "@auth0/auth0-react";




ReactDOM.createRoot(document.getElementById('root')).render(
  
<Auth0Provider



domain="dev-403ejmfvkjgkf1ic.us.auth0.com"
clientId="gqmEr9i6vERXG0a2lJiPChNmApxCjUq9"
authorizationParams={{
  redirect_uri: window.location.origin
}}


useRefreshTokens={true}
cacheLocation="localstorage"

>
<SearchLogic>
<App />
</SearchLogic>
</Auth0Provider>


)
