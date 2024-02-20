import { useContext, useEffect } from "react"
import AvailableBooks from "./Homepage_Components/AvailableBooks"
import 'bootstrap/dist/css/bootstrap.min.css'
import { DataContext } from "../App"
import Bookscard from "./Books_components/Bookscard"
const Homepage = () => {

    const {books,getData} = useContext(DataContext)


    let availableBooksDetails = [{
        title:"Available Books",
        value:"2,300",
        color:"#1098f7"
    },
    {
        title:"Borrowed Books",
        value:'1,358',
        color:"#fff"
    },
    {
        title:"Overdue Books",
        value:58,
        color:"#1098f7"
    }]

    useEffect(()=>{
        getData()
    },[])

  return (
   <>
    <div style={{boxSizing:"border-box",marginLeft:"1rem"}} className="row p-3 d-flex g-0 justify-content-between bg-success">
    {
        availableBooksDetails.map((details,index)=>{
            return <AvailableBooks key={index} details={details} />
        })
    }
    </div>
    <div className="row m-3">
        {books.map((book,index)=>{
            return <Bookscard key={index} data={book}/>
        })}
    </div>
    
   </>
  )
}

export default Homepage
