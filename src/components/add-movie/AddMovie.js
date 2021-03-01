import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [ movies, setMovies ] = useContext(MovieContext);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name, price: '$' + price}]);
    }

    return (
        <form onSubmit={ onSubmitForm }>
            <input type='text' name='name' onChange={ onChangeName } />
            <input type='text' name='price' onChange={ onChangePrice } />
            <button>Submit</button>
        </form>
    );

}

export default AddMovie;