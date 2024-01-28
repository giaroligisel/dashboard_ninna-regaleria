import React from "react";
import { useParams } from 'react-router-dom';
import ProductDetail from "./ProductDetail";
import Header from "./Header";

function DetailProduct(){
    const {id} = useParams();
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
    
    return(
        <>
            <Header title="Detalle del producto" />
            <ProductDetail 
                image={'http://localhost:3000/images/products/'+product.image} 
                name={product.name} 
                style={product.Styles?.name} 
                price={product.price} 
                stock={product.stock} 
                store={product.Stores?.name || 'No corresponde'} 
                year={product.year || 'No corresponde'} 
                typeOfBarrel={product.TypeOfBarrel?.name || 'No corresponde'} 
                timeOfBarrel={product.time_of_barrel || 'No corresponde'} 
                description={product.description} 
                detail={"/products/detail/"+id} 
            />
        </>
    )

}

export default DetailProduct;