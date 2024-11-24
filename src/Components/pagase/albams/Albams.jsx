import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Albams = () => {

    const albams = useLoaderData()
    console.log(albams);

    return (
        <div>
            hello albams
            <h1>all albams {albams.length}</h1>
            {
                albams.map(albam => <li key={albam.id}><Link to={`/albam/${albam.id}`}>{albam.title}</Link> </li>)
            }
        </div>
    );
};

export default Albams;