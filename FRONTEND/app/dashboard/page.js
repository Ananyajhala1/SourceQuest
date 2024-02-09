import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex flex-col bg-white h-screen'>
        <header>
        <div className="flex-row">
            <div className="flex justify-end bg-gray-800 text-white p-2">
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

         <div className="bg-gray-200 rounded mb-4 h-56 items-center">
          <img
            src="https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"
            alt="Placeholder Image"
            className="w-full h-full object-cover rounded"
          />
        </div> 

        <div className='flex flex-row'>
         <div className="flex-shrink-0 bg-yellow-500 w-1/4 h-84 mr-4 ml-2 rounded">
        <div className="w-64 h-64 rounded-full bg-gray-300 overflow-hidden transform translate-y-[-50%] translate-x-[20%]">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQH-3tFURkvBmw/profile-displayphoto-shrink_800_800/0/1693336355093?e=1712793600&v=beta&t=yT3AiPXIi9uDjLlvATcaMQurA55hdJKX4u_z5vCWHrc"
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
