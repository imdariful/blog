import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../components/api/axios.js';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await axios.get('/posts' + search);
			setPosts(response.data.data);
		};
		fetchPost();
	}, [search]);

	return (
		<div>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</div>
	);
};

export default Home;
