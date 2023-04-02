import { useGlobalContext } from "@/context";
import { useEffect, useState } from "react";
import Car from "./car";

export type CarType = {
  id: string
  auto: string
  km: string;
  precio: string;
  foto: string;
};

export default function Home() {
  
  const [carsIndex, setCarsIndex] = useState<CarType[]>([])

  const { filterCars } = useGlobalContext();

  useEffect(()=>{
    setCarsIndex(filterCars)
  },[filterCars])

  return (
    <div className="text-gray-900 pt-10 pr-0 pb-14 pl-0 ">
      <div
        className="w-full mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16"
      >
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                md:space-y-5"
            >
              <div
                className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                  uppercase"
              >
                <p className="inline">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                      00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                      1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                      0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </p>
                <p className="inline text-xs font-medium">Nuevo!</p>
              </div>
              <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                Nissan Frontier
              </a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="text-sm font-medium inline">Autor:</p>
                <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                  Ignacio Martello :)
                </a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                  · 16 Marzo 2023 ·
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_138e445666654caca9b7c14367ba566e.webp"
                className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full shadow-lg shadow-black	"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          {carsIndex
            .sort((a, b) => a.auto.localeCompare(b.auto))
            .map(car => {
              return (
                <Car key={car.id} {...car}></Car>
              );
            })}
        </div>
      </div>
    </div>
  );
}
