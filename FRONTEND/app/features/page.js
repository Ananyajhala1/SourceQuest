"use client"
import React, { useState } from 'react';
import './page.css'; // Import your CSS file
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

import Services from '../Services/page';

const navigation = [
  { name: 'About Us', href: '/aboutus' },
  { name: 'Features', href: '/features' },
]

const Features = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Chat with Github Chatbot', description: 'The chatbot made using Langchain reACT Agent, AstraDB, Mistral 8x7b LLM which helps in navigating queries related to any repository stored on Github and codebases.' },
    { title: 'Real time issue tracking', description: 'Vonage chat greatly helps in resolving issues on the go as they are directly sent on chat to you whenever a new issues open up or a repository of your preferred code language demands some work. ' },
    { title: 'Personalized Dashboards with incentives ', description: 'Open source on the go, with our customized dashboards to suit your contributor learning journey.' },
  ];

  return (
    <div className="relative h-screen">
            <header className="fixed inset-x-0 top-0 z-50 bg-white ">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Quest_2018.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/dashboard">      
            <div className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </div>
            </Link>
          </div>
        </nav>
        </header>
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
    </div>
    
    <div className="container mx-auto my-8 px-4 lg:px-8 py-8 translate-y-[60px]">
      <div className="p-8 text-8xl">
        <h1 style={{ color: 'black'}}>Features</h1>
      </div>

      {/* Right side container with text */}
      <div className="right-container items-center justify-between center bg-cover bg-center">
        <Services/>
      </div>
    </div>
  </div>
  );
};

export default Features;
