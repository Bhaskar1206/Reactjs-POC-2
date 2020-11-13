import {Link} from 'react-router-dom'
function HomeComponent() {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      TO KNOW MORE ABOUT OUR PRODUCT ,PLEASE
      <div> 
        <Link to="/product-list">CLICK HERE</Link>
      </div>
    </div>
  );
}

export default HomeComponent;
