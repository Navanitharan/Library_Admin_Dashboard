import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
const validate = (values)=>{
  const error = {};

  if (!values.title) {
    error.title = "Required"
  }
  if (!values.authorname) {
    error.authorname = "Required"
  }
  if (!values.birthdate) {
    error.birthdate = "Required"
  }
  if (!values.biography) {
    error.biography = "Required"
  }
  if (!values.ISBNnumber) {
    error.ISBNnumber = "Required"
  }
  if (!values.publicationdate) {
    error.publicationdate = "Required"
  }

   return error
}

const Createbook = () => {

  const {updateData,setUpdateData}=useContext(DataContext);
  const Navigate = useNavigate();

  const formik = useFormik({
    initialValues:updateData===null?{
        title:"",
        authorname:"",
        birthdate:"",
        biography:"",
        ISBNnumber:"",
        publicationdate:""
    }:{
      
        title:updateData.title,
        authorname:updateData.authorname,
        birthdate:updateData.birthdate,
        biography:updateData.biography,
        ISBNnumber:updateData.ISBNnumber,
        publicationdate:updateData.publicationdate
      
    },
    validate,
    onSubmit: async(values)=>{
      try{
        updateData === null ? 
          await axios.post("https://65c0d4dedc74300bce8ccf61.mockapi.io/data/test/blog",
      values)
        : await axios.put(`https://65c0d4dedc74300bce8ccf61.mockapi.io/data/test/blog/${updateData.id}`,values)
        setUpdateData(null)
      Navigate("/bookspage");
      }
      catch(error){
        console.log(error)
      }
    } 
    
  })



  return (
    <div style={{margin:"2rem"}}>
      <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Tiltle" className="form-group">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Tiltle"
              name="title"
              placeholder="Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
            <div style={{ color: "red" }}>{formik.errors.title}</div>
          ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="Author" className="form-group">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Author"
              name="authorname"
              placeholder="Author Name"
              onChange={formik.handleChange}
              value={formik.values.authorname}
            />
            {formik.touched.authorname && formik.errors.authorname ? (
            <div style={{ color: "red" }}>{formik.errors.authorname}</div>
          ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="Birth date" className="form-group">
              Birth date
            </label>
            <input
              type="text"
              className="form-control"
              id="Birth date"
              name="birthdate"
              placeholder="Birth date"
              onChange={formik.handleChange}
              value={formik.values.birthdate}
            />
            {formik.touched.birthdate && formik.errors.birthdate ? (
            <div style={{ color: "red" }}>{formik.errors.birthdate}</div>
          ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="Biography" className="form-group">
              Biography
            </label>
            <textarea
              type="text"
              className="form-control"
              id="Biography"
              name="biography"
              placeholder="Biography"
              onChange={formik.handleChange}
              value={formik.values.biography}
            />
            {formik.touched.biography && formik.errors.biography ? (
            <div style={{ color: "red" }}>{formik.errors.biography}</div>
          ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="ISBN Number" className="form-group">
              ISBN Number
            </label>
            <input
              type="text"
              className="form-control"
              id="ISBN Number"
              name="ISBNnumber"
              placeholder="ISBN Number"
              onChange={formik.handleChange}
              value={formik.values.ISBNnumber}
            />
            {formik.touched.ISBNnumber && formik.errors.ISBNnumber ? (
            <div style={{ color: "red" }}>{formik.errors.ISBNnumber}</div>
          ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="Publication Date" className="form-group">
              Publication Date
            </label>
            <input
              type="text"
              className="form-control"
              id="Publication Date"
              name="publicationdate"
              placeholder="Publication Date"
              onChange={formik.handleChange}
              value={formik.values.publicationdate}
            />
            {formik.touched.publicationdate && formik.errors.publicationdate ? (
            <div style={{ color: "red" }}>{formik.errors.publicationdate}</div>
          ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

      </form>
    </div>
  );
};

export default Createbook;
