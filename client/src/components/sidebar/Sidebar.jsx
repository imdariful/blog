import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios.js';
import './sidebar.css';

const Sidebar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategory = async () => {
			const response = await axios.get('/categories');
			setCategories(response.data.data);
		};

		getCategory();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img
					src="https://thispersondoesnotexist.com/image"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Odit, eius?
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				<ul className="sidebarList">
					{categories.map((category) => (
						<Link
							to={`/?cat=${category.name}`}
							className="link"
						>
							<li
								className="sidebarListItem"
								key={category._id}
							>
								{category.name}
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow Us</span>
				<i className="sidebarIcon fa-brands fa-square-facebook"></i>
				<i className="sidebarIcon fa-brands fa-square-github"></i>
				<i className="sidebarIcon fa-brands fa-linkedin"></i>
				<i className="sidebarIcon fa-brands fa-square-instagram"></i>
			</div>
		</div>
	);
};

export default Sidebar;
