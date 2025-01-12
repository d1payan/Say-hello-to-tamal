/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { Navbar } from '../../components';

const Meet = () => {
    document.title = "Meet Tamal";
    useEffect(() => {
        if (window.location.pathname === '/meet') {
            setTimeout(() => {
                window.location.href = 'https://meet.google.com/bwr-rhma-exk';
            }, 500);
        }
    }, []);

    return (
        <>
            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                <p> Loading your meeting 🚀 </p>
            </div>

        </>
    );
};

export default Meet;
