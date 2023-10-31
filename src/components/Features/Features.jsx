
import PropTypes from 'prop-types';
import {AiFillBank} from "react-icons/ai";
const Features =({feature})=> {
   
    return (
        <div className=''>
            <p className='flex items-center gap-3'><AiFillBank className='text-yellow-200'></AiFillBank>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature:PropTypes.object
};

export default Features;