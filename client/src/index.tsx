import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App'

import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  </Provider>
)
