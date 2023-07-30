import { createSlice } from "@reduxjs/toolkit";

const initialState={
    view:[],
    events:[],
};

const eventSlice=createSlice({
    name:"event",
    initialState,
    reducers:{
        addEvent:(state,action)=>{
            state.events.push(action.payload);
        },
        deleteEvent:(state,action)=>{
            let id=action.payload;
            let arr=state.events;
            state.events=arr.filter(obj => obj.id !== id );
        },
        editEvent:(state,action)=>{
            let {id,image,name,type,price,venue,date,time}=action.payload;
            const index=state.events.findIndex((obj)=>id === obj.id);
            state.events[index]={
                id,
                image,
                name,
                type,
                price,
                venue,
                date,
                time
            }
        },
        viewEvent:(state,action)=>{
            console.log(action.payload);
            let id=action.payload;
            console.log(id);
            state.view=state.events.find((obj)=>id === obj.id);
        }
    }
})

export const {addEvent,deleteEvent,editEvent,viewEvent}=eventSlice.actions;
export default eventSlice.reducer;