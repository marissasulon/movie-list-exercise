import React from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import Add from './components/Add';
import ToggleView from './components/ToggleView';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [
        { title:  'Mean Girls',  watched: false },
        { title:  'Hackers',     watched: true },
        { title:  'The Grey',    watched: true },
        { title:  'Sunshine',    watched: false },
        { title:  'Ex Machina',  watched: true },
      ],
      search: "",
      newMovie: "",
      view: "all"
    }
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleAdd = (event) => {
    this.setState({
      newMovie: event.target.value
    });
  }

  addMovie = (event) => {
    event.preventDefault()
    if (this.state.newMovie.length <= 1) {
      return;
    };
    let newList = this.state.movies.concat({
      title: this.state.newMovie,
      watched: false
    });
    this.setState({
      movies: newList,
      newMovie: ""
    });
  }

  toggleWatched = (event) => {
    let watchedMovies = this.state.movies;
    watchedMovies.forEach(item => {
      if (item.title === event.target.id) {
        (item.watched) = (!item.watched);
      }
    })
    this.setState({
      movies: watchedMovies
    })
  }

  toggleView = (event) => {
    console.log(event.target.id)
    let newView = event.target.id;
    this.setState({
      view: newView
    })
  }

  render() {
    return(
      <div id="container">
        <div id="query-div">
          <ToggleView onClick={this.toggleView}/>
          <Add value={this.state.newMovie} onChange={this.handleAdd} onSubmit={this.addMovie} />
          <Search value={this.state.search} onChange={this.handleSearch} />
        </div>
        <ul>
          {
          this.state.view === "watched" ?
            (this.state.movies.filter(movie => movie.watched)
            .map((movie, index) => <MovieList key={index} item={movie} onClick={this.toggleWatched}/>)
          ):
          this.state.view === "unwatched" ?
            (this.state.movies.filter(movie => movie.watched === false)
            .map((movie, index) => <MovieList key={index} item={movie} onClick={this.toggleWatched}/>)
          ):
          this.state.movies
            .filter(movie => movie.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((movie, index) => <MovieList key={index} item={movie} onClick={this.toggleWatched}/>)
          }
        </ul>
      </div>
    )
  }
}

export default App;
