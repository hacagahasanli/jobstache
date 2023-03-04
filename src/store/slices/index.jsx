import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requirements: {},
    searchValue: ""
}

const JobSlice = createSlice({
    name: "JobReducer",
    initialState,
    reducers: {
        setRequirements: (state, action) => {
            const requirement = action.payload;
            state.requirements = requirement;
        },
        setSearchedValue: (state, action) => {
            const value = action.payload;
            state.searchValue = value;
        }
    }
})

export const jobReducer = JobSlice.reducer;
export const { setRequirements, setSearchedValue } = JobSlice.actions