import { call, put, takeLatest,fork } from 'redux-saga/effects';
import { getMovie, getMovies, setMovie, setMovies } from "./feature/movieSlice";
import { fetchMovie, fetchMovies } from "./api";
function* onLoadMoviesAsync({payload}){

    try {
        const movieName = payload;
        const response = yield call(fetchMovies,movieName);
        if(response.status === 200){
            yield put(setMovies({...response.data}));
        }
    } catch (error) {
        console.log(error)
    }
}
function* onLoadMovies(){
    yield takeLatest(getMovies,onLoadMoviesAsync);
}
function* onLoadMovieAsync({payload}){
    try {
        const movieId = payload;
        const response = yield call(fetchMovie,movieId);
        if(response.status === 200){
            yield put(setMovie({...response.data}));
        }
    } catch (error) {
        console.log(error)
    }
}
function* onLoadMovie(){
    yield takeLatest(getMovie,onLoadMovieAsync);
}
export const movieSagas = [fork(onLoadMovies),fork(onLoadMovie)];
