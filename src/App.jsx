
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

  const changeShowModal = () => setIsShowModal(!isShowModal);
  //console.log( "2" ,isUserToUpdate)

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

  const deleteUser = (id, reset) => {
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
      .then(({ }) => {
        getAllUsers()
        setUserDelete(null)
        resetModalForm(reset)
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
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }




  useEffect(() => {
    getAllUsers()
  }, [])



  return (
    <main className='font-["Roboto"]'>
      <Header changeShowModal={changeShowModal} />

      <ModalForm deleteUser={deleteUser} resetModalForm={resetModalForm} updataUser={updataUser} userDelete={userDelete} isUserToUpdate={isUserToUpdate} createUser={createUser} isShowModal={isShowModal} />

      <UserList setUserDelete={setUserDelete} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} users={users} />

    </main>
  )
}

export default App
