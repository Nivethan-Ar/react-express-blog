interface Props {
  heading: string;
  createdAt: string;
}

export default function Card(props: Props) {
  const { heading, createdAt } = props;

  return (
    <div className='min-h-[24rem] bg-white rounded-2xl'>
      <div className='w-full h-full p-4'>
        <img
          src='/boy-with-dog.jpeg'
          className='rounded-2xl object-cover'
          alt=''
        />
        <div className=' flex flex-col justify-between gap-y-4 mt-6'>
          <p className='font-bold min-h-[]'>{heading}</p>
          <p>{createdAt}</p>
          <p className='text-rose-600 font-semibold'>Learn more</p>
        </div>
      </div>
    </div>
  );
}
