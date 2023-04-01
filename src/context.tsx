import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext<any>({});



const AppProvider = ({children}: any) => {

 
  const [range, setRange] = useState("")

  const [cars, setCars] = useState([]);
  const [filterCars, setFilterCars] = useState([])

  useEffect(() => {
    (async () => {
      await fetch("/cars.json")
        .then((response) => response.json())
        .then((data) => setCars(data));
    })();
  }, []);

  return(
    <AppContext.Provider value={{range, setRange, cars, setCars, filterCars, setFilterCars}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}

