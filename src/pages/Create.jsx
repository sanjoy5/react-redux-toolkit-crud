import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }



    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3 className="">Add New User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name">Name:</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" name='name' className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' className="form-control" />
                        </div>
                        <button type='submit' className="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;