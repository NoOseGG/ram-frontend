import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "console";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface IInitialState {
  info: IInfo;
  results: ICharacter[];
}

const initialState: IInitialState = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

export const getCharacters = createAsyncThunk<IInitialState>(
  "getCharacters",
  async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const characterSlice = createSlice({
  name: "characterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      console.log(`111 => ${JSON.stringify(action.payload)}`);
      state.info = action.payload.info;
      state.results = action.payload.results;
    });
  },
});

export default characterSlice.reducer;
