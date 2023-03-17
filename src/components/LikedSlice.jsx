import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("LikedItem")) || [],
  isFiltering: false,
};

//console.log("Initial state list:", initialState.list);

const LikedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      try {
        const itemExists = state.list.find(
          (item) => item.id === action.payload.id
        );
        if (!itemExists) {
          state.list = [...state.list, action.payload];
          localStorage.setItem("LikedItem", JSON.stringify(state.list));
        }
      } catch (error) {
        console.error("Error in addToLiked:", error);
      }
    },

    deleteFromLiked: (state, action) => {
      const newList = state.list.filter((item) => item.id !== action.payload);

      if (state.isFiltering && newList.length === 0) {
        state.list = JSON.parse(localStorage.getItem("LikedItem")) || [];
      } else {
        state.list = newList;
      }

      localStorage.setItem("LikedItem", JSON.stringify(state.list));

      if (state.isFiltering) {
        const keyword = state.filterKeyword.trim().toLowerCase();
        state.list = state.list.filter(
          (item) =>
            item.description?.toLowerCase().includes(keyword) ||
            item.alt_description?.toLowerCase().includes(keyword)
        );
      }
    },

    picDescriptionEdit: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, description: action.payload.description };
        } else {
          return item;
        }
      });
      localStorage.setItem("LikedItem", JSON.stringify(state.list));
    },

    findPic: (state, action) => {
      const keyword = action.payload.trim().toLowerCase();
      state.isFiltering = keyword !== "";

      if (state.isFiltering) {
        state.list = JSON.parse(localStorage.getItem("LikedItem")).filter(
          (item) =>
            item.description?.toLowerCase().includes(keyword) ||
            item.alt_description?.toLowerCase().includes(keyword)
        );
      } else {
        state.list = JSON.parse(localStorage.getItem("LikedItem")) || [];
      }
    },

    findPicBy: (state, action) => {
      switch (action.payload) {
        case "none":
          state.list = JSON.parse(localStorage.getItem("LikedItem"));
          break;
        case "date":
          state.list = state.list.sort((a, b) => b.date - a.date);
          break;
        case "likes":
          state.list = state.list.sort((a, b) => b.likes - a.likes);
          break;
        case "height":
          state.list = state.list.sort((a, b) => b.height - a.height);
          break;
        case "width":
          state.list = state.list.sort((a, b) => b.width - a.width);
          break;
        default:
          state.list = JSON.parse(localStorage.getItem("LikedItem"));
          break;
      }
    },
  },
});

export default LikedSlice.reducer;
export const {
  addToLiked,
  deleteFromLiked,
  picDescriptionEdit,
  findPic,
  findPicBy,
} = LikedSlice.actions;
