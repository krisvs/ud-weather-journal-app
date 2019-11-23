/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=95369f4ca68bc9aeb5bdfa6d2f3331fc';

document.getElementById('generate').addEventListener('click', performAction);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


function performAction(e){
  const zipCode = document.getElementById('zip').value;
  const userFeelings = document.getElementById('feelings').value;
 
  weatherData(baseURL, zipCode, apiKey)

  .then(function(data) {
    postData('/add', {temperature: data.main.temp, date: newDate, userResponse: userFeelings});
   
  })
}

const weatherData = async (baseURL, zipCode, key)=>{

  const res = await fetch(baseURL+zipCode+key)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}




const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch(error) {
    console.log('error', error);
  }
}


