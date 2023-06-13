
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import axios from "axios";
import UserList from './components/UserList';

const BASE_URL = "https://users-crud.academlo.tech"
const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
}

function App() {

  const [userDelete, setUserDelete] = useState(null)
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  //const [iconDelete, setIconDelete] = useState(null)

  const changeShowModal = () => setIsShowModal(!isShowModal);
  /*
    const takeReset = (reset) => {
      setIconDelete(reset)
      console.log('reset inicio ', reset)
    }
  */
  const getAllUsers = () => {
    const url = BASE_URL + "/users/"

    axios.get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/"

    axios.post(url, data)
      .then(({ data }) => {
        getAllUsers(data)
        resetModalForm(reset)
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    console.log('si icon 2')

    axios.delete(url)
      .then(({ }) => {
        getAllUsers()
        //setUserDelete(null)
        //  resetModalForm(reset)
      })
      .catch((err) => console.log(err))
  }


  const updataUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios.patch(url, data)
      .then(({ }) => {
        getAllUsers()
        resetModalForm(reset)
      })
      .catch((err) => console.log(err))
  }


  const resetModalForm = (reset) => {
    console.log('delete X 2   ', reset)
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }




  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <main className='sm:grid-cols-[1fr_auto]  mx-auto  bg-white min-h-screen text-black font-["Roboto"]'>
      <Header changeShowModal={changeShowModal} />

      <ModalForm setUserDelete={setUserDelete} deleteUser={deleteUser} resetModalForm={resetModalForm} updataUser={updataUser} userDelete={userDelete} isUserToUpdate={isUserToUpdate} createUser={createUser} isShowModal={isShowModal} />

      <UserList deleteUser={deleteUser} createUser={createUser} setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} users={users} />

    </main>
  )
}

export default App
