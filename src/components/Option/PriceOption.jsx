import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({option}) => {
    const {name,price ,features}=option;
    return (
        <div className='bg-orange-800 text-white mx-10 my-10 flex flex-col ml-5 p-6 rounded'>
            <h2>
                <span className='text-4xl text-center font-bold'>{price}</span>
                <span className='text-2xl text-center'>/min</span>
            </h2>
            <h4 className='text-4xl'>
                {name}
            </h4>
            <div className='text-center flex-grow ml-10 mt-5'>
            {
                features.map((feature,idx) =><Features key={idx} feature={feature}></Features>)
            }
            </div>
            <button  className='bg-yellow-200 w-full hover:bg-teal-600 mx-3 my-3 p-3 text-blue-500 text-xl font-bold rounded'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;