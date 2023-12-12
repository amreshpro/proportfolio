import { createSlice } from "@reduxjs/toolkit"


const themeSlice = createSlice({
    name:"mode",
    initialState:true,
    reducers:{
        changeMode: (state,action)=>{
            return !state
        }
    }
})

export const { changeMode } = themeSlice.actions

export default themeSlice.reducer
