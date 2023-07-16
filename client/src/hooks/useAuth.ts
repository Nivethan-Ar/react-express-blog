import { useAppSelector } from '../redux/app/hook';
import { RootState } from '../redux/app/store';

const useAuth = () => {
  const user = useAppSelector((state: RootState) => state.auth.userId);

  if (user) {
    return true;
  }
  return false;
};

export default useAuth;
