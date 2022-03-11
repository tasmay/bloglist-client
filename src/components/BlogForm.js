import { getByTitle } from '@testing-library/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNew } from '../reducers/blogReducer'

const BlogForm = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const addBlog = (event) => {
    const newBlog = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0
    }
    dispatch(createNew(newBlog))
    history.push('/')
  }

    return (
      <div>
        <h2>Create a New Blog</h2>
        <form onSubmit={addBlog}>
          <div>
            <label>Title</label>
            <input name="title" />
          </div>
          <div>
            <label>Author</label>
            <input name="author" />
          </div>
          <div>
            <label>URL</label>
            <input name="url" type="url" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  
}

export default BlogForm