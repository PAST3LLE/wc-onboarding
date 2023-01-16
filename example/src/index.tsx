import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import GlobalCSS from './styles/global'

const App = () => {
  return (
    <div>
      <h1>EXAMPLE APP</h1>
      <p>CODE HERE</p>
    </div>
  )
}

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
  <>
    <GlobalCSS />
    <App />
  </>
)
