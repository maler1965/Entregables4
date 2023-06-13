import React from 'react'
import { useForm } from 'react-hook-form'

const ModalFormNotice = ({ notice, modalNotice, changeShowModalNotice }) => {

    const { handleSubmit } = useForm()

    const submit = () => {
        changeShowModalNotice()
    }

    const handleCloseModal = () => {
        changeShowModalNotice()
    }

    let isfalse = false
    if (notice === 'Crear') {
        isfalse = false
    } else {
        isfalse = 'Verdadero'
    }

    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/70 grid place-content-center ${modalNotice ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>
            <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4  grid gap-6 relative'>

                {isfalse ? <h3 className='font-bold text-3xl'> Editar usuario</h3> : <h3 className='font-bold text-3xl'> Nuevo usuario</h3>}


                {isfalse ? <p> El usuario {notice.first_name} {notice.last_name} se ha editado correctamente </p> :
                    <p> El usuario se ha creado correctamente</p>}


                <button onClick={handleCloseModal} type="button" className='absolute top-2 right-2 text-2xl hover:bg-red-500 rounded-full hover:text-secondary'><i class='bx bx-x'></i></button>

                <button className='btn-primary hover:bg-[#D85D5D] rounded-md'> Aceptar</button>

            </form>
        </section>
    )
}

export default ModalFormNotice