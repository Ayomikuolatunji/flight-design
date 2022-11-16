import { NavBar } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import DestinalModalPage from "./DestinalModalPage";
import FlightHero from "./FlightHero";
import MapScreen from "./MapScreen";

export default function Flight() {
  const { chooseLocation } = useAppSelector((state) => state.locationStore);

  return (
    <div>
      <NavBar />
      <FlightHero />
      <MapScreen />
      {chooseLocation && <DestinalModalPage />}
    </div>
  );
}
