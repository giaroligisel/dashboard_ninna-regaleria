import React from "react";
import UserDetail from "./UserDetail";
import { useParams } from 'react-router-dom';
import Header from './Header';

function DetailUser(){
    const {id} = useParams();
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/users/detail/'+id)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => { console.log(err); })
        }, [id])

    return (
        <>
            <Header title="Detalle del usuario registrado"/>
            <UserDetail 
                img={'http://localhost:3000/images/users/avatars/'+user.img} 
                fullname={user.fullname} 
                timestamp={user.createdAt} 
                dni={user.dni} 
                age={user.age} 
                email={user.email}
            />
        </>
    )
}

export default DetailUser;