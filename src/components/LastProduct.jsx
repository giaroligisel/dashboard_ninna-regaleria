import React from "react";
import ProductDetail from "./ProductDetail";
import Header from "./Header";

function LastProduct(){
    const [lastProduct, setLastProduct] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/api/products/lastCreated')
        .then(res => res.json())
        .then(data => setLastProduct(data))
        .catch(err => { console.log(err); })
        }, [])

    return (
        <>
            <Header title="Último producto ingresado"/>
            <ProductDetail 
                image={'http://localhost:3000/images/products/'+lastProduct.image} 
                name={lastProduct.name} 
                // style={lastProduct.Styles.name} 
                price={lastProduct.price} 
                stock={lastProduct.stock} 
                // store={lastProduct.Stores.name} 
                year={lastProduct.year} 
                // typeOfBarrel={lastProduct.TypeOfBarrel.name} 
                timeOfBarrel={lastProduct.timeOfBarrel} 
                description={lastProduct.description}
            />
        </>
    )
}

export default LastProduct;