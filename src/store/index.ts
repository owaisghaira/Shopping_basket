import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "../types";


const basketSlice = createSlice({
  name: "basket",
  initialState:[{}],
  reducers: {
    add: (state, action) => {
      let product = action.payload;
      let item: any = state?.find((item: any) => item.id === product.id);
      if (!item) {
        item = { ...product };
        item.quantity = 1;
        return [...state, item];
      } else {
        state.map((item: any) => {
          if (item.id === product.id) {
            item.quantity++;
            return item;
          }
        });
      }
    },
    less: (state, action) => {
      let product = action.payload;

      let items = state.map((item: any) => {
        if (item.id === product.id) {
          item.quantity--;
        }

        return item;
      });
    },
    delet: (state, action) => {
      let product = action.payload;

      let items: any = state.filter((item: any) => {
        if (item.id !== product.id) {
          return item;
        }
      });
      return [...items];
    },
  },
});

export const basket = basketSlice.reducer;
export const { add, less, delet } = basketSlice.actions;
