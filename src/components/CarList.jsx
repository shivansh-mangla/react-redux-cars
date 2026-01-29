import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store/slices/carsSlice';
import { createSelector } from '@reduxjs/toolkit';

const memoizedCars = createSelector(
    [(state)=> state.cars.cars, (state)=> state.cars.searchTerm],
    (cars, searchTerm) => {
        return cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
)

const CarList = () => {

    // const cars = useSelector(state => state.cars.cars);

    // const cars = useSelector(state =>
    //     state.cars.cars.filter(car =>
    //         car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
    //     )
    // );

    const cars = useSelector(memoizedCars);

    const dispatch = useDispatch();
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                {car.name} - ${car.cost}
                </p>
                <button
                className="button is-danger"
                onClick={() => handleCarDelete(car)}
                >
                Delete
                </button>
            </div>
        );
  });


  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList