import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductDetail(props){
    return(
        <>
            <div class="edit-product">
                <button class="product-buttom" href="">
                    <Link to={"/products/list?page=1"}>Volver</Link>
                </button>
                <button class="product-buttom" href="">
                    <Link to={props.detail +"/edit"}>Editar</Link>
                </button>
                <form action="/productDetail/<%= products.id %>?_method=DELETE" method="post">
                    <button class="product-buttom" type="submit">Eliminar</button>
                </form>
            </div>
            <div className="desc-container">
                <div className="description">
                    <h5>Características</h5>
                    <p>
                        <span className="field">
                            NOMBRE: 
                        </span>
                        <span className="data">
                            {props.name}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            ESTILO: 
                        </span>
                        <span className="data">
                            {props.style}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            PRECIO: 
                        </span>
                        <span className="data">
                            {props.price}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            BODEGA: 
                        </span>
                        <span className="data">
                            {props.store}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            AÑADA: 
                        </span>
                        <span className="data">
                            {props.year}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            TIPO DE BARRICA: 
                        </span>
                        <span className="data">
                            {props.typeOfBarrel}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            TIEMPO DE BARRICA: 
                        </span>
                        <span className="data">
                            {props.timeOfBarrel}
                        </span>
                    </p>
                    <p>
                        <span className="field">
                            DESCRIPCIÓN: 
                        </span>
                        <span className="data">
                            {props.description}
                        </span>
                    </p>
                </div>
                <div className="description img-prod">
                    <h5>Imagen</h5>
                    <img className='product' src={props.image}/>
                </div>
            </div>
            
        </>
    )
}

ProductDetail.propTypes = {
    detail: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.string,
    price: PropTypes.string,
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