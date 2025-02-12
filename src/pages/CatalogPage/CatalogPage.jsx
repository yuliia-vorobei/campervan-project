import { useEffect, useState } from "react";
import { TruckCard } from "../../components/TruckCard/TruckCard";
import css from "./CatalogPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/transportation/operations.js";
import { VehicleFilters } from "../../components/VehicleFilters/VehicleFilters.jsx";
import {
  clearItems,
  setLoadMoreEnabled,
} from "../../redux/transportation/transportSlice.js";
import { selectFilter } from "../../redux/transportation/selectors.js";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { total, isLoading, perPage, error, items } = useSelector(
    (state) => state.transport
  );
  const filter = useSelector(selectFilter);

  const totalPages = Math.ceil(total / perPage);

  useEffect(() => {
    dispatch(setLoadMoreEnabled(true));
    if (filter) {
      dispatch(clearItems([]));
    }
    const query = Object.fromEntries(
      Object.entries(filter).filter(
        ([, values]) => (values !== false) & (values !== "")
      )
    );
    const queryString = new URLSearchParams(query).toString();

    dispatch(fetchTrucks({ page, perPage, filter: queryString }));
  }, [dispatch, page, perPage, filter]);

  const handleLoadMore = () => {
    dispatch(setLoadMoreEnabled(false));
    setPage((prevPage) => prevPage + 1);
    dispatch(setLoadMoreEnabled(true));
  };

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      <div className={css.filterContainer}>
        <VehicleFilters />
      </div>
      <div className={css.truckContainer}>
        {items.length > 0 ? (
          <TruckCard items={items} />
        ) : (
          <p>Whoops, nothing was found</p>
        )}

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
