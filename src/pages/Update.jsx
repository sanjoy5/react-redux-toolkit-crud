import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../reducers/userReducer';

const Update = () => {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    const existsUser = users.find(user => user.id === parseInt(id))
    const { name, email } = existsUser;
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3 className="">Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div className='mb-3'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className="form-control" value={uname} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' className="form-control" value={uemail} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button type='submit' className="btn btn-info">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Update;