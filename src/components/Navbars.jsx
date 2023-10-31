
import PropTypes from 'prop-types';

const Navbars = ({route}) => {
    const {path,name}=route;
    return (
        
            <ul>
                <li className='hover:bg-yellow-600'>
                    <a href={path}>{name}</a>
                </li>
            </ul>
        
    );
};

Navbars.propTypes = {
    route:PropTypes.object
    
};

export default Navbars;