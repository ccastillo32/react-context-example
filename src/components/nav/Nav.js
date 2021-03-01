import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const Nav = () => {

    const [ movies ] = useContext(MovieContext);

    return (
        <div className="nav">
            <h3>Your name</h3>
            <p>List of movies: { movies.length}</p>
        </div>
    );

}

export default Nav;