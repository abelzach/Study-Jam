'use client';
import React, { useState } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const colors = [
    { bg: 'bg-blue-700', hover: 'hover:bg-blue-800' },
    { bg: 'bg-red-700', hover: 'hover:bg-red-800' },
    { bg: 'bg-green-700', hover: 'hover:bg-green-800' },
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
    handleButtonColorClick();
  };
  const handleButtonColorClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };
  const currentColor = colors[currentColorIndex];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">TinkerHub:Typescript Study Jam</h1>
      </div>

        <button type="button" className={`text-white ${currentColor.bg} ${currentColor.hover} focus:ring-4 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 focus:outline-none`} onClick={handleButtonClick}>TinkerHub</button>
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">TinkerHub button clicked <span className="text-blue-600 dark:text-blue-500">{clickCount}</span> times</h3>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </main>
  )
}
