
function App() {

  const postsData = [
    {
     title: "Sample Text",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://placekitten.com/200/150",
     timestamp: "2024-02-20T08:30:00.000Z"
    },
    {
     title: "Web Development",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://placeimg.com/200/150/tech",
     timestamp: "2024-02-18T15:45:00.000Z"
    },
    {
     title: "Lorem Ipsum",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://placekitten.com/201/150",
     timestamp: "2024-02-28T12:20:00.000Z"
    },
    {
     title: "Random Title",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://placeimg.com/200/150/nature",
     timestamp: "2024-02-10T09:10:00.000Z"
    },
    {
     title: "Data Science",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://placeimg.com/200/150/animals",
     timestamp: "2024-02-15T18:05:00.000Z"
    },
    // Additional items (placeholders)
    {
     title: "Placeholder 6",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://placekitten.com/202/150",
     timestamp: "2024-02-22T14:40:00.000Z"
    },
    {
     title: "Placeholder 7",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://placeimg.com/202/150/tech",
     timestamp: "2024-02-25T21:15:00.000Z"
    },
    {
     title: "Placeholder 8",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://placekitten.com/203/150",
     timestamp: "2024-02-12T11:50:00.000Z"
    },
    {
     title: "Placeholder 9",
     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     imageThumbnail: "https://placeimg.com/203/150/nature",
     timestamp: "2024-02-14T16:25:00.000Z"
    },
    {
     title: "Placeholder 10",
     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     imageThumbnail: "https://placekitten.com/204/150",
     timestamp: "2024-02-27T10:00:00.000Z"
    },
    {
     title: "Placeholder 11",
     excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     imageThumbnail: "https://placeimg.com/204/150/animals",
     timestamp: "2024-02-16T19:35:00.000Z"
    },
  ]

  return (
    <>
      <h1>Photo Gallery</h1>
      <div className="blog-post-container">
        {
            postsData.map((post, index) => (
            <div className="blog-post-item" key={index}>
              <img src={post.imageThumbnail} alt={post.title}/>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p>{post.timestamp}</p>
            </div>
        ))
       } 
      </div>
    </>
  )
}

export default App
