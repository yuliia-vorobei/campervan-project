import { useEffect, useState } from "react";
import { TruckCard } from "../../components/TruckCard/TruckCard";
import css from "./CatalogPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/transportation/operations.js";
import { VehicleFilters } from "../../components/VehicleFilters/VehicleFilters.jsx";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { total, isLoading, error, perPage, items } = useSelector(
    (state) => state.transport
  );
  const filter = useSelector((state) => state.filters.data);

  const totalPages = Math.ceil(total / perPage);

  useEffect(() => {
    dispatch(fetchTrucks({ page, perPage, filter }));
  }, [dispatch, page, perPage, filter]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <div className={css.filterContainer}>
        <VehicleFilters />
      </div>
      <div className={css.truckContainer}>
        <TruckCard items={items} />

        {totalPages > page && (
          <button onClick={handleLoadMore} className={css.button}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
