import { ChangeEvent, useState } from 'react';
import API from '../utils/axios';

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    console.log(loginData);
    const res = await API.post('/auth/signin', loginData);
    console.log(res.data);
  };

  return (
    <div className='flex justify-center'>
      <div className='pt-32 w-1/3 flex justify-center flex-col gap-y-12'>
        <h1 className='ml-auto mr-auto font-bold text-3xl'>Login</h1>
        <form className='space-y-6'>
          <div className='flex flex-col gap-y-1'>
            <label className='pl-2 font-semibold' htmlFor={'username'}>
              {'username'}
            </label>
            <input
              className='drop-shadow-lg rounded-md outline-none pl-2'
              type='text'
              name={'username'}
              id={'username'}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col gap-y-1'>
            <label className='pl-2 font-semibold' htmlFor={'password'}>
              {'password'}
            </label>
            <input
              className='drop-shadow-lg rounded-md outline-none pl-2'
              type='password'
              name={'password'}
              id={'password'}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          className='bg-violet-800 ml-auto mr-auto w-fit px-10 py-2 rounded-xl drop-shadow-2xl text-xl text-white font-bold'
          type='submit'
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
