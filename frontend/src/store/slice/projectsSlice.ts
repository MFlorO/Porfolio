import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/domain/entities/Project";
import { createProjectThunk, fetchProjectsThunk } from "../thunk/project.thunk";

interface ProjectsState {
  items: Project[];
  loading: boolean;
}

const initialState: ProjectsState = {
  items: [],
  loading: false,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjectsThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createProjectThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProjectThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(createProjectThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default projectsSlice.reducer;
