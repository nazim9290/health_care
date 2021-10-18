import React from 'react';
import Banner from '../Banner/Banner';
import Oficehoure from '../OficeHour/Oficehoure';
import Services from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Banner/>
        <Services/>
        <Oficehoure/>
        </div>
    );
};

export default Home;