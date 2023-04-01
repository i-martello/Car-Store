import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { CarType } from './index'


const Car = ({ id, foto, precio, km, marca, modelo }: CarType) => {

  return (
    <div
      key={id}
      className="bg-white flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 cursor-pointer shadow-md hover:shadow-2xl hover:w-[101%] hover:h-[101%] transition duration-400"
    >
        <Link href={`/auto/${id}`}>
        <Image
          src={foto}
          className="w-full h-full object-cover overflow-hidden shadow-sm max-h-56 btn-"
          alt=""
          width={379}
          height={224}
        />
        <div className="flex flex-row w-full justify-between">
          <p
            className={`${
              km === "0 km" ? "bg-green-500" : "bg-yellow-500 "
            } m-2 leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase`}
          >
            {km}
          </p>
          <p className="mt-2 mb-2 mr-5 ml-2 leading-none text-[22px] font-semibold rounded-full">
            {precio}
          </p>
        </div>
        <a className="text-lg font-bold sm:text-xl md:text-2xl m-2">
          {marca} {modelo}
        </a>
        <p className="text-sm text-black m-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className="pt-2 pr-0 pb-2 pl-1">
          <a className="inline text-xs font-medium  m-2 underline">
            Jack Sparrow
          </a>
          <p className="inline text-xs font-medium  m-2">
            · 23rd, March 2021 ·
          </p>
          <p className="inline text-xs font-medium text-gray-300 m-2">
            1hr 20min. read
          </p>
        </div>
        </Link>
    </div>
  );
};

export default Car;
