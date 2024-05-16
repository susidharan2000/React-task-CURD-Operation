import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata = async()=>{
    await axios.get("https://6644d505b8925626f8902459.mockapi.io/api/user")
    .then((res)=>setDetails(res.data))
    .catch(error=>console.log(error));
    }
  return (
    <>   
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-3 m-5">
{details.map((element,index)=>{
    return(
        <div key={index} className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-center">
              <h4 className="my-0 fw-normal">{element.username}</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li><p><span className="heading">Name: </span>{element.name}</p></li>
                <li><p><span className="heading">Email: </span>{element.email}</p></li>
                <li><p><span className="heading">Address: </span>{element.address.suite},{element.address.street},{element.address.city}</p></li>
                <li><span className="heading">ZipCode: </span>{element.address.zipcode}</li>
                <li><span className="heading">phone: </span>{element.phone}</li>
                <li><span className="heading">Webite: </span>{element.website}</li>
                <li><span className="heading">Company Name: </span>{element.company.name}</li>
                <li><span className="heading">Company catchPhrase: </span>{element.company.catchPhrase}</li>
                <li><span className="heading">Company bs: </span>{element.company.bs}</li>
              </ul>
            </div>
          </div>
        </div>);
    })}
      </div>
    </>
  );
};

export default Home;
