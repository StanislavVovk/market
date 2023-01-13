import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';
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
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <App/>
      </DevSupport>
    </React.StrictMode>
  </Provider>
)
