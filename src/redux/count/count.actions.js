import countActionTypes from "./count.types";

export const increase = () => ({
  type : countActionTypes.INCREASE
})

export const decrease = () => ({
  type : countActionTypes.DECREASE
})