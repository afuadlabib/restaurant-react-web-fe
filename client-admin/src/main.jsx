import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import BaseLoading from './components/BaseLoading.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import store from './store';
import { Provider } from 'react-redux';
import './assets/styles/index.css';
const App = lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Suspense fallback={<BaseLoading />}>
          <App />
        </Suspense>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
