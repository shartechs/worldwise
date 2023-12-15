import { useState } from "react";

export const useGeolocation = (defaultPoistion = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPoistion);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );

    console.log(position);
  }

  return { isLoading, position, error, getPosition };
};
