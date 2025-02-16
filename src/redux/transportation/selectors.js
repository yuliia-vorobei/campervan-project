export const selectTransportation = (state) => state.transport.items;
export const isLoading = (state) => state.transport.isLoading;
export const isError = (state) => state.transport.error;
export const selectOneTruck = (state) => state.transport.camper;
export const selectFilter = (state) => state.filters.data;
