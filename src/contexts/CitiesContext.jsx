import { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error in loading data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);

  if (!context)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
};

export { CitiesProvider, useCities };
