/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";

const Bookscard = ({ data}) => {

  const {setUpdateData,deletData} = useContext(DataContext)

  

  return (
    <div className="p-3">
      <div style={{ border: "1px solid black" }} className="d-lg-flex gap-4">
        <div style={{ border: "1px solid black" }} className="img">
          <img
            width={"300px"}
            src="https://www.shutterstock.com/shutterstock/photos/309654902/display_1500/stock-photo-swindon-uk-august-minecraft-game-books-on-a-white-background-minecrafe-was-developed-309654902.jpg"
            alt=""
          />
        </div>
        <div style={{ gap: "3rem" }} className="book-info d-flex">
          <div className="details">
            <p>Title:{data.title}</p>
            <p>Author:{data.authorname}</p>
            <p>Birth date:{data.birthdate}</p>
            <p>Biography:{data.biography}</p>
            <p>ISBN Number:{data.ISBNnumber}</p>
            <p>Publlication date:{data.publicationdate}</p>
          </div>
          <div
            style={{ margin: "auto" }}
            className="modificaction d-grid gap-3"
          >
            <Link to="/createbook">
            <button onClick={()=>setUpdateData(data)} className="btn btn-primary">Edit</button>  
            </Link> <br />
            
            <button onClick={()=>deletData(data.id)} className="btn btn-danger">Delete</button>  
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookscard;
