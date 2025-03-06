import React from 'react';
import Image from 'next/image';

const HomeScreen = () => {
  const size = "w-[500px] h-[700px]";
  return (

    <div className="flex items-center justify-center gap-6">
      <div className={`curry ${size} rounded-lg`}></div>
      <div className={`cavs ${size} rounded-lg`}></div>
      <div className={`team ${size} rounded-lg`}></div>
    </div>
  );
}

export default HomeScreen;