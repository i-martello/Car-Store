import { useGlobalContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";

interface minMaxType {
  minprecio: number;
  maxprecio: number;
  maxkm: number;
  minkm: number;
}

interface numberToStringType {
  precio: number[] | undefined;
  km: number[] | undefined;
}

const Navbar = () => {
  const router = useRouter();

  const [minMax, setMinMax] = useState<minMaxType>({
    minprecio: 0,
    maxprecio: 0,
    maxkm: 0,
    minkm: 0,
  });
  const [numberToString, setNumberToString] = useState<numberToStringType>({
    precio: undefined,
    km: undefined,
  });

  const [Hidden, setHidden] = useState({
    minprecio: false,
    maxprecio: false,
    maxkm: false,
    minkm: false,
  });

  const { range, setRange, cars, setFilterCars, filterCars } =
    useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange({ ...range, [e.target.name]: e.target.value });
    if (range.minprecio) {
      setHidden({ minkm: true, maxprecio: true, maxkm: true, minprecio: false});
    }
    if (range.maxprecio) {
      setHidden({ minkm: true, maxprecio: false, maxkm: true, minprecio: true});
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (range) {
      setFilterCars(
        cars.filter(
          (car: any) =>
            (range.minprecio &&
              parseInt(range.minprecio) <=
                parseFloat(car.precio.replace(/[$/.]/g, ""))) ||
            (range.maxprecio &&
              parseInt(range.maxprecio) >=
                parseFloat(car.precio.replace(/[$/.]/g, "")))
        )
      );
    }
  };

  useEffect(() => {
    setNumberToString({
      ...numberToString,
      precio: cars.map((car: any) =>
        parseFloat(car.precio.replace(/[$/.]/g, ""))
      ),
      km: cars.map((car: any) => parseFloat(car.km.replace(/[^0-9]+/g, ""))),
    });
  }, [cars]);

  useEffect(() => {
    try {
      setMinMax({
        ...minMax,
        minprecio: numberToString.precio!.reduce((minimo, precio) =>
          Math.min(minimo, precio)
        ),
        maxprecio: numberToString.precio!.reduce((maximo, precio) =>
          Math.max(maximo, precio)
        ),
        maxkm: numberToString.km!.reduce((maximo, km) => Math.max(maximo, km)),
        minkm: numberToString.km!.reduce((minimo, km) => Math.min(minimo, km)),
      });
    } catch (error) {}
    setFilterCars(cars);
  }, [numberToString]);

  return (
    <div className="flex flex-col z-1 bg-gray-100 rounded shadow-lg h-[100vh] fixed overflow-y-auto overflow-x-hidden break-words w-[20%]">
      {router.query.id ? (
        <div>
          <Link href="/">
            <div className="flex w-[19%] bg-white z-50 fixed justify-center items-center text-lg font-medium text-green-500 p-1 mt-2 ml-2  border-b rounded-2xl border-gray-200 tracking-wide hover hover:bg-gray-300">
              <p>🠔 VOLVER</p>
            </div>
          </Link>
          <Comments />
        </div>
      ) : (
        <>
          <div className="relative m-4">
            <form>
              <label className="flex w-[70%] mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              {!Hidden.minprecio && (
                <div className="flex flex-col justify-center p-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Min-Precio
                  </label>
                  <input
                    name="minprecio"
                    type="range"
                    min={minMax.minprecio}
                    max={minMax.maxprecio}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    onChange={handleChange}
                  />
                  <label className="text-xl tracking-widest text-center mt-5	">
                    {range.minprecio}
                  </label>
                </div>
              )}
              {!Hidden.maxprecio && (
                <div className="flex flex-col justify-center p-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Max-Precio
                  </label>
                  <input
                    name="maxprecio"
                    type="range"
                    min={minMax.minprecio}
                    max={minMax.maxprecio}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    onChange={handleChange}
                  />
                  <label className="text-xl tracking-widest text-center mt-5	">
                    {range.maxprecio}
                  </label>
                </div>
              )}
              {!Hidden.minkm && <div className="flex flex-col justify-center p-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Min-KM
                </label>
                <input
                  type="range"
                  name="minkm"
                  min={minMax.minkm}
                  max={minMax.maxkm}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  onChange={handleChange}
                />
                <label className="text-xl tracking-widest text-center mt-5	">
                  {range.minkm}
                </label>
              </div>}
              {!Hidden.maxkm && <div className="flex flex-col justify-center p-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Max-KM
                </label>
                <input
                  name="maxkm"
                  type="range"
                  min={minMax.minkm}
                  max={minMax.maxkm}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  onChange={handleChange}
                />
                <label className="text-xl tracking-widest text-center mt-5	">
                  {range.maxkm}
                </label>
              </div>}
              <div className="flex justify-center">
                <input
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[90%] rounded-full cursor-pointer"
                  type="submit"
                  value="Filtrar"
                />
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Navbar;
