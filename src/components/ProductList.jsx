import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.types}</td>
      <td>{props.description}</td>
      <td><Link className="nav-link" to={props.image}> Ver imagen </Link></td>
      <td><Link className="nav-link" to={props.detail}> Ver detalle </Link></td>
    </tr>
  );
}

ProductList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.string,
  description: PropTypes.string,
  detail: PropTypes.string  
};

export default ProductList;