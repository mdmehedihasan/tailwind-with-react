import React from 'react';
import PricingOption from '../PricingOption/PricingOption';




const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'everything on free',
                'Unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 2.99, benefits: [
                'everything on Regular',
                'Unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 20, benefits: [
                'everything on free',
                'Unlimited deals',
                'localized deals',
                'crazy deals'
            ],
        },
    ];
    return (
        <div className='bg-indigo-200 mt-8 p-4'>
            <h1 className='text-5xl font-mono'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea aut corrupti fugit repellat blanditiis officiis. Ratione modi nihil officiis?</p>

            <div className='grid md:grid-cols-3 gap-5 mt-3'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;