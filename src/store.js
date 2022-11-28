import create from "zustand";
const dataStore = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

export default dataStore;
