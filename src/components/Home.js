import useAxios from '../useAxios';
import { useState, useEffect } from 'react';
import ShowData from './ShowData';
import { Link } from 'react-router-dom';


const Home = ({lat, lon}) => {
    const API_key = `a637e45e8f3ebd138812a209da1c1b74`;
    // const API_key = process.env.REACT_APP_WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    let {isLoading, error, onlineData} = useAxios(url, lon);


  return (
    <>
        <section className="container-fluid">
            <div className="row">
                <div className="col-6 container-fluid text-center mt-5">
                    {isLoading && <div className="text-warning animate__animated animate__BounceIn" >Your data is Loading</div> }
                    {error && <div className='text-danger animate__animated animate__heartBeat h2'>{error}</div>}
                    {onlineData.length !== 0 && 
                        <div>
                            <ShowData onlineData={onlineData} />
                        </div>}
                        <p className="mt-5">Do you want to search for a specific city?</p>
                        <p> <Link to="/name">Click Here</Link> </p>
                </div>
                    
            </div>
        </section>
    </>
  )
}

export default Home;