'use client';
import React from 'react';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center animate-fade-in">
        <img
          src="/bake.gif"
          alt="Loading"
          className="w-40 h-40" // 160px
        />
        <p className="mt-4 text-xl font-semibold text-pink-600 animate-pulse">
          Baking something sweet...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoader;
