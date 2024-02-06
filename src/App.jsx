import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'


function App() {
  const apiKey = "98e3fb1f";
  // State to hold movie data
  const [movie, setMovie] = useState(null)
  // Function to get movies

const getMovie = async(searchTerm) => {
  try {
  // Make fetch request and store the response 
  const response = await fetch (
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
// Parse JSON response into a JS object
const data = await response.json();
//Set the Movie state to the received data
setMovie(data);
  } catch (e) {
    console.error(e)
  }
};

 // This will run on the first render but not on subsquent renders
useEffect(() => {
  getMovie("Clueless");
}, []);
// i completely forgot to git init ......
// Pass the getMovie function as a prop called moviesearch
// Pass movie as a prop to MovieDisplay
  return (
    <div className ="App">
      <Form moviesearch= {getMovie}/>
      <MovieDisplay movie={movie} />
      </div>
  )
}

export default App
