import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Ditals = () => {
    const albam = useLoaderData();
    console.log(albam);

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='card bg-base-200 shadow-xl w-96 p-2'>
                <h1 className='card-title'>{albam.title}</h1>
                <p>id:{albam.id}</p>
                <div className='card-compact'>
                    <img src={albam.url} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ditals;