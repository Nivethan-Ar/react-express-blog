import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PublicRoute() {
  const auth = useAuth();
  return auth ? <Navigate to='/blogs' /> : <Outlet />;
}

export default PublicRoute;
