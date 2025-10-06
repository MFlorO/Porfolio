import React from 'react';
import Image from 'next/image';

const StackCard = ({ stack }:{ stack:string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
    {
      stack?.map((s: string, i: number) => (
        <span key={i} className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
            <Image
              src={`/logos/${s.toLowerCase()}.svg`}
              alt={s}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            {s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()}
        </span>
      ))
    }
    </div>
  )
}

export default StackCard