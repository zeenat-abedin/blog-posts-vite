import { useCallback, useState } from 'react'
import  debounce  from 'lodash.debounce'

function App() {

  const postsData = [
    {
     title: "Sample Text",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://images.unsplash.com/photo-1519337364444-c5eeec430101?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-20T08:30:00.000Z"
    },
    {
     title: "Web Development",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://images.unsplash.com/photo-1521669045495-4ceac990963a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-18T15:45:00.000Z"
    },
    {
     title: "Lorem Ipsum",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-28T12:20:00.000Z"
    },
    {
     title: "Random Title",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=1024x1024&w=is&k=20&c=47-y8UPbITvHDInivDBKJJiTMzO6Ds78N2UHQUjQZqk=",
     timestamp: "2024-02-10T09:10:00.000Z"
    },
    {
     title: "Data Science",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://images.unsplash.com/photo-1523634921619-37ce98c1877f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-15T18:05:00.000Z"
    },
    {
     title: "Placeholder 6",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://images.unsplash.com/photo-1534946405874-8915c3f62beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-22T14:40:00.000Z"
    },
    {
     title: "Placeholder 7",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://images.unsplash.com/photo-1706264337427-fbd7405c3483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-25T21:15:00.000Z"
    },
    {
     title: "Placeholder 8",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://images.unsplash.com/photo-1573675580577-58973eafd7ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-12T11:50:00.000Z"
    },
    {
     title: "Placeholder 9",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-14T16:25:00.000Z"
    },
    {
     title: "Placeholder 10",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-27T10:00:00.000Z"
    },
    {
     title: "Placeholder 11",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     timestamp: "2024-02-16T19:35:00.000Z"
    },
  ]
  const [ searchTerm, setSearchTerm ] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(postsData); 

  const formatDate = (dateString) => {
    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      const filteredPosts = postsData.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredPosts(filteredPosts)
      }, 500),
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    debouncedSearch(e.target.value)
  }
  
  return (
    <>
      <h1>All blog posts</h1>
      <input type="text" placeholder='Search post' value={searchTerm} onChange={handleSearchChange} />
      <div className="blog-post-container">
        {
          filteredPosts.map((post, index) => (
          <div className="blog-post-item" key={index}>
              <img src={post.imageThumbnail} alt={post.title}/>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p>{formatDate(post.timestamp)}</p>
          </div>
        ))
       } 
      </div>
    </>
  )
}

export default App
