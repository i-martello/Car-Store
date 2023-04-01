import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CarType } from "../index";
const AutoDetail = () => {
  const router = useRouter();
  const [Car, setCar] = useState<CarType>();

  useEffect(() => {
    (async () => {
      await fetch("/cars.json")
        .then((response) => response.json())
        .then((data) =>
          setCar(data.find((car: CarType) => car.id == router.query.id))
        );
    })();
  }, [router.query.id]);

  console.log(Car?.foto);

  return (
      <div className=" z-0 px-8 md:px-0 h-[100vh] top-0 right-0 left-0 bottom-0 overflow-hidden">
        <div className="bg-blue-900 h-full w-full text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
          <div className="flex justify-center">
            {" "}
            <Image
              alt=""
              width={900}
              height={900}
              src={Car?.foto!}
              className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide"
            ></Image>
          </div>
          <div className="text-3xl font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
            {Car?.marca} {Car?.modelo}
          </div>
          <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
            Stripe offers everything needed to run an online business at scale.
            Get in touch for details.
          </div>
          <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
            <div className="flex items-center text-2xl justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
              {Car?.km}
            </div>
            <div className="flex items-center text-2xl justify-center w-1/2 text-center p-4 border-b border-blue-800">
              {Car?.precio}
            </div>
          </div>
          <div className="bg-blue-800 flex justify-center m-auto text-center  hover:bg-blue-700 text-2xl p-8 font-semibold text-gray-300 uppercase mt-8">
            <span>Comprar ahora</span>
            <span className="font-medium text-gray-300 ml-2">➔</span>
          </div>
        </div>
      </div>
  );
};

export default AutoDetail;
