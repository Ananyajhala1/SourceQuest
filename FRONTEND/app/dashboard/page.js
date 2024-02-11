'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const Dashboard = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/client');
    }
  })
  const [rating, setRating] = useState(3); 
  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500 text-5xl" : "text-gray-300 text-5xl"}>
        &#9733;
      </span>
    ));
  
    return <div className="flex">{stars}</div>;
  };
  return (
   // Inside the Dashboard component
<div className='flex flex-col bg-white h-screen'>
  <header className='text-black'>
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center'>
        <img
          className='h-8 w-auto'
          src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Quest_2018.svg'
          alt=''
        />
      </div>
      <div className='flex items-center space-x-4'>
        <input
          type='text'
          placeholder='Search...'
          className='px-3 py-2 border-2 border-black rounded focus:outline-none focus:border-orange-500'
        />
       <Link href='/'>
        <button className='hover:text-gray-300 px-4 py-2 bg-yellow-500 hover:bg-orange-600 text-white rounded transition duration-300'>
        
          Logout
        

        </button>
        </Link>
      </div>
    </div>
  </header>

  <div className='rounded mb-4 h-56 items-center'>
    <img
      src='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.webp?b=1&s=170667a&w=0&k=20&c=Bgm3zyKSNuGa8CwHq3OS3W9ahfCFQrdNfFh4O5RSG-A='
      alt='Placeholder Image'
      className='w-full h-full object-cover rounded'
    />
  </div>

  <div className='flex flex-row'>
    <div className='flex flex-col justify-between items-center flex-shrink-0 bg-white w-1/4 h-84 mr-4 ml-4 mb-2 rounded'>
      <div className='w-56 h-56 rounded-full overflow-hidden drop-shadow-2xl translate-y-[-96px]'>
        <img
          src='https://media.licdn.com/dms/image/D4D03AQH-3tFURkvBmw/profile-displayphoto-shrink_800_800/0/1693336355093?e=1712793600&v=beta&t=yT3AiPXIi9uDjLlvATcaMQurA55hdJKX4u_z5vCWHrc'
          alt='Profile'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='translate-y-[-90px] text-center'>
        <h1 className='font-bold text-2xl'>Jhanvi Mehta</h1>
        <p className='text-sm text-gray-500'>IT sophomore at IIIT Vadodara</p> <br />
        <StarRating className='' rating={rating} />
        {/* Button to Chat */}
        <button className='mt-4 px-4 py-2 bg-yellow-500 hover:bg-orange-600 text-white rounded transition duration-300'>
          Chat with User
        </button>
      </div>
    </div>

    <div className='flex flex-col translate-y-[-80px] '>
       <div className='flex flex-row h-36'>
       <div className='w-80 ml-4 mr-4 '>
        <div className='bg-gradient-to-t from-yellow-300 to-white p-6 flex flex-row justify-between items-center rounded-xl border border-yellow-500 hover:border-orange-600 border-[2px] transition duration-300'>
          <img src='coisn.gif' className='w-20 h-20' />
          <p className='text-gray-800 text-center text-lg font-semibold tracking-wide leading-tight'> Check in Badge</p>
        </div>
      </div>
      <div className='w-80 pr-4'>
        <div className='bg-gradient-to-t from-yellow-300 to-white p-6 flex flex-row justify-between items-center rounded-xl border border-yellow-500 hover:border-orange-600 border-[2px] transition duration-300'>
          <img src='gift.gif' className='w-20 h-20' />
          <p className='text-gray-800 text-center text-lg font-semibold tracking-wide leading-tight'>Daily task completion Badge</p>
        </div>
      </div>
      <div className='w-80 h-60'>
        <div className='bg-gradient-to-t from-yellow-300 to-white p-6 flex flex-row justify-between items-center rounded-xl border border-yellow-500 hover:border-orange-600 border-[2px] transition duration-300'>
          <img src='chart.gif' className='w-20 h-20' />
          <p className='text-gray-800 text-center text-lg font-semibold tracking-wide leading-tight'>Progress Badge</p>
        </div>
      </div>
       </div>

  {/* Big horizontal rectangular box with three boxes inside */}
<div className='bg-yellow-100 p-4 h-56 mt-4'>
  <div className='flex justify-between'>
    <div className='w-1/3 h-48 bg-white p-4 mr-4 rounded flex flex-col justify-between'>
      {/* Content for the first box */}
      <div>
        <h1 className="font-bold text-xl mb-2 text-center">REPO 1</h1>
        <div className="flex space-x-2 mb-2 justify-center">
          <div className="bg-blue-500 text-white px-2 py-1 rounded">
            React JS
          </div>
          <div className="bg-green-500 text-white px-2 py-1 rounded">
            Next.js
          </div>
          {/* Add more badges for additional tech stack */}
        </div>
      </div>
      <button className="border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded mx-auto mt-2 hover:bg-yellow-500 hover:text-white active:bg-gray-400 transition duration-300">
        Go to Repository
      </button>
    </div>
    <div className='w-1/3 h-48 bg-white p-4 mr-4 rounded flex flex-col justify-between'>
      {/* Content for the second box */}
      <div>
        <h1 className="font-bold text-xl mb-2 text-center">REPO 2</h1>
        <div className="flex space-x-2 mb-2 justify-center">
          <div className="bg-red-500 text-white px-2 py-1 rounded">
            Angular
          </div>
          <div className="bg-yellow-500 text-white px-2 py-1 rounded">
            TypeScript
          </div>
          {/* Add more badges for additional tech stack */}
        </div>
      </div>
      <button className="border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded mx-auto mt-2 hover:bg-yellow-500 hover:text-white active:bg-gray-400 transition duration-300">
        Go to Repository
      </button>
    </div>
    <div className='w-1/3 h-48 bg-white p-4 rounded flex flex-col justify-between'>
      {/* Content for the third box */}
      <div>
        <h1 className="font-bold text-xl mb-2 text-center">REPO 3</h1>
        <div className="flex space-x-2 mb-2 justify-center">
          <div className="bg-purple-500 text-white px-2 py-1 rounded">
            Vue.js
          </div>
          <div className="bg-indigo-500 text-white px-2 py-1 rounded">
            Node.js
          </div>
          {/* Add more badges for additional tech stack */}
        </div>
      </div>
      <button className="border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded mx-auto mt-2 hover:bg-yellow-500 hover:text-white active:bg-gray-400 transition duration-300">
        Go to Repository
      </button>
    </div>
  </div>
</div>





    </div>
  </div>
</div>

  );
  
};

export default Dashboard;