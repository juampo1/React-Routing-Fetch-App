import React from 'react';
import { Link } from 'react-router-dom';


const CardDetails = ({ background_image_original, title_english, language, year }) => (
    // <h1>{data.title}</h1>
    <div className="card-detail">
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={background_image_original} />
                        </div>
                        <div className="card-content">
                            <ul>
                                <li>
                                    <strong> Nombre: </strong> <span> {title_english}</span>
                                </li>
                                <li>
                                    <strong> Idioma: </strong> <span> {language}</span>
                                </li>
                                <li>
                                    <strong> year: </strong> <span> {year}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card-action">
                            <Link to='/'>
                                Volver al listado
                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
)

export default CardDetails;
