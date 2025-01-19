export const selectTransportation = (state) => state.transport.items;
export const isLoading = (state) => state.transport.isLoading;
export const isError = (state) => state.transport.error;
export const selectOneTruck = (state, id) =>
  Array.isArray(state.transport.items)
    ? state.transport.items.find((item) => item.id === id)
    : undefined;
