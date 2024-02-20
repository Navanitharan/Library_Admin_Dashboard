import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div style={{height:"100vh",backgroundColor:"#000000",textAlign:"center"}} className="col-2 ">
      <ul className="nav d-block justify-content-center">
        <li className="nav-item">
          
          <Link to='/'>Dashboard</Link>
            
        </li>
        <li className="nav-item">
          
          <Link to='/bookspage'>Books</Link>
            
        </li>
        <li className="nav-item">
          <Link to='/createbook'>
              Add Books
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
