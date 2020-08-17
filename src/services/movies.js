import AxiosService from './xhr';
import EndPoint from './endpoint'

const endpoint = EndPoint.tmdb.movie;

const movies = {
    search: (query) => {
        return AxiosService.Get(endpoint, `&query=${query}`);
    }
}

export default movies;