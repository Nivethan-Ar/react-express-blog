import { useEffect, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import API from '../utils/axios';

function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);
        console.log(res.data);
        setBlog(res.data as Blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog().catch((error) => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
    <div className='flex flex-col gap-y-6 h-full w-full pt-10 px-60 '>
      <div className='border rounded-2xl w-full h-72 flex justify-center'>
        <span className='text-8xl py-16'>
          <LuImagePlus />
        </span>
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold self-center text-3xl '>{blog.heading}</h1>
        <p>{blog.body}</p>
      </div>
    </div>
  );
}

export default BlogPage;
