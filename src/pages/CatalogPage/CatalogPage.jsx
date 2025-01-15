import { useEffect, useState } from "react";
import { TruckCard } from "../../components/TruckCard/TruckCard";
import css from "./CatalogPage.module.css";
import axios from "axios";

const CatalogPage = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    async function fetchTrucks() {
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );
      setTrucks(response.data.items);
    }

    fetchTrucks();
  }, []);

  return (
    <section className={css.container}>
      {trucks.length > 0 && <TruckCard items={trucks} />}
    </section>
  );
};

export default CatalogPage;
