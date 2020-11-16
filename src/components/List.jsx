import films from "./Services/Data"

const List = () => {
    return (
        <div>
            {films.map(film =>
                <div key={film.id}>
                    <img src={film.image} alt='Capa do Filme' width='250rem'/>
                    <h3>{film.name}</h3>
                    <p>{ film.date}</p>
                </div>
            )}
        </div>
    )
}

export default List