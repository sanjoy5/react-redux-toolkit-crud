import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './reducers/userReducer';


const Home = () => {
    const users = useSelector((state) => state.users)
    // console.log(users);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({ id }))
    }

    return (
        <>
            <div className="container mt-3">
                <h2>Crud App with JSON Server</h2>
                <Link to='/create' className="btn btn-success my-3">Create +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update/${user.id}`} className="btn btn-primary">Update</Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger ms-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;