import React from 'react';
import movieService from '../../services/MovieApiService';
import Card from '../../components/Card';

class ListMovies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }


    async componentDidMount() {
        const response = await movieService.getAllMovies();
        const list = response.data.movies;

        const newList = list.map(movie => {
            let element = {};
            element.id = movie.id;
            element.title = movie.title_english;
            return element;
        })
        console.log(newList);
        this.setState({
            list: newList,
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div className="list-movies">
                <h2>Mis Peliculas: {list.length}</h2>
                <div className="row">
                    {
                        list.map((item, index) => <Card key={item.id} {...item} />)
                    }
                </div>
            </div>
        );
    }


}

export default ListMovies;

