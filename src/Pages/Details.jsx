import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = ({setId}) => {
    const [data,setdata] = useState([]);
    const [deleteData, setDeleteData] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        fetchdata();
    },[deleteData])
   const  fetchdata= async()=>{
    await axios.get("https://6644d505b8925626f8902459.mockapi.io/api/user")
    .then((res)=>setdata(res.data))
    .catch(error=>console.log(error));
    }
    const handleClickEdit = (id)=>{
        setId(id);
        navigate(`/edit/${id}`);
    }
    const handleClickDelete = async(id)=>{
        await axios.delete(`https://6644d505b8925626f8902459.mockapi.io/api/user/${id}`)
        .then((res)=>setDeleteData(!deleteData))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">name</th>
      <th scope="col">Username</th>
      <th scope="col">Address</th>
      <th scope="col">Location</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Company Name</th>
      <th scope="col">Company catchPhrase</th>
      <th scope="col">Company bs</th>
      <th scope="col" colSpan={2}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((element,index)=>{
        return(
    <tr key={index}>
      <th scope="row">{element.id}</th>
      <td>{element.name}</td>
      <td>{element.username}</td>
      <td>{element.address.suite},{element.address.street},{element.address.city},{element.address.zipcode}</td>
      <td>{element.address.geo.lat},{element.address.geo.lng}</td>
      <td>{element.phone}</td>
      <td>{element.website}</td>
      <td>{element.company.name}</td>
      <td>{element.company.catchPhrase}</td>
      <td>{element.company.bs}</td>
      <td><button className='btn btn-warning' onClick={()=>handleClickEdit(element.id)}>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>{handleClickDelete(element.id)}}>Delete</button></td>
    </tr>
        );
    })}
  </tbody>
</table>
        </div>
    );
};

export default Details;