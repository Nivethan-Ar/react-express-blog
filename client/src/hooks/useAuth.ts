import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<boolean>(false);

  if (user) {
    return true;
  }
  return false;
};

export default useAuth;
