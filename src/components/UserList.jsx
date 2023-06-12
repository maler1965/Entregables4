import React from 'react'
import User from './User'

const UserList = ({ users, changeShowModal, setIsUserToUpdate, setUserDelete }) => {
    return (
        <section className='grid gap-6'>

            {
                users.map((user) => <User setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} Key={user.id} user={user} />)

            }
        </section>
    )
}

export default UserList