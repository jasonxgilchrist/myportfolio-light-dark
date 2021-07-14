import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/skills' component={Skills}></Route>
          <Route exact path='/works' component={Works}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
