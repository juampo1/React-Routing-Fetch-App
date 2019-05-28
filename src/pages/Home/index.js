import React from 'react';
import './style.scss';
import Nav from '../../components/Nav';
import ListMovies from '../../containers/ListMovies';

const Home = () => (
    <div className='home-page'>
        <Nav />
        <div className='container'>
            <ListMovies />
        </div>
    </div>
)

export default Home;