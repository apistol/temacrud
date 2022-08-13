import { useEffect, useState } from "react";
import { CreateUpdateUser } from "./components/CreateUpdateUser";
import axios from "axios"

function App() {

  const [users, setUsers] = useState(null)
  const [userToBeUpdated, setUserToBeUpdated] = useState({
    id: "",
    userName: "",
    email: ""
  })


  const createUser = (userObj) => {
    axios.post(`http://localhost:3001/users`, userObj).then(res => {
      return setUsers(res.data.result)
    })
  }



  const updateUser = (id, userNameVal) => {
    axios.put(`http://localhost:3001/users/${id}`, {userName: userNameVal}).then(res => {
      return setUsers(res.data.result)
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then(res => {
      return setUsers(res.data.result)
    })
  }


  useEffect(() => {
    axios.get("http://localhost:3001/users").then(res => {
      setUsers(res.data.result)
    })
  }, [])


  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>

        {users?.map(user => <div key={user.id}>
          <p>{user.id} | {user.userName} | {user.email}
            <button onClick={() => setUserToBeUpdated(user)}>Update</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button></p>
        </div>)}
      </div>

      <div style={{ flexGrow: 1 }}>
        <CreateUpdateUser userToBeUpdated={userToBeUpdated} createUser={createUser} updateUser={updateUser} setUserToBeUpdated={setUserToBeUpdated}/>
      </div>
    </div>
  );
}

export default App;
