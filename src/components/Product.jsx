import React from "react";
import ProductList from './ProductList';
import Header from "./Header";


function Product() {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => { console.log(err); })
        }, [])
    return(
        <>        
        <Header title="Productos en la base de datos"/>
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