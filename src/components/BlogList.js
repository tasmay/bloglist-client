import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLike } from '../reducers/blogReducer'

const BlogList = () => {

    const blogs = useSelector(state => state.blogs)
    console.log("BLOGS = ", blogs)
    const dispatch = useDispatch()
    return(
        <div>
            {blogs.map(blog =>
                <div key={blog.id}>
                    <div>
                        Title: {blog.title}
                    </div>
                    <div>
                        Author: {blog.author}
                    </div>
                    <div>
                        URL: <a href={blog.url}>{blog.url}</a>
                    </div>
                    <div>
                        Likes: {blog.likes}
                        <button onClick={() => dispatch(addLike(blog.id))}>Like</button>
                    </div>
                    <br/>
                </div>
          )}
        </div>
    )
}

export default BlogList