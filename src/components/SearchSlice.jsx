import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const keyApi = "kM5-4Z3QqWMwwQdDA4wule5S-JsWi4E2_vILMegoDiI";

const initialState = {
  list: [],
};

export const getApiData = createAsyncThunk(
  "search/getApiData",
  async (data) => {
    //console.log(`esto es el data dentro del thunk ${data}`);
    try {
      if (!data || data === " ") {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${keyApi}&count=40`
        );
        const data = await response.json();
        return [...data];
      } else {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${keyApi}&query=${data}&per_page=40`
        );
        const responeData = await response.json();
        // console.log(responeData);

        return [...responeData.results];
      }
    } catch (error) {
      alert(`Error en el fetch ${error}`);
    }
  }
);

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [getApiData.pending]: (state) => {
      console.log("pendiente");
    },
    [getApiData.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getApiData.rejected]: (state) => {
      console.log("Ha fallado");
    },
  },
});

export default SearchSlice.reducer;
