import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ categories }) {
  return (
    <div className="col-md-4" style={{display:'inline-block', backgroundColor: '#ffe2fc', width: '25%', borderRight: '1px solid black', float: 'left', marginTop: '2rem', padding: '1rem', marginLeft: '0.5rem'}}>
      <div className="card">
        <h2 className="card-header">
          Categories
        </h2>
        <ul className="list-group list-group-flush">
          {categories.map((category) => (
            <li key={category.id} style={{ listStyleType: 'square'}} className="list-group-item">
              <Link to={`/category/${category.id}`} style={{textDecoration: 'none'}}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
