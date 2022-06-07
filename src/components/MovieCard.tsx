type Props = {
  imdbID: string
  Title: string
  Year: string
  likeCount: number
  Poster: string
  index: number
  handleLike: (index: number) => void
}

const MovieCard = ({
  imdbID,
  Title,
  Year,
  likeCount,
  Poster,
  index,
  handleLike,
}: Props) => {
  return (
    <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img className="md:w-56" src={Poster} alt={Title} />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
          {Title}
        </h3>
        <span className="movie--year text-xl lg:text-sm lg:mb-4">{Year}</span>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
            {imdbID}
          </p>
        </div>
        <div className="button-container flex justify-between mb-2">
          <button className="text-lg mr-4 lg:text-sm text-gray-200">
            {likeCount}
          </button>
          <button
            onClick={() => handleLike(index)}
            className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
