import React from 'react'
import User from './User'

const UserList = ({ users, createUser, deleteUser, changeShowModal, setIsUserToUpdate, setUserDelete }) => {


    return (
        <div>

            <div className=' hidden md:block'>
                <section className=' z-0  grid-cols-[repeat(auto-fill,_350px)] justify-center max-w-[1024px] m-2 py-6  grid gap-4'>

                    {
                        users.map((user) => <User deleteUser={deleteUser} createUser={createUser} setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} key={user.id} user={user} />)

                    }
                </section>
            </div>


            <div className='block md:hidden'>
                <section className=' z-0  grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] m-2 py-6  grid gap-4'>

                    {
                        users.map((user) => <User deleteUser={deleteUser} createUser={createUser} setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} key={`${user.id}-${user.first_name}`} user={user} />)

                    }
                </section>
            </div>

        </div>
    )
}

export default UserList