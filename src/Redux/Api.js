
import axios from "axios";
const GetData = async (city) => {
    try {
        const apikey = "dc39a16c8017d022b1d06fb775f7ddc6";
        // const city="mandapeta";
        console.log("city--->",city);
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await axios.get(`${baseURL}`);
        const jsonData = response.data;
        console.log('this is api data', jsonData)
        if (jsonData == null) {
            return [];
        } else {
            return jsonData; 
        }
    } catch (error) {
        console.error(' Api Error', error );
        
    }   
}
export default GetData;