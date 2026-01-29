import { createSelector } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

const memoizedCarsCost = createSelector(
    [(state)=> state.cars.cars, (state)=> state.cars.searchTerm],
    (cars, searchTerm) => {
        return cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, car) => acc + car.cost, 0)
    }
)

const CarValue = () => {

    const totalCost = useSelector(memoizedCarsCost)

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue