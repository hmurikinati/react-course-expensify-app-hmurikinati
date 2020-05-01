import React from 'react';
import {Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        No Match Found <Link to='/'>Go Home</Link>
    </div>
);

export default NotFoundPage;