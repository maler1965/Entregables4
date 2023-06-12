import React from 'react'
import User from './User'

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate }) => {
    return (
        <section className='grid gap-6'>

            {
                users.map((user) => <User setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} Key={user.id} user={user} deleteUser={deleteUser} />)

            }
        </section>
    )
}

export default UserList