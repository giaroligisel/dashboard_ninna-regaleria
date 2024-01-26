import React from "react";
import UserDetail from "./UserDetail";
import Header from './Header';

function LastUser(){
    const [lastUser, setLastUser] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/users/lastCreated')
        .then(res => res.json())
        .then(data => setLastUser(data))
        .catch(err => { console.log(err); })
        }, [])

    return (
        <>
        <Header title="Último usuario registrado" />
        <UserDetail 
            img={'http://localhost:3000/images/users/avatars/'+lastUser.img} 
            fullname={lastUser.fullname} 
            timestamp={lastUser.createdAt} 
            dni={lastUser.dni} 
            age={lastUser.age} 
            email={lastUser.email}
        />
        </>
    )
}

export default LastUser;