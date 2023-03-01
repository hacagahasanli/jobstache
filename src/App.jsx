import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


const App = () => {
  return (
    <RouterProvider {...{ router }}>

    </RouterProvider>
  )
}

export default App
