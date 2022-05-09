const FavoriteMovies = ({profiles, movies, users}) => {
    const userMovies = profiles.map(p => {
        const userName = users[p.userID].name;
        const movieName = movies[p.favoriteMovieID].name;
        return {
            id: p.id,
            title: `${userName}'s favorite movie is ${movieName}`
        }
    });
    return (<ol>
        {userMovies.map(m => <li key={m.id}>{m.title}</li>)}
    </ol>)
}

export default FavoriteMovies;
