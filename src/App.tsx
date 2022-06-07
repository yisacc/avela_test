import React from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [state, setState] = React.useState([
    {
      imdbID: 'tt0096895',
      Title: 'Batman',
      Year: '1989',
      likeCount: 0,
      Poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg',
    },
    {
      imdbID: 'tt0468569',
      Title: 'The Dark Knight',
      Year: '2008',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt2975590',
      Title: 'Batman v Superman: Dawn of Justice',
      Year: '2016',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt1345836',
      Title: 'The Dark Knight Rises',
      Year: '2012',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt0372784',
      Title: 'Batman Begins',
      Year: '2005',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt4116284',
      Title: 'The LEGO Batman Movie',
      Year: '2017',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt0112462',
      Title: 'Batman Forever',
      Year: '1995',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt0118688',
      Title: 'Batman & Robin',
      Year: '1997',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      imdbID: 'tt0103776',
      Title: 'Batman Returns',
      Year: '1992',
      likeCount: 0,
      Poster:
        'https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
  ])

  const handleLike = (index: number) => {
    const updatedMovie = [...state]
    updatedMovie[index].likeCount++
    setState(updatedMovie)
  }
  return (
    <div className="flex flex-wrap flex-movie">
      {state.map((movie, index) => (
        <MovieCard {...movie} index={index} handleLike={handleLike} />
      ))}
    </div>
  )
}

export default App
