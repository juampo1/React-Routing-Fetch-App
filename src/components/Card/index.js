import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title }) => (
  <div className="col m6">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content" >
          <Link to={`/pelicula/${id}`} >
            <h2> {title} </h2>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Card;