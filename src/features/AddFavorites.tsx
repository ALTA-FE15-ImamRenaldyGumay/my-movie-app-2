import {createSlice} from "@reduxjs/toolkit";

export interface Movie {
    id: number;
    title: string;
    image: string;
    overview: string;
    onClick: React.MouseEventHandler;

}

export const addFavorites = (movie: any) => {
    return {
        type: "ADD_FAVORITES",
        payload: movie
    }
}

const initialState = {
    favorites: []
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;