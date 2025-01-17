import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const selectTransportation = (state) => state.transport.data;
export const isLoading = (state) => state.transport.isLoading;
export const isError = (state) => state.transport.error;
export const selectOneTruck = (state, id) =>
  Array.isArray(state.transport.data)
    ? state.transport.data.find((item) => item.id === id)
    : undefined;
