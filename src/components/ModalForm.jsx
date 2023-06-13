import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({ isShowModal, createUser, isUserToUpdate, setUserDelete, updataUser, resetModalForm, userDelete }) => {

    const { register, handleSubmit, reset } = useForm()

    //takeReset(reset)

    const submit = (data) => {
        if (!data.birthday) data.birthday = null

        if (userDelete) {
            console.log(' si delete   ')
            resetModalForm(reset)
            setUserDelete(null)
            resetModalForm(reset)

        } else {
            console.log('No delete   ')
            if (isUserToUpdate) {
                updataUser(data, reset)
            } else {
                createUser(data, reset)
            }
        }

    }

    const handleCloseModal = () => {
        console.log('delete X 1  si ')
        resetModalForm(reset)
        setUserDelete(null)
        resetModalForm(reset)

    }

    //setIconDelete(reset)

    /*
    const takeReset = () => {
        setIconDelete(reset)
        console.log('reset ', reset)
    }

    useEffect(() => {
        takeReset(reset)
    }, [])*/



    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])

    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/70 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>
            <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4  grid gap-6 relative'>

                {userDelete ? <h3 className='font-bold text-3xl'> Eliminar usuario</h3> : isUserToUpdate ? <h3 className='font-bold text-3xl'> Editar usuario</h3> : <h3 className='font-bold text-3xl'> Nuevo usuario</h3>}


                {userDelete ? <p> El usuario {userDelete.first_name} {userDelete.last_name}  se ha eliminado</p> :
                    <div>
                        <div className='grid gap-2'>
                            <label className='font-bold text-sm' htmlFor="">Nombre </label>
                            <input placeholder='Ingresa tu nombre...' className='bg-gray-100 outline-none p-2 ' type="text" {...register("first_name")} />
                        </div>


                        <div className='grid gap-2'>
                            <label className='font-bold text-sm' htmlFor="">Apellidos</label>
                            <input placeholder='Ingresa tu apellido...' className='bg-gray-100 outline-none p-2 ' type="text" {...register("last_name")} />
                        </div>


                        <div className='grid gap-2'>
                            <label className='font-bold text-sm' htmlFor="">Correo</label>
                            <input placeholder='Ingresa tu correo...' className='bg-gray-100 outline-none p-2 ' type="email" {...register("email")} />
                        </div>


                        <div className='grid gap-2'>
                            <label className='font-bold text-sm' htmlFor="">Contraseña</label>
                            <input placeholder='Ingresa tu contraseña...' className='bg-gray-100 outline-none p-2 ' type="password" {...register("password")} />
                        </div>


                        <div className='grid gap-2'>
                            <label className='font-bold text-sm' htmlFor="">Aniversario</label>
                            <input placeholder='Ingresa tu aniversario...' className='bg-gray-100 outline-none p-2 ' type="date" {...register("birthday")} />
                        </div>
                    </div>}


                <button onClick={handleCloseModal} type="button" className='absolute top-2 right-2 text-2xl hover:bg-red-500 rounded-full hover:text-secondary'><i class='bx bx-x'></i></button>

                {userDelete ? <button className='btn-primary'> Aceptar</button> : isUserToUpdate ? <button className='btn-primary'> Guardar cambios</button> : <button className='btn-primary'>Agregar nuevo usuario</button>}

            </form>
        </section>
    )
}

export default ModalForm