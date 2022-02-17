import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from './actions';

const AddUser = () => {

    const initialState = {
        name: "",
        phone: "",
        country: "",
        numberrange: ""
    }
    const [userInformation, setUserInformation] = useState(initialState);

    const dispatch = useDispatch();

    const updateUserInformation = useSelector(state => {
        return state.users.selectedUser;
    })

    useEffect(() => {
        setUserInformation(updateUserInformation ? updateUserInformation : initialState);
    }, [updateUserInformation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ value: userInformation }));
        setUserInformation(initialState);
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ value: userInformation }));
    }

    const handleChange = (e) => {
        setUserInformation({ ...userInformation, [e.target.name]: e.target.value })
    }

    const add = (e) => {
        e.preventDefault();
        setUserInformation(initialState);
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name: </label>
                <input type="text" name="name" className="form-control" value={userInformation.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone: </label>
                <input type="text" name="phone" className="form-control" value={userInformation.phone} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country: </label>
                <input type="text" name="country" className="form-control" value={userInformation.country} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="numberrange" className="form-label">Number Range: </label>
                <input type="number" name="numberrange" className="form-control" value={userInformation.numberrange} onChange={handleChange} />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {
                    updateUserInformation && userInformation.id ?
                        <React.Fragment>
                            <button className='btn btn-lg btn-primary margin-right' onClick={handleUpdateSubmit}>Update</button>
                            <button className='btn btn-lg btn-secondary' onClick={add}>Add new</button>
                        </React.Fragment>
                        :
                        <button type='submit' className='btn btn-lg btn-primary' onClick={handleSubmit}>Save</button>
                }
            </div>
        </form>
    )
}

export default AddUser;