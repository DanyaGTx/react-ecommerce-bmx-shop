import { createSlice } from "@reduxjs/toolkit";

const bikeSlice = createSlice({
    name: 'bikes',
    initialState: {
        currentBike:null,
    },
    reducers: {
        setCurrentBike: (state,action) =>{
            state.currentBike = action.payload;
        },
      
    }
})
export const {setCurrentBike} = bikeSlice.actions;
export default bikeSlice.reducer;