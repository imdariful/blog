import './singlepost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Ariful</b></span>
          <span className='singlePostDate'>1 h ago</span>
        </div>
        <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nulla impedit sed consequatur iure placeat ducimus eius ad ipsam amet illo dicta, in libero doloribus aspernatur deserunt soluta necessitatibus aperiam!</p>
      </div>
    </div>
  );
};

export default SinglePost;
