import { useEffect, useState } from "react";
import { TruckCard } from "../../components/TruckCard/TruckCard";
import css from "./CatalogPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/transportation/operations.js";
import { VehicleType } from "../../components/VehicleType/VehicleType.jsx";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, error, perPage, items } = useSelector(
    (state) => state.transport
  );

  useEffect(() => {
    dispatch(fetchTrucks({ page, perPage }));
  }, [dispatch, page, perPage]);

  const handleLoadMore = () => {
    if (items.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <div className={css.filterContainer}>
        <VehicleType />
        <button type="button">Search</button>
      </div>
      <div className={css.truckContainer}>
        <TruckCard items={items} />

        {items.length > 0 && (
          <button onClick={handleLoadMore} className={css.button}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
