import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.email}</td>
      <td><Link className="nav-link" to={props.img}> Ver imagen </Link></td>
      <td><Link className="nav-link" to={props.detail}> Ver detalle </Link></td>
    </tr>
  );
}

UserList.propTypes = {
  id: PropTypes.number,
  fullname: PropTypes.string,
  email: PropTypes.string,
  detail: PropTypes.string,  
  img: PropTypes.string  
};

export default UserList;