import React from "react";
import Card from "./Card";

function ContentInDB(){
    const [countProducts, setCountProducts] = React.useState([])
    const [countCategory, setCountCategory] = React.useState([])
    const [countUsers, setCountUsers] = React.useState([])
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => {
                setCountProducts(data.count)
                setCountCategory(data.countByCategory)
            })
        .catch(err => { console.log(err); })
        }, []);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {
                setCountUsers(data.count);
                setUsers(data.users)
            })
        .catch(err => { console.log(err); })
        }, [])
    
        return(
            <>
                <div className="box">
                    <div>
                        <h2>Resumen</h2>
                    </div>
                    <div className="row">
                        <Card title="Productos" quantity={countProducts} icon="fas fa-shopping-basket"/>
                        <Card title="Categorías" quantity={Object.keys(countCategory).length} icon="fas fa-sitemap"/>
                        <Card title="Usuarios" quantity={countUsers} icon="fas fa-user"/>
                    </div>
                </div>
                <div className="box-flex">
                    <div className="box">
                        <div>
                            <h2>Productos por categoría</h2>
                        </div>
                        <div className="row category">
                            <Card title="Vinos" quantity={countCategory.wine} icon="fas fa-wine-glass-alt"/>
                                <Card title="Whisky" quantity={countCategory.whisky} icon="fas fa-glass-whiskey"/>
                                <Card title="Cervezas" quantity={countCategory.beer} icon="fas fa-beer"/>
                                <Card title="Spirits" quantity={countCategory.spirit} icon="fas fa-cocktail"/>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h2>Usuarios por rol</h2>
                        </div>
                        <div className="row users">
                            <Card title="Administradores" quantity={users.filter(user => user.role === 'Administrador').length} icon="fas fa-users-cog"/>
                            <Card title="Usuarios" quantity={users.filter(user => user.role === 'Usuario').length} icon="fas fa-users"/>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ContentInDB;