import React from 'react'

const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {

    const handleClickDelete = () => {
        deleteUser(user.id)
        changeShowModal()
    }

    const handleClickUpdate = () => {
        changeShowModal()
        setIsUserToUpdate(user)
    }

    return (
        <article>
            <h4> {user.first_name} {user.last_name} </h4>
            <div>
                <h5>Correo</h5>
                <span> {user.email} </span>
            </div>

            <div>
                <h5>Aniversario</h5>
                <span> <i className='bx bx-gift'></i>{user.birthday || "Sin Fecha"} </span>
            </div>

            <button onClick={handleClickDelete} ><i className='bx bx-trash'></i></button>
            <button onClick={handleClickUpdate} ><i className='bx bxs-edit-alt'></i></button>
        </article>
    )
}

export default User