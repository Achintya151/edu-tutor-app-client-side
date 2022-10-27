import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://edututor-app-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <aside className=' ms-auto'>
            <div>
                <h4>Courses</h4>
                <hr />
            </div>
            <ul className='list-group'>
                {
                    categories.map(category => <li className='list-group-item list-group-item-action text-start' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default LeftsideNav;