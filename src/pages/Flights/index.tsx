import { NavBar } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import DestinationModalPage from "./DestinationModalPage";
import FlightHero from "./FlightHero";
import MapScreen from "./MapScreen";
import WhereToModalPage from "./WhereToModalPage";

export default function Flight() {
  const {
    chooseLocationCurrent,
    chooseLocationWhereTo,
    selectedWhereToLocation,
  } = useAppSelector((state) => state.locationStore);

  console.log(selectedWhereToLocation);

  return (
    <div>
      <NavBar />
      <FlightHero />
      <MapScreen />
      {chooseLocationCurrent && <DestinationModalPage />}
      {chooseLocationWhereTo && <WhereToModalPage />}
    </div>
  );
}
