import React, {useState, useEffect} from 'react'

export const CreateUpdateUser = ({
    userToBeUpdated, 
    createUser,
    updateUser,
    setUserToBeUpdated }) => {

    const [fieldsState, setFieldsState] = useState({
        id: "",
        userName: "",
        email: ""
    })

    useEffect(() => {
      setFieldsState(userToBeUpdated)
    }, [userToBeUpdated])

    

    return (
        <div>
            <input name="id" value={fieldsState.id} onChange={e => setFieldsState({ ...fieldsState, [e.target.name]: e.target.value })} placeholder='User name' /><br />
            <input name="userName" value={fieldsState.userName} onChange={e => setFieldsState({ ...fieldsState, [e.target.name]: e.target.value })} placeholder='Email' /><br />
            <input name="email" value={fieldsState.email} onChange={e => setFieldsState({ ...fieldsState, [e.target.name]: e.target.value })} placeholder='Id' /><br />
            <button disabled={userToBeUpdated.id === ""} onClick={() => updateUser(fieldsState.id, fieldsState.userName)}>Update </button><br />
            <button disabled={userToBeUpdated.id !== ""}  onClick={() => createUser(fieldsState)}>Create </button><br />
            <button onClick={() => setUserToBeUpdated({ id:"", userName:"", email:""})}>Clear</button>
        </div>
    )
}
