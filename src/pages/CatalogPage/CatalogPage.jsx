import { useEffect } from "react";
import { TruckCard } from "../../components/TruckCard/TruckCard";
import css from "./CatalogPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/transportation/operations.js";
import { isLoading, isError } from "../../redux/transportation/selectors.js";
import { VehicleType } from "../../components/VehicleType/VehicleType.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(isError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <section className={css.container}>
      {loading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <div className={css.filterContainer}>
        <VehicleType />
        <button type="button">Search</button>
      </div>
      <TruckCard />
    </section>
  );
};

export default CatalogPage;
