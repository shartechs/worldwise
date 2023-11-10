import Spinner from "../Spinner";
import Message from "../Message";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

export default function CountryList({ cities, isLoading }) {
  const countires = cities.reduce((arr, city) => {
    return arr.map((el) => el.country).includes(city.country)
      ? arr
      : [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  console.log("cities", cities);

  console.log(countires);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add you city by clicking on a city on the map" />;
  return (
    <ul className={styles.countryList}>
      {countires.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
