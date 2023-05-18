'use client';
import React from 'react';

interface errorProps {
  error: Error;
  reset: () => void;
}
const error = ({ error, reset }: errorProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col space-y-5'>
      <h1 className='text-5xl text-red-200'>Error ❌❌</h1>
      <p className='text-red-50'>{error.name}</p>
      <div
        onClick={() => reset()}
        className='bg-green-600 py-3 px-2 rounded-lg shadow-md shadow-green-400 hover:cursor-pointer'
      >
        Reset
      </div>
    </div>
  );
};

export default error;
