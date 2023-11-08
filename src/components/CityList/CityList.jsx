import Spinner from "../Spinner";
import Message from "../Message";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add you city by clicking on a city on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
