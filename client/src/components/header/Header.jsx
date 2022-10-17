import './header.css';

const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="headerTitles">
          <span className="headerTitleLg">React & Node</span>
          <span className="headerTitleSm">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
        />
      </header>
    </div>
  );
};

export default Header;
