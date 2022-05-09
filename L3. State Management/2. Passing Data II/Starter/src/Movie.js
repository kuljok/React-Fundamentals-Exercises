import Followers from "./Followers";

const Movie = ({movie}) => {
    if (movie.followers.length === 0) {
        return (<li key={movie.id}>{movie.name}<section style={{margin: "1px 20px", color: "darkgreen"}}>
            There are no followers yet.
        </section></li>)
    } else {
        return (<li key={movie.id}>{movie.name}
            <div>
                <Followers users={movie.followers} />
            </div>
        </li> )
    }
}

export default Movie;
