import axios from 'axios';
import { useState, useEffect } from 'react';

// const call = api_call

const useAxios = (url, lon) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [onlineData, setOnlineData] = useState([]);
    

    useEffect(() => {
        axios.get(url).then((res)=> {
            setOnlineData(res.data);
            setIsLoading(false);
            console.log(res.data);
        }).catch((err) => {
            setIsLoading(false);
            setError(err.message);
            // console.log(err);
        });
    }, [lon]);

    return (
        {isLoading, error, onlineData}
        
        )
}

// export { make_call };
export default useAxios;

// import { useState } from 'react';
// const api_call = (url) => {

//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [onlineData, setOnlineData] = useState([]);

//     axios.get(url).then(res => {
//         setOnlineData(res.data);
//         setIsLoading(false);
//         console.log(res.data);
//     }).catch((err) => {
//         setIsLoading(false);
//         setError(err.message);
//     });

//     return {isLoading, error, onlineData}
// }

// export {api_call};