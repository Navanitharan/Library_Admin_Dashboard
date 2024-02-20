
import { useContext, useEffect } from 'react'
import Bookscard from './Books_components/Bookscard'
import Topbar from "./Books_components/Topbar"
import { DataContext } from '../App'

const Bookspage = () => {

  const{books,getData,deletData} = useContext(DataContext)
  
  

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div style={{margin:"0.5rem"}}>
      <Topbar></Topbar>
      {books.map((book,index)=>{
        return (<Bookscard key={index} data={book} deletData={deletData}></Bookscard>)
      })}
    </div>
  )
}

export default Bookspage
