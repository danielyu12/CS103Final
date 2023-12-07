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
import Casual from './Pages/Casual/Casual';
import FineDining from './Pages/FineDining/FineDining';
import FastCasual from './Pages/FastCasual/FastCasual';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="restaurants">
        <Route index element={<Restaurants />} />
        <Route path="casual" element={<Casual />} />
        <Route path="finedining" element={<FineDining />} />
        <Route path="fastcasual" element={<FastCasual />} />
      </Route>
      <Route path="coffee" element={<Coffee />} />
      <Route path="nightlife" element={<Nightlife />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
