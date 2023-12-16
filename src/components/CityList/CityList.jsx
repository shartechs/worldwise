import Spinner from "../Spinner";
import Message from "../Message/Message";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import { useCities } from "../../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();
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
