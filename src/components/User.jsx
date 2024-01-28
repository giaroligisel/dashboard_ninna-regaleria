import React from "react";
import UserList from './UserList';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function User() {
    const [users, setUsers] = React.useState([])
    const [totalUsers, setTotalUsers] = React.useState([])
    const location = useLocation();
    const page = location.search || 1;

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/users/${page}`)
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
            console.log(users)
            })
        .catch(err => { console.log(err); })
        }, [page]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/users/count')
        .then(res => res.json())
        .then(data => setTotalUsers(data.count))
        .catch(err => { console.log(err); })
        }, [])

        const totalPage = Math.ceil(totalUsers/10);
        console.log(totalPage)
        
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);            
        }

    return(
        <>
        <Header title="Usuarios en la base de datos" />
        <div className="page-cont">
            {pages.map(page => <Link className="page" to={'/users/list?page='+page}>{page}</Link> )}
        </div>
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