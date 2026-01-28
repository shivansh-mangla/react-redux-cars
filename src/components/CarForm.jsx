import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCost, changeName } from '../store/slices/formSlice';
import { addCar } from '../store/slices/carsSlice';

const CarForm = () => {

    const dispatch = useDispatch();

    const name = useSelector(state => state.form.name)
    const cost = useSelector(state => state.form.cost)

    // const { name , cost} = useSelector(state => {
    //     return {
    //         name: state.form.name,
    //         cost: state.form.cost
    //     }
    // })

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleCostChange = (e) => {
        const c = Number(e.target.value) || 0
        dispatch(changeCost(c))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addCar({name, cost}))
    }


  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={submitHandler}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type='number'
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>

        <div className="field">
            <button className="button is-link" type='submit'>
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm