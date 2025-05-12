import moviePoster from '../assets/img/movie-poster.png'

const ListItem = ({ element }) => {
    return (
        <>
            <li>
                <div className="card">
                    <div className="card-image">
                        <img src={moviePoster} alt="Poster Image" />
                    </div>
                    <div className="card-description">
                        <div className="card-title">
                            {element.title}
                        </div>
                        <div className="card-genre">
                            {element.genre}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ListItem;
