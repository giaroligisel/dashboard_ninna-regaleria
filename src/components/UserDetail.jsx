import PropTypes from 'prop-types';


function UserDetail(props){
    return(
        <>
            <div className="profile">
                <h2 className="title">{props.fullname}</h2>
                    <div className="dates">
                        <p className="date">Ingresaste a las {props.timestamp}</p>
                        <h4>Datos:</h4>
                        <div className="personal-data">
                            <img className='img-user' src={props.img} alt=""/>  
                            <p className="personal-data">Email: {props.email}</p>
                            <p className="personal-data">DNI: {props.dni}</p>
                            <p className="personal-data">Edad: {props.age}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

UserDetail.PropTypes = {
    fullname: PropTypes.string,
    timestamp: PropTypes.string,
    img: PropTypes.string,
    dni: PropTypes.number,
    age: PropTypes.number,
    email: PropTypes.string,
}

export default UserDetail;