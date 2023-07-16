/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from 'react';
import UserInfo from '../components/userinfo';
import { useAppDispatch, useAppSelector } from '../redux/app/hook';
import { RootState } from '../redux/app/store';
import { logout } from '../redux/features/auth/auth-slice';
import API from '../utils/axios';

function Settings() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [userInfo, setUserInfo] = useState<{ username: string; email: string }>(
    {}
  );

  const userId = useAppSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get(`/users/${userId}`);
        setUserInfo({ ...res.data });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className='flex justify-center'>
      <div className='pt-10 w-1/3 flex justify-center flex-col gap-y-12'>
        <div className='self-center'>
          <img src='/account.png' alt='' />
        </div>
        <UserInfo label='Username' value={userInfo?.username} />
        <UserInfo label='Email' value={userInfo?.email} />

        <button
          className='bg-violet-800 w-fit self-center px-10 py-2 rounded-xl drop-shadow-2xl text-xl text-white font-bold'
          type='button'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Settings;
