import React from 'react'
import User from './User'

const UserList = ({ users, changeShowModal, setIsUserToUpdate, setUserDelete }) => {


    return (
        <section className=' z-0  grid-cols-[repeat(auto-fill,_339px)] justify-center max-w-[1024px] mx-auto py-6  grid gap-8'>

            {
                users.map((user) => <User setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} Key={user.id} user={user} />)

            }
        </section>
    )
}

export default UserList