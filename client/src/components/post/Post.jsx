import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img
        className='postImg'
        src="https://source.unsplash.com/random" alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit
            </span>
            <hr />
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className='postDescription'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam qui quisquam debitis saepe molestiae. Iste odio similique sit quis quas eos, accusantium accusamus fugit architecto nobis tempora corrupti necessitatibus illo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam qui quisquam debitis saepe molestiae. Iste odio similique sit quis quas eos, accusantium accusamus fugit architecto nobis tempora corrupti necessitatibus illo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam qui quisquam debitis saepe molestiae. Iste odio similique sit quis quas eos, accusantium accusamus fugit architecto nobis tempora corrupti necessitatibus illo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam qui quisquam debitis saepe molestiae. Iste odio similique sit quis quas eos, accusantium accusamus fugit architecto nobis tempora corrupti necessitatibus illo?
        </p>
    </div>
  )
}

export default Post