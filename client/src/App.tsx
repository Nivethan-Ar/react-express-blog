import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/public';
import PrivateRoute from './routes/private';
import Login from './pages/login';
import Register from './pages/register';
import Settings from './pages/settings';
import Blogs from './pages/blogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='blogs' element={<Blogs />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
