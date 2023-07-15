import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/public';
import PrivateRoute from './routes/private';
import Login from './pages/login';
import Register from './pages/register';
import Settings from './pages/settings';
import Blogs from './pages/blogs';
import Navbar from './components/navbar';
import AddBlog from './pages/add-blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navbar Layout */}
        <Route element={<Navbar />}>
          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route index element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path='blogs' element={<Blogs />} />
            <Route path='add-blog' element={<AddBlog />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
