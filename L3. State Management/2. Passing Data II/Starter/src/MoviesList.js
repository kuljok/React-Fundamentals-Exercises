import Movie from './Movie';

const MoviesList = ({movies, profiles, users}) => {
    const list = Object.keys(movies).map(id => ({...movies[id],
        followers: profiles.reduce((followers, profile) =>
            profile.favoriteMovieID === id ? [...followers, users[profile.userID]] : followers, [])}));

    return list.map(movie => <Movie movie={movie} />);
}

export default MoviesList;
