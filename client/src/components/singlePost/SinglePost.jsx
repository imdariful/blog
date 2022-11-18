import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './singlepost.css';
const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const response = await axios.get(
				'http://localhost:8000/api/posts/' + path
			);
			setPost(response.data.data);
		};
		getPost();
	}, []);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.postImg && (
					<img
						src={post.postImg}
						alt=""
						className="singlePostImg"
					/>
				)}
				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
						<i className="singlePostIcon fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>{post.username}</b>
					</span>
					<span className="singlePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="singlePostDescription">{post.desc}</p>
			</div>
		</div>
	);
};

export default SinglePost;
