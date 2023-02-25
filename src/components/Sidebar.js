import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ categories }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          Categories
        </div>
        <ul className="list-group list-group-flush">
          {categories.map((category) => (
            <li key={category.id} className="list-group-item">
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
