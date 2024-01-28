import React from "react";
import ProductList from './ProductList';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Product() {
    const [products, setProducts] = React.useState([])
    const [totalProduct, setTotalProduct] = React.useState(1)
    const location = useLocation();
    const page = location.search || 1;
    
    React.useEffect(() => {
        fetch(`http://localhost:3000/api/products/${page}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products)
            })
        .catch(err => { console.log(err); })
        }, [page]);
    
        React.useEffect(() => {
        fetch(`http://localhost:3000/api/products/count`)
        .then(res => res.json())
        .then(data => {
            setTotalProduct(data.count)
            })
        .catch(err => { console.log(err); })
        }, []);
    
        const totalPage = Math.ceil(totalProduct/5);
        console.log(totalPage)
        
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);            
        }

    return(
        <>        
        <Header title="Productos en la base de datos"/>
        <div className="page-cont">
            {pages.map(page => <Link className="page" to={'/products/list?page='+page}>{page}</Link> )}
        </div>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                                <th>Detalle</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) =>
                                    <ProductList 
                                        id={product.id} 
                                        name={product.name} 
                                        types={product.types} 
                                        description={product.description} 
                                        image={product.image}
                                        detail={product.detail}
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

export default Product;