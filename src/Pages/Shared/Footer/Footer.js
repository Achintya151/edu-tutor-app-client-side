import React from 'react';
import { FaCopyright } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='text-center' >
            <hr />
            <span>Copyright <FaCopyright></FaCopyright> {new Date().getFullYear()} EduTutor.org</span>
        </div >
    );
};

export default Footer;