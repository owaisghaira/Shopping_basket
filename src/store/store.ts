import { configureStore } from "@reduxjs/toolkit";
import {basket} from "./index";

export const store = configureStore({
  reducer: {
    basket
  },
});
