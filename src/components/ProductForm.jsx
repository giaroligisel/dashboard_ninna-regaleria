import Header from "./Header";
import PropTypes from "prop-types";

function ProductForm(props){
    return(
        <>
        <Header title="Crear nuevo producto" />
        <div className="form-create">
            <div className="form-content">
                <form action="" method="POST" encType="multipart/form-data">
                    <div className="field input-field">
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <input type="text" id="name" name="name" placeholder="Ej: Felino Malbec 2021" className="form-input" defaultValue={props.name}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="store" className="form-label">Bodega:</label>
                        <input type="text" id="store" name="store" placeholder="Ej: Catena Zapata" className="form-input" defaultValue={props.store}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="grape" className="form-label">Varietal:</label>
                        <input type="text" id="grape" name="grape" placeholder="Ej: Cabernet Franc 2016" className="form-input" defaultValue={props.style}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="year" className="form-label">Año:</label>
                        <input type="text" id="year" name="year" placeholder="Ej: 2016" className="form-input" defaultValue={props.year}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="typeOfBarrel" className="form-label">Tipo de barrica:</label>
                        <input type="text" id="typeOfBarrel" name="typeOfBarrel" placeholder="Ej: Roble francés" className="form-input" defaultValue={props.typeOfBarrel}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="timeInBarrel" className="form-label">Tiempo de barrica:</label>
                        <input type="text" id="timeInBarrel" name="timeInBarrel" placeholder="Ej: 2" className="form-input" defaultValue={props.timeOfBarrel}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="timeInBarrel" className="form-label">Stock:</label>
                        <input type="text" id="stock" name="stock" placeholder="Ej: 20" className="form-input" defaultValue={props.stock}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="price" className="form-label">Precio:</label>
                        <input type="text" id="price" name="price" placeholder="Ej: 10.000" className="form-input" defaultValue={props.price}/>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="discount" className="form-label">Descuento:</label>
                        <input type="text" id="discount" name="discount" placeholder="Ej: 10" className="form-input" defaultValue={props.discount}/>
                    </div>  
                    <div className="field input-field">
                        <label htmlFor="type" className="form-label">Tipo:</label>
                        <select name="type" id="type">
                            <option>Vino</option>
                            <option>Whisky</option>
                            <option>Spirit</option>
                            <option>Cerveza</option>
                            {/* {props.typesProduct.map(type => <option defaultValue={type.name}>{type.name}</option>)} */}
                        </select>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="type" className="form-label">Segmento:</label>
                        <select name="category" id="category">
                            <option>Sugerencias</option>
                            <option>Ofertas</option>
                            <option>Mas buscados</option>
                            <option>Nuevos ingresos</option>

                            {/* {props.segmentation.map(type => <option defaultValue={type.name}>{type.name}</option>)} */}
                        </select>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="description" className="form-label">Descripcion:</label>
                        <textarea name="description" id="description" className="form-input"></textarea>
                    </div> 
                    <div className="field input-field">
                        <label htmlFor="products" className="input">Selecciona la imagen del producto: </label>
                        <input type="file" name="image" accept=".img, .jpg, .jpeg, .png" className="input"/>
                    </div>
                    <div className="field button-field">
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

ProductForm.PropTypes = {
    name: PropTypes.string,
    style: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    stock: PropTypes.number,
    store: PropTypes.string,
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    typeOfBarrel: PropTypes.string,
    timeOfBarrel: PropTypes.string,
    description: PropTypes.string,
    typesProduct: PropTypes.array,
    segmentation: PropTypes.array
}

export default ProductForm;