import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Servicedetails = () => {
    const {id}=useParams();
    console.log(id);
    const [products,setProducts]=useState([])
   // const [singleproduct,setSingleproduct]=useState([]);

    useEffect(()=>{
        fetch("./data2.json")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    
// useEffect(()=>{
//     const productdetails=products.find(pd=>pd.id===id);
//     setSingleproduct(productdetails);
// },[products]);

console.log(products);
    return (
        <div>
            thhiis oahfojs
        </div>
    );
};

export default Servicedetails;