import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import { router } from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider {...{ store }}>
      <RouterProvider {...{ router }}>
      </RouterProvider>
    </Provider>

  )
}

export default App
