import React from 'react'

const User = ({ user, changeShowModal, deleteUser, setIsUserToUpdate, setUserDelete }) => {

    const handleClickDelete = () => {
        setUserDelete(user)
        changeShowModal()
        deleteUser(user.id)
    }

    const handleClickUpdate = () => {
        changeShowModal()
        setIsUserToUpdate(user)
    }

    return (
        <article className=' border border-[#b8b5b5]   '>
            <h4 className='font-bold text-[25px] truncate p-2'> {user.first_name} {user.last_name} </h4>

            <div className='h-[2px] bg-[#b8b5b5] mx-4 '></div>
            <div>
                <h5 className='font-bold text-[16px] text-[#b8b5b5] p-2 '>CORREO</h5>
                <span className='text-[16px] text-[#302F2F] p-2'> {user.email} </span>
            </div>

            <div>
                <h5 className='font-bold text-[16px] text-[#b8b5b5] p-2 '>ANIVERSARIO</h5>
                <span className='text-[16px] text-[#302F2F] p-2'> <i className='bx bx-gift'></i>{user.birthday || "Sin Fecha"} </span>
            </div>

            <div className='h-[2px] bg-[#b8b5b5] mx-4 '></div>
            <div className='flex flex-wrap justify-end'>
                <button onClick={handleClickDelete} ><i className='rounded-sm text-white bg-[#D93F3F]  hover:bg-[#D85D5D]  p-2 text-2xl bx bx-trash'></i></button>
                <button className='p-2' onClick={handleClickUpdate} ><i className='rounded-sm text-2xl bg-[#dedbdb]  hover:bg-[#f1efef] p-2 bx bxs-edit-alt'></i></button>
            </div>

        </article>
    )
}

export default User