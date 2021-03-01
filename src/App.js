import AddMovie from "./components/add-movie/AddMovie";
import MovieList from "./components/movie-list/MovieList"
import Nav from "./components/nav/Nav";
import { MovieProvider } from "./context/MovieContext";

const App = () => {

  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  )

}

export default App;
