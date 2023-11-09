import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <>
      <div className="blog-item">
        <div className="post-details">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="published-time">{publishedDate}</div>
      </div>

      <hr className="horizontal-line" />
    </>
  )
}

export default BlogItem
