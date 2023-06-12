import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({ isShowModal, createUser, isUserToUpdate, updataUser, resetModalForm, userDelete }) => {

    // console.log( "1" ,isUserToUpdate)
    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {

        if (!data.birthday) data.birthday = null
        if (isUserToUpdate) {
            updataUser(data, reset)
        } else {
            createUser(data, reset)
        }


    }

    const handleCloseModal = () => {
        resetModalForm(reset)
    }


    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])


    //
    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/70 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>
            <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4  grid gap-6 relative'>
                <h3 className='font-bold text-3xl'>
                    {userDelete && ("Eliminar usuario")}  &&  {isUserToUpdate ? "Editar usuario" : "Nuevo usuario"}
                </h3>

                {/* Nombre */}
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor="">Nombre </label>
                    <input placeholder='Ingresa tu nombre...' className='bg-gray-100 outline-none p-2 ' type="text" {...register("first_name")} />
                </div>

                {/* Apellidos */}
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor="">Apellidos</label>
                    <input placeholder='Ingresa tu apellido...' className='bg-gray-100 outline-none p-2 ' type="text" {...register("last_name")} />
                </div>

                {/* Correo */}
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor="">Correo</label>
                    <input placeholder='Ingresa tu correo...' className='bg-gray-100 outline-none p-2 ' type="email" {...register("email")} />
                </div>

                {/* Contraseña Agregar nuevo usuario */}
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor="">Contraseña</label>
                    <input placeholder='Ingresa tu contraseña...' className='bg-gray-100 outline-none p-2 ' type="password" {...register("password")} />
                </div>

                {/* Aniversario */}
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor="">Aniversario</label>
                    <input placeholder='Ingresa tu aniversario...' className='bg-gray-100 outline-none p-2 ' type="date" {...register("birthday")} />
                </div>

                <button onClick={handleCloseModal} type="button" className='absolute top-2 right-2 text-2xl hover:text-secondary'><i class='bx bx-x'></i></button>
                <button className='btn-primary'>{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}</button>


            </form>
        </section>
    )
}

export default ModalForm