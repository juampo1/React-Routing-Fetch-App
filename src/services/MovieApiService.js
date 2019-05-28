class MovieApiService {
    constructor() {
        this.URL = 'https://yts.am/api/v2/list_movies.json';
    }

    async getAllMovies() {
        const response = await fetch('https://yts.am/api/v2/list_movies.json');
        const data = await response.json();
        return data;
    }

    async getMovieById(id) {
        const response = await fetch(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`);
        const data = await response.json();
        return data;
    }

}

const _instance = new MovieApiService();
export default _instance;