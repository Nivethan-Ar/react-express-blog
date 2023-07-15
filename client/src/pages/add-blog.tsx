/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ChangeEvent, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import API from '../utils/axios';

function AddBlog() {
  const [selectedFile, setSelectedFile] = useState();
  const [previewImage, setPreviewImage] = useState();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (
    e: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = {
      image: selectedFile,
      heading: e.currentTarget.elements.heading.value,
      body: e.currentTarget.elements.content.value,
      author: '614c57f9a4c7c729a0552a5d',
    };

    try {
      const response = await API.post('/blogs', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-full w-full pt-10 px-32 '>
      <form onSubmit={handleSubmit} action='' className='flex flex-col gap-y-8'>
        <label
          className='border rounded-2xl w-full h-72 flex justify-center'
          htmlFor='image'
        >
          {previewImage ? (
            <img
              src={previewImage}
              alt='Preview'
              className='object-cover rounded-2xl'
            />
          ) : (
            <span className='text-8xl py-16'>
              <LuImagePlus />
            </span>
          )}
          <input
            className='hidden'
            onChange={handleFileChange}
            type='file'
            name='image'
            id='image'
          />
        </label>
        <input
          className='outline-none pl-2'
          placeholder='A catchy title'
          autoFocus={true}
          type='text'
          name='heading'
          id='heading'
        />

        <div>
          <textarea
            className='w-full min-h-[10rem] rounded-2xl outline-none pl-2 '
            name='content'
            id='content'
            placeholder='what"s on your mind?..'
          ></textarea>
        </div>
        <button
          className='bg-violet-800 w-fit self-center px-10 py-2 rounded-xl drop-shadow-2xl text-xl text-white font-bold'
          type='submit'
        >
          Post
        </button>
      </form>
    </div>
  );
}
export default AddBlog;
