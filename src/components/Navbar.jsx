import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
import Createbook from './Books_components/Createbook';
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" element={<Homepage/>}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createbook" element={<Createbook/>}>Add book</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className="profile">
    <ul style={{listStyle:"none", display:"grid", gap:"10px",padding:"0px 10px"}}>
      <li className="nav-item">
          <h3>Navanitharan</h3>
        </li>
    </ul>
  </div>
</nav>


    // <div>
    //   <ul style={{listStyle:"none",backgroundColor:"#000000"}} className="nav-bar navbar-expand-lg justify-content-end">
    //     <li className="nav-item">
    //       <p>Mr.login</p>
    //     </li>
        
    //     <li className="nav-item">
    //       <a className="nav-link" href="/createbook">
    //         Add book
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
