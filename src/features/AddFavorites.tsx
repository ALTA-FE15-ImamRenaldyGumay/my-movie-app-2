import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Movie {
  id: string;
  title: string;
  image: string;
}

interface FavoritesState {
  favorites: Movie[]
}

const initialState: FavoritesState = {
  favorites : []
}

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites : (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    },
  },
})

export const { addFavorites, removeFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;