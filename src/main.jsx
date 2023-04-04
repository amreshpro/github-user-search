import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MyProvider from './context/MyProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  
<MyProvider>
<App />
</MyProvider>

)
