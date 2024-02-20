/* eslint-disable react/prop-types */

const AvailableBooks = ({details}) => {
  return (
    
      <div style={{backgroundColor:`${details.color}`,border:"none"}} className="card col-3">
        <div  className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p style={{fontSize:"2rem"}} className="card-text">
            {details.value}
          </p>
        </div>
      </div>
  );
};

export default AvailableBooks;
