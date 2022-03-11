import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom"

// components
import Menu from './components/Menu'
import Footer from './components/Footer'
import About from './components/About'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'

// reducers
import { initializeBlogs } from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("effect called")
    dispatch(initializeBlogs()) 
  },[dispatch]) 

  return (
    <div>
      <h1>Bloglist App</h1>
      <Menu />
      <Switch>
        {/* <Route path="/blog/:id">
        </Route> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <BlogForm />
        </Route>
        <Route path="/">
          <BlogList />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
