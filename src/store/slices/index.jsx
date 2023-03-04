import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requirements: {},
    searchValue: "",
    jobDetail: {},
    isVisible: false
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
        },
        showModal: (state, action) => {
            const visible = action.payload;
            state.isVisible = visible;
        },
        setJobDetail: (state, action) => {
            const data = action.payload;
            state.jobDetail = data;
        }
    }
})

export const jobReducer = JobSlice.reducer;
export const { setRequirements, setSearchedValue, setJobDetail, showModal } = JobSlice.actions