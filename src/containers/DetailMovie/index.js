import React from 'react';
import CardDetails from '../../components/CardDetail';
import MovieApiInstance from '../../services/MovieApiService';

class DetailMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: {},
            error: null,
        }
    }


    async componentDidMount() {
        const {
            match: {
                params: {
                    idPelicula
                }
            }
        } = this.props

        // console.log(idPelicula);

        // console.log(this.props);
        // const { match } = this.props.match;
        // const { params } = match.params;
        // const { idMovie } = params;
        // console.log(idMovie);

        if (idPelicula.length > 0) {
            MovieApiInstance.getMovieById(idPelicula)
                .then(
                    movie => {
                        // let [data] = movie;
                        this.setState({ movie });
                        console.log(movie);
                    }
                ).catch(
                    err => this.setState({ err })
                );
        }

    }

    render() {
        const { movie, error } = this.state;
        return (
            <div className="detail-movie">
                {
                    error ? <h1>404 not found</h1>
                        :
                        !movie
                            ? <h2>No hay Pelicula cargada todavia, espere..</h2>
                            :
                            <CardDetails {...movie.data.movie} />
                }
            </div>
        );
    }

}

export default DetailMovie;