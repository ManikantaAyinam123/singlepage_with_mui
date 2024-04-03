
import axios from "axios";
export const GetData = async (city) => {
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
       alert("Enter valid city name")
        console.error(' Api Error', error );
        
    }   
}

export const getTodo = async () => {
    const databaseUrl = "https://todo-1e7da-default-rtdb.asia-southeast1.firebasedatabase.app";
    try {
        const response = await axios.get(`${databaseUrl}/todos.json`);
        const jsonData = response.data;
        console.log("this is from firebase",jsonData);

        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    } catch (error) {
        console.error('Error fetching student data:', error);
        return [];
    }
}
export const newTodo= async (formData) => {
    const databaseUrl = "https://todo-1e7da-default-rtdb.asia-southeast1.firebasedatabase.app";
    try {
        if (formData.todoContent !== '' ) {
            const response = await axios.post(`${databaseUrl}/todos.json`, formData);
           
            console.log( 'This is form data in new todo',response.data);
        } else {
            alert('Please enter name and age');
        }
    } catch (error) {
        alert('Error storing data in Firebase:', error);
    }
}
export const deleteTodo = async (id) => {
    const databaseUrl = "https://todo-1e7da-default-rtdb.asia-southeast1.firebasedatabase.app";
    try{
        await axios.delete(`${databaseUrl}/todos/${id}.json`)
    }catch (error) {
        console.log('error occured')
      }
 }
  export const updateTodo =async(id,formdata) =>{
    const databaseUrl = "https://todo-1e7da-default-rtdb.asia-southeast1.firebasedatabase.app";
    try{
        await axios.put(`${databaseUrl}/todos/${id}.json`, formdata);
        console.log("form data in put",id);
        alert("data updated sucessfully")
    }
    catch(error){
        alert("error updating data",error)
    }

  }