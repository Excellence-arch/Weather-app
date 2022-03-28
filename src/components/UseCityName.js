import axios from 'axios';
import { useState } from 'react';
import ShowData from './ShowData';

const UseCityName = () => {

    // const [city_name, setCity_name] = useState("");
    const [name, setName] = useState("");
    const [showDets, setShowDets] = useState(false);
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [onlineData, setOnlineData] = useState([]);
    const API_key = `a637e45e8f3ebd138812a209da1c1b74`;
    // const API_key = process.env.REACT_APP_WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_key}`;

    const makeCall = () => {
        // setCity_name(name);
        axios.get(url).then(res => {
            setOnlineData(res.data);
            setLoading(false);
            setState(true);
            setError(null);
            console.log(res.data);
        }).catch((err) => {
            setLoading(false);
            setState(false);
            setError(err.message);
            console.log(err)
        });
    }


    const seeWeather = () => {
        setError(null)
        setLoading(true);
        setState(false);
        setShowDets(true);
        makeCall();
    }

  return (
    <>
        <input type="text" className="my-2 form-control" value={name} placeholder="Name of city" onChange={e => setName(e.target.value)} />
        <button className="btn btn-danger" onClick={seeWeather}>Look up City</button>
        {showDets && 
        <section className="container-fluid">
            <div className="row">
                <div className="col-6 container-fluid text-center mt-5">
                    {loading && <div className="text-warning animate__animated animate__BounceIn" >Your data is Loading</div> }
                    {error && <div className='text-danger animate__animated animate__heartBeat h2'>{error}</div>}
                    {onlineData.length !== 0 && 
                        <div>
                            {state && 
                            <ShowData onlineData={onlineData} />
                             } 
                        </div>}
                </div>
            </div>
        </section>
        }
    </>
  )
}

export default UseCityName;