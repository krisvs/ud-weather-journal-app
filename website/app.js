/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=95369f4ca68bc9aeb5bdfa6d2f3331fc';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zipCode =  document.getElementById('zip').value;
const userFeelings = document.getElementById('feelings').value;
weatherData(baseURL,zipCode, apiKey)

}
const weatherData = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


