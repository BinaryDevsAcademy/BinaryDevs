import { configureStore } from "@reduxjs/toolkit";
import DataReducer from './DataSlice'

const CourseStore = configureStore({
    reducer : {
        data : DataReducer
    }
})

export default  CourseStore