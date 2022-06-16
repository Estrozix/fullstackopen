import React from 'react'
import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import App from './App'

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

ReactDOM.

refresh()
counter += 1
refresh()
counter += 1
refresh()