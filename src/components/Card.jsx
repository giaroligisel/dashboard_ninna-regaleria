import PropTypes from 'prop-types';

function Card(props){
    return(
        <div className="content-card card-card">
            <div>
                <p className='data'>{props.title}</p>
                <p className='data'>{props.quantity}</p>
            </div>
            <div>
                <i className={`icon ${props.icon}`}></i>
            </div>
        </div>
    )
}

Card.propTypes={
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}

export default Card