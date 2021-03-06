import React from 'react';

const Connect = (props) => {
    const { name, link } = props.route;
    return (
        <div>
            <li className='mr-12'><a href={link}>{name}</a></li>
        </div>
    );
};

export default Connect;