import PropTypes from 'prop-types';

function Header(props){
    return(
        <nav className="navigation">
            <h1>{props.title}</h1>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header