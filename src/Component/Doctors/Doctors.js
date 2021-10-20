import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    const history = useHistory()

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/nazim9290/datajson/main/doctorlist.json")
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    const appointment=()=>{
        history.push("/appointment")
    }
    return (
        <div>
            <h1>Doctors</h1>
            <div className="row">
                {
                    doctors.map(doctor=>
                <div
                key={doctor.id}
                 className="col-md-4 shadow p-3 g-3 mt-3 service-container">
                    <div className="img">
        <img className="img-fluid" src={doctor.img} alt={doctor.name} />
                    </div>
                    <div className="p-2">
                        <h3 className="service-name">{doctor.name}</h3>
                        <div className="card-dis px-2">
                            Lorem, ipsu
                        </div>
                        <button className="btn btn-warning my-2" onClick={appointment}>appointment</button>
                    </div>
                </div>
                 ) }
            </div>
        </div>
    );
};

export default Doctors;