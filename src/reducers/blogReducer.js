import blogService from '../services/blogs'

export const initializeBlogs = () => {
    console.log("initialize blog called")
    return async dispatch => {
      const blogs = await blogService.getAll()
      console.log("Blogs from service call:", blogs)
      dispatch({
        type: 'INIT',
        data: blogs,
      })
    }
}

export const createNew = (blog) => {
    return async dispatch => {
        const newBlog = await blogService.createNew(blog)
        dispatch({
          type: 'ADD',
          data: newBlog,
        })
      }
}

export const addLike = (blogid) => {
    return async dispatch => {
        const blog = await blogService.addLike(blogid)
        dispatch({
          type: 'LIKE',
          data: blog,
        })
    }
}

const blogReducer = (state = [], action) => {
    console.log("ACTION = ", action)
    switch(action.type) {
      case 'LIKE':
        const id = action.data.id
        const newBlog = action.data
        return state.map(blog =>
          blog.id !== id ? blog : newBlog 
        )
      case 'ADD':
        return [...state, action.data]
      case 'INIT':
          return action.data
      default:
        return state
    }
}
  
  export default blogReducer