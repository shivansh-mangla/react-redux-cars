import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        addCar: (state, action) => {
            const newCar = {
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            }
            state.cars.push(newCar)
        },
        removeCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },
    },
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;