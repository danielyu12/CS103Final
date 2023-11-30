import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Restaurants from './Pages/Restaurants/Restaurants';
import Coffee from './Pages/Coffee/Coffee';
import Nightlife from './Pages/Nightlife/Nightlife';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="coffee" element={<Coffee />} />
      <Route path="nightlife" element={<Nightlife />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
