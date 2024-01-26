import React from "react";
import UserList from './UserList';
import Header from "./Header";


function User() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => setUsers(data.users))
        .catch(err => { console.log(err); })
        }, [])
    return(
        <>
        <Header title="Usuarios en la base de datos" />
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre y apellido</th>
                                <th>Email</th>
                                <th>Detalle</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) =>
                                    <UserList 
                                        id={user.id} 
                                        fullname={user.fullname} 
                                        email={user.email} 
                                        detail={user.detail}
                                        img={user.img}
                                        key={index} 
                                    />
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    )
}

export default User;