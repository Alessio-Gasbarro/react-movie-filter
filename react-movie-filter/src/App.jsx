import { useState, useEffect } from 'react'
import Header from './components/Header';
import ListItem from './components/ListItem';

//Array dell'esercizio
const movieArray = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  // Importa l'array
  const [movies, setMovies] = useState(movieArray);
  // Const useState per il filtro genere + ricerca titolo
  const [genre, setGenre] = useState('');
  const [search, setSearch] = useState('');
  // Array per i filtrati + mostrati in pagina
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // L'aggiunta delle aggiunte
  const [newTitle, setNewTitle] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovie = { title: newTitle, genre: newGenre };
    setMovies([...movies, newMovie]);
    setNewTitle('');
    setNewGenre('');
  }

  // useEffect Filter Genere + Titolo
  useEffect(() => {
    const filtered = movies.filter((element) =>
      element.genre.includes(genre) && element.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredMovies(filtered)
  }, [movies, genre, search])

  return (
    <>
      <Header />
      {/*SearchBox*/}
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder='Cerca per titolo'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/*Per Genere*/}
          <select
            name="genre"
            id='genre-filter'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Scegli il genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>
      </div>

      {/*Lista Film*/}
      <div className="container">
        <div className="movie-container">
          <ul>
            {filteredMovies.map((element, index) => (
              <ListItem key={`movie-${index}`} element={element} />
            ))}
          </ul>
        </div>
      </div>

      {/*Aggiunta Film*/}
      <div className="container">
        <form onSubmit={addNewMovie}>
          <h2>Add a new entry</h2>
          <div className='input-container'>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <select
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
            >
              <option value="">Scegli il genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}

export default App;
