import React, { useEffect, useState } from 'react';
import "./Service.css";

const Service = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="container my-3">
            <h1>SERVICES</h1>
            <div className="row">
                {
                    services.map(pd=>
                <div
                key={pd.id}
                 className="col-md-4 shadow p-3 g-3 mt-3 service-container">
                    <div className="img">
        <img className="img-fluid" src={pd.img} alt={pd.name} />
                    </div>
                    <div className="p-2">
                        <h3 className="service-name">{pd.name}</h3>
                        <div className="card-dis px-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique officia, enim odio quos aspernatur iusto dolores amet necessitatibus tempore omnis, beatae aperiam quod fugit doloribus exercitationem officiis, fugiat eius mollitia.
                        </div>
                        <button className="btn btn-warning my-2">More Details</button>
                    </div>
                </div>
                 ) }
            </div>
            
        </div>

    );
};

export default Service;