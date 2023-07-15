import { FaPlusCircle } from 'react-icons/fa';
import Card from '../components/card';

function Blogs() {
  return (
    <div className=' bg-[#f4f7fa]'>
      <div className='bg-blue-400/70 text-4xl py-10 flex flex-col gap-y-4 justify-center items-center w-screen '>
        <span className='text-xl font-sans font-bold tracking-wide'>
          The Blog : Sharing Stories, Thoughts & Ideas
        </span>
        <span className='text-white drop-shadow-2xl'>
          <FaPlusCircle />
        </span>
      </div>

      {/* blog cards */}
      <div className='grid grid-cols-1 md:grid-cols-3  gap-8 px-20 md:px-32 py-12 md:py-16'>
        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />

        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />
        <Card
          heading='Healthy software metrics: How successful software teams measure their work'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />
        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />

        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />
        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />
        <Card
          heading='How to use ChatGPT"s new “Code Interpreter” feature'
          author='Adam Ispen'
          createdAt='Jul 14, 2023'
        />
      </div>
    </div>
  );
}
export default Blogs;
