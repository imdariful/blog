import './post.css';
import { Link } from 'react-router-dom';
const Post = ({ post }) => {
	return (
		<div className="post">
			{post.postImg && (
				<img className="postImg" src={post.postImg} alt="" />
			)}
			<div className="postInfo">
				<div className="postCategories">
					{post.categories.map((category) => (
						<span className="postCategory">
							{category.name}
						</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDescription">
				Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Totam qui quisquam debitis saepe molestiae. Iste
				odio similique sit quis quas eos, accusantium
				accusamus fugit architecto nobis tempora corrupti
				necessitatibus illo? Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Totam qui quisquam
				debitis saepe molestiae. Iste odio similique sit quis
				quas eos, accusantium accusamus fugit architecto nobis
				tempora corrupti necessitatibus illo? Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Totam
				qui quisquam debitis saepe molestiae. Iste odio
				similique sit quis quas eos, accusantium accusamus
				fugit architecto nobis tempora corrupti necessitatibus
				illo? Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Totam qui quisquam debitis saepe
				molestiae. Iste odio similique sit quis quas eos,
				accusantium accusamus fugit architecto nobis tempora
				corrupti necessitatibus illo?
			</p>
		</div>
	);
};

export default Post;
