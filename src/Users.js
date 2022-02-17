import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setSelectedUsers, deleteUser } from './actions';
// import _ from 'underscore';
import './Users.css';

const Users = () => {
    let payload = {
        name: "users",
        value: [{
            id: 1,
            name: "Warren Lewis",
            phone: "(864) 716-0446",
            country: "France",
            numberrange: 9
        },
        {
            id: 2,
            name: "Lane Taylor",
            phone: "(776) 783-4241",
            country: "Chile",
            numberrange: 1
        },
        {
            id: 3,
            name: "Vivian Carr",
            phone: "1-687-343-3983",
            country: "United Kingdom",
            numberrange: 0
        },
        {
            id: 4,
            name: "Cathleen Mccall",
            phone: "1-535-351-3168",
            country: "Nigeria",
            numberrange: 1
        },
        {
            id: 5,
            name: "Kiara Chavez",
            phone: "1-179-474-6064",
            country: "Poland",
            numberrange: 3
        }
        ]
    }

    const dispatch = useDispatch();
    const usersList = useSelector(state => {
        return state.users.users
    });

    const clickhandle = (user) => {
        dispatch(setSelectedUsers({ name: "selectedUser", value: user }));
    }

    const clickDeleteHandle = (user) => {
        dispatch(deleteUser({ name: "deleUser", value: user }));
    }

    return (
        <div className="users">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Country</th>
                        <th scope="col">Number Range</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.length > 0 ? usersList.map((user) => {
                        return (
                            <tr className="user" key={user.id}>
                                <td className="h5">{user.name}</td>
                                <td className="h5">{user.phone}</td>
                                <td className="h5">{user.country}</td>
                                <td className="h5">{user.numberrange}</td>
                                <td className="h5">
                                    <button className="btn btn-lg btn-warning margin-right" onClick={() => { clickhandle(user) }}>Edit</button>
                                    <button className="btn btn-lg btn-danger" onClick={() => { clickDeleteHandle(user) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}

export default Users;