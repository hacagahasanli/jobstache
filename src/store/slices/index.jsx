import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requirements: {
        emp: "",
        exp: ""
    }
}

const JobSlice = createSlice({
    name: "JobReducer",
    initialState,
    reducers: {
        setRequirements: (state, action) => {
            const requirement = action.payload;
            state.requirements = requirement;
        }
    }
})

export const jobReducer = JobSlice.reducer;
export const { setRequirements } = JobSlice.actions