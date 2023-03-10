import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store';

const App = () => {
  const containerRef = useRef(null)

  function handleTouchStart(event) {
    containerRef.current.touchStartX = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDistance = touchEndX - containerRef.current.touchStartX;

    if (touchDistance > 50) {
      window.close()
    }
  }

  return (
    <Provider {...{ store }}>
      <div ref={containerRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <RouterProvider {...{ router }}>
        </RouterProvider>
      </div>
    </Provider>

  )
}

export default App
