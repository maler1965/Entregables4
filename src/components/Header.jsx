import React from 'react'

const Header = ({ changeShowModal }) => {

    const handleClickShowModal = () => {
        changeShowModal()
    }

    return (
        <section className='flex justify-between bg-[#d4d3d3] rounded-md p-4'>
            <h1 className='font-bold text-[36px]  border border-[#b8b5b5] p-2 rounded-sm '>Usuarios</h1>
            <button onClick={handleClickShowModal} className='bg-primary hover:bg-[#D85D5D] rounded-md text-white p-2 '> <i className='bx bx-plus'></i> Crear nuevo usuario</button>

        </section>
    )
}

export default Header