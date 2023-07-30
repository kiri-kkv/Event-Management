import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./components/Helper/userSlice";
import eventReducer from "./components/Helper/eventSlice";

const store=configureStore({
    reducer:{
        auth:authReducer,
        event:eventReducer,
    }
})

export default store;