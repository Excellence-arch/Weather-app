

const ShowData = ({onlineData}) => {
    // console.log(onlineData);
  return (
    <>
        <p>Name: {onlineData.name} </p>
        <p>Weather : {onlineData.weather[0].description}</p>
        <p>Wind SPeed: {onlineData.wind.speed}m/s</p>
    </>
  )
}

export default ShowData;