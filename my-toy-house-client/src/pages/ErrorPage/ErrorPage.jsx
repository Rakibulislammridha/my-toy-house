import React from 'react';
import './ErrorPage.css'
import errorCover from '../../assets/error.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle("404 Page Not Found")
    return (
        <div className='text-center error-container'>
            <img src={errorCover} alt="" />
            <h2 className='text-5xl font-bold'>404 Page Not Found</h2>
            <Link to="/">
            <button className='error-button mt-10'>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;