import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Bookspage from "./components/Bookspage";
import Createbook from "./components/Books_components/Createbook";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const DataContext = createContext();

function App() {

  const [books, setBooks] = useState([]);

  const [updateData, setUpdateData] = useState(null);


  let getData = async()=>{
    let response = await axios.get("https://65c0d4dedc74300bce8ccf61.mockapi.io/data/test/blog")
      
    let gatherdBooks = response.data;
    setBooks(gatherdBooks)
  }

  let deletData = async(id)=>{
    try{
      await axios.delete(`https://65c0d4dedc74300bce8ccf61.mockapi.io/data/test/blog/${id}`);
      let updatedBooksList = books.filter((book)=>{
        return book.id !== id;
      });
      setBooks([...updatedBooksList]);
      getData();
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <DataContext.Provider 
      value={{books,setBooks,updateData,setUpdateData,getData,deletData}}
      >
      <BrowserRouter>
        <div style={{ height: "100%" }} className="container d-flex">
          <Sidebar />
          <div style={{margin:"0px",padding:"0px"}} className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/bookspage" element={<Bookspage/>} />
              <Route path="/createbook" element ={<Createbook/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export {App as default, DataContext};
