import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <aside className='w-50 ms-auto'>
            <div>
                <h4>Courses: {categories.length}</h4>
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