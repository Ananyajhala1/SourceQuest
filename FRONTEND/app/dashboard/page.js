'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/client')
    }
  })
  return (
    <div className='flex flex-col bg-white h-screen'>
        <header>
        <div className="flex-row">
            <div className="flex justify-end text-black p-2">
               <div className="flex items-center space-x-4">
                 <button className="hover:text-gray-300">
                  Settings
                </button>
               <button className="hover:text-gray-300">
                 Logout
               </button>
              </div>
            </div>
         </div>
        </header> 

         <div className="bg-gray-200 p-10 rounded mb-4 h-56 items-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Placeholder Image"
            className="w-1/4 h-2/3 object-cover rounded"
          />
        </div> 

        <div className='flex flex-row'>
         <div className="flex-shrink-0 bg-orange-500 w-1/4 h-84 mr-4 ml-2 rounded">
        <div className="w-64 h-64 rounded-full bg-gray-300 overflow-hidden transform translate-y-[-50%] translate-x-[20%]">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>

          </div> 
          <div className='flex flex-col'>
          <div className="flex mb-4">

          <div className="w-80 ml-4 mr-4">
            <div className="bg-gray-200 p-6 rounded">
              <p className="text-gray-700">Contributor at: XYZ</p>
            </div>
          </div> 

          <div className="w-80 pr-4">
            <div className="bg-gray-200 p-6 rounded">
              <p className="text-gray-700">Stars Ratings: 5</p>
            </div>
          </div>

          <div className="w-80">
            <div className="bg-gray-200 p-6 rounded">
              <p className="text-gray-700">Issues Solved: 20</p>
            </div>
          </div> 

        </div>
        <div className="bg-gray-200 ml-4 h-64 p-10 rounded">
          <p className="text-gray-700">Roadmap</p>
        </div>
          </div>
          </div>
          
        </div>
        
  );
};

export default Dashboard;
