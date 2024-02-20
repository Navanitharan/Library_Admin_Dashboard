import { Link } from "react-router-dom"

const Topbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"2rem 0rem"}} className='container'>
      <h4>Books</h4>
      <Link to='/createbook'>
      <button className='btn btn-primary'>Add book</button>
      </Link>
    </div>
  )
}

export default Topbar
