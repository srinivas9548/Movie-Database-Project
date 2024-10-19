import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRatedMovies} />
    <Route exact path="/upcoming" component={UpcomingMovies} />
  </Switch>
)

export default App
