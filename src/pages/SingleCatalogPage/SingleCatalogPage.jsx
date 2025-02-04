import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTruckDetails } from "../../redux/transportation/operations";
import { useParams } from "react-router-dom";
import {
  isError,
  isLoading,
  selectOneTruck,
} from "../../redux/transportation/selectors";
import css from "./SingleCatalogPage.module.css";
import { TruckCardDetails } from "../../components/TruckCardDetails/TruckCardDetails";
import { Loader } from "../../components/Loader/Loader";
import { DetailsPageHeader } from "../../components/DetailsPageHeader/DetailsPageHeader";

const SingleCatalog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const truck = useSelector((state) => selectOneTruck(state, id));
  const loading = useSelector(isLoading);
  const error = useSelector(isError);

  useEffect(() => {
    dispatch(getTruckDetails(id));
  }, [dispatch, id]);

  if (!truck) {
    return;
  }

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <TruckCardDetails />
      <DetailsPageHeader />
    </div>
  );
};

export default SingleCatalog;
