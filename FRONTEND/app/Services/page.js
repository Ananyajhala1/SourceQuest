"use client"
import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Chat with Github Chatbot', description: 'The chatbot made using Langchain reACT Agent, AstraDB, Mistral 8x7b LLM which helps in navigating queries related to any repository stored on Github and codebases.' },
    { title: 'Real time issue solving', description: 'Vonage chat greatly helps in resolving issues on the go as they are directly sent on chat to you whenever a new issues open up or a repository of your prefferred code language demands some work. ' },
    { title: 'Personalized Dashboards with incentives ', description: 'Open source on the go, with our customized dashboards to suit your contributor learning journey.' },
  ];

  return (
    <div className="flex">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="w-1/2 h-12 p-8">
        <div className="flex flex-row gap-8 h-12px">
          {services.map((service, index) => (
            <div
              key={index} 
              className={`relative translate-x-[-90px] w-56 mr-4 h-64 p-8 rounded-md ${
                hoveredService === index ? 'shadow-lg' : 'shadow'
              } transition duration-300`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className='translate-x-[-12px]'>
              <h2
                className={`text-xl font-bold text-center justify-between mb-4 w-48 mr-4 transition duration-300 ${
                  hoveredService === index ? 'transform -translate-y-2' : ''
                }`}
                style={{ color: hoveredService === index ? '#a866ee' : '' }}
              >
                {service.title}

              </h2>
              <p 
                className={`text-gray-600 text-sm text-center w-48 flex items-center justify-center transform origin-bottom transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: hoveredService === index ? '#a866ee' : '' }}
              >
                {service.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 absolute top-24 left-[60%] mr-8 ml-8 mb-8">
        <img src='demand.gif'
        className='h-96 w-96'/>
      </div>
    </div>
  );
};

export default Services;
