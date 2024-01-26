import PropTypes from 'prop-types';

function ProductDetail(props){
    return(
        <>
            <div className="product-detail">
                <div className="img-product">
                    <img src={props.image}/>
                </div>
                <div className="details">
                    <h5 className="product-name">
                        {props.name}
                    </h5>
                    <p className="grape">
                        {/* {props.style} */}
                    </p>
                    <p className="price">
                        {props.price}
                    </p>
                    <p className="stock">
                        Stock: {props.stock}
                    </p>
                </div>
            </div>
            <div className="desc-container">
                <div className="description">
                    <h5>Características</h5>
                    <p>
                        <span className="category">
                            ESTILO: 
                        </span>
                        <span>
                            {/* {props.style} */}
                        </span>
                    </p>
                    <p>
                        <span className="category">
                            BODEGA: 
                        </span>
                        <span>
                            {/* {props.store} */}
                        </span>
                    </p>
                    <p>
                        <span className="category">
                            AÑADA: 
                        </span>
                        <span>
                            {props.year || 'No corresponde'}
                        </span>
                    </p>
                    <p>
                        <span className="category">
                            TIPO DE BARRICA: 
                        </span>
                        <span>
                            {/* {props.typeOfBarrel || 'No corresponde'} */}
                        </span>
                    </p>
                    <p>
                        <span className="category">
                            TIEMPO DE BARRICA: 
                        </span>
                        <span>
                            {props.timeOfBarrel || 'No corresponde'}
                        </span>
                    </p>
                </div>
                <div className="description">
                    <h5>Descripción</h5>
                    <p className="description-text">
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}

ProductDetail.PropTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    store: PropTypes.string,
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    typeOfBarrel: PropTypes.string,
    timeOfBarrel: PropTypes.string,
    description: PropTypes.string,
}

export default ProductDetail;