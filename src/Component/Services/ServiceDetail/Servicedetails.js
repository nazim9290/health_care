import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./single.css";

const Servicedetails = () => {
    const {pdid}=useParams();
    const [products,setProducts]=useState([])
   const [singleproduct,setSingleproduct]=useState({});

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/nazim9290/datajson/main/productdata.json")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    
useEffect(()=>{
    const productdetails=products.find(prd=>prd.id==pdid);
    setSingleproduct(productdetails)
},[products]);
    return (
        <div>
           <div className="card product mb-5 shadow">
  <img src={singleproduct?.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{singleproduct?.name}</h5>
    <p className="card-text">{singleproduct?.description}</p>
    <Link to="/appoint">Appoint Now</Link>
  </div>
</div>
        </div>
    );
};

export default Servicedetails;