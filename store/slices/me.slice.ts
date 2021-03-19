import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pseudo: "",
    email: "",
};

const MeSlice = createSlice({
    name: "me",
    initialState,
    reducers: {
        setMe: (state, { payload }) => {
            return payload;
        },
        updateMe: (state, { payload }) => {
            return {
                ...state,
                ...payload
            };
        },
        resetMe: () => initialState
    }
});

export default MeSlice;
