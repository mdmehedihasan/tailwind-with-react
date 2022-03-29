import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-200 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='tex-xl font-bold text-grey-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex items-center rounded-sm my-2 py-2 w-full justify-center font-bold hover:text-white'>Buy Now<ArrowRightIcon className='w-4 h-4 ml-2'></ArrowRightIcon></button>
        </div >
    );
};

export default PricingOption;