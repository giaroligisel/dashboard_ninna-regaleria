import React from "react";
import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";

function ProductEditForm(){
    const { id } = useParams();
    const [product, setProduct] = React.useState({});


    React.useEffect(() => {
        fetch(`http://localhost:3000/api/products/detail/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            console.log(product)
        })
        .catch(err => { console.log(err); })
        }, [id])
    
    return (
        <ProductForm 
            name={product.name} 
            style={product.Styles?.name} 
            price={product.price}
            discount={product.discount} 
            stock={product.stock} 
            store={product.Stores?.name || 'No corresponde'} 
            year={product.year || 'No corresponde'} 
            typeOfBarrel={product.TypeOfBarrel?.name || 'No corresponde'} 
            timeOfBarrel={product.time_of_barrel || 'No corresponde'} 
            description={product.description}
        />
    )
}

export default ProductEditForm;