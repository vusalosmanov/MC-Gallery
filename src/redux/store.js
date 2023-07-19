import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardReducer } from "./reducers/card.reducer.js";
import logger from "redux-logger";



const allReducers = combineReducers({
  cartData: cardReducer,
  
});



export const store = createStore(allReducers, applyMiddleware(logger));



// Biz cartlarimiz component kimi yaradiriq home pageinde yox sonra bizim datalarimiz ayri bir yerde yaziriq
// cartlarimiz yaratdiqimiz componentin icinde cartlarimiza tailwinde style veririk bunlari yerlewddirirk
// bizde carlarimizn slider olacaq swiperi qosub cartlarimiz icine atiriq yeni cartlarimizi yaratdiqimiz 
// componentde bunu home da import edirik bize burde add to cart ve beyenme olacaq bunlari yaziriq ve style veririk 
// bu hisse bitddi.