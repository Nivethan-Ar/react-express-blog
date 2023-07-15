import UserInfo from '../components/userinfo';

function Settings() {
  return (
    <div className='flex justify-center'>
      <div className='pt-10 w-1/3 flex justify-center flex-col gap-y-12'>
        <div className='self-center'>
          <img src='/account.png' alt='' />
        </div>
        <UserInfo label='Username' value='nivethan.me' />
        <UserInfo label='Email' value='nivethan.me@gmail.com' />

        <button
          className='bg-violet-800 w-fit self-center px-10 py-2 rounded-xl drop-shadow-2xl text-xl text-white font-bold'
          type='submit'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Settings;
