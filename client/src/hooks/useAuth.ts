import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<boolean>(true);

  if (user) {
    return true;
  }
  return false;
};

export default useAuth;
