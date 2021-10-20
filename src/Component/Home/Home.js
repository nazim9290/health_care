import React from 'react';
import Banner from '../Banner/Banner';
import Covid from '../Covid/Covid';
import Oficehoure from '../OficeHour/Oficehoure';
import Services from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Banner/>
        <Services/>
        <Oficehoure/>
        <Covid/>
        </div>
    );
};

export default Home;